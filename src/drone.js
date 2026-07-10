import * as THREE from 'three'
import { WORLD_BOUNDS } from './world.js'

const ACCEL = 34
const VERT_ACCEL = 26
const MAX_SPEED = 15
const MAX_VERT_SPEED = 9
const DAMPING = 3.2

export class DroneController {
  constructor(camera) {
    this.camera = camera
    this.camera.rotation.order = 'YXZ'
    this.velocity = new THREE.Vector3()
    this.keys = new Set()
    this.enabled = false

    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code)
      if (['Space', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault()
    })
    window.addEventListener('keyup', (e) => this.keys.delete(e.code))
    // 視窗失去焦點時（例如切換視窗、系統對話框彈出）可能收不到 keyup，
    // 清空按鍵避免「卡鍵」導致鬆手後仍持續移動或看似沒有反應。
    window.addEventListener('blur', () => this.keys.clear())

    document.addEventListener('mousemove', (e) => {
      if (!this.enabled) return
      this.camera.rotation.y -= e.movementX * 0.0022
      this.camera.rotation.x -= e.movementY * 0.0022
      this.camera.rotation.x = THREE.MathUtils.clamp(this.camera.rotation.x, -Math.PI / 2 + 0.05, Math.PI / 2 - 0.05)
    })
  }

  reset(position) {
    this.camera.position.copy(position)
    this.camera.rotation.set(-0.15, 0, 0)
    this.velocity.set(0, 0, 0)
  }

  update(dt, colliders) {
    const yaw = this.camera.rotation.y
    const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw))
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw))

    const input = new THREE.Vector3()
    if (this.enabled) {
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) input.add(forward)
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) input.sub(forward)
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) input.add(right)
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) input.sub(right)
      if (input.lengthSq() > 0) input.normalize()
      if (this.keys.has('Space')) input.y += 1
      if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) input.y -= 1
    }

    this.velocity.x += input.x * ACCEL * dt
    this.velocity.z += input.z * ACCEL * dt
    this.velocity.y += input.y * VERT_ACCEL * dt

    // 阻尼
    const damp = Math.exp(-DAMPING * dt)
    this.velocity.multiplyScalar(damp)

    // 限速
    const hSpeed = Math.hypot(this.velocity.x, this.velocity.z)
    if (hSpeed > MAX_SPEED) {
      this.velocity.x *= MAX_SPEED / hSpeed
      this.velocity.z *= MAX_SPEED / hSpeed
    }
    this.velocity.y = THREE.MathUtils.clamp(this.velocity.y, -MAX_VERT_SPEED, MAX_VERT_SPEED)

    // 逐軸移動 + 碰撞回退，避免穿牆
    const pos = this.camera.position
    for (const axis of ['x', 'y', 'z']) {
      pos[axis] += this.velocity[axis] * dt
      if (this._collides(pos, colliders)) {
        pos[axis] -= this.velocity[axis] * dt
        this.velocity[axis] = 0
      }
    }

    // 世界邊界與高度限制
    pos.x = THREE.MathUtils.clamp(pos.x, WORLD_BOUNDS.min.x, WORLD_BOUNDS.max.x)
    pos.y = THREE.MathUtils.clamp(pos.y, WORLD_BOUNDS.min.y, WORLD_BOUNDS.max.y)
    pos.z = THREE.MathUtils.clamp(pos.z, WORLD_BOUNDS.min.z, WORLD_BOUNDS.max.z)

    // 側移時機身微傾，增加飛行感
    const lateral = this.velocity.dot(new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw)))
    this.camera.rotation.z = THREE.MathUtils.lerp(this.camera.rotation.z, -lateral * 0.006, 1 - Math.exp(-8 * dt))
  }

  _collides(p, colliders) {
    for (const box of colliders) {
      if (box.containsPoint(p)) return true
    }
    return false
  }
}
