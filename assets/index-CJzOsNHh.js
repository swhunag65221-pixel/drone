(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="166",Il=0,sa=1,Dl=2,Rc=1,Cc=2,vn=3,zn=0,Ge=1,ve=2,On=0,Ui=1,oa=2,aa=3,ca=4,Ul=5,Jn=100,Nl=101,Fl=102,Ol=103,Bl=104,zl=200,kl=201,Hl=202,Gl=203,Ks=204,$s=205,Vl=206,Wl=207,Xl=208,ql=209,Yl=210,Kl=211,$l=212,jl=213,Zl=214,Jl=0,Ql=1,tu=2,ts=3,eu=4,nu=5,iu=6,ru=7,Pc=0,su=1,ou=2,Bn=0,au=1,cu=2,lu=3,uu=4,hu=5,du=6,fu=7,Lc=300,Oi=301,Bi=302,js=303,Zs=304,ls=306,ir=1e3,ti=1001,Js=1002,Ze=1003,pu=1004,pr=1005,rn=1006,_s=1007,ei=1008,Tn=1009,Ic=1010,Dc=1011,rr=1012,Do=1013,ri=1014,Mn=1015,ur=1016,Uo=1017,No=1018,zi=1020,Uc=35902,Nc=1021,Fc=1022,an=1023,Oc=1024,Bc=1025,Ni=1026,ki=1027,zc=1028,Fo=1029,kc=1030,Oo=1031,Bo=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Qs=35840,to=35841,eo=35842,no=35843,io=36196,ro=37492,so=37496,oo=37808,ao=37809,co=37810,lo=37811,uo=37812,ho=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,Mo=37821,Yr=36492,So=36494,yo=36495,Hc=36283,wo=36284,Eo=36285,To=36286,mu=3200,gu=3201,Gc=0,_u=1,Fn="",Ce="srgb",Hn="srgb-linear",zo="display-p3",us="display-p3-linear",es="linear",de="srgb",ns="rec709",is="p3",ui=7680,la=519,xu=512,vu=513,Mu=514,Vc=515,Su=516,yu=517,wu=518,Eu=519,bo=35044,ua="300 es",Sn=2e3,rs=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ha=1234567;const er=Math.PI/180,sr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function ko(i,t){return(i%t+t)%t}function Tu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function bu(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function Au(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function Ru(i,t=1){return t-Math.abs(ko(i,t*2)-t)}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Iu(i,t){return i+Math.random()*(t-i)}function Du(i){return i*(.5-Math.random())}function Uu(i){i!==void 0&&(ha=i);let t=ha+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(i){return i*er}function Fu(i){return i*sr}function Ou(i){return(i&i-1)===0&&i!==0}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),f=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hi={DEG2RAD:er,RAD2DEG:sr,generateUUID:wn,clamp:Oe,euclideanModulo:ko,mapLinear:Tu,inverseLerp:bu,lerp:nr,damp:Au,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Lu,randFloat:Iu,randFloatSpread:Du,seededRandom:Uu,degToRad:Nu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:ku,normalize:ae,denormalize:sn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,r,s,o,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],h=r[6],w=r[1],v=r[4],T=r[7],I=r[2],A=r[5],b=r[8];return s[0]=o*_+a*w+c*I,s[3]=o*m+a*v+c*A,s[6]=o*h+a*T+c*b,s[1]=l*_+u*w+f*I,s[4]=l*m+u*v+f*A,s[7]=l*h+u*T+f*b,s[2]=d*_+p*w+g*I,s[5]=d*m+p*v+g*A,s[8]=d*h+p*T+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=e*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xs.makeScale(t,e)),this}rotate(t){return this.premultiply(xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Wt;function Wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){const i=ss("canvas");return i.style.display="block",i}const da={};function Ho(i){i in da||(da[i]=!0,console.warn(i))}function Gu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const fa=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pa=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Hn]:{transfer:es,primaries:ns,toReference:i=>i,fromReference:i=>i},[Ce]:{transfer:de,primaries:ns,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[us]:{transfer:es,primaries:is,toReference:i=>i.applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa)},[zo]:{transfer:de,primaries:is,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pa),fromReference:i=>i.applyMatrix3(fa).convertLinearToSRGB()}},Vu=new Set([Hn,us]),ce={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=mr[t].toReference,r=mr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return mr[i].primaries},getTransfer:function(i){return i===Fn?es:mr[i].transfer}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=ss("canvas")),di.width=t.width,di.height=t.height;const n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xu=0;class Xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class ze extends Gi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=ti,r=ti,s=rn,o=ei,a=an,c=Tn,l=ze.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=wn(),this.name="",this.source=new Xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Js:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Js:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Lc;ze.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,T=(p+1)/2,I=(h+1)/2,A=(u+d)/4,b=(f+_)/4,F=(g+m)/4;return v>T&&v>I?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=b/n):T>I?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=A/r,s=F/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=b/s,r=F/s),this.set(n,r,s,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ze(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qc extends ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||l!==p||u!==g){let m=1-a;const h=c*d+l*p+u*g+f*_,w=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const I=Math.sqrt(v),A=Math.atan2(I,h*w);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const T=a*w;if(c=c*m+d*T,l=l*m+p*T,u=u*m+g*T,f=f*m+_*T,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=I,l*=I,u*=I,f*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*f+c*p-l*d,t[e+1]=c*g+u*d+l*f-a*p,t[e+2]=l*g+u*p+a*d-c*f,t[e+3]=u*g-a*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ma.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ma.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ss.copy(this).projectOnVector(t),this.sub(Ss)}reflect(t){return this.sub(Ss.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new N,ma=new hr;class Pe{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),_r.subVectors(this.max,Xi),fi.subVectors(t.a,Xi),pi.subVectors(t.b,Xi),mi.subVectors(t.c,Xi),Cn.subVectors(pi,fi),Pn.subVectors(mi,pi),Wn.subVectors(fi,mi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Wn.z,Wn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Wn.z,0,-Wn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Wn.y,Wn.x,0];return!ys(e,fi,pi,mi,_r)||(e=[1,0,0,0,1,0,0,0,1],!ys(e,fi,pi,mi,_r))?!1:(xr.crossVectors(Cn,Pn),e=[xr.x,xr.y,xr.z],ys(e,fi,pi,mi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,gr=new Pe,fi=new N,pi=new N,mi=new N,Cn=new N,Pn=new N,Wn=new N,Xi=new N,_r=new N,xr=new N,Xn=new N;function ys(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xn.fromArray(i,s);const a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const $u=new Pe,qi=new N,ws=new N;class hs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(qi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(ws)),this.expandByPoint(qi.copy(t.center).sub(ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,Es=new N,vr=new N,Ln=new N,Ts=new N,Mr=new N,bs=new N;class Go{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Es.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Es);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=Ln.dot(this.direction),c=-Ln.dot(vr),l=Ln.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Es).addScaledVector(vr,d),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,r,s){Ts.subVectors(e,t),Mr.subVectors(n,t),bs.crossVectors(Ts,Mr);let o=this.direction.dot(bs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const c=a*this.direction.dot(Mr.crossVectors(Ln,Mr));if(c<0)return null;const l=a*this.direction.dot(Ts.cross(Ln));if(l<0||c+l>o)return null;const u=-a*Ln.dot(bs);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,r,s,o,a,c,l,u,f,d,p,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,f,d,p,g,_,m)}set(t,e,n,r,s,o,a,c,l,u,f,d,p,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/gi.setFromMatrixColumn(t,0).length(),s=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,g=l*u,_=l*f;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,g=l*u,_=l*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*f,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+_,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Zu)}lookAt(t,e,n){const r=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),In.crossVectors(n,Xe),In.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),In.crossVectors(n,Xe)),In.normalize(),Sr.crossVectors(Xe,In),r[0]=In.x,r[4]=Sr.x,r[8]=Xe.x,r[1]=In.y,r[5]=Sr.y,r[9]=Xe.y,r[2]=In.z,r[6]=Sr.z,r[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],w=n[3],v=n[7],T=n[11],I=n[15],A=r[0],b=r[4],F=r[8],E=r[12],M=r[1],P=r[5],V=r[9],B=r[13],X=r[2],tt=r[6],$=r[10],it=r[14],j=r[3],mt=r[7],xt=r[11],dt=r[15];return s[0]=o*A+a*M+c*X+l*j,s[4]=o*b+a*P+c*tt+l*mt,s[8]=o*F+a*V+c*$+l*xt,s[12]=o*E+a*B+c*it+l*dt,s[1]=u*A+f*M+d*X+p*j,s[5]=u*b+f*P+d*tt+p*mt,s[9]=u*F+f*V+d*$+p*xt,s[13]=u*E+f*B+d*it+p*dt,s[2]=g*A+_*M+m*X+h*j,s[6]=g*b+_*P+m*tt+h*mt,s[10]=g*F+_*V+m*$+h*xt,s[14]=g*E+_*B+m*it+h*dt,s[3]=w*A+v*M+T*X+I*j,s[7]=w*b+v*P+T*tt+I*mt,s[11]=w*F+v*V+T*$+I*xt,s[15]=w*E+v*B+T*it+I*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+s*c*f-r*l*f-s*a*d+n*l*d+r*a*p-n*c*p)+_*(+e*c*p-e*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+e*l*f-e*a*p-s*o*f+n*o*p+s*a*u-n*l*u)+h*(-r*a*u-e*c*f+e*a*d+r*o*f-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],h=t[15],w=f*m*l-_*d*l+_*c*p-a*m*p-f*c*h+a*d*h,v=g*d*l-u*m*l-g*c*p+o*m*p+u*c*h-o*d*h,T=u*_*l-g*f*l+g*a*p-o*_*p-u*a*h+o*f*h,I=g*f*c-u*_*c-g*a*d+o*_*d+u*a*m-o*f*m,A=e*w+n*v+r*T+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=w*b,t[1]=(_*d*s-f*m*s-_*r*p+n*m*p+f*r*h-n*d*h)*b,t[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*h+n*c*h)*b,t[3]=(f*c*s-a*d*s-f*r*l+n*d*l+a*r*p-n*c*p)*b,t[4]=v*b,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*h+e*d*h)*b,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*h-e*c*h)*b,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*p+e*c*p)*b,t[8]=T*b,t[9]=(g*f*s-u*_*s-g*n*p+e*_*p+u*n*h-e*f*h)*b,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*h+e*a*h)*b,t[11]=(u*a*s-o*f*s-u*n*l+e*f*l+o*n*p-e*a*p)*b,t[12]=I*b,t[13]=(u*_*r-g*f*r+g*n*d-e*_*d-u*n*m+e*f*m)*b,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*m-e*a*m)*b,t[15]=(o*f*r-u*a*r+u*n*c-e*f*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,g=s*f,_=o*u,m=o*f,h=a*f,w=c*l,v=c*u,T=c*f,I=n.x,A=n.y,b=n.z;return r[0]=(1-(_+h))*I,r[1]=(p+T)*I,r[2]=(g-v)*I,r[3]=0,r[4]=(p-T)*A,r[5]=(1-(d+h))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+v)*b,r[9]=(m-w)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=gi.set(r[0],r[1],r[2]).length();const o=gi.set(r[4],r[5],r[6]).length(),a=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],en.copy(this);const l=1/s,u=1/o,f=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,e.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Sn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(a===Sn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rs)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Sn){const c=this.elements,l=1/(e-t),u=1/(n-r),f=1/(o-s),d=(e+t)*l,p=(n+r)*u;let g,_;if(a===Sn)g=(o+s)*f,_=-2*f;else if(a===rs)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new N,en=new pe,ju=new N(0,0,0),Zu=new N(1,1,1),In=new N,Sr=new N,Xe=new N,ga=new pe,_a=new hr;class hn{constructor(t=0,e=0,n=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ga.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ga,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _a.setFromEuler(this),this.setFromQuaternion(_a,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ju=0;const xa=new N,_i=new hr,gn=new pe,yr=new N,Yi=new N,Qu=new N,th=new hr,va=new N(1,0,0),Ma=new N(0,1,0),Sa=new N(0,0,1),ya={type:"added"},eh={type:"removed"},xi={type:"childadded",child:null},As={type:"childremoved",child:null};class Ee extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new N,e=new hn,n=new hr,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Wt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(va,t)}rotateY(t){return this.rotateOnAxis(Ma,t)}rotateZ(t){return this.rotateOnAxis(Sa,t)}translateOnAxis(t,e){return xa.copy(t).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(va,t)}translateY(t){return this.translateOnAxis(Ma,t)}translateZ(t){return this.translateOnAxis(Sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Yi,yr,this.up):gn.lookAt(yr,Yi,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(gn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ya),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh),As.child=t,this.dispatchEvent(As),As.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ya),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new N(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new N,_n=new N,Rs=new N,xn=new N,vi=new N,Mi=new N,wa=new N,Cs=new N,Ps=new N,Ls=new N;class on{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),nn.subVectors(t,e),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){nn.subVectors(r,e),_n.subVectors(n,e),Rs.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(_n),c=nn.dot(Rs),l=_n.dot(_n),u=_n.dot(Rs),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static isFrontFacing(t,e,n,r){return nn.subVectors(n,e),_n.subVectors(t,e),nn.cross(_n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),nn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;vi.subVectors(r,n),Mi.subVectors(s,n),Cs.subVectors(t,n);const c=vi.dot(Cs),l=Mi.dot(Cs);if(c<=0&&l<=0)return e.copy(n);Ps.subVectors(t,r);const u=vi.dot(Ps),f=Mi.dot(Ps);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(vi,o);Ls.subVectors(t,s);const p=vi.dot(Ls),g=Mi.dot(Ls);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Mi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return wa.subVectors(s,r),a=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(wa,a);const h=1/(m+_+d);return o=_*h,a=d*h,e.copy(n).addScaledVector(vi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Is(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=ko(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Is(o,s,t+1/3),this.g=Is(o,s,t),this.b=Is(o,s,t-1/3)}return ce.toWorkingColorSpace(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ce.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Oe(Ue.r*255,0,255))*65536+Math.round(Oe(Ue.g*255,0,255))*256+Math.round(Oe(Ue.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,r=Ue.g,s=Ue.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ce){ce.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,r=Ue.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(wr);const n=nr(Dn.h,wr.h,e),r=nr(Dn.s,wr.s,e),s=nr(Dn.l,wr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Yt;Yt.NAMES=Yc;let nh=0;class ci extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ui,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=$s,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Re extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new N,Er=new kt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ho("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bo&&(t.usage=this.usage),t}}class Kc extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $c extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ih=0;const je=new pe,Ds=new Ee,Si=new N,qe=new Pe,Ki=new Pe,Ae=new N;class ke extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?$c:Kc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Ds.lookAt(t),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(qe.min,Ki.min),qe.expandByPoint(Ae),Ae.addVectors(qe.max,Ki.max),qe.expandByPoint(Ae)):(qe.expandByPoint(Ki.min),qe.expandByPoint(Ki.max))}qe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ae.fromBufferAttribute(a,l),c&&(Si.fromBufferAttribute(t,l),Ae.add(Si)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new N,c[F]=new N;const l=new N,u=new N,f=new N,d=new kt,p=new kt,g=new kt,_=new N,m=new N;function h(F,E,M){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[F].add(_),a[E].add(_),a[M].add(_),c[F].add(m),c[E].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,E=w.length;F<E;++F){const M=w[F],P=M.start,V=M.count;for(let B=P,X=P+V;B<X;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new N,T=new N,I=new N,A=new N;function b(F){I.fromBufferAttribute(r,F),A.copy(I);const E=a[F];v.copy(E),v.sub(I.multiplyScalar(I.dot(E))).normalize(),T.crossVectors(A,E);const P=T.dot(c[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,P)}for(let F=0,E=w.length;F<E;++F){const M=w[F],P=M.start,V=M.count;for(let B=P,X=P+V;B<X;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Je(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ea=new pe,qn=new Go,Tr=new hs,Ta=new N,yi=new N,wi=new N,Ei=new N,Us=new N,br=new N,Ar=new kt,Rr=new kt,Cr=new kt,ba=new N,Aa=new N,Ra=new N,Pr=new N,Lr=new N;class R extends Ee{constructor(t=new ke,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Us.fromBufferAttribute(f,t),o?br.addScaledVector(Us,u):br.addScaledVector(Us.sub(e),u))}e.add(br)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),qn.copy(t.ray).recast(t.near),!(Tr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Tr,Ta)===null||qn.origin.distanceToSquared(Ta)>(t.far-t.near)**2))&&(Ea.copy(s).invert(),qn.copy(t.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,I=v;T<I;T+=3){const A=a.getX(T),b=a.getX(T+1),F=a.getX(T+2);r=Ir(this,h,t,n,l,u,f,A,b,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=a.getX(m),v=a.getX(m+1),T=a.getX(m+2);r=Ir(this,o,t,n,l,u,f,w,v,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,I=v;T<I;T+=3){const A=T,b=T+1,F=T+2;r=Ir(this,h,t,n,l,u,f,A,b,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=m,v=m+1,T=m+2;r=Ir(this,o,t,n,l,u,f,w,v,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function rh(i,t,e,n,r,s,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===zn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Lr);return l<e.near||l>e.far?null:{distance:l,point:Lr.clone(),object:i}}function Ir(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,yi),i.getVertexPosition(c,wi),i.getVertexPosition(l,Ei);const u=rh(i,t,e,n,yi,wi,Ei,Pr);if(u){r&&(Ar.fromBufferAttribute(r,a),Rr.fromBufferAttribute(r,c),Cr.fromBufferAttribute(r,l),u.uv=on.getInterpolation(Pr,yi,wi,Ei,Ar,Rr,Cr,new kt)),s&&(Ar.fromBufferAttribute(s,a),Rr.fromBufferAttribute(s,c),Cr.fromBufferAttribute(s,l),u.uv1=on.getInterpolation(Pr,yi,wi,Ei,Ar,Rr,Cr,new kt)),o&&(ba.fromBufferAttribute(o,a),Aa.fromBufferAttribute(o,c),Ra.fromBufferAttribute(o,l),u.normal=on.getInterpolation(Pr,yi,wi,Ei,ba,Aa,Ra,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};on.getNormal(yi,wi,Ei,f.normal),u.face=f}return u}class nt extends ke{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function g(_,m,h,w,v,T,I,A,b,F,E){const M=T/b,P=I/F,V=T/2,B=I/2,X=A/2,tt=b+1,$=F+1;let it=0,j=0;const mt=new N;for(let xt=0;xt<$;xt++){const dt=xt*P-B;for(let Ot=0;Ot<tt;Ot++){const qt=Ot*M-V;mt[_]=qt*w,mt[m]=dt*v,mt[h]=X,l.push(mt.x,mt.y,mt.z),mt[_]=0,mt[m]=0,mt[h]=A>0?1:-1,u.push(mt.x,mt.y,mt.z),f.push(Ot/b),f.push(1-xt/F),it+=1}}for(let xt=0;xt<F;xt++)for(let dt=0;dt<b;dt++){const Ot=d+dt+tt*xt,qt=d+dt+tt*(xt+1),Z=d+(dt+1)+tt*(xt+1),ct=d+(dt+1)+tt*xt;c.push(Ot,qt,ct),c.push(qt,Z,ct),j+=6}a.addGroup(p,j,E),p+=j,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const r in n)t[r]=n[r]}return t}function sh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const oh={clone:Hi,merge:Fe};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new N,Ca=new kt,Pa=new kt;class Ye extends Zc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Ca,Pa),e.subVectors(Pa,Ca)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,bi=1;class lh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ye(Ti,bi,t,e);r.layers=this.layers,this.add(r);const s=new Ye(Ti,bi,t,e);s.layers=this.layers,this.add(s);const o=new Ye(Ti,bi,t,e);o.layers=this.layers,this.add(o);const a=new Ye(Ti,bi,t,e);a.layers=this.layers,this.add(a);const c=new Ye(Ti,bi,t,e);c.layers=this.layers,this.add(c);const l=new Ye(Ti,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jc extends ze{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uh extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Jc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nt(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:On});s.uniforms.tEquirect.value=e;const o=new R(r,s),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=rn),new lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Ns=new N,hh=new N,dh=new Wt;class jn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ns.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ns),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dh.getNormalMatrix(t),r=this.coplanarPoint(Ns).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new hs,Dr=new N;class Wo{constructor(t=new jn,e=new jn,n=new jn,r=new jn,s=new jn,o=new jn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],w=r[13],v=r[14],T=r[15];if(n[0].setComponents(c-s,d-l,m-p,T-h).normalize(),n[1].setComponents(c+s,d+l,m+p,T+h).normalize(),n[2].setComponents(c+o,d+u,m+g,T+w).normalize(),n[3].setComponents(c-o,d-u,m-g,T-w).normalize(),n[4].setComponents(c-a,d-f,m-_,T-v).normalize(),e===Sn)n[5].setComponents(c+a,d+f,m+_,T+v).normalize();else if(e===rs)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Dr.x=r.normal.x>0?t.max.x:t.min.x,Dr.y=r.normal.y>0?t.max.y:t.min.y,Dr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function fh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),f.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class se extends ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const w=h*d-o;for(let v=0;v<l;v++){const T=v*f-s;g.push(T,-w,0),_.push(0,0,1),m.push(v/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<a;w++){const v=w+l*h,T=w+l*(h+1),I=w+1+l*(h+1),A=w+1+l*h;p.push(v,T,A),p.push(T,I,A)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.widthSegments,t.heightSegments)}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:xh,alphatest_pars_fragment:vh,aomap_fragment:Mh,aomap_pars_fragment:Sh,batching_pars_vertex:yh,batching_vertex:wh,begin_vertex:Eh,beginnormal_vertex:Th,bsdfs:bh,iridescence_fragment:Ah,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ch,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Ih,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Fh,common:Oh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:kh,displacementmap_vertex:Hh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Vh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:qh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:Kh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:od,envmap_vertex:jh,fog_vertex:Zh,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:rd,lights_pars_begin:sd,lights_toon_fragment:ad,lights_toon_pars_fragment:cd,lights_phong_fragment:ld,lights_phong_pars_fragment:ud,lights_physical_fragment:hd,lights_physical_pars_fragment:dd,lights_fragment_begin:fd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:vd,map_fragment:Md,map_pars_fragment:Sd,map_particle_fragment:yd,map_particle_pars_fragment:wd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphinstance_vertex:bd,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Id,normal_pars_fragment:Dd,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:kd,opaque_fragment:Hd,packing:Gd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:jd,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:tf,skinning_vertex:ef,skinnormal_vertex:nf,specularmap_fragment:rf,specularmap_pars_fragment:sf,tonemapping_fragment:of,tonemapping_pars_fragment:af,transmission_fragment:cf,transmission_pars_fragment:lf,uv_pars_fragment:uf,uv_pars_vertex:hf,uv_vertex:df,worldpos_vertex:ff,background_vert:pf,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:_f,cube_vert:xf,cube_frag:vf,depth_vert:Mf,depth_frag:Sf,distanceRGBA_vert:yf,distanceRGBA_frag:wf,equirect_vert:Ef,equirect_frag:Tf,linedashed_vert:bf,linedashed_frag:Af,meshbasic_vert:Rf,meshbasic_frag:Cf,meshlambert_vert:Pf,meshlambert_frag:Lf,meshmatcap_vert:If,meshmatcap_frag:Df,meshnormal_vert:Uf,meshnormal_frag:Nf,meshphong_vert:Ff,meshphong_frag:Of,meshphysical_vert:Bf,meshphysical_frag:zf,meshtoon_vert:kf,meshtoon_frag:Hf,points_vert:Gf,points_frag:Vf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:qf,sprite_frag:Yf},_t={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},un={basic:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Fe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Fe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Fe([_t.points,_t.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Fe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Fe([_t.common,_t.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Fe([_t.sprite,_t.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Fe([_t.common,_t.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Fe([_t.lights,_t.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};un.physical={uniforms:Fe([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ur={r:0,b:0,g:0},Kn=new hn,Kf=new pe;function $f(i,t,e,n,r,s,o){const a=new Yt(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function _(w){let v=!1;const T=g(w);T===null?h(a,c):T&&T.isColor&&(h(T,1),v=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===ls)?(u===void 0&&(u=new R(new nt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Hi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Kn.copy(v.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Kn)),u.material.toneMapped=ce.getTransfer(T.colorSpace)!==de,(f!==T||d!==T.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,d=T.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new R(new se(2,2),new kn({name:"BackgroundMaterial",uniforms:Hi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=T,d=T.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function h(w,v){w.getRGB(Ur,jc(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),c=v,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,h(a,c)},render:_,addToRenderList:m}}function jf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,P,V,B,X){let tt=!1;const $=f(B,V,P);s!==$&&(s=$,l(s.object)),tt=p(M,B,V,X),tt&&g(M,B,V,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,T(M,P,V,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,P,V){const B=V.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let tt=X[P.id];tt===void 0&&(tt={},X[P.id]=tt);let $=tt[B];return $===void 0&&($=d(c()),tt[B]=$),$}function d(M){const P=[],V=[],B=[];for(let X=0;X<e;X++)P[X]=0,V[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,V,B){const X=s.attributes,tt=P.attributes;let $=0;const it=V.getAttributes();for(const j in it)if(it[j].location>=0){const xt=X[j];let dt=tt[j];if(dt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),xt===void 0||xt.attribute!==dt||dt&&xt.data!==dt.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function g(M,P,V,B){const X={},tt=P.attributes;let $=0;const it=V.getAttributes();for(const j in it)if(it[j].location>=0){let xt=tt[j];xt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const dt={};dt.attribute=xt,xt&&xt.data&&(dt.data=xt.data),X[j]=dt,$++}s.attributes=X,s.attributesNum=$,s.index=B}function _(){const M=s.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function m(M){h(M,0)}function h(M,P){const V=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;V[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),X[M]!==P&&(i.vertexAttribDivisor(M,P),X[M]=P)}function w(){const M=s.newAttributes,P=s.enabledAttributes;for(let V=0,B=P.length;V<B;V++)P[V]!==M[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function v(M,P,V,B,X,tt,$){$===!0?i.vertexAttribIPointer(M,P,V,X,tt):i.vertexAttribPointer(M,P,V,B,X,tt)}function T(M,P,V,B){_();const X=B.attributes,tt=V.getAttributes(),$=P.defaultAttributeValues;for(const it in tt){const j=tt[it];if(j.location>=0){let mt=X[it];if(mt===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),mt!==void 0){const xt=mt.normalized,dt=mt.itemSize,Ot=t.get(mt);if(Ot===void 0)continue;const qt=Ot.buffer,Z=Ot.type,ct=Ot.bytesPerElement,St=Z===i.INT||Z===i.UNSIGNED_INT||mt.gpuType===Do;if(mt.isInterleavedBufferAttribute){const vt=mt.data,Dt=vt.stride,Bt=mt.offset;if(vt.isInstancedInterleavedBuffer){for(let zt=0;zt<j.locationSize;zt++)h(j.location+zt,vt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let zt=0;zt<j.locationSize;zt++)m(j.location+zt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let zt=0;zt<j.locationSize;zt++)v(j.location+zt,dt/j.locationSize,Z,xt,Dt*ct,(Bt+dt/j.locationSize*zt)*ct,St)}else{if(mt.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)h(j.location+vt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let vt=0;vt<j.locationSize;vt++)m(j.location+vt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let vt=0;vt<j.locationSize;vt++)v(j.location+vt,dt/j.locationSize,Z,xt,dt*ct,dt/j.locationSize*vt*ct,St)}}else if($!==void 0){const xt=$[it];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(j.location,xt);break;case 3:i.vertexAttrib3fv(j.location,xt);break;case 4:i.vertexAttrib4fv(j.location,xt);break;default:i.vertexAttrib1fv(j.location,xt)}}}}w()}function I(){F();for(const M in n){const P=n[M];for(const V in P){const B=P[V];for(const X in B)u(B[X].object),delete B[X];delete P[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const V in P){const B=P[V];for(const X in B)u(B[X].object),delete B[X];delete P[V]}delete n[M.id]}function b(M){for(const P in n){const V=n[P];if(V[M.id]===void 0)continue;const B=V[M.id];for(const X in B)u(B[X].object),delete B[X];delete V[M.id]}}function F(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Zf(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!b)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:T,maxSamples:I}}function Qf(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new jn,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:n,v=w*4;let T=h.clippingState||null;c.value=T,T=u(g,d,v,p);for(let I=0;I!==v;++I)T[I]=e[I];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,T=p;v!==_;++v,T+=4)o.copy(f[v]).applyMatrix4(w,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function tp(i){let t=new WeakMap;function e(o,a){return a===js?o.mapping=Oi:a===Zs&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===js||a===Zs)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new uh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class tl extends Zc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,La=[.125,.215,.35,.446,.526,.582],Qn=20,Fs=new tl,Ia=new Yt;let Os=null,Bs=0,zs=0,ks=!1;const Zn=(1+Math.sqrt(5))/2,Ai=1/Zn,Da=[new N(-Zn,Ai,0),new N(Zn,Ai,0),new N(-Ai,0,Zn),new N(Ai,0,Zn),new N(0,Zn,-Ai),new N(0,Zn,Ai),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Os,Bs,zs),this._renderer.xr.enabled=ks,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ur,format:an,colorSpace:Hn,depthBuffer:!1},r=Na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(s)),this._blurMaterial=np(s,t,e)}return r}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Fs)}_sceneToCubeUV(t,e,n,r){const a=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ia),u.toneMapping=Bn,u.autoClear=!1;const p=new Re({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new R(new nt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ia),_=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):w===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const v=this._cubeSize;Nr(r,w*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Oi||t.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Da[(r-s-1)%Da.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new R(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Qn;m>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const h=[];let w=0;for(let b=0;b<Qn;++b){const F=b/_,E=Math.exp(-F*F/2);h.push(E),b===0?w+=E:b<m&&(w+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const T=this._sizeLods[r],I=3*T*(r>v-Di?r-v+Di:0),A=4*(this._cubeSize-T);Nr(e,I,A,3*T,2*T),c.setRenderTarget(e),c.render(f,Fs)}}function ep(i){const t=[],e=[],n=[];let r=i;const s=i-Di+1+La.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Di?c=La[o-i+Di-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,w=new Float32Array(_*g*p),v=new Float32Array(m*g*p),T=new Float32Array(h*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,F=A>2?0:-1,E=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];w.set(E,_*g*A),v.set(d,m*g*A);const M=[A,A,A,A,A,A];T.set(M,h*g*A)}const I=new ke;I.setAttribute("position",new Je(w,_)),I.setAttribute("uv",new Je(v,m)),I.setAttribute("faceIndex",new Je(T,h)),t.push(I),r>Di&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Na(i,t,e){const n=new si(i,t,e);return n.texture.mapping=ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function np(i,t,e){const n=new Float32Array(Qn),r=new N(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Fa(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Oa(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===js||c===Zs,u=c===Oi||c===Bi;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ua(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Ua(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ho("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sp(i,t,e,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let v=0,T=w.length;v<T;v+=3){const I=w[v+0],A=w[v+1],b=w[v+2];d.push(I,A,A,b,b,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,T=w.length/3-1;v<T;v+=3){const I=v+0,A=v+1,b=v+2;d.push(I,A,A,b,b,I)}}else return;const m=new(Wc(d)?$c:Kc)(d,1);m.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function op(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w];for(let w=0;w<_.length;w++)e.update(h,n,_[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ap(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function cp(i,t,e){const n=new WeakMap,r=new we;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let M=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let I=a.attributes.position.count*T,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const b=new Float32Array(I*A*4*f),F=new qc(b,I,A,f);F.type=Mn,F.needsUpdate=!0;const E=T*4;for(let P=0;P<f;P++){const V=h[P],B=w[P],X=v[P],tt=I*A*4*P;for(let $=0;$<V.count;$++){const it=$*E;g===!0&&(r.fromBufferAttribute(V,$),b[tt+it+0]=r.x,b[tt+it+1]=r.y,b[tt+it+2]=r.z,b[tt+it+3]=0),_===!0&&(r.fromBufferAttribute(B,$),b[tt+it+4]=r.x,b[tt+it+5]=r.y,b[tt+it+6]=r.z,b[tt+it+7]=0),m===!0&&(r.fromBufferAttribute(X,$),b[tt+it+8]=r.x,b[tt+it+9]=r.y,b[tt+it+10]=r.z,b[tt+it+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:F,size:new kt(I,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function lp(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class el extends ze{constructor(t,e,n,r,s,o,a,c,l,u=Ni){if(u!==Ni&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=ri),n===void 0&&u===ki&&(n=zi),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nl=new ze,Ba=new el(1,1),il=new qc,rl=new Ku,sl=new Jc,za=[],ka=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=za[r];if(s===void 0&&(s=new Float32Array(r),za[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ds(i,t){let e=ka[t];e===void 0&&(e=new Int32Array(t),ka[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;Va.set(n),i.uniformMatrix2fv(this.addr,!1,Va),be(e,n)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),be(e,n)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;Ha.set(n),i.uniformMatrix4fv(this.addr,!1,Ha),be(e,n)}}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Sp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Tp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=Vc,s=Ba):s=nl,e.setTexture2D(t||s,r)}function bp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rl,r)}function Ap(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sl,r)}function Rp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||il,r)}function Cp(i){switch(i){case 5126:return up;case 35664:return hp;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return yp;case 36295:return wp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}function Pp(i,t){i.uniform1fv(this.addr,t)}function Lp(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ip(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Dp(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Up(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Np(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fp(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Op(i,t){i.uniform1iv(this.addr,t)}function Bp(i,t){i.uniform2iv(this.addr,t)}function zp(i,t){i.uniform3iv(this.addr,t)}function kp(i,t){i.uniform4iv(this.addr,t)}function Hp(i,t){i.uniform1uiv(this.addr,t)}function Gp(i,t){i.uniform2uiv(this.addr,t)}function Vp(i,t){i.uniform3uiv(this.addr,t)}function Wp(i,t){i.uniform4uiv(this.addr,t)}function Xp(i,t,e){const n=this.cache,r=t.length,s=ds(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||nl,s[o])}function qp(i,t,e){const n=this.cache,r=t.length,s=ds(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||rl,s[o])}function Yp(i,t,e){const n=this.cache,r=t.length,s=ds(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||sl,s[o])}function Kp(i,t,e){const n=this.cache,r=t.length,s=ds(e,r);Te(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||il,s[o])}function $p(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Kp}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cp(e.type)}}class Zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$p(e.type)}}class Jp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Hs=/(\w+)(\])?(\[|\.)?/g;function Wa(i,t){i.seq.push(t),i.map[t.id]=t}function Qp(i,t,e){const n=i.name,r=n.length;for(Hs.lastIndex=0;;){const s=Hs.exec(n),o=Hs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Wa(e,l===void 0?new jp(a,i,t):new Zp(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Jp(a),Wa(e,f)),e=f}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Qp(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Xa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tm=37297;let em=0;function nm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function im(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===is&&e===ns?n="LinearDisplayP3ToLinearSRGB":t===ns&&e===is&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case us:return[n,"LinearTransferOETF"];case Ce:case zo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+nm(i.getShaderSource(t),o)}else return r}function rm(i,t){const e=im(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sm(i,t){let e;switch(t){case au:e="Linear";break;case cu:e="Reinhard";break;case lu:e="OptimizedCineon";break;case uu:e="ACESFilmic";break;case du:e="AgX";break;case fu:e="Neutral";break;case hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qi(i){return i!==""}function Ya(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ka(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(lm,hm)}const um=new Map;function hm(i,t){let e=Vt[t];if(e===void 0){const n=um.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(i){return i.replace(dm,fm)}function fm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function _m(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ou:t="ENVMAP_BLENDING_ADD";break}return t}function xm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vm(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=pm(e),l=mm(e),u=gm(e),f=_m(e),d=xm(e),p=om(e),g=am(s),_=r.createProgram();let m,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),h.length>0&&(h+=`
`)):(m=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),h=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Ao(o),o=Ya(o,e),o=Ka(o,e),a=Ao(a),a=Ya(a,e),a=Ka(a,e),o=$a(o),a=$a(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=w+m+o,T=w+h+a,I=Xa(r,r.VERTEX_SHADER,v),A=Xa(r,r.FRAGMENT_SHADER,T);r.attachShader(_,I),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(P){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(A).trim();let tt=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,I,A);else{const it=qa(r,I,"vertex"),j=qa(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+it+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||X==="")&&($=!1);$&&(P.diagnostics={runnable:tt,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(I),r.deleteShader(A),F=new Kr(r,_),E=cm(r,_)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,tm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=em++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let Mm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ym(t),e.set(t,n)),n}}class ym{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}}function wm(i,t,e,n,r,s,o){const a=new Vo,c=new Sm,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,V,B){const X=V.fog,tt=B.geometry,$=E.isMeshStandardMaterial?V.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),j=it&&it.mapping===ls?it.image.height:null,mt=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const xt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,dt=xt!==void 0?xt.length:0;let Ot=0;tt.morphAttributes.position!==void 0&&(Ot=1),tt.morphAttributes.normal!==void 0&&(Ot=2),tt.morphAttributes.color!==void 0&&(Ot=3);let qt,Z,ct,St;if(mt){const te=un[mt];qt=te.vertexShader,Z=te.fragmentShader}else qt=E.vertexShader,Z=E.fragmentShader,c.update(E),ct=c.getVertexShaderID(E),St=c.getFragmentShaderID(E);const vt=i.getRenderTarget(),Dt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,zt=!!E.map,oe=!!E.matcap,C=!!it,le=!!E.aoMap,$t=!!E.lightMap,jt=!!E.bumpMap,wt=!!E.normalMap,W=!!E.displacementMap,st=!!E.emissiveMap,ot=!!E.metalnessMap,S=!!E.roughnessMap,x=E.anisotropy>0,L=E.clearcoat>0,q=E.dispersion>0,J=E.iridescence>0,Y=E.sheen>0,pt=E.transmission>0,at=x&&!!E.anisotropyMap,lt=L&&!!E.clearcoatMap,Rt=L&&!!E.clearcoatNormalMap,z=L&&!!E.clearcoatRoughnessMap,K=J&&!!E.iridescenceMap,At=J&&!!E.iridescenceThicknessMap,yt=Y&&!!E.sheenColorMap,gt=Y&&!!E.sheenRoughnessMap,It=!!E.specularMap,Ct=!!E.specularColorMap,ue=!!E.specularIntensityMap,D=pt&&!!E.transmissionMap,ut=pt&&!!E.thicknessMap,et=!!E.gradientMap,rt=!!E.alphaMap,ft=E.alphaTest>0,Ut=!!E.alphaHash,Zt=!!E.extensions;let Me=Bn;E.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Le={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:Z,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Hn,alphaToCoverage:!!E.alphaToCoverage,map:zt,matcap:oe,envMap:C,envMapMode:C&&it.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:$t,bumpMap:jt,normalMap:wt,displacementMap:d&&W,emissiveMap:st,normalMapObjectSpace:wt&&E.normalMapType===_u,normalMapTangentSpace:wt&&E.normalMapType===Gc,metalnessMap:ot,roughnessMap:S,anisotropy:x,anisotropyMap:at,clearcoat:L,clearcoatMap:lt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:z,dispersion:q,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:yt,sheenRoughnessMap:gt,specularMap:It,specularColorMap:Ct,specularIntensityMap:ue,transmission:pt,transmissionMap:D,thicknessMap:ut,gradientMap:et,opaque:E.transparent===!1&&E.blending===Ui&&E.alphaToCoverage===!1,alphaMap:rt,alphaTest:ft,alphaHash:Ut,combine:E.combine,mapUv:zt&&_(E.map.channel),aoMapUv:le&&_(E.aoMap.channel),lightMapUv:$t&&_(E.lightMap.channel),bumpMapUv:jt&&_(E.bumpMap.channel),normalMapUv:wt&&_(E.normalMap.channel),displacementMapUv:W&&_(E.displacementMap.channel),emissiveMapUv:st&&_(E.emissiveMap.channel),metalnessMapUv:ot&&_(E.metalnessMap.channel),roughnessMapUv:S&&_(E.roughnessMap.channel),anisotropyMapUv:at&&_(E.anisotropyMap.channel),clearcoatMapUv:lt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(E.sheenRoughnessMap.channel),specularMapUv:It&&_(E.specularMap.channel),specularColorMapUv:Ct&&_(E.specularColorMap.channel),specularIntensityMapUv:ue&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:ut&&_(E.thicknessMap.channel),alphaMapUv:rt&&_(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(wt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!tt.attributes.uv&&(zt||rt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:zt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ve,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(w(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function T(E){const M=g[E.type];let P;if(M){const V=un[M];P=oh.clone(V.uniforms)}else P=E.uniforms;return P}function I(E,M){let P;for(let V=0,B=u.length;V<B;V++){const X=u[V];if(X.cacheKey===M){P=X,++P.usedTimes;break}}return P===void 0&&(P=new vm(i,M,E,s),u.push(P)),P}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:T,acquireProgram:I,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:F}}function Em(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Za(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ja(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,d,p,g,_,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),t++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||Tm),n.length>1&&n.sort(d||Za),r.length>1&&r.sort(d||Za)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function bm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ja,i.set(n,[o])):r>=s.length?(o=new Ja,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Yt};break;case"SpotLight":e={position:new N,direction:new N,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Rm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cm=0;function Pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lm(i){const t=new Am,e=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new pe,o=new pe;function a(l){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,w=0,v=0,T=0,I=0,A=0,b=0;l.sort(Pm);for(let E=0,M=l.length;E<M;E++){const P=l[E],V=P.color,B=P.intensity,X=P.distance,tt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*B,f+=V.g*B,d+=V.b*B;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],B);b++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,j=e.get(P);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=$,p++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(V).multiplyScalar(B),$.distance=X,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[_]=$;const it=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,it.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=it.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=tt,T++}_++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(V).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=$,m++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const it=P.shadow,j=e.get(P);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,j.shadowCameraNear=it.camera.near,j.shadowCameraFar=it.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=$,g++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(B),$.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[h]=$,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==w||F.numPointShadows!==v||F.numSpotShadows!==T||F.numSpotMaps!==I||F.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=T+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=w,F.numPointShadows=v,F.numSpotShadows=T,F.numSpotMaps=I,F.numLightProbes=b,n.version=Cm++)}function c(l,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const v=l[h];if(v.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(v.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Qa(i){const t=new Lm(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Im(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Qa(i),t.set(r,[a])):s>=o.length?(a=new Qa(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dm extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Um extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Om(i,t,e){let n=new Wo;const r=new kt,s=new kt,o=new we,a=new Dm({depthPacking:gu}),c=new Um,l={},u=e.maxTextureSize,f={[zn]:Ge,[Ge]:zn,[ve]:ve},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Nm,fragmentShader:Fm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new R(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let h=this.type;this.render=function(A,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(On),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=h!==vn&&this.type===vn,X=h===vn&&this.type!==vn;for(let tt=0,$=A.length;tt<$;tt++){const it=A[tt],j=it.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const mt=j.getFrameExtents();if(r.multiply(mt),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/mt.x),r.x=s.x*mt.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/mt.y),r.y=s.y*mt.y,j.mapSize.y=s.y)),j.map===null||B===!0||X===!0){const dt=this.type!==vn?{minFilter:Ze,magFilter:Ze}:{};j.map!==null&&j.map.dispose(),j.map=new si(r.x,r.y,dt),j.map.texture.name=it.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const xt=j.getViewportCount();for(let dt=0;dt<xt;dt++){const Ot=j.getViewport(dt);o.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),V.viewport(o),j.updateMatrices(it,dt),n=j.getFrustum(),T(b,F,j.camera,it,this.type)}j.isPointLightShadow!==!0&&this.type===vn&&w(j,F),j.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,P)};function w(A,b){const F=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,F,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,F,p,_,null)}function v(A,b,F,E){let M=null;const P=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=M.uuid,B=b.uuid;let X=l[V];X===void 0&&(X={},l[V]=X);let tt=X[B];tt===void 0&&(tt=M.clone(),X[B]=tt,b.addEventListener("dispose",I)),M=tt}if(M.visible=b.visible,M.wireframe=b.wireframe,E===vn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=F}return M}function T(A,b,F,E,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const tt=B.groups;for(let $=0,it=tt.length;$<it;$++){const j=tt[$],mt=X[j.materialIndex];if(mt&&mt.visible){const xt=v(A,mt,E,M);A.onBeforeShadow(i,A,b,F,B,xt,j),i.renderBufferDirect(F,null,B,xt,A,j),A.onAfterShadow(i,A,b,F,B,xt,j)}}}else if(X.visible){const tt=v(A,X,E,M);A.onBeforeShadow(i,A,b,F,B,tt,null),i.renderBufferDirect(F,null,B,tt,A,null),A.onAfterShadow(i,A,b,F,B,tt,null)}}const V=A.children;for(let B=0,X=V.length;B<X;B++)T(V[B],b,F,E,M)}function I(A){A.target.removeEventListener("dispose",I);for(const F in l){const E=l[F],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Bm(i){function t(){let D=!1;const ut=new we;let et=null;const rt=new we(0,0,0,0);return{setMask:function(ft){et!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),et=ft)},setLocked:function(ft){D=ft},setClear:function(ft,Ut,Zt,Me,Le){Le===!0&&(ft*=Me,Ut*=Me,Zt*=Me),ut.set(ft,Ut,Zt,Me),rt.equals(ut)===!1&&(i.clearColor(ft,Ut,Zt,Me),rt.copy(ut))},reset:function(){D=!1,et=null,rt.set(-1,0,0,0)}}}function e(){let D=!1,ut=null,et=null,rt=null;return{setTest:function(ft){ft?St(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(ft){ut!==ft&&!D&&(i.depthMask(ft),ut=ft)},setFunc:function(ft){if(et!==ft){switch(ft){case Jl:i.depthFunc(i.NEVER);break;case Ql:i.depthFunc(i.ALWAYS);break;case tu:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case eu:i.depthFunc(i.EQUAL);break;case nu:i.depthFunc(i.GEQUAL);break;case iu:i.depthFunc(i.GREATER);break;case ru:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ft}},setLocked:function(ft){D=ft},setClear:function(ft){rt!==ft&&(i.clearDepth(ft),rt=ft)},reset:function(){D=!1,ut=null,et=null,rt=null}}}function n(){let D=!1,ut=null,et=null,rt=null,ft=null,Ut=null,Zt=null,Me=null,Le=null;return{setTest:function(te){D||(te?St(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(te){ut!==te&&!D&&(i.stencilMask(te),ut=te)},setFunc:function(te,fn,ln){(et!==te||rt!==fn||ft!==ln)&&(i.stencilFunc(te,fn,ln),et=te,rt=fn,ft=ln)},setOp:function(te,fn,ln){(Ut!==te||Zt!==fn||Me!==ln)&&(i.stencilOp(te,fn,ln),Ut=te,Zt=fn,Me=ln)},setLocked:function(te){D=te},setClear:function(te){Le!==te&&(i.clearStencil(te),Le=te)},reset:function(){D=!1,ut=null,et=null,rt=null,ft=null,Ut=null,Zt=null,Me=null,Le=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,w=null,v=null,T=null,I=null,A=new Yt(0,0,0),b=0,F=!1,E=null,M=null,P=null,V=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,$=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(it)[1]),tt=$>=1):it.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),tt=$>=2);let j=null,mt={};const xt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Ot=new we().fromArray(xt),qt=new we().fromArray(dt);function Z(D,ut,et,rt){const ft=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(D,Ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<et;Zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ut+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return Ut}const ct={};ct[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),St(i.DEPTH_TEST),s.setFunc(ts),jt(!1),wt(sa),St(i.CULL_FACE),le(On);function St(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function vt(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Dt(D,ut){return u[D]!==ut?(i.bindFramebuffer(D,ut),u[D]=ut,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Bt(D,ut){let et=d,rt=!1;if(D){et=f.get(ut),et===void 0&&(et=[],f.set(ut,et));const ft=D.textures;if(et.length!==ft.length||et[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,Zt=ft.length;Ut<Zt;Ut++)et[Ut]=i.COLOR_ATTACHMENT0+Ut;et.length=ft.length,rt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,rt=!0);rt&&i.drawBuffers(et)}function zt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const oe={[Jn]:i.FUNC_ADD,[Nl]:i.FUNC_SUBTRACT,[Fl]:i.FUNC_REVERSE_SUBTRACT};oe[Ol]=i.MIN,oe[Bl]=i.MAX;const C={[zl]:i.ZERO,[kl]:i.ONE,[Hl]:i.SRC_COLOR,[Ks]:i.SRC_ALPHA,[Yl]:i.SRC_ALPHA_SATURATE,[Xl]:i.DST_COLOR,[Vl]:i.DST_ALPHA,[Gl]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[ql]:i.ONE_MINUS_DST_COLOR,[Wl]:i.ONE_MINUS_DST_ALPHA,[Kl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[Zl]:i.ONE_MINUS_CONSTANT_ALPHA};function le(D,ut,et,rt,ft,Ut,Zt,Me,Le,te){if(D===On){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(St(i.BLEND),g=!0),D!==Ul){if(D!==_||te!==F){if((m!==Jn||v!==Jn)&&(i.blendEquation(i.FUNC_ADD),m=Jn,v=Jn),te)switch(D){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,w=null,T=null,I=null,A.set(0,0,0),b=0,_=D,F=te}return}ft=ft||ut,Ut=Ut||et,Zt=Zt||rt,(ut!==m||ft!==v)&&(i.blendEquationSeparate(oe[ut],oe[ft]),m=ut,v=ft),(et!==h||rt!==w||Ut!==T||Zt!==I)&&(i.blendFuncSeparate(C[et],C[rt],C[Ut],C[Zt]),h=et,w=rt,T=Ut,I=Zt),(Me.equals(A)===!1||Le!==b)&&(i.blendColor(Me.r,Me.g,Me.b,Le),A.copy(Me),b=Le),_=D,F=!1}function $t(D,ut){D.side===ve?vt(i.CULL_FACE):St(i.CULL_FACE);let et=D.side===Ge;ut&&(et=!et),jt(et),D.blending===Ui&&D.transparent===!1?le(On):le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const rt=D.stencilWrite;o.setTest(rt),rt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function wt(D){D!==Il?(St(i.CULL_FACE),D!==M&&(D===sa?i.cullFace(i.BACK):D===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),M=D}function W(D){D!==P&&(tt&&i.lineWidth(D),P=D)}function st(D,ut,et){D?(St(i.POLYGON_OFFSET_FILL),(V!==ut||B!==et)&&(i.polygonOffset(ut,et),V=ut,B=et)):vt(i.POLYGON_OFFSET_FILL)}function ot(D){D?St(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function S(D){D===void 0&&(D=i.TEXTURE0+X-1),j!==D&&(i.activeTexture(D),j=D)}function x(D,ut,et){et===void 0&&(j===null?et=i.TEXTURE0+X-1:et=j);let rt=mt[et];rt===void 0&&(rt={type:void 0,texture:void 0},mt[et]=rt),(rt.type!==D||rt.texture!==ut)&&(j!==et&&(i.activeTexture(et),j=et),i.bindTexture(D,ut||ct[D]),rt.type=D,rt.texture=ut)}function L(){const D=mt[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(D){Ot.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ot.copy(D))}function gt(D){qt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function It(D,ut){let et=c.get(ut);et===void 0&&(et=new WeakMap,c.set(ut,et));let rt=et.get(D);rt===void 0&&(rt=i.getUniformBlockIndex(ut,D.name),et.set(D,rt))}function Ct(D,ut){const rt=c.get(ut).get(D);a.get(ut)!==rt&&(i.uniformBlockBinding(ut,rt,D.__bindingPointIndex),a.set(ut,rt))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},j=null,mt={},u={},f=new WeakMap,d=[],p=null,g=!1,_=null,m=null,h=null,w=null,v=null,T=null,I=null,A=new Yt(0,0,0),b=0,F=!1,E=null,M=null,P=null,V=null,B=null,Ot.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:St,disable:vt,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:zt,setBlending:le,setMaterial:$t,setFlipSided:jt,setCullFace:wt,setLineWidth:W,setPolygonOffset:st,setScissorTest:ot,activeTexture:S,bindTexture:x,unbindTexture:L,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:K,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:z,texSubImage2D:Y,texSubImage3D:pt,compressedTexSubImage2D:at,compressedTexSubImage3D:lt,scissor:yt,viewport:gt,reset:ue}}function tc(i,t,e,n){const r=zm(n);switch(e){case Nc:return i*t;case Oc:return i*t;case Bc:return i*t*2;case zc:return i*t/r.components*r.byteLength;case Fo:return i*t/r.components*r.byteLength;case kc:return i*t*2/r.components*r.byteLength;case Oo:return i*t*2/r.components*r.byteLength;case Fc:return i*t*3/r.components*r.byteLength;case an:return i*t*4/r.components*r.byteLength;case Bo:return i*t*4/r.components*r.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(i,16)*Math.max(t,8)/4;case Qs:case eo:return Math.max(i,8)*Math.max(t,8)/2;case io:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yr:case So:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hc:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Eo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case Tn:case Ic:return{byteLength:1,components:1};case rr:case Dc:case ur:return{byteLength:2,components:1};case Uo:case No:return{byteLength:2,components:4};case ri:case Do:case Mn:return{byteLength:4,components:1};case Uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function km(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return p?new OffscreenCanvas(S,x):ss("canvas")}function _(S,x,L){let q=1;const J=ot(S);if((J.width>L||J.height>L)&&(q=L/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Y=Math.floor(q*J.width),pt=Math.floor(q*J.height);f===void 0&&(f=g(Y,pt));const at=x?g(Y,pt):f;return at.width=Y,at.height=pt,at.getContext("2d").drawImage(S,0,0,Y,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+pt+")."),at}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==Ze&&S.minFilter!==rn}function h(S){i.generateMipmap(S)}function w(S,x,L,q,J=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=x;if(x===i.RED&&(L===i.FLOAT&&(Y=i.R32F),L===i.HALF_FLOAT&&(Y=i.R16F),L===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.R8UI),L===i.UNSIGNED_SHORT&&(Y=i.R16UI),L===i.UNSIGNED_INT&&(Y=i.R32UI),L===i.BYTE&&(Y=i.R8I),L===i.SHORT&&(Y=i.R16I),L===i.INT&&(Y=i.R32I)),x===i.RG&&(L===i.FLOAT&&(Y=i.RG32F),L===i.HALF_FLOAT&&(Y=i.RG16F),L===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RG8UI),L===i.UNSIGNED_SHORT&&(Y=i.RG16UI),L===i.UNSIGNED_INT&&(Y=i.RG32UI),L===i.BYTE&&(Y=i.RG8I),L===i.SHORT&&(Y=i.RG16I),L===i.INT&&(Y=i.RG32I)),x===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const pt=J?es:ce.getTransfer(q);L===i.FLOAT&&(Y=i.RGBA32F),L===i.HALF_FLOAT&&(Y=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Y=pt===de?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(S,x){let L;return S?x===null||x===ri||x===zi?L=i.DEPTH24_STENCIL8:x===Mn?L=i.DEPTH32F_STENCIL8:x===rr&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ri||x===zi?L=i.DEPTH_COMPONENT24:x===Mn?L=i.DEPTH_COMPONENT32F:x===rr&&(L=i.DEPTH_COMPONENT16),L}function T(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ze&&S.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function I(S){const x=S.target;x.removeEventListener("dispose",I),b(x),x.isVideoTexture&&u.delete(x)}function A(S){const x=S.target;x.removeEventListener("dispose",A),E(x)}function b(S){const x=n.get(S);if(x.__webglInit===void 0)return;const L=S.source,q=d.get(L);if(q){const J=q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(S),Object.keys(q).length===0&&d.delete(L)}n.remove(S)}function F(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const L=S.source,q=d.get(L);delete q[x.__cacheKey],o.memory.textures--}function E(S){const x=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let J=0;J<x.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[q][J]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=S.textures;for(let q=0,J=L.length;q<J;q++){const Y=n.get(L[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(L[q])}n.remove(S)}let M=0;function P(){M=0}function V(){const S=M;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),M+=1,S}function B(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function X(S,x){const L=n.get(S);if(S.isVideoTexture&&W(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(L,S,x);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+x)}function tt(S,x){const L=n.get(S);if(S.version>0&&L.__version!==S.version){qt(L,S,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+x)}function $(S,x){const L=n.get(S);if(S.version>0&&L.__version!==S.version){qt(L,S,x);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+x)}function it(S,x){const L=n.get(S);if(S.version>0&&L.__version!==S.version){Z(L,S,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+x)}const j={[ir]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Js]:i.MIRRORED_REPEAT},mt={[Ze]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[_s]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},xt={[xu]:i.NEVER,[Eu]:i.ALWAYS,[vu]:i.LESS,[Vc]:i.LEQUAL,[Mu]:i.EQUAL,[wu]:i.GEQUAL,[Su]:i.GREATER,[yu]:i.NOTEQUAL};function dt(S,x){if(x.type===Mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===_s||x.magFilter===pr||x.magFilter===ei||x.minFilter===rn||x.minFilter===_s||x.minFilter===pr||x.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,j[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,j[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,j[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ze||x.minFilter!==pr&&x.minFilter!==ei||x.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ot(S,x){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",I));const q=x.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Y=B(x);if(Y!==S.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[Y].usedTimes++;const pt=J[S.__cacheKey];pt!==void 0&&(J[S.__cacheKey].usedTimes--,pt.usedTimes===0&&F(x)),S.__cacheKey=Y,S.__webglTexture=J[Y].texture}return L}function qt(S,x,L){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const J=Ot(S,x),Y=x.source;e.bindTexture(q,S.__webglTexture,i.TEXTURE0+L);const pt=n.get(Y);if(Y.version!==pt.__version||J===!0){e.activeTexture(i.TEXTURE0+L);const at=ce.getPrimaries(ce.workingColorSpace),lt=x.colorSpace===Fn?null:ce.getPrimaries(x.colorSpace),Rt=x.colorSpace===Fn||at===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let z=_(x.image,!1,r.maxTextureSize);z=st(x,z);const K=s.convert(x.format,x.colorSpace),At=s.convert(x.type);let yt=w(x.internalFormat,K,At,x.colorSpace,x.isVideoTexture);dt(q,x);let gt;const It=x.mipmaps,Ct=x.isVideoTexture!==!0,ue=pt.__version===void 0||J===!0,D=Y.dataReady,ut=T(x,z);if(x.isDepthTexture)yt=v(x.format===ki,x.type),ue&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,yt,z.width,z.height):e.texImage2D(i.TEXTURE_2D,0,yt,z.width,z.height,0,K,At,null));else if(x.isDataTexture)if(It.length>0){Ct&&ue&&e.texStorage2D(i.TEXTURE_2D,ut,yt,It[0].width,It[0].height);for(let et=0,rt=It.length;et<rt;et++)gt=It[et],Ct?D&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,gt.width,gt.height,K,At,gt.data):e.texImage2D(i.TEXTURE_2D,et,yt,gt.width,gt.height,0,K,At,gt.data);x.generateMipmaps=!1}else Ct?(ue&&e.texStorage2D(i.TEXTURE_2D,ut,yt,z.width,z.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,K,At,z.data)):e.texImage2D(i.TEXTURE_2D,0,yt,z.width,z.height,0,K,At,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ct&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,yt,It[0].width,It[0].height,z.depth);for(let et=0,rt=It.length;et<rt;et++)if(gt=It[et],x.format!==an)if(K!==null)if(Ct){if(D)if(x.layerUpdates.size>0){const ft=tc(gt.width,gt.height,x.format,x.type);for(const Ut of x.layerUpdates){const Zt=gt.data.subarray(Ut*ft/gt.data.BYTES_PER_ELEMENT,(Ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Ut,gt.width,gt.height,1,K,Zt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,z.depth,K,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,yt,gt.width,gt.height,z.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,z.depth,K,At,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,yt,gt.width,gt.height,z.depth,0,K,At,gt.data)}else{Ct&&ue&&e.texStorage2D(i.TEXTURE_2D,ut,yt,It[0].width,It[0].height);for(let et=0,rt=It.length;et<rt;et++)gt=It[et],x.format!==an?K!==null?Ct?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,gt.width,gt.height,K,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,yt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?D&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,gt.width,gt.height,K,At,gt.data):e.texImage2D(i.TEXTURE_2D,et,yt,gt.width,gt.height,0,K,At,gt.data)}else if(x.isDataArrayTexture)if(Ct){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,yt,z.width,z.height,z.depth),D)if(x.layerUpdates.size>0){const et=tc(z.width,z.height,x.format,x.type);for(const rt of x.layerUpdates){const ft=z.data.subarray(rt*et/z.data.BYTES_PER_ELEMENT,(rt+1)*et/z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,z.width,z.height,1,K,At,ft)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,K,At,z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,z.width,z.height,z.depth,0,K,At,z.data);else if(x.isData3DTexture)Ct?(ue&&e.texStorage3D(i.TEXTURE_3D,ut,yt,z.width,z.height,z.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,K,At,z.data)):e.texImage3D(i.TEXTURE_3D,0,yt,z.width,z.height,z.depth,0,K,At,z.data);else if(x.isFramebufferTexture){if(ue)if(Ct)e.texStorage2D(i.TEXTURE_2D,ut,yt,z.width,z.height);else{let et=z.width,rt=z.height;for(let ft=0;ft<ut;ft++)e.texImage2D(i.TEXTURE_2D,ft,yt,et,rt,0,K,At,null),et>>=1,rt>>=1}}else if(It.length>0){if(Ct&&ue){const et=ot(It[0]);e.texStorage2D(i.TEXTURE_2D,ut,yt,et.width,et.height)}for(let et=0,rt=It.length;et<rt;et++)gt=It[et],Ct?D&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,K,At,gt):e.texImage2D(i.TEXTURE_2D,et,yt,K,At,gt);x.generateMipmaps=!1}else if(Ct){if(ue){const et=ot(z);e.texStorage2D(i.TEXTURE_2D,ut,yt,et.width,et.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K,At,z)}else e.texImage2D(i.TEXTURE_2D,0,yt,K,At,z);m(x)&&h(q),pt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Z(S,x,L){if(x.image.length!==6)return;const q=Ot(S,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);const Y=n.get(J);if(J.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+L);const pt=ce.getPrimaries(ce.workingColorSpace),at=x.colorSpace===Fn?null:ce.getPrimaries(x.colorSpace),lt=x.colorSpace===Fn||pt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,z=x.image[0]&&x.image[0].isDataTexture,K=[];for(let rt=0;rt<6;rt++)!Rt&&!z?K[rt]=_(x.image[rt],!0,r.maxCubemapSize):K[rt]=z?x.image[rt].image:x.image[rt],K[rt]=st(x,K[rt]);const At=K[0],yt=s.convert(x.format,x.colorSpace),gt=s.convert(x.type),It=w(x.internalFormat,yt,gt,x.colorSpace),Ct=x.isVideoTexture!==!0,ue=Y.__version===void 0||q===!0,D=J.dataReady;let ut=T(x,At);dt(i.TEXTURE_CUBE_MAP,x);let et;if(Rt){Ct&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,It,At.width,At.height);for(let rt=0;rt<6;rt++){et=K[rt].mipmaps;for(let ft=0;ft<et.length;ft++){const Ut=et[ft];x.format!==an?yt!==null?Ct?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,0,0,Ut.width,Ut.height,yt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,It,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,0,0,Ut.width,Ut.height,yt,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,It,Ut.width,Ut.height,0,yt,gt,Ut.data)}}}else{if(et=x.mipmaps,Ct&&ue){et.length>0&&ut++;const rt=ot(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,It,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(z){Ct?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,K[rt].width,K[rt].height,yt,gt,K[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,It,K[rt].width,K[rt].height,0,yt,gt,K[rt].data);for(let ft=0;ft<et.length;ft++){const Zt=et[ft].image[rt].image;Ct?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,0,0,Zt.width,Zt.height,yt,gt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,It,Zt.width,Zt.height,0,yt,gt,Zt.data)}}else{Ct?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt,gt,K[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,It,yt,gt,K[rt]);for(let ft=0;ft<et.length;ft++){const Ut=et[ft];Ct?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,0,0,yt,gt,Ut.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,It,yt,gt,Ut.image[rt])}}}m(x)&&h(i.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ct(S,x,L,q,J,Y){const pt=s.convert(L.format,L.colorSpace),at=s.convert(L.type),lt=w(L.internalFormat,pt,at,L.colorSpace);if(!n.get(x).__hasExternalTextures){const z=Math.max(1,x.width>>Y),K=Math.max(1,x.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,lt,z,K,x.depth,0,pt,at,null):e.texImage2D(J,Y,lt,z,K,0,pt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,n.get(L).__webglTexture,0,jt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,n.get(L).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(S,x,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer){const q=x.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,J),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=jt(x);wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,x.width,x.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,S)}else{const q=x.textures;for(let J=0;J<q.length;J++){const Y=q[J],pt=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),lt=w(Y.internalFormat,pt,at,Y.colorSpace),Rt=jt(x);L&&wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,lt,x.width,x.height):wt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const q=n.get(x.depthTexture).__webglTexture,J=jt(x);if(x.depthTexture.format===Ni)wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===ki)wt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Dt(S){const x=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");vt(x.__webglFramebuffer,S)}else if(L){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]=i.createRenderbuffer(),St(x.__webglDepthbuffer[q],S,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),St(x.__webglDepthbuffer,S,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(S,x,L){const q=n.get(S);x!==void 0&&ct(q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Dt(S)}function zt(S){const x=S.texture,L=n.get(S),q=n.get(x);S.addEventListener("dispose",A);const J=S.textures,Y=S.isWebGLCubeRenderTarget===!0,pt=J.length>1;if(pt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,o.memory.textures++),Y){L.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[at]=[];for(let lt=0;lt<x.mipmaps.length;lt++)L.__webglFramebuffer[at][lt]=i.createFramebuffer()}else L.__webglFramebuffer[at]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)L.__webglFramebuffer[at]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(pt)for(let at=0,lt=J.length;at<lt;at++){const Rt=n.get(J[at]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&wt(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const lt=J[at];L.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[at]);const Rt=s.convert(lt.format,lt.colorSpace),z=s.convert(lt.type),K=w(lt.internalFormat,Rt,z,lt.colorSpace,S.isXRRenderTarget===!0),At=jt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,L.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),St(L.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),dt(i.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)ct(L.__webglFramebuffer[at][lt],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else ct(L.__webglFramebuffer[at],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let at=0,lt=J.length;at<lt;at++){const Rt=J[at],z=n.get(Rt);e.bindTexture(i.TEXTURE_2D,z.__webglTexture),dt(i.TEXTURE_2D,Rt),ct(L.__webglFramebuffer,S,Rt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Rt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(at=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),dt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)ct(L.__webglFramebuffer[lt],S,x,i.COLOR_ATTACHMENT0,at,lt);else ct(L.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,at,0);m(x)&&h(at),e.unbindTexture()}S.depthBuffer&&Dt(S)}function oe(S){const x=S.textures;for(let L=0,q=x.length;L<q;L++){const J=x[L];if(m(J)){const Y=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(J).__webglTexture;e.bindTexture(Y,pt),h(Y),e.unbindTexture()}}}const C=[],le=[];function $t(S){if(S.samples>0){if(wt(S)===!1){const x=S.textures,L=S.width,q=S.height;let J=i.COLOR_BUFFER_BIT;const Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(S),at=x.length>1;if(at)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[lt]);const Rt=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,L,q,0,0,L,q,J,i.NEAREST),c===!0&&(C.length=0,le.length=0,C.push(i.COLOR_ATTACHMENT0+lt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(Y),le.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[lt]);const Rt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const x=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function jt(S){return Math.min(r.maxSamples,S.samples)}function wt(S){const x=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function W(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function st(S,x){const L=S.colorSpace,q=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Hn&&L!==Fn&&(ce.getTransfer(L)===de?(q!==an||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),x}function ot(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=tt,this.setTexture3D=$,this.setTextureCube=it,this.rebindTextures=Bt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=wt}function Hm(i,t){function e(n,r=Fn){let s;const o=ce.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.BYTE;if(n===Dc)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Fc)return i.RGB;if(n===an)return i.RGBA;if(n===Oc)return i.LUMINANCE;if(n===Bc)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===Oo)return i.RG_INTEGER;if(n===Bo)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qs||n===to||n===eo||n===no)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===ro||n===so)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===io||n===ro)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===so)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===ao||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ao)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===So||n===yo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yr)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===wo||n===Eo||n===To)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gm extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ze,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ym extends Gi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const _=new qm,m=e.getContextAttributes();let h=null,w=null;const v=[],T=[],I=new kt;let A=null;const b=new Ye;b.layers.enable(1),b.viewport=new we;const F=new Ye;F.layers.enable(2),F.viewport=new we;const E=[b,F],M=new Gm;M.layers.enable(1),M.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=v[Z];return ct===void 0&&(ct=new Gs,v[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=v[Z];return ct===void 0&&(ct=new Gs,v[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=v[Z];return ct===void 0&&(ct=new Gs,v[Z]=ct),ct.getHandSpace()};function B(Z){const ct=T.indexOf(Z.inputSource);if(ct===-1)return;const St=v[ct];St!==void 0&&(St.update(Z.inputSource,Z.frame,l||o),St.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<v.length;Z++){const ct=T[Z];ct!==null&&(T[Z]=null,v[Z].disconnect(ct))}P=null,V=null,_.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,w=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new si(p.framebufferWidth,p.framebufferHeight,{format:an,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,St=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?ki:Ni,St=m.stencil?zi:ri);const Dt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Dt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new si(d.textureWidth,d.textureHeight,{format:an,type:Tn,depthTexture:new el(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),qt.setContext(r),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(Z){for(let ct=0;ct<Z.removed.length;ct++){const St=Z.removed[ct],vt=T.indexOf(St);vt>=0&&(T[vt]=null,v[vt].disconnect(St))}for(let ct=0;ct<Z.added.length;ct++){const St=Z.added[ct];let vt=T.indexOf(St);if(vt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=T.length){T.push(St),vt=Bt;break}else if(T[Bt]===null){T[Bt]=St,vt=Bt;break}if(vt===-1)break}const Dt=v[vt];Dt&&Dt.connect(St)}}const $=new N,it=new N;function j(Z,ct,St){$.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(St.matrixWorld);const vt=$.distanceTo(it),Dt=ct.projectionMatrix.elements,Bt=St.projectionMatrix.elements,zt=Dt[14]/(Dt[10]-1),oe=Dt[14]/(Dt[10]+1),C=(Dt[9]+1)/Dt[5],le=(Dt[9]-1)/Dt[5],$t=(Dt[8]-1)/Dt[0],jt=(Bt[8]+1)/Bt[0],wt=zt*$t,W=zt*jt,st=vt/(-$t+jt),ot=st*-$t;ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ot),Z.translateZ(st),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const S=zt+st,x=oe+st,L=wt-ot,q=W+(vt-ot),J=C*oe/x*S,Y=le*oe/x*S;Z.projectionMatrix.makePerspective(L,q,J,Y,S,x),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function mt(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),M.near=F.near=b.near=Z.near,M.far=F.far=b.far=Z.far,(P!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far,b.near=P,b.far=V,F.near=P,F.far=V,b.updateProjectionMatrix(),F.updateProjectionMatrix(),Z.updateProjectionMatrix());const ct=Z.parent,St=M.cameras;mt(M,ct);for(let vt=0;vt<St.length;vt++)mt(St[vt],ct);St.length===2?j(M,b,F):M.projectionMatrix.copy(b.projectionMatrix),xt(Z,M,ct)};function xt(Z,ct,St){St===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(St.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let dt=null;function Ot(Z,ct){if(u=ct.getViewerPose(l||o),g=ct,u!==null){const St=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let vt=!1;St.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let Bt=0;Bt<St.length;Bt++){const zt=St[Bt];let oe=null;if(p!==null)oe=p.getViewport(zt);else{const le=f.getViewSubImage(d,zt);oe=le.viewport,Bt===0&&(t.setRenderTargetTextures(w,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(w))}let C=E[Bt];C===void 0&&(C=new Ye,C.layers.enable(Bt),C.viewport=new we,E[Bt]=C),C.matrix.fromArray(zt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(zt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(oe.x,oe.y,oe.width,oe.height),Bt===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(C)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Bt=f.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,r.renderState)}}for(let St=0;St<v.length;St++){const vt=T[St],Dt=v[St];vt!==null&&Dt!==void 0&&Dt.update(vt,ct,l||o)}dt&&dt(Z,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const qt=new Qc;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(Z){dt=Z},this.dispose=function(){}}}const $n=new hn,Km=new pe;function $m(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,jc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,v,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,T)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,w,v):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ge&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ge&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=t.get(h),v=w.envMap,T=w.envMapRotation;v&&(m.envMap.value=v,$n.copy(T),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler($n)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=v*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ge&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const w=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jm(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const T=v.program;n.uniformBlockBinding(w,T)}function l(w,v){let T=r[w.id];T===void 0&&(g(w),T=u(w),r[w.id]=T,w.addEventListener("dispose",m));const I=v.program;n.updateUBOMapping(w,I);const A=t.render.frame;s[w.id]!==A&&(d(w),s[w.id]=A)}function u(w){const v=f();w.__bindingPointIndex=v;const T=i.createBuffer(),I=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const v=r[w.id],T=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,b=T.length;A<b;A++){const F=Array.isArray(T[A])?T[A]:[T[A]];for(let E=0,M=F.length;E<M;E++){const P=F[E];if(p(P,A,E,I)===!0){const V=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let tt=0;tt<B.length;tt++){const $=B[tt],it=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,V+X,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,X),X+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,v,T,I){const A=w.value,b=v+"_"+T;if(I[b]===void 0)return typeof A=="number"||typeof A=="boolean"?I[b]=A:I[b]=A.clone(),!0;{const F=I[b];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return I[b]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(w){const v=w.uniforms;let T=0;const I=16;for(let b=0,F=v.length;b<F;b++){const E=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,P=E.length;M<P;M++){const V=E[M],B=Array.isArray(V.value)?V.value:[V.value];for(let X=0,tt=B.length;X<tt;X++){const $=B[X],it=_($),j=T%I;j!==0&&I-j<it.boundary&&(T+=I-j),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=it.storage}}}const A=T%I;return A>0&&(T+=I-A),w.__size=T,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class ol{constructor(t={}){const{canvas:e=Hu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let T=!1,I=0,A=0,b=null,F=-1,E=null;const M=new we,P=new we;let V=null;const B=new Yt(0);let X=0,tt=e.width,$=e.height,it=1,j=null,mt=null;const xt=new we(0,0,tt,$),dt=new we(0,0,tt,$);let Ot=!1;const qt=new Wo;let Z=!1,ct=!1;const St=new pe,vt=new N,Dt=new we,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function oe(){return b===null?it:1}let C=n;function le(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const U="webgl2";if(C=le(U,y),C===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $t,jt,wt,W,st,ot,S,x,L,q,J,Y,pt,at,lt,Rt,z,K,At,yt,gt,It,Ct,ue;function D(){$t=new rp(C),$t.init(),It=new Hm(C,$t),jt=new Jf(C,$t,t,It),wt=new Bm(C),W=new ap(C),st=new Em,ot=new km(C,$t,wt,st,jt,It,W),S=new tp(v),x=new ip(v),L=new fh(C),Ct=new jf(C,L),q=new sp(C,L,W,Ct),J=new lp(C,q,L,W),At=new cp(C,jt,ot),Rt=new Qf(st),Y=new wm(v,S,x,$t,jt,Ct,Rt),pt=new $m(v,st),at=new bm,lt=new Im($t),K=new $f(v,S,x,wt,J,d,c),z=new Om(v,J,jt),ue=new jm(C,W,jt,wt),yt=new Zf(C,$t,W),gt=new op(C,$t,W),W.programs=Y.programs,v.capabilities=jt,v.extensions=$t,v.properties=st,v.renderLists=at,v.shadowMap=z,v.state=wt,v.info=W}D();const ut=new Ym(v,C);this.xr=ut,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=$t.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$t.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(y){y!==void 0&&(it=y,this.setSize(tt,$,!1))},this.getSize=function(y){return y.set(tt,$)},this.setSize=function(y,U,k=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=y,$=U,e.width=Math.floor(y*it),e.height=Math.floor(U*it),k===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(tt*it,$*it).floor()},this.setDrawingBufferSize=function(y,U,k){tt=y,$=U,it=k,e.width=Math.floor(y*k),e.height=Math.floor(U*k),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(xt)},this.setViewport=function(y,U,k,G){y.isVector4?xt.set(y.x,y.y,y.z,y.w):xt.set(y,U,k,G),wt.viewport(M.copy(xt).multiplyScalar(it).round())},this.getScissor=function(y){return y.copy(dt)},this.setScissor=function(y,U,k,G){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,U,k,G),wt.scissor(P.copy(dt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(y){wt.setScissorTest(Ot=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){mt=y},this.getClearColor=function(y){return y.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(y=!0,U=!0,k=!0){let G=0;if(y){let O=!1;if(b!==null){const ht=b.texture.format;O=ht===Bo||ht===Oo||ht===Fo}if(O){const ht=b.texture.type,Mt=ht===Tn||ht===ri||ht===rr||ht===zi||ht===Uo||ht===No,Et=K.getClearColor(),bt=K.getClearAlpha(),Nt=Et.r,Ft=Et.g,Lt=Et.b;Mt?(p[0]=Nt,p[1]=Ft,p[2]=Lt,p[3]=bt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Nt,g[1]=Ft,g[2]=Lt,g[3]=bt,C.clearBufferiv(C.COLOR,0,g))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT),k&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),at.dispose(),lt.dispose(),st.dispose(),S.dispose(),x.dispose(),J.dispose(),Ct.dispose(),ue.dispose(),Y.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ln),ut.removeEventListener("sessionend",Jo),Vn.stop()};function et(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=W.autoReset,U=z.enabled,k=z.autoUpdate,G=z.needsUpdate,O=z.type;D(),W.autoReset=y,z.enabled=U,z.autoUpdate=k,z.needsUpdate=G,z.type=O}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ut(y){const U=y.target;U.removeEventListener("dispose",Ut),Zt(U)}function Zt(y){Me(y),st.remove(y)}function Me(y){const U=st.get(y).programs;U!==void 0&&(U.forEach(function(k){Y.releaseProgram(k)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,k,G,O,ht){U===null&&(U=Bt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,Et=Rl(y,U,k,G,O);wt.setMaterial(G,Mt);let bt=k.index,Nt=1;if(G.wireframe===!0){if(bt=q.getWireframeAttribute(k),bt===void 0)return;Nt=2}const Ft=k.drawRange,Lt=k.attributes.position;let ee=Ft.start*Nt,me=(Ft.start+Ft.count)*Nt;ht!==null&&(ee=Math.max(ee,ht.start*Nt),me=Math.min(me,(ht.start+ht.count)*Nt)),bt!==null?(ee=Math.max(ee,0),me=Math.min(me,bt.count)):Lt!=null&&(ee=Math.max(ee,0),me=Math.min(me,Lt.count));const ge=me-ee;if(ge<0||ge===1/0)return;Ct.setup(O,G,Et,k,bt);let Ve,ne=yt;if(bt!==null&&(Ve=L.get(bt),ne=gt,ne.setIndex(Ve)),O.isMesh)G.wireframe===!0?(wt.setLineWidth(G.wireframeLinewidth*oe()),ne.setMode(C.LINES)):ne.setMode(C.TRIANGLES);else if(O.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),wt.setLineWidth(Pt*oe()),O.isLineSegments?ne.setMode(C.LINES):O.isLineLoop?ne.setMode(C.LINE_LOOP):ne.setMode(C.LINE_STRIP)}else O.isPoints?ne.setMode(C.POINTS):O.isSprite&&ne.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,Ie=O._multiDrawCounts,ie=O._multiDrawCount,Qe=bt?L.get(bt).bytesPerElement:1,li=st.get(G).currentProgram.getUniforms();for(let We=0;We<ie;We++)li.setValue(C,"_gl_DrawID",We),ne.render(Pt[We]/Qe,Ie[We])}else if(O.isInstancedMesh)ne.renderInstances(ee,ge,O.count);else if(k.isInstancedBufferGeometry){const Pt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ie=Math.min(k.instanceCount,Pt);ne.renderInstances(ee,ge,Ie)}else ne.render(ee,ge)};function Le(y,U,k){y.transparent===!0&&y.side===ve&&y.forceSinglePass===!1?(y.side=Ge,y.needsUpdate=!0,fr(y,U,k),y.side=zn,y.needsUpdate=!0,fr(y,U,k),y.side=ve):fr(y,U,k)}this.compile=function(y,U,k=null){k===null&&(k=y),m=lt.get(k),m.init(U),w.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return y.traverse(function(O){const ht=O.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const Et=ht[Mt];Le(Et,k,O),G.add(Et)}else Le(ht,k,O),G.add(ht)}),w.pop(),m=null,G},this.compileAsync=function(y,U,k=null){const G=this.compile(y,U,k);return new Promise(O=>{function ht(){if(G.forEach(function(Mt){st.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){O(y);return}setTimeout(ht,10)}$t.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let te=null;function fn(y){te&&te(y)}function ln(){Vn.stop()}function Jo(){Vn.start()}const Vn=new Qc;Vn.setAnimationLoop(fn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(y){te=y,ut.setAnimationLoop(y),y===null?Vn.stop():Vn.start()},ut.addEventListener("sessionstart",ln),ut.addEventListener("sessionend",Jo),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(U),U=ut.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,b),m=lt.get(y,w.length),m.init(U),w.push(m),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),qt.setFromProjectionMatrix(St),ct=this.localClippingEnabled,Z=Rt.init(this.clippingPlanes,ct),_=at.get(y,h.length),_.init(),h.push(_),ut.enabled===!0&&ut.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&fs(ht,U,-1/0,v.sortObjects)}fs(y,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,mt),zt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,zt&&K.addToRenderList(_,y),this.info.render.frame++,Z===!0&&Rt.beginShadows();const k=m.state.shadowsArray;z.render(k,y,U),Z===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,O=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ht=U.cameras;if(O.length>0)for(let Mt=0,Et=ht.length;Mt<Et;Mt++){const bt=ht[Mt];ta(G,O,y,bt)}zt&&K.render(y);for(let Mt=0,Et=ht.length;Mt<Et;Mt++){const bt=ht[Mt];Qo(_,y,bt,bt.viewport)}}else O.length>0&&ta(G,O,y,U),zt&&K.render(y),Qo(_,y,U);b!==null&&(ot.updateMultisampleRenderTarget(b),ot.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(v,y,U),Ct.resetDefaultState(),F=-1,E=null,w.pop(),w.length>0?(m=w[w.length-1],Z===!0&&Rt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function fs(y,U,k,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||qt.intersectsSprite(y)){G&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);const Mt=J.update(y),Et=y.material;Et.visible&&_.push(y,Mt,Et,k,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||qt.intersectsObject(y))){const Mt=J.update(y),Et=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Dt.copy(Mt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(Et)){const bt=Mt.groups;for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){const Lt=bt[Nt],ee=Et[Lt.materialIndex];ee&&ee.visible&&_.push(y,Mt,ee,k,Dt.z,Lt)}}else Et.visible&&_.push(y,Mt,Et,k,Dt.z,null)}}const ht=y.children;for(let Mt=0,Et=ht.length;Mt<Et;Mt++)fs(ht[Mt],U,k,G)}function Qo(y,U,k,G){const O=y.opaque,ht=y.transmissive,Mt=y.transparent;m.setupLightsView(k),Z===!0&&Rt.setGlobalState(v.clippingPlanes,k),G&&wt.viewport(M.copy(G)),O.length>0&&dr(O,U,k),ht.length>0&&dr(ht,U,k),Mt.length>0&&dr(Mt,U,k),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ta(y,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new si(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?ur:Tn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const ht=m.state.transmissionRenderTarget[G.id],Mt=G.viewport||M;ht.setSize(Mt.z,Mt.w);const Et=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(B),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),zt?K.render(k):v.clear();const bt=v.toneMapping;v.toneMapping=Bn;const Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Z===!0&&Rt.setGlobalState(v.clippingPlanes,G),dr(y,k,G),ot.updateMultisampleRenderTarget(ht),ot.updateRenderTargetMipmap(ht),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Lt=0,ee=U.length;Lt<ee;Lt++){const me=U[Lt],ge=me.object,Ve=me.geometry,ne=me.material,Pt=me.group;if(ne.side===ve&&ge.layers.test(G.layers)){const Ie=ne.side;ne.side=Ge,ne.needsUpdate=!0,ea(ge,k,G,Ve,ne,Pt),ne.side=Ie,ne.needsUpdate=!0,Ft=!0}}Ft===!0&&(ot.updateMultisampleRenderTarget(ht),ot.updateRenderTargetMipmap(ht))}v.setRenderTarget(Et),v.setClearColor(B,X),Nt!==void 0&&(G.viewport=Nt),v.toneMapping=bt}function dr(y,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ht=y.length;O<ht;O++){const Mt=y[O],Et=Mt.object,bt=Mt.geometry,Nt=G===null?Mt.material:G,Ft=Mt.group;Et.layers.test(k.layers)&&ea(Et,U,k,bt,Nt,Ft)}}function ea(y,U,k,G,O,ht){y.onBeforeRender(v,U,k,G,O,ht),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.transparent===!0&&O.side===ve&&O.forceSinglePass===!1?(O.side=Ge,O.needsUpdate=!0,v.renderBufferDirect(k,U,G,O,y,ht),O.side=zn,O.needsUpdate=!0,v.renderBufferDirect(k,U,G,O,y,ht),O.side=ve):v.renderBufferDirect(k,U,G,O,y,ht),y.onAfterRender(v,U,k,G,O,ht)}function fr(y,U,k){U.isScene!==!0&&(U=Bt);const G=st.get(y),O=m.state.lights,ht=m.state.shadowsArray,Mt=O.state.version,Et=Y.getParameters(y,O.state,ht,U,k),bt=Y.getProgramCacheKey(Et);let Nt=G.programs;G.environment=y.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(y.isMeshStandardMaterial?x:S).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",Ut),Nt=new Map,G.programs=Nt);let Ft=Nt.get(bt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===Mt)return ia(y,Et),Ft}else Et.uniforms=Y.getUniforms(y),y.onBeforeCompile(Et,v),Ft=Y.acquireProgram(Et,bt),Nt.set(bt,Ft),G.uniforms=Et.uniforms;const Lt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Rt.uniform),ia(y,Et),G.needsLights=Pl(y),G.lightsStateVersion=Mt,G.needsLights&&(Lt.ambientLightColor.value=O.state.ambient,Lt.lightProbe.value=O.state.probe,Lt.directionalLights.value=O.state.directional,Lt.directionalLightShadows.value=O.state.directionalShadow,Lt.spotLights.value=O.state.spot,Lt.spotLightShadows.value=O.state.spotShadow,Lt.rectAreaLights.value=O.state.rectArea,Lt.ltc_1.value=O.state.rectAreaLTC1,Lt.ltc_2.value=O.state.rectAreaLTC2,Lt.pointLights.value=O.state.point,Lt.pointLightShadows.value=O.state.pointShadow,Lt.hemisphereLights.value=O.state.hemi,Lt.directionalShadowMap.value=O.state.directionalShadowMap,Lt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Lt.spotShadowMap.value=O.state.spotShadowMap,Lt.spotLightMatrix.value=O.state.spotLightMatrix,Lt.spotLightMap.value=O.state.spotLightMap,Lt.pointShadowMap.value=O.state.pointShadowMap,Lt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function na(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Kr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ia(y,U){const k=st.get(y);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Rl(y,U,k,G,O){U.isScene!==!0&&(U=Bt),ot.resetTextureUnits();const ht=U.fog,Mt=G.isMeshStandardMaterial?U.environment:null,Et=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Hn,bt=(G.isMeshStandardMaterial?x:S).get(G.envMap||Mt),Nt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,me=!!k.morphAttributes.color;let ge=Bn;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ge=v.toneMapping);const Ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=Ve!==void 0?Ve.length:0,Pt=st.get(G),Ie=m.state.lights;if(Z===!0&&(ct===!0||y!==E)){const $e=y===E&&G.id===F;Rt.setState(G,y,$e)}let ie=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ie.state.version||Pt.outputColorSpace!==Et||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==bt||G.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Rt.numPlanes||Pt.numIntersection!==Rt.numIntersection)||Pt.vertexAlphas!==Nt||Pt.vertexTangents!==Ft||Pt.morphTargets!==Lt||Pt.morphNormals!==ee||Pt.morphColors!==me||Pt.toneMapping!==ge||Pt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Pt.__version=G.version);let Qe=Pt.currentProgram;ie===!0&&(Qe=fr(G,U,O));let li=!1,We=!1,ps=!1;const Se=Qe.getUniforms(),Rn=Pt.uniforms;if(wt.useProgram(Qe.program)&&(li=!0,We=!0,ps=!0),G.id!==F&&(F=G.id,We=!0),li||E!==y){Se.setValue(C,"projectionMatrix",y.projectionMatrix),Se.setValue(C,"viewMatrix",y.matrixWorldInverse);const $e=Se.map.cameraPosition;$e!==void 0&&$e.setValue(C,vt.setFromMatrixPosition(y.matrixWorld)),jt.logarithmicDepthBuffer&&Se.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Se.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,We=!0,ps=!0)}if(O.isSkinnedMesh){Se.setOptional(C,O,"bindMatrix"),Se.setOptional(C,O,"bindMatrixInverse");const $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Se.setValue(C,"boneTexture",$e.boneTexture,ot))}O.isBatchedMesh&&(Se.setOptional(C,O,"batchingTexture"),Se.setValue(C,"batchingTexture",O._matricesTexture,ot),Se.setOptional(C,O,"batchingIdTexture"),Se.setValue(C,"batchingIdTexture",O._indirectTexture,ot),Se.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(C,"batchingColorTexture",O._colorsTexture,ot));const ms=k.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&At.update(O,k,Qe),(We||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,Se.setValue(C,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Rn.envMap.value=bt,Rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Rn.envMapIntensity.value=U.environmentIntensity),We&&(Se.setValue(C,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&Cl(Rn,ps),ht&&G.fog===!0&&pt.refreshFogUniforms(Rn,ht),pt.refreshMaterialUniforms(Rn,G,it,$,m.state.transmissionRenderTarget[y.id]),Kr.upload(C,na(Pt),Rn,ot)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Kr.upload(C,na(Pt),Rn,ot),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Se.setValue(C,"center",O.center),Se.setValue(C,"modelViewMatrix",O.modelViewMatrix),Se.setValue(C,"normalMatrix",O.normalMatrix),Se.setValue(C,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $e=G.uniformsGroups;for(let gs=0,Ll=$e.length;gs<Ll;gs++){const ra=$e[gs];ue.update(ra,Qe),ue.bind(ra,Qe)}}return Qe}function Cl(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Pl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,U,k){st.get(y.texture).__webglTexture=U,st.get(y.depthTexture).__webglTexture=k;const G=st.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const k=st.get(y);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,k=0){b=y,I=U,A=k;let G=!0,O=null,ht=!1,Mt=!1;if(y){const bt=st.get(y);bt.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(C.FRAMEBUFFER,null),G=!1):bt.__webglFramebuffer===void 0?ot.setupRenderTarget(y):bt.__hasExternalTextures&&ot.rebindTextures(y,st.get(y.texture).__webglTexture,st.get(y.depthTexture).__webglTexture);const Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);const Ft=st.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?O=Ft[U][k]:O=Ft[U],ht=!0):y.samples>0&&ot.useMultisampledRTT(y)===!1?O=st.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[k]:O=Ft,M.copy(y.viewport),P.copy(y.scissor),V=y.scissorTest}else M.copy(xt).multiplyScalar(it).floor(),P.copy(dt).multiplyScalar(it).floor(),V=Ot;if(wt.bindFramebuffer(C.FRAMEBUFFER,O)&&G&&wt.drawBuffers(y,O),wt.viewport(M),wt.scissor(P),wt.setScissorTest(V),ht){const bt=st.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,k)}else if(Mt){const bt=st.get(y.texture),Nt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,Nt)}F=-1},this.readRenderTargetPixels=function(y,U,k,G,O,ht,Mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=st.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){wt.bindFramebuffer(C.FRAMEBUFFER,Et);try{const bt=y.texture,Nt=bt.format,Ft=bt.type;if(!jt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&k>=0&&k<=y.height-O&&C.readPixels(U,k,G,O,It.convert(Nt),It.convert(Ft),ht)}finally{const bt=b!==null?st.get(b).__webglFramebuffer:null;wt.bindFramebuffer(C.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,U,k,G,O,ht,Mt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=st.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){wt.bindFramebuffer(C.FRAMEBUFFER,Et);try{const bt=y.texture,Nt=bt.format,Ft=bt.type;if(!jt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-G&&k>=0&&k<=y.height-O){const Lt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.bufferData(C.PIXEL_PACK_BUFFER,ht.byteLength,C.STREAM_READ),C.readPixels(U,k,G,O,It.convert(Nt),It.convert(Ft),0),C.flush();const ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Gu(C,ee,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ht)}finally{C.deleteBuffer(Lt),C.deleteSync(ee)}return ht}}finally{const bt=b!==null?st.get(b).__webglFramebuffer:null;wt.bindFramebuffer(C.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(y,U=null,k=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-k),O=Math.floor(y.image.width*G),ht=Math.floor(y.image.height*G),Mt=U!==null?U.x:0,Et=U!==null?U.y:0;ot.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,Mt,Et,O,ht),wt.unbindTexture()},this.copyTextureToTexture=function(y,U,k=null,G=null,O=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let ht,Mt,Et,bt,Nt,Ft;k!==null?(ht=k.max.x-k.min.x,Mt=k.max.y-k.min.y,Et=k.min.x,bt=k.min.y):(ht=y.image.width,Mt=y.image.height,Et=0,bt=0),G!==null?(Nt=G.x,Ft=G.y):(Nt=0,Ft=0);const Lt=It.convert(U.format),ee=It.convert(U.type);ot.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const me=C.getParameter(C.UNPACK_ROW_LENGTH),ge=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ve=C.getParameter(C.UNPACK_SKIP_PIXELS),ne=C.getParameter(C.UNPACK_SKIP_ROWS),Pt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ie=y.isCompressedTexture?y.mipmaps[O]:y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ie.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ie.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Et),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Nt,Ft,ht,Mt,Lt,ee,Ie.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Nt,Ft,Ie.width,Ie.height,Lt,Ie.data):C.texSubImage2D(C.TEXTURE_2D,O,Nt,Ft,ht,Mt,Lt,ee,Ie),C.pixelStorei(C.UNPACK_ROW_LENGTH,me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,ne),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pt),O===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,k=null,G=null,O=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,y=arguments[2],U=arguments[3],O=arguments[4]||0);let ht,Mt,Et,bt,Nt,Ft,Lt,ee,me;const ge=y.isCompressedTexture?y.mipmaps[O]:y.image;k!==null?(ht=k.max.x-k.min.x,Mt=k.max.y-k.min.y,Et=k.max.z-k.min.z,bt=k.min.x,Nt=k.min.y,Ft=k.min.z):(ht=ge.width,Mt=ge.height,Et=ge.depth,bt=0,Nt=0,Ft=0),G!==null?(Lt=G.x,ee=G.y,me=G.z):(Lt=0,ee=0,me=0);const Ve=It.convert(U.format),ne=It.convert(U.type);let Pt;if(U.isData3DTexture)ot.setTexture3D(U,0),Pt=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ot.setTexture2DArray(U,0),Pt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ie=C.getParameter(C.UNPACK_ROW_LENGTH),ie=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qe=C.getParameter(C.UNPACK_SKIP_PIXELS),li=C.getParameter(C.UNPACK_SKIP_ROWS),We=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ft),y.isDataTexture||y.isData3DTexture?C.texSubImage3D(Pt,O,Lt,ee,me,ht,Mt,Et,Ve,ne,ge.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Pt,O,Lt,ee,me,ht,Mt,Et,Ve,ge.data):C.texSubImage3D(Pt,O,Lt,ee,me,ht,Mt,Et,Ve,ne,ge),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ie),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,li),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We),O===0&&U.generateMipmaps&&C.generateMipmap(Pt),wt.unbindTexture()},this.initRenderTarget=function(y){st.get(y).__webglFramebuffer===void 0&&ot.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ot.setTextureCube(y,0):y.isData3DTexture?ot.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ot.setTexture2DArray(y,0):ot.setTexture2D(y,0),wt.unbindTexture()},this.resetState=function(){I=0,A=0,b=null,wt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zo?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===us?"display-p3":"srgb"}}class qo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class al extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ho("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new N;class os{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new os(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cl extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const $i=new N,Ci=new N,Pi=new N,Li=new kt,ji=new kt,ll=new pe,Fr=new N,Zi=new N,Or=new N,ec=new kt,Vs=new kt,nc=new kt;class Jm extends Ee{constructor(t=new cl){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zm(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new os(n,3,0,!1)),Ri.setAttribute("uv",new os(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),ll.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Br(Fr.set(-.5,-.5,0),Pi,o,Ci,r,s),Br(Zi.set(.5,-.5,0),Pi,o,Ci,r,s),Br(Or.set(.5,.5,0),Pi,o,Ci,r,s),ec.set(0,0),Vs.set(1,0),nc.set(1,1);let a=t.ray.intersectTriangle(Fr,Zi,Or,!1,$i);if(a===null&&(Br(Zi.set(-.5,.5,0),Pi,o,Ci,r,s),Vs.set(0,1),a=t.ray.intersectTriangle(Fr,Or,Zi,!1,$i),a===null))return;const c=t.ray.origin.distanceTo($i);c<t.near||c>t.far||e.push({distance:c,point:$i.clone(),uv:on.getInterpolation($i,Fr,Zi,Or,ec,Vs,nc,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Br(i,t,e,n,r,s){Li.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ji.x=s*Li.x-r*Li.y,ji.y=r*Li.x+s*Li.y):ji.copy(Li),i.copy(t),i.x+=ji.x,i.y+=ji.y,i.applyMatrix4(ll)}class ul extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const as=new N,cs=new N,ic=new pe,Ji=new Go,zr=new hs,Ws=new N,rc=new N;class Qm extends Ee{constructor(t=new ke,e=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)as.fromBufferAttribute(e,r-1),cs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=as.distanceTo(cs);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),zr.radius+=s,t.ray.intersectsSphere(zr)===!1)return;ic.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(ic);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const h=u.getX(_),w=u.getX(_+1),v=kr(this,t,Ji,c,h,w);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=kr(this,t,Ji,c,_,m);h&&e.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const h=kr(this,t,Ji,c,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=kr(this,t,Ji,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kr(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(as.fromBufferAttribute(o,r),cs.fromBufferAttribute(o,s),e.distanceSqToSegment(as,cs,Ws,rc)>n)return;Ws.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ws);if(!(c<t.near||c>t.far))return{distance:c,point:rc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const sc=new N,oc=new N;class t0 extends Qm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)sc.fromBufferAttribute(e,r),oc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+sc.distanceTo(oc);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gn extends ze{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fe extends ke{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new N,u=new kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const p=n+f/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ht extends ke{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=n/2;let h=0;w(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2));function w(){const T=new N,I=new N;let A=0;const b=(e-t)/n;for(let F=0;F<=s;F++){const E=[],M=F/s,P=M*(e-t)+t;for(let V=0;V<=r;V++){const B=V/r,X=B*c+a,tt=Math.sin(X),$=Math.cos(X);I.x=P*tt,I.y=-M*n+m,I.z=P*$,f.push(I.x,I.y,I.z),T.set(tt,b,$).normalize(),d.push(T.x,T.y,T.z),p.push(B,1-M),E.push(g++)}_.push(E)}for(let F=0;F<r;F++)for(let E=0;E<s;E++){const M=_[E][F],P=_[E+1][F],V=_[E+1][F+1],B=_[E][F+1];u.push(M,P,B),u.push(P,V,B),A+=6}l.addGroup(h,A,0),h+=A}function v(T){const I=g,A=new kt,b=new N;let F=0;const E=T===!0?t:e,M=T===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let V=0;V<=r;V++){const X=V/r*c+a,tt=Math.cos(X),$=Math.sin(X);b.x=E*$,b.y=m*M,b.z=E*tt,f.push(b.x,b.y,b.z),d.push(0,M,0),A.x=tt*.5+.5,A.y=$*.5*M+.5,p.push(A.x,A.y),g++}for(let V=0;V<r;V++){const B=I+V,X=P+V;T===!0?u.push(X,X+1,B):u.push(X+1,X,B),F+=3}l.addGroup(h,F,T===!0?1:2),h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class En extends Ht{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new En(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ke extends ke{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new N,d=new N,p=[],g=[],_=[],m=[];for(let h=0;h<=n;h++){const w=[],v=h/n;let T=0;h===0&&o===0?T=.5/e:h===n&&c===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){const A=I/e;f.x=-t*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(A+T,1-v),w.push(l++)}u.push(w)}for(let h=0;h<n;h++)for(let w=0;w<e;w++){const v=u[h][w+1],T=u[h][w],I=u[h+1][w],A=u[h+1][w+1];(h!==0||o>0)&&p.push(v,T,A),(h!==n-1||c<Math.PI)&&p.push(T,I,A)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bn extends ke{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new N,f=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,w=(r+1)*p+g;o.push(_,m,w),o.push(m,h,w)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class H extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hl extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dl extends hl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xs=new pe,ac=new N,cc=new N;class e0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(ac),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),Xs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class n0 extends e0{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class i0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lc(){return(typeof performance>"u"?Date:performance).now()}const uc=new pe;class r0{constructor(t,e,n=0,r=1/0){this.ray=new Go(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ro(t[r],this,n,e);return n.sort(hc),n}}function hc(i,t){return i.distance-t.distance}function Ro(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ro(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);function s0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new ke;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=dc(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][d]);const g=dc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function dc(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const o=new t(s),a=new Je(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);a.setComponent(d+f,g,_)}}else o.set(u.array,c);c+=u.count*e}return r!==void 0&&(a.gpuType=r),a}const Yo={tower:{label:"空水塔積水",points:30},tarp:{label:"工地帆布積水",points:25},debris:{label:"廢棄物積水",points:20},roofGarden:{label:"屋頂花園積水",points:20},gutter:{label:"屋簷雨水槽積水",points:15},container:{label:"積水容器",points:10}},Jt=7,Tt=26,re=12,he=Tt+re,Qt=Jt*he/2,Ii={min:new N(-Qt-20,1.2,-Qt-20),max:new N(Qt+20,90,Qt+20)},Q=(i,t)=>i+Math.random()*(t-i),Kt=i=>i[Math.floor(Math.random()*i.length)];function o0(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=["#c9a876","#b5895f","#d4b483","#a67c52","#c2a878","#b98f6a"];t.fillStyle=Kt(e),t.fillRect(0,0,128,128);for(let r=10;r<118;r+=26)for(let s=10;s<118;s+=26)t.fillStyle=Math.random()<.3?"#ffd98a":"#3a2f28",t.fillRect(s,r,15,17);const n=new Gn(i);return n.colorSpace=Ce,n.wrapS=n.wrapT=ir,n}function fc(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.fillStyle=Kt(["#c62828","#1565c0","#2e7d32","#e65100","#6a1b9a"]),e.fillRect(0,0,256,64),e.fillStyle="#ffffff",e.font='bold 34px "Noto Sans TC", "Microsoft JhengHei", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,34);const n=new Gn(t);return n.colorSpace=Ce,n}const Hr=["台南牛肉湯","國華街小吃","安平劍獅","赤崁擔仔麵","鹽水意麵","東山咖啡","關廟鳳梨","虱目魚粥","永樂市場","學甲五金行","安平運河","度小月","棺材板","碗粿專賣","同記安平豆花"];function a0(i){const t=document.createElement("canvas");t.width=64,t.height=256;const e=t.getContext("2d");e.fillStyle=Kt(["#c62828","#1565c0","#2e7d32","#e65100","#6a1b9a"]),e.fillRect(0,0,64,256),e.fillStyle="#ffffff",e.font='bold 28px "Noto Sans TC", "Microsoft JhengHei", sans-serif',e.textAlign="center",e.textBaseline="middle";const n=i.slice(0,5).split(""),r=240/n.length;n.forEach((o,a)=>{e.fillText(o,32,8+r*(a+.5))});const s=new Gn(t);return s.colorSpace=Ce,s}function pc(){const i=document.createElement("canvas");i.width=96,i.height=160;const t=i.getContext("2d");t.fillStyle="#f2eee6",t.fillRect(0,0,96,160),t.strokeStyle="rgba(0,0,0,0.05)";for(let n=0;n<=160;n+=8)t.beginPath(),t.moveTo(0,n),t.lineTo(96,n),t.stroke();for(let n=0;n<=96;n+=8)t.beginPath(),t.moveTo(n,0),t.lineTo(n,160),t.stroke();for(let n=0;n<4;n++){const r=12+n*32;for(let s=0;s<2;s++){const o=14+s*44;t.fillStyle=Math.random()<.25?"#ffe2a6":"#332e28",t.fillRect(o,r,24,18),t.strokeStyle="rgba(190,195,200,0.8)";for(let a=o+4;a<o+24;a+=5)t.beginPath(),t.moveTo(a,r),t.lineTo(a,r+18),t.stroke()}t.fillStyle="rgba(120,110,100,0.35)",t.fillRect(6,r+20,84,4)}t.fillStyle="#6a625a",t.fillRect(8,138,80,20),t.strokeStyle="rgba(0,0,0,0.25)";for(let n=141;n<158;n+=3)t.beginPath(),t.moveTo(8,n),t.lineTo(88,n),t.stroke();const e=new Gn(i);return e.colorSpace=Ce,e}function c0(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d");t.fillStyle="rgba(238,238,230,0.85)";for(let n=2;n<64;n+=16)t.fillRect(0,n,32,8);const e=new Gn(i);return e.colorSpace=Ce,e}function cn(){return new H({color:2785205,roughness:.05,metalness:.55,emissive:1724280,emissiveIntensity:.35,transparent:!0,opacity:.92})}const l0=new Re({transparent:!0,opacity:0,depthWrite:!1});function u0(i,t,e,n,r){const s=new R(new Ke(t,8,8),l0);s.position.y=e,s.userData.inspect=n,i.add(s),r.push(s)}function $r(i,t){const e=new Gt,n=new H({color:12107460,roughness:.35,metalness:.85}),r=new H({color:5594211,roughness:.6,metalness:.5});for(let a=0;a<4;a++){const c=new R(new nt(.22,2.2,.22),r),l=a/4*Math.PI*2+Math.PI/4;c.position.set(Math.cos(l)*1.1,1.1,Math.sin(l)*1.1),e.add(c)}const s=new R(new Ht(1.5,1.5,2.4,20,1,!0),n);s.material=n.clone(),s.material.side=ve,s.position.y=3.4,e.add(s);const o=new R(new fe(1.5,20),n);if(o.rotation.x=-Math.PI/2,o.position.y=2.25,e.add(o),i){const a=new R(new fe(1.42,20),cn());a.rotation.x=-Math.PI/2,a.position.y=4.35,e.add(a),t.push(a)}else{const a=new R(new En(1.65,.8,20),n);a.position.y=4.95,e.add(a)}return e}function Nn(i,t,e){const n=new Gt,r=Kt(e??["bucket","basin","tire","trash","foam"]);if(r==="foam"){const s=new H({color:15921900,roughness:.95}),o=.72,a=.52,c=.42,l=.06,u=new R(new nt(o,l,a),s);u.position.y=l/2,n.add(u);for(const[f,d,p,g]of[[0,(a-l)/2,o,l],[0,-.46/2,o,l],[(o-l)/2,0,l,a-2*l],[-.6599999999999999/2,0,l,a-2*l]]){const _=new R(new nt(p,c,g),s);_.position.set(f,c/2,d),n.add(_)}if(i){const f=new R(new nt(o-2*l,.02,a-2*l),cn());f.position.y=c*.78,n.add(f),t.push(f)}else{const f=new R(new nt(o-2*l,.02,a-2*l),new H({color:14211280,roughness:.95}));f.position.y=l+.02,n.add(f)}return n}if(r==="trash"){const s=new H({color:Kt([3824196,4876938,5921370]),roughness:.7,side:ve}),o=new R(new Ht(.36,.3,.8,14,1,!0),s);o.position.y=.4,n.add(o);const a=new R(new fe(.3,14),s);a.rotation.x=-Math.PI/2,a.position.y=.02,n.add(a);const c=new R(new bn(.36,.025,6,16),s);if(c.rotation.x=Math.PI/2,c.position.y=.8,n.add(c),i){const l=new R(new fe(.32,14),cn());l.rotation.x=-Math.PI/2,l.position.y=.66,n.add(l),t.push(l)}return n}if(r==="tire"){const s=new R(new bn(.55,.24,12,24),new H({color:1842204,roughness:.9}));if(s.rotation.x=Math.PI/2,s.position.y=.24,n.add(s),i){const o=new R(new fe(.42,16),cn());o.rotation.x=-Math.PI/2,o.position.y=.3,n.add(o),t.push(o)}}else{const s=r==="bucket"?.45:.8,o=r==="bucket"?.85:.45,a=new H({color:Kt([4156851,11747135,4174687,9079434]),roughness:.7,side:ve}),c=new R(new Ht(s,s*.82,o,16,1,!0),a);c.position.y=o/2,n.add(c);const l=new R(new fe(s*.82,16),a);if(l.rotation.x=-Math.PI/2,l.position.y=.02,n.add(l),i){const u=new R(new fe(s*.92,16),cn());u.rotation.x=-Math.PI/2,u.position.y=o*.8,n.add(u),t.push(u)}}return n}function jr(i,t,e=3.2){const n=new Gt,r=new H({color:9080724,roughness:.6,metalness:.5}),s=.45,o=.22,a=new R(new nt(e,.05,s),r);a.position.y=.05,n.add(a);const c=new nt(e,o,.05),l=new R(c,r);l.position.set(0,o/2+.05,s/2),n.add(l);const u=new R(c,r);u.position.set(0,o/2+.05,-s/2),n.add(u);const f=new H({color:7044415,roughness:.95}),d=Math.max(2,Math.round(e/1.1));for(let p=0;p<d;p++){const g=new R(new fe(.12,6),f);g.rotation.x=-Math.PI/2,g.position.set(Q(-e/2+.3,e/2-.3),.09,Q(-.15,.15)),n.add(g)}if(i){const p=new R(new nt(e-.1,.03,s-.1),cn());p.position.y=.14,n.add(p),t.push(p)}return n}function mc(i,t,e=1){const n=new Gt,r=new H({color:Kt([4885082,4156851,13224393]),roughness:.5,metalness:.4,side:ve}),s=new R(new Ht(.26,.3,.5,12,1,!0),r);s.position.y=.25,n.add(s);const o=new R(new fe(.3,12),r);o.rotation.x=-Math.PI/2,o.position.y=.01,n.add(o);const a=new R(new Ht(.035,.055,.55,8),r);a.position.set(.42,.42,0),a.rotation.z=-.9,n.add(a);const c=new R(new bn(.17,.03,6,14,Math.PI),r);if(c.position.set(-.26,.42,0),c.rotation.y=Math.PI/2,c.rotation.z=Math.PI/2,n.add(c),i){const l=new R(new fe(.22,12),cn());l.rotation.x=-Math.PI/2,l.position.y=.42,n.add(l),t.push(l)}return n.scale.setScalar(e),n}function Zr(i,t,e){const n=(e==null?void 0:e.w)??5.6,r=(e==null?void 0:e.d)??4.6,s=new Gt,o=new H({color:10246716,roughness:.9}),a=[new H({color:5016127,roughness:.95}),new H({color:5938250,roughness:.95}),new H({color:4160826,roughness:.95})],c=[new H({color:13654666,roughness:.8}),new H({color:15255871,roughness:.8}),new H({color:13650490,roughness:.8})],l=new R(new se(n,r),new H({color:8235103,roughness:.95}));l.rotation.x=-Math.PI/2,l.position.y=.03,s.add(l);const u=new H({color:9071434,roughness:.9});for(const m of[-1,1]){const h=new R(new nt(n*.82,.4,.65),u);h.position.set(0,.23,m*(r/2-.42)),s.add(h);const w=Math.max(3,Math.round(n/1.7));for(let v=0;v<w;v++){const T=new R(new Ke(Q(.26,.38),8,6),Kt(a));T.scale.y=.75,T.position.set(-n*.36+(v+.5)*(n*.72/w),.55,m*(r/2-.42)),s.add(T)}}const f=Math.max(4,Math.round(n*r/9));for(let m=0;m<f;m++){const h=Q(.2,.32),w=Q(-(n/2-.8),n/2-.8),v=Q(-(r/2-1.4),r/2-1.4),T=new R(new Ht(h,h*.78,h*1.2,10),o);T.position.set(w,h*.6,v),s.add(T);const I=Math.random()<.35?new R(new Ke(h*.75,8,6),Kt(c)):new R(new Ke(h*1.05,8,6),Kt(a));I.position.set(w,h*1.2+h*.7,v),I.scale.y=.8,s.add(I)}const d=mc(!1,t,.9);d.position.set(Q(-(n/2-1),n/2-1),.03,Q(-(r/2-1.5),r/2-1.5)),d.rotation.y=Q(0,Math.PI*2),s.add(d);const p=Kt(["pot","bucket","can"]),g=Q(-1.2,1.2),_=Q(-1,1);if(p==="pot"){const m=new R(new Ht(.55,.44,.6,14,1,!0),new H({color:10246716,roughness:.9,side:ve}));m.position.set(g,.3,_),s.add(m);const h=new R(new fe(.44,14),o);if(h.rotation.x=-Math.PI/2,h.position.set(g,.04,_),s.add(h),i){const w=new R(new fe(.48,14),cn());w.rotation.x=-Math.PI/2,w.position.set(g,.48,_),s.add(w),t.push(w)}}else if(p==="bucket"){const m=new H({color:Kt([4156851,11747135,4174687]),roughness:.7,side:ve}),h=new R(new Ht(.4,.33,.6,14,1,!0),m);h.position.set(g,.3,_),s.add(h);const w=new R(new fe(.33,14),m);if(w.rotation.x=-Math.PI/2,w.position.set(g,.04,_),s.add(w),i){const v=new R(new fe(.35,14),cn());v.rotation.x=-Math.PI/2,v.position.set(g,.48,_),s.add(v),t.push(v)}}else{const m=mc(i,t,1.5);m.position.set(g,.03,_),m.rotation.y=Q(0,Math.PI*2),s.add(m)}return s}function h0(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d"),e=16;for(let r=0;r<128;r+=e)t.fillStyle=Math.floor(r/e)%2===0?"#4a90c2":"#eef2f5",t.fillRect(r,0,e,128);const n=new Gn(i);return n.colorSpace=Ce,n.wrapS=n.wrapT=ir,n}function Co(i,t){const e=new Gt,n=new H({color:2763306,roughness:.85}),r=Q(2,2.6),s=Q(1.3,1.7),o=2+Math.floor(Math.random()*2);for(let h=0;h<o;h++){const w=new R(new nt(r,.2,s),n);w.position.y=.12+h*.24,e.add(w)}const a=.12+o*.24+.08,c=h0(),l=new H({map:c,roughness:.75,side:ve}),u=r+.8,f=s+.8,d=new R(new se(u,f),l);d.rotation.x=-Math.PI/2,d.position.y=a,e.add(d);const p=.85,g=[{w:u,x:0,z:f/2,ry:0},{w:u,x:0,z:-f/2,ry:Math.PI},{w:f,x:u/2,z:0,ry:Math.PI/2},{w:f,x:-u/2,z:0,ry:-Math.PI/2}];for(const h of g){const w=new R(new se(h.w,p),l);w.position.set(h.x,a-p/2+.12,h.z),w.rotation.y=h.ry,w.rotation.x=-.12,e.add(w)}const _=new H({color:1710618,roughness:.9}),m=new R(new Ht(.025,.025,u+.3,6),_);if(m.rotation.z=Math.PI/2,m.position.y=a+.03,e.add(m),i){const h=new R(new fe(.5,16),cn());h.rotation.x=-Math.PI/2,h.position.set(Q(-.4,.4),a+.015,Q(-.3,.3)),e.add(h),t.push(h)}return e}function Jr(i,t){const e=new Gt,n=[new H({color:8022613,roughness:.9}),new H({color:6122354,roughness:.85}),new H({color:9207618,roughness:.9})],r=4+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const a=new R(new nt(Q(.5,1.4),Q(.3,.9),Q(.5,1.4)),Kt(n));a.position.set(Q(-1.4,1.4),a.geometry.parameters.height/2,Q(-1.4,1.4)),a.rotation.y=Q(0,Math.PI),a.castShadow=!0,e.add(a)}const s=new R(new bn(.5,.2,10,20),new H({color:1842204,roughness:.9}));if(s.rotation.x=Math.PI/2,s.position.set(Q(-1.5,1.5),.2,Q(-1.5,1.5)),e.add(s),i){const o=new R(new fe(1.1,20),cn());o.rotation.x=-Math.PI/2,o.scale.set(1,Q(.55,.8),1),o.rotation.z=Q(0,Math.PI),o.position.set(Q(-.8,.8),.03,Q(-.8,.8)),e.add(o),t.push(o)}return e}function Ko(){const i=new Gt,t=new R(new Ht(.18,.26,2.4,8),new H({color:7032366,roughness:.9}));t.position.y=1.2,i.add(t);const e=new R(new Ke(Q(1.1,1.7),10,8),new H({color:Kt([4160826,5016127,3502141]),roughness:.95}));return e.position.y=Q(2.6,3.2),e.castShadow=!0,i.add(e),i}function $o(){const i=new Gt,t=new H({color:6047024,roughness:.95}),e=new H({color:Kt([4160826,5016127,4684354]),roughness:.95}),n=new R(new Ht(.35,.55,2.6,8),t);n.position.y=1.3,i.add(n);const r=Q(2.2,3),s=new R(new Ke(r,10,8),e);s.scale.y=.6,s.position.y=3.3,s.castShadow=!0,i.add(s);const o=new H({color:9073238,roughness:.9}),a=4+Math.floor(Math.random()*3);for(let c=0;c<a;c++){const l=c/a*Math.PI*2+Q(-.3,.3),u=Q(.6,r*.8),f=Math.cos(l)*u,d=Math.sin(l)*u,p=Q(2.6,3.6),g=Q(1.4,p-.1),_=new R(new Ht(.03,.06,g,5),o);_.position.set(f,p-g/2,d),i.add(_)}return i}function d0(){const i=new Gt,t=new H({color:Kt([14043199,4153302,14076223,4539717,14737632]),roughness:.5,metalness:.3}),e=new H({color:1842204,roughness:.9}),n=new H({color:2236962,roughness:.8}),r=new R(new nt(.5,.45,1.5),t);r.position.y=.5,i.add(r);const s=new R(new nt(.46,.12,.7),n);s.position.set(0,.76,-.1),i.add(s);const o=new R(new nt(.62,.06,.06),n);o.position.set(0,.92,.65),i.add(o);for(const a of[.55,-.55]){const c=new R(new Ht(.28,.28,.1,12),e);c.rotation.z=Math.PI/2,c.position.set(0,.28,a),i.add(c)}return i}function f0(i,t){const e=new Gt,n=new H({color:9055790,roughness:.85}),r=new H({color:3811866,roughness:.8}),s=new H({color:3099194,roughness:.7}),o=new H({color:13214247,roughness:.4,metalness:.5}),a=Q(5,8),c=new R(new nt(i,a,t),n);c.position.y=a/2,c.castShadow=!0,c.receiveShadow=!0,e.add(c);for(const _ of[-1,1])for(const m of[-1,1]){const h=new R(new Ht(.22,.22,a,8),r);h.position.set(_*(i/2-.3),a/2,m*(t/2-.3)),e.add(h)}const l=i*1.25,u=t*1.25,f=new R(new nt(l,.4,u),s);f.position.y=a+.2,f.castShadow=!0,e.add(f);const d=new R(new nt(l*.9,.15,.15),o);d.position.y=a+.42,e.add(d);const p=new nt(.22,1.1,.22),g=[[l/2-.3,u/2-.3],[l/2-.3,-u/2+.3],[-l/2+.3,u/2-.3],[-l/2+.3,-u/2+.3]];for(const[_,m]of g){const h=new R(p,s);h.position.set(_,a+.85,m),h.rotation.z=Math.sign(_)*.5,h.rotation.x=Math.sign(m)*.5,e.add(h)}for(const _ of[-1,1]){const m=new R(new Ke(.24,8,6),new H({color:13056570,emissive:8002588,emissiveIntensity:.4,roughness:.7}));m.position.set(_*(i/2-.6),a-.6,t/2+.15),e.add(m)}return e}function pl(i,t,e,n,r,s=1){const c=new H({color:7034946,roughness:.85}),l=new H({color:13215862,roughness:.8}),u=new R(new nt(n,.22,2),c);u.position.set(t,3.6,e+s*(r/2+2/2)),u.castShadow=!0,i.add(u);const f=Math.max(2,Math.round(n/3));for(let d=0;d<f;d++){const p=t-n/2+(d+.5)*(n/f),g=new R(new Ht(.16,.16,3.6,8),l);g.position.set(p,3.6/2,e+s*(r/2+2-.2)),i.add(g)}if(Math.random()<.4){const d=new H({color:13056570,emissive:8002588,emissiveIntensity:.4,roughness:.7}),p=3;for(let g=0;g<p;g++){const _=t-n/3+g/(p-1)*(n*2/3),m=new R(new Ke(.16,8,6),d);m.position.set(_,3.6-.35,e+s*(r/2+2-.3)),i.add(m)}}return{ground:{x:t,z:e+s*(r/2+2*.6)},eave:{x:t+Q(-n/4,n/4),y:3.6+.12,z:e+s*(r/2+2/2)}}}function p0(i,t,e,n,r,s,o,a,c,l){const f=a*.88,d=a*.72,p=f/3,g=[];for(let _=0;_<3;_++){const m=s-f/2+p*(_+.5),w=(2+Math.floor(Math.random()*4))*3*Q(.95,1.05),v=new R(new nt(p,w,d),Kt(l.facadeMats));v.position.set(m,w/2+.2,o),v.castShadow=!0,v.receiveShadow=!0,i.add(v);const T=new Pe().setFromObject(v);T.expandByScalar(.9),t.push(T);const I=w+.2,A=Math.random()<.5;if(g.push({hx:m,h:w,hasMetal:A}),A){const b=Kt(l.metalMats),F=new R(new nt(p*.9,2,d*.9),b);F.position.set(m,I+1,o),i.add(F);const E=new R(new nt(p*1.04,.08,d*1.1),b);E.position.set(m,I+2.15,o),E.rotation.x=.09*(Math.random()<.5?1:-1),E.castShadow=!0,i.add(E)}else{const E=[new nt(p,.55,.15).translate(0,0,(d-.15)/2),new nt(p,.55,.15).translate(0,0,-4.6049999999999995),new nt(.15,.55,d-.3).translate((p-.15)/2,0,0),new nt(.15,.55,d-.3).translate(-1.8316666666666666,0,0)],M=new R(s0(E),l.parapetMat);if(M.position.set(m,I+.55/2,o),i.add(M),Math.random()<.4){const P=new R(l.stairGeo,l.stairMat);P.position.set(m+(p/2-1.1)*(Math.random()<.5?1:-1),I+.95,o-c*(d/2-1.3)),i.add(P)}e.push({x:m,y:I,z:o,w:p,d,parapet:!0})}if(Math.random()<.6){const b=new R(new se(p*.9,.9),Kt(l.signMats));b.position.set(m,4.4,o+c*(d/2+.06)),c<0&&(b.rotation.y=Math.PI),i.add(b)}}for(let _=0;_<2;_++){const m=g[_],h=g[_+1];if(Math.abs(m.h-h.h)<2.5)continue;const w=m.h<h.h?m:h;if(w.hasMetal)continue;const v=(m.hx+h.hx)/2,T=w.hx<v?-1:1;r.push({x:v+T*.7,y:w.h+.2,z:o+Q(-d/4,d/4)})}if(Math.random()<.45){const _=pl(i,s,o,f,d,c);Math.random()<.5&&n.push(_.ground),r.push(_.eave)}}function m0(){const i=document.createElement("canvas");i.width=256,i.height=96;const t=i.getContext("2d");t.fillStyle="#f5f0e0",t.fillRect(0,0,256,96),t.save(),t.beginPath(),t.rect(0,0,256,14),t.rect(0,82,256,14),t.clip();for(let n=-20;n<276;n+=20)t.fillStyle="#e8b800",t.beginPath(),t.moveTo(n,0),t.lineTo(n+10,0),t.lineTo(n-4,96),t.lineTo(n-14,96),t.closePath(),t.fill(),t.fillStyle="#222222",t.beginPath(),t.moveTo(n+10,0),t.lineTo(n+20,0),t.lineTo(n+6,96),t.lineTo(n-4,96),t.closePath(),t.fill();t.restore(),t.fillStyle="#c62828",t.font='bold 34px "Noto Sans TC", "Microsoft JhengHei", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("施工中 請勿進入",128,48);const e=new Gn(i);return e.colorSpace=Ce,e}function g0(i,t,e,n){const r=new R(new se(Tt,Tt),new H({color:10124634,roughness:.98}));r.rotation.x=-Math.PI/2,r.position.set(e,.21,n),i.add(r);const s=new H({color:3829416,roughness:.55,metalness:.35});for(const[z,K,At,yt]of[[0,-Tt/2,Tt,.25],[0,Tt/2,Tt,.25],[-Tt/2,0,.25,Tt],[Tt/2,0,.25,Tt]]){const gt=new R(new nt(At,2.4,yt),s);gt.position.set(e+z,1.4,n+K),i.add(gt)}const o=new H({color:11972772,roughness:.9}),a=new Gt,c=9,l=7;for(const z of[-1,0,1])for(const K of[-1,1]){const At=new R(new nt(.4,6.4,.4),o);At.position.set(z*(c/2-.3),3.2,K*(l/2-.3)),At.castShadow=!0,a.add(At)}for(const z of[3.1,6.3]){const K=new R(new nt(c,.3,l),o);K.position.y=z,K.castShadow=!0,a.add(K)}const u=new H({color:9080724,roughness:.5,metalness:.6}),f=new H({color:3116879,transparent:!0,opacity:.5,side:ve,roughness:.9}),d=new Ht(.05,.05,7.2,6);for(let z=0;z<5;z++){const K=new R(d,u);K.position.set(-c/2+z*(c/4),3.6,-l/2-.55),a.add(K)}for(const z of[2.2,4.4,6.6]){const K=new R(new nt(c+.4,.07,.07),u);K.position.set(0,z,-l/2-.55),a.add(K)}const p=new R(new se(c+.6,7),f);p.position.set(0,3.7,-l/2-.75),a.add(p);for(let z=0;z<4;z++){const K=new R(d,u);K.position.set(-c/2-.55,3.6,-l/2+.4+z*((l-.8)/3)),a.add(K)}for(const z of[2.2,4.4,6.6]){const K=new R(new nt(.07,.07,l+.4),u);K.position.set(-c/2-.55,z,0),a.add(K)}const g=new R(new se(l+.6,7),f);g.rotation.y=Math.PI/2,g.position.set(-c/2-.75,3.7,0),a.add(g);const _=new H({color:10254922,roughness:.9,side:ve}),m=new R(new se(c/2-.6,2.6),_);m.position.set(c/4,1.5,l/2-.28),a.add(m),a.position.set(e-6.5,.2,n-6.5),i.add(a);const h=new Pe().setFromObject(a);h.expandByScalar(.9),t.push(h);const w=new H({color:15251456,roughness:.5,metalness:.3}),v=new Gt,T=new R(new nt(.8,14,.8),w);T.position.y=7,T.castShadow=!0,v.add(T);const I=new R(new nt(1.1,1.1,1.1),w);I.position.y=14.5,v.add(I);const A=new R(new nt(12,.45,.45),w);A.position.set(-6,15.1,0),A.castShadow=!0,v.add(A);const b=new R(new nt(4,.45,.45),w);b.position.set(2.5,15.1,0),v.add(b);const F=new R(new nt(1,1,.9),new H({color:9079430,roughness:.9}));F.position.set(4.2,14.8,0),v.add(F);const E=new R(new nt(.5,1.6,.5),w);E.position.y=16.1,v.add(E);const M=new H({color:5592405,roughness:.6});for(const[z,K,At]of[[-3.5,7.4,.28],[2.2,4.6,-.42]]){const yt=new R(new Ht(.035,.035,K,5),M);yt.position.set(z,15.9,0),yt.rotation.z=Math.PI/2+At,v.add(yt)}const P=new R(new Ht(.03,.03,6,5),M);P.position.set(-9.5,12,0),v.add(P);const V=new R(new nt(.35,.35,.35),w);V.position.set(-9.5,8.9,0),v.add(V),v.position.set(e+2,.2,n-10.2),i.add(v);const B=new Pe().setFromObject(T.clone());B.translate(new N(e+2,.2,n-10.2)),B.expandByScalar(.9),t.push(B);const X=new Gt,tt=new H({color:3026478,roughness:.9}),$=new H({color:14262290,roughness:.55,metalness:.2});for(const z of[-.62,.62]){const K=new R(new nt(2.6,.55,.6),tt);K.position.set(0,.28,z),X.add(K)}const it=new R(new nt(2.1,.55,1.7),$);it.position.y=.85,X.add(it);const j=new R(new nt(.95,.95,.9),$);j.position.set(-.45,1.6,.35),X.add(j);const mt=new R(new se(.7,.6),new H({color:2241348,roughness:.2,metalness:.4}));mt.position.set(.04,1.65,.35),mt.rotation.y=Math.PI/2,X.add(mt);const xt=new R(new nt(2.3,.32,.3),$);xt.position.set(1.55,1.85,-.1),xt.rotation.z=.62,xt.castShadow=!0,X.add(xt);const dt=new R(new nt(1.7,.24,.24),$);dt.position.set(3,1.75,-.1),dt.rotation.z=-.95,X.add(dt);const Ot=new R(new nt(.6,.45,.55),tt);Ot.position.set(3.55,.75,-.1),X.add(Ot),X.rotation.y=Q(-.4,.4),X.position.set(e+8.2,.2,n+.2),i.add(X);const qt=new Pe().setFromObject(X);qt.expandByScalar(.9),t.push(qt);const Z=new Gt,ct=new R(new nt(4.8,2.5,2.2),new H({color:14542056,roughness:.6,metalness:.25}));ct.position.y=1.35,ct.castShadow=!0,Z.add(ct);const St=new R(new se(4.8,.5),new H({color:2777e3,roughness:.6}));St.position.set(0,2.3,1.11),Z.add(St);const vt=new R(new se(.8,1.8),new H({color:4872800,roughness:.7}));vt.position.set(-1.6,1,1.11),Z.add(vt);const Dt=new R(new se(1.4,.8),new H({color:3359829,roughness:.2}));Dt.position.set(.8,1.5,1.11),Z.add(Dt),Z.rotation.y=.08,Z.position.set(e-8.5,.2,n+10.3),i.add(Z);const Bt=new Pe().setFromObject(Z);Bt.expandByScalar(.9),t.push(Bt);const zt=new R(new nt(1.05,2.3,1.05),new H({color:7649496,roughness:.6}));zt.position.set(e-4.6,1.35,n+11.2),zt.castShadow=!0,i.add(zt);const oe=new R(new se(.7,1.9),new H({color:4886712,roughness:.6}));oe.position.set(e-4.6,1.2,n+11.2-.54),oe.rotation.y=Math.PI,i.add(oe);const C=new H({color:7031354,roughness:.7,metalness:.4}),le=new H({color:8019002,roughness:.9});for(const z of[-2,2]){const K=new R(new nt(1.2,.22,.22),le);K.position.set(e+10.8,.31,n+4+z),i.add(K)}const $t=new Ht(.045,.045,6,5);for(let z=0;z<7;z++){const K=new R($t,C);K.rotation.x=Math.PI/2,K.position.set(e+10.5+z%4*.12,.47+Math.floor(z/4)*.1,n+4),i.add(K)}const jt=new H({color:11569750,roughness:.9});for(let z=0;z<4;z++){const K=new R(new nt(3,.12,.9),jt);K.position.set(e-10.6+Q(-.08,.08),.28+z*.13,n+.5+Q(-.08,.08)),K.rotation.y=Q(-.05,.05),i.add(K)}const wt=new R(new nt(1.4,.12,1.1),le);wt.position.set(e-10.6,.28,n+3.6),i.add(wt);const W=new R(new nt(1.3,.8,1),new H({color:10242618,roughness:.95}));W.position.set(e-10.6,.75,n+3.6),i.add(W);const st=new Ht(.32,.32,.92,12);[2777e3,9062960,3828298].forEach((z,K)=>{const At=new R(st,new H({color:z,roughness:.55,metalness:.35}));At.position.set(e+11+K%2*.75,.68,n-6.5+Math.floor(K/2)*.75),i.add(At)});const S=new H({color:8020552,roughness:.98});for(const z of[-2.3,-.7]){const K=new R(new se(.5,15),S);K.rotation.x=-Math.PI/2,K.position.set(e+z,.215,n+5),i.add(K)}const x=new H({color:8024680,roughness:.98});for(const[z,K,At]of[[4,-2,1.8],[-3,2.5,1.4]]){const yt=new R(new fe(At,14),x);yt.rotation.x=-Math.PI/2,yt.position.set(e+z,.213,n+K),i.add(yt)}const L=new R(new En(2.1,1.3,12),new H({color:13809022,roughness:.98}));L.position.set(e+6,.85,n-7),i.add(L);const q=new R(new En(1.6,1,12),new H({color:9079430,roughness:.98}));q.position.set(e+9.5,.7,n-3.5),i.add(q);const J=new H({color:12893874,roughness:.85,side:ve}),Y=new Ht(.6,.6,2.6,14,1,!0),pt=[[e-7.5,.8,n+6,0],[e-7.5,.8,n+7.4,0],[e-7.5,1.85,n+6.7,0]];for(const[z,K,At]of pt){const yt=new R(Y,J);yt.rotation.z=Math.PI/2,yt.position.set(z,K,At),i.add(yt)}const at=new H({color:15231504,roughness:.6});for(let z=0;z<5;z++){const K=new R(new En(.18,.55,8),at);K.position.set(e+Q(-4,4),.48,n+Tt/2-Q(1.5,4)),i.add(K)}const lt=new R(new se(3.2,1.2),new Re({map:m0(),side:ve}));lt.position.set(e,1.9,n+Tt/2+.2),i.add(lt);const Rt=new H({color:5592405,roughness:.7});for(const z of[-1.3,1.3]){const K=new R(new Ht(.05,.05,2.4,6),Rt);K.position.set(e+z,1.2,n+Tt/2+.2),i.add(K)}return[{x:e+Q(2,5),z:n+Q(2,5)},{x:e+Q(-3,0),z:n+Q(5,8)},{x:e+Q(4,8),z:n+Q(5,8)},{x:e+Q(1,5),z:n+Q(-4,-1)}]}function _0(){const i=new Gt,t=new H({color:Kt([9067066,5925498,3824202]),roughness:.7}),e=new R(new nt(1.2,.5,3.2),t);e.position.y=.25,i.add(e);const n=new R(new nt(.9,.6,1.2),new H({color:14736587,roughness:.8}));return n.position.set(0,.75,-.6),i.add(n),i}function gc(){const i=new Gt,t=new H({color:Kt([14211288,2763310,9050650,2771578,13156520,4876874,14721056]),roughness:.4,metalness:.3}),e=new R(new nt(1.7,.5,4),t);e.position.y=.5,i.add(e);const n=new R(new nt(1.5,.4,2),new H({color:2241092,roughness:.2,metalness:.4}));n.position.set(0,.95,-.25),i.add(n);const r=new H({color:1710618,roughness:.9}),s=new Ht(.3,.3,.24,10);for(const c of[-.82,.82])for(const l of[-1.25,1.25]){const u=new R(s,r);u.rotation.z=Math.PI/2,u.position.set(c,.3,l),i.add(u)}const o=new Re({color:16773824}),a=new Re({color:12591136});for(const c of[-.55,.55]){const l=new R(new nt(.3,.12,.06),o);l.position.set(c,.55,2.01),i.add(l);const u=new R(new nt(.3,.12,.06),a);u.position.set(c,.55,-2.01),i.add(u)}return i}function x0(){const i=new Gt,t=new H({color:Kt([15252373,14262383,13208154]),roughness:.8}),e=new H({color:Kt([14178890,4881077,15257690,5939306,15790314,9067168,3816e3]),roughness:.8}),n=new H({color:Kt([2767445,3815994,6969925]),roughness:.85}),r=new nt(.13,.62,.13);r.translate(0,-.31,0);const s=new R(r,n);s.position.set(-.09,.62,0),i.add(s);const o=new R(r,n);o.position.set(.09,.62,0),i.add(o);const a=new R(new nt(.36,.5,.2),e);a.position.y=.62+.25,i.add(a);const c=new R(new Ke(.13,10,10),t);if(c.position.y=1.27,i.add(c),Math.random()<.35){const d=new R(new Ht(.15,.15,.06,10),new H({color:Kt([15261896,4876938,12606010]),roughness:.8}));d.position.y=1.38,i.add(d)}const l=new nt(.09,.48,.09);l.translate(0,-.24,0);const u=new R(l,e);u.position.set(-.23,1.1,0),i.add(u);const f=new R(l,e);return f.position.set(.23,1.1,0),i.add(f),i.userData.limbs={legL:s,legR:o,armL:u,armR:f},i}const _c=[[1,1],[-1,1],[-1,-1],[1,-1]],He=Tt/2+.6,ml=20,gl=i=>i<8,_l=i=>i>=10&&i<18,xc=(i,t)=>i==="z"?t<2:t>=10&&t<12,v0=[15216688,16762670,3072106],Po=[4198416,4207112,1064992];function vc(i,t){for(let e=0;e<3;e++)i[e].color.setHex(e===t?v0[e]:Po[e])}function M0(i,t){i.t=(i.t+t)%ml;const e=i.t;vc(i.lampMats.ns,gl(e)?2:e<10?1:0),vc(i.lampMats.ew,_l(e)?2:e>=18?1:0)}function Mc(i,t,e){const n=new Gt,r=new R(new Ht(.09,.11,5.2,8),t);r.position.y=2.6,n.add(r);const s=new R(new Ht(.06,.06,4.4,6),t);s.rotation.z=Math.PI/2,s.position.set(-2.2,5.1,0),n.add(s);const o=new R(new nt(1.24,.44,.2),e);o.position.set(-4.2,4.72,0),n.add(o);for(let a=0;a<3;a++){const c=new R(new nt(.3,.3,.28),i[a]);c.position.set(-4.2-.38+a*.38,4.72,0),n.add(c)}return n}function tr(i,t,e){const n=2*e;return Math.abs(t-e)<.05?0*n+(e-i)/(2*e)*n:Math.abs(i+e)<.05?1*n+(e-t)/(2*e)*n:Math.abs(t+e)<.05?2*n+(i+e)/(2*e)*n:3*n+(t+e)/(2*e)*n}function S0(i,t,e,n,r){const s=n>0?(t-i+r)%r:(i-t+r)%r,o=n>0?(e-i+r)%r:(i-e+r)%r;return o>0&&o<=s}function y0(i,t,e){for(const n of i){const{legL:r,legR:s,armL:o,armR:a}=n.group.userData.limbs;if(n.mode==="wait"){r.rotation.x*=.85,s.rotation.x*=.85,o.rotation.x*=.85,a.rotation.x*=.85,xc(n.cross.walkAxis,e.t)&&(n.mode="cross",n.u=0);continue}n.phase+=t*n.speed*4.2;const c=Math.sin(n.phase)*.5;if(r.rotation.x=c,s.rotation.x=-c,o.rotation.x=-c*.7,a.rotation.x=c*.7,n.mode==="cross"){const h=n.cross,w=h.to.x-h.from.x,v=h.to.z-h.from.z,T=Math.hypot(w,v);n.u=Math.min(1,n.u+n.speed*1.4*t/T);const I=Math.min(n.u,1-n.u),A=.02+.18*(1-Math.min(I/.1,1));n.group.position.set(h.from.x+w*n.u,A,h.from.z+v*n.u),n.group.rotation.y=Math.atan2(w,v),n.u>=1&&(n.bx=h.toBx,n.bz=h.toBz,n.cx=-Qt+n.bx*he+Tt/2,n.cz=-Qt+n.bz*he+Tt/2,n.s=tr(h.to.x-n.cx,h.to.z-n.cz,n.R),n.mode="loop",n.group.position.y=.2);continue}const l=2*n.R,u=4*l,f=n.s;n.s=((n.s+n.dir*n.speed*t)%u+u)%u;const d=e.crossings.get(n.bx+","+n.bz);if(d){let h=null;for(const w of d)if(S0(f,n.s,w.s,n.dir,u)&&Math.random()<.45){h=w;break}if(h){n.cross=h,n.u=0,n.group.position.set(h.from.x,.2,h.from.z),n.group.rotation.y=Math.atan2(h.to.x-h.from.x,h.to.z-h.from.z),n.mode=xc(h.walkAxis,e.t)?"cross":"wait";continue}}const p=Math.floor(n.s/l),g=n.s%l/l,_=_c[p],m=_c[(p+1)%4];n.group.position.x=n.cx+(_[0]+(m[0]-_[0])*g)*n.R,n.group.position.z=n.cz+(_[1]+(m[1]-_[1])*g)*n.R,n.group.rotation.y=Math.atan2((m[0]-_[0])*n.dir,(m[1]-_[1])*n.dir)}}const qs=re/2+6.4;function w0(i,t,e){const n=e.t,r=!gl(n),s=!_l(n),o=Qt+30;for(const a of i){const c=a.group.position,l=a.axis==="z"?c.z:c.x;let u=a.speed*t;if(a.sig&&(a.axis==="z"?r:s)){const d=a.axis==="z"?e.stopZs:e.stopXs;let p=1/0;for(const g of d){const _=(g-l)*a.dir;_>0&&_<p&&(p=_)}p!==1/0&&p>qs?u=Math.min(u,p-qs):p!==1/0&&p>qs-.2&&(u=0)}let f=1/0;for(const d of i){if(d===a||d.axis!==a.axis||d.dir!==a.dir)continue;const p=d.group.position;if((a.axis==="z"?Math.abs(p.x-c.x):Math.abs(p.z-c.z))>1)continue;const _=((a.axis==="z"?p.z:p.x)-l)*a.dir;_>0&&_<f&&(f=_)}f!==1/0&&(u=Math.min(u,Math.max(0,f-5.2))),a.axis==="z"?(c.z+=a.dir*u,a.dir>0&&c.z>o?c.z=-o:a.dir<0&&c.z<-o&&(c.z=o)):(c.x+=a.dir*u,a.dir>0&&c.x>o?c.x=-o:a.dir<0&&c.x<-o&&(c.x=o))}}function E0(){const i=new Gt,t=new H({color:12564134,roughness:.9}),e=new R(new nt(3.6,.24,3.6),t);e.position.y=.12,i.add(e);const n=new H({color:9062970,roughness:.7});for(const c of[-1.3,1.3])for(const l of[-1.3,1.3]){const u=new R(new Ht(.1,.1,2.3,8),n);u.position.set(c,.24+1.15,l),i.add(u)}const r=new H({color:11041362,roughness:.8});for(const[c,l,u,f]of[[0,-1.05,2.2,.35],[-1.05,0,.35,2.2],[1.05,0,.35,2.2]]){const d=new R(new nt(u,.1,f),r);d.position.set(c,.68,l),i.add(d)}const s=new H({color:9058858,roughness:.75}),o=new R(new En(2.9,1.5,4),s);o.rotation.y=Math.PI/4,o.position.y=2.54+.75,i.add(o);const a=new R(new Ke(.16,8,8),s);return a.position.y=2.54+1.5,i.add(a),i}function T0(){const i=new Gt,t=new H({color:4881077,roughness:.5}),e=new H({color:14702138,roughness:.4});for(const a of[-.55,.55])for(const c of[-.55,.55]){const l=new R(new Ht(.06,.06,1.5,6),t);l.position.set(a,.75,c),i.add(l)}const n=new R(new nt(1.3,.1,1.3),t);n.position.y=1.5,i.add(n);const r=new R(new En(1.05,.6,4),e);r.rotation.y=Math.PI/4,r.position.y=2.5,i.add(r);for(const a of[-.5,.5])for(const c of[-.5,.5]){const l=new R(new Ht(.04,.04,.7,6),t);l.position.set(a,1.9,c),i.add(l)}const s=new R(new nt(.8,.08,2.6),e);s.rotation.x=.62,s.position.set(0,.85,1.65),i.add(s);const o=new H({color:15777856,roughness:.5});for(let a=0;a<4;a++){const c=new R(new nt(.7,.07,.25),o);c.position.set(0,.35+a*.38,-.75-(3-a)*.22),i.add(c)}return i}function b0(){const i=new Gt,t=new H({color:3836506,roughness:.5});for(const s of[-1,1])for(const o of[-1,1]){const a=new R(new Ht(.06,.06,2.5,6),t);a.position.set(s*1.5,1.1,o*.55),a.rotation.x=-o*.42,i.add(a)}const e=new R(new Ht(.055,.055,3.1,6),t);e.rotation.z=Math.PI/2,e.position.y=2.25,i.add(e);const n=new H({color:5592405,roughness:.8}),r=new H({color:15777856,roughness:.5});for(const s of[-.7,.7]){for(const a of[-.2,.2]){const c=new R(new Ht(.02,.02,1.55,4),n);c.position.set(s+a,1.45,0),i.add(c)}const o=new R(new nt(.5,.06,.24),r);o.position.set(s,.65,0),i.add(o)}return i}function A0(){const i=new Gt,t=new H({color:10119754,roughness:.8}),e=new H({color:4473924,roughness:.7}),n=new R(new nt(1.5,.08,.45),t);n.position.y=.45,i.add(n);const r=new R(new nt(1.5,.4,.07),t);r.position.set(0,.78,-.2),r.rotation.x=-.12,i.add(r);for(const s of[-.6,.6]){const o=new R(new nt(.08,.45,.4),e);o.position.set(s,.22,0),i.add(o)}return i}function R0(i,t,e,n){const r=new R(new se(Tt-.8,Tt-.8),new H({color:7314517,roughness:.95}));r.rotation.x=-Math.PI/2,r.position.set(e,.21,n),r.receiveShadow=!0,i.add(r);const s=new H({color:13287592,roughness:.95});for(const[w,v]of[[Tt-1,2.2],[2.2,Tt-1]]){const T=new R(new se(w,v),s);T.rotation.x=-Math.PI/2,T.position.set(e,.225,n),i.add(T)}const o=new R(new fe(3,24),s);o.rotation.x=-Math.PI/2,o.position.set(e,.226,n),i.add(o);const a=new H({color:4880954,roughness:.95}),c=Tt/2-.8,l=(Tt-1.6-3.2)/2,u=1.6+l/2;for(const w of[-1,1])for(const v of[-1,1]){const T=new R(new nt(l,.6,.6),a);T.position.set(e+v*u,.5,n+w*c),i.add(T);const I=new R(new nt(.6,.6,l),a);I.position.set(e+w*c,.5,n+v*u),i.add(I)}const f=E0();f.position.set(e-6.5,.2,n-6.5),f.rotation.y=Q(0,Math.PI*2),i.add(f);const d=new Pe().setFromObject(f);d.expandByScalar(.6),t.push(d);const p=new R(new fe(4.8,24),new H({color:14338464,roughness:.98}));p.rotation.x=-Math.PI/2,p.position.set(e+6.2,.224,n+5.8),i.add(p);const g=T0();g.position.set(e+4.6,.22,n+7.2),g.rotation.y=Q(0,Math.PI*2),i.add(g);const _=new Pe().setFromObject(g);_.expandByScalar(.5),t.push(_);const m=b0();m.position.set(e+8.2,.22,n+3.6),m.rotation.y=Q(-.4,.4),i.add(m);const h=new Pe().setFromObject(m);h.expandByScalar(.5),t.push(h);for(const[w,v,T]of[[e-4.2,n+1.6,Math.PI],[e+1.6,n-4.2,Math.PI/2]]){const I=A0();I.position.set(w,.22,v),I.rotation.y=T,i.add(I)}for(let w=0;w<8;w++){const v=w/8*Math.PI*2+Q(-.15,.15),T=Q(9.2,11),I=e+Math.cos(v)*T,A=n+Math.sin(v)*T;if(Math.abs(I-e)<2.2||Math.abs(A-n)<2.2)continue;const b=Math.random()<.35?$o():Ko();b.position.set(I,.2,A),i.add(b)}return[{x:e-9.6+Q(-.6,.6),z:n+9.6+Q(-.6,.6)},{x:e+9.6+Q(-.6,.6),z:n-9.6+Q(-.6,.6)},{x:e-9.6+Q(-.6,.6),z:n-9.9+Q(-.4,.4)},{x:e+10+Q(-.4,.4),z:n+9.9+Q(-.4,.4)}]}function C0(){const i=new R(new En(Q(.18,.34),Q(.4,.85),5),new H({color:Kt([7305786,8227397,6253109,9079376]),roughness:.95}));return i.position.y=.2,i}function P0(){const i=new Gt,t=new H({color:Kt([8022618,5925498,6969928,7622762]),roughness:.95}),e=new R(new nt(1.9,.45,.85),t);e.position.y=.28,i.add(e);const n=new R(new nt(1.9,.6,.25),t);n.position.set(0,.72,-.32),n.rotation.x=-.12,i.add(n);for(const r of[-1.02,1.02]){const s=new R(new nt(.24,.62,.85),t);s.position.set(r,.42,0),i.add(s)}return i}function L0(){const i=new Gt,t=new H({color:Kt([8018490,6967093,9071176]),roughness:.9}),e=new R(new nt(1.1,1.9,.55),t);e.position.y=.95,i.add(e);const n=new R(new nt(.5,1.7,.05),t);return n.position.set(.35,.95,.34),n.rotation.y=.5,i.add(n),i.rotation.z=Q(.05,.12),i}function I0(){const i=new Gt,t=new H({color:1842204,roughness:.95}),e=new bn(.42,.17,8,18),n=2+Math.floor(Math.random()*3);for(let s=0;s<n;s++){const o=new R(e,t);o.rotation.x=Math.PI/2,o.position.set(Q(-.08,.08),.18+s*.34,Q(-.08,.08)),i.add(o)}const r=new R(e,t);return r.position.set(.85,.42,.2),r.rotation.set(.25,0,.35),i.add(r),i}function D0(){const i=new Gt;for(let t=0;t<7;t++){const e=Math.random()<.45,n=e?Q(.05,.07):Q(.05,.08),r=e?Q(.12,.16):Q(.22,.32),s=new R(new Ht(n,n,r,7),new H({color:Kt(e?[12106944,12623920,10502192]:[4880954,9071146,11059384]),roughness:e?.4:.2,metalness:e?.5:.1})),o=Math.random()<.5;s.position.set(Q(-.8,.8),o?n:r/2,Q(-.8,.8)),o&&s.rotation.set(Math.PI/2,0,Q(0,Math.PI)),i.add(s)}return i}function U0(){const i=new Gt,t=new H({color:Kt([10119754,8018504,6974050]),roughness:1}),e=new R(new nt(1.7,.5,4),t);e.position.y=.38,i.add(e);const n=new R(new nt(1.5,.4,2),new H({color:2763304,roughness:.9}));n.position.set(0,.82,-.25),i.add(n);const r=new H({color:1710618,roughness:.95}),s=new Ht(.3,.3,.24,10),o=Math.floor(Math.random()*4);let a=0;for(const c of[-.82,.82])for(const l of[-1.25,1.25]){if(a++===o)continue;const u=new R(s,r);u.rotation.z=Math.PI/2,u.position.set(c,.22,l),i.add(u)}return i.rotation.z=.03,i}function N0(){const i=new Gt,t=new R(new nt(.62,.85,.62),new H({color:14211280,roughness:.8}));t.position.y=.43,i.add(t);const e=new R(new fe(.2,12),new H({color:2767428,roughness:.3}));return e.position.set(0,.48,.315),i.add(e),i.rotation.z=Q(-.08,.08),i}function F0(){const i=new R(new nt(1.4,.22,2),new H({color:13156524,roughness:.95}));return i.position.y=.32,i.rotation.y=Q(0,Math.PI),i}function O0(i,t,e,n,r){const s=Kt(["fenced","overgrown","dump"]),o=new R(new se(Tt-.5,Tt-.5),new H({color:9078362,roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(n,.21,r),i.add(o);for(let d=0;d<6;d++){const p=new R(new fe(Q(1.5,3.2),10),new H({color:Kt([10127984,7305786,8223311]),roughness:1}));p.rotation.x=-Math.PI/2,p.position.set(n+Q(-9,9),.215,r+Q(-9,9)),i.add(p)}if(s==="fenced"){const d=[10133670,9080984,11054514,9071178,8030866],p=new H({color:5921370,roughness:.7}),g=Tt/2;for(const[_,m,h]of[[0,-g,!0],[0,g,!0],[-g,0,!1],[g,0,!1]]){const v=Tt/5;for(let I=0;I<5;I++){const A=-Tt/2+v*(I+.5),b=new R(new nt(h?v:.1,2.2,h?.1:v),new H({color:Kt(d),roughness:.55,metalness:.35}));b.position.set(n+_+(h?A:0),1.3,r+m+(h?0:A)),i.add(b);const F=new R(new nt(.14,2.5,.14),p);F.position.set(n+_+(h?A-v/2:0),1.45,r+m+(h?0:A-v/2)),i.add(F)}const T=new Pe(new N(n+_-(h?Tt/2:.4),0,r+m-(h?.4:Tt/2)),new N(n+_+(h?Tt/2:.4),2.5,r+m+(h?.4:Tt/2)));t.push(T)}}else if(s==="overgrown"){const d=new H({color:10127990,roughness:.95}),p=Tt/2;for(const[g,_,m]of[[0,-p,!0],[0,p,!0],[-p,0,!1],[p,0,!1]]){const w=Tt/7;for(let v=0;v<7;v++){if(Math.random()<.3)continue;const T=-Tt/2+w*(v+.5),I=new R(new nt(m?w-.2:.28,Q(.55,.95),m?.28:w-.2),d);I.position.set(n+g+(m?T:0),.55,r+_+(m?0:T)),i.add(I)}}}else{const d=new H({color:6974050,roughness:.8});for(let p=0;p<10;p++){const g=Math.floor(Math.random()*4),_=Q(-Tt/2,Tt/2),m=Tt/2,h=g<2?n+_:n+(g===2?-m:m),w=g<2?r+(g===0?-m:m):r+_,v=new R(new Ht(.05,.05,1.6,6),d);v.position.set(h,.95,w),v.rotation.set(Q(-.2,.2),0,Q(-.2,.2)),i.add(v)}}const a=s==="overgrown"?42:22;for(let d=0;d<a;d++){const p=C0();p.position.x=n+Q(-11,11),p.position.z=r+Q(-11,11),i.add(p)}if(s==="overgrown")for(let d=0;d<3;d++){const p=Math.random()<.4?$o():Ko();p.position.set(n+Q(-8,8),.2,r+Q(-8,8)),i.add(p)}const c=B0(n,r),l=s==="dump"?6:3,u=[P0,L0,I0,D0,N0,F0];for(let d=0;d<l;d++){const p=c.pop(),g=Kt(u)();g.position.x=p.x,g.position.z=p.z,g.position.y+=.2,g.rotation.y+=Q(0,Math.PI*2),i.add(g)}if(s==="dump"||Math.random()<.5){const d=c.pop(),p=U0();p.position.set(d.x,.2,d.z),p.rotation.y=Q(0,Math.PI*2),i.add(p);const g=new Pe().setFromObject(p);g.expandByScalar(.4),t.push(g)}const f=c.pop();return e.push({x:f.x,z:f.z}),e.push({x:n+Q(-4,4),z:r+Q(-4,4)}),c.splice(0,5).map(d=>({x:d.x+Q(-.5,.5),z:d.z+Q(-.5,.5)}))}function B0(i,t){return[[-8,-8],[0,-8.5],[8,-8],[-8.5,0],[8.5,0],[-8,8],[0,8.5],[8,8],[-4,-4],[4,-4],[-4,4],[4,4]].map(([n,r])=>({x:i+n+Q(-1,1),z:t+r+Q(-1,1)})).sort(()=>Math.random()-.5)}function Sc(i,t,e,n,r){const s=new nt(.2,.9,.2),o=[[t/2-.25,e/2-.25],[t/2-.25,-e/2+.25],[-t/2+.25,e/2-.25],[-t/2+.25,-e/2+.25]];for(const[a,c]of o){const l=new R(s,r);l.position.set(a,n+.65,c),l.rotation.z=Math.sign(a)*.5,l.rotation.x=Math.sign(c)*.5,i.add(l)}}function z0(){const i=new Gt,t=new H({color:10246716,roughness:.85}),e=new H({color:14206880,roughness:.8}),n=new H({color:10231840,roughness:.7}),r=new H({color:2046510,roughness:.65}),s=new H({color:13214247,roughness:.4,metalness:.5}),o=new H({color:4860958,roughness:.9}),a=13,c=9,l=3.6,u=new R(new nt(a,l,c),t);u.position.y=l/2,u.castShadow=!0,u.receiveShadow=!0,i.add(u);for(const g of[1,-1])for(let _=-1;_<=1;_++){const m=new R(new nt(1.8,2.4,.25),o);m.position.set(_*3.6,1.3,g*(c/2+.05)),i.add(m)}function f(){const g=new Gt,_=4.6,m=4.6,h=3,w=new R(new nt(_,h,m),e);w.position.y=h/2,w.castShadow=!0,g.add(w);for(const X of[-1,1])for(const tt of[-1,1]){const $=new R(new Ht(.2,.2,h,8),n);$.position.set(X*(_/2-.25),h/2,tt*(m/2-.25)),g.add($)}const v=_*1.35,T=m*1.35,I=new R(new nt(v,.35,T),r);I.position.y=h+.18,I.castShadow=!0,g.add(I),Sc(g,v,T,h+.18,r);const A=1.5,b=new R(new nt(_*.65,A,m*.65),e);b.position.y=h+.36+A/2,g.add(b);const F=_*.65*1.35,E=m*.65*1.35,M=new R(new nt(F,.3,E),r);M.position.y=h+.36+A+.15,g.add(M),Sc(g,F,E,h+.36+A+.15,r);const P=h+.36+A+.32,V=new R(new nt(F*.85,.12,.12),s);V.position.y=P,g.add(V);const B=new R(new Ke(.26,8,6),s);return B.position.y=P+.3,g.add(B),g}const d=f();d.position.set(-3.6,l+.15,0),i.add(d);const p=f();return p.position.set(3.6,l+.15,0),i.add(p),i}function k0(i){const t=[],e=[],n=[],r=[],s=o0(),o=[pc(),pc()],c={facadeMats:[14674140,15787736,15259084,14278112,15130569,13621458].flatMap(W=>o.map(st=>new H({map:st,color:W,roughness:.9}))),metalMats:[new H({color:12106944,roughness:.45,metalness:.65}),new H({color:9062960,roughness:.6,metalness:.35}),new H({color:3825478,roughness:.55,metalness:.4}),new H({color:3824250,roughness:.55,metalness:.4})],parapetMat:new H({color:13617339,roughness:.9}),stairMat:new H({color:12564134,roughness:.9}),stairGeo:new nt(1.6,1.9,1.9),signMats:Hr.map(W=>new Re({map:fc(W)}))},l=new R(new se(Jt*he+80,Jt*he+80),new H({color:4538426,roughness:.95}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,i.add(l);const u=Math.floor(Jt/2)+2,f=-Qt+u*he-re/2,d=re*.85,p=Jt*he+80,g=new Re({color:14211272});for(let W=0;W<=Jt;W++){const st=-Qt+W*he-re/2;if(W===0)continue;if(W!==u){const S=new R(new se(Jt*he,.35),g);S.rotation.x=-Math.PI/2,S.position.set(0,.02,st),i.add(S)}const ot=new R(new se(.35,Jt*he),g);ot.rotation.x=-Math.PI/2,ot.position.set(st,.02,0),i.add(ot)}const _=new R(new se(p,d),new H({color:2776954,roughness:.15,metalness:.3}));_.rotation.x=-Math.PI/2,_.position.set(0,.05,f),i.add(_);const m=new H({color:12037012,roughness:.9});{const W=Array.from({length:Jt},(S,x)=>-Qt+(x+1)*he-re/2);let st=-p/2;const ot=[];for(const S of W)ot.push([st,S-re/2]),st=S+re/2;ot.push([st,p/2]);for(const[S,x]of ot){const L=x-S;if(!(L<=.5))for(const q of[-1,1]){const J=new R(new nt(L,.9,.6),m);J.position.set((S+x)/2,.45,f+q*(d/2+.3)),i.add(J)}}}const h=new H({color:4538426,roughness:.95}),w=new H({color:13619144,roughness:.7}),v=new Re({color:14211272});for(let W=1;W<=Jt;W++){const st=-Qt+W*he-re/2,ot=.07,S=new R(new nt(re,.45,d+1.2),h);S.position.set(st,ot-.225,f),i.add(S);const x=new R(new se(.35,d+1.2),v);x.rotation.x=-Math.PI/2,x.position.set(st,ot+.01,f),i.add(x);for(const L of[-1,1]){const q=new R(new nt(.15,.8,d+1.2),w);q.position.set(st+L*(re/2-.2),ot+.4,f),i.add(q)}}for(let W=0;W<3;W++){const st=_0();st.rotation.y=Q(-.2,.2),st.position.set(Q(-Qt+20,Qt-20),.08,f+Q(-d/4,d/4)),i.add(st)}const T=[],I=re/4.8;for(let W=1;W<=Jt;W++){const st=-Qt+W*he-re/2;for(const ot of[1,-1]){const S=1+Math.floor(Math.random()*2);for(let x=0;x<S;x++){const L=gc();L.position.set(st-ot*I,.04,Q(-Qt,Qt)),L.rotation.y=ot>0?0:Math.PI,i.add(L),T.push({group:L,axis:"z",dir:ot,speed:Q(8,13),sig:W<Jt})}}}for(let W=1;W<=Jt;W++){if(W===u)continue;const st=-Qt+W*he-re/2;for(const ot of[1,-1]){const S=1+Math.floor(Math.random()*2);for(let x=0;x<S;x++){const L=gc();L.position.set(Q(-Qt,Qt),.04,st+ot*I),L.rotation.y=ot>0?Math.PI/2:-Math.PI/2,i.add(L),T.push({group:L,axis:"x",dir:ot,speed:Q(8,13),sig:W<Jt})}}}const A=[],b=30;for(let W=0;W<b;W++){const st=Math.floor(Math.random()*Jt),ot=Math.floor(Math.random()*Jt),S=-Qt+st*he+Tt/2,x=-Qt+ot*he+Tt/2,L=x0();L.position.y=.2,i.add(L),A.push({group:L,bx:st,bz:ot,cx:S,cz:x,R:He,s:Q(0,8*He),dir:Math.random()<.5?1:-1,speed:Q(1.1,1.9),phase:Q(0,Math.PI*2),mode:"loop",cross:null,u:0})}const F=[],E=[],M=[],P=new Set,V={parks:[],abandoned:[]},B=[],X=[];let tt=0,$=null;const it=Math.floor(Jt/2),j=new Set;for(;j.size<3;){const W=Math.floor(Math.random()*Jt),st=Math.floor(Math.random()*Jt);W===it&&st===it||j.add(`${W},${st}`)}for(let W=0;W<Jt;W++)for(let st=0;st<Jt;st++){const ot=-Qt+W*he+Tt/2,S=-Qt+st*he+Tt/2,x=W===Math.floor(Jt/2)&&st===Math.floor(Jt/2);x&&($=new N(ot,18,S));const L=new R(new nt(Tt+2,.2,Tt+2),new H({color:11049598,roughness:.95}));if(L.position.set(ot,.1,S),L.receiveShadow=!0,i.add(L),x){const J=z0();J.position.set(ot,.2,S-7),i.add(J);const Y=new Pe().setFromObject(J);Y.expandByScalar(.9),t.push(Y);continue}if(j.has(`${W},${st}`)){B.push(...g0(i,t,ot,S));continue}if(Math.random()<.17){P.has(`${W-1},${st}`)||P.has(`${W},${st-1}`)||Math.random()<.5?(V.abandoned.push({x:ot,z:S}),M.push(...O0(i,t,E,ot,S))):(P.add(`${W},${st}`),V.parks.push({bx:W,bz:st,x:ot,z:S}),M.push(...R0(i,t,ot,S)));continue}const q=Tt/2;for(let J=0;J<2;J++)for(let Y=0;Y<2;Y++){const pt=ot-Tt/2+q*J+q/2,at=S-Tt/2+q*Y+q/2;if(Math.random()<.15){E.push({x:pt,z:at});continue}const lt=Q(q*.62,q*.85),Rt=Q(q*.62,q*.85),z=Y===0?-1:1;if(Math.random()<.12){const Ct=f0(lt*.85,Rt*.85);Ct.position.set(pt,.2,at),i.add(Ct);const ue=new Pe().setFromObject(Ct);ue.expandByScalar(.9),t.push(ue);continue}if(Math.random()<.62){p0(i,t,F,E,X,pt,at,q,z,c);continue}const K=Q(10,26),At=new H({map:s.clone(),roughness:.85});At.map.repeat.set(Math.max(1,Math.round(lt/6)),Math.max(1,Math.round(K/6))),At.map.needsUpdate=!0;const yt=new H({color:Kt([10256480,11046762,9402970]),roughness:.95}),gt=new R(new nt(lt,K,Rt),[At,At,yt,yt,At,At]);gt.position.set(pt,K/2+.2,at),gt.castShadow=!0,gt.receiveShadow=!0,i.add(gt);const It=new Pe().setFromObject(gt);if(It.expandByScalar(.9),t.push(It),F.push({x:pt,y:K+.2,z:at,w:lt,d:Rt}),Math.random()<.5){const Ct=new R(new nt(1.2,.8,.9),new H({color:14277074,roughness:.7}));Ct.position.set(pt+Q(-lt/4,lt/4),K+.6+.2,at+Q(-Rt/4,Rt/4)),i.add(Ct)}if(K<16&&Math.random()<.45&&tt<Hr.length){const Ct=new R(new se(5,1.25),new Re({map:fc(Hr[tt++])}));Ct.position.set(pt,4.2,at+z*(Rt/2+.06)),z<0&&(Ct.rotation.y=Math.PI),i.add(Ct)}if(K<16&&Math.random()<.3){const Ct=new R(new se(1.1,2.6),new Re({map:a0(Kt(Hr)),side:ve}));Ct.rotation.y=Math.PI/2,Ct.position.set(pt+lt/2+.55,4,at+z*(Rt/2-1.2)),i.add(Ct)}if(K<16&&Math.random()<.4){const Ct=pl(i,pt,at,lt,Rt,z);Math.random()<.5&&E.push(Ct.ground),X.push(Ct.eave)}}if(Math.random()<.4&&E.push({x:ot+Q(-Tt/2,Tt/2),z:S+(Math.random()<.5?-1:1)*(Tt/2+2.5)}),Math.random()<.5){const J=Math.random()<.3?$o():Ko();J.position.set(ot+Tt/2+3,0,S+Q(-Tt/2,Tt/2)),i.add(J)}if(Math.random()<.3){const J=ot+(Math.random()<.5?-1:1)*(Tt/2+1.6),Y=S+Q(-Tt/2+3,Tt/2-3),pt=1+Math.floor(Math.random()*2);for(let at=0;at<pt;at++){const lt=d0();lt.rotation.y=Math.PI/2+Q(-.08,.08),lt.position.set(J,0,Y+at*1.1),i.add(lt)}}}{const W=new Ht(.09,.13,7.6,6),st=new H({color:5919824,roughness:.9}),ot=new nt(1.4,.08,.08),S=[];for(let L=1;L<Jt;L++){if(L===u)continue;const J=-Qt+L*he-re/2+re/2-.7;let Y=null;for(let pt=0;pt<Jt;pt++){const at=-Qt+pt*he+Tt/2,lt=new R(W,st);lt.position.set(at,3.8,J),i.add(lt);const Rt=new R(ot,st);if(Rt.position.set(at,7,J),i.add(Rt),Y!==null)for(const z of[7.05,6.65])S.push(Y,z,J,at,z,J);Y=at}}const x=new ke;x.setAttribute("position",new xe(S,3)),i.add(new t0(x,new ul({color:2763306})))}{const W=new Re({map:c0(),transparent:!0}),st=new se(3.2,8.4);for(let ot=1;ot<Jt;ot++)for(let S=1;S<Jt;S++){if(S===u)continue;const x=-Qt+ot*he-re/2,L=-Qt+S*he-re/2,q=new R(st,W);q.rotation.x=-Math.PI/2,q.position.set(x-re/2-2.2,.03,L),i.add(q);const J=new R(st,W);J.rotation.set(-Math.PI/2,0,Math.PI/2),J.position.set(x,.03,L-re/2-2.2),i.add(J)}}const mt={t:Q(0,ml),lampMats:{ns:Po.map(W=>new Re({color:W})),ew:Po.map(W=>new Re({color:W}))},stopZs:[],stopXs:[],crossings:new Map};{const W=new H({color:4868682,roughness:.6}),st=new H({color:2372668,roughness:.6}),ot=(S,x,L)=>{const q=S+","+x;mt.crossings.has(q)||mt.crossings.set(q,[]),mt.crossings.get(q).push(L)};for(let S=1;S<Jt;S++)S!==u&&mt.stopZs.push(-Qt+S*he-re/2);for(let S=1;S<Jt;S++)mt.stopXs.push(-Qt+S*he-re/2);for(let S=1;S<Jt;S++)for(let x=1;x<Jt;x++){if(x===u)continue;const L=-Qt+S*he-re/2,q=-Qt+x*he-re/2,J=Mc(mt.lampMats.ns,W,st);J.position.set(L+6.7,0,q+6.7),i.add(J);const Y=Mc(mt.lampMats.ew,W,st);Y.rotation.y=Math.PI/2,Y.position.set(L-6.7,0,q-6.7),i.add(Y);const pt=L-re/2-Tt/2,at=L+re/2+Tt/2,lt=q-re/2-Tt/2,Rt=q+re/2+Tt/2,z=L-re/2-2.2,K={x:z,z:lt+He},At={x:z,z:Rt-He};ot(S-1,x-1,{from:K,to:At,toBx:S-1,toBz:x,walkAxis:"z",s:tr(z-pt,He,He)}),ot(S-1,x,{from:At,to:K,toBx:S-1,toBz:x-1,walkAxis:"z",s:tr(z-pt,-He,He)});const yt=q-re/2-2.2,gt={x:pt+He,z:yt},It={x:at-He,z:yt};ot(S-1,x-1,{from:gt,to:It,toBx:S,toBz:x-1,walkAxis:"x",s:tr(He,yt-lt,He)}),ot(S,x-1,{from:It,to:gt,toBx:S-1,toBz:x-1,walkAxis:"x",s:tr(-He,yt-lt,He)})}}const xt=W=>W.sort(()=>Math.random()-.5);function dt(W,st,ot,S,x,L){for(let q=0;q<st&&W.length>0;q++){const J=W.pop(),Y=L?L(J):{x:J.x,y:.2,z:J.z},pt=x(ot,r,Y.makeArg!==void 0?Y.makeArg:Y.edgeLength);pt.position.set(Y.x,Y.y,Y.z),pt.rotation.y=Y.rotY!==void 0?Y.rotY:Q(0,Math.PI*2),i.add(pt);const at=Yo[S],lt={kind:ot?"target":"decoy",type:S,label:at.label,points:at.points,found:!1,group:pt},Rt=Y.proxyRadius!==void 0?Y.proxyRadius:S==="tower"?2.4:S==="debris"?2.6:S==="gutter"?2:S==="roofGarden"||S==="tarp"?2.2:1.4;u0(pt,Rt,S==="tower"?3.4:S==="gutter"?.2:S==="roofGarden"?.6:S==="tarp"?.5:.6,lt,e),ot&&n.push(lt)}}const Ot=[],qt=xt(F.filter(W=>W.w<6||W.d<6));{const W=F.filter(st=>st.w>=6&&st.d>=6);Ot.push(...xt(W.filter(st=>st.y<=14)),...xt(W.filter(st=>st.y>14)))}function Z(W){const st=W.parapet?.38:.35,ot=.9,S=Math.floor(Math.random()*4);if(S<2){const L=S===0?1:-1;return{x:W.x,y:W.y,z:W.z+L*(W.d/2-st),rotY:0,edgeLength:W.w-ot,proxyRadius:Math.max(2,(W.w-ot)/2)}}const x=S===2?1:-1;return{x:W.x+x*(W.w/2-st),y:W.y,z:W.z,rotY:Math.PI/2,edgeLength:W.d-ot,proxyRadius:Math.max(2,(W.d-ot)/2)}}const ct=W=>({x:W.x,y:W.y,z:W.z});dt(Ot,5,!0,"tower",$r,ct),dt(Ot,4,!1,"tower",$r,ct);const St=W=>({x:W.x,y:W.y,z:W.z,rotY:0,makeArg:{w:W.w-1.2,d:W.d-1.2},proxyRadius:Math.max(2.2,Math.min(W.w,W.d)/2)});dt(Ot,4,!0,"roofGarden",Zr,St),dt(Ot,3,!1,"roofGarden",Zr,St),dt(qt,4,!0,"gutter",jr,Z),dt(qt,3,!1,"gutter",jr,Z);const vt=n.filter(W=>W.type==="tower").length;vt<5&&dt(qt,5-vt,!0,"tower",$r,ct);const Dt=n.filter(W=>W.type==="roofGarden").length;Dt<4&&dt(qt,4-Dt,!0,"roofGarden",Zr,St);const Bt=n.filter(W=>W.type==="gutter").length;Bt<4&&dt(Ot,4-Bt,!0,"gutter",jr,Z);const zt=xt(M);dt(zt,5,!0,"debris",Jr),dt(zt,3,!1,"debris",Jr);const oe=xt(B);dt(oe,4,!0,"tarp",Co),dt(oe,3,!1,"tarp",Co);const C=xt(E),le=xt(X),$t=W=>({x:W.x,y:W.y,z:W.z,makeArg:["foam","trash","bucket"]});dt(le,3,!0,"container",Nn,$t),dt(le,2,!1,"container",Nn,$t),dt(C,3,!0,"container",Nn),dt(C,4,!1,"container",Nn);const jt=n.filter(W=>W.type==="debris").length;jt<5&&dt(C,5-jt,!0,"debris",Jr);let wt=n.filter(W=>W.type==="container").length;if(wt<6&&(dt(C,6-wt,!0,"container",Nn),wt=n.filter(W=>W.type==="container").length),wt<6){const W=xt([...qt,...Ot]);dt(W,6-wt,!0,"container",Nn,ct)}return{colliders:t,inspectables:e,targets:n,waterMeshes:r,spawnPoint:$,cars:T,pedestrians:A,traffic:mt,zones:V}}function H0(i){const t=[];switch(i){case"tower":return $r(!0,t);case"tarp":return Co(!0,t);case"debris":return Jr(!0,t);case"roofGarden":return Zr(!0,t,{w:6.4,d:5.2});case"gutter":{const e=new Gt,n=4.6,r=3.4,s=.5,o=new H({color:11049598,roughness:.95}),a=new R(new nt(n,s,r),o);a.position.y=s/2,e.add(a);const c=new H({color:13617339,roughness:.9}),l=.15,u=.55,f=[{geo:new nt(n,u,l),x:0,z:-3.25/2},{geo:new nt(l,u,r),x:(n-l)/2,z:0},{geo:new nt(l,u,r),x:-4.449999999999999/2,z:0}];for(const p of f){const g=new R(p.geo,c);g.position.set(p.x,s+u/2,p.z),e.add(g)}const d=jr(!0,t,n-.7);return d.position.set(0,s,r/2-.35),e.add(d),e}case"container":{const e=new Gt,n=Nn(!0,t,["foam"]);n.position.x=-.45,e.add(n);const r=Nn(!1,t,["trash"]);return r.position.set(.55,0,-.1),e.add(r),e}default:return new Gt}}function G0(i){const t=new Gt,e=16731469,n=new R(new Ht(.5,.5,40,12,1,!0),new Re({color:e,transparent:!0,opacity:.3,depthWrite:!1}));n.position.y=20,t.add(n);const r=new R(new bn(1.6,.12,8,28),new Re({color:e}));r.rotation.x=Math.PI/2,r.position.y=.4,t.add(r);const s=document.createElement("canvas");s.width=256,s.height=64;const o=s.getContext("2d");o.fillStyle="rgba(170, 30, 30, 0.9)",o.fillRect(0,0,256,64),o.fillStyle="#ffffff",o.font='bold 30px "Noto Sans TC", "Microsoft JhengHei", sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText(i,128,34);const a=new Gn(s);a.colorSpace=Ce;const c=new Jm(new cl({map:a,transparent:!0,depthTest:!1}));return c.scale.set(7,1.75,1),c.position.y=9,c.renderOrder=999,t.add(c),t}function yc(i=!0){const t=new Gt,e=i?4575354:10066329,n=new R(new Ht(.5,.5,40,12,1,!0),new Re({color:e,transparent:!0,opacity:.28,depthWrite:!1}));n.position.y=20,t.add(n);const r=new R(new bn(1.6,.12,8,28),new Re({color:e}));return r.rotation.x=Math.PI/2,r.position.y=.4,t.add(r),t}const wc=34,V0=26,Ys=15,Ec=9;class W0{constructor(t){this.camera=t,this.camera.rotation.order="YXZ",this.velocity=new N,this.keys=new Set,this.enabled=!1,window.addEventListener("keydown",e=>{this.keys.add(e.code),["Space","ShiftLeft","ShiftRight"].includes(e.code)&&e.preventDefault()}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("mousemove",e=>{this.enabled&&(this.camera.rotation.y-=e.movementX*.0022,this.camera.rotation.x-=e.movementY*.0022,this.camera.rotation.x=hi.clamp(this.camera.rotation.x,-Math.PI/2+.05,Math.PI/2-.05))})}reset(t){this.camera.position.copy(t),this.camera.rotation.set(-.15,0,0),this.velocity.set(0,0,0)}update(t,e){const n=this.camera.rotation.y,r=new N(-Math.sin(n),0,-Math.cos(n)),s=new N(Math.cos(n),0,-Math.sin(n)),o=new N;this.enabled&&((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&o.add(r),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&o.sub(r),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&o.add(s),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&o.sub(s),o.lengthSq()>0&&o.normalize(),this.keys.has("Space")&&(o.y+=1),(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&(o.y-=1)),this.velocity.x+=o.x*wc*t,this.velocity.z+=o.z*wc*t,this.velocity.y+=o.y*V0*t;const a=Math.exp(-3.2*t);this.velocity.multiplyScalar(a);const c=Math.hypot(this.velocity.x,this.velocity.z);c>Ys&&(this.velocity.x*=Ys/c,this.velocity.z*=Ys/c),this.velocity.y=hi.clamp(this.velocity.y,-Ec,Ec);const l=this.camera.position;for(const f of["x","y","z"])l[f]+=this.velocity[f]*t,this._collides(l,e)&&(l[f]-=this.velocity[f]*t,this.velocity[f]=0);l.x=hi.clamp(l.x,Ii.min.x,Ii.max.x),l.y=hi.clamp(l.y,Ii.min.y,Ii.max.y),l.z=hi.clamp(l.z,Ii.min.z,Ii.max.z);const u=this.velocity.dot(new N(Math.cos(n),0,-Math.sin(n)));this.camera.rotation.z=hi.lerp(this.camera.rotation.z,-u*.006,1-Math.exp(-8*t))}_collides(t,e){for(const n of e)if(n.containsPoint(t))return!0;return!1}}const xl=120,vl=45,X0=.35,q0=document.getElementById("app"),dn=new ol({antialias:!0});dn.setSize(window.innerWidth,window.innerHeight);dn.setPixelRatio(Math.min(window.devicePixelRatio,2));dn.shadowMap.enabled=!0;dn.shadowMap.type=Cc;q0.appendChild(dn.domElement);const Wi=new al;Wi.background=new Yt(11457772);Wi.fog=new qo(11457772,170,480);const oi=new Ye(75,window.innerWidth/window.innerHeight,.1,600),Y0=new dl(13625087,9080696,1);Wi.add(Y0);const An=new fl(16773855,2.4);An.position.set(130,190,90);An.castShadow=!0;An.shadow.mapSize.set(2048,2048);An.shadow.camera.left=-160;An.shadow.camera.right=160;An.shadow.camera.top=160;An.shadow.camera.bottom=-160;An.shadow.camera.far=500;Wi.add(An);const ai=new Gt;Wi.add(ai);let Lo,Ml,ni,Sl,jo,yl,wl,Qr,K0;function $0(){ai.traverse(i=>{var e;(e=i.geometry)==null||e.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(n=>{var r;(r=n==null?void 0:n.map)==null||r.dispose(),n==null||n.dispose()})}),ai.clear()}function El(){$0(),{colliders:Lo,inspectables:Ml,targets:ni,waterMeshes:Sl,spawnPoint:jo,cars:yl,pedestrians:wl,traffic:Qr,zones:K0}=k0(ai)}El();const or=new W0(oi);or.reset(jo);window.addEventListener("resize",()=>{oi.aspect=window.innerWidth/window.innerHeight,oi.updateProjectionMatrix(),dn.setSize(window.innerWidth,window.innerHeight)});const _e=i=>document.getElementById(i),Xt={hud:_e("hud"),timer:_e("timer"),score:_e("score"),found:_e("found"),crosshair:_e("crosshair"),hint:_e("hint"),feed:_e("feed"),alt:_e("alt"),startOverlay:_e("startOverlay"),pauseOverlay:_e("pauseOverlay"),endOverlay:_e("endOverlay"),introOverlay:_e("introOverlay"),introGrid:_e("introGrid"),introStartBtn:_e("introStartBtn"),startBtn:_e("startBtn"),resumeBtn:_e("resumeBtn"),restartBtn:_e("restartBtn"),reviewBtn:_e("reviewBtn"),reviewBanner:_e("reviewBanner"),finalScore:_e("finalScore"),rank:_e("rank"),breakdown:_e("breakdown")},j0=[{type:"tower",hint:"不鏽鋼水塔沒有頂蓋、看得到水面反光的才是目標；有錐形蓋的是誘餌。",where:"大樓屋頂（要飛到上方看）"},{type:"tarp",hint:"藍白條紋帆布蓋著建材堆，帆布凹陷處積水。",where:"工地圍籬內的地面"},{type:"debris",hint:"廢棄雜物堆旁邊的一灘積水。",where:"廢棄空地（雜草堆、鐵皮圍籬內）、公園角落"},{type:"roofGarden",hint:"整片綠化的空中花園，積水藏在花盆、水桶、澆花器等容器裡。",where:"大樓屋頂（整片綠色的那種）"},{type:"gutter",hint:"屋頂邊緣的長條排水槽，落葉堵塞後積水。",where:"透天厝屋頂的四邊"},{type:"container",hint:"水桶、水盆、輪胎、垃圾桶、保麗龍箱裡的積水。",where:"巷弄、騎樓下，也可能在騎樓遮簷上或高低建築之間的屋簷"}],Z0={tower:{pos:[5.5,6.5,5.5],look:[0,3,0]},tarp:{pos:[3.5,3,3.5],look:[0,.7,0]},debris:{pos:[4,3.5,4],look:[0,.5,0]},roofGarden:{pos:[5.2,4.6,5.2],look:[0,.2,0]},gutter:{pos:[3.8,3.4,4.4],look:[0,.4,.6]},container:{pos:[2.6,2.3,2.6],look:[0,.35,0]}};let Tc=!1;function J0(){if(Tc)return;Tc=!0;const i=new ol({antialias:!0,preserveDrawingBuffer:!0});i.setSize(220,150);const t=new al;t.background=new Yt(12573934),t.add(new dl(16777215,9080696,1.1));const e=new fl(16773855,2);e.position.set(4,6,3),t.add(e);const n=new R(new fe(7,24),new H({color:11049598,roughness:.95}));n.rotation.x=-Math.PI/2,t.add(n);const r=new Ye(45,220/150,.1,60);for(const s of j0){const o=H0(s.type);t.add(o);const a=Z0[s.type];r.position.set(...a.pos),r.lookAt(...a.look),i.render(t,r);const c=i.domElement.toDataURL("image/png");t.remove(o);const l=Yo[s.type],u=document.createElement("div");u.className="intro-card",u.innerHTML=`
      <img alt="${l.label}" src="${c}">
      <div class="card-body">
        <div class="card-title"><span class="pts p${l.points}">+${l.points}</span>${l.label}</div>
        <div class="card-hint">${s.hint}</div>
        <div class="card-where">📍 ${s.where}</div>
      </div>`,Xt.introGrid.appendChild(u)}i.dispose()}let Be="start",ii=xl,yn=0,ar=0,cr=0;function Gr(i,t=!1){const e=document.createElement("div");e.className="feed-item"+(t?" bad":""),e.textContent=i,Xt.feed.appendChild(e),setTimeout(()=>e.remove(),4200)}function lr(){Xt.timer.textContent=ii.toFixed(1),Xt.timer.classList.toggle("urgent",ii<=10),Xt.score.textContent=yn,Xt.found.textContent=`${ar} / ${ni.length}`,Xt.alt.textContent=`高度 ${oi.position.y.toFixed(0)} m`}function Zo(){dn.domElement.requestPointerLock()}Xt.startBtn.addEventListener("click",()=>{Xt.startOverlay.classList.add("hidden"),J0(),Xt.introOverlay.classList.remove("hidden")});Xt.introStartBtn.addEventListener("click",()=>{Xt.introOverlay.classList.add("hidden"),Xt.hud.classList.remove("hidden"),Be="playing",Zo()});Xt.resumeBtn.addEventListener("click",()=>{Xt.pauseOverlay.classList.add("hidden"),Be="playing",Zo()});Xt.restartBtn.addEventListener("click",()=>tg());Xt.reviewBtn.addEventListener("click",()=>{Be="review",Xt.endOverlay.classList.add("hidden"),Xt.hud.classList.remove("hidden"),Xt.reviewBanner.classList.remove("hidden"),Zo()});document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===dn.domElement;or.enabled=i,!i&&Be==="playing"&&(Be="paused",Xt.pauseOverlay.classList.remove("hidden")),!i&&Be==="review"&&(Be="ended",Xt.reviewBanner.classList.add("hidden"),Xt.hud.classList.add("hidden"),Xt.endOverlay.classList.remove("hidden"))});const bc=new r0,Q0=new kt(0,0);function Tl(){bc.setFromCamera(Q0,oi);const i=Ml.filter(e=>!e.userData.inspect.done),t=bc.intersectObjects(i,!1);return t.length>0?t[0]:null}window.addEventListener("mousedown",i=>{if(Be!=="playing"||i.button!==0||cr>0||document.pointerLockElement!==dn.domElement)return;cr=X0;const t=Tl();if(!t)return;if(t.distance>vl){Gr("距離太遠，飛近一點再標記！",!0);return}const e=t.object.userData.inspect;e.done=!0;const n=new N;if(e.group.getWorldPosition(n),e.kind==="target"){e.found=!0,yn+=e.points,ar++,Gr(`✔ 發現${e.label}！ +${e.points} 分`);const r=yc(!0);if(r.position.copy(n),ai.add(r),ar===ni.length){const s=Math.floor(ii*2);yn+=s,Gr(`🏆 全數找到！剩餘時間獎勵 +${s} 分`),bl()}}else{yn=Math.max(0,yn-5),Gr("✘ 誤報！這裡沒有積水 −5 分",!0);const r=yc(!1);r.position.copy(n),ai.add(r)}lr()});function bl(){if(Be==="ended")return;Be="ended",document.exitPointerLock(),Xt.hud.classList.add("hidden"),Xt.pauseOverlay.classList.add("hidden"),Xt.finalScore.textContent=`${yn} 分`,Xt.rank.textContent=eg(yn);const i=[];for(const[t,e]of Object.entries(Yo)){const n=ni.filter(s=>s.type===t),r=n.filter(s=>s.found);i.push(`${e.label}（+${e.points}）：找到 ${r.length} / ${n.length} 處`)}i.push(`合計發現積水：${ar} / ${ni.length} 處`),Xt.breakdown.innerHTML=i.join("<br>"),Xt.endOverlay.classList.remove("hidden");for(const t of ni){if(t.found)continue;const e=G0(`${t.label} +${t.points}`),n=new N;t.group.getWorldPosition(n),e.position.copy(n),ai.add(e)}}function tg(){El(),or.reset(jo),Be="start",ii=xl,yn=0,ar=0,cr=0,Xt.feed.innerHTML="",Xt.endOverlay.classList.add("hidden"),Xt.pauseOverlay.classList.add("hidden"),Xt.introOverlay.classList.add("hidden"),Xt.reviewBanner.classList.add("hidden"),Xt.hud.classList.add("hidden"),Xt.startOverlay.classList.remove("hidden"),lr()}function eg(i){return i>=450?"🏅 傳說巡檢無人機！台南市長頒獎表揚！":i>=320?"🥇 金牌巡檢員：登革熱病媒蚊聞風喪膽":i>=200?"🥈 銀牌巡檢員：眼力過人":i>=100?"🥉 銅牌巡檢員：再接再厲":"📋 見習巡檢員：多注意屋頂與空地喔"}const Ac=new i0;function Al(){requestAnimationFrame(Al);const i=Ac.getDelta(),t=Math.min(i,.05),e=Ac.elapsedTime;if(Sl.forEach((n,r)=>{n.material.emissiveIntensity=.35+.3*Math.sin(e*4+r*1.7)}),Be!=="paused"&&(M0(Qr,t),w0(yl,t,Qr),y0(wl,t,Qr)),Be==="playing"){ii-=i,cr=Math.max(0,cr-i),ii<=0&&(ii=0,bl()),or.update(t,Lo);const n=Tl(),r=n&&n.distance<=vl;Xt.crosshair.classList.toggle("lock",!!r),Xt.hint.classList.toggle("hidden",!r),lr()}else Be==="review"&&(or.update(t,Lo),lr());dn.render(Wi,oi)}lr();Al();window.__game={camera:oi,targets:ni,getScore:()=>yn,getState:()=>Be};
