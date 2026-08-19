var ux=0,ed=1,dx=2;var Of=1,wh=2,Ai=3,Xi=0,on=1,he=2;var Gi=0,Vi=1,fi=2,nd=3,id=4,fx=5,us=100,px=101,mx=102,sd=103,od=104,gx=200,xx=201,yx=202,_x=203,Ul=204,Hl=205,vx=206,Ex=207,Mx=208,bx=209,wx=210,Sx=211,Tx=212,Rx=213,Ax=214,Cx=0,Px=1,Lx=2,wa=3,Ix=4,Dx=5,Ux=6,Hx=7,Bf=0,Nx=1,kx=2,Wi=0,Ox=1,Bx=2,zx=3,Fx=4,Gx=5,Vx=6;var zf=300,ro=301,ao=302,Nl=303,kl=304,oc=306,qi=1e3,In=1001,Ol=1002,Ke=1003,rd=1004;var Qc=1005;var Se=1006,Wx=1007;var rr=1008;var Fn=1009,Xx=1010,qx=1011,Sh=1012,Ff=1013,zi=1014,Fi=1015,ar=1016,Gf=1017,Vf=1018,ps=1020,Yx=1021,Dn=1023,Zx=1024,$x=1025,ms=1026,co=1027,Th=1028,Wf=1029,Kx=1030,Xf=1031,qf=1033,tl=33776,el=33777,nl=33778,il=33779,ad=35840,cd=35841,ld=35842,hd=35843,Yf=36196,ud=37492,dd=37496,fd=37808,pd=37809,md=37810,gd=37811,xd=37812,yd=37813,_d=37814,vd=37815,Ed=37816,Md=37817,bd=37818,wd=37819,Sd=37820,Td=37821,sl=36492,Rd=36494,Ad=36495,Jx=36283,Cd=36284,Pd=36285,Ld=36286;var Sa=2300,Ta=2301,ol=2302,Id=2400,Dd=2401,Ud=2402;var Zf=3e3,gs=3001,jx=3200,Qx=3201,$f=0,ty=1,je="",ee="srgb",Li="srgb-linear",Rh="display-p3",rc="display-p3-linear",Ra="linear",Ee="srgb",Aa="rec709",Ca="p3";var Us=7680;var Hd=519,ey=512,ny=513,iy=514,Kf=515,sy=516,oy=517,ry=518,ay=519,Bl=35044;var Nd="300 es",zl=1035,Pi=2e3,Pa=2001,Yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,Qo=Math.PI/180,cr=180/Math.PI;function di(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function Ah(n,t){return(n%t+t)%t}function cy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ly(n,t,e){return n!==t?(e-n)/(t-n):0}function tr(n,t,e){return(1-e)*n+e*t}function hy(n,t,e,i){return tr(n,t,1-Math.exp(-e*i))}function uy(n,t=1){return t-Math.abs(Ah(n,t*2)-t)}function dy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function py(n,t){return n+Math.floor(Math.random()*(t-n+1))}function my(n,t){return n+Math.random()*(t-n)}function gy(n){return n*(.5-Math.random())}function xy(n){n!==void 0&&(kd=n);let t=kd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yy(n){return n*Qo}function _y(n){return n*cr}function Fl(n){return(n&n-1)===0&&n!==0}function vy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function La(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ey(n,t,e,i,s){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ch={DEG2RAD:Qo,RAD2DEG:cr,generateUUID:di,clamp:Ve,euclideanModulo:Ah,mapLinear:cy,inverseLerp:ly,lerp:tr,damp:hy,pingpong:uy,smoothstep:dy,smootherstep:fy,randInt:py,randFloat:my,randFloatSpread:gy,seededRandom:xy,degToRad:yy,radToDeg:_y,isPowerOfTwo:Fl,ceilPowerOfTwo:vy,floorPowerOfTwo:La,setQuaternionFromProperEuler:Ey,normalize:pe,denormalize:ui},wt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class n{constructor(t,e,i,s,o,r,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],_=s[1],y=s[4],v=s[7],C=s[2],A=s[5],S=s[8];return o[0]=r*x+a*_+c*C,o[3]=r*p+a*y+c*A,o[6]=r*m+a*v+c*S,o[1]=l*x+h*_+u*C,o[4]=l*p+h*y+u*A,o[7]=l*m+h*v+u*S,o[2]=d*x+f*_+g*C,o[5]=d*p+f*y+g*A,o[8]=d*m+f*v+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new se;function Jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function My(){let n=lr("canvas");return n.style.display="block",n}var Od={};function er(n){n in Od||(Od[n]=!0,console.warn(n))}var Bd=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zd=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Li]:{transfer:Ra,primaries:Aa,toReference:n=>n,fromReference:n=>n},[ee]:{transfer:Ee,primaries:Aa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[rc]:{transfer:Ra,primaries:Ca,toReference:n=>n.applyMatrix3(zd),fromReference:n=>n.applyMatrix3(Bd)},[Rh]:{transfer:Ee,primaries:Ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zd),fromReference:n=>n.applyMatrix3(Bd).convertLinearToSRGB()}},by=new Set([Li,rc]),me={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!by.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Yr[t].toReference,s=Yr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Yr[n].primaries},getTransfer:function(n){return n===je?Ra:Yr[n].transfer}};function so(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function al(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,Ia=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=lr("canvas")),Hs.width=t.width,Hs.height=t.height;let i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=so(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(so(e[i]/255)*255):e[i]=so(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wy=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=di(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(cl(s[r].image)):o.push(cl(s[r]))}else o=cl(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sy=0,pn=class n extends Yi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=In,s=In,o=Se,r=rr,a=Dn,c=Fn,l=n.DEFAULT_ANISOTROPY,h=je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=di(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===gs?ee:je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ee?gs:Zf}set encoding(t){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===gs?ee:je}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=zf;pn.DEFAULT_ANISOTROPY=1;var We=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(f+1)/2,C=(m+1)/2,A=(h+d)/4,S=(u+x)/4,I=(g+p)/4;return y>v&&y>C?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=A/i,o=S/i):v>C?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=A/s,o=I/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=S/o,s=I/o),this.set(i,s,o,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gl=class extends Yi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===gs?ee:je),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Gl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ua=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vl=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=o[r+0],f=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*x,_=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let C=Math.sqrt(y),A=Math.atan2(C,m*_);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}let v=a*_;if(c=c*p+d*v,l=l*p+f*v,h=h*p+g*v,u=u*p+x*v,p===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),f=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(o),i*Math.cos(o),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new D,Fd=new Ie,Un=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Kn):Kn.fromBufferAttribute(o,r),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),$r.subVectors(this.max,Wo),Ns.subVectors(t.a,Wo),ks.subVectors(t.b,Wo),Os.subVectors(t.c,Wo),Hi.subVectors(ks,Ns),Ni.subVectors(Os,ks),rs.subVectors(Ns,Os);let e=[0,-Hi.z,Hi.y,0,-Ni.z,Ni.y,0,-rs.z,rs.y,Hi.z,0,-Hi.x,Ni.z,0,-Ni.x,rs.z,0,-rs.x,-Hi.y,Hi.x,0,-Ni.y,Ni.x,0,-rs.y,rs.x,0];return!hl(e,Ns,ks,Os,$r)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Ns,ks,Os,$r))?!1:(Kr.crossVectors(Hi,Ni),e=[Kr.x,Kr.y,Kr.z],hl(e,Ns,ks,Os,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bi=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,Zr=new Un,Ns=new D,ks=new D,Os=new D,Hi=new D,Ni=new D,rs=new D,Wo=new D,$r=new D,Kr=new D,as=new D;function hl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){as.fromArray(n,o);let a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),c=t.dot(as),l=e.dot(as),h=i.dot(as);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ty=new Un,Xo=new D,ul=new D,Zi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ty.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);let e=Xo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(ul)),this.expandByPoint(Xo.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new D,dl=new D,Jr=new D,ki=new D,fl=new D,jr=new D,pl=new D,hr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(dl);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Jr),a=ki.dot(this.direction),c=-ki.dot(Jr),l=ki.lengthSq(),h=Math.abs(1-r*r),u,d,f,g;if(h>0)if(u=r*c-a,d=r*a-c,g=o*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dl).addScaledVector(Jr,d),f}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,o){fl.subVectors(e,t),jr.subVectors(i,t),pl.crossVectors(fl,jr);let r=this.direction.dot(pl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ki.subVectors(this.origin,t);let c=a*this.direction.dot(jr.crossVectors(ki,jr));if(c<0)return null;let l=a*this.direction.dot(fl.cross(ki));if(l<0||c+l>r)return null;let h=-a*ki.dot(pl);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class n{constructor(t,e,i,s,o,r,a,c,l,h,u,d,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,f,g,x,p)}set(t,e,i,s,o,r,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),o=1/Bs.setFromMatrixColumn(t,1).length(),r=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let d=r*h,f=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let d=r*h,f=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let d=r*c,f=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=r*c,f=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ry,t,Ay)}lookAt(t,e,i){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Oi.crossVectors(i,Pn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Oi.crossVectors(i,Pn)),Oi.normalize(),Qr.crossVectors(Pn,Oi),s[0]=Oi.x,s[4]=Qr.x,s[8]=Pn.x,s[1]=Oi.y,s[5]=Qr.y,s[9]=Pn.y,s[2]=Oi.z,s[6]=Qr.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],_=i[3],y=i[7],v=i[11],C=i[15],A=s[0],S=s[4],I=s[8],E=s[12],T=s[1],U=s[5],Y=s[9],q=s[13],P=s[2],z=s[6],B=s[10],F=s[14],Z=s[3],K=s[7],M=s[11],N=s[15];return o[0]=r*A+a*T+c*P+l*Z,o[4]=r*S+a*U+c*z+l*K,o[8]=r*I+a*Y+c*B+l*M,o[12]=r*E+a*q+c*F+l*N,o[1]=h*A+u*T+d*P+f*Z,o[5]=h*S+u*U+d*z+f*K,o[9]=h*I+u*Y+d*B+f*M,o[13]=h*E+u*q+d*F+f*N,o[2]=g*A+x*T+p*P+m*Z,o[6]=g*S+x*U+p*z+m*K,o[10]=g*I+x*Y+p*B+m*M,o[14]=g*E+x*q+p*F+m*N,o[3]=_*A+y*T+v*P+C*Z,o[7]=_*S+y*U+v*z+C*K,o[11]=_*I+y*Y+v*B+C*M,o[15]=_*E+y*q+v*F+C*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*f-i*c*f)+x*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+p*(+e*l*u-e*a*f-o*r*u+i*r*f+o*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,y=g*d*l-h*p*l-g*c*f+r*p*f+h*c*m-r*d*m,v=h*x*l-g*u*l+g*a*f-r*x*f-h*a*m+r*u*m,C=g*u*c-h*x*c-g*a*d+r*x*d+h*a*p-r*u*p,A=e*_+i*y+s*v+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/A;return t[0]=_*S,t[1]=(x*d*o-u*p*o-x*s*f+i*p*f+u*s*m-i*d*m)*S,t[2]=(a*p*o-x*c*o+x*s*l-i*p*l-a*s*m+i*c*m)*S,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*f-i*c*f)*S,t[4]=y*S,t[5]=(h*p*o-g*d*o+g*s*f-e*p*f-h*s*m+e*d*m)*S,t[6]=(g*c*o-r*p*o-g*s*l+e*p*l+r*s*m-e*c*m)*S,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*S,t[8]=v*S,t[9]=(g*u*o-h*x*o-g*i*f+e*x*f+h*i*m-e*u*m)*S,t[10]=(r*x*o-g*a*o+g*i*l-e*x*l-r*i*m+e*a*m)*S,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*f-e*a*f)*S,t[12]=C*S,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*p+e*u*p)*S,t[14]=(g*a*s-r*x*s-g*i*c+e*x*c+r*i*p-e*a*p)*S,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*S,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,g=o*u,x=r*h,p=r*u,m=a*u,_=c*l,y=c*h,v=c*u,C=i.x,A=i.y,S=i.z;return s[0]=(1-(x+m))*C,s[1]=(f+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+m))*A,s[6]=(p+_)*A,s[7]=0,s[8]=(g+y)*S,s[9]=(p-_)*S,s[10]=(1-(d+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,o=Bs.set(s[0],s[1],s[2]).length(),r=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let l=1/o,h=1/r,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Pi){let c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===Pi)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Pa)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Pi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,f=(i+s)*h,g,x;if(a===Pi)g=(r+o)*u,x=-2*u;else if(a===Pa)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Bs=new D,Jn=new de,Ry=new D(0,0,0),Ay=new D(1,1,1),Oi=new D,Qr=new D,Pn=new D,Gd=new de,Vd=new Ie,lo=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lo.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cy=0,Wd=new D,zs=new Ie,Si=new de,ta=new D,qo=new D,Py=new D,Ly=new Ie,Xd=new D(1,0,0),qd=new D(0,1,0),Yd=new D(0,0,1),Iy={type:"added"},Dy={type:"removed"},Qe=class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new lo,i=new Ie,s=new D(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new se}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(Xd,t)}rotateY(t){return this.rotateOnAxis(qd,t)}rotateZ(t){return this.rotateOnAxis(Yd,t)}translateOnAxis(t,e){return Wd.copy(t).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xd,t)}translateY(t){return this.translateOnAxis(qd,t)}translateZ(t){return this.translateOnAxis(Yd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ta.copy(t):ta.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(qo,ta,this.up):Si.lookAt(ta,qo,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Si),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Iy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dy)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,Py),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let o=e[i];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++){let a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new D(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new D,Ti=new D,ml=new D,Ri=new D,Fs=new D,Gs=new D,Zd=new D,gl=new D,xl=new D,yl=new D,ea=!1,fs=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){jn.subVectors(s,e),Ti.subVectors(i,e),ml.subVectors(t,e);let r=jn.dot(jn),a=jn.dot(Ti),c=jn.dot(ml),l=Ti.dot(Ti),h=Ti.dot(ml),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(r*h-a*c)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(t,e,i,s,o,r,a,c){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),this.getInterpolation(t,e,i,s,o,r,a,c)}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ri.x),c.addScaledVector(r,Ri.y),c.addScaledVector(a,Ri.z),c)}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ti.subVectors(t,e),jn.cross(Ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,o){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,r,a;Fs.subVectors(s,i),Gs.subVectors(o,i),gl.subVectors(t,i);let c=Fs.dot(gl),l=Gs.dot(gl);if(c<=0&&l<=0)return e.copy(i);xl.subVectors(t,s);let h=Fs.dot(xl),u=Gs.dot(xl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Fs,r);yl.subVectors(t,o);let f=Fs.dot(yl),g=Gs.dot(yl);if(g>=0&&f<=g)return e.copy(o);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Gs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Zd.subVectors(o,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Zd,a);let m=1/(p+x+d);return r=x*m,a=d*m,e.copy(i).addScaledVector(Fs,r).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},na={h:0,s:0,l:0};function _l(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=i,me.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=me.workingColorSpace){if(t=Ah(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=_l(r,o,t+1/3),this.g=_l(r,o,t),this.b=_l(r,o,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=ee){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ee){let i=jf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}copyLinearToSRGB(t){return this.r=al(t.r),this.g=al(t.g),this.b=al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ee){return me.fromWorkingColorSpace(sn.copy(this),t),Math.round(Ve(sn.r*255,0,255))*65536+Math.round(Ve(sn.g*255,0,255))*256+Math.round(Ve(sn.b*255,0,255))}getHexString(t=ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(sn.copy(this),e);let i=sn.r,s=sn.g,o=sn.b,r=Math.max(i,s,o),a=Math.min(i,s,o),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=ee){me.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,i=sn.g,s=sn.b;return t!==ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(na);let i=tr(Bi.h,na.h,e),s=tr(Bi.s,na.s,e),o=tr(Bi.l,na.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Vt;Vt.NAMES=jf;var Uy=0,Ii=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Vi,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Hl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ce=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new D,ia=new wt,Mn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ui(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),o=pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}};var Ha=class extends Mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Na=class extends Mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var jt=class extends Mn{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Hy=0,zn=new de,vl=new Qe,Vs=new D,Ln=new Un,Yo=new Un,Ge=new D,Me=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?Na:Ha)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Ln.min,Yo.min),Ln.expandByPoint(Ge),Ge.addVectors(Ln.max,Yo.max),Ln.expandByPoint(Ge)):(Ln.expandByPoint(Yo.min),Ln.expandByPoint(Yo.max))}Ln.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Ge.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),Ge.add(Vs)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,o=e.normal.array,r=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new D,h[T]=new D;let u=new D,d=new D,f=new D,g=new wt,x=new wt,p=new wt,m=new D,_=new D;function y(T,U,Y){u.fromArray(s,T*3),d.fromArray(s,U*3),f.fromArray(s,Y*3),g.fromArray(r,T*2),x.fromArray(r,U*2),p.fromArray(r,Y*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let q=1/(x.x*p.y-p.x*x.y);isFinite(q)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(q),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(q),l[T].add(m),l[U].add(m),l[Y].add(m),h[T].add(_),h[U].add(_),h[Y].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let T=0,U=v.length;T<U;++T){let Y=v[T],q=Y.start,P=Y.count;for(let z=q,B=q+P;z<B;z+=3)y(i[z+0],i[z+1],i[z+2])}let C=new D,A=new D,S=new D,I=new D;function E(T){S.fromArray(o,T*3),I.copy(S);let U=l[T];C.copy(U),C.sub(S.multiplyScalar(S.dot(U))).normalize(),A.crossVectors(I,U);let q=A.dot(h[T])<0?-1:1;c[T*4]=C.x,c[T*4+1]=C.y,c[T*4+2]=C.z,c[T*4+3]=q}for(let T=0,U=v.length;T<U;++T){let Y=v[T],q=Y.start,P=Y.count;for(let z=q,B=q+P;z<B;z+=3)E(i[z+0]),E(i[z+1]),E(i[z+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let o=t.morphAttributes;for(let l in o){let h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$d=new de,cs=new hr,sa=new Zi,Kd=new D,Ws=new D,Xs=new D,qs=new D,El=new D,oa=new D,ra=new wt,aa=new wt,ca=new wt,Jd=new D,jd=new D,Qd=new D,la=new D,ha=new D,W=class extends Qe{constructor(t=new Me,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){oa.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let h=a[c],u=o[c];h!==0&&(El.fromBufferAttribute(u,t),r?oa.addScaledVector(El,h):oa.addScaledVector(El.sub(e),h))}e.add(oa)}return e}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(o),cs.copy(t.ray).recast(t.near),!(sa.containsPoint(cs.origin)===!1&&(cs.intersectSphere(sa,Kd)===null||cs.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&($d.copy(o).invert(),cs.copy(t.ray).applyMatrix4($d),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let s,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=r[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,C=y;v<C;v+=3){let A=a.getX(v),S=a.getX(v+1),I=a.getX(v+2);s=ua(this,m,t,i,l,h,u,A,S,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=ua(this,r,t,i,l,h,u,_,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=r[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,C=y;v<C;v+=3){let A=v,S=v+1,I=v+2;s=ua(this,m,t,i,l,h,u,A,S,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let _=p,y=p+1,v=p+2;s=ua(this,r,t,i,l,h,u,_,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ny(n,t,e,i,s,o,r,a){let c;if(t.side===on?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===Xi,a),c===null)return null;ha.copy(a),ha.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ha);return l<e.near||l>e.far?null:{distance:l,point:ha.clone(),object:n}}function ua(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Ws),n.getVertexPosition(c,Xs),n.getVertexPosition(l,qs);let h=Ny(n,t,e,i,Ws,Xs,qs,la);if(h){s&&(ra.fromBufferAttribute(s,a),aa.fromBufferAttribute(s,c),ca.fromBufferAttribute(s,l),h.uv=fs.getInterpolation(la,Ws,Xs,qs,ra,aa,ca,new wt)),o&&(ra.fromBufferAttribute(o,a),aa.fromBufferAttribute(o,c),ca.fromBufferAttribute(o,l),h.uv1=fs.getInterpolation(la,Ws,Xs,qs,ra,aa,ca,new wt),h.uv2=h.uv1),r&&(Jd.fromBufferAttribute(r,a),jd.fromBufferAttribute(r,c),Qd.fromBufferAttribute(r,l),h.normal=fs.getInterpolation(la,Ws,Xs,qs,Jd,jd,Qd,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};fs.getNormal(Ws,Xs,qs,u.normal),h.face=u}return h}var Tt=class n extends Me{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(x,p,m,_,y,v,C,A,S,I,E){let T=v/S,U=C/I,Y=v/2,q=C/2,P=A/2,z=S+1,B=I+1,F=0,Z=0,K=new D;for(let M=0;M<B;M++){let N=M*U-q;for(let w=0;w<z;w++){let k=w*T-Y;K[x]=k*_,K[p]=N*y,K[m]=P,l.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[m]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(w/S),u.push(1-M/I),F+=1}}for(let M=0;M<I;M++)for(let N=0;N<S;N++){let w=d+N+z*M,k=d+N+z*(M+1),H=d+(N+1)+z*(M+1),J=d+(N+1)+z*M;c.push(w,k,J),c.push(k,H,J),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ho(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function fn(n){let t={};for(let e=0;e<n.length;e++){let i=ho(n[e]);for(let s in i)t[s]=i[s]}return t}function ky(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qf(n){return n.getRenderTarget()===null?n.outputColorSpace:me.workingColorSpace}var Oy={clone:ho,merge:fn},By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ho(t.uniforms),this.uniformsGroups=ky(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ka=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Je=class extends ka{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ys=-90,Zs=1,Wl=class extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Ys,Zs,t,e);s.layers=this.layers,this.add(s);let o=new Je(Ys,Zs,t,e);o.layers=this.layers,this.add(o);let r=new Je(Ys,Zs,t,e);r.layers=this.layers,this.add(r);let a=new Je(Ys,Zs,t,e);a.layers=this.layers,this.add(a);let c=new Je(Ys,Zs,t,e);c.layers=this.layers,this.add(c);let l=new Je(Ys,Zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Oa=class extends pn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ro,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xl=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===gs?ee:je),this.texture=new Oa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),o=new Gn({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Gi});o.uniforms.tEquirect.value=e;let r=new W(s,o),a=e.minFilter;return e.minFilter===rr&&(e.minFilter=Se),new Wl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}},Ml=new D,Fy=new D,Gy=new se,Ci=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ml.subVectors(i,e).cross(Fy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gy.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new Zi,da=new D,dr=class{constructor(t=new Ci,e=new Ci,i=new Ci,s=new Ci,o=new Ci,r=new Ci){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi){let i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],_=s[13],y=s[14],v=s[15];if(i[0].setComponents(c-o,d-l,p-f,v-m).normalize(),i[1].setComponents(c+o,d+l,p+f,v+m).normalize(),i[2].setComponents(c+r,d+h,p+g,v+_).normalize(),i[3].setComponents(c-r,d-h,p-g,v-_).normalize(),i[4].setComponents(c-a,d-u,p-x,v-y).normalize(),e===Pi)i[5].setComponents(c+a,d+u,p+x,v+y).normalize();else if(e===Pa)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tp(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Vy(n,t){let e=t.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function o(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];e?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(u.buffer,l,h),u.version=l.version}}return{get:r,remove:a,update:c}}var ue=class n extends Me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*d-r;for(let y=0;y<l;y++){let v=y*u-o;g.push(v,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let y=_+l*m,v=_+l*(m+1),C=_+1+l*(m+1),A=_+1+l*m;f.push(y,v,A),f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
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
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
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
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,t1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i1=`#ifdef USE_IRIDESCENCE
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
#endif`,s1=`#ifdef USE_BUMPMAP
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
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,f1=`#define PI 3.141592653589793
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
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m1=`vec3 transformedNormal = objectNormal;
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
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`
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
}`,M1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,O1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G1=`PhysicalMaterial material;
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
#endif`,V1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,W1=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
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
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t_=`#if defined( USE_POINTS_UV )
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
#endif`,e_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,o_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,r_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
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
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,L_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,D_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,K_=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,J_=`#define DISTANCE
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
}`,j_=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
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
}`,sv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ov=`#define LAMBERT
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
}`,rv=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,av=`#define MATCAP
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
}`,cv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lv=`#define NORMAL
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
}`,hv=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
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
}`,dv=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fv=`#define STANDARD
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
}`,pv=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mv=`#define TOON
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
}`,gv=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xv=`uniform float size;
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
}`,yv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,vv=`uniform vec3 color;
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
}`,Ev=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ie={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:qy,alphamap_pars_fragment:Yy,alphatest_fragment:Zy,alphatest_pars_fragment:$y,aomap_fragment:Ky,aomap_pars_fragment:Jy,batching_pars_vertex:jy,batching_vertex:Qy,begin_vertex:t1,beginnormal_vertex:e1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:s1,clipping_planes_fragment:o1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:c1,color_fragment:l1,color_pars_fragment:h1,color_pars_vertex:u1,color_vertex:d1,common:f1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:_1,colorspace_fragment:v1,colorspace_pars_fragment:E1,envmap_fragment:M1,envmap_common_pars_fragment:b1,envmap_pars_fragment:w1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:k1,envmap_vertex:T1,fog_vertex:R1,fog_pars_vertex:A1,fog_fragment:C1,fog_pars_fragment:P1,gradientmap_pars_fragment:L1,lightmap_fragment:I1,lightmap_pars_fragment:D1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:H1,lights_pars_begin:N1,lights_toon_fragment:O1,lights_toon_pars_fragment:B1,lights_phong_fragment:z1,lights_phong_pars_fragment:F1,lights_physical_fragment:G1,lights_physical_pars_fragment:V1,lights_fragment_begin:W1,lights_fragment_maps:X1,lights_fragment_end:q1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:K1,map_fragment:J1,map_pars_fragment:j1,map_particle_fragment:Q1,map_particle_pars_fragment:t_,metalnessmap_fragment:e_,metalnessmap_pars_fragment:n_,morphcolor_vertex:i_,morphnormal_vertex:s_,morphtarget_pars_vertex:o_,morphtarget_vertex:r_,normal_fragment_begin:a_,normal_fragment_maps:c_,normal_pars_fragment:l_,normal_pars_vertex:h_,normal_vertex:u_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:p_,clearcoat_pars_fragment:m_,iridescence_pars_fragment:g_,opaque_fragment:x_,packing:y_,premultiplied_alpha_fragment:__,project_vertex:v_,dithering_fragment:E_,dithering_pars_fragment:M_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:T_,shadowmap_vertex:R_,shadowmask_pars_fragment:A_,skinbase_vertex:C_,skinning_pars_vertex:P_,skinning_vertex:L_,skinnormal_vertex:I_,specularmap_fragment:D_,specularmap_pars_fragment:U_,tonemapping_fragment:H_,tonemapping_pars_fragment:N_,transmission_fragment:k_,transmission_pars_fragment:O_,uv_pars_fragment:B_,uv_pars_vertex:z_,uv_vertex:F_,worldpos_vertex:G_,background_vert:V_,background_frag:W_,backgroundCube_vert:X_,backgroundCube_frag:q_,cube_vert:Y_,cube_frag:Z_,depth_vert:$_,depth_frag:K_,distanceRGBA_vert:J_,distanceRGBA_frag:j_,equirect_vert:Q_,equirect_frag:tv,linedashed_vert:ev,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:rv,meshmatcap_vert:av,meshmatcap_frag:cv,meshnormal_vert:lv,meshnormal_frag:hv,meshphong_vert:uv,meshphong_frag:dv,meshphysical_vert:fv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:gv,points_vert:xv,points_frag:yv,shadow_vert:_v,shadow_frag:vv,sprite_vert:Ev,sprite_frag:Mv},Ct={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},hi={basic:{uniforms:fn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:fn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:fn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:fn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:fn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:fn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:fn([Ct.points,Ct.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:fn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:fn([Ct.common,Ct.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:fn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:fn([Ct.sprite,Ct.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:fn([Ct.common,Ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:fn([Ct.lights,Ct.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};hi.physical={uniforms:fn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var fa={r:0,b:0,g:0};function bv(n,t,e,i,s,o,r){let a=new Vt(0),c=o===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let _=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?e:t).get(y)),y===null?x(a,c):y&&y.isColor&&(x(y,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===oc)?(h===void 0&&(h=new W(new Tt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ho(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=me.getTransfer(y.colorSpace)!==Ee,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new W(new ue(2,2),new Gn({name:"BackgroundMaterial",uniforms:ho(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=me.getTransfer(y.colorSpace)!==Ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(fa,Qf(n)),i.buffers.color.setClear(fa.r,fa.g,fa.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function wv(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||o!==null,a={},c=p(null),l=c,h=!1;function u(P,z,B,F,Z){let K=!1;if(r){let M=x(F,B,z);l!==M&&(l=M,f(l.object)),K=m(P,F,B,Z),K&&_(P,F,B,Z)}else{let M=z.wireframe===!0;(l.geometry!==F.id||l.program!==B.id||l.wireframe!==M)&&(l.geometry=F.id,l.program=B.id,l.wireframe=M,K=!0)}Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,I(P,z,B,F),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):o.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function x(P,z,B){let F=B.wireframe===!0,Z=a[P.id];Z===void 0&&(Z={},a[P.id]=Z);let K=Z[z.id];K===void 0&&(K={},Z[z.id]=K);let M=K[F];return M===void 0&&(M=p(d()),K[F]=M),M}function p(P){let z=[],B=[],F=[];for(let Z=0;Z<s;Z++)z[Z]=0,B[Z]=0,F[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:F,object:P,attributes:{},index:null}}function m(P,z,B,F){let Z=l.attributes,K=z.attributes,M=0,N=B.getAttributes();for(let w in N)if(N[w].location>=0){let H=Z[w],J=K[w];if(J===void 0&&(w==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),w==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;M++}return l.attributesNum!==M||l.index!==F}function _(P,z,B,F){let Z={},K=z.attributes,M=0,N=B.getAttributes();for(let w in N)if(N[w].location>=0){let H=K[w];H===void 0&&(w==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),w==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let J={};J.attribute=H,H&&H.data&&(J.data=H.data),Z[w]=J,M++}l.attributes=Z,l.attributesNum=M,l.index=F}function y(){let P=l.newAttributes;for(let z=0,B=P.length;z<B;z++)P[z]=0}function v(P){C(P,0)}function C(P,z){let B=l.newAttributes,F=l.enabledAttributes,Z=l.attributeDivisors;B[P]=1,F[P]===0&&(n.enableVertexAttribArray(P),F[P]=1),Z[P]!==z&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),Z[P]=z)}function A(){let P=l.newAttributes,z=l.enabledAttributes;for(let B=0,F=z.length;B<F;B++)z[B]!==P[B]&&(n.disableVertexAttribArray(B),z[B]=0)}function S(P,z,B,F,Z,K,M){M===!0?n.vertexAttribIPointer(P,z,B,Z,K):n.vertexAttribPointer(P,z,B,F,Z,K)}function I(P,z,B,F){if(i.isWebGL2===!1&&(P.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let Z=F.attributes,K=B.getAttributes(),M=z.defaultAttributeValues;for(let N in K){let w=K[N];if(w.location>=0){let k=Z[N];if(k===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let H=k.normalized,J=k.itemSize,G=e.get(k);if(G===void 0)continue;let et=G.buffer,ct=G.type,ft=G.bytesPerElement,lt=i.isWebGL2===!0&&(ct===n.INT||ct===n.UNSIGNED_INT||k.gpuType===Ff);if(k.isInterleavedBufferAttribute){let Et=k.data,O=Et.stride,mt=k.offset;if(Et.isInstancedInterleavedBuffer){for(let nt=0;nt<w.locationSize;nt++)C(w.location+nt,Et.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let nt=0;nt<w.locationSize;nt++)v(w.location+nt);n.bindBuffer(n.ARRAY_BUFFER,et);for(let nt=0;nt<w.locationSize;nt++)S(w.location+nt,J/w.locationSize,ct,H,O*ft,(mt+J/w.locationSize*nt)*ft,lt)}else{if(k.isInstancedBufferAttribute){for(let Et=0;Et<w.locationSize;Et++)C(w.location+Et,k.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Et=0;Et<w.locationSize;Et++)v(w.location+Et);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Et=0;Et<w.locationSize;Et++)S(w.location+Et,J/w.locationSize,ct,H,J*ft,J/w.locationSize*Et*ft,lt)}}else if(M!==void 0){let H=M[N];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(w.location,H);break;case 3:n.vertexAttrib3fv(w.location,H);break;case 4:n.vertexAttrib4fv(w.location,H);break;default:n.vertexAttrib1fv(w.location,H)}}}}A()}function E(){Y();for(let P in a){let z=a[P];for(let B in z){let F=z[B];for(let Z in F)g(F[Z].object),delete F[Z];delete z[B]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;let z=a[P.id];for(let B in z){let F=z[B];for(let Z in F)g(F[Z].object),delete F[Z];delete z[B]}delete a[P.id]}function U(P){for(let z in a){let B=a[z];if(B[P.id]===void 0)continue;let F=B[P.id];for(let Z in F)g(F[Z].object),delete F[Z];delete B[P.id]}}function Y(){q(),h=!0,l!==c&&(l=c,f(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:q,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:v,disableUnusedAttributes:A}}function Sv(n,t,e,i){let s=i.isWebGL2,o;function r(h){o=h}function a(h,u){n.drawArrays(o,h,u),e.update(u,o,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](o,h,u,d),e.update(u,o,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(o,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,o,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Tv(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,v=r||t.has("OES_texture_float"),C=y&&v,A=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:C,maxSamples:A}}function Rv(n){let t=this,e=null,i=0,s=!1,o=!1,r=new Ci,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||o&&!p)o?h(null):l();else{let _=o?0:i,y=_*4,v=m.clippingState||null;c.value=v,v=h(g,d,y,f);for(let C=0;C!==y;++C)v[C]=e[C];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)r.copy(u[y]).applyMatrix4(_,a),r.normal.toArray(p,v),p[v+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Av(n){let t=new WeakMap;function e(r,a){return a===Nl?r.mapping=ro:a===kl&&(r.mapping=ao),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===Nl||a===kl)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new Xl(c.height/2);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var uo=class extends ka{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eo=4,tf=[.125,.215,.35,.446,.526,.582],ds=20,bl=new uo,ef=new Vt,wl=null,Sl=0,Tl=0,hs=(1+Math.sqrt(5))/2,$s=1/hs,nf=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,hs,$s),new D(0,hs,-$s),new D($s,0,hs),new D(-$s,0,hs),new D(hs,$s,0),new D(-hs,$s,0)],Ba=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,Sl,Tl),t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ro||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:ar,format:Dn,colorSpace:Li,depthBuffer:!1},s=sf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(o)),this._blurMaterial=Pv(o,t,e)}return s}_compileMaterial(t){let e=new W(this._lodPlanes[0],t);this._renderer.compile(e,bl)}_sceneToCubeUV(t,e,i,s){let a=new Je(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ef),h.toneMapping=Wi,h.autoClear=!1;let f=new ce({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new W(new Tt,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(ef),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):_===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let y=this._cubeSize;pa(s,_*y,m>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ro||t.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new W(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;pa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,bl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=nf[(s-1)%nf.length];this._blur(t,s-1,s,o,r)}e.autoClear=i}_blur(t,e,i,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new W(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ds-1),x=o/g,p=isFinite(o)?1+Math.floor(h*x):ds;p>ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ds}`);let m=[],_=0;for(let S=0;S<ds;++S){let I=S/x,E=Math.exp(-I*I/2);m.push(E),S===0?_+=E:S<p&&(_+=2*E)}for(let S=0;S<m.length;S++)m[S]=m[S]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let v=this._sizeLods[s],C=3*v*(s>y-eo?s-y+eo:0),A=4*(this._cubeSize-v);pa(e,C,A,3*v,2*v),c.setRenderTarget(e),c.render(u,bl)}};function Cv(n){let t=[],e=[],i=[],s=n,o=n-eo+1+tf.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let c=1/a;r>n-eo?c=tf[r-n+eo-1]:r===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*f),y=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let A=0;A<f;A++){let S=A%3*2/3-1,I=A>2?0:-1,E=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];_.set(E,x*g*A),y.set(d,p*g*A);let T=[A,A,A,A,A,A];v.set(T,m*g*A)}let C=new Me;C.setAttribute("position",new Mn(_,x)),C.setAttribute("uv",new Mn(y,p)),C.setAttribute("faceIndex",new Mn(v,m)),t.push(C),s>eo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function sf(n,t,e){let i=new Qn(n,t,e);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Pv(n,t,e){let i=new Float32Array(ds),s=new D(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function of(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rf(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function Lv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Nl||c===kl,h=c===ro||c===ao;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ba(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ba(n));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){let c=a.target;c.removeEventListener("dispose",o);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Iv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dv(n,t,e,i){let s={},o=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",r),delete s[d.id];let f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let C=_[y+0],A=_[y+1],S=_[y+2];d.push(C,A,A,S,S,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let C=y+0,A=y+1,S=y+2;d.push(C,A,A,S,S,C)}}else return;let p=new(Jf(d)?Na:Ha)(d,1);p.version=x;let m=o.get(u);m&&t.remove(m),o.set(u,p)}function h(u){let d=o.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Uv(n,t,e,i){let s=i.isWebGL2,o;function r(f){o=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(o,g,a,f*c),e.update(g,o,1)}function u(f,g,x){if(x===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](o,g,a,f*c,x),e.update(g,o,x)}function d(f,g,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(o,g,0,a,f,0,x);let m=0;for(let _=0;_<x;_++)m+=g[_];e.update(m,o,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Hv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Nv(n,t){return n[0]-t[0]}function kv(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Ov(n,t,e){let i={},s=new Float32Array(8),o=new WeakMap,r=new We,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=o.get(h);if(x===void 0||x.count!==g){let P=function(){Y.dispose(),o.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],I=0;_===!0&&(I=1),y===!0&&(I=2),v===!0&&(I=3);let E=h.attributes.position.count*I,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let U=new Float32Array(E*T*4*g),Y=new Ua(U,E,T,g);Y.type=Fi,Y.needsUpdate=!0;let q=I*4;for(let z=0;z<g;z++){let B=C[z],F=A[z],Z=S[z],K=E*T*4*z;for(let M=0;M<B.count;M++){let N=M*q;_===!0&&(r.fromBufferAttribute(B,M),U[K+N+0]=r.x,U[K+N+1]=r.y,U[K+N+2]=r.z,U[K+N+3]=0),y===!0&&(r.fromBufferAttribute(F,M),U[K+N+4]=r.x,U[K+N+5]=r.y,U[K+N+6]=r.z,U[K+N+7]=0),v===!0&&(r.fromBufferAttribute(Z,M),U[K+N+8]=r.x,U[K+N+9]=r.y,U[K+N+10]=r.z,U[K+N+11]=Z.itemSize===4?r.w:1)}}x={count:g,texture:Y,size:new wt(E,T)},o.set(h,x),h.addEventListener("dispose",P)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<f;y++){let v=g[y];v[0]=y,v[1]=d[y]}g.sort(kv);for(let y=0;y<8;y++)y<f&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Nv);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let v=a[y],C=v[0],A=v[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),p&&h.getAttribute("morphNormal"+y)!==p[C]&&h.setAttribute("morphNormal"+y,p[C]),s[y]=A,m+=A):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Bv(n,t,e,i){let s=new WeakMap;function o(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}var za=class extends pn{constructor(t,e,i,s,o,r,a,c,l,h){if(h=h!==void 0?h:ms,h!==ms&&h!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ms&&(i=zi),i===void 0&&h===co&&(i=ps),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ep=new pn,np=new za(1,1);np.compareFunction=Kf;var ip=new Ua,sp=new Vl,op=new Oa,af=[],cf=[],lf=new Float32Array(16),hf=new Float32Array(9),uf=new Float32Array(4);function vo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=af[s];if(o===void 0&&(o=new Float32Array(s),af[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=cf[t];e===void 0&&(e=new Int32Array(t),cf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function zv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function Vv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Wv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),Be(e,i)}}function Xv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;hf.set(i),n.uniformMatrix3fv(this.addr,!1,hf),Be(e,i)}}function qv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;lf.set(i),n.uniformMatrix4fv(this.addr,!1,lf),Be(e,i)}}function Yv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function $v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Kv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function Jv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Qv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function tE(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function eE(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o=this.type===n.SAMPLER_2D_SHADOW?np:ep;e.setTexture2D(t||o,s)}function nE(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sp,s)}function iE(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||op,s)}function sE(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ip,s)}function oE(n){switch(n){case 5126:return zv;case 35664:return Fv;case 35665:return Gv;case 35666:return Vv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Jv;case 36294:return jv;case 36295:return Qv;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return sE}}function rE(n,t){n.uniform1fv(this.addr,t)}function aE(n,t){let e=vo(t,this.size,2);n.uniform2fv(this.addr,e)}function cE(n,t){let e=vo(t,this.size,3);n.uniform3fv(this.addr,e)}function lE(n,t){let e=vo(t,this.size,4);n.uniform4fv(this.addr,e)}function hE(n,t){let e=vo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uE(n,t){let e=vo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function dE(n,t){let e=vo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function fE(n,t){n.uniform1iv(this.addr,t)}function pE(n,t){n.uniform2iv(this.addr,t)}function mE(n,t){n.uniform3iv(this.addr,t)}function gE(n,t){n.uniform4iv(this.addr,t)}function xE(n,t){n.uniform1uiv(this.addr,t)}function yE(n,t){n.uniform2uiv(this.addr,t)}function _E(n,t){n.uniform3uiv(this.addr,t)}function vE(n,t){n.uniform4uiv(this.addr,t)}function EE(n,t,e){let i=this.cache,s=t.length,o=ac(e,s);Oe(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||ep,o[r])}function ME(n,t,e){let i=this.cache,s=t.length,o=ac(e,s);Oe(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||sp,o[r])}function bE(n,t,e){let i=this.cache,s=t.length,o=ac(e,s);Oe(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||op,o[r])}function wE(n,t,e){let i=this.cache,s=t.length,o=ac(e,s);Oe(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ip,o[r])}function SE(n){switch(n){case 5126:return rE;case 35664:return aE;case 35665:return cE;case 35666:return lE;case 35674:return hE;case 35675:return uE;case 35676:return dE;case 5124:case 35670:return fE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return xE;case 36294:return yE;case 36295:return _E;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return wE}}var ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=oE(e.type)}},Yl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=SE(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function df(n,t){n.seq.push(t),n.map[t.id]=t}function TE(n,t,e){let i=n.name,s=i.length;for(Rl.lastIndex=0;;){let o=Rl.exec(i),r=Rl.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){df(e,l===void 0?new ql(a,n,t):new Yl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Zl(a),df(e,u)),e=u}}}var oo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);TE(o,r,this)}}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function ff(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var RE=37297,AE=0;function CE(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function PE(n){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(n),i;switch(t===e?i="":t===Ca&&e===Aa?i="LinearDisplayP3ToLinearSRGB":t===Aa&&e===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case Li:case rc:return[i,"LinearTransferOETF"];case ee:case Rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+CE(n.getShaderSource(t),r)}else return s}function LE(n,t){let e=PE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function IE(n,t){let e;switch(t){case Ox:e="Linear";break;case Bx:e="Reinhard";break;case zx:e="OptimizedCineon";break;case Fx:e="ACESFilmic";break;case Vx:e="AgX";break;case Gx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function DE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(no).join(`
`)}function UE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(no).join(`
`)}function HE(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function NE(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),r=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function no(n){return n!==""}function mf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(kE,BE)}var OE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BE(n,t){let e=ie[t];if(e===void 0){let i=OE.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var zE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(n){return n.replace(zE,FE)}function FE(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function yf(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function GE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Of?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function VE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ro:case ao:t="ENVMAP_TYPE_CUBE";break;case oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WE(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ao&&(t="ENVMAP_MODE_REFRACTION"),t}function XE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bf:t="ENVMAP_BLENDING_MULTIPLY";break;case Nx:t="ENVMAP_BLENDING_MIX";break;case kx:t="ENVMAP_BLENDING_ADD";break}return t}function qE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function YE(n,t,e,i){let s=n.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=GE(e),l=VE(e),h=WE(e),u=XE(e),d=qE(e),f=e.isWebGL2?"":DE(e),g=UE(e),x=HE(o),p=s.createProgram(),m,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(no).join(`
`),m.length>0&&(m+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(no).join(`
`),_.length>0&&(_+=`
`)):(m=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),_=[f,yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Wi?IE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,LE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),r=$l(r),r=mf(r,e),r=gf(r,e),a=$l(a),a=mf(a,e),a=gf(a,e),r=xf(r),a=xf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+m+r,C=y+_+a,A=ff(s,s.VERTEX_SHADER,v),S=ff(s,s.FRAGMENT_SHADER,C);s.attachShader(p,A),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function I(Y){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(S).trim(),B=!0,F=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,A,S);else{let Z=pf(s,A,"vertex"),K=pf(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Z+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(P===""||z==="")&&(F=!1);F&&(Y.diagnostics={runnable:B,programLog:q,vertexShader:{log:P,prefix:m},fragmentShader:{log:z,prefix:_}})}s.deleteShader(A),s.deleteShader(S),E=new oo(s,p),T=NE(s,p)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,RE)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=AE++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=S,this}var ZE=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Jl(t),e.set(t,i)),i}},Jl=class{constructor(t){this.id=ZE++,this.code=t,this.usedTimes=0}};function $E(n,t,e,i,s,o,r){let a=new ur,c=new Kl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,T,U,Y,q){let P=Y.fog,z=q.geometry,B=E.isMeshStandardMaterial?Y.environment:null,F=(E.isMeshStandardMaterial?e:t).get(E.envMap||B),Z=F&&F.mapping===oc?F.image.height:null,K=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let M=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,N=M!==void 0?M.length:0,w=0;z.morphAttributes.position!==void 0&&(w=1),z.morphAttributes.normal!==void 0&&(w=2),z.morphAttributes.color!==void 0&&(w=3);let k,H,J,G;if(K){let hn=hi[K];k=hn.vertexShader,H=hn.fragmentShader}else k=E.vertexShader,H=E.fragmentShader,c.update(E),J=c.getVertexShaderID(E),G=c.getFragmentShaderID(E);let et=n.getRenderTarget(),ct=q.isInstancedMesh===!0,ft=q.isBatchedMesh===!0,lt=!!E.map,Et=!!E.matcap,O=!!F,mt=!!E.aoMap,nt=!!E.lightMap,ht=!!E.bumpMap,X=!!E.normalMap,ot=!!E.displacementMap,rt=!!E.emissiveMap,R=!!E.metalnessMap,b=!!E.roughnessMap,V=E.anisotropy>0,j=E.clearcoat>0,ut=E.iridescence>0,pt=E.sheen>0,Rt=E.transmission>0,bt=V&&!!E.anisotropyMap,St=j&&!!E.clearcoatMap,Q=j&&!!E.clearcoatNormalMap,gt=j&&!!E.clearcoatRoughnessMap,at=ut&&!!E.iridescenceMap,yt=ut&&!!E.iridescenceThicknessMap,Ot=pt&&!!E.sheenColorMap,zt=pt&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Ut=!!E.specularColorMap,ne=!!E.specularIntensityMap,fe=Rt&&!!E.transmissionMap,Pe=Rt&&!!E.thicknessMap,re=!!E.gradientMap,At=!!E.alphaMap,$=E.alphaTest>0,Pt=!!E.alphaHash,Lt=!!E.extensions,Zt=!!z.attributes.uv1,qt=!!z.attributes.uv2,ye=!!z.attributes.uv3,_e=Wi;return E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(_e=n.toneMapping),{isWebGL2:h,shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:H,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ft,instancing:ct,instancingColor:ct&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Li,map:lt,matcap:Et,envMap:O,envMapMode:O&&F.mapping,envMapCubeUVHeight:Z,aoMap:mt,lightMap:nt,bumpMap:ht,normalMap:X,displacementMap:d&&ot,emissiveMap:rt,normalMapObjectSpace:X&&E.normalMapType===ty,normalMapTangentSpace:X&&E.normalMapType===$f,metalnessMap:R,roughnessMap:b,anisotropy:V,anisotropyMap:bt,clearcoat:j,clearcoatMap:St,clearcoatNormalMap:Q,clearcoatRoughnessMap:gt,iridescence:ut,iridescenceMap:at,iridescenceThicknessMap:yt,sheen:pt,sheenColorMap:Ot,sheenRoughnessMap:zt,specularMap:Nt,specularColorMap:Ut,specularIntensityMap:ne,transmission:Rt,transmissionMap:fe,thicknessMap:Pe,gradientMap:re,opaque:E.transparent===!1&&E.blending===Vi,alphaMap:At,alphaTest:$,alphaHash:Pt,combine:E.combine,mapUv:lt&&x(E.map.channel),aoMapUv:mt&&x(E.aoMap.channel),lightMapUv:nt&&x(E.lightMap.channel),bumpMapUv:ht&&x(E.bumpMap.channel),normalMapUv:X&&x(E.normalMap.channel),displacementMapUv:ot&&x(E.displacementMap.channel),emissiveMapUv:rt&&x(E.emissiveMap.channel),metalnessMapUv:R&&x(E.metalnessMap.channel),roughnessMapUv:b&&x(E.roughnessMap.channel),anisotropyMapUv:bt&&x(E.anisotropyMap.channel),clearcoatMapUv:St&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Q&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(E.sheenRoughnessMap.channel),specularMapUv:Nt&&x(E.specularMap.channel),specularColorMapUv:Ut&&x(E.specularColorMap.channel),specularIntensityMapUv:ne&&x(E.specularIntensityMap.channel),transmissionMapUv:fe&&x(E.transmissionMap.channel),thicknessMapUv:Pe&&x(E.thicknessMap.channel),alphaMapUv:At&&x(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(X||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Zt,vertexUv2s:qt,vertexUv3s:ye,pointsUvs:q.isPoints===!0&&!!z.attributes.uv&&(lt||At),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:w,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:lt&&E.map.isVideoTexture===!0&&me.getTransfer(E.map.colorSpace)===Ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===he,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Lt&&E.extensions.derivatives===!0,extensionFragDepth:Lt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)T.push(U),T.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(_(T,E),y(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function _(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function y(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function v(E){let T=g[E.type],U;if(T){let Y=hi[T];U=Oy.clone(Y.uniforms)}else U=E.uniforms;return U}function C(E,T){let U;for(let Y=0,q=l.length;Y<q;Y++){let P=l[Y];if(P.cacheKey===T){U=P,++U.usedTimes;break}}return U===void 0&&(U=new YE(n,T,E,o),l.push(U)),U}function A(E){if(--E.usedTimes===0){let T=l.indexOf(E);l[T]=l[l.length-1],l.pop(),E.destroy()}}function S(E){c.remove(E)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:S,programs:l,dispose:I}}function KE(){let n=new WeakMap;function t(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function e(o){n.delete(o)}function i(o,r,a){n.get(o)[r]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function JE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _f(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vf(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,g,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,g,x,p){let m=r(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,x,p){let m=r(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||JE),i.length>1&&i.sort(d||_f),s.length>1&&s.sort(d||_f)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function jE(){let n=new WeakMap;function t(i,s){let o=n.get(i),r;return o===void 0?(r=new vf,n.set(i,[r])):s>=o.length?(r=new vf,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function QE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Vt};break;case"SpotLight":e={position:new D,direction:new D,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function tM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var eM=0;function nM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function iM(n,t){let e=new QE,i=tM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let o=new D,r=new de,a=new de;function c(h,u){let d=0,f=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,p=0,m=0,_=0,y=0,v=0,C=0,A=0,S=0,I=0,E=0;h.sort(nM);let T=u===!0?Math.PI:1;for(let Y=0,q=h.length;Y<q;Y++){let P=h[Y],z=P.color,B=P.intensity,F=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*B*T,f+=z.g*B*T,g+=z.b*B*T;else if(P.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(P.sh.coefficients[K],B);E++}else if(P.isDirectionalLight){let K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){let M=P.shadow,N=i.get(P);N.shadowBias=M.bias,N.shadowNormalBias=M.normalBias,N.shadowRadius=M.radius,N.shadowMapSize=M.mapSize,s.directionalShadow[x]=N,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=P.shadow.matrix,v++}s.directional[x]=K,x++}else if(P.isSpotLight){let K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(z).multiplyScalar(B*T),K.distance=F,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,s.spot[m]=K;let M=P.shadow;if(P.map&&(s.spotLightMap[S]=P.map,S++,M.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[m]=M.matrix,P.castShadow){let N=i.get(P);N.shadowBias=M.bias,N.shadowNormalBias=M.normalBias,N.shadowRadius=M.radius,N.shadowMapSize=M.mapSize,s.spotShadow[m]=N,s.spotShadowMap[m]=Z,A++}m++}else if(P.isRectAreaLight){let K=e.get(P);K.color.copy(z).multiplyScalar(B),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),s.rectArea[_]=K,_++}else if(P.isPointLight){let K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*T),K.distance=P.distance,K.decay=P.decay,P.castShadow){let M=P.shadow,N=i.get(P);N.shadowBias=M.bias,N.shadowNormalBias=M.normalBias,N.shadowRadius=M.radius,N.shadowMapSize=M.mapSize,N.shadowCameraNear=M.camera.near,N.shadowCameraFar=M.camera.far,s.pointShadow[p]=N,s.pointShadowMap[p]=Z,s.pointShadowMatrix[p]=P.shadow.matrix,C++}s.point[p]=K,p++}else if(P.isHemisphereLight){let K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(B*T),K.groundColor.copy(P.groundColor).multiplyScalar(B*T),s.hemi[y]=K,y++}}_>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ct.LTC_FLOAT_1,s.rectAreaLTC2=Ct.LTC_FLOAT_2):(s.rectAreaLTC1=Ct.LTC_HALF_1,s.rectAreaLTC2=Ct.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ct.LTC_FLOAT_1,s.rectAreaLTC2=Ct.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ct.LTC_HALF_1,s.rectAreaLTC2=Ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==x||U.pointLength!==p||U.spotLength!==m||U.rectAreaLength!==_||U.hemiLength!==y||U.numDirectionalShadows!==v||U.numPointShadows!==C||U.numSpotShadows!==A||U.numSpotMaps!==S||U.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=_,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+S-I,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=E,U.directionalLength=x,U.pointLength=p,U.spotLength=m,U.rectAreaLength=_,U.hemiLength=y,U.numDirectionalShadows=v,U.numPointShadows=C,U.numSpotShadows=A,U.numSpotMaps=S,U.numLightProbes=E,s.version=eM++)}function l(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let v=h[_];if(v.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(v.matrixWorld),o.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(m),d++}else if(v.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(v.matrixWorld),o.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:s}}function Ef(n,t){let e=new iM(n,t),i=[],s=[];function o(){i.length=0,s.length=0}function r(u){i.push(u)}function a(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function sM(n,t){let e=new WeakMap;function i(o,r=0){let a=e.get(o),c;return a===void 0?(c=new Ef(n,t),e.set(o,[c])):r>=a.length?(c=new Ef(n,t),a.push(c)):c=a[r],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var jl=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ql=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
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
}`;function aM(n,t,e){let i=new dr,s=new wt,o=new wt,r=new We,a=new jl({depthPacking:Qx}),c=new Ql,l={},h=e.maxTextureSize,u={[Xi]:on,[on]:Xi,[he]:he},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:oM,fragmentShader:rM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new W(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let m=this.type;this.render=function(A,S,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),T=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Gi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let q=m!==Ai&&this.type===Ai,P=m===Ai&&this.type!==Ai;for(let z=0,B=A.length;z<B;z++){let F=A[z],Z=F.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let K=Z.getFrameExtents();if(s.multiply(K),o.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/K.x),s.x=o.x*K.x,Z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/K.y),s.y=o.y*K.y,Z.mapSize.y=o.y)),Z.map===null||q===!0||P===!0){let N=this.type!==Ai?{minFilter:Ke,magFilter:Ke}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Qn(s.x,s.y,N),Z.map.texture.name=F.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let M=Z.getViewportCount();for(let N=0;N<M;N++){let w=Z.getViewport(N);r.set(o.x*w.x,o.y*w.y,o.x*w.z,o.y*w.w),Y.viewport(r),Z.updateMatrices(F,N),i=Z.getFrustum(),v(S,I,Z.camera,F,this.type)}Z.isPointLightShadow!==!0&&this.type===Ai&&_(Z,I),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,T,U)};function _(A,S){let I=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(S,null,I,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(S,null,I,f,x,null)}function y(A,S,I,E){let T=null,U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)T=U;else if(T=I.isPointLight===!0?c:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let Y=T.uuid,q=S.uuid,P=l[Y];P===void 0&&(P={},l[Y]=P);let z=P[q];z===void 0&&(z=T.clone(),P[q]=z,S.addEventListener("dispose",C)),T=z}if(T.visible=S.visible,T.wireframe=S.wireframe,E===Ai?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:u[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Y=n.properties.get(T);Y.light=I}return T}function v(A,S,I,E,T){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let q=t.update(A),P=A.material;if(Array.isArray(P)){let z=q.groups;for(let B=0,F=z.length;B<F;B++){let Z=z[B],K=P[Z.materialIndex];if(K&&K.visible){let M=y(A,K,E,T);A.onBeforeShadow(n,A,S,I,q,M,Z),n.renderBufferDirect(I,null,q,M,A,Z),A.onAfterShadow(n,A,S,I,q,M,Z)}}}else if(P.visible){let z=y(A,P,E,T);A.onBeforeShadow(n,A,S,I,q,z,null),n.renderBufferDirect(I,null,q,z,A,null),A.onAfterShadow(n,A,S,I,q,z,null)}}let Y=A.children;for(let q=0,P=Y.length;q<P;q++)v(Y[q],S,I,E,T)}function C(A){A.target.removeEventListener("dispose",C);for(let I in l){let E=l[I],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function cM(n,t,e){let i=e.isWebGL2;function s(){let $=!1,Pt=new We,Lt=null,Zt=new We(0,0,0,0);return{setMask:function(qt){Lt!==qt&&!$&&(n.colorMask(qt,qt,qt,qt),Lt=qt)},setLocked:function(qt){$=qt},setClear:function(qt,ye,_e,ze,hn){hn===!0&&(qt*=ze,ye*=ze,_e*=ze),Pt.set(qt,ye,_e,ze),Zt.equals(Pt)===!1&&(n.clearColor(qt,ye,_e,ze),Zt.copy(Pt))},reset:function(){$=!1,Lt=null,Zt.set(-1,0,0,0)}}}function o(){let $=!1,Pt=null,Lt=null,Zt=null;return{setTest:function(qt){qt?ft(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(qt){Pt!==qt&&!$&&(n.depthMask(qt),Pt=qt)},setFunc:function(qt){if(Lt!==qt){switch(qt){case Cx:n.depthFunc(n.NEVER);break;case Px:n.depthFunc(n.ALWAYS);break;case Lx:n.depthFunc(n.LESS);break;case wa:n.depthFunc(n.LEQUAL);break;case Ix:n.depthFunc(n.EQUAL);break;case Dx:n.depthFunc(n.GEQUAL);break;case Ux:n.depthFunc(n.GREATER);break;case Hx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=qt}},setLocked:function(qt){$=qt},setClear:function(qt){Zt!==qt&&(n.clearDepth(qt),Zt=qt)},reset:function(){$=!1,Pt=null,Lt=null,Zt=null}}}function r(){let $=!1,Pt=null,Lt=null,Zt=null,qt=null,ye=null,_e=null,ze=null,hn=null;return{setTest:function(ve){$||(ve?ft(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(ve){Pt!==ve&&!$&&(n.stencilMask(ve),Pt=ve)},setFunc:function(ve,un,li){(Lt!==ve||Zt!==un||qt!==li)&&(n.stencilFunc(ve,un,li),Lt=ve,Zt=un,qt=li)},setOp:function(ve,un,li){(ye!==ve||_e!==un||ze!==li)&&(n.stencilOp(ve,un,li),ye=ve,_e=un,ze=li)},setLocked:function(ve){$=ve},setClear:function(ve){hn!==ve&&(n.clearStencil(ve),hn=ve)},reset:function(){$=!1,Pt=null,Lt=null,Zt=null,qt=null,ye=null,_e=null,ze=null,hn=null}}}let a=new s,c=new o,l=new r,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,y=null,v=null,C=null,A=null,S=null,I=null,E=new Vt(0,0,0),T=0,U=!1,Y=null,q=null,P=null,z=null,B=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,K=0,M=n.getParameter(n.VERSION);M.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(M)[1]),Z=K>=1):M.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),Z=K>=2);let N=null,w={},k=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),J=new We().fromArray(k),G=new We().fromArray(H);function et($,Pt,Lt,Zt){let qt=new Uint8Array(4),ye=n.createTexture();n.bindTexture($,ye),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<Lt;_e++)i&&($===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY)?n.texImage3D(Pt,0,n.RGBA,1,1,Zt,0,n.RGBA,n.UNSIGNED_BYTE,qt):n.texImage2D(Pt+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qt);return ye}let ct={};ct[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ct[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),c.setFunc(wa),rt(!1),R(ed),ft(n.CULL_FACE),X(Gi);function ft($){d[$]!==!0&&(n.enable($),d[$]=!0)}function lt($){d[$]!==!1&&(n.disable($),d[$]=!1)}function Et($,Pt){return f[$]!==Pt?(n.bindFramebuffer($,Pt),f[$]=Pt,i&&($===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Pt),$===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Pt)),!0):!1}function O($,Pt){let Lt=x,Zt=!1;if($)if(Lt=g.get(Pt),Lt===void 0&&(Lt=[],g.set(Pt,Lt)),$.isWebGLMultipleRenderTargets){let qt=$.texture;if(Lt.length!==qt.length||Lt[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,_e=qt.length;ye<_e;ye++)Lt[ye]=n.COLOR_ATTACHMENT0+ye;Lt.length=qt.length,Zt=!0}}else Lt[0]!==n.COLOR_ATTACHMENT0&&(Lt[0]=n.COLOR_ATTACHMENT0,Zt=!0);else Lt[0]!==n.BACK&&(Lt[0]=n.BACK,Zt=!0);Zt&&(e.isWebGL2?n.drawBuffers(Lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Lt))}function mt($){return p!==$?(n.useProgram($),p=$,!0):!1}let nt={[us]:n.FUNC_ADD,[px]:n.FUNC_SUBTRACT,[mx]:n.FUNC_REVERSE_SUBTRACT};if(i)nt[sd]=n.MIN,nt[od]=n.MAX;else{let $=t.get("EXT_blend_minmax");$!==null&&(nt[sd]=$.MIN_EXT,nt[od]=$.MAX_EXT)}let ht={[gx]:n.ZERO,[xx]:n.ONE,[yx]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[wx]:n.SRC_ALPHA_SATURATE,[Mx]:n.DST_COLOR,[vx]:n.DST_ALPHA,[_x]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[bx]:n.ONE_MINUS_DST_COLOR,[Ex]:n.ONE_MINUS_DST_ALPHA,[Sx]:n.CONSTANT_COLOR,[Tx]:n.ONE_MINUS_CONSTANT_COLOR,[Rx]:n.CONSTANT_ALPHA,[Ax]:n.ONE_MINUS_CONSTANT_ALPHA};function X($,Pt,Lt,Zt,qt,ye,_e,ze,hn,ve){if($===Gi){m===!0&&(lt(n.BLEND),m=!1);return}if(m===!1&&(ft(n.BLEND),m=!0),$!==fx){if($!==_||ve!==U){if((y!==us||A!==us)&&(n.blendEquation(n.FUNC_ADD),y=us,A=us),ve)switch($){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fi:n.blendFunc(n.ONE,n.ONE);break;case nd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case id:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case id:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,C=null,S=null,I=null,E.set(0,0,0),T=0,_=$,U=ve}return}qt=qt||Pt,ye=ye||Lt,_e=_e||Zt,(Pt!==y||qt!==A)&&(n.blendEquationSeparate(nt[Pt],nt[qt]),y=Pt,A=qt),(Lt!==v||Zt!==C||ye!==S||_e!==I)&&(n.blendFuncSeparate(ht[Lt],ht[Zt],ht[ye],ht[_e]),v=Lt,C=Zt,S=ye,I=_e),(ze.equals(E)===!1||hn!==T)&&(n.blendColor(ze.r,ze.g,ze.b,hn),E.copy(ze),T=hn),_=$,U=!1}function ot($,Pt){$.side===he?lt(n.CULL_FACE):ft(n.CULL_FACE);let Lt=$.side===on;Pt&&(Lt=!Lt),rt(Lt),$.blending===Vi&&$.transparent===!1?X(Gi):X($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),a.setMask($.colorWrite);let Zt=$.stencilWrite;l.setTest(Zt),Zt&&(l.setMask($.stencilWriteMask),l.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),l.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),V($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt($){Y!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),Y=$)}function R($){$!==ux?(ft(n.CULL_FACE),$!==q&&($===ed?n.cullFace(n.BACK):$===dx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),q=$}function b($){$!==P&&(Z&&n.lineWidth($),P=$)}function V($,Pt,Lt){$?(ft(n.POLYGON_OFFSET_FILL),(z!==Pt||B!==Lt)&&(n.polygonOffset(Pt,Lt),z=Pt,B=Lt)):lt(n.POLYGON_OFFSET_FILL)}function j($){$?ft(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function ut($){$===void 0&&($=n.TEXTURE0+F-1),N!==$&&(n.activeTexture($),N=$)}function pt($,Pt,Lt){Lt===void 0&&(N===null?Lt=n.TEXTURE0+F-1:Lt=N);let Zt=w[Lt];Zt===void 0&&(Zt={type:void 0,texture:void 0},w[Lt]=Zt),(Zt.type!==$||Zt.texture!==Pt)&&(N!==Lt&&(n.activeTexture(Lt),N=Lt),n.bindTexture($,Pt||ct[$]),Zt.type=$,Zt.texture=Pt)}function Rt(){let $=w[N];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function bt(){try{n.compressedTexImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function zt(){try{n.texStorage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Nt(){try{n.texImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ne($){J.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),J.copy($))}function fe($){G.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),G.copy($))}function Pe($,Pt){let Lt=u.get(Pt);Lt===void 0&&(Lt=new WeakMap,u.set(Pt,Lt));let Zt=Lt.get($);Zt===void 0&&(Zt=n.getUniformBlockIndex(Pt,$.name),Lt.set($,Zt))}function re($,Pt){let Zt=u.get(Pt).get($);h.get(Pt)!==Zt&&(n.uniformBlockBinding(Pt,Zt,$.__bindingPointIndex),h.set(Pt,Zt))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},N=null,w={},f={},g=new WeakMap,x=[],p=null,m=!1,_=null,y=null,v=null,C=null,A=null,S=null,I=null,E=new Vt(0,0,0),T=0,U=!1,Y=null,q=null,P=null,z=null,B=null,J.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ft,disable:lt,bindFramebuffer:Et,drawBuffers:O,useProgram:mt,setBlending:X,setMaterial:ot,setFlipSided:rt,setCullFace:R,setLineWidth:b,setPolygonOffset:V,setScissorTest:j,activeTexture:ut,bindTexture:pt,unbindTexture:Rt,compressedTexImage2D:bt,compressedTexImage3D:St,texImage2D:Nt,texImage3D:Ut,updateUBOMapping:Pe,uniformBlockBinding:re,texStorage2D:Ot,texStorage3D:zt,texSubImage2D:Q,texSubImage3D:gt,compressedTexSubImage2D:at,compressedTexSubImage3D:yt,scissor:ne,viewport:fe,reset:At}}function lM(n,t,e,i,s,o,r){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):lr("canvas")}function x(R,b,V,j){let ut=1;if((R.width>j||R.height>j)&&(ut=j/Math.max(R.width,R.height)),ut<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let pt=b?La:Math.floor,Rt=pt(ut*R.width),bt=pt(ut*R.height);u===void 0&&(u=g(Rt,bt));let St=V?g(Rt,bt):u;return St.width=Rt,St.height=bt,St.getContext("2d").drawImage(R,0,0,Rt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Rt+"x"+bt+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Fl(R.width)&&Fl(R.height)}function m(R){return a?!1:R.wrapS!==In||R.wrapT!==In||R.minFilter!==Ke&&R.minFilter!==Se}function _(R,b){return R.generateMipmaps&&b&&R.minFilter!==Ke&&R.minFilter!==Se}function y(R){n.generateMipmap(R)}function v(R,b,V,j,ut=!1){if(a===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt=b;if(b===n.RED&&(V===n.FLOAT&&(pt=n.R32F),V===n.HALF_FLOAT&&(pt=n.R16F),V===n.UNSIGNED_BYTE&&(pt=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(pt=n.R8UI),V===n.UNSIGNED_SHORT&&(pt=n.R16UI),V===n.UNSIGNED_INT&&(pt=n.R32UI),V===n.BYTE&&(pt=n.R8I),V===n.SHORT&&(pt=n.R16I),V===n.INT&&(pt=n.R32I)),b===n.RG&&(V===n.FLOAT&&(pt=n.RG32F),V===n.HALF_FLOAT&&(pt=n.RG16F),V===n.UNSIGNED_BYTE&&(pt=n.RG8)),b===n.RGBA){let Rt=ut?Ra:me.getTransfer(j);V===n.FLOAT&&(pt=n.RGBA32F),V===n.HALF_FLOAT&&(pt=n.RGBA16F),V===n.UNSIGNED_BYTE&&(pt=Rt===Ee?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(pt=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(pt=n.RGB5_A1)}return(pt===n.R16F||pt===n.R32F||pt===n.RG16F||pt===n.RG32F||pt===n.RGBA16F||pt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function C(R,b,V){return _(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==Se?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){return R===Ke||R===rd||R===Qc?n.NEAREST:n.LINEAR}function S(R){let b=R.target;b.removeEventListener("dispose",S),E(b),b.isVideoTexture&&h.delete(b)}function I(R){let b=R.target;b.removeEventListener("dispose",I),U(b)}function E(R){let b=i.get(R);if(b.__webglInit===void 0)return;let V=R.source,j=d.get(V);if(j){let ut=j[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&T(R),Object.keys(j).length===0&&d.delete(V)}i.remove(R)}function T(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let V=R.source,j=d.get(V);delete j[b.__cacheKey],r.memory.textures--}function U(R){let b=R.texture,V=i.get(R),j=i.get(b);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(V.__webglFramebuffer[ut]))for(let pt=0;pt<V.__webglFramebuffer[ut].length;pt++)n.deleteFramebuffer(V.__webglFramebuffer[ut][pt]);else n.deleteFramebuffer(V.__webglFramebuffer[ut]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ut])}else{if(Array.isArray(V.__webglFramebuffer))for(let ut=0;ut<V.__webglFramebuffer.length;ut++)n.deleteFramebuffer(V.__webglFramebuffer[ut]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ut=0;ut<V.__webglColorRenderbuffer.length;ut++)V.__webglColorRenderbuffer[ut]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ut]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ut=0,pt=b.length;ut<pt;ut++){let Rt=i.get(b[ut]);Rt.__webglTexture&&(n.deleteTexture(Rt.__webglTexture),r.memory.textures--),i.remove(b[ut])}i.remove(b),i.remove(R)}let Y=0;function q(){Y=0}function P(){let R=Y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function z(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function B(R,b){let V=i.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,R,b);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function F(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){J(V,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function Z(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){J(V,R,b);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function K(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){G(V,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}let M={[qi]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},N={[Ke]:n.NEAREST,[rd]:n.NEAREST_MIPMAP_NEAREST,[Qc]:n.NEAREST_MIPMAP_LINEAR,[Se]:n.LINEAR,[Wx]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},w={[ey]:n.NEVER,[ay]:n.ALWAYS,[ny]:n.LESS,[Kf]:n.LEQUAL,[iy]:n.EQUAL,[ry]:n.GEQUAL,[sy]:n.GREATER,[oy]:n.NOTEQUAL};function k(R,b,V){if(V?(n.texParameteri(R,n.TEXTURE_WRAP_S,M[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,M[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,M[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,N[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,N[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==In||b.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==Ke&&b.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,w[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ke||b.minFilter!==Qc&&b.minFilter!==rr||b.type===Fi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===ar&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function H(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));let j=b.source,ut=d.get(j);ut===void 0&&(ut={},d.set(j,ut));let pt=z(b);if(pt!==R.__cacheKey){ut[pt]===void 0&&(ut[pt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ut[pt].usedTimes++;let Rt=ut[R.__cacheKey];Rt!==void 0&&(ut[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&T(b)),R.__cacheKey=pt,R.__webglTexture=ut[pt].texture}return V}function J(R,b,V){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);let ut=H(R,b),pt=b.source;e.bindTexture(j,R.__webglTexture,n.TEXTURE0+V);let Rt=i.get(pt);if(pt.version!==Rt.__version||ut===!0){e.activeTexture(n.TEXTURE0+V);let bt=me.getPrimaries(me.workingColorSpace),St=b.colorSpace===je?null:me.getPrimaries(b.colorSpace),Q=b.colorSpace===je||bt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let gt=m(b)&&p(b.image)===!1,at=x(b.image,gt,!1,s.maxTextureSize);at=rt(b,at);let yt=p(at)||a,Ot=o.convert(b.format,b.colorSpace),zt=o.convert(b.type),Nt=v(b.internalFormat,Ot,zt,b.colorSpace,b.isVideoTexture);k(j,b,yt);let Ut,ne=b.mipmaps,fe=a&&b.isVideoTexture!==!0&&Nt!==Yf,Pe=Rt.__version===void 0||ut===!0,re=C(b,at,yt);if(b.isDepthTexture)Nt=n.DEPTH_COMPONENT,a?b.type===Fi?Nt=n.DEPTH_COMPONENT32F:b.type===zi?Nt=n.DEPTH_COMPONENT24:b.type===ps?Nt=n.DEPTH24_STENCIL8:Nt=n.DEPTH_COMPONENT16:b.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ms&&Nt===n.DEPTH_COMPONENT&&b.type!==Sh&&b.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=zi,zt=o.convert(b.type)),b.format===co&&Nt===n.DEPTH_COMPONENT&&(Nt=n.DEPTH_STENCIL,b.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ps,zt=o.convert(b.type))),Pe&&(fe?e.texStorage2D(n.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Nt,at.width,at.height,0,Ot,zt,null));else if(b.isDataTexture)if(ne.length>0&&yt){fe&&Pe&&e.texStorage2D(n.TEXTURE_2D,re,Nt,ne[0].width,ne[0].height);for(let At=0,$=ne.length;At<$;At++)Ut=ne[At],fe?e.texSubImage2D(n.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Ot,zt,Ut.data):e.texImage2D(n.TEXTURE_2D,At,Nt,Ut.width,Ut.height,0,Ot,zt,Ut.data);b.generateMipmaps=!1}else fe?(Pe&&e.texStorage2D(n.TEXTURE_2D,re,Nt,at.width,at.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,Ot,zt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,at.width,at.height,0,Ot,zt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,re,Nt,ne[0].width,ne[0].height,at.depth);for(let At=0,$=ne.length;At<$;At++)Ut=ne[At],b.format!==Dn?Ot!==null?fe?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,at.depth,Ot,Ut.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,At,Nt,Ut.width,Ut.height,at.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage3D(n.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,at.depth,Ot,zt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,At,Nt,Ut.width,Ut.height,at.depth,0,Ot,zt,Ut.data)}else{fe&&Pe&&e.texStorage2D(n.TEXTURE_2D,re,Nt,ne[0].width,ne[0].height);for(let At=0,$=ne.length;At<$;At++)Ut=ne[At],b.format!==Dn?Ot!==null?fe?e.compressedTexSubImage2D(n.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Ot,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,At,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?e.texSubImage2D(n.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Ot,zt,Ut.data):e.texImage2D(n.TEXTURE_2D,At,Nt,Ut.width,Ut.height,0,Ot,zt,Ut.data)}else if(b.isDataArrayTexture)fe?(Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,re,Nt,at.width,at.height,at.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Ot,zt,at.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,Ot,zt,at.data);else if(b.isData3DTexture)fe?(Pe&&e.texStorage3D(n.TEXTURE_3D,re,Nt,at.width,at.height,at.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Ot,zt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,Ot,zt,at.data);else if(b.isFramebufferTexture){if(Pe)if(fe)e.texStorage2D(n.TEXTURE_2D,re,Nt,at.width,at.height);else{let At=at.width,$=at.height;for(let Pt=0;Pt<re;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Nt,At,$,0,Ot,zt,null),At>>=1,$>>=1}}else if(ne.length>0&&yt){fe&&Pe&&e.texStorage2D(n.TEXTURE_2D,re,Nt,ne[0].width,ne[0].height);for(let At=0,$=ne.length;At<$;At++)Ut=ne[At],fe?e.texSubImage2D(n.TEXTURE_2D,At,0,0,Ot,zt,Ut):e.texImage2D(n.TEXTURE_2D,At,Nt,Ot,zt,Ut);b.generateMipmaps=!1}else fe?(Pe&&e.texStorage2D(n.TEXTURE_2D,re,Nt,at.width,at.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ot,zt,at)):e.texImage2D(n.TEXTURE_2D,0,Nt,Ot,zt,at);_(b,yt)&&y(j),Rt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function G(R,b,V){if(b.image.length!==6)return;let j=H(R,b),ut=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let pt=i.get(ut);if(ut.version!==pt.__version||j===!0){e.activeTexture(n.TEXTURE0+V);let Rt=me.getPrimaries(me.workingColorSpace),bt=b.colorSpace===je?null:me.getPrimaries(b.colorSpace),St=b.colorSpace===je||Rt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Q=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,at=[];for(let At=0;At<6;At++)!Q&&!gt?at[At]=x(b.image[At],!1,!0,s.maxCubemapSize):at[At]=gt?b.image[At].image:b.image[At],at[At]=rt(b,at[At]);let yt=at[0],Ot=p(yt)||a,zt=o.convert(b.format,b.colorSpace),Nt=o.convert(b.type),Ut=v(b.internalFormat,zt,Nt,b.colorSpace),ne=a&&b.isVideoTexture!==!0,fe=pt.__version===void 0||j===!0,Pe=C(b,yt,Ot);k(n.TEXTURE_CUBE_MAP,b,Ot);let re;if(Q){ne&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ut,yt.width,yt.height);for(let At=0;At<6;At++){re=at[At].mipmaps;for(let $=0;$<re.length;$++){let Pt=re[$];b.format!==Dn?zt!==null?ne?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$,0,0,Pt.width,Pt.height,zt,Pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$,Ut,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$,0,0,Pt.width,Pt.height,zt,Nt,Pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$,Ut,Pt.width,Pt.height,0,zt,Nt,Pt.data)}}}else{re=b.mipmaps,ne&&fe&&(re.length>0&&Pe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ut,at[0].width,at[0].height));for(let At=0;At<6;At++)if(gt){ne?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,at[At].width,at[At].height,zt,Nt,at[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ut,at[At].width,at[At].height,0,zt,Nt,at[At].data);for(let $=0;$<re.length;$++){let Lt=re[$].image[At].image;ne?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$+1,0,0,Lt.width,Lt.height,zt,Nt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$+1,Ut,Lt.width,Lt.height,0,zt,Nt,Lt.data)}}else{ne?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,zt,Nt,at[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ut,zt,Nt,at[At]);for(let $=0;$<re.length;$++){let Pt=re[$];ne?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$+1,0,0,zt,Nt,Pt.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,$+1,Ut,zt,Nt,Pt.image[At])}}}_(b,Ot)&&y(n.TEXTURE_CUBE_MAP),pt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function et(R,b,V,j,ut,pt){let Rt=o.convert(V.format,V.colorSpace),bt=o.convert(V.type),St=v(V.internalFormat,Rt,bt,V.colorSpace);if(!i.get(b).__hasExternalTextures){let gt=Math.max(1,b.width>>pt),at=Math.max(1,b.height>>pt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,pt,St,gt,at,b.depth,0,Rt,bt,null):e.texImage2D(ut,pt,St,gt,at,0,Rt,bt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),X(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ut,i.get(V).__webglTexture,0,ht(b)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ut,i.get(V).__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(R,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||X(b)){let ut=b.depthTexture;ut&&ut.isDepthTexture&&(ut.type===Fi?j=n.DEPTH_COMPONENT32F:ut.type===zi&&(j=n.DEPTH_COMPONENT24));let pt=ht(b);X(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,j,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,j,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){let j=ht(b);V&&X(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,b.width,b.height):X(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ut=0;ut<j.length;ut++){let pt=j[ut],Rt=o.convert(pt.format,pt.colorSpace),bt=o.convert(pt.type),St=v(pt.internalFormat,Rt,bt,pt.colorSpace),Q=ht(b);V&&X(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,St,b.width,b.height):X(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,St,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,St,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);let j=i.get(b.depthTexture).__webglTexture,ut=ht(b);if(b.depthTexture.format===ms)X(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(b.depthTexture.format===co)X(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function lt(R){let b=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ft(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=n.createRenderbuffer(),ct(b.__webglDepthbuffer[j],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ct(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(R,b,V){let j=i.get(R);b!==void 0&&et(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&lt(R)}function O(R){let b=R.texture,V=i.get(R),j=i.get(b);R.addEventListener("dispose",I),R.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,r.memory.textures++);let ut=R.isWebGLCubeRenderTarget===!0,pt=R.isWebGLMultipleRenderTargets===!0,Rt=p(R)||a;if(ut){V.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[bt]=[];for(let St=0;St<b.mipmaps.length;St++)V.__webglFramebuffer[bt][St]=n.createFramebuffer()}else V.__webglFramebuffer[bt]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let bt=0;bt<b.mipmaps.length;bt++)V.__webglFramebuffer[bt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(pt)if(s.drawBuffers){let bt=R.texture;for(let St=0,Q=bt.length;St<Q;St++){let gt=i.get(bt[St]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&X(R)===!1){let bt=pt?b:[b];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let St=0;St<bt.length;St++){let Q=bt[St];V.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[St]);let gt=o.convert(Q.format,Q.colorSpace),at=o.convert(Q.type),yt=v(Q.internalFormat,gt,at,Q.colorSpace,R.isXRRenderTarget===!0),Ot=ht(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,yt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,V.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),k(n.TEXTURE_CUBE_MAP,b,Rt);for(let bt=0;bt<6;bt++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)et(V.__webglFramebuffer[bt][St],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,St);else et(V.__webglFramebuffer[bt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);_(b,Rt)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){let bt=R.texture;for(let St=0,Q=bt.length;St<Q;St++){let gt=bt[St],at=i.get(gt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),k(n.TEXTURE_2D,gt,Rt),et(V.__webglFramebuffer,R,gt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),_(gt,Rt)&&y(n.TEXTURE_2D)}e.unbindTexture()}else{let bt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?bt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(bt,j.__webglTexture),k(bt,b,Rt),a&&b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)et(V.__webglFramebuffer[St],R,b,n.COLOR_ATTACHMENT0,bt,St);else et(V.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,bt,0);_(b,Rt)&&y(bt),e.unbindTexture()}R.depthBuffer&&lt(R)}function mt(R){let b=p(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let j=0,ut=V.length;j<ut;j++){let pt=V[j];if(_(pt,b)){let Rt=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,bt=i.get(pt).__webglTexture;e.bindTexture(Rt,bt),y(Rt),e.unbindTexture()}}}function nt(R){if(a&&R.samples>0&&X(R)===!1){let b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,j=R.height,ut=n.COLOR_BUFFER_BIT,pt=[],Rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(R),St=R.isWebGLMultipleRenderTargets===!0;if(St)for(let Q=0;Q<b.length;Q++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Q=0;Q<b.length;Q++){pt.push(n.COLOR_ATTACHMENT0+Q),R.depthBuffer&&pt.push(Rt);let gt=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(gt===!1&&(R.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),St&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Q]),gt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Rt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Rt])),St){let at=i.get(b[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,V,j,0,0,V,j,ut,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Q=0;Q<b.length;Q++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Q]);let gt=i.get(b[Q]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function ht(R){return Math.min(s.maxSamples,R.samples)}function X(R){let b=i.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(R){let b=r.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function rt(R,b){let V=R.colorSpace,j=R.format,ut=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===zl||V!==Li&&V!==je&&(me.getTransfer(V)===Ee?a===!1?t.has("EXT_sRGB")===!0&&j===Dn?(R.format=zl,R.minFilter=Se,R.generateMipmaps=!1):b=Ia.sRGBToLinear(b):(j!==Dn||ut!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}this.allocateTextureUnit=P,this.resetTextureUnits=q,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=Et,this.setupRenderTarget=O,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=X}function hM(n,t,e){let i=e.isWebGL2;function s(o,r=je){let a,c=me.getTransfer(r);if(o===Fn)return n.UNSIGNED_BYTE;if(o===Gf)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Vf)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Xx)return n.BYTE;if(o===qx)return n.SHORT;if(o===Sh)return n.UNSIGNED_SHORT;if(o===Ff)return n.INT;if(o===zi)return n.UNSIGNED_INT;if(o===Fi)return n.FLOAT;if(o===ar)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Yx)return n.ALPHA;if(o===Dn)return n.RGBA;if(o===Zx)return n.LUMINANCE;if(o===$x)return n.LUMINANCE_ALPHA;if(o===ms)return n.DEPTH_COMPONENT;if(o===co)return n.DEPTH_STENCIL;if(o===zl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Th)return n.RED;if(o===Wf)return n.RED_INTEGER;if(o===Kx)return n.RG;if(o===Xf)return n.RG_INTEGER;if(o===qf)return n.RGBA_INTEGER;if(o===tl||o===el||o===nl||o===il)if(c===Ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===el)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===nl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===il)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ad||o===cd||o===ld||o===hd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===ad)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ld)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===hd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Yf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ud||o===dd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===ud)return c===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===dd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fd||o===pd||o===md||o===gd||o===xd||o===yd||o===_d||o===vd||o===Ed||o===Md||o===bd||o===wd||o===Sd||o===Td)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===fd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===md)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===xd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===yd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===_d)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ed)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Md)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===bd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Sd)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Td)return c===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===sl||o===Rd||o===Ad)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===sl)return c===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Rd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Ad)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Jx||o===Cd||o===Pd||o===Ld)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(o===sl)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Cd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Pd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ld)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ps?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:s}}var th=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},_t=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},uM={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},eh=class extends Yi{constructor(t,e){super();let i=this,s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),p=null,m=null,_=[],y=[],v=new wt,C=null,A=new Je;A.layers.enable(1),A.viewport=new We;let S=new Je;S.layers.enable(2),S.viewport=new We;let I=[A,S],E=new th;E.layers.enable(1),E.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let H=_[k];return H===void 0&&(H=new nr,_[k]=H),H.getTargetRaySpace()},this.getControllerGrip=function(k){let H=_[k];return H===void 0&&(H=new nr,_[k]=H),H.getGripSpace()},this.getHand=function(k){let H=_[k];return H===void 0&&(H=new nr,_[k]=H),H.getHandSpace()};function Y(k){let H=y.indexOf(k.inputSource);if(H===-1)return;let J=_[H];J!==void 0&&(J.update(k.inputSource,k.frame,l||r),J.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",P);for(let k=0;k<_.length;k++){let H=y[k];H!==null&&(y[k]=null,_[k].disconnect(H))}T=null,U=null,t.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,w.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let H={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let H=null,J=null,G=null;x.depth&&(G=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=x.stencil?co:ms,J=x.stencil?ps:zi);let et={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Qn(d.textureWidth,d.textureHeight,{format:Dn,type:Fn,depthTexture:new za(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let ct=t.properties.get(m);ct.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),w.setContext(s),w.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let H=0;H<k.removed.length;H++){let J=k.removed[H],G=y.indexOf(J);G>=0&&(y[G]=null,_[G].disconnect(J))}for(let H=0;H<k.added.length;H++){let J=k.added[H],G=y.indexOf(J);if(G===-1){for(let ct=0;ct<_.length;ct++)if(ct>=y.length){y.push(J),G=ct;break}else if(y[ct]===null){y[ct]=J,G=ct;break}if(G===-1)break}let et=_[G];et&&et.connect(J)}}let z=new D,B=new D;function F(k,H,J){z.setFromMatrixPosition(H.matrixWorld),B.setFromMatrixPosition(J.matrixWorld);let G=z.distanceTo(B),et=H.projectionMatrix.elements,ct=J.projectionMatrix.elements,ft=et[14]/(et[10]-1),lt=et[14]/(et[10]+1),Et=(et[9]+1)/et[5],O=(et[9]-1)/et[5],mt=(et[8]-1)/et[0],nt=(ct[8]+1)/ct[0],ht=ft*mt,X=ft*nt,ot=G/(-mt+nt),rt=ot*-mt;H.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(rt),k.translateZ(ot),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let R=ft+ot,b=lt+ot,V=ht-rt,j=X+(G-rt),ut=Et*lt/b*R,pt=O*lt/b*R;k.projectionMatrix.makePerspective(V,j,ut,pt,R,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Z(k,H){H===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(H.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;E.near=S.near=A.near=k.near,E.far=S.far=A.far=k.far,(T!==E.near||U!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,U=E.far);let H=k.parent,J=E.cameras;Z(E,H);for(let G=0;G<J.length;G++)Z(J[G],H);J.length===2?F(E,A,S):E.projectionMatrix.copy(A.projectionMatrix),K(k,E,H)};function K(k,H,J){J===null?k.matrix.copy(H.matrixWorld):(k.matrix.copy(J.matrixWorld),k.matrix.invert(),k.matrix.multiply(H.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(H.projectionMatrix),k.projectionMatrixInverse.copy(H.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=cr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let M=null;function N(k,H){if(h=H.getViewerPose(l||r),g=H,h!==null){let J=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let G=!1;J.length!==E.cameras.length&&(E.cameras.length=0,G=!0);for(let et=0;et<J.length;et++){let ct=J[et],ft=null;if(f!==null)ft=f.getViewport(ct);else{let Et=u.getViewSubImage(d,ct);ft=Et.viewport,et===0&&(t.setRenderTargetTextures(m,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(m))}let lt=I[et];lt===void 0&&(lt=new Je,lt.layers.enable(et),lt.viewport=new We,I[et]=lt),lt.matrix.fromArray(ct.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ct.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ft.x,ft.y,ft.width,ft.height),et===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),G===!0&&E.cameras.push(lt)}}for(let J=0;J<_.length;J++){let G=y[J],et=_[J];G!==null&&et!==void 0&&et.update(G,H,l||r)}M&&M(k,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}let w=new tp;w.setAnimationLoop(N),this.setAnimationLoop=function(k){M=k},this.dispose=function(){}}};function dM(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Qf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),u(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),x(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,_,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fM(n,t,e,i){let s={},o={},r=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){let v=y.program;i.uniformBlockBinding(_,v)}function l(_,y){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",p));let C=y.program;i.updateUBOMapping(_,C);let A=t.render.frame;o[_.id]!==A&&(d(_),o[_.id]=A)}function h(_){let y=u();_.__bindingPointIndex=y;let v=n.createBuffer(),C=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],v=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,S=v.length;A<S;A++){let I=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,T=I.length;E<T;E++){let U=I[E];if(f(U,A,E,C)===!0){let Y=U.__offset,q=Array.isArray(U.value)?U.value:[U.value],P=0;for(let z=0;z<q.length;z++){let B=q[z],F=x(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,Y+P,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,P),P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,v,C){let A=_.value,S=y+"_"+v;if(C[S]===void 0)return typeof A=="number"||typeof A=="boolean"?C[S]=A:C[S]=A.clone(),!0;{let I=C[S];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[S]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(_){let y=_.uniforms,v=0,C=16;for(let S=0,I=y.length;S<I;S++){let E=Array.isArray(y[S])?y[S]:[y[S]];for(let T=0,U=E.length;T<U;T++){let Y=E[T],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,z=q.length;P<z;P++){let B=q[P],F=x(B),Z=v%C;Z!==0&&C-Z<F.boundary&&(v+=C-Z),Y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=v,v+=F.storage}}}let A=v%C;return A>0&&(v+=C-A),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){let y=_.target;y.removeEventListener("dispose",p);let v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function m(){for(let _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}var fr=class{constructor(t={}){let{canvas:e=My(),context:i=null,depth:s=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=r;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ee,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;let y=this,v=!1,C=0,A=0,S=null,I=-1,E=null,T=new We,U=new We,Y=null,q=new Vt(0),P=0,z=e.width,B=e.height,F=1,Z=null,K=null,M=new We(0,0,z,B),N=new We(0,0,z,B),w=!1,k=new dr,H=!1,J=!1,G=null,et=new de,ct=new wt,ft=new D,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return S===null?F:1}let O=i;function mt(L,tt){for(let st=0;st<L.length;st++){let dt=L[st],it=e.getContext(dt,tt);if(it!==null)return it}return null}try{let L={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),O===null){let tt=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&tt.shift(),O=mt(tt,L),O===null)throw mt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let nt,ht,X,ot,rt,R,b,V,j,ut,pt,Rt,bt,St,Q,gt,at,yt,Ot,zt,Nt,Ut,ne,fe;function Pe(){nt=new Iv(O),ht=new Tv(O,nt,t),nt.init(ht),Ut=new hM(O,nt,ht),X=new cM(O,nt,ht),ot=new Hv(O),rt=new KE,R=new lM(O,nt,X,rt,ht,Ut,ot),b=new Av(y),V=new Lv(y),j=new Vy(O,ht),ne=new wv(O,nt,j,ht),ut=new Dv(O,j,ot,ne),pt=new Bv(O,ut,j,ot),Ot=new Ov(O,ht,R),gt=new Rv(rt),Rt=new $E(y,b,V,nt,ht,ne,gt),bt=new dM(y,rt),St=new jE,Q=new sM(nt,ht),yt=new bv(y,b,V,X,pt,d,c),at=new aM(y,pt,ht),fe=new fM(O,ot,ht,X),zt=new Sv(O,nt,ot,ht),Nt=new Uv(O,nt,ot,ht),ot.programs=Rt.programs,y.capabilities=ht,y.extensions=nt,y.properties=rt,y.renderLists=St,y.shadowMap=at,y.state=X,y.info=ot}Pe();let re=new eh(y,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let L=nt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=nt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(L){L!==void 0&&(F=L,this.setSize(z,B,!1))},this.getSize=function(L){return L.set(z,B)},this.setSize=function(L,tt,st=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,B=tt,e.width=Math.floor(L*F),e.height=Math.floor(tt*F),st===!0&&(e.style.width=L+"px",e.style.height=tt+"px"),this.setViewport(0,0,L,tt)},this.getDrawingBufferSize=function(L){return L.set(z*F,B*F).floor()},this.setDrawingBufferSize=function(L,tt,st){z=L,B=tt,F=st,e.width=Math.floor(L*st),e.height=Math.floor(tt*st),this.setViewport(0,0,L,tt)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(M)},this.setViewport=function(L,tt,st,dt){L.isVector4?M.set(L.x,L.y,L.z,L.w):M.set(L,tt,st,dt),X.viewport(T.copy(M).multiplyScalar(F).floor())},this.getScissor=function(L){return L.copy(N)},this.setScissor=function(L,tt,st,dt){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,tt,st,dt),X.scissor(U.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return w},this.setScissorTest=function(L){X.setScissorTest(w=L)},this.setOpaqueSort=function(L){Z=L},this.setTransparentSort=function(L){K=L},this.getClearColor=function(L){return L.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(L=!0,tt=!0,st=!0){let dt=0;if(L){let it=!1;if(S!==null){let Ht=S.texture.format;it=Ht===qf||Ht===Xf||Ht===Wf}if(it){let Ht=S.texture.type,Xt=Ht===Fn||Ht===zi||Ht===Sh||Ht===ps||Ht===Gf||Ht===Vf,Yt=yt.getClearColor(),$t=yt.getClearAlpha(),oe=Yt.r,Qt=Yt.g,te=Yt.b;Xt?(f[0]=oe,f[1]=Qt,f[2]=te,f[3]=$t,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=oe,g[1]=Qt,g[2]=te,g[3]=$t,O.clearBufferiv(O.COLOR,0,g))}else dt|=O.COLOR_BUFFER_BIT}tt&&(dt|=O.DEPTH_BUFFER_BIT),st&&(dt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),St.dispose(),Q.dispose(),rt.dispose(),b.dispose(),V.dispose(),pt.dispose(),ne.dispose(),fe.dispose(),Rt.dispose(),re.dispose(),re.removeEventListener("sessionstart",hn),re.removeEventListener("sessionend",ve),G&&(G.dispose(),G=null),un.stop()};function At(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let L=ot.autoReset,tt=at.enabled,st=at.autoUpdate,dt=at.needsUpdate,it=at.type;Pe(),ot.autoReset=L,at.enabled=tt,at.autoUpdate=st,at.needsUpdate=dt,at.type=it}function Pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Lt(L){let tt=L.target;tt.removeEventListener("dispose",Lt),Zt(tt)}function Zt(L){qt(L),rt.remove(L)}function qt(L){let tt=rt.get(L).programs;tt!==void 0&&(tt.forEach(function(st){Rt.releaseProgram(st)}),L.isShaderMaterial&&Rt.releaseShaderCache(L))}this.renderBufferDirect=function(L,tt,st,dt,it,Ht){tt===null&&(tt=lt);let Xt=it.isMesh&&it.matrixWorld.determinant()<0,Yt=ax(L,tt,st,dt,it);X.setMaterial(dt,Xt);let $t=st.index,oe=1;if(dt.wireframe===!0){if($t=ut.getWireframeAttribute(st),$t===void 0)return;oe=2}let Qt=st.drawRange,te=st.attributes.position,De=Qt.start*oe,Cn=(Qt.start+Qt.count)*oe;Ht!==null&&(De=Math.max(De,Ht.start*oe),Cn=Math.min(Cn,(Ht.start+Ht.count)*oe)),$t!==null?(De=Math.max(De,0),Cn=Math.min(Cn,$t.count)):te!=null&&(De=Math.max(De,0),Cn=Math.min(Cn,te.count));let Fe=Cn-De;if(Fe<0||Fe===1/0)return;ne.setup(it,dt,Yt,st,$t);let Mi,we=zt;if($t!==null&&(Mi=j.get($t),we=Nt,we.setIndex(Mi)),it.isMesh)dt.wireframe===!0?(X.setLineWidth(dt.wireframeLinewidth*Et()),we.setMode(O.LINES)):we.setMode(O.TRIANGLES);else if(it.isLine){let ae=dt.linewidth;ae===void 0&&(ae=1),X.setLineWidth(ae*Et()),it.isLineSegments?we.setMode(O.LINES):it.isLineLoop?we.setMode(O.LINE_LOOP):we.setMode(O.LINE_STRIP)}else it.isPoints?we.setMode(O.POINTS):it.isSprite&&we.setMode(O.TRIANGLES);if(it.isBatchedMesh)we.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else if(it.isInstancedMesh)we.renderInstances(De,Fe,it.count);else if(st.isInstancedBufferGeometry){let ae=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,$c=Math.min(st.instanceCount,ae);we.renderInstances(De,Fe,$c)}else we.render(De,Fe)};function ye(L,tt,st){L.transparent===!0&&L.side===he&&L.forceSinglePass===!1?(L.side=on,L.needsUpdate=!0,qr(L,tt,st),L.side=Xi,L.needsUpdate=!0,qr(L,tt,st),L.side=he):qr(L,tt,st)}this.compile=function(L,tt,st=null){st===null&&(st=L),p=Q.get(st),p.init(),_.push(p),st.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),L!==st&&L.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(p.pushLight(it),it.castShadow&&p.pushShadow(it))}),p.setupLights(y._useLegacyLights);let dt=new Set;return L.traverse(function(it){let Ht=it.material;if(Ht)if(Array.isArray(Ht))for(let Xt=0;Xt<Ht.length;Xt++){let Yt=Ht[Xt];ye(Yt,st,it),dt.add(Yt)}else ye(Ht,st,it),dt.add(Ht)}),_.pop(),p=null,dt},this.compileAsync=function(L,tt,st=null){let dt=this.compile(L,tt,st);return new Promise(it=>{function Ht(){if(dt.forEach(function(Xt){rt.get(Xt).currentProgram.isReady()&&dt.delete(Xt)}),dt.size===0){it(L);return}setTimeout(Ht,10)}nt.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let _e=null;function ze(L){_e&&_e(L)}function hn(){un.stop()}function ve(){un.start()}let un=new tp;un.setAnimationLoop(ze),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(L){_e=L,re.setAnimationLoop(L),L===null?un.stop():un.start()},re.addEventListener("sessionstart",hn),re.addEventListener("sessionend",ve),this.render=function(L,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(tt),tt=re.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,tt,S),p=Q.get(L,_.length),p.init(),_.push(p),et.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),k.setFromProjectionMatrix(et),J=this.localClippingEnabled,H=gt.init(this.clippingPlanes,J),x=St.get(L,m.length),x.init(),m.push(x),li(L,tt,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Z,K),this.info.render.frame++,H===!0&&gt.beginShadows();let st=p.state.shadowsArray;if(at.render(st,L,tt),H===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),yt.render(x,L),p.setupLights(y._useLegacyLights),tt.isArrayCamera){let dt=tt.cameras;for(let it=0,Ht=dt.length;it<Ht;it++){let Xt=dt[it];$u(x,L,Xt,Xt.viewport)}}else $u(x,L,tt);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(y,L,tt),ne.resetDefaultState(),I=-1,E=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function li(L,tt,st,dt){if(L.visible===!1)return;if(L.layers.test(tt.layers)){if(L.isGroup)st=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(tt);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||k.intersectsSprite(L)){dt&&ft.setFromMatrixPosition(L.matrixWorld).applyMatrix4(et);let Xt=pt.update(L),Yt=L.material;Yt.visible&&x.push(L,Xt,Yt,st,ft.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||k.intersectsObject(L))){let Xt=pt.update(L),Yt=L.material;if(dt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ft.copy(L.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ft.copy(Xt.boundingSphere.center)),ft.applyMatrix4(L.matrixWorld).applyMatrix4(et)),Array.isArray(Yt)){let $t=Xt.groups;for(let oe=0,Qt=$t.length;oe<Qt;oe++){let te=$t[oe],De=Yt[te.materialIndex];De&&De.visible&&x.push(L,Xt,De,st,ft.z,te)}}else Yt.visible&&x.push(L,Xt,Yt,st,ft.z,null)}}let Ht=L.children;for(let Xt=0,Yt=Ht.length;Xt<Yt;Xt++)li(Ht[Xt],tt,st,dt)}function $u(L,tt,st,dt){let it=L.opaque,Ht=L.transmissive,Xt=L.transparent;p.setupLightsView(st),H===!0&&gt.setGlobalState(y.clippingPlanes,st),Ht.length>0&&rx(it,Ht,tt,st),dt&&X.viewport(T.copy(dt)),it.length>0&&Xr(it,tt,st),Ht.length>0&&Xr(Ht,tt,st),Xt.length>0&&Xr(Xt,tt,st),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function rx(L,tt,st,dt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;let Ht=ht.isWebGL2;G===null&&(G=new Qn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?ar:Fn,minFilter:rr,samples:Ht?4:0})),y.getDrawingBufferSize(ct),Ht?G.setSize(ct.x,ct.y):G.setSize(La(ct.x),La(ct.y));let Xt=y.getRenderTarget();y.setRenderTarget(G),y.getClearColor(q),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();let Yt=y.toneMapping;y.toneMapping=Wi,Xr(L,st,dt),R.updateMultisampleRenderTarget(G),R.updateRenderTargetMipmap(G);let $t=!1;for(let oe=0,Qt=tt.length;oe<Qt;oe++){let te=tt[oe],De=te.object,Cn=te.geometry,Fe=te.material,Mi=te.group;if(Fe.side===he&&De.layers.test(dt.layers)){let we=Fe.side;Fe.side=on,Fe.needsUpdate=!0,Ku(De,st,dt,Cn,Fe,Mi),Fe.side=we,Fe.needsUpdate=!0,$t=!0}}$t===!0&&(R.updateMultisampleRenderTarget(G),R.updateRenderTargetMipmap(G)),y.setRenderTarget(Xt),y.setClearColor(q,P),y.toneMapping=Yt}function Xr(L,tt,st){let dt=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,Ht=L.length;it<Ht;it++){let Xt=L[it],Yt=Xt.object,$t=Xt.geometry,oe=dt===null?Xt.material:dt,Qt=Xt.group;Yt.layers.test(st.layers)&&Ku(Yt,tt,st,$t,oe,Qt)}}function Ku(L,tt,st,dt,it,Ht){L.onBeforeRender(y,tt,st,dt,it,Ht),L.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),it.onBeforeRender(y,tt,st,dt,L,Ht),it.transparent===!0&&it.side===he&&it.forceSinglePass===!1?(it.side=on,it.needsUpdate=!0,y.renderBufferDirect(st,tt,dt,it,L,Ht),it.side=Xi,it.needsUpdate=!0,y.renderBufferDirect(st,tt,dt,it,L,Ht),it.side=he):y.renderBufferDirect(st,tt,dt,it,L,Ht),L.onAfterRender(y,tt,st,dt,it,Ht)}function qr(L,tt,st){tt.isScene!==!0&&(tt=lt);let dt=rt.get(L),it=p.state.lights,Ht=p.state.shadowsArray,Xt=it.state.version,Yt=Rt.getParameters(L,it.state,Ht,tt,st),$t=Rt.getProgramCacheKey(Yt),oe=dt.programs;dt.environment=L.isMeshStandardMaterial?tt.environment:null,dt.fog=tt.fog,dt.envMap=(L.isMeshStandardMaterial?V:b).get(L.envMap||dt.environment),oe===void 0&&(L.addEventListener("dispose",Lt),oe=new Map,dt.programs=oe);let Qt=oe.get($t);if(Qt!==void 0){if(dt.currentProgram===Qt&&dt.lightsStateVersion===Xt)return ju(L,Yt),Qt}else Yt.uniforms=Rt.getUniforms(L),L.onBuild(st,Yt,y),L.onBeforeCompile(Yt,y),Qt=Rt.acquireProgram(Yt,$t),oe.set($t,Qt),dt.uniforms=Yt.uniforms;let te=dt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(te.clippingPlanes=gt.uniform),ju(L,Yt),dt.needsLights=lx(L),dt.lightsStateVersion=Xt,dt.needsLights&&(te.ambientLightColor.value=it.state.ambient,te.lightProbe.value=it.state.probe,te.directionalLights.value=it.state.directional,te.directionalLightShadows.value=it.state.directionalShadow,te.spotLights.value=it.state.spot,te.spotLightShadows.value=it.state.spotShadow,te.rectAreaLights.value=it.state.rectArea,te.ltc_1.value=it.state.rectAreaLTC1,te.ltc_2.value=it.state.rectAreaLTC2,te.pointLights.value=it.state.point,te.pointLightShadows.value=it.state.pointShadow,te.hemisphereLights.value=it.state.hemi,te.directionalShadowMap.value=it.state.directionalShadowMap,te.directionalShadowMatrix.value=it.state.directionalShadowMatrix,te.spotShadowMap.value=it.state.spotShadowMap,te.spotLightMatrix.value=it.state.spotLightMatrix,te.spotLightMap.value=it.state.spotLightMap,te.pointShadowMap.value=it.state.pointShadowMap,te.pointShadowMatrix.value=it.state.pointShadowMatrix),dt.currentProgram=Qt,dt.uniformsList=null,Qt}function Ju(L){if(L.uniformsList===null){let tt=L.currentProgram.getUniforms();L.uniformsList=oo.seqWithValue(tt.seq,L.uniforms)}return L.uniformsList}function ju(L,tt){let st=rt.get(L);st.outputColorSpace=tt.outputColorSpace,st.batching=tt.batching,st.instancing=tt.instancing,st.instancingColor=tt.instancingColor,st.skinning=tt.skinning,st.morphTargets=tt.morphTargets,st.morphNormals=tt.morphNormals,st.morphColors=tt.morphColors,st.morphTargetsCount=tt.morphTargetsCount,st.numClippingPlanes=tt.numClippingPlanes,st.numIntersection=tt.numClipIntersection,st.vertexAlphas=tt.vertexAlphas,st.vertexTangents=tt.vertexTangents,st.toneMapping=tt.toneMapping}function ax(L,tt,st,dt,it){tt.isScene!==!0&&(tt=lt),R.resetTextureUnits();let Ht=tt.fog,Xt=dt.isMeshStandardMaterial?tt.environment:null,Yt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Li,$t=(dt.isMeshStandardMaterial?V:b).get(dt.envMap||Xt),oe=dt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),te=!!st.morphAttributes.position,De=!!st.morphAttributes.normal,Cn=!!st.morphAttributes.color,Fe=Wi;dt.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Fe=y.toneMapping);let Mi=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,we=Mi!==void 0?Mi.length:0,ae=rt.get(dt),$c=p.state.lights;if(H===!0&&(J===!0||L!==E)){let Bn=L===E&&dt.id===I;gt.setState(dt,L,Bn)}let Le=!1;dt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==$c.state.version||ae.outputColorSpace!==Yt||it.isBatchedMesh&&ae.batching===!1||!it.isBatchedMesh&&ae.batching===!0||it.isInstancedMesh&&ae.instancing===!1||!it.isInstancedMesh&&ae.instancing===!0||it.isSkinnedMesh&&ae.skinning===!1||!it.isSkinnedMesh&&ae.skinning===!0||it.isInstancedMesh&&ae.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ae.instancingColor===!1&&it.instanceColor!==null||ae.envMap!==$t||dt.fog===!0&&ae.fog!==Ht||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==gt.numPlanes||ae.numIntersection!==gt.numIntersection)||ae.vertexAlphas!==oe||ae.vertexTangents!==Qt||ae.morphTargets!==te||ae.morphNormals!==De||ae.morphColors!==Cn||ae.toneMapping!==Fe||ht.isWebGL2===!0&&ae.morphTargetsCount!==we)&&(Le=!0):(Le=!0,ae.__version=dt.version);let ss=ae.currentProgram;Le===!0&&(ss=qr(dt,tt,it));let Qu=!1,Vo=!1,Kc=!1,en=ss.getUniforms(),os=ae.uniforms;if(X.useProgram(ss.program)&&(Qu=!0,Vo=!0,Kc=!0),dt.id!==I&&(I=dt.id,Vo=!0),Qu||E!==L){en.setValue(O,"projectionMatrix",L.projectionMatrix),en.setValue(O,"viewMatrix",L.matrixWorldInverse);let Bn=en.map.cameraPosition;Bn!==void 0&&Bn.setValue(O,ft.setFromMatrixPosition(L.matrixWorld)),ht.logarithmicDepthBuffer&&en.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&en.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,Vo=!0,Kc=!0)}if(it.isSkinnedMesh){en.setOptional(O,it,"bindMatrix"),en.setOptional(O,it,"bindMatrixInverse");let Bn=it.skeleton;Bn&&(ht.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),en.setValue(O,"boneTexture",Bn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}it.isBatchedMesh&&(en.setOptional(O,it,"batchingTexture"),en.setValue(O,"batchingTexture",it._matricesTexture,R));let Jc=st.morphAttributes;if((Jc.position!==void 0||Jc.normal!==void 0||Jc.color!==void 0&&ht.isWebGL2===!0)&&Ot.update(it,st,ss),(Vo||ae.receiveShadow!==it.receiveShadow)&&(ae.receiveShadow=it.receiveShadow,en.setValue(O,"receiveShadow",it.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(os.envMap.value=$t,os.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Vo&&(en.setValue(O,"toneMappingExposure",y.toneMappingExposure),ae.needsLights&&cx(os,Kc),Ht&&dt.fog===!0&&bt.refreshFogUniforms(os,Ht),bt.refreshMaterialUniforms(os,dt,F,B,G),oo.upload(O,Ju(ae),os,R)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(oo.upload(O,Ju(ae),os,R),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&en.setValue(O,"center",it.center),en.setValue(O,"modelViewMatrix",it.modelViewMatrix),en.setValue(O,"normalMatrix",it.normalMatrix),en.setValue(O,"modelMatrix",it.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){let Bn=dt.uniformsGroups;for(let jc=0,hx=Bn.length;jc<hx;jc++)if(ht.isWebGL2){let td=Bn[jc];fe.update(td,ss),fe.bind(td,ss)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ss}function cx(L,tt){L.ambientLightColor.needsUpdate=tt,L.lightProbe.needsUpdate=tt,L.directionalLights.needsUpdate=tt,L.directionalLightShadows.needsUpdate=tt,L.pointLights.needsUpdate=tt,L.pointLightShadows.needsUpdate=tt,L.spotLights.needsUpdate=tt,L.spotLightShadows.needsUpdate=tt,L.rectAreaLights.needsUpdate=tt,L.hemisphereLights.needsUpdate=tt}function lx(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,tt,st){rt.get(L.texture).__webglTexture=tt,rt.get(L.depthTexture).__webglTexture=st;let dt=rt.get(L);dt.__hasExternalTextures=!0,dt.__hasExternalTextures&&(dt.__autoAllocateDepthBuffer=st===void 0,dt.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,tt){let st=rt.get(L);st.__webglFramebuffer=tt,st.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(L,tt=0,st=0){S=L,C=tt,A=st;let dt=!0,it=null,Ht=!1,Xt=!1;if(L){let $t=rt.get(L);$t.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(O.FRAMEBUFFER,null),dt=!1):$t.__webglFramebuffer===void 0?R.setupRenderTarget(L):$t.__hasExternalTextures&&R.rebindTextures(L,rt.get(L.texture).__webglTexture,rt.get(L.depthTexture).__webglTexture);let oe=L.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Xt=!0);let Qt=rt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Qt[tt])?it=Qt[tt][st]:it=Qt[tt],Ht=!0):ht.isWebGL2&&L.samples>0&&R.useMultisampledRTT(L)===!1?it=rt.get(L).__webglMultisampledFramebuffer:Array.isArray(Qt)?it=Qt[st]:it=Qt,T.copy(L.viewport),U.copy(L.scissor),Y=L.scissorTest}else T.copy(M).multiplyScalar(F).floor(),U.copy(N).multiplyScalar(F).floor(),Y=w;if(X.bindFramebuffer(O.FRAMEBUFFER,it)&&ht.drawBuffers&&dt&&X.drawBuffers(L,it),X.viewport(T),X.scissor(U),X.setScissorTest(Y),Ht){let $t=rt.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+tt,$t.__webglTexture,st)}else if(Xt){let $t=rt.get(L.texture),oe=tt||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,st||0,oe)}I=-1},this.readRenderTargetPixels=function(L,tt,st,dt,it,Ht,Xt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt){X.bindFramebuffer(O.FRAMEBUFFER,Yt);try{let $t=L.texture,oe=$t.format,Qt=$t.type;if(oe!==Dn&&Ut.convert(oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let te=Qt===ar&&(nt.has("EXT_color_buffer_half_float")||ht.isWebGL2&&nt.has("EXT_color_buffer_float"));if(Qt!==Fn&&Ut.convert(Qt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===Fi&&(ht.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=L.width-dt&&st>=0&&st<=L.height-it&&O.readPixels(tt,st,dt,it,Ut.convert(oe),Ut.convert(Qt),Ht)}finally{let $t=S!==null?rt.get(S).__webglFramebuffer:null;X.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(L,tt,st=0){let dt=Math.pow(2,-st),it=Math.floor(tt.image.width*dt),Ht=Math.floor(tt.image.height*dt);R.setTexture2D(tt,0),O.copyTexSubImage2D(O.TEXTURE_2D,st,0,0,L.x,L.y,it,Ht),X.unbindTexture()},this.copyTextureToTexture=function(L,tt,st,dt=0){let it=tt.image.width,Ht=tt.image.height,Xt=Ut.convert(st.format),Yt=Ut.convert(st.type);R.setTexture2D(st,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,st.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,st.unpackAlignment),tt.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,dt,L.x,L.y,it,Ht,Xt,Yt,tt.image.data):tt.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,dt,L.x,L.y,tt.mipmaps[0].width,tt.mipmaps[0].height,Xt,tt.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,dt,L.x,L.y,Xt,Yt,tt.image),dt===0&&st.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(L,tt,st,dt,it=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ht=L.max.x-L.min.x+1,Xt=L.max.y-L.min.y+1,Yt=L.max.z-L.min.z+1,$t=Ut.convert(dt.format),oe=Ut.convert(dt.type),Qt;if(dt.isData3DTexture)R.setTexture3D(dt,0),Qt=O.TEXTURE_3D;else if(dt.isDataArrayTexture||dt.isCompressedArrayTexture)R.setTexture2DArray(dt,0),Qt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,dt.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,dt.unpackAlignment);let te=O.getParameter(O.UNPACK_ROW_LENGTH),De=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Cn=O.getParameter(O.UNPACK_SKIP_PIXELS),Fe=O.getParameter(O.UNPACK_SKIP_ROWS),Mi=O.getParameter(O.UNPACK_SKIP_IMAGES),we=st.isCompressedTexture?st.mipmaps[it]:st.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,L.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,L.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,L.min.z),st.isDataTexture||st.isData3DTexture?O.texSubImage3D(Qt,it,tt.x,tt.y,tt.z,Ht,Xt,Yt,$t,oe,we.data):st.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Qt,it,tt.x,tt.y,tt.z,Ht,Xt,Yt,$t,we.data)):O.texSubImage3D(Qt,it,tt.x,tt.y,tt.z,Ht,Xt,Yt,$t,oe,we),O.pixelStorei(O.UNPACK_ROW_LENGTH,te),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,De),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mi),it===0&&dt.generateMipmaps&&O.generateMipmap(Qt),X.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),X.unbindTexture()},this.resetState=function(){C=0,A=0,S=null,X.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Rh?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===rc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ee?gs:Zf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===gs?ee:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},nh=class extends fr{};nh.prototype.isWebGL1Renderer=!0;var Fa=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xs=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ih=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new D,Ga=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),o=pe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$i=class extends Ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ks,Zo=new D,Js=new D,js=new D,Qs=new wt,$o=new wt,rp=new de,ma=new D,Ko=new D,ga=new D,Mf=new wt,Al=new wt,bf=new wt,ys=class extends Qe{constructor(t=new $i){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ih(e,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new Ga(i,3,0,!1)),Ks.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=Ks,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-js.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let r=this.center;xa(ma.set(-.5,-.5,0),js,r,Js,s,o),xa(Ko.set(.5,-.5,0),js,r,Js,s,o),xa(ga.set(.5,.5,0),js,r,Js,s,o),Mf.set(0,0),Al.set(1,0),bf.set(1,1);let a=t.ray.intersectTriangle(ma,Ko,ga,!1,Zo);if(a===null&&(xa(Ko.set(-.5,.5,0),js,r,Js,s,o),Al.set(0,1),a=t.ray.intersectTriangle(ma,ga,Ko,!1,Zo),a===null))return;let c=t.ray.origin.distanceTo(Zo);c<t.near||c>t.far||e.push({distance:c,point:Zo.clone(),uv:fs.getInterpolation(Zo,ma,Ko,ga,Mf,Al,bf,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xa(n,t,e,i,s,o){Qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?($o.x=o*Qs.x-s*Qs.y,$o.y=s*Qs.x+o*Qs.y):$o.copy(Qs),n.copy(t),n.x+=$o.x,n.y+=$o.y,n.applyMatrix4(rp)}var Va=class extends pn{constructor(t=null,e=1,i=1,s,o,r,a,c,l=Ke,h=Ke,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=class extends Mn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},to=new de,wf=new de,ya=[],Sf=new Un,pM=new de,Jo=new W,jo=new Zi,Xa=class extends W{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,to),Sf.copy(t.boundingBox).applyMatrix4(to),this.boundingBox.union(Sf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,to),jo.copy(t.boundingSphere).applyMatrix4(to),this.boundingSphere.union(jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),t.ray.intersectsSphere(jo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,to),wf.multiplyMatrices(i,to),Jo.matrixWorld=wf,Jo.raycast(t,ya);for(let r=0,a=ya.length;r<a;r++){let c=ya[r];c.instanceId=o,c.object=this,e.push(c)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Tf=new D,Rf=new D,Af=new de,Cl=new hr,_a=new Zi,qa=class extends Qe{constructor(t=new Me,e=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)Tf.fromBufferAttribute(e,s-1),Rf.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Tf.distanceTo(Rf);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=o,t.ray.intersectsSphere(_a)===!1)return;Af.copy(s).invert(),Cl.copy(t.ray).applyMatrix4(Af);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,d=new D,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let m=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let y=m,v=_-1;y<v;y+=f){let C=g.getX(y),A=g.getX(y+1);if(l.fromBufferAttribute(p,C),h.fromBufferAttribute(p,A),Cl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let y=m,v=_-1;y<v;y+=f){if(l.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),Cl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};var fo=class extends pn{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isVideoTexture=!0,this.minFilter=r!==void 0?r:Se,this.magFilter=o!==void 0?o:Se,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var rn=class extends pn{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,o=i.length,r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);let h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new wt:new D);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new D,s=[],o=[],r=[],a=new D,c=new de;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}o[0]=new D,r[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ve(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mr=class extends Vn{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let i=e||new wt,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sh=class extends mr{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){let r=o*o,a=r*o;return n+t*o+e*r+i*a}}}var va=new D,Pl=new Lh,Ll=new Lh,Il=new Lh,gr=class extends Vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(va.subVectors(s[0],s[1]).add(s[0]),l=va);let u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(va.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Pl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),Ll.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),Il.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ll.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Il.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Pl.calc(c),Ll.calc(c),Il.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cf(n,t,e,i,s){let o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function mM(n,t){let e=1-n;return e*e*t}function gM(n,t){return 2*(1-n)*n*t}function xM(n,t){return n*n*t}function ir(n,t,e,i){return mM(n,t)+gM(n,e)+xM(n,i)}function yM(n,t){let e=1-n;return e*e*e*t}function _M(n,t){let e=1-n;return 3*e*e*n*t}function vM(n,t){return 3*(1-n)*n*n*t}function EM(n,t){return n*n*n*t}function sr(n,t,e,i,s){return yM(n,t)+_M(n,e)+vM(n,i)+EM(n,s)}var Ya=class extends Vn{constructor(t=new wt,e=new wt,i=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new wt){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(sr(t,s.x,o.x,r.x,a.x),sr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oh=class extends Vn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(sr(t,s.x,o.x,r.x,a.x),sr(t,s.y,o.y,r.y,a.y),sr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends Vn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rh=class extends Vn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends Vn{constructor(t=new wt,e=new wt,i=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new wt){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ir(t,s.x,o.x,r.x),ir(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Vn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ir(t,s.x,o.x,r.x),ir(t,s.y,o.y,r.y),ir(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Cf(a,c.x,l.x,h.x,u.x),Cf(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},Ja=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:gr,CubicBezierCurve:Ya,CubicBezierCurve3:oh,EllipseCurve:mr,LineCurve:Za,LineCurve3:rh,QuadraticBezierCurve:$a,QuadraticBezierCurve3:po,SplineCurve:Ka}),ah=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ja[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=i){let r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ja[s.type]().fromJSON(s))}return this}},xr=class extends ah{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Za(this.currentPoint.clone(),new wt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let o=new $a(this.currentPoint.clone(),new wt(t,e),new wt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){let a=new Ya(this.currentPoint.clone(),new wt(t,e),new wt(i,s),new wt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ka(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){let l=new mr(t,e,i,s,o,r,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ch=class n extends Me{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);let o=[],r=[],a=[],c=[],l=[],h=1/e,u=new D,d=new wt,f=new D,g=new D,x=new D,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){let y=i+_*h*s,v=Math.sin(y),C=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*C,r.push(u.x,u.y,u.z),d.x=_/e,d.y=A/(t.length-1),a.push(d.x,d.y);let S=c[3*A+0]*v,I=c[3*A+1],E=c[3*A+0]*C;l.push(S,I,E)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,C=v,A=v+t.length,S=v+t.length+1,I=v+1;o.push(C,A,I),o.push(S,I,A)}this.setIndex(o),this.setAttribute("position",new jt(r,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},mo=class n extends ch{constructor(t=1,e=1,i=4,s=8){let o=new xr;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},ja=class n extends Me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],c=[],l=new D,h=new wt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mt=class n extends Me{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),o=Math.floor(o);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function _(){let v=new D,C=new D,A=0,S=(e-t)/i;for(let I=0;I<=o;I++){let E=[],T=I/o,U=T*(e-t)+t;for(let Y=0;Y<=s;Y++){let q=Y/s,P=q*c+a,z=Math.sin(P),B=Math.cos(P);C.x=U*z,C.y=-T*i+p,C.z=U*B,u.push(C.x,C.y,C.z),v.set(z,S,B).normalize(),d.push(v.x,v.y,v.z),f.push(q,1-T),E.push(g++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<o;E++){let T=x[E][I],U=x[E+1][I],Y=x[E+1][I+1],q=x[E][I+1];h.push(T,U,q),h.push(U,Y,q),A+=6}l.addGroup(m,A,0),m+=A}function y(v){let C=g,A=new wt,S=new D,I=0,E=v===!0?t:e,T=v===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,p*T,0),d.push(0,T,0),f.push(.5,.5),g++;let U=g;for(let Y=0;Y<=s;Y++){let P=Y/s*c+a,z=Math.cos(P),B=Math.sin(P);S.x=E*B,S.y=p*T,S.z=E*z,u.push(S.x,S.y,S.z),d.push(0,T,0),A.x=z*.5+.5,A.y=B*.5*T+.5,f.push(A.x,A.y),g++}for(let Y=0;Y<s;Y++){let q=C+Y,P=U+Y;v===!0?h.push(P,P+1,q):h.push(P+1,P,q),I+=3}l.addGroup(m,I,v===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},He=class n extends Mt{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _s=class extends xr{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}},MM={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,o=ap(n,0,s,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(i&&(o=RM(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return yr(o,r,e,a,c,f,0),r}};function ap(n,t,e,i,s){let o,r;if(s===OM(n,t,e,i)>0)for(o=t;o<e;o+=i)r=Pf(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=Pf(o,n[o],n[o+1],r);return r&&cc(r,r.next)&&(vr(r),r=r.next),r}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(cc(e,e.next)||Te(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&IM(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?wM(n,i,s,o):bM(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),vr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=SM(vs(n),t,e),yr(n,t,e,i,s,o,2)):r===2&&TM(n,t,e,i,s,o):yr(vs(n),t,e,i,s,o,1);break}}}function bM(n){let t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;let s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&io(s,a,o,c,r,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wM(n,t,e,i){let s=n.prev,o=n,r=n.next;if(Te(s,o,r)>=0)return!1;let a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=lh(f,g,t,e,i),_=lh(x,p,t,e,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=m&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==r&&io(a,h,c,u,l,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&io(a,h,c,u,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==r&&io(a,h,c,u,l,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&io(a,h,c,u,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function SM(n,t,e){let i=n;do{let s=i.prev,o=i.next.next;!cc(s,o)&&cp(s,i,i.next,o)&&_r(s,o)&&_r(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),vr(i),vr(i.next),i=n=o),i=i.next}while(i!==n);return vs(i)}function TM(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&HM(r,a)){let c=lp(r,a);r=vs(r,r.next),c=vs(c,c.next),yr(r,t,e,i,s,o,0),yr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function RM(n,t,e,i){let s=[],o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=ap(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(UM(l));for(s.sort(AM),o=0;o<s.length;o++)e=CM(s[o],e);return e}function AM(n,t){return n.x-t.x}function CM(n,t){let e=PM(n,t);if(!e)return t;let i=lp(e,n);return vs(i,i.next),vs(e,e.next)}function PM(n,t){let e=t,i=-1/0,s,o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&io(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),_r(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&LM(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function LM(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function IM(n,t,e,i){let s=n;do s.z===0&&(s.z=lh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,DM(s)}function DM(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function lh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function UM(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function io(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function HM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!NM(n,t)&&(_r(n,t)&&_r(t,n)&&kM(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||cc(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function cc(n,t){return n.x===t.x&&n.y===t.y}function cp(n,t,e,i){let s=Ma(Te(n,t,e)),o=Ma(Te(n,t,i)),r=Ma(Te(e,i,n)),a=Ma(Te(e,i,t));return!!(s!==o&&r!==a||s===0&&Ea(n,e,t)||o===0&&Ea(n,i,t)||r===0&&Ea(e,n,i)||a===0&&Ea(e,t,i))}function Ea(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ma(n){return n>0?1:n<0?-1:0}function NM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&cp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _r(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function kM(n,t){let e=n,i=!1,s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function lp(n,t){let e=new hh(n.i,n.x,n.y),i=new hh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Pf(n,t,e,i){let s=new hh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function hh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OM(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}var or=class n{static area(t){let e=t.length,i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],o=[];Lf(t),If(i,t);let r=t.length;e.forEach(Lf);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,If(i,e[c]);let a=MM.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function Lf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function If(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var go=class n extends Me{constructor(t=new _s([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];r(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(o,2)),this.computeVertexNormals();function r(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:BM,y,v=!1,C,A,S,I;m&&(y=m.getSpacedPoints(h),v=!0,d=!1,C=m.computeFrenetFrames(h,!1),A=new D,S=new D,I=new D),d||(p=0,f=0,g=0,x=0);let E=a.extractPoints(l),T=E.shape,U=E.holes;if(!or.isClockWise(T)){T=T.reverse();for(let O=0,mt=U.length;O<mt;O++){let nt=U[O];or.isClockWise(nt)&&(U[O]=nt.reverse())}}let q=or.triangulateShape(T,U),P=T;for(let O=0,mt=U.length;O<mt;O++){let nt=U[O];T=T.concat(nt)}function z(O,mt,nt){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(mt,nt)}let B=T.length,F=q.length;function Z(O,mt,nt){let ht,X,ot,rt=O.x-mt.x,R=O.y-mt.y,b=nt.x-O.x,V=nt.y-O.y,j=rt*rt+R*R,ut=rt*V-R*b;if(Math.abs(ut)>Number.EPSILON){let pt=Math.sqrt(j),Rt=Math.sqrt(b*b+V*V),bt=mt.x-R/pt,St=mt.y+rt/pt,Q=nt.x-V/Rt,gt=nt.y+b/Rt,at=((Q-bt)*V-(gt-St)*b)/(rt*V-R*b);ht=bt+rt*at-O.x,X=St+R*at-O.y;let yt=ht*ht+X*X;if(yt<=2)return new wt(ht,X);ot=Math.sqrt(yt/2)}else{let pt=!1;rt>Number.EPSILON?b>Number.EPSILON&&(pt=!0):rt<-Number.EPSILON?b<-Number.EPSILON&&(pt=!0):Math.sign(R)===Math.sign(V)&&(pt=!0),pt?(ht=-R,X=rt,ot=Math.sqrt(j)):(ht=rt,X=R,ot=Math.sqrt(j/2))}return new wt(ht/ot,X/ot)}let K=[];for(let O=0,mt=P.length,nt=mt-1,ht=O+1;O<mt;O++,nt++,ht++)nt===mt&&(nt=0),ht===mt&&(ht=0),K[O]=Z(P[O],P[nt],P[ht]);let M=[],N,w=K.concat();for(let O=0,mt=U.length;O<mt;O++){let nt=U[O];N=[];for(let ht=0,X=nt.length,ot=X-1,rt=ht+1;ht<X;ht++,ot++,rt++)ot===X&&(ot=0),rt===X&&(rt=0),N[ht]=Z(nt[ht],nt[ot],nt[rt]);M.push(N),w=w.concat(N)}for(let O=0;O<p;O++){let mt=O/p,nt=f*Math.cos(mt*Math.PI/2),ht=g*Math.sin(mt*Math.PI/2)+x;for(let X=0,ot=P.length;X<ot;X++){let rt=z(P[X],K[X],ht);et(rt.x,rt.y,-nt)}for(let X=0,ot=U.length;X<ot;X++){let rt=U[X];N=M[X];for(let R=0,b=rt.length;R<b;R++){let V=z(rt[R],N[R],ht);et(V.x,V.y,-nt)}}}let k=g+x;for(let O=0;O<B;O++){let mt=d?z(T[O],w[O],k):T[O];v?(S.copy(C.normals[0]).multiplyScalar(mt.x),A.copy(C.binormals[0]).multiplyScalar(mt.y),I.copy(y[0]).add(S).add(A),et(I.x,I.y,I.z)):et(mt.x,mt.y,0)}for(let O=1;O<=h;O++)for(let mt=0;mt<B;mt++){let nt=d?z(T[mt],w[mt],k):T[mt];v?(S.copy(C.normals[O]).multiplyScalar(nt.x),A.copy(C.binormals[O]).multiplyScalar(nt.y),I.copy(y[O]).add(S).add(A),et(I.x,I.y,I.z)):et(nt.x,nt.y,u/h*O)}for(let O=p-1;O>=0;O--){let mt=O/p,nt=f*Math.cos(mt*Math.PI/2),ht=g*Math.sin(mt*Math.PI/2)+x;for(let X=0,ot=P.length;X<ot;X++){let rt=z(P[X],K[X],ht);et(rt.x,rt.y,u+nt)}for(let X=0,ot=U.length;X<ot;X++){let rt=U[X];N=M[X];for(let R=0,b=rt.length;R<b;R++){let V=z(rt[R],N[R],ht);v?et(V.x,V.y+y[h-1].y,y[h-1].x+nt):et(V.x,V.y,u+nt)}}}H(),J();function H(){let O=s.length/3;if(d){let mt=0,nt=B*mt;for(let ht=0;ht<F;ht++){let X=q[ht];ct(X[2]+nt,X[1]+nt,X[0]+nt)}mt=h+p*2,nt=B*mt;for(let ht=0;ht<F;ht++){let X=q[ht];ct(X[0]+nt,X[1]+nt,X[2]+nt)}}else{for(let mt=0;mt<F;mt++){let nt=q[mt];ct(nt[2],nt[1],nt[0])}for(let mt=0;mt<F;mt++){let nt=q[mt];ct(nt[0]+B*h,nt[1]+B*h,nt[2]+B*h)}}i.addGroup(O,s.length/3-O,0)}function J(){let O=s.length/3,mt=0;G(P,mt),mt+=P.length;for(let nt=0,ht=U.length;nt<ht;nt++){let X=U[nt];G(X,mt),mt+=X.length}i.addGroup(O,s.length/3-O,1)}function G(O,mt){let nt=O.length;for(;--nt>=0;){let ht=nt,X=nt-1;X<0&&(X=O.length-1);for(let ot=0,rt=h+p*2;ot<rt;ot++){let R=B*ot,b=B*(ot+1),V=mt+ht+R,j=mt+X+R,ut=mt+X+b,pt=mt+ht+b;ft(V,j,ut,pt)}}}function et(O,mt,nt){c.push(O),c.push(mt),c.push(nt)}function ct(O,mt,nt){lt(O),lt(mt),lt(nt);let ht=s.length/3,X=_.generateTopUV(i,s,ht-3,ht-2,ht-1);Et(X[0]),Et(X[1]),Et(X[2])}function ft(O,mt,nt,ht){lt(O),lt(mt),lt(ht),lt(mt),lt(nt),lt(ht);let X=s.length/3,ot=_.generateSideWallUV(i,s,X-6,X-3,X-2,X-1);Et(ot[0]),Et(ot[1]),Et(ot[3]),Et(ot[1]),Et(ot[2]),Et(ot[3])}function lt(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function Et(O){o.push(O.x),o.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return zM(e,i,t)}static fromJSON(t,e){let i=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ja[s.type]().fromJSON(s)),new n(i,t.options)}},BM={generateTopUV:function(n,t,e,i,s){let o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new wt(o,r),new wt(a,c),new wt(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){let r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new wt(r,1-c),new wt(l,1-u),new wt(d,1-g),new wt(x,1-m)]:[new wt(a,1-c),new wt(h,1-u),new wt(f,1-g),new wt(p,1-m)]}};function zM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qa=class n extends Me{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new D,g=new wt;for(let x=0;x<=s;x++){for(let p=0;p<=i;p++){let m=o+p/i*r;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let p=x*(i+1);for(let m=0;m<i;m++){let _=m+p,y=_,v=_+i+1,C=_+i+2,A=_+1;a.push(y,v,A),a.push(v,C,A)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Kt=class n extends Me{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(r+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let _=[],y=m/i,v=0;m===0&&r===0?v=.5/e:m===i&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let A=C/e;u.x=-t*Math.cos(s+A*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(s+A*o)*Math.sin(r+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(A+v,1-y),_.push(l++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let y=h[m][_+1],v=h[m][_],C=h[m+1][_],A=h[m+1][_+1];(m!==0||r>0)&&f.push(y,v,A),(m!==i-1||c<Math.PI)&&f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mn=class n extends Me{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);let r=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*o,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,_=(s+1)*f+g;r.push(x,p,_),r.push(p,m,_)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xo=class n extends Me{constructor(t=new po(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new D,c=new D,l=new wt,h=new D,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function x(){for(let y=0;y<e;y++)p(y);p(o===!1?e:0),_(),m()}function p(y){h=t.getPointAt(y/e,h);let v=r.normals[y],C=r.binormals[y];for(let A=0;A<=s;A++){let S=A/s*Math.PI*2,I=Math.sin(S),E=-Math.cos(S);c.x=E*v.x+I*C.x,c.y=E*v.y+I*C.y,c.z=E*v.z+I*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){let C=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),S=(s+1)*y+v,I=(s+1)*(y-1)+v;g.push(C,A,I),g.push(A,S,I)}}function _(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ja[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Bt=class extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ba(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function FM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var yo=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=o,o=e[--i-1],t>=o)break t}r=i,i=0;break e}break n}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=i[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends yo{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Id,endingEnd:Id}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],c=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Dd:o=t,a=2*e-i;break;case Ud:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dd:r=t,c=2*i-e;break;case Ud:r=1,c=i+s[1]-s[0];break;default:r=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,_=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let C=0;C!==a;++C)o[C]=m*r[h+C]+_*r[l+C]+y*r[c+C]+v*r[u+C];return o}},dh=class extends yo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)o[d]=r[l+d]*u+r[c+d]*h;return o}},fh=class extends yo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sa:e=this.InterpolantFactoryMethodDiscrete;break;case Ta:e=this.InterpolantFactoryMethodLinear;break;case ol:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,o=0,r=s-1;for(;o!==s&&i[o]<t;)++o;for(;r!==-1&&i[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=i.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(s!==void 0&&FM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let u=a*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Ta;var Es=class extends ti{};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Sa;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends ti{};ph.prototype.ValueTypeName="color";var mh=class extends ti{};mh.prototype.ValueTypeName="number";var gh=class extends yo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ie.slerpFlat(o,0,r,l-a,r,l,c);return o}},Er=class extends ti{InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.DefaultInterpolation=Ta;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ti{};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Sa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends ti{};xh.prototype.ValueTypeName="vector";var Df={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},yh=class{constructor(t,e,i){let s=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},GM=new yh,Mr=class{constructor(t){this.manager=t!==void 0?t:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";var _h=class extends Mr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,r=Df.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;let a=lr("img");function c(){h(),Df.add(t,this),e&&e(this),o.manager.itemEnd(t)}function l(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}};var _o=class extends Mr{constructor(t){super(t)}load(t,e,i,s){let o=new pn,r=new _h(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},i,s),o}},tc=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ec=class extends tc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Dl=new de,Uf=new D,Hf=new D,vh=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uf),Hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hf),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Eh=class extends vh{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nc=class extends tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ic=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Nf(){return(typeof performance>"u"?Date:performance).now()}var Ih="\\[\\]\\.:\\/",VM=new RegExp("["+Ih+"]","g"),Dh="[^"+Ih+"]",WM="[^"+Ih.replace("\\.","")+"]",XM=/((?:WC+[\/:])*)/.source.replace("WC",Dh),qM=/(WCOD+)?/.source.replace("WCOD",WM),YM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),ZM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),$M=new RegExp("^"+XM+qM+YM+ZM+"$"),KM=["material","materials","bones","map"],Mh=class{constructor(t,e,i){let s=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VM,"")}static parseTrackName(t){let e=$M.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);KM.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Mh;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dR=new Float32Array(1);var sc=class{constructor(t,e,i=0,s=1/0){this.ray=new hr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return bh(t,this,i,e),i.sort(kf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)bh(t[s],this,i,e);return i.sort(kf),i}};function kf(n,t){return n.distance-t.distance}function bh(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let o=0,r=s.length;o<r;o++)bh(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var hp="#0b1210";function up(){document.documentElement.style.height="100vh",document.body.style.height="100vh",document.documentElement.style.background=hp,document.body.style.background=hp,document.body.style.margin="0",document.body.style.overflow="hidden",document.body.style.touchAction="none",document.body.style.userSelect="none",document.body.style.webkitUserSelect="none"}function dp(){let n=document.createElement("div");n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;pointer-events:none;visibility:hidden;top:0;left:0;right:0;bottom:0;padding-top:env(safe-area-inset-top);padding-right:env(safe-area-inset-right);padding-bottom:env(safe-area-inset-bottom);padding-left:env(safe-area-inset-left);",document.body.appendChild(n);let t=()=>{let i=getComputedStyle(n);return{top:parseFloat(i.paddingTop)||0,right:parseFloat(i.paddingRight)||0,bottom:parseFloat(i.paddingBottom)||0,left:parseFloat(i.paddingLeft)||0}},e=()=>{t(),setTimeout(t,100),setTimeout(t,500),setTimeout(t,1e3)};return e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",()=>setTimeout(e,300)),{read:t,el:n}}function fp(n,t){let e=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,window.innerWidth),s=Math.max(1,window.innerHeight);return t.style.width=`${i}px`,t.style.height=`${s}px`,n.setPixelRatio(e),n.setSize(i,s,!1),{w:i,h:s,dpr:e}}function pp(){let t=e=>{if(e.touches.length!==1)return;let i=e.touches[0].clientX;(i<24||i>window.innerWidth-24)&&e.preventDefault()};document.addEventListener("touchstart",t,{passive:!1})}var mp="#0b1210",lc=class{constructor(t){this.onStart=t.onStart,this.root=document.createElement("div"),this.root.id="poster-root",this.root.setAttribute("role","button"),this.root.setAttribute("aria-label","Play AUS101"),this.root.tabIndex=0,Object.assign(this.root.style,{position:"fixed",inset:"0",zIndex:"20",background:mp,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",opacity:"1",transition:"opacity 400ms ease",touchAction:"none",userSelect:"none",webkitUserSelect:"none"}),this.img=document.createElement("img"),this.img.src="assets/poster/og.webp",this.img.alt="AUS101",this.img.decoding="async",this.img.fetchPriority="high",Object.assign(this.img.style,{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",background:mp,pointerEvents:"none"}),this.logo=document.createElement("div"),this.logo.textContent="AUS101",Object.assign(this.logo.style,{position:"absolute",top:"max(4%, env(safe-area-inset-top, 0px))",left:"10%",right:"10%",textAlign:"center",fontFamily:'Impact, "Arial Black", Haettenschweiler, sans-serif',fontSize:"clamp(48px, 18vw, 140px)",lineHeight:"0.95",letterSpacing:"0.04em",color:"#f4f7fb",textShadow:"0 2px 0 #0b1210, 0 0 24px rgba(0,0,0,0.55)",pointerEvents:"none",zIndex:"2"}),this.tag=document.createElement("div"),this.tag.textContent="TERMINATE UV",Object.assign(this.tag.style,{position:"absolute",top:"calc(max(4%, env(safe-area-inset-top, 0px)) + clamp(52px, 19vw, 150px))",left:"10%",right:"10%",textAlign:"center",fontFamily:'Impact, "Arial Black", Haettenschweiler, sans-serif',fontSize:"clamp(16px, 4.5vw, 36px)",letterSpacing:"0.18em",color:"#ffb040",textShadow:"0 1px 0 #0b1210",pointerEvents:"none",zIndex:"2"}),this.play=document.createElement("div"),this.play.setAttribute("aria-hidden","true"),Object.assign(this.play.style,{position:"absolute",left:"50%",top:"72%",width:"0",height:"0",transform:"translate(-30%, -50%)",borderStyle:"solid",borderWidth:"clamp(28px, 8vw, 56px) 0 clamp(28px, 8vw, 56px) clamp(48px, 14vw, 96px)",borderColor:"transparent transparent transparent rgba(255,255,255,0.45)",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.45))",pointerEvents:"none",zIndex:"3"}),this.root.append(this.img,this.logo,this.tag,this.play),document.body.appendChild(this.root),this._started=!1,this._onPointer=e=>{e.preventDefault(),this.start()},this._onKey=e=>{(e.code==="Enter"||e.code==="Space")&&(e.preventDefault(),this.start())},this.root.addEventListener("pointerdown",this._onPointer,{passive:!1}),this.root.addEventListener("keydown",this._onKey)}get visible(){return this.root.style.display!=="none"&&this.root.style.opacity!=="0"}start(){this._started||(this._started=!0,this.root.style.opacity="0",this.root.style.pointerEvents="none",window.setTimeout(()=>{this.root.style.display="none"},420),this.onStart())}showAsPause(){this._started=!1,this.root.style.display="flex",requestAnimationFrame(()=>{this.root.style.opacity="1",this.root.style.pointerEvents="auto"})}};var gp=[{src:"assets/media/cutscene/intro_divas_strut.jpg",hold:3200},{src:"assets/media/cutscene/intro_divas_brief.jpg",hold:3e3},{src:"assets/media/cutscene/intro_divas_catwalk.jpg",hold:3e3},{src:"assets/media/cutscene/s1_bunker_bay.jpg",hold:2e3},{src:"assets/media/cutscene/s4_i_can_use_them.jpg",hold:2400},{src:"assets/media/cutscene/s5_psa_apply.jpg",hold:2200}],hc=class{constructor({onDone:t}){this.onDone=t,this.root=document.createElement("div"),Object.assign(this.root.style,{position:"fixed",inset:"0",zIndex:"25",background:"#0b1210",display:"none",alignItems:"center",justifyContent:"center"}),this.img=document.createElement("img"),Object.assign(this.img.style,{width:"100%",height:"100%",objectFit:"cover"}),this.root.appendChild(this.img),document.body.appendChild(this.root),this._i=0,this._timer=0,this._stills=gp,this._done=!1,this._armed=0,this.root.addEventListener("pointerdown",e=>{e.stopPropagation(),!(performance.now()<this._armed)&&(this._i+=1,this.show())})}get playing(){return this.root.style.display==="flex"}start(t){this._stills=t&&t.length?t:gp,this._i=0,this._done=!1,this._armed=performance.now()+450,this.root.style.display="flex",this.show()}show(){let t=this._stills[this._i];if(!t){this.finish();return}this.img.onerror=()=>{this._i+=1,this.show()},this.img.src=t.src,clearTimeout(this._timer),this._timer=setTimeout(()=>{this._i+=1,this.show()},t.hold)}finish(){this._done||(this._done=!0,clearTimeout(this._timer),this.root.style.display="none",this.onDone?.())}};var uc=class{constructor(){this.manifest=null,this.byId=new Map,this.ctx=null,this.lru=new Map,this.maxLru=16,this.gain=null,this.busy=!1,this.gen=0}async loadManifest(){let t=await fetch("assets/voice/manifest.json");this.manifest=await t.json(),this.byId.clear();for(let e of this.manifest.lines||[])this.byId.set(e.id,e);return this.manifest}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.gain.value=.5,this.gain.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx}async decode(t){if(this.lru.has(t)){let r=this.lru.get(t);return this.lru.delete(t),this.lru.set(t,r),r}let e=this.byId.get(t);if(!e)throw new Error(`Unknown VO id: ${t}`);let s=await(await fetch(`assets/voice/${e.file}`)).arrayBuffer(),o=await this.ctx.decodeAudioData(s.slice(0));for(this.lru.set(t,o);this.lru.size>this.maxLru;){let r=this.lru.keys().next().value;this.lru.delete(r)}return o}async preload(t){await this.unlock();for(let e of t)try{await this.decode(e)}catch{}}play(t,{when:e=0,gain:i=1}={}){let s={src:null,g:null,duration:0,started:!1,setGain(r){this.g&&this.g.context&&this.g.gain.setTargetAtTime(r,this.g.context.currentTime,.04)},fadeOut(r=.08){if(!this.g)return;let a=this.g.context.currentTime;this.g.gain.cancelScheduledValues(a),this.g.gain.setValueAtTime(Math.max(this.g.gain.value,1e-4),a),this.g.gain.linearRampToValueAtTime(1e-4,a+r);try{this.src?.stop(a+r+.02)}catch{}},stop(){try{this.src?.stop()}catch{}}};if(this.busy)return s.ready=Promise.resolve(!1),s;this.busy=!0;let o=++this.gen;return s.ready=this.unlock().then(()=>this.decode(t)).then(r=>{if(o!==this.gen)return!1;let a=this.ctx.createBufferSource();a.buffer=r;let c=this.ctx.createGain();return c.gain.value=i,a.connect(c),c.connect(this.gain),a.start(this.ctx.currentTime+e),s.src=a,s.g=c,s.duration=r.duration*1e3,s.started=!0,a.onended=()=>{s.onended&&s.onended()},!0}).catch(()=>!1).finally(()=>{this.busy=!1}),s}};var pi="assets/sfx/foley",br={squeeze:[`${pi}/lotion_squeeze.mp3`,`${pi}/lotion_squeeze_02.mp3`],cap:[`${pi}/lotion_cap.mp3`],slap:[`${pi}/lotion_slap.mp3`,`${pi}/lotion_slap_02.mp3`],lather:[`${pi}/lotion_lather.mp3`,`${pi}/lotion_lather_02.mp3`],spread:[`${pi}/lotion_spread.mp3`,`${pi}/lotion_spread_02.mp3`],wet:[`${pi}/lotion_wet.mp3`]},dc=class{constructor(){this.ctx=null,this.master=null,this.cache=new Map,this._i=0}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.master.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx}async decode(t){if(this.cache.has(t))return this.cache.get(t);let i=await(await fetch(t)).arrayBuffer(),s=await this.ctx.decodeAudioData(i.slice(0));return this.cache.set(t,s),s}pick(t){return this._i=(this._i+1)%997,t[this._i%t.length]}async play(t,{gain:e=1,rate:i=1,when:s=0}={}){await this.unlock();let o=Array.isArray(t)?this.pick(t):t,r=await this.decode(o),a=this.ctx.createBufferSource();a.buffer=r,a.playbackRate.value=i;let c=this.ctx.createGain();return c.gain.value=e,a.connect(c),c.connect(this.master),a.start(this.ctx.currentTime+s),a}squeeze(){return this.play(br.squeeze,{gain:.7,rate:1.18})}slap(){return this.play(br.slap,{gain:.9,rate:.95+Math.random()*.12})}lather(){return this.play(br.lather,{gain:.75,rate:.9+Math.random()*.2})}spread(){return this.play(br.spread,{gain:.65,rate:.85+Math.random()*.3})}wet(){return this.play(br.wet,{gain:.35,rate:1.1})}};function xp(n,t){let e=!1,i=!1,s=0,o=0;return addEventListener("keydown",r=>{r.code==="Space"&&(e||(e=!0,i=!1,n.squeeze().catch(()=>{}),setTimeout(()=>{e&&(i=!0,n.slap().catch(()=>{}),n.lather().catch(()=>{}))},180)))}),addEventListener("keyup",r=>{r.code==="Space"&&(e=!1)}),{tick(r,a){!e||!i||(r-o>420&&(o=r,n.lather().catch(()=>{})),a&&r-s>160&&(s=r,n.spread().catch(()=>{})))}}}var bs={menu:[.22,.16,0,.3,380],boardwalk:[.55,.2,.32,.42,640],apply:[.28,.12,.16,.36,980]},ws=n=>440*2**((n-69)/12);function Ss(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function bn(n,t){let e=n.createGain();return e.gain.value=t,e}function fc(n,t,e,i){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,i!=null&&(s.Q.value=i),s}function Ki(n,t,e,i){n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(t,i+e)}function JM(n,t,e){let i=bn(n,.6);t.connect(i),i.connect(e);let s=Ss(n,"sine",.6),o=bn(n,.002);s.connect(o);let r=n.createChannelMerger(2);for(let a=0;a<2;a++){let c=n.createDelay(.03);c.delayTime.value=.01;let l=bn(n,.4),h=bn(n,a?-1:1);t.connect(c),c.connect(l),l.connect(r,0,a),o.connect(h),h.connect(c.delayTime)}return r.connect(e),s}function yp(n,t){let e=bn(n,0);e.connect(t||n.destination);let i=bn(n,bs.menu[0]),s=bn(n,bs.menu[1]),o=bn(n,0),r=bn(n,0);i.connect(e),s.connect(e),o.connect(e),r.connect(e);let a=Ss(n,"sawtooth",ws(26)),c=Ss(n,"square",ws(26));a.detune.value=3,c.detune.value=-4;let l=bn(n,.4),h=bn(n,1e-4),u=fc(n,"lowpass",bs.menu[4],2.2);a.connect(h),c.connect(l).connect(h),h.connect(u).connect(i);let d=Ss(n,"sawtooth",ws(50)),f=Ss(n,"sawtooth",ws(57));d.detune.value=3,f.detune.value=-3;let g=bn(n,.08),x=fc(n,"lowpass",720,.7),p=bn(n,1);x.connect(p),d.connect(g),f.connect(g),g.connect(x);let m=JM(n,p,s),_=Ss(n,"sawtooth",ws(74)),y=Ss(n,"sawtooth",ws(81));_.detune.value=5;let v=fc(n,"highpass",400,.5);_.connect(v),y.connect(v).connect(r);let C=n.sampleRate*.05|0,A=n.createBuffer(1,C,n.sampleRate),S=A.getChannelData(0);for(let M=0;M<C;M++)S[M]=Math.random()*2-1;let I="menu",E=!1,T=!1,U=0,Y=0,q=0,P=[a,c,d,f,m,_,y];function z(M,N){let w=n.createBufferSource();w.buffer=A;let k=fc(n,"bandpass",N?130:2350,N?3.5:9),H=bn(n,1e-4);H.gain.setValueAtTime(1e-4,M),H.gain.exponentialRampToValueAtTime(N?.4:.26,M+.004),H.gain.exponentialRampToValueAtTime(1e-4,M+(N?.16:.04)),w.connect(k).connect(H).connect(o),w.start(M),w.stop(M+.2)}function B(M){let N=n.currentTime;r.gain.cancelScheduledValues(N),M?(r.gain.setValueAtTime(1e-4,N),r.gain.linearRampToValueAtTime(.2,N+.9)):r.gain.setValueAtTime(0,N)}function F(M,N){let w=N>>3&15,k=N&7,H=ws(w>=8?38:26);a.frequency.setValueAtTime(H,M),c.frequency.setValueAtTime(H*.9977,M);let J=k&1;if(h.gain.cancelScheduledValues(M),h.gain.setValueAtTime(1e-4,M),h.gain.exponentialRampToValueAtTime(J?.14:.55,M+.012),h.gain.exponentialRampToValueAtTime(1e-4,M+(J?.07:.13)),!J){let et=bs[I][4];u.frequency.setValueAtTime(et+180,M),u.frequency.setTargetAtTime(et,M+.02,.06)}(k===2||k===6)&&z(M,0),k===0&&z(M,0),w===14&&k>=4&&z(M,1);let G=k===0||k===4?1:.15;p.gain.setValueAtTime(p.gain.value,M),p.gain.linearRampToValueAtTime(G,M+.08),p.gain.linearRampToValueAtTime(.12,M+.42)}function Z(){if(!E)return;let M=n.currentTime+.12,N=30/112;for(;Y<M;)F(Y,q++),Y+=N;U=setTimeout(Z,35)}function K(M){let N=bs[I],w=n.currentTime;Ki(i.gain,N[0],M,w),Ki(s.gain,N[1],M,w),Ki(o.gain,N[2],M,w),Ki(e.gain,E?N[3]:0,M,w),Ki(u.frequency,N[4],M,w),Ki(x.frequency,I==="apply"?1400:880,M*1.2,w)}return{output:e,start(){n.state==="suspended"&&n.resume();let M=n.currentTime;if(!T){for(let N of P)N.start(M);T=!0}E||(E=!0,q=0,Y=M+.06,K(.08),I==="apply"&&B(!0),Z())},stop(){E=!1,clearTimeout(U),Ki(e.gain,0,.08,n.currentTime)},setState(M){if(!bs[M])return;let N=I;I=M,K(.45),M==="apply"&&N!=="apply"?B(!0):M!=="apply"&&N==="apply"&&B(!1)},get state(){return I},get running(){return E},setMix(M,N=.45){let w=n.currentTime,k=bs[I];Ki(e.gain,E?k[3]*Math.max(0,Math.min(1,M)):0,N,w)}}}function jM(n,t){let e=n.sampleRate*t|0,i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0),o=0;for(let r=0;r<e;r++)o=(o+.02*(Math.random()*2-1))/1.02,s[r]=o*3.2;return i}function _p(n,t){let e=n.createBufferSource();e.buffer=jM(n,3),e.loop=!0;let i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=.7;let s=n.createOscillator();s.type="sine",s.frequency.value=.07;let o=n.createGain();o.gain.value=90,s.connect(o),o.connect(i.frequency);let r=n.createGain();r.gain.value=0,e.connect(i),i.connect(r),r.connect(t||n.destination);let a=!1;function c(l,h){let u=n.currentTime;r.gain.cancelScheduledValues(u),r.gain.setValueAtTime(r.gain.value,u),r.gain.linearRampToValueAtTime(l,u+h)}return{output:r,start(){n.state==="suspended"&&n.resume(),a||(e.start(),s.start(),a=!0),c(.158,.6)},stop(){c(0,.4)},setGain(l,h=.08){c(l,h)}}}var Uh="assets/sfx/foley",vp=[`${Uh}/step_sand_01.mp3`,`${Uh}/step_sand_02.mp3`],Ep=[`${Uh}/step_wood_01.mp3`],QM=1.9,tb=.45,Mp=[Math.PI/4,3*Math.PI/4];function bp(n){return n?n.ctx?n.ctx:typeof n.decodeAudioData=="function"?n:null:null}function eb(n,t){return n&&n.master?n.master:t?t.destination:null}function wp(n,t,e,i){let s=e?.09:.12,o=Math.max(32,Math.floor(n.sampleRate*s)),r=n.createBuffer(1,o,n.sampleRate),a=r.getChannelData(0),c=e?2.4:1.45;for(let d=0;d<o;d++)a[d]=(Math.random()*2-1)*Math.pow(1-d/o,c);let l=n.createBufferSource();l.buffer=r,l.playbackRate.value=i;let h=n.createBiquadFilter();h.type=e?"lowpass":"bandpass",h.frequency.value=e?380:640,h.Q.value=e?.65:1.05;let u=n.createGain();u.gain.value=e?.128:.104,l.connect(h),h.connect(u),u.connect(t),l.start(n.currentTime)}function nb(n,t,e,i,s){let o=n.createBufferSource();o.buffer=e,o.playbackRate.value=s;let r=n.createGain();r.gain.value=i,o.connect(r),r.connect(t),o.start(n.currentTime)}function ib(n,t){let e=(n%Math.PI+Math.PI)%Math.PI,i=(t%Math.PI+Math.PI)%Math.PI,s=t>n&&i<e;for(let o=0;o<Mp.length;o++){let r=Mp[o];if(s){if(e<r||i>=r)return!0}else if(e<r&&i>=r)return!0}return!1}function Sp(n){let t=n&&typeof n.play=="function"?n:null,e={sand:[],wood:[]},i=!1,s=null,o=!1,r=-1,a=0,c=()=>s||(s=(async()=>{if(t&&typeof t.unlock=="function")try{await t.unlock()}catch{}let h=bp(n);if(!h&&!t){o=!0;return}let u=async d=>{if(t&&typeof t.decode=="function")return t.decode(d);let f=await fetch(d);if(!f.ok)throw new Error(d);let g=await f.arrayBuffer();return h.decodeAudioData(g.slice(0))};try{e.sand=await Promise.all(vp.map(u)),e.wood=await Promise.all(Ep.map(u)),i=e.sand.length>0}catch{i=!1}finally{o=!0}})(),s),l=(h,u)=>{let d=(.93+Math.random()*.16)*(u>5.4?1.06:1),f=bp(n),g=eb(n,f),x=h?Ep:vp,p=h?.168:.248;if(t){t.play(x,{gain:p,rate:d}).catch(()=>{o&&f&&g&&wp(f,g,h,d)});return}if(f&&g&&i){let m=h?e.wood:e.sand,_=Math.floor(Math.random()*m.length);m.length>1&&_===r&&!h&&(_=(_+1)%m.length),h||(r=_);let y=m[_];if(y){nb(f,g,y,h?.168:.248,d);return}}o&&f&&g&&wp(f,g,h,d)};return{tick({speed:h=0,onWood:u=!1,dt:d=0}={}){c();let f=Math.max(0,h);if(f<tb){a=0;return}let g=a;a+=f*Math.max(0,d)*QM,ib(g,a)&&l(!!u,f)}}}var wn=1/60;function Rp(n={x:0,y:0,z:8}){return{pos:new D(n.x,n.y,n.z),vel:new D,yaw:0,pitch:-.05,radius:.34,eye:1.65,bob:0,step:0,_tx:null,_ty:null}}function Ap(){let n=[];return{COL:n,addCollider:(e,i,s,o)=>n.push({minX:e,maxX:i,minZ:s,maxZ:o})}}function Tp(n,t,e,i){for(let s of n)if(t>s.minX-i&&t<s.maxX+i&&e>s.minZ-i&&e<s.maxZ+i)return s;return null}function Cp({dom:n,isPlaying:t,onEscapePause:e}){let i=Object.create(null),s=!1,o=!1,r=!1,a=()=>{if(t())try{n.requestPointerLock?.()}catch{}};document.addEventListener("pointerlockchange",()=>{s=document.pointerLockElement===n,r&&!s&&t()&&e?.(),r=s}),document.addEventListener("mousemove",l=>{t()});let c={player:null};return document.addEventListener("mousemove",l=>{let h=c.player;!h||!t()||(s||o)&&(h.yaw-=l.movementX*.0022,h.pitch-=l.movementY*.0022,h.pitch=Math.max(-1.45,Math.min(1.45,h.pitch)))}),n.addEventListener("mousedown",()=>{t()&&(o=!0,s||a())}),addEventListener("mouseup",()=>{o=!1}),n.addEventListener("touchmove",l=>{let h=c.player;if(!h||!t())return;let u=l.touches[0];u&&(h._tx!=null&&(h.yaw-=(u.clientX-h._tx)*.005,h.pitch-=(u.clientY-h._ty)*.005,h.pitch=Math.max(-1.45,Math.min(1.45,h.pitch))),h._tx=u.clientX,h._ty=u.clientY,l.preventDefault())},{passive:!1}),addEventListener("touchend",()=>{c.player&&(c.player._tx=null)}),addEventListener("keydown",l=>{i[l.code]=!0,l.code==="Escape"&&t()&&e?.(),(l.code==="Space"||l.code==="Tab"||l.code.indexOf("Arrow")===0)&&l.preventDefault()}),addEventListener("keyup",l=>{i[l.code]=!1}),{keys:i,tryLock:a,bindPlayer(l){c.player=l},get locked(){return s}}}function Pp(n,t,e,i,s){let o=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0),r=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0),c=t.ShiftLeft||t.ShiftRight?6.4:3.4,l=Math.sin(n.yaw),h=Math.cos(n.yaw),u=r*h-o*l,d=-o*h-r*l,f=Math.hypot(u,d);f>0&&(u/=f,d/=f);let g=f>0?12:10;n.vel.x+=(u*c-n.vel.x)*Math.min(1,g*s),n.vel.z+=(d*c-n.vel.z)*Math.min(1,g*s);let x=n.radius,p=n.pos.x+n.vel.x*s,m=Tp(e,p,n.pos.z,x);m&&(p=n.vel.x>0?m.minX-x:m.maxX+x,n.vel.x=0),n.pos.x=p;let _=n.pos.z+n.vel.z*s;m=Tp(e,n.pos.x,_,x),m&&(_=n.vel.z>0?m.minZ-x:m.maxZ+x,n.vel.z=0),n.pos.z=_,n.pos.x=Math.max(i.minX,Math.min(i.maxX,n.pos.x)),n.pos.z=Math.max(i.minZ,Math.min(i.maxZ,n.pos.z));let y=Math.hypot(n.vel.x,n.vel.z);n.step+=y*s*1.9,n.bob=Math.sin(n.step*2)*.035*Math.min(1,y/3)}var Nh=4.2,Ip=2.1,Dp=1.3,sb=8,ob=-.36,rb=.28,Hh=new D,Lp=new D,pc={ready:!1};function Up(){return pc.ready=!1,{offset:new D(0,Ip,Nh),chest:Dp,snap(){pc.ready=!1}}}function Hp(n,t,e){let i=Math.max(ob,Math.min(rb,t.pitch*.42)),s=Math.cos(i),o=Math.sin(i),r=Math.sin(t.yaw),a=Math.cos(t.yaw),c=Nh*s,l=Math.max(.88,Ip-Nh*o);if(Hh.set(t.pos.x+c*r,t.pos.y+l+(t.bob||0)*.2,t.pos.z+c*a),!pc.ready)n.position.copy(Hh),pc.ready=!0;else{let h=Math.min(1,sb*Math.max(0,e));n.position.lerp(Hh,h)}Lp.set(t.pos.x,t.pos.y+Dp+o*.5,t.pos.z),n.lookAt(Lp)}var Sn={x:0,y:0,mag:0},Wn={x:0,y:0,mag:0},kh={w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1},Oh=!1,Xe=null;function Bp(){let n=t=>typeof matchMedia=="function"?matchMedia(t).matches:!1;return typeof matchMedia!="function"?"ontouchstart"in window:!!(n("(pointer: coarse)")||n("(any-pointer: coarse)")||"ontouchstart"in window&&n("(hover: none)"))}function zp(n,t,e){Sn.x=n,Sn.y=t,Sn.mag=e}function Bh(n){n.analogX=Sn.x,n.analogY=Sn.y,n.analogMag=Sn.mag}function Xn(n,t,e,i){i?(n[t]=!0,kh[e]=!0):kh[e]&&(n[t]=!1,kh[e]=!1)}function ab(n){let t=Sn.mag>.3;Xn(n,"KeyW","w",t&&Sn.y>.3),Xn(n,"KeyS","s",t&&Sn.y<-.3),Xn(n,"KeyA","a",t&&Sn.x<-.3),Xn(n,"KeyD","d",t&&Sn.x>.3),Bh(n)}function Np(n){zp(0,0,0),Xn(n,"KeyW","w",!1),Xn(n,"KeyS","s",!1),Xn(n,"KeyA","a",!1),Xn(n,"KeyD","d",!1),Bh(n)}function ei(n,t,e){let i=document.createElement(n);return Object.assign(i.style,t),e&&e.appendChild(i),i}function kp(n,t,e,i){let s=ei("div",{width:`${t}px`,height:`${t}px`,borderRadius:"50%",background:"rgba(12,18,16,0.38)",border:"1px solid rgba(251,246,234,0.28)",boxShadow:"0 4px 18px rgba(0,0,0,0.28)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",touchAction:"none",webkitUserSelect:"none",userSelect:"none",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"},n);s.appendChild(e);let o=null,r=c=>{o==null&&(o=c.pointerId,s.setPointerCapture?.(c.pointerId),s.style.background="rgba(255,215,106,0.28)",i(!0),c.preventDefault(),c.stopPropagation())},a=c=>{o==null||c.pointerId!=null&&c.pointerId!==o||(o=null,s.style.background="rgba(12,18,16,0.38)",i(!1),c.preventDefault(),c.stopPropagation())};return s.addEventListener("pointerdown",r),s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("lostpointercapture",a),s}function cb(){return ei("div",{width:"15px",height:"15px",background:"rgba(251,246,234,0.88)",borderRadius:"0 70% 70% 70%",transform:"rotate(45deg)",marginTop:"-2px"})}function lb(){return ei("div",{width:"11px",height:"11px",borderRadius:"50%",background:"rgba(255,215,106,0.9)"})}function Op(n,t,e,i,s,o){let r=null,a=l=>{let h=t.getBoundingClientRect(),u=h.left+h.width/2,d=h.top+h.height/2,f=l.clientX-u,g=l.clientY-d,x=Math.hypot(f,g),p=Math.min(1,x/i),m=x>0?f/x*p:0,_=x>0?-g/x*p:0;s(m,_,p),e.style.transform=`translate(${m*i}px, ${-_*i}px)`};n.addEventListener("pointerdown",l=>{r==null&&(r=l.pointerId,n.setPointerCapture?.(l.pointerId),a(l),l.preventDefault(),l.stopPropagation())}),n.addEventListener("pointermove",l=>{l.pointerId===r&&(a(l),l.preventDefault(),l.stopPropagation())});let c=l=>{r==null||l.pointerId!=null&&l.pointerId!==r||(r=null,o(),e.style.transform="translate(0px, 0px)",l.preventDefault(),l.stopPropagation())};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c),n.addEventListener("lostpointercapture",c)}function hb(n,t){if(Xe)return Xe;let e=document.createElement("style");e.id="aus101-touch-css",e.textContent="#aus101-touch,#aus101-touch *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}",document.head.appendChild(e),Xe=ei("div",{position:"fixed",inset:"0",zIndex:"15",pointerEvents:"none",touchAction:"none",userSelect:"none",webkitUserSelect:"none"}),Xe.id="aus101-touch",Xe.setAttribute("aria-hidden","true");let i=ei("div",{position:"absolute",left:"max(18px, env(safe-area-inset-left))",bottom:"max(18px, env(safe-area-inset-bottom))",width:"132px",height:"132px",pointerEvents:"auto"},Xe),s=ei("div",{position:"absolute",inset:"0",borderRadius:"50%",background:"rgba(12,18,16,0.34)",border:"1px solid rgba(251,246,234,0.22)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.18), 0 6px 22px rgba(0,0,0,0.25)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"},i),o=ei("div",{position:"absolute",width:"58px",height:"58px",left:"50%",top:"50%",marginLeft:`${-58/2}px`,marginTop:`${-58/2}px`,borderRadius:"50%",background:"rgba(251,246,234,0.34)",border:"1px solid rgba(251,246,234,0.4)",boxShadow:"0 2px 10px rgba(0,0,0,0.3)",pointerEvents:"none"},i),r=74*.5;Op(i,s,o,r,(g,x,p)=>{t()&&(zp(g,x,p),ab(n))},()=>Np(n));let a=ei("div",{position:"absolute",right:"max(16px, env(safe-area-inset-right))",bottom:"max(16px, env(safe-area-inset-bottom))",width:"96px",height:"96px",pointerEvents:"auto"},Xe),c=ei("div",{position:"absolute",inset:"0",borderRadius:"50%",background:"rgba(12,18,16,0.30)",border:"1px solid rgba(251,246,234,0.18)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.22)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"},a),l=ei("div",{position:"absolute",width:"42px",height:"42px",left:"50%",top:"50%",marginLeft:`${-42/2}px`,marginTop:`${-42/2}px`,borderRadius:"50%",background:"rgba(255,215,106,0.28)",border:"1px solid rgba(255,215,106,0.45)",boxShadow:"0 2px 8px rgba(0,0,0,0.28)",pointerEvents:"none"},a),h=54*.5;Op(a,c,l,h,(g,x,p)=>{t()&&(Wn.x=g,Wn.y=x,Wn.mag=p)},()=>{Wn.x=0,Wn.y=0,Wn.mag=0});let u=ei("div",{position:"absolute",right:"max(16px, env(safe-area-inset-right))",bottom:"max(126px, calc(env(safe-area-inset-bottom) + 108px))",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",pointerEvents:"none"},Xe);kp(u,56,lb(),g=>{Xn(n,"ShiftLeft","shift",g)}),kp(u,62,cb(),g=>{Xn(n,"Space","space",g)}),document.body.appendChild(Xe);let d=()=>{let g=Bp()&&t();Xe.style.display=g?"block":"none",g||(Np(n),Xn(n,"Space","space",!1),Xn(n,"ShiftLeft","shift",!1),Wn.x=Wn.y=Wn.mag=0)},f=()=>{Xe&&(d(),requestAnimationFrame(f))};return requestAnimationFrame(f),typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").addEventListener?.("change",d),Xe}function Fp({keys:n,isPlaying:t}){return!n||typeof t!="function"?{getStick:mc}:(Bh(n),Bp()?Oh&&Xe?{getStick:mc,root:Xe}:(Oh=!0,hb(n,t),{getStick:mc,root:Xe}):(Xe&&(Xe.style.display="none"),Oh=!0,{getStick:mc,root:Xe}))}function mc(){return{x:Sn.x,y:Sn.y,mag:Sn.mag}}function Gp(){return{x:Wn.x,y:Wn.y,mag:Wn.mag}}var zh=n=>440*2**((n-69)/12),Fh=[62,64,69,57,50],Vp=.35;function wr(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function Eo(n,t){let e=n.createGain();return e.gain.value=t,e}function ub(n){let t=n.sampleRate*2.4|0,e=n.createBuffer(2,t,n.sampleRate);for(let i=0;i<2;i++){let s=e.getChannelData(i);for(let o=0;o<t;o++)s[o]=(Math.random()*2-1)*Math.pow(1-o/t,2.1)}return e}var Ji={at:0,midi:Fh[0],mix:0};function Gh(n,t,e,i,s=Vp){if(!n||!t)return null;let o=e??n.currentTime+.02,r=i??Fh[Math.random()*Fh.length|0],a=zh(r),c=wr(n,"sine",a),l=wr(n,"triangle",a);l.detune.value=7;let h=Eo(n,1e-4),u=Math.max(1e-4,s);return h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(u,o+.018),h.gain.exponentialRampToValueAtTime(1e-4,o+1.85),c.connect(h),l.connect(h),h.connect(t),c.start(o),l.start(o),c.stop(o+2.05),l.stop(o+2.05),Ji.at=performance.now(),Ji.midi=r,{o:c,o2:l,g:h,midi:r}}function Wp(n,t){let e=Eo(n,0);e.connect(t||n.destination);let i=n.createBuffer(1,n.sampleRate,n.sampleRate),s=i.getChannelData(0);for(let S=0;S<s.length;S++)s[S]=(Math.random()*2-1)*.08;let o=n.createBufferSource();o.buffer=i,o.loop=!0;let r=Eo(n,.05);o.connect(r).connect(e);let a=wr(n,"sine",zh(50)),c=wr(n,"triangle",zh(57));a.detune.value=6,c.detune.value=-8;let l=Eo(n,.14),h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=520,a.connect(l),c.connect(l),l.connect(h);let u=n.createConvolver();u.buffer=ub(n),h.connect(u).connect(e);let d=wr(n,"sine",.07),f=Eo(n,80);d.connect(f).connect(h.frequency);let g=Eo(n,1);g.connect(e),g.connect(u);let x=!1,p=!1,m=0,_=0;function y(S){try{S.start()}catch{}}function v(S){let I=Vp*(.35+.65*_);Gh(n,g,S,void 0,I)}function C(){return _<.08?1800+Math.random()*900:800+Math.random()*600}function A(){p&&(_>.04&&v(n.currentTime+.04),m=setTimeout(A,C()))}return{start(){n.state==="suspended"&&n.resume(),x||(y(o),y(a),y(c),y(d),x=!0),p=!0,clearTimeout(m),A()},setMix(S,I=1.2){let E=Math.max(0,Math.min(1,S)),T=_<.1&&E>=.1;_=E,Ji.mix=_;let U=n.currentTime;e.gain.cancelScheduledValues(U),e.gain.setValueAtTime(e.gain.value,U),e.gain.linearRampToValueAtTime(_*.85,U+I),p&&T&&(clearTimeout(m),A())},stop(){p=!1,clearTimeout(m),this.setMix(0,.6)},pluckNow(){!p||_<.04||v(n.currentTime+.02)}}}var ni=Math.PI*2;function ii(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function Hn(n,t=!0){let e=new rn(n);return e.colorSpace=ee,t&&(e.wrapS=e.wrapT=qi),e.needsUpdate=!0,e}function xc(n,t,e){let i=n.clone();return i.wrapS=i.wrapT=qi,i.repeat.set(t,e),i.needsUpdate=!0,i.colorSpace=ee,i}function xt(n,t){return new Bt(Object.assign({color:n,roughness:.92,metalness:0},t||{}))}function kt(n,t,e,i){let s=new W(new Tt(n,t,e),i);return s.castShadow=!0,s.receiveShadow=!0,s}var Xp=new Map;function qp(n,t,e){let i=t+":"+n,s=Xp.get(i);return s||(s=xt(n,e),Xp.set(i,s)),s}function db(){let n=ii(256,96),t=n.getContext("2d"),e=3,i=96/e,s=["#a9682f","#b2712e","#9c6029","#bb7c3a"];t.fillStyle="#5f3a19",t.fillRect(0,0,256,96);for(let o=0;o<e;o++){let r=o*i;t.fillStyle=s[o%s.length],t.fillRect(0,r+1.5,256,i-3);for(let l=0;l<22;l++){let h=r+3+Math.random()*(i-6);t.strokeStyle=l%3?"rgba(116,70,29,0.28)":"rgba(220,171,112,0.26)",t.lineWidth=.6+Math.random()*.9,t.beginPath();let u=Math.random()*256,d=40+Math.random()*150;t.moveTo(u,h);for(let f=0;f<=d;f+=18)t.lineTo(u+f,h+Math.sin((u+f)*.05+o)*1.1);t.stroke()}let a=o*89%190+30;t.fillStyle="rgba(60,36,15,0.8)",t.fillRect(a,r+1.5,2,i-3),o%2===0&&(t.beginPath(),t.ellipse(46+o*67%170,r+i*.5,4.6,2.6,.5,0,ni),t.fillStyle="rgba(88,54,22,0.7)",t.fill());let c=t.createLinearGradient(0,r,0,r+i);c.addColorStop(0,"rgba(255,240,215,0.12)"),c.addColorStop(.45,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(0,0,0,0.20)"),t.fillStyle=c,t.fillRect(0,r,256,i)}return Hn(n)}function Wh(){let n=ii(256,256),t=n.getContext("2d");t.fillStyle="#ddc486",t.fillRect(0,0,256,256);for(let e=0;e<14e3;e++){let i=Math.random()*256,s=Math.random()*256,o=Math.random();t.fillStyle=o<.4?"rgba(168,140,92,0.30)":o<.7?"rgba(255,243,205,0.28)":"rgba(200,180,130,0.22)",t.fillRect(i,s,1.4,1.4)}t.globalAlpha=.06,t.strokeStyle="#9c7f4f",t.lineWidth=2;for(let e=0;e<22;e++){t.beginPath();let i=Math.random()*256;t.moveTo(0,i);for(let s=0;s<=256;s+=16)t.lineTo(s,i+Math.sin(s*.08+e)*4);t.stroke()}return t.globalAlpha=1,n}function fb(){let n=ii(64,256),t=n.getContext("2d");t.fillStyle="#9c7b4f",t.fillRect(0,0,64,256);for(let i=0;i<260;i++)t.fillStyle=["rgba(126,98,62,0.35)","rgba(190,163,118,0.30)","rgba(146,116,74,0.28)"][i%3],t.fillRect(Math.random()*64,Math.random()*256,1+Math.random()*2,4+Math.random()*12);for(let i=0;i<256;i+=16){let s=Math.sin(i*.4)*1.6;t.fillStyle="rgba(96,72,43,0.55)",t.fillRect(0,i+s,64,3),t.fillStyle="rgba(214,190,146,0.35)",t.fillRect(0,i+s+3,64,1.6),t.fillStyle="rgba(112,84,50,0.30)";for(let o=i/16%2?0:8;o<64;o+=16)t.fillRect(o,i+s+1,7,5)}let e=t.createLinearGradient(0,0,64,0);return e.addColorStop(0,"rgba(0,0,0,0.22)"),e.addColorStop(.45,"rgba(255,255,255,0.10)"),e.addColorStop(1,"rgba(0,0,0,0.22)"),t.fillStyle=e,t.fillRect(0,0,64,256),Hn(n)}function pb(){let n=ii(128,128),t=n.getContext("2d");return t.fillStyle="#c2402f",t.fillRect(0,0,128,128),t.fillStyle="#ecdfc0",t.fillRect(8,10,112,78),t.fillStyle="#cf2a20",t.fillRect(16,18,96,62),t.fillStyle="#a8201a",t.fillRect(20,22,88,54),t.fillStyle="#e23026",t.fillRect(0,98,128,30),t.fillStyle="#7d1813",t.fillRect(0,120,128,8),Hn(n)}function mb(n,t){let e=ii(128,128),i=e.getContext("2d"),s=32,o=16;i.fillStyle=t,i.fillRect(0,0,128,128);let r=["rgba(255,255,255,0.10)","rgba(0,0,0,0.06)","rgba(0,0,0,0.10)","rgba(255,255,255,0.05)"];for(let a=0;a<8;a++){let c=a*o,l=a%2*(s/2);for(let h=-s;h<128;h+=s){let u=h+l+1.2;i.fillStyle=n,i.fillRect(u,c+1.2,s-2.4,o-2.4),i.fillStyle=r[(a*3+(h/s|0)+8)%4],i.fillRect(u,c+1.2,s-2.4,o-2.4),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(u,c+1.2,s-2.4,1.1),i.fillStyle="rgba(0,0,0,0.13)",i.fillRect(u,c+o-2.5,s-2.4,1.3)}}return Hn(e)}function Xh(){let n=ii(128,128),t=n.getContext("2d"),e=16;for(let i=0;i<128;i+=e){let s=t.createLinearGradient(i,0,i+e,0);s.addColorStop(0,"#8a2a1d"),s.addColorStop(.18,"#bd3d2c"),s.addColorStop(.46,"#e4644c"),s.addColorStop(.72,"#c8442f"),s.addColorStop(1,"#8a2a1d"),t.fillStyle=s,t.fillRect(i,0,e,128)}for(let i of[0,64]){t.fillStyle="rgba(96,26,18,0.55)",t.fillRect(0,i,128,2),t.fillStyle="rgba(255,180,160,0.18)",t.fillRect(0,i+2,128,1);for(let s=6;s<128;s+=e)t.fillStyle="rgba(70,20,14,0.6)",t.beginPath(),t.arc(s,i+7,1.7,0,ni),t.fill()}for(let i=0;i<26;i++)t.fillStyle="rgba(150,40,28,0.08)",t.fillRect(0,Math.random()*128,128,1+Math.random()*2);return Hn(n)}function gb(){let n=ii(128,128),t=n.getContext("2d");t.fillStyle="#8d6d3c",t.fillRect(0,0,128,128);let e=5,i=128/e;for(let s=0;s<e;s++){let o=s*i;t.fillStyle=["#b8945a","#ad8a52","#c09a5f"][s%3],t.fillRect(0,o,128,i+3);for(let a=0;a<110;a++){let c=Math.random()*128,l=o+Math.random()*i;t.strokeStyle=["#c9a86a","#a8854c","#d8bb7d","#95753f","#bf9c60"][a%5],t.lineWidth=.7+Math.random()*1.3,t.beginPath(),t.moveTo(c,l),t.lineTo(c+(Math.random()-.5)*3,l+5+Math.random()*9),t.stroke()}let r=t.createLinearGradient(0,o,0,o+i);r.addColorStop(0,"rgba(60,40,18,0.42)"),r.addColorStop(.28,"rgba(255,255,255,0)"),r.addColorStop(.85,"rgba(255,240,200,0.12)"),r.addColorStop(1,"rgba(60,40,18,0.10)"),t.fillStyle=r,t.fillRect(0,o,128,i),t.fillStyle="rgba(58,40,18,0.35)";for(let a=0;a<128;a+=5)t.fillRect(a,o+i-1,3,1.5+Math.random()*2.5)}return Hn(n)}function xb(){let n=ii(256,256),t=n.getContext("2d");t.fillStyle="#6f5d51",t.fillRect(0,0,256,256);let e=64,i=32,s=["#a68d7c","#9a8270","#ae9482","#957d6b","#a99080","#9d8674"];for(let o=0;o*i<256;o++){let r=o%2*(e/2);for(let a=-e;a<256;a+=e){let c=a+r+2.6,l=o*i+2.6,h=e-5.2,u=i-5.2;t.fillStyle=s[Math.random()*s.length|0],t.fillRect(c,l,h,u),t.fillStyle="rgba(255,247,232,0.20)",t.fillRect(c,l,h,1.4),t.fillStyle="rgba(40,28,20,0.22)",t.fillRect(c,l+u-1.6,h,1.6),t.fillStyle="rgba(40,28,20,0.14)",t.fillRect(c+h-1.4,l,1.4,u);for(let d=0;d<26;d++)t.fillStyle=Math.random()<.5?"rgba(255,255,255,0.10)":"rgba(60,45,32,0.12)",t.fillRect(c+Math.random()*h,l+Math.random()*u,1.6,1.6)}}return Hn(n)}function yb(){let n=ii(64,64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Hn(n,!1)}function bo(n,t,e="#1a120c",i="#ffd99a"){let s=ii(256,128),o=s.getContext("2d");o.fillStyle=e,o.fillRect(0,0,256,128);for(let r=0;r<90;r++)o.fillStyle=r%2?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.10)",o.fillRect(0,Math.random()*128,256,1+Math.random()*2);return o.strokeStyle="#5a3d22",o.lineWidth=8,o.strokeRect(4,4,248,120),o.strokeStyle="rgba(255,220,170,0.35)",o.lineWidth=1.6,o.strokeRect(12,12,232,104),o.textAlign="center",o.textBaseline="middle",o.font="bold 36px Georgia, serif",o.fillStyle="rgba(0,0,0,0.55)",o.fillText(n,129.5,(t?50:64)+2),o.fillStyle=i,o.fillText(n,128,t?50:64),t&&(o.font="600 14px ui-sans-serif, system-ui, sans-serif",o.fillStyle="#c9ab7c",o.fillText(t,128,92)),Hn(s,!1)}function _b(){let n=ii(64,64),t=n.getContext("2d");return t.fillStyle="#e8f2f6",t.fillRect(0,0,64,64),t.fillStyle="#1f9aa8",t.fillRect(0,18,64,18),t.fillStyle="#e85d4c",t.fillRect(0,36,64,8),t.fillStyle="#1a120c",t.font="bold 11px ui-sans-serif, system-ui, sans-serif",t.textAlign="center",t.fillText("SPF",32,31),Hn(n,!1)}function vb(){let e=new _s;e.moveTo(0,0),e.quadraticCurveTo(.44*.6,2*.12,.44*.5,2*.42),e.quadraticCurveTo(.44*.5,2*.82,0,2),e.quadraticCurveTo(-.44*.5,2*.82,-.44*.5,2*.42),e.quadraticCurveTo(-.44*.6,2*.12,0,0);let i=new go(e,{depth:.06,bevelEnabled:!0,bevelThickness:.04,bevelSize:.05,bevelSegments:1,steps:1});return i.center(),i}function Eb(){let n=[],t=(i,s,o,r)=>{n.push(i,s,-.07,i,s-.17,-.07,i,o,-.07-r)};t(0,-.72,-.8,.2),t(-.13,-.6,-.68,.12),t(.13,-.6,-.68,.12);let e=new Me;return e.setAttribute("position",new jt(n,3)),e.computeVertexNormals(),e}function Mb(n,t,e,i,s,o=.15){let r=new Vt(i),a=new Vt(s),c=[],l=[],h=(f,g,x)=>[Math.cos(f)*g,x,Math.sin(f)*g],u=(f,g,x,p)=>{c.push(f[0],f[1],f[2],g[0],g[1],g[2],x[0],x[1],x[2]);for(let m=0;m<3;m++)l.push(p.r,p.g,p.b)};for(let f=0;f<e;f++){let g=f/e*ni,x=(f+1)/e*ni,p=(g+x)*.5,m=f%2===0?r:a,_=[0,t,0],y=h(g,n*.52,t*.46),v=h(x,n*.52,t*.46),C=h(g,n,0),A=h(x,n,0),S=h(p,n*.99,t*.05);if(u(_,v,y,m),u(y,v,S,m),u(y,S,C,m),u(v,A,S,m),o>0){let I=[C[0],C[1]-o,C[2]],E=[A[0],A[1]-o,A[2]],T=[S[0],S[1]-o,S[2]];u(C,S,T,m),u(C,T,I,m),u(S,A,E,m),u(S,E,T,m)}}let d=new Me;return d.setAttribute("position",new jt(c,3)),d.setAttribute("color",new jt(l,3)),d.computeVertexNormals(),d}function Mo({len:n=2.3,width:t=.3,lift:e=.2,droop:i=.5,notch:s=.45,segs:o=9,fold:r=.4}){let a=[],c=g=>e*n*Math.sin(g*1.7)-i*n*g*g*g,l=(g,x)=>{let p=t*(.22+.78*Math.sin(Math.PI*Math.pow(g,.6)));return x%2?p*(1-s):p},h=[],u=[[],[]];for(let g=0;g<=o;g++){let x=g/o,p=x*n,m=c(x);h.push([p,m,0]);let _=l(x,g);for(let y=0;y<2;y++){let v=y===0?1:-1;u[y].push([p-_*.32,m-_*r,v*_])}}let d=(g,x,p)=>a.push(g[0],g[1],g[2],x[0],x[1],x[2],p[0],p[1],p[2]);for(let g=0;g<o;g++)d(h[g],h[g+1],u[0][g+1]),d(h[g],u[0][g+1],u[0][g]),d(h[g],u[1][g+1],h[g+1]),d(h[g],u[1][g],u[1][g+1]);let f=new Me;return f.setAttribute("position",new jt(a,3)),f.computeVertexNormals(),f}function Vh(n,t,e=.19,i=.115){let r=[],a=[],c=[],l=u=>t*n*(.16*u*u+.05*Math.sin(u*2.4));for(let u=0;u<=10;u++){let d=u/10,f=d*n,g=l(d),x=(e*(1-d)+i*d)*(1+(d<.12?(.12-d)*2.2:0))+Math.sin(d*11)*.005;for(let p=0;p<=7;p++){let m=p/7*ni;r.push(Math.cos(m)*x+g,f,Math.sin(m)*x),a.push(p/7,d*3)}}for(let u=0;u<10;u++)for(let d=0;d<7;d++){let f=u*8+d,g=f+7+1;c.push(f,g,f+1,f+1,g,g+1)}let h=new Me;return h.setAttribute("position",new jt(r,3)),h.setAttribute("uv",new jt(a,2)),h.setIndex(c),h.computeVertexNormals(),h.userData.top=new D(l(1),n,0),h}function bb(n=.9){let e=[],i=[],s=new Vt(16185076),o=new Vt(10133928),r=new Vt(2896184),a=u=>{let d=u*n,f=-u*u*.26*n,g=.3*(1-u*.62)*(n/.9),x=Math.sin(u*1.5)*.07*n-u*u*.1*n;return{le:[d,x,f+g*.55],te:[d,x-u*.01,f-g*.45]}},c=u=>u>.82?r:u>.62?o:s,l=(u,d)=>{e.push(u[0],u[1],u[2]),i.push(d.r,d.g,d.b)};for(let u=0;u<6;u++){let d=u/6,f=(u+1)/6,g=a(d),x=a(f),p=c(d),m=c(f);l(g.le,p),l(x.le,m),l(x.te,m),l(g.le,p),l(x.te,m),l(g.te,p)}let h=new Me;return h.setAttribute("position",new jt(e,3)),h.setAttribute("color",new jt(i,3)),h.computeVertexNormals(),h}function wb(){let n=[],t=[],e=new Vt(15921904),i=new Vt(5594211),s=[0,0,-.16],o=[-.13,.01,-.44],r=[.13,.01,-.44],a=[0,0,-.46],c=(h,u,d,f,g,x)=>{n.push(h[0],h[1],h[2],u[0],u[1],u[2],d[0],d[1],d[2]),t.push(f.r,f.g,f.b,g.r,g.g,g.b,x.r,x.g,x.b)};c(s,a,o,e,i,i),c(s,r,a,e,i,i);let l=new Me;return l.setAttribute("position",new jt(n,3)),l.setAttribute("color",new jt(t,3)),l.computeVertexNormals(),l}var gc=null;function gn(){if(gc)return gc;let n=Hn(Wh()),t=db(),e=xb(),i=Xh(),s=gb(),o=pb(),r=yb(),a=fb();return gc={sandMap:n,woodMap:t,paverMap:e,roofMap:i,thatchMap:s,barMap:o,glow:r,barkMap:a,brickLight:mb("#eef0ec","#d6d6d0"),chair:xt(1919536,{roughness:.8}),table:xt(2315833,{roughness:.7}),pole:xt(10133670,{metalness:.4,roughness:.5}),finial:xt(14038058),canopy:new Bt({vertexColors:!0,side:he,roughness:.85}),canopyGeo:Mb(1.35,.8,16,14038058,16184300,.12),beachCanopyGeo:new He(1.3,.62,10),hubGeo:new Mt(.075,.055,.13,8),seatGeo:new Mt(.23,.21,.07,10),backGeo:new Tt(.4,.42,.055),railGeo:new Mt(.03,.03,.4,8),legGeo:new Mt(.028,.034,.45,6),stileGeo:new Mt(.026,.032,.94,6),tableTopGeo:new Mt(.62,.62,.07,14),tableLipGeo:new Mt(.635,.635,.03,14),tableLegGeo:new Mt(.06,.06,.74,8),tableBaseGeo:new Mt(.28,.32,.08,10),umbPoleGeo:new Mt(.045,.045,3.4,8),beachPoleGeo:new Mt(.035,.02,2.5,6),finGeo:new Mt(.04,.04,.22,6),cupBodyGeo:new Mt(.046,.036,.13,10),cupDrinkGeo:new Mt(.04,.032,.1,8),cupRimGeo:new mn(.046,.006,4,10),strawGeo:new Mt(.006,.006,.17,5),cupGlass:xt(14872052,{transparent:!0,opacity:.3,roughness:.08}),cupDrink:xt(15233082,{transparent:!0,opacity:.85}),cupStripe:_b(),straw:xt(15220815,{roughness:.5}),surfGeo:vb(),surfFinGeo:Eb(),surfFin:xt(2830392,{roughness:.4,side:he}),surfStringerGeo:new Tt(.022,1.86,.155),surfStringer:xt(16250092,{roughness:.35}),ballGeo:new Kt(.35,16,12),ballGore:[0,1,2].map(c=>new Kt(.353,8,12,c*2.094,1.02)),ballCapGeo:new Kt(.356,12,4,0,ni,0,.34),ballWhite:xt(16448250,{roughness:.35}),ballCols:[xt(14826299,{roughness:.35}),xt(15910205,{roughness:.35}),xt(3112900,{roughness:.35})],trunk:new Bt({map:a,roughness:.95}),trunkDark:xt(8216896,{roughness:.95}),frondA:xt(3112255,{roughness:.85,side:he}),frondB:xt(3967556,{roughness:.85,side:he}),frondC:xt(2386234,{roughness:.85,side:he}),brown:xt(11111254,{roughness:.95,side:he}),coco:xt(7031338),trunkGeo:new Mt(1,1,1,6),palmTrunks:[Vh(3.9,1),Vh(4.4,-.55),Vh(3.4,.35)],palmFronds:[Mo({len:2.4,width:.34,lift:.22,droop:.55,notch:.5}),Mo({len:2.1,width:.3,lift:.16,droop:.72,notch:.45}),Mo({len:2.7,width:.36,lift:.26,droop:.42,notch:.55})],spearGeo:Mo({len:1.1,width:.11,lift:.1,droop:.12,notch:.3,segs:5}),bananaLeafGeo:Mo({len:1.45,width:.32,lift:.24,droop:.5,notch:.14,segs:8,fold:.55}),fernBladeGeo:Mo({len:.62,width:.11,lift:.24,droop:.5,notch:.5,segs:6}),frondGeo:new He(.13,2.4,6),cocoGeo:new Kt(.12,6,6),crownGeo:new Kt(.34,8,6),palmBootGeo:new Mt(.2,.13,.3,7),palmFlareGeo:new Mt(.2,.32,.32,7),gullBody:xt(15987701,{roughness:.8}),gullGrey:xt(9079440),gullTail:xt(14606050),gullBeak:xt(15246138,{roughness:.6}),gullEye:xt(1316635,{roughness:.4}),gullSkin:new Bt({vertexColors:!0,side:he,roughness:.85}),gullWingGeo:bb(.9),gullTailGeo:wb(),gullBodyGeo:new Kt(.1,8,6),gullHeadGeo:new Kt(.062,7,5),gullBeakGeo:new He(.02,.1,5),string:new ce({color:7037257,fog:!1}),cable:new pr({color:3880234,fog:!1}),bulbGeo:new Kt(.06,6,6),bulbLitGeo:new Kt(.055,6,5),bulbLit:[16770736,16773842,16766351].map(c=>new ce({color:c,fog:!1})),iron:xt(1316635,{roughness:.5,metalness:.5}),bamboo:xt(8018482,{roughness:.85}),bambooRing:xt(6178088,{roughness:.9}),lampGlass:new ce({color:16768160,fog:!1}),wall:xt(16184559,{roughness:.95}),darkGlass:xt(2765112,{roughness:.5,metalness:.2}),postWood:xt(7029542,{roughness:.9}),fascia:xt(11680298,{roughness:.7}),fern:xt(3046714,{roughness:.95,side:he}),fern2:xt(4628810,{roughness:.9,side:he}),crotonR:xt(12728863,{roughness:.85}),crotonO:xt(15238698,{roughness:.85}),crotonY:xt(15122739,{roughness:.85}),hedge:xt(3108403,{roughness:.95}),hedge2:xt(3571769,{roughness:.95}),hedgeDark:xt(2381610,{roughness:.95}),blobGeo:new Kt(1,7,5),crotonGeo:new He(.09,.42,5),brick:xt(10246724,{roughness:.95}),soil:xt(3811868,{roughness:1}),stone:xt(14604232,{roughness:.9}),statue:xt(15526626,{roughness:.85}),flameOut:new ce({color:16747038,transparent:!0,opacity:.95,depthWrite:!1}),flameIn:new ce({color:16769658,depthWrite:!1}),beachUmb:[3112912,2078374,15909166,15885646,5227744,14826350,14038058,15122739].map(c=>xt(c,{roughness:.7})),loungerFrame:xt(14606050,{roughness:.5,metalness:.3}),lampBaseGeo:new Mt(.22,.3,.45,8),lampPoleGeo:new Mt(.065,.085,3,8),lampCageGeo:new Mt(.26,.2,.5,4),lampPostBarGeo:new Tt(.035,.52,.035),lampRoofGeo:new He(.3,.32,4),lampCollarGeo:new Mt(.1,.14,.1,8),lampArmGeo:new Tt(.5,.035,.035),lampKnobGeo:new Kt(.05,6,5),torchPoleGeo:new Mt(.07,.09,2.2,6),torchRingGeo:new Mt(.096,.096,.05,6),torchCupGeo:new Mt(.16,.1,.22,8),torchMetal:xt(2763310,{metalness:.4,roughness:.5}),flameOutGeo:new He(.13,.5,6),flameInGeo:new He(.07,.32,6),loungerLegGeo:new Mt(.028,.028,.34,6),loungerRailGeo:new Tt(.045,.045,1.5),loungerWheelGeo:new Mt(.075,.075,.035,8),loungerSeatGeo:new Tt(.6,.07,1.36),loungerBackGeo:new Tt(.6,.07,.74),loungerPillowGeo:new Tt(.34,.09,.16),drumGeo:new Mt(.32,.3,.9,12),drumRibGeo:new Mt(.335,.335,.055,12),drumLidGeo:new Mt(.315,.315,.04,12),drumLid:xt(10133670,{metalness:.35,roughness:.6}),stackSeatGeo:new Tt(.56,.05,.56),stackBackGeo:new Tt(.56,.5,.055),stackLegGeo:new Mt(.022,.022,.44,5),potGeo:new Mt(.8,.66,.36,9),potRimGeo:new Mt(.86,.86,.07,9),pot:xt(9065016,{roughness:.9}),potRim:xt(7619373,{roughness:.9}),stalkGeo:new Mt(.055,.085,1,7),stalk:xt(6979130,{roughness:.9}),banana:xt(3115582,{roughness:.8,side:he}),banana2:xt(4169802,{roughness:.8,side:he}),bananaFruit:xt(10468154,{roughness:.8}),bananaFruitGeo:new Mt(.022,.03,.16,5)},gc}function Sb(){let n=gn(),t=new _t,e=new W(n.seatGeo,n.chair);e.position.y=.45,e.castShadow=!0,t.add(e);let i=new W(n.backGeo,n.chair);i.position.set(0,.68,.2),i.rotation.x=.13,i.castShadow=!0,t.add(i);let s=new W(n.railGeo,n.chair);s.rotation.z=Math.PI/2,s.position.set(0,.885,.225),t.add(s);for(let o of[-.18,.18]){let r=new W(n.legGeo,n.chair);r.position.set(o,.225,-.18),r.castShadow=!0,t.add(r);let a=new W(n.stileGeo,n.chair);a.position.set(o,.47,.156),a.rotation.x=.13,a.castShadow=!0,t.add(a)}return t}function Tb(){let n=gn(),t=new _t,e=new W(n.cupBodyGeo,n.cupGlass);e.position.y=.065,t.add(e);let i=new W(n.cupDrinkGeo,n.cupDrink);i.position.y=.055,t.add(i);let s=new W(n.cupRimGeo,n.cupGlass);s.rotation.x=Math.PI/2,s.position.y=.129,t.add(s);let o=new W(n.strawGeo,n.straw);o.position.set(.016,.15,.01),o.rotation.z=-.28,t.add(o);let r=new W(new ue(.072,.1),new Bt({map:n.cupStripe,roughness:.5,side:he}));return r.position.set(0,.072,.047),t.add(r),t}function Rb(n){let t=gn(),e=new _t;if(Math.random()<.5){let u=Tb();u.position.set(-.1+(Math.random()-.5)*.4,.775,-.05+(Math.random()-.5)*.4),u.rotation.y=Math.random()*Math.PI*2,e.add(u)}let i=new W(t.tableTopGeo,t.table);i.position.y=.74,i.castShadow=!0,i.receiveShadow=!0,e.add(i);let s=new W(t.tableLipGeo,t.table);s.position.y=.72,e.add(s);let o=new W(t.tableLegGeo,t.pole);o.position.y=.37,e.add(o);let r=new W(t.tableBaseGeo,t.pole);r.position.y=.04,r.receiveShadow=!0,e.add(r);let a=new W(t.umbPoleGeo,t.pole);a.position.y=1.7,e.add(a);let c=new W(t.canopyGeo,t.canopy);c.position.y=2.45,c.castShadow=!0,e.add(c);let l=new W(t.hubGeo,t.pole);l.position.y=2.42,e.add(l);let h=new W(t.finGeo,t.finial);if(h.position.y=3.4,e.add(h),n)for(let[u,d]of[[.95,0],[-.95,0],[0,.95],[0,-.95]]){let f=Sb();f.position.set(u,0,d),f.rotation.y=Math.atan2(u,d),e.add(f)}return e}function Yp(n,t,e,i,s,o){let r=Rb(s);r.position.set(e,0,i),r.rotation.y=o!==void 0?o:Math.random()*Math.PI*2,n.add(r);let a=s?.92:.6;return t(e-a,e+a,i-a,i+a),r}function Ab(n){let t=gn(),e=new _t,i=t.palmTrunks[Math.random()*t.palmTrunks.length|0],s=new W(i,t.trunk);s.castShadow=!0,s.receiveShadow=!0,e.add(s);let o=new W(t.palmFlareGeo,t.trunkDark);o.position.y=.14,o.castShadow=!0,e.add(o);let r=new _t;r.position.copy(i.userData.top),r.rotation.y=Math.random()*ni,e.add(r);let a=new W(t.palmBootGeo,t.trunkDark);a.position.y=-.08,a.castShadow=!0,r.add(a);let c=9;for(let h=0;h<c;h++){let u=h>=c-2,d=t.palmFronds[h%t.palmFronds.length],f=u?t.brown:h%3===0?t.frondC:h%3===1?t.frondA:t.frondB,g=new W(d,f);g.rotation.order="YXZ",g.rotation.y=h/c*ni+(Math.random()-.5)*.22,g.rotation.z=u?-.55-Math.random()*.2:.34-h%3*.16,g.rotation.x=(Math.random()-.5)*.25,g.scale.setScalar(.86+h%3*.11),g.castShadow=!0,r.add(g)}let l=new W(t.spearGeo,t.frondB);l.rotation.z=1.32,l.rotation.y=Math.random()*ni,l.position.y=.05,r.add(l);for(let h=0;h<5;h++){let u=h/5*ni+Math.random(),d=new W(t.cocoGeo,t.coco);d.scale.setScalar(.72+Math.random()*.3),d.position.set(Math.cos(u)*.17,-.16-Math.random()*.12,Math.sin(u)*.17),d.castShadow=!0,r.add(d)}return e.scale.setScalar(n||1),e}function Zp(n,t,e,i,s,o){let r=Ab(o);return r.position.set(i,0,s),r.rotation.y=Math.random()*Math.PI*2,r.userData.swayPh=Math.random()*Math.PI*2,r.userData.swayAmt=.018+Math.random()*.02,n.add(r),e.push(r),t(i-.3,i+.3,s-.3,s+.3),r}function $p(){let n=gn(),t=new _t,e=new W(n.gullBodyGeo,n.gullBody);e.scale.set(1.05,.92,2.5),e.position.z=.02,t.add(e);let i=new W(n.gullHeadGeo,n.gullBody);i.position.set(0,.035,.26),t.add(i);let s=new W(n.gullBeakGeo,n.gullBeak);s.rotation.x=Math.PI/2,s.position.set(0,.025,.34),t.add(s);let o=new W(n.gullTailGeo,n.gullSkin);o.position.y=.005,t.add(o);let r=[];for(let a of[-1,1]){let c=new _t;c.position.set(a*.055,.03,.02);let l=new W(n.gullWingGeo,n.gullSkin);l.scale.x=a,c.add(l),t.add(c),r.push({pivot:c,side:a})}return t.userData.wings=r,t}function Kp(n,t,e,i){let s=gn(),o=new _t,r=new W(s.lampBaseGeo,s.iron);r.position.y=.225,r.castShadow=!0,o.add(r);let a=new W(s.lampPoleGeo,s.iron);a.position.y=2,a.castShadow=!0,o.add(a);let c=new W(s.lampCollarGeo,s.iron);c.position.y=3.32,o.add(c);for(let d of[0,Math.PI/2]){let f=new W(s.lampArmGeo,s.iron);f.position.y=3.2,f.rotation.y=d,o.add(f);for(let g of[-1,1]){let x=new W(s.lampKnobGeo,s.iron);x.position.set(Math.cos(d)*g*.25,3.2,-Math.sin(d)*g*.25),o.add(x)}}let l=new W(s.lampCageGeo,s.lampGlass);l.rotation.y=Math.PI/4,l.position.y=3.6,o.add(l);for(let d=0;d<4;d++){let f=d/4*ni,g=new W(s.lampPostBarGeo,s.iron);g.position.set(Math.cos(f)*.225,3.6,Math.sin(f)*.225),g.rotation.y=-f,g.rotation.z=.06,o.add(g)}let h=new W(s.lampRoofGeo,s.iron);h.rotation.y=Math.PI/4,h.position.y=3.96,o.add(h);let u=new ys(new $i({map:s.glow,color:16767392,transparent:!0,opacity:.3,depthWrite:!1}));return u.scale.set(1.6,1.6,1),u.position.y=3.6,o.add(u),o.position.set(e,0,i),n.add(o),t(e-.28,e+.28,i-.28,i+.28),o}function Jp(n,t,e,i,s){let o=gn(),r=new _t,a=new W(o.torchPoleGeo,o.bamboo);a.position.y=1.1,a.castShadow=!0,r.add(a);for(let d of[.5,1.1,1.7]){let f=new W(o.torchRingGeo,o.bambooRing);f.position.y=d,r.add(f)}let c=new W(o.torchCupGeo,o.torchMetal);c.position.y=2.28,c.castShadow=!0,r.add(c);let l=new W(o.flameOutGeo,o.flameOut);l.position.y=2.62,l.userData.ph=Math.random()*6.28,r.add(l),e.push(l);let h=new W(o.flameInGeo,o.flameIn);h.position.y=2.6,h.userData.ph=l.userData.ph,r.add(h),e.push(h);let u=new ys(new $i({map:o.glow,color:16757322,transparent:!0,opacity:.4,depthWrite:!1}));return u.scale.set(1.5,1.5,1),u.position.y=2.62,r.add(u),r.position.set(i,0,s),n.add(r),t(i-.16,i+.16,s-.16,s+.16),r}function qh(n,t,e,i,s){let o=gn(),r=new _t,a=qp(s,"lounger",{roughness:.7}),c=new W(o.loungerSeatGeo,a);c.position.set(0,.36,.06),c.castShadow=!0,c.receiveShadow=!0,r.add(c);let l=new W(o.loungerBackGeo,a);l.position.set(0,.53,-.77),l.rotation.x=.62,l.castShadow=!0,r.add(l);let h=new W(o.loungerPillowGeo,o.loungerFrame);h.position.set(0,.83,-.96),h.rotation.x=.62,r.add(h);for(let u of[-.3,.3]){let d=new W(o.loungerRailGeo,o.loungerFrame);d.position.set(u,.325,.02),r.add(d);for(let g of[-.58,.62]){let x=new W(o.loungerLegGeo,o.loungerFrame);x.position.set(u,.155,g),x.castShadow=!0,r.add(x)}let f=new W(o.loungerWheelGeo,o.iron);f.rotation.z=Math.PI/2,f.position.set(u,.075,-.72),r.add(f)}return r.position.set(t,0,e),r.rotation.y=i,n.add(r),r}function jp(n){let t=gn(),e=new W(t.ballGeo,t.ballWhite);e.scale.setScalar(n);for(let i=0;i<3;i++){let s=new W(t.ballGore[i],t.ballCols[i]);e.add(s)}for(let i of[1,-1]){let s=new W(t.ballCapGeo,t.ballWhite);s.scale.y=i,e.add(s)}return e.castShadow=!0,e.userData.radius=.35*n,e}function Qp(n){let t=gn(),e=new W(t.surfGeo,qp(n,"surf",{roughness:.4})),i=new W(t.surfStringerGeo,t.surfStringer);e.add(i);let s=new W(t.surfFinGeo,t.surfFin);return e.add(s),e.castShadow=!0,e}function t0(n,t,e,i,s,o,r){let a=gn(),c=[];for(let h=0;h<=r;h++){let u=h/r,d=t+(i-t)*u,f=e+(s-e)*u,g=Math.sin(u*Math.PI)*.55;c.push(new D(d,o-g,f))}let l=new qa(new Me().setFromPoints(c),a.cable);l.frustumCulled=!1,n.add(l);for(let h=0;h<=r;h++){let u=c[h],d=new W(a.bulbLitGeo,a.bulbLit[h%a.bulbLit.length]);d.position.set(u.x,u.y-.075,u.z),d.scale.set(1.15,1.5,1.15),n.add(d)}}var So=["kick","hat","snare","n0","n1","n2","n3"],yc=[72,75,79,84],e0=2.5,Cb=8,Pb=10,n0=n=>440*2**((n-69)/12);function vc(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function wo(n,t){let e=n.createGain();return e.gain.value=t,e}function i0(n,t,e,i){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,i!=null&&(s.Q.value=i),s}function Yh(n,t,e,i){n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(t,i+e)}function Lb(n,t){let e=Math.max(1,n.sampleRate*t|0),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0);for(let o=0;o<e;o++)s[o]=Math.random()*2-1;return i}function Sr(n,t,e,i,s){let o=wo(n,1e-4);return o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(e,t+i),o.gain.exponentialRampToValueAtTime(1e-4,t+s),o}function Zh(n,t){return!n||!t?1/0:Math.hypot((n.x??0)-(t.x??0),(n.z??0)-(t.z??0))}function Ec(){if(typeof window>"u"||Ec._on)return;Ec._on=!0;let n=()=>{if(!an._c){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;an._c=new t}an._c.state==="suspended"&&an._c.resume()};window.addEventListener("pointerdown",n),window.addEventListener("keydown",n),window.addEventListener("touchstart",n)}function an(n){if(Ec(),n&&(an._c=n),!an._c){let t=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null;if(!t)return null;an._c=new t}return an._c.state==="suspended"&&an._c.resume(),an._c}Ec();function s0(n=118){let t={steps:16,bpm:n};for(let e of So)t[e]=new Array(16).fill(0);return t}function $h(n){let t=s0(n?.bpm||118);if(!n)return t;for(let e of So){let i=n[e];if(i)for(let s=0;s<16;s++)t[e][s]=i[s]?1:0}return t}function o0(){let n=s0(118);for(let t=0;t<16;t++)(t&3)===0&&(n.kick[t]=1),(t&1)===0&&(n.hat[t]=1);return n.hat[3]=1,n.hat[11]=1,n.snare[4]=1,n.snare[12]=1,n.snare[14]=1,n.n0[0]=1,n.n2[4]=1,n.n1[8]=1,n.n0[10]=1,n.n3[12]=1,n}function Ib(n,t,e){let i=vc(n,"sine",148);i.frequency.setValueAtTime(148,e),i.frequency.exponentialRampToValueAtTime(42,e+.11);let s=Sr(n,e,.78,.004,.22);i.connect(s).connect(t),i.start(e),i.stop(e+.24)}function Db(n,t,e,i,s){let o=n.createBufferSource();o.buffer=e;let r=i0(n,"highpass",s?5200:7600,.7),a=Sr(n,i,s?.16:.11,.002,s?.14:.045);o.connect(r).connect(a).connect(t),o.start(i),o.stop(i+(s?.16:.06))}function Ub(n,t,e,i){let s=n.createBufferSource();s.buffer=e;let o=i0(n,"bandpass",1800,.85),r=Sr(n,i,.28,.003,.16);s.connect(o).connect(r).connect(t),s.start(i),s.stop(i+.18);let a=vc(n,"sine",188);a.frequency.exponentialRampToValueAtTime(120,i+.08);let c=Sr(n,i,.22,.004,.12);a.connect(c).connect(t),a.start(i),a.stop(i+.14)}function _c(n,t,e,i){let s=vc(n,"sine",n0(i)),o=vc(n,"triangle",n0(i));o.detune.value=7;let r=Sr(n,e,.2,.01,.38);s.connect(r),o.connect(r),r.connect(t),s.start(e),s.stop(e+.4),o.start(e),o.stop(e+.4)}function Kh(n,t,e,i={}){let s=i.peak??.46,o=wo(n,0);o.connect(t||n.destination);let r=wo(n,1),a=wo(n,.72),c=wo(n,.85),l=wo(n,.7);r.connect(o),a.connect(o),c.connect(o),l.connect(o);let h=Lb(n,.08),u=!1,d=0,f=0,g=0,x=0;function p(y,v){let C=v&15,A=e||{};A.kick?.[C]&&Ib(n,r,y),A.hat?.[C]&&Db(n,a,h,y,C===6||C===14),A.snare?.[C]&&Ub(n,c,h,y),A.n0?.[C]&&_c(n,l,y,yc[0]),A.n1?.[C]&&_c(n,l,y,yc[1]),A.n2?.[C]&&_c(n,l,y,yc[2]),A.n3?.[C]&&_c(n,l,y,yc[3])}function m(){if(!u)return;let y=15/(e?.bpm||118),v=n.currentTime+.12;for(;f<v;)p(f,g++),f+=y;d=setTimeout(m,35)}return{out:o,get running(){return u},get step(){return g&15},start(){n.state==="suspended"&&n.resume(),!u&&(u=!0,g=0,f=n.currentTime+.06,Yh(o.gain,s*x,.08,n.currentTime),m())},setMix(y,v=.5){x=Math.max(0,Math.min(1,y)),Yh(o.gain,s*x,v,n.currentTime)},stop(){u=!1,clearTimeout(d),Yh(o.gain,0,.08,n.currentTime)}}}function Hb(){if(typeof document>"u")return null;if(document.getElementById("aus101-tape-pip"))return document.getElementById("aus101-tape-pip");if(!document.getElementById("aus101-tape-css")){let t=document.createElement("style");t.id="aus101-tape-css",t.textContent="#aus101-tape-pip{position:fixed;z-index:11;pointer-events:none;left:max(10px,env(safe-area-inset-left,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));width:28px;height:16px;border-radius:2px;background:#1a1a1e;box-shadow:inset 0 0 0 1px #c84;opacity:0;transition:opacity .2s}#aus101-tape-pip[data-on='1']{opacity:.92}#aus101-tape-pip i{display:block;margin:4px 4px 0;height:5px;background:#e07030;border-radius:1px}",document.head.appendChild(t)}let n=document.createElement("div");return n.id="aus101-tape-pip",n.appendChild(document.createElement("i")),document.body.appendChild(n),n}function r0({getBoomPos:n,getDjPos:t,ctx:e}={}){let i=n||(()=>({x:12,z:8})),s=t||(()=>({x:-24,z:7})),o=null,r=!1,a=null,c=null,l=!1,h=0,u=Hb(),d={start(){c?.start()},setMix(v,C){h=v,l||c?.setMix(v,C)},stop(){c?.stop()},get running(){return!!c?.running},get step(){return c?.step??0},get inserted(){return a}};function f(){u&&(u.dataset.on=r?"1":"0")}function g(v){let C=an(e);if(!C)return;let A=Kh(C,C.destination,v,{peak:.48});c?.running&&c.stop(),c=A,A.start(),A.setMix(l?0:h||1,.08)}function x(v){return o=$h(v),r=!0,y.hasTape=!0,f(),o}function p(v){if(!r||!o||!v)return null;let C=i(),A=s(),S=Zh(v,C),I=Zh(v,A),E=null;return S<=e0&&S<=I?E="boom":I<=e0&&(E="dj"),E?(r=!1,y.hasTape=!1,a=E,f(),g(o),d.setMix(1,.12),E):null}function m(v){if(r&&p(v),!a||!v||!c)return;let C=a==="boom"?i():s(),A=a==="boom"?Cb:Pb,S=Zh(v,C),I=0;S<A?I=1:I=Math.max(0,1-(S-A)/7),d.setMix(I,.28)}let _=v=>{v.code==="KeyM"&&(l=!l,c?.setMix(l?0:h,.08))};typeof window<"u"&&window.addEventListener("keydown",_);let y={hasTape:!1,saveFromSynth:x,insertNearest:p,tick:m,currentBed:d,get clip(){return o}};return y}var Nb=Math.PI*2,It={box:new Tt(1,1,1),sphereLo:new Kt(1,8,6),sphere:new Kt(1,10,8),sphereHi:new Kt(1,12,10),skull:new Kt(1,16,12),hairCrown:new Kt(1,16,10,0,Nb,0,1.44),hairBack:new Kt(1,12,8,Math.PI,Math.PI,.42,1.6),cyl:new Mt(1,1,1,8),cyl12:new Mt(1,1,1,12),limb:new Mt(1,.78,1,10),cone:new He(1,1,6),cone4:new He(1,1,4),cone10:new He(1,1,10),torus:new mn(1,.12,6,16)};function Re(n,t={}){return new Bt({color:n,roughness:.72,metalness:.04,...t})}var mi={eye:Re(1709072,{roughness:.45}),tooth:Re(16052454,{roughness:.4}),cord:Re(1710618,{roughness:.55}),beak:Re(15777856,{roughness:.5}),beakSpot:Re(13777954,{roughness:.5}),gullWhite:Re(16053488,{roughness:.7}),gullGrey:Re(10133670,{roughness:.75}),gullTip:Re(2895668,{roughness:.7}),gullLeg:Re(14711346,{roughness:.6})};function Dt(n,t,e,i=e,s=e){let o=new W(n,t);return o.castShadow=!0,o.receiveShadow=!0,o.scale.set(e,i,s),o}function kb(n,t,e,{crown:i=1.06,back:s=1.09,tilt:o=-.1}={}){let r=Dt(It.hairCrown,t,e*.99*i,e*1.05*i,e*1.02*i);r.rotation.x=o,n.add(r);let a=Dt(It.hairBack,t,e*1*s,e*1.06*s,e*1.03*s);return a.rotation.x=o*.5,n.add(a),r}function Tr({height:n=1.7,skin:t=13010498,hair:e=2759186,shirt:i=null,sleeves:s=!1,bottoms:o=2771562,cover:r="shorts",footwear:a="bare",shoe:c=2761760,shoulderW:l=.38,chestD:h=.18,chestW:u=.3,hipW:d=.24,armR:f=.042,legR:g=.055}){let x=new _t,p=n/1.7,m=Re(t),_=Re(e,{roughness:.85}),y=i==null?null:Re(i),v=Re(o),C=Re(c,{roughness:.62}),A=y||m,S=y&&s?y:m,I=.12*p,E=.12*p,T=a==="boot"?.11*p:.058*p,U=n-I-.01*p,Y=U-I*1.02-E*.5,q=.52*n,P=Math.max(.28*p,Y-q),z=q,B=(z-T)*.47,F=(z-T)*.53,Z=.28*p,K=.26*p,M=f*p,N=g*p,w=Dt(It.box,v,d,.2*p,h*.98);w.position.y=q-.03*p,x.add(w);let k=Dt(It.box,A,u,P,h);k.position.y=q+P*.5-.02*p,x.add(k);let H=Dt(It.box,A,(u+l)*.5,.14*p,h*.94);H.position.y=Y-.13*p,x.add(H);let J=Dt(It.box,A,l*.94,.13*p,h*.92);J.position.y=Y-.04*p,x.add(J);let G=U-I*.6,et=Y-.06*p,ct=Dt(It.cyl12,m,.052*p,G-et,.05*p);ct.position.y=(G+et)*.5,x.add(ct);let ft=Dt(It.sphereLo,A,.1*p,.055*p,.075*p);ft.position.y=Y+.005*p,x.add(ft);let lt=new _t;lt.position.y=U;let Et=Dt(It.skull,m,I*.94,I*1.03,I);lt.add(Et);let O=Dt(It.sphere,m,I*.58,I*.4,I*.62);O.position.set(0,-I*.58,I*.3),lt.add(O);for(let V of[-1,1]){let j=Dt(It.sphere,mi.eye,.016*p);j.position.set(V*.038*p,.012*p,I*.8),lt.add(j);let ut=Dt(It.sphereLo,m,.014*p,.03*p,.018*p);ut.position.set(V*I*.92,-.004*p,-.01*p),lt.add(ut)}let mt=Dt(It.cone4,m,.014*p,.03*p,.03*p);mt.rotation.x=Math.PI/2,mt.position.set(0,-.006*p,I*.84),lt.add(mt),x.add(lt);let nt=kb(lt,_,I),ht=[];for(let V of[-1,1]){let j=new _t;j.name=V<0?"armL":"armR",j.position.set(V*(l*.5-M*.5),Y-.015*p,0),j.rotation.z=V*.07;let ut=Dt(It.sphere,S,M*1.5,M*1.85,M*1.45);ut.position.y=-M*.45,j.add(ut);let pt=Dt(It.limb,S,M*1.1,Z,M*1.1);pt.position.y=-Z*.5,j.add(pt);let Rt=Dt(It.sphereLo,S,M*.94);Rt.position.y=-Z,j.add(Rt);let bt=Dt(It.limb,S,M*.94,K,M*.94);bt.position.y=-Z-K*.5,j.add(bt);let St=new _t;St.name="hand",St.position.y=-Z-K;let Q=Dt(It.box,m,.058*p,.088*p,.032*p);Q.position.y=-.044*p;let gt=Dt(It.box,m,.052*p,.05*p,.026*p);gt.position.y=-.105*p;let at=Dt(It.box,m,.018*p,.04*p,.018*p);at.position.set(V*.038*p,-.052*p,.012*p),at.rotation.z=V*.65,St.add(Q,gt,at),j.add(St),x.add(j),ht.push(j)}let X=r==="bikini"?m:v,ot=r==="pants"?v:m,rt=a==="bare"?m:C,R=[],b=[];for(let V of[-1,1]){let j=new _t;j.name=V<0?"legL":"legR",j.position.set(V*d*.3,q,0);let ut=Dt(It.sphere,X,N*1.3,N*1.35,N*1.25);ut.position.y=-.035*p,j.add(ut);let pt=Dt(It.limb,X,N*1.12,F,N*1.1);pt.position.y=-F*.5,j.add(pt);let Rt=Dt(It.sphereLo,ot,N*.92);Rt.position.y=-F,j.add(Rt);let bt=Dt(It.limb,ot,N*.86,B,N*.86);bt.position.y=-F-B*.5,j.add(bt);let St=Dt(It.sphereLo,rt,N*.62);St.position.y=-F-B,j.add(St);let Q=new _t;Q.name="foot",Q.position.y=-F-B;let gt=a==="boot"?.07*p:.036*p,at=a==="boot"?.26*p:.25*p,yt=a==="bare"?.094*p:.104*p,Ot=Dt(It.box,rt,yt,gt,at);Ot.position.set(0,-T+gt*.5,.062*p),Q.add(Ot);let zt=Dt(It.sphereLo,rt,yt*.5,T*.78,.085*p);zt.position.set(0,-T*.34,.028*p),Q.add(zt);let Nt=Dt(It.sphereLo,rt,yt*.48,T*.62,.038*p);if(Nt.position.set(0,-T*.42,-.052*p),Q.add(Nt),a==="shoe"){let Ut=Dt(It.box,C,yt*.96,.05*p,.13*p);Ut.position.set(0,-T+gt+.02*p,.075*p),Q.add(Ut)}if(a==="boot"){let Ut=Dt(It.cyl,C,N*.9,.14*p,N*.9);Ut.position.y=.045*p,Q.add(Ut)}j.add(Q),x.add(j),R.push(j),b.push(Q)}return x.userData.body={head:lt,skull:Et,hairCap:nt,headY:U,headR:I,shoulderY:Y,hipY:q,thighH:F,shinH:B,footH:T,scale:p,skinM:m,hairM:_,chestD:h,chestW:u,armL:ht[0],armR:ht[1],legL:R[0],legR:R[1],footL:b[0],footR:b[1]},x.userData.skinMats=[m],x.userData.bareColor=m.color.clone(),x.userData.coverage=0,x.userData.paintTarget=i==null,x}function Ob(n,t){if(n.userData.kneeHinge)return n.userData.kneeHinge;let e=new _t;e.name="knee",e.position.y=t,n.add(e);for(let i of[...n.children])i===e||i.position.y>t-.001||(i.position.y-=t,e.add(i));return n.userData.kneeHinge=e,e}var Bb=(n,t,e)=>n<t?t:n>e?e:n;function u0(n,t,e={}){let i=n?.userData?.body;if(!i)return null;let{thigh:s=Math.PI/2,spread:o=.06,floorY:r=0,lift:a=i.scale*.06}=e,c=t+a,l=c-i.thighH*Math.cos(s),h=0;if(r!=null){let u=(l-r-i.footH)/i.shinH;h=u>=1?0:-Math.acos(Bb(u,-1,1))}for(let[u,d,f]of[[i.legL,i.footL,-1],[i.legR,i.footR,1]]){if(!u)continue;let g=Ob(u,-i.thighH);u.rotation.set(-s,0,f*o),g.rotation.x=s+h,d&&(d.rotation.x=-h)}return n.position.y=c-i.hipY,{hipY:c,kneeY:l,kneeZ:i.thighH*Math.sin(s),footY:l-i.shinH*Math.cos(h)-i.footH}}function zb(n,t){let e=n.userData.body.scale,i=Dt(It.torus,mi.cord,.058*e);i.position.y=t,i.rotation.x=Math.PI/2,n.add(i);let s=Dt(It.cone4,mi.tooth,.018*e,.05*e,.018*e);s.position.set(0,t-.055*e,.045*e),s.rotation.x=.4,n.add(s)}function xn({hair:n=16041009,shorts:t=2060152,skin:e=13934698}={}){let i=Tr({height:1.78,skin:e,hair:n,shirt:null,sleeves:!1,bottoms:t,cover:"shorts",footwear:"bare",shoulderW:.5,chestW:.36,chestD:.22,hipW:.26,armR:.05,legR:.062}),{head:s,headR:o,shoulderY:r,hipY:a,scale:c,chestD:l,hairM:h,skinM:u}=i.userData.body,d=Dt(It.sphereHi,h,o*.78,o*.34,o*.66);d.position.set(0,o*.74,o*.42),d.rotation.x=-.55,s.add(d),zb(i,r+.05*c);let f=Re(e,{roughness:.5,metalness:.06});for(let x of[-1,1]){let p=Dt(It.sphereHi,f,.098*c,.062*c,.055*c);p.position.set(x*.082*c,r-.14*c,l*.5-.042*c),i.add(p)}let g=Re(e,{roughness:.48,metalness:.08});for(let x=0;x<3;x++)for(let p of[-1,1]){let m=Dt(It.sphere,g,.052*c,.031*c,.046*c);m.position.set(p*.05*c,a+.28*c-x*.066*c,l*.5-.032*c),i.add(m)}return i.userData.skinMats=[...i.userData.skinMats,f,g],i.userData.kind="ken",i.userData.ageBand="adult",i.userData.paintTarget=!0,i.name="ken",i}function si({hair:n=13214247,bikini:t=14826874,skin:e=14725258}={}){let i=Tr({height:1.68,skin:e,hair:n,shirt:null,sleeves:!1,bottoms:t,cover:"bikini",footwear:"bare",shoulderW:.36,chestW:.26,chestD:.16,hipW:.26,armR:.036,legR:.05}),{head:s,headY:o,headR:r,hipY:a,shoulderY:c,scale:l,chestD:h,chestW:u,hairM:d}=i.userData.body,f=Re(t,{roughness:.62}),g=Dt(It.sphereHi,d,r*1.02,r*1.5,r*.8);g.position.set(0,o-r*1.05,-r*.42),i.add(g);for(let _ of[-1,1]){let y=Dt(It.sphere,d,r*.26,r*.9,r*.34);y.position.set(_*r*.86,o-r*.55,r*.12),i.add(y)}let x=Dt(It.sphere,d,r*.8,r*.34,r*.42);x.position.set(0,r*.55,r*.66),x.rotation.x=-.35,s.add(x);for(let _ of[-1,1]){let y=Dt(It.sphereHi,f,.062*l,.055*l,.05*l);y.position.set(_*.056*l,c-.13*l,h*.5-.028*l),i.add(y)}let p=Dt(It.box,f,u*1.03,.016*l,h*1.04);p.position.set(0,c-.062*l,0),i.add(p);let m=Dt(It.box,f,.23*l,.1*l,h*1.02);return m.position.set(0,a-.03*l,.005*l),i.add(m),i.userData.kind="babe",i.userData.ageBand="adult",i.userData.paintTarget=!0,i.name="babe",i}function a0(){let n=Tr({height:1.72,skin:12888194,hair:1709586,shirt:1315860,sleeves:!0,bottoms:4867640,cover:"pants",footwear:"shoe",shoe:2761756,shoulderW:.34,chestW:.28,chestD:.17,hipW:.24,armR:.038,legR:.052}),{shoulderY:t,hipY:e,scale:i,chestD:s}=n.userData.body,o=Dt(It.box,Re(5902352),.13*i,.13*i,.02*i);o.position.set(0,t-.2*i,s*.5-.004*i),n.add(o);let r=Re(3815468,{roughness:.78});for(let a of[-1,1]){let c=Dt(It.box,r,.08*i,.09*i,.045*i);c.position.set(a*.1*i,e-.16*i,s*.5-.026*i),n.add(c)}return n.userData.kind="sigma_07",n.userData.ageBand="adult",n.userData.paintTarget=!1,n.name="SIGMA_07",n}function c0(){let n=Tr({height:1.7,skin:13223102,hair:855312,shirt:1842206,sleeves:!0,bottoms:1447448,cover:"pants",footwear:"boot",shoe:1118483,shoulderW:.36,chestW:.3,chestD:.18,hipW:.26,armR:.04,legR:.054}),{head:t,headY:e,headR:i,hipY:s,scale:o,hairM:r}=n.userData.body,a=Re(1842206,{roughness:.88}),c=Dt(It.sphereHi,r,i*1.06,i*1.85,i*.86);c.position.set(0,e-i*1.35,-i*.32),n.add(c);for(let f of[-1,1]){let g=Dt(It.sphere,r,i*.34,i*1.15,i*.42);g.position.set(f*i*.82,e-i*.75,i*.18),n.add(g)}let l=Dt(It.sphere,r,i*.9,i*.44,i*.46);l.position.set(i*.16,i*.42,i*.62),l.rotation.set(-.3,0,.24),t.add(l);let h=Dt(It.box,a,.37*o,.62*o,.21*o);h.position.set(0,s+.17*o,-.02*o),n.add(h);let u=Dt(It.cyl,Re(14209220,{roughness:.5}),.006*o,.07*o,.006*o);u.rotation.z=Math.PI/2,u.rotation.y=.4,u.position.set(.09*o,e-.05*o,i*.85),n.add(u);let d=Dt(It.sphere,Re(12599328,{roughness:.4,metalness:.1,emissive:4198408}),.007*o);return d.position.set(.125*o,e-.048*o,i*.9),n.add(d),n.userData.kind="goth",n.userData.ageBand="adult",n.userData.paintTarget=!1,n.name="goth",n}function l0(){let n=Tr({height:1.15,skin:15780256,hair:7028255,shirt:4045e3,sleeves:!0,bottoms:2972300,cover:"shorts",footwear:"shoe",shoe:15258186,shoulderW:.28,chestW:.22,chestD:.14,hipW:.2,armR:.034,legR:.046}),{head:t,headY:e,headR:i,scale:s,hairM:o}=n.userData.body,r=Dt(It.sphere,o,i*.9,i*.3,i*.72);r.position.y=i*.5,t.add(r);let a=Re(16115363,{roughness:.86}),c=Dt(It.cyl12,a,.18*s,.02*s,.18*s);c.position.y=e+i*.5;let l=Dt(It.cyl12,a,.105*s,.1*s,.105*s);l.position.y=e+i*.78;let h=Dt(It.sphere,a,.105*s,.05*s,.105*s);return h.position.y=e+i*.78+.05*s,n.add(c,l,h),n.userData.kind="kid",n.userData.ageBand="child",n.userData.paintTarget=!1,n.name="kid",n}function h0(){let n=new _t,t=mi.gullWhite,e=mi.gullGrey,i=mi.gullLeg,s=Dt(It.sphereHi,t,.072,.082,.165);s.position.set(0,.165,.005),s.rotation.x=.17,n.add(s);let o=Dt(It.sphere,t,.064,.07,.072);o.position.set(0,.19,.08),n.add(o);let r=Dt(It.sphereHi,e,.066,.055,.145);r.position.set(0,.209,-.012),r.rotation.x=.17,n.add(r);let a=Dt(It.cone,t,.052,.15,.048);a.rotation.x=-Math.PI/2+.42,a.position.set(0,.198,-.125),n.add(a);let c=Dt(It.box,t,.082,.012,.108);c.rotation.x=.28,c.position.set(0,.222,-.203),n.add(c);let l=Dt(It.limb,t,.038,.09,.04);l.position.set(0,.248,.088),l.rotation.x=.6,n.add(l);let h=Dt(It.sphereHi,t,.043,.042,.049);h.position.set(0,.292,.117),n.add(h);let u=Dt(It.cone10,mi.beak,.016,.082,.017);u.rotation.x=Math.PI/2+.06,u.position.set(0,.286,.168),n.add(u);let d=Dt(It.sphereLo,mi.beakSpot,.0055);d.position.set(0,.2805,.176),n.add(d);for(let f of[-1,1]){let g=Dt(It.sphereLo,mi.eye,.008);g.position.set(f*.026,.3,.139),n.add(g)}for(let f of[-1,1]){let g=Dt(It.sphereHi,e,.03,.058,.13);g.position.set(f*.058,.192,-.012),g.rotation.set(.17,0,f*-.13),n.add(g);let x=new _t;x.position.set(f*.036,.191,-.062),x.rotation.set(-Math.PI/2+.1,f*.06,0);let p=Dt(It.cone,e,.015,.185,.024);p.position.y=.0925;let m=Dt(It.cone,mi.gullTip,.0058,.065,.0094);m.position.y=.1525,x.add(p,m),n.add(x)}for(let f of[-1,1]){let g=Dt(It.cyl,i,.009,.08,.009);g.position.set(f*.03,.052,.02),n.add(g);let x=Dt(It.sphereLo,i,.013,.014,.013);x.position.set(f*.03,.013,.022),n.add(x);let p=Dt(It.cone4,i,.046,.06,.011);p.rotation.x=Math.PI/2,p.position.set(f*.03,.011,.048),n.add(p)}return n.userData.kind="gull",n.userData.ageBand="gull",n.userData.paintTarget=!1,n.name="gull",n}function cn(n,t,e,i,s=0){return n.position.set(t,e,i),n.rotation.y=s,n}function d0(n){let t=Jt.boardwalkZ+3.6,e=.18,i=[{mesh:cn(xn(),-8.2,0,4,.4),kind:"ken",ageBand:"adult"},{mesh:cn(si(),6.2,0,2.2,-.6),kind:"babe",ageBand:"adult"},{mesh:cn(a0(),2,e,16.5,Math.PI),kind:"sigma_07",ageBand:"adult"},{mesh:cn(c0(),11.5,0,14,-2.4),kind:"goth",ageBand:"adult"},{mesh:cn(xn({hair:16739226,shorts:1723788,skin:13406042}),9.8,0,6.2,-1.1),kind:"ken",ageBand:"adult"},{mesh:cn(si({hair:3809816,bikini:3786452,skin:14262392}),-4.2,0,-1.8,.2),kind:"babe",ageBand:"adult"},{mesh:cn(l0(),-3.5,e,15.5,.8),kind:"kid",ageBand:"child"},{mesh:cn(h0(),8,1.2,t,-.3),kind:"gull",ageBand:"gull"},{mesh:cn(xn({hair:16048762,shorts:14826299,skin:14721120}),-7.2,.38,Jt.boardwalkZ+6.2,1.4),kind:"ken",ageBand:"adult"},{mesh:cn(si({hair:15909166,bikini:16739226,skin:15251608}),25.2,0,7.4,-2.2),kind:"babe",ageBand:"adult"},{mesh:cn(xn({hair:6211839,shorts:15909166,skin:13931082}),-14,0,3.2,.9),kind:"ken",ageBand:"adult"},{mesh:cn(si({hair:9124394,bikini:16777215,skin:13208162}),1.4,0,-4.6,2.8),kind:"babe",ageBand:"adult"},{mesh:cn(c0(),-22,0,9.5,.3),kind:"goth",ageBand:"adult"},{mesh:cn(a0(),15.5,0,9,-1.8),kind:"sigma_07",ageBand:"adult"},{mesh:cn(h0(),-10,1.2,t,.8),kind:"gull",ageBand:"gull"},{mesh:cn(l0(),10.2,0,4.8,-.4),kind:"kid",ageBand:"child"}];for(let s of i)s.mesh.userData.kind=s.kind,s.mesh.userData.ageBand=s.ageBand,s.ageBand!=="adult"&&(s.mesh.userData.paintTarget=!1),n.add(s.mesh);return i}var Jt={width:90,depth:70,boardwalkZ:16,wetZ:-10,oceanZ:-22},bc={minX:-Jt.width/2+1,maxX:Jt.width/2-1,minZ:-Jt.depth/2+1,maxZ:Jt.depth/2-1};function Fb(){let n=document.createElement("canvas");n.width=4,n.height=256;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#1a7480"),e.addColorStop(.16,"#2a5a8c"),e.addColorStop(.3,"#6a3a9a"),e.addColorStop(.42,"#d4508c"),e.addColorStop(.5,"#ff7a48"),e.addColorStop(.62,"#e09060"),e.addColorStop(1,"#8a5048"),t.fillStyle=e,t.fillRect(0,0,4,256);let i=new rn(n);return i.colorSpace=ee,i.needsUpdate=!0,i}function Gb(){let n=document.createElement("canvas");n.width=8,n.height=64;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.32,"rgba(255,255,255,1)"),e.addColorStop(.68,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,8,64);let i=new rn(n);return i.colorSpace=ee,i.needsUpdate=!0,i}function Vb(){let n=document.createElement("canvas");n.width=64,n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.22,"rgba(255,236,190,0.9)"),e.addColorStop(.5,"rgba(255,140,70,0.35)"),e.addColorStop(1,"rgba(255,60,80,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let i=new rn(n);return i.colorSpace=ee,i.needsUpdate=!0,i}var Mc=new D(36,26,-148);function m0(n){n.background=new Vt(12868712),n.fog=new Fa(15243890,26,100);let t=new ec(3050644,13924426,.88);n.add(t);let e=new nc(16760960,2.15);return e.position.copy(Mc).setLength(72),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=2,e.shadow.camera.far=140,e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,e.shadow.bias=-5e-4,n.add(e),{hemi:t,sun:e}}var f0=[11689215,16738984,5162239,5169312];function Wb(n,t){return new ce({map:n,color:t,transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:he})}function Xb(n){let t=[],e=[],i=[],s=new W(new Kt(180,16,12),new ce({map:Fb(),side:on,fog:!1,depthWrite:!1}));s.renderOrder=-10,n.add(s);let o=Gb(),r=new ue(230,14);for(let g=0;g<12;g++){let x=new W(r,Wb(o,f0[g%f0.length])),p=g>=8;x.userData.y0=p?108-(g-8)*8:122-g*7,x.userData.dieY=p?36:20+g%3*5,x.userData.spd=(p?3.4:4.6)+g*.18,x.userData.peak=p?.34:.5,x.position.set((g%2?10:-10)+(g-5)*2,x.userData.y0-g*3.2,p?-8-(g-8)*10:-46-g%5*7),x.rotation.x=p?.72+g%3*.1:.14+g%4*.05,x.rotation.y=g%2?-.05:.05,x.rotation.z=g%3*.02-.02,x.renderOrder=-1,n.add(x),t.push(x)}let a=new W(new Kt(7.2,16,12),new ce({color:16774340,fog:!1,depthWrite:!1}));a.position.copy(Mc),a.renderOrder=1,n.add(a);let c=Vb(),l=[[16774864,56,.95],[16756832,92,.55],[16738952,140,.32]];for(let[g,x,p]of l){let m=new ys(new $i({map:c,color:g,transparent:!0,opacity:p,depthWrite:!1,fog:!1,blending:fi}));m.position.copy(Mc),m.scale.set(x,x,1),m.userData.baseOp=p,m.renderOrder=2,n.add(m),i.push(m)}let h=new W(new ue(110,5.5),new ce({map:c,color:16771248,transparent:!0,opacity:.42,depthWrite:!1,fog:!1,blending:fi,side:he}));h.position.copy(Mc),h.lookAt(0,12,0),h.userData.baseOp=.42,h.renderOrder=2,n.add(h),i.push(h);let u=new Kt(1,8,6),d=new Bt({color:16765636,roughness:1,metalness:0,fog:!1}),f=[[18,38,-88,11,2.6,5.5],[52,34,-96,9,2.2,4.8],[-28,42,-80,10,2.4,5.2],[8,48,-60,7.5,2,4.2],[-48,36,-70,8.5,2.1,4.6],[40,30,-54,6.5,1.8,3.6],[-12,44,-110,12,2.8,6],[64,40,-40,7,1.9,3.8]];for(let[g,x,p,m,_,y]of f){let v=new W(u,d);v.position.set(g,x,p),v.scale.set(m,_,y),v.userData.spd=.18+Math.abs(g)*.002,v.userData.y0=x,v.userData.ph=g*.07,n.add(v),e.push(v)}return{strips:t,clouds:e,glares:i}}var qb=[[-8.2,4],[6.2,2.2],[2,16.5],[11.5,14],[9.8,6.2],[-4.2,-1.8],[-3.5,15.5],[8,19.6],[-7.2,22.2],[25.2,7.4],[-14,3.2],[1.4,-4.6],[-22,9.5],[15.5,9],[-10,19.6],[10.2,4.8],[-24.5,3.9],[-22.3,4.5],[-21,5.8],[-22.8,2.7],[-20.6,3.6]];function Ts(n,t,e){let i=e*e;for(let[s,o]of qb){let r=s-n,a=o-t;if(r*r+a*a<i)return!1}return!0}function g0(n,t){let e=gn(),i=t.addCollider,s=[],o=[],r=[],a=[],c=[],{strips:l,clouds:h,glares:u}=Xb(n),d=Hn(Wh());d.repeat.set(48,26);let f=new W(new ue(Jt.width+30,66),new Bt({map:d,roughness:1,color:15784352}));f.rotation.x=-Math.PI/2,f.position.z=15,f.receiveShadow=!0,n.add(f);let g=new W(new ue(Jt.width+20,14),new Bt({color:12886128,roughness:.42,metalness:.08}));g.rotation.x=-Math.PI/2,g.position.set(0,.028,Jt.wetZ),g.receiveShadow=!0,n.add(g);let x=new ue(Jt.width+50,36,40,10),p=new W(x,new Bt({color:1548984,roughness:.62,metalness:.05}));p.rotation.x=-Math.PI/2,p.position.set(0,.06,Jt.oceanZ-10),n.add(p);let m=Float32Array.from(x.attributes.position.array);for(let Q=0;Q<7;Q++){let gt=new W(new ue(Jt.width+24,1.9),new ce({color:15267572,transparent:!0,opacity:0,depthWrite:!1}));gt.rotation.x=-Math.PI/2,gt.userData.spd=1.8+Q*.28,gt.userData.z0=Jt.wetZ-16+Q*1.15,gt.userData.dieZ=Jt.wetZ+2,gt.position.set(0,.08,gt.userData.z0),n.add(gt),c.push(gt)}let _=xc(e.woodMap,28,6),y=kt(Jt.width*.78,.2,9.2,new Bt({map:_,roughness:.88}));y.position.set(0,.12,Jt.boardwalkZ),n.add(y);for(let Q=-32;Q<=32;Q+=4){let gt=kt(.16,1.15,.16,e.postWood);gt.position.set(Q,.7,Jt.boardwalkZ+4.2),n.add(gt),i(Q-.18,Q+.18,Jt.boardwalkZ+4,Jt.boardwalkZ+4.4)}let v=kt(Jt.width*.78,.1,.12,e.postWood);v.position.set(0,1.18,Jt.boardwalkZ+4.2),n.add(v);let C=new _t,A=kt(2.4,3.6,2.4,xt(15983466,{roughness:.85}));A.position.y=1.8,C.add(A);let S=kt(3,1.9,3,xt(16250090,{roughness:.9}));S.position.y=4.15,C.add(S);let I=kt(3.3,.18,3.3,xt(13123630,{roughness:.55}));I.position.y=5.2,C.add(I);let E=kt(.06,1.4,.9,xt(13123630));E.position.set(.4,6,0),C.add(E);let T=kt(.06,1.4,.45,xt(15983466));T.position.set(.41,6,-.22),C.add(T),C.position.set(20,0,Jt.boardwalkZ-2),n.add(C),i(18.4,21.6,Jt.boardwalkZ-3.6,Jt.boardwalkZ-.4);let U=new _t,Y=kt(3.4,2.4,2.6,e.wall);Y.position.y=1.2,U.add(Y);let q=Xh();q.repeat.set(3,2);let P=kt(3.8,.16,3,new Bt({map:q,color:14178884,roughness:.55,metalness:.15}));P.position.y=2.5,U.add(P);let z=new W(new ue(2.8,.7),new ce({map:bo("ZINC","FREE SPF"),side:he}));z.position.set(0,2.05,1.35),U.add(z),U.position.set(8,0,Jt.boardwalkZ-1),n.add(U),i(6.2,9.8,Jt.boardwalkZ-2.3,Jt.boardwalkZ+.3);let B=new _t,F=kt(2.4,2,2.2,xt(16250090));F.position.set(-2,1.15,0),B.add(F);let Z=kt(4.2,2.3,2.4,xt(16775163));Z.position.set(1.1,1.3,0),B.add(Z);let K=kt(4.25,.28,2.42,xt(16739226));K.position.set(1.1,1.55,0),B.add(K);let M=kt(1.4,.7,.08,xt(9357544,{roughness:.2,metalness:.3}));M.position.set(1.3,1.85,1.22),B.add(M);let N=kt(1.6,.08,.7,xt(16739226));N.position.set(1.3,1.42,1.35),B.add(N);for(let Q of[-2.3,2.9])for(let gt of[-.85,.85]){let at=new W(new Mt(.38,.38,.22,12),xt(1710618));at.rotation.z=Math.PI/2,at.position.set(Q,.38,gt),B.add(at)}let w=new W(new He(.28,.7,8),xt(15909166));w.position.set(1.1,3,0),B.add(w);let k=new W(new Kt(.26,10,8),xt(16758472));k.position.set(1.1,3.38,0),B.add(k);let H=new W(new ue(2.2,.55),new ce({map:bo("SOFT SERVE","GOLD COAST"),side:he}));H.position.set(1.1,2.35,1.24),B.add(H),B.position.set(-14.5,0,Jt.boardwalkZ+6.6),B.rotation.y=-.15,n.add(B),i(-17.7,-10.7,Jt.boardwalkZ+4.8,Jt.boardwalkZ+8.4);let J=new _t,G=xt(16747069,{roughness:.85,side:he}),et=kt(2.6,2.2,2.4,G);et.position.y=1.15,J.add(et);let ct=kt(1.1,1.8,.06,xt(16760954,{roughness:.8}));ct.position.set(.4,.95,1.24),ct.rotation.y=-.35,J.add(ct);let ft=new W(new He(1.9,.7,4),xt(15228236));ft.rotation.y=Math.PI/4,ft.position.y=2.55,J.add(ft);let lt=new W(new ue(2,.5),new ce({map:bo("SPRAY TAN","$29"),side:he}));lt.position.set(0,2.05,1.28),J.add(lt),J.position.set(29.5,0,4.5),J.rotation.y=-.6,n.add(J),i(28.1,30.9,3.1,5.9);let Et=new _t,O=new W(new Mt(.22,.28,1.8,8),xt(3979384));O.position.y=.95,Et.add(O);for(let Q=0;Q<5;Q++){let gt=new W(new Tt(.9,.06,.22),xt(3120714));gt.position.set(Math.cos(Q/5*Math.PI*2)*.35,1.85,Math.sin(Q/5*Math.PI*2)*.35),gt.rotation.y=Q/5*Math.PI*2,Et.add(gt)}Et.position.set(4.5,0,11),n.add(Et);let mt=new _t,nt=kt(1.2,.12,1.1,xt(15983466));nt.position.y=2.1,mt.add(nt);for(let[Q,gt]of[[-.5,-.45],[.5,-.45],[-.5,.45],[.5,.45]]){let at=kt(.1,2.1,.1,xt(13123630));at.position.set(Q,1.05,gt),mt.add(at)}let ht=kt(1.2,.9,.08,xt(13123630));ht.position.set(0,2.6,-.5),mt.add(ht),mt.position.set(22.5,0,Jt.boardwalkZ-6),n.add(mt);let X=new _t,ot=kt(.08,1.1,.08,xt(546));ot.position.y=.55,X.add(ot);let rt=kt(.28,.18,.42,xt(1710618));rt.position.set(0,1.2,.05),X.add(rt);let R=new W(new Mt(.07,.08,.16,10),xt(819));R.rotation.x=Math.PI/2,R.position.set(0,1.2,.32),X.add(R),X.position.set(-11.5,0,8.5),n.add(X);for(let[Q,gt]of[[12.5,Jt.boardwalkZ+3.4],[-1.5,Jt.boardwalkZ+3.4]]){let at=kt(.55,.85,.55,xt(2779964));at.position.set(Q,.645,gt),n.add(at),i(Q-.32,Q+.32,gt-.32,gt+.32)}t0(n,-22,Jt.boardwalkZ+3.8,22,Jt.boardwalkZ+3.8,3.1,18);let b=[[-30,14,1.1],[-29,12.5,.95],[-22,18,1.2],[-12,12,1],[12,13,1.05],[24,10,1.15],[28,17,.9],[-8,-4,.85],[16,-2,.9],[-28,0,1],[30,2,.95],[-15.5,9.8,.8]];for(let[Q,gt,at]of b)Ts(Q,gt,1.6)&&Zp(n,i,s,Q,gt,at);let V=[[-11.5,7.5,!0],[-5.5,6.5,!0],[-1.5,3,!0],[3.5,5.5,!0],[13,3,!0],[-16.5,1.5,!0],[-11,.5,!0],[17,6,!0],[-1,9.5,!0],[7.5,9,!0],[-4,-7,!1],[5,-2,!1],[12.5,-5.5,!1],[-16.5,-2.5,!1],[20.5,1,!1]];for(let[Q,gt,at]of V)Ts(Q,gt,at?2:1.4)&&Yp(n,i,Q,gt,at,Math.random()*.4);let j=[15909166,15885646,3112912,2078374,14826350];for(let Q=0;Q<10;Q++){let gt=-18+Q*4.1;Ts(gt,-6.5,1.5)&&qh(n,gt,-6.5,.05,j[Q%j.length]),Ts(gt+1.1,-3.6,1.5)&&qh(n,gt+1.1,-3.6,-.08,j[(Q+2)%j.length])}let ut=[15909166,14826299,3112900,16777215,2078374];for(let Q=0;Q<6;Q++){let gt=Qp(ut[Q%ut.length]);gt.rotation.set(-.1,.2,Math.PI/2),gt.position.set(-12.5+Q*.35,1.1,Jt.boardwalkZ+1.4),n.add(gt)}for(let[Q,gt]of[[-2.6,-1.2],[8.4,-3.4],[.6,11.5],[-12.5,-6]]){if(!Ts(Q,gt,1.1))continue;let at=jp(1);at.position.set(Q,.35,gt),n.add(at),a.push(at)}for(let Q of[-30,-18,-6,6,18,30])Ts(Q,Jt.boardwalkZ+3.2,1.2)&&Kp(n,i,Q,Jt.boardwalkZ+3.2);for(let Q of[-26,-8,4,18])Ts(Q,Jt.boardwalkZ-4.2,1.2)&&Jp(n,i,o,Q,Jt.boardwalkZ-4.2);for(let Q=0;Q<8;Q++){let gt=$p();gt.position.set(-20+Q*6,4.5+Q%3,-6+Q%4*3),gt.userData.phase=Q*.7,n.add(gt),r.push(gt)}let pt={x:7,z:-29},Rt=Kb();Rt.position.set(pt.x,.15,pt.z),Rt.rotation.y=1.92,n.add(Rt);let bt=jb(n,i),St=Qb(n);return{ocean:p,oceanBase:m,waves:c,palms:s,gulls:r,balls:a,flames:o,bounds:bc,piano:pt,isWood(Q,gt){return Math.abs(gt-Jt.boardwalkZ)<4.8&&Math.abs(Q)<Jt.width*.4},update(Q){let gt=p.geometry.attributes.position;for(let yt=0;yt<gt.count;yt++){let Ot=yt*3,zt=m[Ot],Nt=-m[Ot+1];gt.array[Ot+2]=Math.sin(zt*.12+Q*1.35)*.16+Math.sin(Nt*.2+Q*.95)*.1}gt.needsUpdate=!0;for(let yt of c){yt.position.z+=yt.userData.spd*.016;let Ot=yt.userData.dieZ-yt.userData.z0,zt=(yt.position.z-yt.userData.z0)/Math.max(.001,Ot);zt<.12?yt.material.opacity=zt/.12:zt>.72?yt.material.opacity=Math.max(0,1-(zt-.72)/.28):yt.material.opacity=.55,yt.position.z>=yt.userData.dieZ&&(yt.position.z=yt.userData.z0,yt.material.opacity=0)}for(let yt of l){yt.position.y-=yt.userData.spd*.016;let Ot=yt.userData.y0-yt.userData.dieY,zt=(yt.userData.y0-yt.position.y)/Math.max(.001,Ot),Nt=yt.userData.peak;zt<.12?yt.material.opacity=zt/.12*Nt:zt>.72?yt.material.opacity=Math.max(0,1-(zt-.72)/.28)*Nt:yt.material.opacity=Nt,yt.position.y<=yt.userData.dieY&&(yt.position.y=yt.userData.y0,yt.material.opacity=0)}for(let yt of h)yt.position.x+=yt.userData.spd*.016,yt.position.y=yt.userData.y0+Math.sin(Q*.22+yt.userData.ph)*.8,yt.position.x>80&&(yt.position.x=-72);let at=.82+Math.sin(Q*1.35)*.18;for(let yt of u)yt.material.opacity=yt.userData.baseOp*at;for(let yt of r){let Ot=yt.userData.phase;yt.position.x+=Math.sin(Q*.4+Ot)*.02,yt.position.y=4.2+Math.sin(Q*1.1+Ot)*.6,yt.rotation.y=Math.sin(Q*.3+Ot)*.5}for(let yt of o){if(!yt.scale)continue;let Ot=.85+Math.sin(Q*9+(yt.userData?.ph||0))*.12;yt.scale.setScalar(Ot)}Rt.userData.tick?.(Q),bt.tick(Q);for(let yt of St)yt.tick(Q)}}}function x0(n,t){let e=t,i=-1/0;for(let s of n.children)!s.isMesh||s.geometry?.type!=="SphereGeometry"||s.position.y>=-.15||s.position.y<=i||(i=s.position.y,e=s.position.y);return e}function y0(n,t){let e=new _t;e.position.y=t,n.add(e);for(let i of[...n.children])i!==e&&i.position.y<t-.001&&(i.position.y-=t,e.add(i));return e}var Yb={deck:.06,bench:.39,lift:.137,manZ:-.1,arm:[-.33,-1.19,.37]};function p0(n,t=1){let s=(a,c)=>[-.02+(a- -.02)*t,.66+(c-.66)*t],o=new _s;o.moveTo(...s(.66,0)),o.lineTo(...s(.66,1.08)),o.quadraticCurveTo(...s(.64,1.3),...s(.3,1.33)),o.lineTo(...s(.06,1.31)),o.quadraticCurveTo(...s(-.46,1.18),...s(-.66,.56)),o.quadraticCurveTo(...s(-.78,.2),...s(-.7,0)),o.closePath();let r=new go(o,{depth:n,bevelEnabled:!1,curveSegments:6});return r.rotateX(Math.PI/2),r}function Zb(){let n=document.createElement("canvas");n.width=512,n.height=32;let t=n.getContext("2d");t.fillStyle="#f8f4ea",t.fillRect(0,0,512,32),t.fillStyle="#b0a894";for(let i=1;i<52;i++)t.fillRect(Math.round(i*512/52)-1,0,2,32);let e=new rn(n);return e.colorSpace=ee,e}function $b(n,t,e,i,s){let o=new _t,r=52,a=n/r,c=kt(n,.045,.17,i);c.position.set(0,t-.0225,e+.085),o.add(c);let l=new Xa(new Tt(a*.55,.022,.095),s,36);l.castShadow=!0;let h=new de,u=0;for(let d=0;d<r-1;d++)[0,2,3,5,6].includes(d%7)&&(h.makeTranslation(-n/2+(d+1)*a,t+.005,e+.1225),l.setMatrixAt(u++,h));return l.count=u,l.instanceMatrix.needsUpdate=!0,o.add(l),o}function Kb(){let n=new _t,t=Yb,e=gn(),i=xt(921106,{roughness:.32,metalness:.08}),s=xt(10123828,{roughness:.35,metalness:.55}),o=xt(16777215,{roughness:.42,map:Zb()}),r=xt(1315864,{roughness:.3}),a=xn({hair:1709072,shorts:1315864,skin:12291942});a.name="piano-ken",a.userData.paintTarget=!1,a.position.set(0,0,t.manZ);let c=a.userData.body,l=xt(1447452,{roughness:.62}),h=c.shoulderY-.05*c.scale,u=c.hipY-.03*c.scale,d=kt(c.chestW*1.26,h-u,c.chestD*1.22,l);d.position.set(0,(h+u)*.5,0),a.add(d);let f=kt(.1,(h-u)*.86,.03,xt(15921126,{roughness:.7}));f.position.set(0,(h+u)*.5-.02,c.chestD*.62),a.add(f);let g=kt(.095,.04,.04,xt(9314092,{roughness:.6}));g.position.set(0,h+.035,c.chestD*.58),a.add(g),u0(a,t.bench,{lift:t.lift,floorY:t.deck,thigh:Math.PI/2,spread:.12});let[x,p,m]=t.arm,_=[];for(let[ct,ft]of[[c.armL,-1],[c.armR,1]]){let lt=y0(ct,x0(ct,-.29)),Et=lt.children.find(O=>O.isGroup);ct.rotation.set(x,0,ft*.12),lt.rotation.x=p,Et&&(Et.rotation.x=m),_.push({arm:ct,hinge:lt,hand:Et})}n.add(a),a.updateMatrixWorld(!0);let y=new Un().setFromObject(_[1].hand),v=y.min.y,C=y.max.z-.065,A=C+.21,S=v+.06,I=S-.22,E=kt(1.86,.12,2.42,new Bt({map:xc(e.woodMap,4,5),roughness:.9}));E.position.set(-.05,0,.79),n.add(E);for(let ct of[.12,1.5]){let ft=new W(new Mt(.2,.2,1.8,10),xt(2907246,{roughness:.6}));ft.rotation.z=Math.PI/2,ft.position.set(-.05,-.16,ct),n.add(ft)}let T=kt(.86,.07,.34,i);T.position.set(0,t.bench-.07,t.manZ-.04),n.add(T);let U=kt(.8,.035,.29,xt(8135216,{roughness:.85}));U.position.set(0,t.bench-.017,t.manZ-.04),n.add(U);for(let ct of[-.36,.36]){let ft=kt(.05,t.bench-.105-t.deck,.26,i);ft.position.set(ct,(t.deck+t.bench-.105)/2,t.manZ-.04),n.add(ft)}let Y=kt(.68,.04,.05,i);Y.position.set(0,t.deck+.09,t.manZ-.04),n.add(Y);let q=p0(.22),P=new W(q,i);P.castShadow=!0,P.receiveShadow=!0,P.position.set(0,S,A),n.add(P);for(let[ct,ft]of[[-.56,.14],[.56,.14],[.34,1.14]]){let lt=new W(new Mt(.05,.065,I-t.deck,8),i);lt.castShadow=!0,lt.position.set(ct,(t.deck+I)/2,A+ft),n.add(lt)}let z=kt(1.42,.04,.3,i);z.position.set(0,v-.0625,C+.1),n.add(z);let B=kt(1.42,.075,.045,i);B.position.set(0,v-.0375,C-.03),n.add(B);for(let ct of[-.655,.655]){let ft=kt(.11,.175,A-C+.06,i);ft.position.set(ct,v-.0275,(C-.05+A)/2),n.add(ft)}let F=kt(1.42,.09,.09,i);F.position.set(0,v+.02,C+.225),n.add(F);let Z=new W(new ue(.4,.05),new ce({map:bo("AUS101","GOLD COAST"),transparent:!0}));Z.position.set(0,v+.03,C+.181),Z.rotation.y=Math.PI,n.add(Z);let K=$b(1.24,v,C,o,r);n.add(K);let M=new W(p0(.03,.9),xt(7033894,{roughness:.4,metalness:.5}));M.position.set(0,S+.004,A),n.add(M);for(let ct of[-.36,-.12,.12,.36]){let ft=kt(.04,.012,.94,s);ft.position.set(ct,S+.014,A+.62),n.add(ft)}let N=new _t;N.position.set(.66,S+.012,A),N.rotation.z=-.62;let w=new W(q,i);w.castShadow=!0,w.scale.y=.16,w.position.set(-.66,0,0),N.add(w),n.add(N);let k=new W(new Mt(.011,.011,.6,6),i);k.position.set(-.42,S+.3,A+.5),n.add(k);let H=kt(.86,.28,.02,i);H.position.set(0,v+.19,A+.14),H.rotation.x=.32,n.add(H);let J=kt(.3,.22,.006,xt(15921124,{roughness:.9}));J.position.set(0,v+.2,A+.118),J.rotation.x=.32,n.add(J);let G=kt(.16,I-.2-t.deck,.05,i);G.position.set(0,(t.deck+.2+I)/2,A+.06),n.add(G);for(let ct of[-.055,0,.055]){let ft=kt(.045,.016,.13,s);ft.position.set(ct,t.deck+.1,A+.02),n.add(ft)}let et=0;return n.userData.tick=ct=>{let ft=Ji.at?(performance.now()-Ji.at)/1e3:99,lt=ft<.22?1-ft/.22:0,Et=Ji.mix>.08?.35:1,O=Math.abs(Math.sin(ct*6)),mt=Math.max(lt,O*Et),nt=Math.max(lt,Math.abs(Math.sin(ct*6+.9))*Et);if(_[0].hinge.rotation.x=p+mt*.05,_[1].hinge.rotation.x=p+nt*.05,_[0].hand&&(_[0].hand.rotation.x=m+mt*.14),_[1].hand&&(_[1].hand.rotation.x=m+nt*.14),K.position.y=-mt*.007,a.rotation.z=Math.sin(ct*1.6)*.02,n.position.y=.12+Math.sin(ct*.7)*.06,Ji.mix>.08||O<.92||ct-et<.8)return;let ht=n.parent?.getObjectByName?.("AUS101");if(!ht||Math.hypot(ht.position.x-n.position.x,ht.position.z-n.position.z)>14)return;et=ct;let ot=an();ot&&Gh(ot,ot.destination,ot.currentTime+.02)},n}function Jb(){let n=[["THE SUN","IS A HOSTILE ACTOR"],["COME WITH ME","IF YOU WANT TO LIVE","(YOUR MELANOCYTES)"],["THIS UNIT","HAS BEEN REASSIGNED","TO PUBLIC HEALTH"],["NOT A NIGHTCLUB","A MELANOMA BRIEFING"],["AUS101","DOES NOT TAKE REQUESTS"],["APPLY","OR BE RECALLED"]],t=document.createElement("canvas");t.width=1024,t.height=576;let e=t.getContext("2d"),i=0,s=()=>{let r=n[i%n.length];e.fillStyle="#0b1210",e.fillRect(0,0,1024,576),e.fillStyle="#ffb040",e.fillRect(0,0,1024,8),e.fillRect(0,568,1024,8),e.fillStyle="#f4f7fb",e.font="bold 72px Impact, Arial Black, sans-serif",e.textAlign="center",e.textBaseline="middle";let a=288-(r.length-1)*44;r.forEach((c,l)=>{e.font=l===0?"bold 86px Impact, Arial Black, sans-serif":"bold 48px Impact, Arial Black, sans-serif",e.fillStyle=l===0?"#f4f7fb":"#ffb040",e.fillText(c,512,a+l*88)}),i+=1};s();let o=new rn(t);return o.colorSpace=ee,{tex:o,paint:s,canvas:t}}function jb(n,t){let e=new _t,i=gn(),s=xt(1710622,{roughness:.6}),o=xt(9344156,{roughness:.45,metalness:.55}),r=xt(1052692,{roughness:.85}),a=kt(4.6,.3,2.6,new Bt({map:xc(i.woodMap,6,3),roughness:.9}));a.position.set(0,.15,-.3),e.add(a);let c=kt(3.4,1,1.15,s);c.position.set(0,.8,.35),e.add(c);let l=new W(new ue(2.9,.62),new ce({map:bo("AUS101 FM","SUNSET SESSIONS"),side:he}));l.position.set(0,.86,.93),e.add(l);let h=kt(3.5,.09,1.22,xt(2763312,{metalness:.4,roughness:.4}));h.position.set(0,1.34,.35),e.add(h);for(let I of[-1,1]){let E=new W(new Mt(.34,.34,.05,16),xt(273,{metalness:.6,roughness:.35}));E.position.set(I,1.41,.3),e.add(E);let T=new W(new Mt(.02,.02,.08,6),o);T.position.set(I,1.45,.3),e.add(T);let U=kt(.05,.03,.38,o);U.position.set(I+.3,1.44,.12),U.rotation.y=-.5,e.add(U)}let u=kt(.62,.11,.72,xt(2368554,{roughness:.5}));u.position.set(0,1.44,.3),e.add(u);for(let I=0;I<4;I++){let E=kt(.05,.03,.2,xt(14209732));E.position.set(-.21+I*.14,1.51,.34),e.add(E)}let d=kt(.42,.025,.3,xt(12106946,{metalness:.4,roughness:.4}));d.position.set(-1.15,1.4,.72),e.add(d);let f=kt(.42,.28,.02,xt(1842210,{roughness:.4}));f.position.set(-1.15,1.53,.59),f.rotation.x=-.35,e.add(f);for(let I of[-2.55,2.55]){let E=new _t,T=kt(.82,.8,.7,s);T.position.y=.4,E.add(T);let U=kt(.7,.9,.6,s);U.position.y=1.28,E.add(U);for(let[q,P]of[[.4,.28],[1.12,.17]]){let z=new W(new Mt(P,P,.05,12),r);z.rotation.x=Math.PI/2,z.position.set(0,q,.34),E.add(z)}let Y=new W(new He(.2,.22,4),r);Y.rotation.x=-Math.PI/2,Y.position.set(0,1.55,.3),E.add(Y),E.position.set(I,0,.1),E.rotation.y=I<0?.25:-.25,e.add(E)}let g=Jb(),x=3.15;for(let I of[-2.7,2.7]){let E=new W(new Mt(.075,.075,x+1.6,8),o);E.castShadow=!0,E.position.set(I,(x+1.6)/2,-1.5),e.add(E);let T=kt(.5,.12,.5,o);T.position.set(I,.06,-1.5),e.add(T);for(let U of[1.3,2.9]){let Y=kt(.05,.05,1.5,o);Y.position.set(I*.72,U,-.9),Y.rotation.y=I<0?-.55:.55,e.add(Y)}}let p=new W(new Mt(.06,.06,5.4,8),o);p.rotation.z=Math.PI/2,p.position.set(0,x+1.55,-1.5),e.add(p);let m=kt(5.1,2.94,.1,s);m.position.set(0,x,-1.48),e.add(m);let _=new W(new ue(4.9,2.76),new ce({map:g.tex}));_.position.set(0,x,-1.42),e.add(_);let y=xn({hair:1710610,shorts:1710626,skin:13010498});y.name="dj-ken",y.position.set(0,.3,-.38),y.userData.paintTarget=!1;let v=y.userData.body,C=[];for(let[I,E]of[[v.armL,-1],[v.armR,1]]){let T=y0(I,x0(I,-.29)),U=T.children.find(Y=>Y.isGroup);I.rotation.set(-.3,E*-.22,E*.24),T.rotation.x=-1,U&&(U.rotation.x=.49),C.push({arm:I,hinge:T})}let A=kt(.32,.06,.1,xt(273));A.position.set(0,v.headY+.06,0),y.add(A);for(let I of[-1,1]){let E=kt(.05,.1,.1,xt(273));E.position.set(I*.135,v.headY-.005,0),y.add(E)}e.add(y),e.position.set(-24,0,7),e.rotation.y=Math.PI-.45,n.add(e),t(-26.9,-21.4,5.1,9.4);let S=0;return{tick(I){y.position.y=.3+Math.abs(Math.sin(I*4))*.035,C[0].arm.rotation.x=-.3+Math.sin(I*4)*.08,C[1].arm.rotation.x=-.3+Math.sin(I*4+1.2)*.08,I-S>4.2&&(S=I,g.paint(),g.tex.needsUpdate=!0)}}}function Qb(n){let t=[],e=[[-24.5,3.9],[-22.3,4.5],[-21,5.8],[-22.8,2.7],[-20.6,3.6]],i=[{fn:si,hair:13214247,bikini:14826874,skin:14725258},{fn:xn,hair:3809816,shorts:2060152,skin:13934698},{fn:si,hair:15909166,bikini:15909166,skin:15251608},{fn:xn,hair:6211839,shorts:3112912,skin:13931082},{fn:si,hair:1708560,bikini:1315860,skin:13208162}];return e.forEach(([s,o],r)=>{let a=i[r%i.length],c=a.fn(a);c.name=a.fn===si?`dj-babe-${r}`:`dj-ken-${r}`,c.userData.paintTarget=!1,c.position.set(s,0,o),c.rotation.y=Math.atan2(-24-s,7-o),n.add(c);let l=c.userData.body,h=r*.9,u=c.rotation.y;t.push({tick(d){let f=Math.abs(Math.sin(d*5+h));c.position.y=f*.16,c.rotation.y=u+Math.sin(d*2+h)*.35,c.rotation.z=Math.sin(d*5+h)*.1,l&&(l.armL.rotation.set(-.35+f*.55,.08,.35+f*.85),l.armR.rotation.set(-.35+(1-f)*.55,-.08,-.35-f*.85),l.legL.rotation.x=f*.34,l.legR.rotation.x=(1-f)*.26)}})}),t}var t2=12088115,e2=13934615,n2=16716816,i2=7160867,s2=9071388,Jh=Math.PI*2,Ro=(n,t,e)=>n<t?t:n>e?e:n,o2=n=>(n%Jh+Jh)%Jh,_0=new Map;function Po(n,t){let e=_0.get(n);return e||(e=t(),_0.set(n,e)),e}var Wt=(n,t,e)=>Po(`b${n}_${t}_${e}`,()=>new Tt(n,t,e)),xe=(n,t,e,i=10)=>Po(`c${n}_${t}_${e}_${i}`,()=>new Mt(n,t,e,i)),gi=(n,t=8,e=6)=>Po(`s${n}_${t}_${e}`,()=>new Kt(n,t,e)),wc=(n,t,e=3,i=8)=>Po(`p${n}_${t}_${e}_${i}`,()=>new mo(n,t,e,i)),r2=(n,t,e=5,i=12)=>Po(`t${n}_${t}_${e}_${i}`,()=>new mn(n,t,e,i)),v0=new Map;function jh(n,t,e){let i=`${n}_${t}_${e}`,s=v0.get(i);return s||(s=new Bt({color:n,roughness:t,metalness:e}),v0.set(i,s)),s}function a2(n,t,e,i,s,o){return Po(`rib${n}_${o}`,()=>{let r=o,a=new gr([new D(r*.028,t+.012,s),new D(r*e*.72,t+.014,s*.45),new D(r*e,t,i*.15),new D(r*e*.78,t-.03,i*.72),new D(r*.042,t-.055,i)]);return new xo(a,7,.0165,5,!1)})}function vt(n,t,e,i,s,o){let r=new W(t,e);return i&&r.position.set(i[0],i[1],i[2]),s&&r.rotation.set(s[0],s[1],s[2]),o&&r.scale.set(o[0],o[1],o[2]),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function yn(n,t=0,e=0,i=0){let s=new _t;return s.position.set(t,e,i),n.add(s),s}var tu=.95,Ao=.44,Co=.37,Rr=.3,To=.27,E0=[[.28,.116,.112,-.078],[.223,.136,.132,-.088],[.166,.148,.142,-.092],[.109,.15,.142,-.092],[.052,.142,.132,-.086],[-.003,.126,.112,-.076]];function c2(n,t,e){vt(n,Wt(.27,.115,.17),t,[0,-.01,0]),vt(n,xe(.062,.062,.29,10),t,[0,.012,-.012],[0,0,Math.PI/2]);for(let i of[-1,1])vt(n,Wt(.055,.155,.16),e,[i*.128,.062,-.005],[.1,0,-i*.3]),vt(n,Wt(.035,.07,.13),t,[i*.155,.02,.005],[0,0,-i*.16]);vt(n,Wt(.11,.16,.05),e,[0,.03,-.085]),vt(n,Wt(.15,.07,.09),t,[0,-.07,-.03]),vt(n,r2(.115,.017,5,14),e,[0,-.055,.01],[Math.PI/2,0,0],[1.12,.9,1])}function M0(n,t,e,i,s){let o=yn(n,t*.113,-.028,0);vt(o,gi(.072,8,6),i),vt(o,xe(.048,.048,.09,8),i,[t*.028,.006,0],[0,0,Math.PI/2]),vt(o,wc(.062,Ao-.15,2,7),e,[0,-Ao/2-.01,0],null,[1,1,.92]),vt(o,xe(.072,.056,.12,9),e,[0,-.09,0]),vt(o,xe(.021,.021,Ao-.14,8),i,[0,-Ao/2,-.052]),vt(o,Wt(.052,.15,.048),s,[0,-.16,.05]),vt(o,xe(.017,.017,.16,6),i,[0,-.3,.052]),vt(o,Wt(.085,.05,.055),i,[0,-.375,.012]);let r=yn(o,0,-Ao,0);vt(r,xe(.052,.052,.098,10),i,null,[0,0,Math.PI/2]),vt(r,Wt(.072,.085,.045),e,[0,.004,.052]),vt(r,gi(.045,8,6),s,[0,0,-.04]),vt(r,wc(.046,Co-.14,2,7),e,[0,-Co/2-.01,.006]),vt(r,xe(.057,.04,.11,9),e,[0,-.075,.004]),vt(r,xe(.016,.016,Co-.11,6),i,[t*.036,-Co/2,-.012]),vt(r,xe(.023,.023,.17,8),s,[0,-.135,-.05]),vt(r,xe(.017,.017,.13,6),i,[0,-.255,-.048]),vt(r,Wt(.075,.05,.06),i,[0,-.325,-.006]);let a=yn(r,0,-Co,0);vt(a,gi(.043,8,6),i),vt(a,xe(.036,.036,.078,8),i,null,[0,0,Math.PI/2]),vt(a,Wt(.062,.06,.07),e,[0,-.035,.028]),vt(a,Wt(.086,.055,.08),e,[0,-.072,-.036]),vt(a,Wt(.092,.045,.14),e,[0,-.086,.048]),vt(a,Wt(.082,.03,.055),i,[0,-.092,.138]),vt(a,Wt(.03,.05,.05),i,[0,-.05,-.062]);for(let c of[-.026,.026])vt(a,Wt(.022,.024,.04),s,[c,-.094,.165]);return{hip:o,knee:r,foot:a}}function l2(n,t,e,i){vt(n,xe(.028,.034,.4,8),i,[0,.155,-.078]);for(let s=0;s<6;s++)vt(n,xe(.046,.046,.022,8),e,[0,-.005+s*.058,-.078]);vt(n,Wt(.078,.31,.034),e,[0,.128,.124]),vt(n,Wt(.145,.06,.04),e,[0,.276,.112]),vt(n,Wt(.052,.07,.03),t,[0,-.035,.112]);for(let s=0;s<E0.length;s++){let[o,r,a,c]=E0[s];for(let l of[-1,1])vt(n,a2(s,o,r,a,c,l),e)}for(let s of[-1,1])vt(n,Wt(.115,.17,.032),t,[s*.112,.225,-.086],[.2,s*.25,0]);vt(n,Wt(.35,.052,.11),e,[0,.358,.03]),vt(n,Wt(.21,.08,.13),t,[0,.334,-.018]),vt(n,Wt(.16,.09,.135),i,[0,-.072,.005])}function b0(n,t,e,i,s){vt(n,gi(.072,8,6),i,[t*.192,.322,0],null,[1,.95,1]),vt(n,xe(.026,.026,.19,7),i,[t*.1,.352,.02],[0,0,t*1.34]);let o=yn(n,t*.208,.312,0);vt(o,gi(.076,9,7),e,[0,.008,0],null,[1,.92,1]),vt(o,Wt(.055,.09,.1),e,[t*.03,.02,0],[0,0,-t*.2]),vt(o,wc(.045,Rr-.13,2,7),e,[0,-Rr/2-.005,0]),vt(o,xe(.052,.04,.1,8),e,[0,-.085,0]),vt(o,xe(.016,.016,Rr-.11,6),i,[0,-Rr/2,-.041]),vt(o,Wt(.038,.11,.036),s,[0,-.13,.038]),vt(o,Wt(.062,.045,.05),i,[0,-.253,0]);let r=yn(o,0,-Rr,0);vt(r,xe(.038,.038,.075,9),i,null,[0,0,Math.PI/2]),vt(r,Wt(.045,.05,.045),e,[0,.005,-.035]),vt(r,wc(.037,To-.12,2,7),e,[0,-To/2-.005,.004]),vt(r,xe(.044,.032,.09,8),e,[0,-.06,.004]),vt(r,xe(.014,.014,To-.09,6),i,[t*.028,-To/2,-.014]),vt(r,xe(.018,.018,.12,6),s,[0,-.11,.036]),vt(r,Wt(.05,.04,.045),i,[0,-To+.03,0]);let a=yn(r,0,-To,0);vt(a,gi(.031,8,6),i),vt(a,Wt(.07,.085,.036),e,[0,-.055,.002]),vt(a,Wt(.076,.03,.042),i,[0,-.095,.004]);for(let l=0;l<4;l++){let h=(-1.5+l)*.019,u=yn(a,h,-.104,.006);u.rotation.x=-.22-l*.03,vt(u,Wt(.016,.046,.02),e,[0,-.023,0]);let d=yn(u,0,-.046,0);d.rotation.x=-.55,vt(d,Wt(.014,.038,.017),i,[0,-.019,0])}let c=yn(a,t*.032,-.068,.02);return c.rotation.set(-.5,0,t*.5),vt(c,Wt(.018,.04,.02),e,[0,-.02,0]),vt(c,Wt(.015,.032,.017),i,[0,-.05,.006],[-.5,0,0]),{shoulder:o,elbow:r,hand:a}}function h2(n,t,e,i,s){let o=yn(n,0,.122,0);vt(o,gi(.11,12,10),t,[0,.028,-.008],null,[.88,.96,1]),vt(o,Wt(.128,.092,.09),t,[0,.04,-.058]),vt(o,Wt(.06,.028,.16),e,[0,.108,-.02]);for(let c of[-1,1])vt(o,Wt(.018,.1,.095),t,[c*.086,.015,-.012]),vt(o,Wt(.014,.046,.046),e,[c*.094,0,-.018]),vt(o,xe(.019,.019,.026,6),e,[c*.099,0,-.018],[0,0,Math.PI/2]);vt(o,Wt(.178,.032,.062),e,[0,.048,.066],[.16,0,0]),vt(o,Wt(.16,.026,.05),t,[0,.072,.062],[.3,0,0]),vt(o,Wt(.058,.058,.045),i,[-.047,0,.075]),vt(o,Wt(.058,.058,.045),i,[.047,0,.075]),vt(o,Wt(.034,.062,.055),t,[0,0,.086]);let r=[];for(let c of[-1,1]){vt(o,gi(.03,8,6),i,[c*.047,0,.07],null,[1.1,.9,.7]),vt(o,Wt(.022,.056,.05),t,[c*.079,0,.07],[0,c*.3,0]);let l=new W(gi(.017,8,6),s);l.position.set(c*.047,0,.086),o.add(l),r.push(l)}for(let c of[-1,1])vt(o,Wt(.038,.045,.062),e,[c*.068,-.042,.055],[0,c*.18,c*.3]),vt(o,Wt(.024,.09,.06),t,[c*.085,-.03,.018],[0,0,c*.16]);vt(o,Wt(.03,.042,.03),i,[0,-.032,.096]),vt(o,Wt(.118,.044,.078),t,[0,-.058,.05]),vt(o,Wt(.108,.024,.058),e,[0,-.081,.056]);for(let c=0;c<5;c++)vt(o,Wt(.006,.028,.014),i,[(-2+c)*.022,-.081,.082]);vt(o,xe(.021,.021,.15,8),e,[0,-.05,-.008],[0,0,Math.PI/2]);let a=yn(o,0,-.048,-.006);vt(a,Wt(.104,.05,.095),t,[0,-.05,.042]),vt(a,Wt(.1,.022,.055),e,[0,-.03,.066]);for(let c=0;c<5;c++)vt(a,Wt(.006,.026,.014),i,[(-2+c)*.021,-.03,.09]);vt(a,Wt(.07,.046,.06),t,[0,-.076,.06]),vt(a,Wt(.03,.026,.03),e,[0,-.092,.08]);for(let c of[-1,1])vt(a,Wt(.026,.1,.05),t,[c*.05,-.016,.002],[0,0,c*.13]);return{head:o,jaw:a,eyeL:r[0],eyeR:r[1]}}function Sc(n={}){let t=!!n.dark,e=jh(n.copper??(t?i2:t2),.3,.9),i=jh(n.gold??(t?s2:e2),.24,.95),s=jh(t?1314058:2759186,.62,.6),o=new Bt({color:3408900,emissive:n.eye??n2,emissiveIntensity:1.6,roughness:.35,metalness:.2}),r=new _t;r.name="T101",n.scale&&n.scale!==1&&r.scale.setScalar(n.scale);let a=yn(r,0,tu,0);c2(a,e,i);let c=M0(a,-1,e,i,s),l=M0(a,1,e,i,s),h=yn(a,0,.055,-.005);vt(h,xe(.03,.034,.11,8),s,[0,.05,-.045]);for(let y=0;y<3;y++)vt(h,xe(.044,.044,.02,8),i,[0,.012+y*.042,-.045]);vt(h,Wt(.085,.1,.07),e,[0,.055,.015]);let u=yn(h,0,.17,.005);l2(u,e,i,s);let d=b0(u,-1,e,i,s),f=b0(u,1,e,i,s),g=yn(u,0,.418,-.012);vt(g,xe(.034,.038,.145,8),s,[0,.062,0]);for(let y of[-1,1])vt(g,xe(.013,.013,.115,6),i,[y*.045,.055,.012]);vt(g,xe(.05,.05,.026,9),i,[0,.015,0]),vt(g,gi(.042,8,6),i,[0,.132,0]);let{head:x,jaw:p,eyeL:m,eyeR:_}=h2(g,e,i,s,o);return r.userData.rig={hips:a,spine:h,chest:u,neck:g,head:x,jaw:p,shoulderL:d.shoulder,shoulderR:f.shoulder,elbowL:d.elbow,elbowR:f.elbow,handL:d.hand,handR:f.hand,hipL:c.hip,hipR:l.hip,kneeL:c.knee,kneeR:l.knee,footL:c.foot,footR:l.foot,eyeL:m,eyeR:_,eyeMat:o},r.userData.t101={hipY:tu,eyeBase:1.6},r.userData.height=1.83*(n.scale||1),Ar(r,{walkPhase:0,speed:0}),r}var Qh=[[-.0995,-.076],[-.1085,-.022],[-.1085,.118],[-.106,.165],[-.106,.185]],u2=-.028;function d2(n,t,e){let i=n+t,s=i+e,o=-Ao*Math.cos(n)-Co*Math.cos(i),r=Math.cos(s),a=Math.sin(s),c=1/0;for(let l=0;l<Qh.length;l++){let h=o+Qh[l][0]*r-Qh[l][1]*a;h<c&&(c=h)}return c}function w0(n,t,e,i,s,o,r){let a=o2(i),c=-.46*Math.cos(i)*s-.05*s+o*.02,l,h,u;if(a<Math.PI){let f=a/Math.PI,g=(f-.17)/.19;l=(.06+.3*Math.exp(-g*g)+.06*Math.sin(a))*s,h=-.26*Math.max(0,1-f/.2)+.66*Math.pow(Math.max(0,(f-.52)/.48),2),u=.94}else{let f=(a-Math.PI)/Math.PI;l=(.06+.88*Math.sin(Math.PI*Math.pow(f,.7)))*s,h=.66*Math.max(0,1-f/.28)-.24*Math.min(1,f/.28),u=.76}l+=o*.06;let d=Ro(-(c+l)*u+h*s-o*.05,-.62,.82);return n.rotation.x=c,n.rotation.z=-r*(.022+.03*s*Math.max(0,Math.cos(i))),n.rotation.y=r*.03*s*Math.cos(i),t.rotation.x=l,e.rotation.x=d,e.rotation.z=r*.04*s*Math.sin(i),d2(c,l,d)}function f2(n){if(n<=0)return 0;if(n<.3){let t=n/.3;return-(t*t*(3-2*t))}if(n<.52){let t=(n-.3)/.22;return-1+2*(t*t*(3-2*t))}if(n<1){let t=(n-.52)/.48;return 1-t*t*(3-2*t)}return 0}function Ar(n,t={}){let e=n?.userData?.rig;if(!e?.hips)return;let{walkPhase:i=0,speed:s=0,punchT:o=0,laserT:r=0,aimYaw:a=0,aimPitch:c=0}=t,l=n.userData.t101||{hipY:tu,eyeBase:1.6},h=Ro(s/2.6,0,1),u=1-h,d=i,f=Math.cos(d),g=Math.sin(d),x=Math.sin(d*.32),p=w0(e.hipR,e.kneeR,e.footR,d,h,u,1),m=w0(e.hipL,e.kneeL,e.footL,d+Math.PI,h,u,-1),_=Math.pow(Math.abs(f),12);e.hips.position.y=-u2-Math.min(p,m)-.012*h*_+u*(x-1)*.004,e.hips.position.z=-.014*h,e.hips.rotation.y=-.09*h*f+u*Math.sin(d*.27)*.03,e.hips.rotation.z=.05*h*g,e.hips.rotation.x=-.02*h+.025*h*Math.cos(2*d),e.spine.rotation.x=-(.03+.1*h)+.022*h*Math.cos(2*d)+u*x*.012,e.spine.rotation.z=-.03*h*g,e.spine.rotation.y=0;let y=.115*h*f;e.chest.rotation.y=y+u*Math.sin(d*.27+1.4)*.02,e.chest.rotation.x=.018*h*Math.cos(2*d)+u*x*.01,e.chest.rotation.z=-.03*h*g;let v=-.55*h*f,C=.55*h*f;e.shoulderL.rotation.x=v+u*.06,e.shoulderR.rotation.x=C+u*.06,e.shoulderL.rotation.z=-(.115+.05*h),e.shoulderR.rotation.z=.115+.05*h,e.shoulderL.rotation.y=-.05*h*f,e.shoulderR.rotation.y=.05*h*f,e.elbowL.rotation.x=.22+.55*h*Math.max(0,f)+u*.06,e.elbowR.rotation.x=.22+.55*h*Math.max(0,-f)+u*.06,e.elbowL.rotation.y=0,e.elbowR.rotation.y=0,e.handL.rotation.set(.12*h*f,0,-.06),e.handR.rotation.set(-.12*h*f,0,.06),e.neck.rotation.x=.05+.02*h,e.neck.rotation.y=-y*.35,e.neck.rotation.z=0,e.head.rotation.x=-.05-.03*h-.02*h*Math.cos(2*d)+u*x*.02,e.head.rotation.y=-y*.5+u*Math.sin(d*.21)*.05,e.head.rotation.z=.02*h*g,e.jaw&&(e.jaw.rotation.x=.03+.02*h*_);let A=Ro(o,0,1);if(A>0){let I=f2(A),E=Math.min(1,Math.abs(I)*1.6),T=Math.max(0,I),U=Math.max(0,-I);e.shoulderR.rotation.x=e.shoulderR.rotation.x*(1-E)+(-1.48*T+.62*U)*E,e.shoulderR.rotation.z=e.shoulderR.rotation.z*(1-E)+(.1+.12*U)*E,e.shoulderR.rotation.y=e.shoulderR.rotation.y*(1-E)+-.22*T*E;let Y=I>=0?1.5*(1-I)+.14:1.5+.55*U;e.elbowR.rotation.x=e.elbowR.rotation.x*(1-E)+Y*E,e.handR.rotation.set(-.1+.25*T,0,.06),e.shoulderL.rotation.x=e.shoulderL.rotation.x*(1-E)+(-.45*T-.15*U)*E,e.elbowL.rotation.x=e.elbowL.rotation.x*(1-E)+(1.35+.2*U)*E,e.chest.rotation.y-=.4*I,e.hips.rotation.y-=.2*I,e.spine.rotation.x-=.13*T-.05*U,e.head.rotation.y+=.16*I,e.hips.position.y-=.018*T}let S=Ro(r,0,1);if(e.eyeMat){let I=.18*Math.sin(d*2.2),E=S<.65?S/.65:1-(S-.65)/.35;e.eyeMat.emissiveIntensity=l.eyeBase+I+7.5*Math.max(0,E)}if(S>0){let I=Math.sin(d*34)*.012*S;e.head.rotation.x=e.head.rotation.x*(1-S)+(-.02+I)*S,e.head.rotation.z+=I,e.neck.rotation.x=e.neck.rotation.x*(1-S)+.02*S,e.spine.rotation.x+=.06*S;let E=1+.35*S;e.eyeL.scale.setScalar(E),e.eyeR.scale.setScalar(E)}else e.eyeL.scale.x!==1&&(e.eyeL.scale.setScalar(1),e.eyeR.scale.setScalar(1));if(a){let I=Ro(a,-1.6,1.6);e.chest.rotation.y+=I*.35,e.hips.rotation.y+=I*.12,e.head.rotation.y+=I*.55}if(c){let I=Ro(c,-1.1,1.1);e.head.rotation.x-=I*.75,e.chest.rotation.x-=I*.18}}var p2=12088115,m2=13934615,g2=16715792;function x2(){let n=new _t,t=o=>(o.castShadow=!0,o.receiveShadow=!0,o),e=t(new W(new Mt(.027,.032,.13,10),new Bt({color:15986660,roughness:.48,metalness:.05}))),i=t(new W(new Mt(.033,.033,.046,10),new Bt({color:13123630,roughness:.55})));i.position.y=.01;let s=t(new W(new Mt(.017,.02,.028,8),new Bt({color:1118481,roughness:.4,metalness:.2})));return s.position.y=.078,n.add(e,i,s),n.name="spfBottle",n.rotation.z=.35,n.rotation.x=.15,n.position.set(.012,-.105,.055),n}function S0(){let n=Sc({copper:p2,gold:m2,eye:g2});n.name="AUS101";let t=n.userData.rig,e=x2();t.handR.add(e);let i=new _t;return i.name="aus101Eyes",t.head.add(i),n.userData.parts={bottle:e,eyes:i,eyeL:t.eyeL,eyeR:t.eyeR,eyeMat:t.eyeMat,hips:t.hips,torso:t.chest,spine:t.spine,chest:t.chest,neck:t.neck,skull:t.head,head:t.head,leftFoot:t.footL,rightFoot:t.footR,leftThigh:t.hipL,rightThigh:t.hipR,leftShin:t.kneeL,rightShin:t.kneeR,leftUpperArm:t.shoulderL,rightUpperArm:t.shoulderR,leftForearm:t.elbowL,rightForearm:t.elbowR,leftHand:t.handL,rightHand:t.handR},n.userData.height=1.85,eu(n,{walkPhase:0,speed:0}),n}function eu(n,t={}){Ar(n,t)}var y2={ken:4.2,babe:4.2,goth:3.8,sigma_07:4,kid:3.6,gull:4.8},_2={ken:["ken","lad"],babe:["babe","flirt"],goth:["goth"],sigma_07:["incel","sigma07","iamverysmart"],kid:["child"],gull:["gull"]},v2={ken:11e3,babe:11e3,goth:13e3,sigma_07:14e3,kid:14e3,gull:9e3},T0=new Set(["pleasure","flirt","gossip","incel","iamverysmart","babe","ken"]),E2=1.15,M2=2.8,b2=/^(oi+|oy|hey|watch out|watch it|look out|heads up|oi copper)[\s!.?,]*$/i;function R0(n,t){let e=n.x-t.x,i=n.z-t.z;return e*e+i*i}function w2(n){return 1/(1+Math.pow(n/E2,M2))}function nu(n){return n[Math.random()*n.length|0]}function A0(n){return(n.tags||[]).includes("interject")?!0:b2.test((n.text||"").trim())}function C0(n,t){let e=new Map,i=new Map,s=0,o=null,r="",a=0,c=!1,l=new Map,h=[],u=()=>{l.clear(),h.length=0;let g=n.manifest?.lines||[];for(let x of g)A0(x)&&h.push(x);for(let[x,p]of Object.entries(_2))l.set(x,g.filter(m=>{if(A0(m))return!1;let _=m.tags||[];return x==="kid"&&_.some(y=>T0.has(y))||x==="gull"&&_.some(y=>T0.has(y))||m.ageBand==="child"&&x!=="kid"?!1:p.some(y=>_.includes(y)||m.id&&m.id.includes(y))}))},d=g=>{let x=[];for(let p of t){let m=y2[p.kind];if(!m)continue;let _=Math.sqrt(R0(g,p.mesh.position));_>m||x.push({npc:p,d:_,g:w2(_)})}return x.sort((p,m)=>p.d-m.d),x},f=(g,x,p)=>{if(c||n.busy)return;c=!0;let m=n.play(g.id,{gain:x});m.ready.then(_=>{c=!1,_&&p(m)})};return{isTalking(g){return c||g<s},tick(g,x){if(!n.manifest||(l.size||u(),c))return;let p=d(x);if(o&&g<s&&p[0]&&o.setGain?.(p[0].g*1.05),g>=s&&(o=null),!p.length)return;let m=p[0];if(m.g<.12)return;let _=t.some(S=>S.ageBand==="child"&&R0(x,S.mesh.position)<25);if(g<s){if(g<a||g-(i.get(m.npc.mesh)||0)<6e3||!h.length)return;let S=nu(h);f(S,Math.min(1,m.g*1.2),I=>{i.set(m.npc.mesh,performance.now()),a=performance.now()+(I.duration||900)});return}let v=v2[m.npc.kind]||12e3;if(g-(e.get(m.npc.mesh)||0)<v||_&&m.npc.ageBand==="adult")return;let C=l.get(m.npc.kind)||[];if(!C.length)return;let A=nu(C);C.length>1&&A.id===r&&(A=nu(C)),f(A,m.g*1.05,S=>{let I=performance.now();e.set(m.npc.mesh,I),r=A.id,o=S,s=I+(S.duration||2e3)+200})}}}function P0(){let n={bottleMl:200,handMl:0,squeezing:!1,_waste:0,tick({squeezeHeld:t=!1,applying:e=!1,hitting:i=!1,dt:s=0}={}){let o=s>0?s:0;if(n.squeezing=!!t,n.squeezing&&n.bottleMl>0){let r=Math.min(10*o,n.bottleMl);n.handMl<=0&&(r=Math.max(r,Math.min(1,n.bottleMl))),n.bottleMl-=r,n.handMl+=r,n.handMl>6&&(n._waste+=n.handMl-6,n.handMl=6)}(e||i)&&n.handMl>0&&(n.handMl-=Math.min(2.2*o,n.handMl))},canPaint(){return n.handMl>0},waste(){return n._waste}};return n}var S2=128,L0=6,T2=new Vt(15986660),R2=new Set(["sigma_07","goth","kid","gull"]);function Rs(n){return n?n.mesh||n:null}function iu(n){let t=Rs(n);return n?.kind||t?.userData?.kind||null}function su(n){let t=Rs(n);if(!t)return!1;let e=t.userData||{},i=n.ageBand??e.ageBand,s=iu(n);return!(i!=="adult"||e.paintTarget===!1||R2.has(s))}function I0(n){let t=n.userData?.skinMats;if(!t||!t.length)return!1;if(typeof n.traverse!="function"){let i=n.userData?.kind;return i==="ken"||i==="babe"}let e=!1;return n.traverse(i=>{if(e||!i.isMesh)return;let s=i.material;s&&t.indexOf(s)<0&&(e=!0)}),e}function D0(n,t,e){return t?n==="babe"?e>=.18&&e<=.34||e>=.5&&e<=.6:n==="ken"?e>=.2&&e<=.36:e>=.18&&e<=.34:!1}function U0(n,t,e){return e<.08||e>.86?!1:!D0(n,t,e)}function A2(n,t,e){let i=0,s=1/e;for(let o=0;o<e;o++)U0(n,t,(o+.5)*s)&&(i+=e);return i||e*e}function ou(n){if(!su(n))return null;let t=Rs(n),e=t.userData;if(!e)return null;if(e.coverageMap)return e.coverageMap;let i=S2,s=new Uint8Array(i*i),o=new Float32Array(i*i),r=new Va(s,i,i,Th,Fn);r.name="CoverageMap",r.needsUpdate=!1,r.generateMipmaps=!1,r.minFilter=Se,r.magFilter=Se,r.wrapS=qi,r.wrapT=In,r.flipY=!1,r.colorSpace=je;let a=iu(n),c=I0(t),l={size:i,data:s,thick:o,tex:r,kind:a,hasCloth:c,sum:0,coated:0,skinCount:A2(a,c,i)};return e.coverageMap=l,e.coverageTex=r,Number.isFinite(e.coverage)||(e.coverage=0),l}function Cr(n,t,e,i,s){let o=ou(n);if(!o||!(s>0)||!(i>0))return xi(n);let r=o.size,a=o.data,c=o.thick,l=Math.max(.5,i*r),h=(t%1+1)%1*r,u=Math.min(1,Math.max(0,e))*r,d=l*l,f=Math.floor(h-l),g=Math.ceil(h+l),x=Math.max(0,Math.floor(u-l)),p=Math.min(r-1,Math.ceil(u+l)),m=1/l,_=1/r,y=o.sum,v=o.coated;for(let S=x;S<=p;S++){let I=S+.5-u,E=(S+.5)*_;if(U0(o.kind,o.hasCloth,E))for(let T=f;T<=g;T++){let U=T+.5-h,Y=U*U+I*I;if(Y>d)continue;let q=(T%r+r)%r,P=Math.sqrt(Y)*m,z=Math.pow(1-P,1.6),B=S*r+q,F=a[B],Z=c[B]+s*z;c[B]=Z>1?1:Z;let K=c[B]*255+.5|0;y+=K-F,F<L0&&K>=L0&&v++,a[B]=K}}o.sum=y,o.coated=v,o.tex.needsUpdate=!0;let C=xi(n),A=Rs(n);return A&&(A.userData.coverage=C),C}function xi(n){let t=Rs(n);if(!t)return 0;let e=t.userData?.coverageMap;if(!e||!e.skinCount){let i=t.userData?.coverage;return Number.isFinite(i)?Math.min(1,Math.max(0,i)):0}return Math.min(1,Math.max(0,e.coated/e.skinCount))}function H0(n,t,e){let i=Rs(n);if(!i||i.userData.paintTarget===!1)return!0;let s=i.userData.coverageMap,o=s?.kind??iu(n),r=s?s.hasCloth:I0(i);return D0(o,r,e)}function Pr(n){let t=Rs(n);if(!t)return;let e=t.userData.skinMats,i=t.userData.bareColor;if(!e||!i)return;let s=xi(n);t.userData.coverage=s;for(let o of e)o.color.copy(i).lerp(T2,s*.72),o.roughness=.68*(1-s)+.26*s,o.metalness=.04+s*.08}var N0=2.35,P2=3.5,L2=.22,I2=.5,D2=.4,U2=[.14,.4,.68],H2=[0,.3,-.3];function N2(n,t){let e=n.x-t.x,i=n.z-t.z;return e*e+i*i}function k0(n){return Math.atan2(Math.sin(n),Math.cos(n))}function O0(n){return n-Math.floor(n)}function k2(n,t,e){let i=t.rotation.y||0,s;if(e!=null&&Number.isFinite(e))s=k0(e-i);else if(n){let o=n.x-t.position.x,r=n.z-t.position.z;s=k0(Math.atan2(o,r)-i)}else s=0;return{u:O0(I2+s/(Math.PI*2)),v:D2}}function ru(n,t){let e=null,i=N0*N0;for(let s of n){if(!su(s))continue;let o=s.mesh;if(!o)continue;let r=N2(t,o.position);r<i&&(i=r,e=s)}return e}function B0(n,t,e,i,s){if(!e)return null;let o=ru(n,t);if(!o)return null;ou(o);let r=k2(t,o.mesh,s),a=Math.min(1,Math.max(0,i)*P2),c=!1;for(let l of H2){let h=O0(r.u+l);for(let u of U2)H0(o,h,u)||(Cr(o,h,u,L2,a),c=!0)}return c&&Pr(o),{npc:o,coverage:xi(o)}}function z0({lotion:n,cast:t,playerPos:e,playerYaw:i,squeezing:s,dt:o,applyUx:r,bay:a}){let c=o>0?o:0;n.tick({squeezeHeld:s,applying:!1,dt:c});let l=ru(t,e),h=s&&n.canPaint()?B0(t,e,!0,c,i):null;h&&(n.tick({squeezeHeld:!1,applying:!0,dt:c}),n.squeezing=!!s,a?.track?.(h.npc));let u=h?.npc||(s&&n.canPaint()?l:null);return u?r?.show?.(u):r?.hide?.(),r?.tick?.(),a?.tick?.(c,h?.npc??null),h}var O2=15986660,B2=.42,z2=.48,au={x:0,y:-.05,z:.032};function Lr(n,t,e,i){return n+(t-n)*(1-Math.exp(-i*Math.max(0,e)))}function F2(){let n=new W(new Kt(.016,8,6),new Bt({color:O2,roughness:.22,metalness:.04}));return n.name="lotionBlob",n.castShadow=!0,n.position.set(au.x,au.y,au.z),n.scale.set(0,0,0),n.visible=!1,n}function cu(n){let t=n?.userData?.parts?.bottle;if(!t)return null;if(t.userData.restRot||(t.userData.restRot={x:t.rotation.x,y:t.rotation.y,z:t.rotation.z}),!t.userData.palm){let e=F2(),i=t.parent;i?i.add(e):t.add(e),t.userData.palm=e}return t}function F0(n,t,e){let i=n?.userData?.parts?.bottle;if(!i||!t)return;(!i.userData.palm||!i.userData.restRot)&&cu(n);let s=i.userData.restRot,o=i.userData.palm;if(!s)return;let r=t.squeezing?1:0;if(i.rotation.x=Lr(i.rotation.x,s.x+r*B2,e,14),i.rotation.z=Lr(i.rotation.z,s.z+r*z2,e,14),!o)return;let a=Math.max(0,Math.min(1,(t.handMl||0)/6));o.visible=a>.01;let c=Lr(o.scale.x,a*1.25,e,10),l=Lr(o.scale.y,a*.55,e,10),h=Lr(o.scale.z,a*1.15,e,10);o.scale.set(c,l,h)}var G0=12088115,G2=13934615,hu=16715792,V2=1,W2=3,X2=22,q2=3,Y2=1,V0=62,Z2=46,$2=2.2,W0=15,lu=9.6,K2=11.5,X0=5.2,J2=2.6,j2=30,Q2=.45,tw=.42,q0=6,ew=8,Y0=.55,nw=.9,iw=1.2,Tc=1.7,Z0=8.2,sw=7,ow=1.45,rw=.75,aw=30,cw=.84,lw=.52,qe={hull:new mo(.2,1.16,3,6),eye:new Kt(.042,6,6),brow:new Tt(.22,.034,.07),heliBody:new Tt(2.35,.7,1.18),heliNose:new Tt(.72,.48,.86),heliCabin:new Tt(1.05,.42,1.05),heliTail:new Tt(2.05,.14,.14),heliFin:new Tt(.1,.52,.32),blade:new Tt(6.2,.035,.16),tailBlade:new Tt(.04,.9,.1),mast:new Mt(.05,.05,.28,6),skid:new Tt(2.15,.055,.055),skidLeg:new Tt(.055,.26,.055),beam:new Mt(.028,.01,1,5),rope:new Mt(.018,.018,1,4),dust:new Qa(.5,.68,18)},Ye={copper:new Bt({color:G0,metalness:.85,roughness:.35}),gold:new Bt({color:G2,metalness:.82,roughness:.32}),eye:new ce({color:hu}),heli:new Bt({color:3353638,metalness:.3,roughness:.62}),heliAccent:new Bt({color:G0,metalness:.7,roughness:.4}),rotor:new Bt({color:2761760,metalness:.35,roughness:.62}),beam:new ce({color:hu}),rope:new Bt({color:1315344,roughness:.9}),dust:new ce({color:15721414,transparent:!0,opacity:.5,side:he,depthWrite:!1})},$0=new D(0,1,0),_n=new D,Rc=new D,K0=!0;function Tn(n,t=!0){return n.castShadow=t,n.receiveShadow=!0,n}function hw(){let n=new _t;n.name="recall-unit";let t=Tn(new W(qe.hull,Ye.copper));t.position.y=.78,n.add(t);let e=Tn(new W(qe.brow,Ye.gold),!1);e.position.set(0,1.58,.14),n.add(e);for(let i of[-.055,.055]){let s=new W(qe.eye,Ye.eye);s.position.set(i,1.52,.16),n.add(s)}return n}var uw={scale:1.05,dark:!0,eye:hu,copper:7041400,gold:10259026},Ac=null;function dw(n){if(!Ac){Ac=[],n.traverse(i=>{if(!i.isMesh)return;let s=i.material;s?.isMeshStandardMaterial&&!s.emissive?.getHex()&&(s.metalness=Math.min(s.metalness,.5),s.roughness=Math.max(s.roughness,.44)),Ac.push(s)});return}let t=0,e=new Set;n.traverse(i=>{if(!i.isMesh)return;let s=Ac[t++];s&&i.material!==s&&(e.add(i.material),i.material=s)});for(let i of e)i.dispose?.()}function fw(){let n=null;try{n=Sc(uw)}catch{n=null}return!n||!n.isObject3D?hw():(dw(n),n.name="recall-unit",n)}function pw(){let n=new _t;n.name="recall-heli";let t=Tn(new W(qe.heliBody,Ye.heli));t.position.y=.55;let e=Tn(new W(qe.heliNose,Ye.heli));e.position.set(0,.42,.92);let i=Tn(new W(qe.heliCabin,Ye.heliAccent),!1);i.position.set(0,.92,.12);let s=Tn(new W(qe.heliTail,Ye.heli));s.position.set(0,.62,-1.85);let o=Tn(new W(qe.heliFin,Ye.heli));o.position.set(0,.95,-2.78);let r=Tn(new W(qe.mast,Ye.rotor),!1);r.position.set(0,1.22,0),n.add(t,e,i,s,o,r);for(let d of[-.42,.42]){let f=Tn(new W(qe.skid,Ye.rotor),!1);f.position.set(d,.05,.08);let g=Tn(new W(qe.skidLeg,Ye.rotor),!1);g.position.set(d,.2,.55);let x=Tn(new W(qe.skidLeg,Ye.rotor),!1);x.position.set(d,.2,-.45),n.add(f,g,x)}let a=new _t;a.position.set(0,1.38,0);let c=Tn(new W(qe.blade,Ye.rotor),!1),l=Tn(new W(qe.blade,Ye.rotor),!1);l.rotation.y=Math.PI/2,a.add(c,l),n.add(a);let h=new _t;h.position.set(.12,.95,-2.82);let u=Tn(new W(qe.tailBlade,Ye.rotor),!1);return h.add(u),n.add(h),n.userData.rotor=a,n.userData.tailRotor=h,n}function J0(n){n?.traverse?.(t=>{t.isMesh&&t.userData.ownMaterial&&t.material?.dispose&&t.material.dispose()})}function j0({scene:n,onGameOver:t,play:e,onLevel:i,rng:s}={}){let o=typeof s=="function"?s:Math.random,r=0,a=0,c=!1,l=!1,h=0,u=0,d=0,f=0,g=0,x=!1,p=new D,m=new D,_=[],y=[],v=null;function C(w){if(typeof e=="function")try{e(w)}catch{}}function A(w,k,H){let J=pw(),G=w+(o()-.5)*.5,et=m.x+Math.cos(G)*V0,ct=m.z+Math.sin(G)*V0,ft=k+8+o()*5;J.position.set(et,ft,ct),J.lookAt(m.x,k,m.z),n.add(J);let lt={root:J,mode:H,pos:new D(et,ft,ct),vel:new D,angle:w,radius:K2,alt:k,spin:22+o()*6,orbit:.34+o()*.1,pods:[],podsAloft:0,deployed:!1,arrived:0};return y.push(lt),lt}function S(w,k){return k.set(m.x+Math.cos(w.angle)*w.radius,w.alt,m.z+Math.sin(w.angle)*w.radius)}function I(w,k){let H=Rc.copy(S(w,Rc));_n.copy(H).sub(w.pos);let J=_n.length();if(w.mode==="inbound"){let et=Math.min(Z2,Math.max(7,J*$2));J>.001&&_n.multiplyScalar(1/J),w.vel.lerp(_n.multiplyScalar(et),Math.min(1,k*3.2)),w.pos.addScaledVector(w.vel,k),J<2.2&&(w.mode="station",w.arrived=h)}else{w.angle+=w.orbit*k;let et=S(w,Rc),ct=Math.min(1,k*2.4);w.pos.x+=(et.x-w.pos.x)*ct,w.pos.z+=(et.z-w.pos.z)*ct,w.pos.y+=(w.alt+Math.sin(h*2.1+w.angle)*.22-w.pos.y)*Math.min(1,k*1.4),w.vel.set(-Math.sin(w.angle),0,Math.cos(w.angle)).multiplyScalar(w.radius*w.orbit)}w.root.position.copy(w.pos);let G=w.vel.length();G>.2&&(_n.copy(w.pos).addScaledVector(w.vel,1/G),w.root.lookAt(_n)),w.root.rotateX(Math.min(.3,G*.012)),w.root.rotateZ(w.mode==="inbound"?0:.16),w.root.userData.rotor.rotation.y+=w.spin*k,w.root.userData.tailRotor.rotation.x+=w.spin*1.7*k}function E(){let w=new W(qe.dust,Ye.dust.clone());return w.userData.ownMaterial=!0,w.rotation.x=-Math.PI/2,w.position.y=.03,w.visible=!1,w}function T(w,k,H){w.deployed=!0;for(let J=0;J<k;J++){let G=fw(),et=(J%2===0?-1:1)*(.34+(J/2|0)*.24),ct=w.pos.x+Math.cos(w.angle+Math.PI*.5)*et,ft=w.pos.z+Math.sin(w.angle+Math.PI*.5)*et;G.position.set(ct,w.pos.y-1.1,ft),G.visible=!1,n.add(G);let lt=new W(qe.rope,Ye.rope);lt.visible=!1,n.add(lt);let Et=E();n.add(Et),_.push({root:G,rope:lt,dust:Et,dustT:0,heli:w,side:et,mode:"aboard",wait:Q2+(H+J)*tw+o()*.12,x:ct,y:w.pos.y-1.1,z:ft,vy:0,speed:0,top:Z0*(.9+o()*.2),phase:o()*Math.PI*2,modeT:0,crouch:0,yaw:w.angle+Math.PI,slot:0})}}function U(w,k){let H=w.root.userData?.rig;if(!K0||!H)return;let J=w.mode==="seize"?Math.min(1,w.modeT/.3)*lw:0;try{Ar(w.root,{walkPhase:w.phase,speed:k,punchT:J,laserT:0,aimYaw:0,aimPitch:0})}catch{K0=!1;return}if(w.mode==="rope")H.shoulderL.rotation.set(-2.78,0,-.06),H.shoulderR.rotation.set(-2.78,0,.06),H.elbowL.rotation.x=.34,H.elbowR.rotation.x=.34,H.hipL.rotation.x=-.22,H.hipR.rotation.x=-.3,H.kneeL.rotation.x=.42,H.kneeR.rotation.x=.62,H.footL.rotation.x=-.2,H.footR.rotation.x=-.3,H.spine.rotation.x=.06;else if(w.crouch>.001){let G=.66*w.crouch,et=cw*(1-Math.cos(G));H.hipL.rotation.x-=G,H.hipR.rotation.x-=G,H.kneeL.rotation.x+=2*G,H.kneeR.rotation.x+=2*G,H.footL.rotation.x-=G,H.footR.rotation.x-=G,H.hips.position.y-=et,H.spine.rotation.x-=.55*G,H.shoulderL.rotation.x-=1.1*G,H.shoulderR.rotation.x-=1.1*G,H.elbowL.rotation.x+=.6*G,H.elbowR.rotation.x+=.6*G}else if(k>Tc+.4){let G=Math.min(1,(k-Tc-.4)/(Z0-Tc));H.shoulderL.rotation.x*=1+.55*G,H.shoulderR.rotation.x*=1+.55*G,H.spine.rotation.x-=.19*G,H.chest.rotation.x-=.06*G,H.head.rotation.x+=.14*G}}function Y(w,k){let H=w.heli,J=p.x-w.x,G=p.z-w.z,et=Math.hypot(J,G);switch(w.modeT+=k,w.mode){case"aboard":{w.x=H.pos.x+Math.cos(H.angle+Math.PI*.5)*w.side,w.z=H.pos.z+Math.sin(H.angle+Math.PI*.5)*w.side,w.y=H.pos.y-1.1,w.yaw=H.angle+Math.PI,H.mode==="station"&&H.pos.y<lu+1.2&&(w.wait-=k,w.wait<=0&&(w.mode="rope",w.modeT=0,w.root.visible=!0,w.rope.visible=!0));break}case"rope":{w.y-=X0*k,w.vy=-X0,w.y<=J2&&(w.mode="fall",w.modeT=0,w.rope.visible=!1);break}case"fall":{w.vy-=j2*k,w.y+=w.vy*k,w.y<=0&&(w.y=0,w.vy=0,w.mode="land",w.modeT=0,w.dustT=.7,w.dust.visible=!0,w.dust.position.set(w.x,.03,w.z),_.indexOf(w)===0&&C("recall_land_01"));break}case"land":{w.modeT>=Y0&&(w.mode="form",w.modeT=0);break}case"form":{(x||w.modeT>=nw)&&(w.mode="stalk",w.modeT=0);break}case"stalk":case"run":{w.mode==="stalk"&&w.modeT>=iw&&(w.mode="run",w.modeT=0);let ft=w.mode==="stalk"?Tc:w.top;w.speed+=Math.min(ft-w.speed,sw*k),w.speed<0&&(w.speed=0);let lt=Math.atan2(G,J)+Math.PI+w.slot,Et=p.x+Math.cos(lt)*.85,O=p.z+Math.sin(lt)*.85,mt=Et-w.x,nt=O-w.z,ht=Math.hypot(mt,nt);if(ht>.05){let X=Math.min(ht,w.speed*k);w.x+=mt/ht*X,w.z+=nt/ht*X}w.phase+=k*(2.4+w.speed*1.45),et<=ow&&(w.mode="seize",w.modeT=0,w.speed=0,l||(l=!0,d=0,C("factory_recall_02")));break}case"seize":{w.phase+=k*1.4;break}}if(w.mode!=="aboard"&&(w.yaw=Math.atan2(J,G)),w.root.rotation.y=w.yaw,w.crouch=w.mode==="land"?Math.sin(Math.PI*Math.min(1,w.modeT/Y0))**.7:0,w.root.position.set(w.x,w.y,w.z),w.root.visible=w.mode!=="aboard",w.rope.visible){let ft=w.heli.pos,lt=ft.y-.9;_n.set(ft.x-w.x,lt-(w.y+1.5),ft.z-w.z);let Et=Math.max(.2,_n.length());w.rope.scale.set(1,Et,1),w.rope.position.set((ft.x+w.x)*.5,(lt+w.y+1.5)*.5,(ft.z+w.z)*.5),_n.multiplyScalar(1/Et),w.rope.quaternion.setFromUnitVectors($0,_n)}if(w.dustT>0){w.dustT-=k;let ft=1-Math.max(0,w.dustT)/.7;w.dust.scale.setScalar(.55+ft*3.6),w.dust.material.opacity=.5*(1-ft)*(1-ft),w.dustT<=0&&(w.dust.visible=!1)}let ct=w.mode==="stalk"||w.mode==="run"?w.speed:0;U(w,ct)}function q(){r=1,h=0,C("recall_alert_01"),A(o()*Math.PI*2,W0,"inbound"),i?.(1,{point:m.clone()})}function P(){r=2,u=0,C("factory_recall_01");let w=q0+(o()*(ew-q0+1)|0),k=o()*Math.PI*2,H=w>6?3:2;for(let G of y)G.alt=lu;for(let G=y.length;G<H;G++)A(k+G/H*Math.PI*2,lu,"inbound");for(let G=0;G<y.length;G++)y[G].angle=k+G/y.length*Math.PI*2;let J=0;for(let G=0;G<y.length&&J<w;G++){let et=Math.min(w-J,Math.ceil(w/y.length));T(y[G],et,J),J+=et}for(let G=0;G<_.length;G++)_[G].slot=G/_.length*Math.PI*2*.55-.55;i?.(2,{point:m.clone()})}function z(w,k){v&&n.remove(v);let H=Rc.set(w.x,(w.y||0)+1.55,w.z);_n.copy(k).sub(H);let J=Math.max(1.2,_n.length());_n.normalize(),v=new W(qe.beam,Ye.beam),v.scale.set(1,J,1),v.position.copy(H).addScaledVector(_n,J*.5),v.quaternion.setFromUnitVectors($0,_n),n.add(v),g=.22}function B(w={}){let k=r;if(c||!n)return{level:r,escalated:!1,heat:a};let H=w.point||w.victim?.mesh?.position||p;return m.set(H.x||0,H.y||0,H.z||0),a+=w.lethal?q2:Y2,f=0,w.kind==="laser"&&z(p,m),r<1&&a>=V2&&q(),r<2&&(w.lethal||a>=W2)&&P(),{level:r,escalated:r>k,heat:a}}function F(w){return w!=="laser"&&w!=="punch"?!1:B({kind:w,lethal:!1,point:p.clone()}).escalated}function Z(w,k){if(k&&p.set(k.x,k.y||0,k.z),r===0||!(w>0)||c)return;let H=Math.min(w,.05);if(h+=H,f+=H,r>=2&&(u+=H),r===1&&f>=X2){M();return}v&&(g-=H,g<=0&&(n.remove(v),v=null)),x=_.length>0;for(let J of y)J.podsAloft=0;for(let J of _)J.mode==="aboard"||J.mode==="rope"?(J.heli.podsAloft++,x=!1):J.mode==="fall"&&(x=!1);for(let J of y)J.deployed&&J.podsAloft===0&&(J.alt=W0),I(J,H);for(let J of _)Y(J,H);l?(d+=H,d>=rw&&K()):r>=2&&u>=aw&&K()}function K(){c||(c=!0,M(),t?.())}function M(){for(let w of _)n?.remove(w.root),n?.remove(w.rope),n?.remove(w.dust),J0(w.dust),J0(w.root);_.length=0;for(let w of y)n?.remove(w.root);y.length=0,v&&n?.remove(v),v=null,g=0,r=0,a=0,d=0,f=0,h=0,u=0}function N(){M(),l=!1,c=!1}return{onHarm:B,tryFire:F,tick:Z,dispose:M,reset:N,get wanted(){return r>=2},get alerted(){return r>=1},get level(){return r},get heat(){return a},get captured(){return l},get unitCount(){return _.length}}}var mw=6.2,gw=7.4,xw=2.1,Q0=6,yw=17,uu=2.6,_w=46,oi={box:new Tt(1,1,1),sphere:new Kt(1,10,8),cyl:new Mt(1,1,1,8)};function ji(n,t={}){return new Bt({color:n,roughness:.72,metalness:.05,...t})}var Ae={navy:ji(1981038),navyDark:ji(1387090),vest:ji(1316378,{roughness:.6}),skin:ji(13213818,{roughness:.66}),boot:ji(1052692,{roughness:.55}),visor:ji(658448,{roughness:.25,metalness:.35}),belt:ji(2369068,{roughness:.5}),badge:ji(14201402,{roughness:.35,metalness:.7})};function Ce(n,t,e,i,s=oi.box){let o=new W(s,n);return o.castShadow=!0,o.receiveShadow=!0,o.scale.set(t,e,i),o}function vw(n,t,e){return e.set(t.x-n.x,0,t.z-n.z),e.lengthSq()<.01&&e.set(Math.random()-.5,0,Math.random()-.5),e.normalize(),e}function Ew(){let n=new _t;n.name="panic-cop";let t=.92,e=.46,i=.4,s=.29,o=.26,r=new _t;r.position.y=t,n.add(r);let a=Ce(Ae.navyDark,.28,.16,.19);r.add(a);let c=[];for(let I of[-1,1]){let E=new _t;E.position.set(I*.095,0,0);let T=Ce(Ae.navy,.115,e,.115,oi.cyl);T.position.y=-e*.5,E.add(T);let U=new _t;U.position.y=-e;let Y=Ce(Ae.navy,.06,.06,.06,oi.sphere);U.add(Y);let q=Ce(Ae.navy,.095,i,.095,oi.cyl);q.position.y=-i*.5,U.add(q);let P=new _t;P.position.y=-i;let z=Ce(Ae.boot,.115,.1,.24);z.position.set(0,-.05,.045);let B=Ce(Ae.boot,.12,.11,.13);B.position.set(0,.03,-.01),P.add(z,B),U.add(P),E.add(U),r.add(E),c.push({leg:E,shin:U,foot:P})}let l=new _t;r.add(l);let h=Ce(Ae.navy,.36,.46,.21);h.position.y=.25,l.add(h);let u=Ce(Ae.vest,.38,.34,.24);u.position.y=.3,l.add(u);let d=Ce(Ae.badge,.05,.06,.02);d.position.set(.11,.4,.125),l.add(d);let f=Ce(Ae.belt,.31,.07,.22);f.position.y=.04,l.add(f);let g=Ce(Ae.belt,.07,.14,.09);g.position.set(.17,-.02,.02),l.add(g);let x=Ce(Ae.navy,.46,.11,.2);x.position.y=.5,l.add(x);let p=[];for(let I of[-1,1]){let E=new _t;E.position.set(I*.235,.48,0),E.rotation.z=I*.08;let T=Ce(Ae.navy,.07,.07,.07,oi.sphere);E.add(T);let U=Ce(Ae.navy,.085,s,.085,oi.cyl);U.position.y=-s*.5,E.add(U);let Y=new _t;Y.position.y=-s;let q=Ce(Ae.navy,.052,.052,.052,oi.sphere);Y.add(q);let P=Ce(Ae.skin,.07,o,.07,oi.cyl);P.position.y=-o*.5,Y.add(P);let z=Ce(Ae.skin,.075,.1,.06);z.position.y=-o-.05,Y.add(z),E.add(Y),l.add(E),p.push({arm:E,fore:Y})}let m=Ce(Ae.skin,.05,.09,.05,oi.cyl);m.position.y=.58,l.add(m);let _=new _t;_.position.y=.72;let y=Ce(Ae.skin,.115,.13,.12,oi.sphere);_.add(y);let v=Ce(Ae.skin,.1,.06,.11);v.position.set(0,-.07,.02),_.add(v);let C=Ce(Ae.navyDark,.135,.055,.135,oi.cyl);C.position.y=.09,_.add(C);let A=Ce(Ae.navyDark,.17,.022,.1);A.position.set(0,.06,.11),_.add(A);let S=Ce(Ae.visor,.17,.035,.05);return S.position.set(0,.015,.105),_.add(S),l.add(_),n.userData.rig={hips:r,torso:l,head:_,armL:p[0].arm,armR:p[1].arm,foreL:p[0].fore,foreR:p[1].fore,legL:c[0].leg,legR:c[1].leg,shinL:c[0].shin,shinR:c[1].shin,footL:c[0].foot,footR:c[1].foot,hipY:t},n.userData.kind="cop",tm(n,{walkPhase:0,speed:0}),n}function tm(n,{walkPhase:t=0,speed:e=0,reach:i=0}={}){let s=n?.userData?.rig;if(!s)return;let o=Math.min(1,Math.max(0,e)/5.2),r=Math.min(1,Math.max(0,e)/7.4),a=Math.sin(t),c=Math.abs(Math.sin(t));s.hips.position.y=s.hipY+c*.05*o-i*.04,s.hips.rotation.y=a*.1*o,s.torso.rotation.x=.04+r*.2,s.torso.rotation.y=-a*.08*o,s.legL.rotation.x=-a*(.55+r*.25)*o,s.legR.rotation.x=a*(.55+r*.25)*o,s.shinL.rotation.x=Math.max(0,a)*(.85+r*.5)*o,s.shinR.rotation.x=Math.max(0,-a)*(.85+r*.5)*o,s.footL.rotation.x=-Math.max(0,a)*.3*o,s.footR.rotation.x=-Math.max(0,-a)*.3*o;let l=(.55+r*.35)*o;s.armL.rotation.x=a*l*(1-i)+.05-i*.95,s.armR.rotation.x=-a*l*(1-i)+.05-i*.95,s.armL.rotation.z=-.08-i*.26,s.armR.rotation.z=.08+i*.26,s.foreL.rotation.x=-.5-r*.55-Math.max(0,a)*.3*(1-i)+i*.12,s.foreR.rotation.x=-.5-r*.55-Math.max(0,-a)*.3*(1-i)+i*.12,s.head.rotation.x=-r*.1}function Mw(n,t,e){let i=n?.userData?.body;if(!i?.legL)return;let s=Math.sin(t);i.legL.rotation.x=-s*.72*e,i.legR.rotation.x=s*.72*e,i.armL&&(i.armL.rotation.x=s*.85*e),i.armR&&(i.armR.rotation.x=-s*.85*e)}function em({scene:n,cast:t=[],play:e}={}){let i=!1,s=0,o=new D,r=new D,a=[],c=[],l=!1;function h(){if(!l){l=!0;try{e?.("panic_01"),setTimeout(()=>e?.("panic_02"),400)}catch{}}}function u(m){for(let _ of t){let y=_?.mesh;!y||_.kind==="gull"||!y.position||Math.hypot(y.position.x-m.x,y.position.z-m.z)>34||(vw(m,y.position,o),y.userData.flee={x:o.x,z:o.z,spd:mw*(.85+Math.random()*.35)},y.userData.fleePhase=Math.random()*Math.PI*2,c.includes(y)||c.push(y))}}function d(m,_){let y=Math.min(m,Q0-a.length);for(let v=0;v<y;v++){let C=Ew(),A=(a.length+v)/Q0*Math.PI*2+.4+Math.random()*.3,S=yw+Math.random()*5,I=_.x+Math.cos(A)*S,E=_.z+Math.sin(A)*S;C.position.set(I,0,E),n.add(C),a.push({root:C,x:I,z:E,phase:Math.random()*Math.PI*2,speed:gw*(.88+Math.random()*.2),reach:0})}}function f(m){if(!i){i=!0,s=2,r.set(m?.x||0,0,m?.z||0),h();try{e?.("chase_01")}catch{}u(r),d(4,r)}}function g(m={}){let _=m.point||m.victim?.mesh?.position||r;r.set(_.x||0,0,_.z||0);let y=s<1;if(i=!0,h(),u(r),y&&(s=1,d(2,r)),m.lethal||!y){if(s<2){s=2;try{e?.("chase_01")}catch{}}d(m.lethal?4:2,r)}return s}function x(m,_){if(!i||!(m>0))return;let y=Math.min(m,.05);for(let v of c){let C=v.userData.flee;if(!C)continue;let S=Math.hypot(v.position.x-r.x,v.position.z-r.z)>_w?0:1;S?(v.position.x+=C.x*C.spd*y,v.position.z+=C.z*C.spd*y,v.rotation.y=Math.atan2(C.x,C.z),v.userData.fleePhase+=y*(5.2+C.spd*.9),v.position.y=Math.abs(Math.sin(v.userData.fleePhase))*.055):(v.userData.fleePhase+=y*1.4,v.position.y=0),Mw(v,v.userData.fleePhase,S?1:.12)}if(_)for(let v of a){let C=_.x-v.x,A=_.z-v.z,S=Math.hypot(C,A)||1,I=S>uu+1.4?v.speed:S>uu?xw:0;I>0&&(v.x+=C/S*I*y,v.z+=A/S*I*y);let E=S<uu+.8?1:0;v.reach+=(E-v.reach)*Math.min(1,y*4),v.phase+=y*(2.2+I*1.15),v.root.position.set(v.x,0,v.z),v.root.rotation.y=Math.atan2(C,A),tm(v.root,{walkPhase:v.phase,speed:I,reach:v.reach})}}function p(){for(let m of a)n?.remove(m.root);a.length=0;for(let m of c)delete m.userData.flee;c.length=0,i=!1,s=0,l=!1}return{trigger:f,onHarm:g,tick:x,dispose:p,get active(){return i},get level(){return s},get copCount(){return a.length}}}var nm=.62,bw=.32,ww=1.55,Sw=1.15,Tw=Math.cos(.95),Rw=Math.cos(.38),Aw=1.35,im=.72,sm=.47,Cc=60,om=.24,rm=.3,du=1.62,Cw=.22,Pw=16,Lw=.15,Lo=1/60,fu=.984,Iw=7,Dw=35e-5,Uw=.7,Hw={torso:new Tt(.34,.5,.18),head:new Tt(.22,.22,.22),arm:new Tt(.09,.5,.09),leg:new Tt(.11,.7,.11)},Uo=[{id:"torso",geo:"torso",ox:0,oy:1.16,oz:0,half:.25,inv:.35,mat:"skin"},{id:"head",geo:"head",ox:0,oy:1.62,oz:0,half:.11,inv:.85,mat:"skin"},{id:"armL",geo:"arm",ox:-.28,oy:1.2,oz:0,half:.25,inv:1,mat:"skin"},{id:"armR",geo:"arm",ox:.28,oy:1.2,oz:0,half:.25,inv:1,mat:"skin"},{id:"legL",geo:"leg",ox:-.09,oy:.36,oz:0,half:.35,inv:1,mat:"cover"},{id:"legR",geo:"leg",ox:.09,oy:.36,oz:0,half:.35,inv:1,mat:"cover"}],Nw=Uo.slice(1).map(n=>({a:0,b:Uo.indexOf(n),rest:Math.hypot(n.ox-Uo[0].ox,n.oy-Uo[0].oy,n.oz-Uo[0].oz)})),Io={beam:new Mt(1,1,1,6,1,!0),flash:new Kt(1,8,6),scorch:new ja(1,14),burn:new Kt(1,6,5)},Do={beamCore:new ce({color:16773350,transparent:!0,opacity:1,blending:fi,depthWrite:!1,side:he,toneMapped:!1}),beamGlow:new ce({color:16722450,transparent:!0,opacity:.5,blending:fi,depthWrite:!1,side:he,toneMapped:!1}),flash:new ce({color:16765600,transparent:!0,opacity:1,blending:fi,depthWrite:!1,toneMapped:!1}),charge:new ce({color:16725016,transparent:!0,opacity:.9,blending:fi,depthWrite:!1,toneMapped:!1}),scorch:new ce({color:1182214,transparent:!0,opacity:.82,depthWrite:!1,toneMapped:!1}),burn:new ce({color:1444872,toneMapped:!1})},mu=new D(0,1,0),am=8,cm=new se,lm=new Map;function hm(n){let t=lm.get(n);return t||(t=new Bt({color:n,roughness:.72,metalness:.04}),lm.set(n,t)),t}function Pc(){}function um(n,t){let e=n.face?.normal;return e?(cm.getNormalMatrix(n.object.matrixWorld),t.copy(e).applyMatrix3(cm),t.lengthSq()<1e-8?t.copy(mu):t.normalize()):t.copy(mu)}function pu(n,t){return n+Math.random()*(t-n)}function kw(n,t,e){let i=Math.cos(e),s=Math.sin(e);return{x:n*i-t*s,z:n*s+t*i}}function Ow(n){let t=n?.userData?.body,e=13934698,i=2060152,s=t?.skinM?.color;s&&(e=s.getHex());let o=t?.legL?.children?.[1]?.material?.color;return o?i=o.getHex():i=e,{skin:e,cover:i}}function dm(n){if(!n||n.ageBand!=="adult"||n.kind==="gull")return!1;let t=n.mesh;return!(!t||!t.isObject3D||t.userData?.combatDown)}function Bw(n,t){let e=-Pw*t*t;for(let i of n){let s=(i.x-i.px)*fu,o=(i.y-i.py)*fu,r=(i.z-i.pz)*fu;i.px=i.x,i.py=i.y,i.pz=i.z,i.x+=s,i.y+=o+e,i.z+=r,i.rx+=r*7,i.rz-=s*7}}function zw(n,t){for(let e of Nw){let i=n[e.a],s=n[e.b],o=s.x-i.x,r=s.y-i.y,a=s.z-i.z,c=Math.hypot(o,r,a)||1e-6,l=i.inv+s.inv,h=(c-e.rest*t)/c*(1/l);i.x+=o*h*i.inv,i.y+=r*h*i.inv,i.z+=a*h*i.inv,s.x-=o*h*s.inv,s.y-=r*h*s.inv,s.z-=a*h*s.inv}}function Fw(n,t){for(let e of n){let i=t+e.half;if(e.y>=i)continue;let s=e.x-e.px,o=e.y-e.py,r=e.z-e.pz;e.y=i,e.py=o<0?e.y+o*Lw:e.y,e.px=e.x-s*.7,e.pz=e.z-r*.7}}function Gw(n){let t=0;for(let e of n){let i=e.x-e.px,s=e.y-e.py,o=e.z-e.pz;t+=i*i+s*s+o*o}return t}function fm({scene:n,cast:t,onHarm:e,play:i}={}){let s=new _t;s.name="combat-fx",n?.add(s);let o=new W(Io.beam,Do.beamCore.clone()),r=new W(Io.beam,Do.beamGlow.clone()),a=new W(Io.flash,Do.flash.clone()),c=new W(Io.flash,Do.charge.clone());for(let X of[o,r,a,c])X.visible=!1,X.raycast=Pc,X.renderOrder=3,s.add(X);let l=[];for(let X=0;X<am;X++){let ot=new W(Io.scorch,Do.scorch.clone());ot.visible=!1,ot.raycast=Pc,ot.renderOrder=1,s.add(ot),l.push(ot)}let h=0,u=[],d=new sc;d.far=Cc;let f=[],g=[],x=[],p=new Map,m=X=>{X.isMesh&&X.visible&&x.push(X)},_=new D,y=new D,v=new D,C=new D,A=new D,S=new D,I=0,E=0,T=-1,U=-1,Y=!0,q=!0,P=0,z=0,B=0,F=0,Z=0,K=0;function M(X){if(!(typeof i!="function"||!X))try{i(X)}catch{}}function N(X,ot,rt){let R=Math.cos(ot);return rt.set(-Math.sin(X)*R,Math.sin(ot),-Math.cos(X)*R)}function w(X,ot){let rt=new _t;rt.name="combat-ragdoll";let R=hm(X.skin),b=hm(X.cover),V=Uo.map(j=>{let ut=new W(Hw[j.geo],j.mat==="cover"?b:R);return ut.castShadow=!0,ut.receiveShadow=!0,ut.scale.setScalar(ot),ut.raycast=Pc,rt.add(ut),{mesh:ut,x:0,y:j.oy*ot,z:0,px:0,py:j.oy*ot,pz:0,half:j.half*ot,inv:j.inv,rx:0,rz:0,ox:j.ox*ot,oy:j.oy*ot,oz:j.oz*ot}});return n.add(rt),{root:rt,parts:V}}function k(X,ot,rt,R){let b=X.mesh,V=(b.userData?.body?.scale??1)||1,j=b.rotation.y,ut=b.position.y,pt=w(Ow(b),V),Rt=1.7+R*2.1,bt=1.7+R*1.3;for(let Q of pt.parts){let gt=kw(Q.ox,Q.oz,j);Q.x=b.position.x+gt.x,Q.y=ut+Q.oy,Q.z=b.position.z+gt.z;let at=ot*Rt+pu(-.5,.5),yt=bt+pu(.1,.8),Ot=rt*Rt+pu(-.5,.5);Q.px=Q.x-at*Lo,Q.py=Q.y-yt*Lo,Q.pz=Q.z-Ot*Lo,Q.rx=0,Q.rz=0,Q.mesh.position.set(Q.x,Q.y,Q.z),Q.mesh.rotation.set(0,j,0)}b.visible=!1,b.userData.combatDown=!0,b.userData.paintTarget=!1,b.userData.flee=null,X.down=!0;let St={parts:pt.parts,root:pt.root,groundY:ut,s:V,yaw:j,acc:0,still:0,asleep:!1};return u.push(St),St}function H(X,ot){let rt=X.parts[0],R=new W(Io.burn,Do.burn);R.raycast=Pc;let b=.075*X.s;R.scale.set(b,b*.65,b),A.set(ot.x-rt.x,ot.y-rt.y,ot.z-rt.z);let V=A.length();V>1e-4&&A.multiplyScalar(Math.min(V,.2*X.s)/V),R.position.copy(A).multiplyScalar(1/X.s),R.position.y=Math.max(-.24,Math.min(.24,R.position.y)),rt.mesh.add(R)}function J(X,ot){let rt=l[h];h=(h+1)%am;let R=.16+Math.random()*.1;rt.scale.set(R,R,1),rt.position.copy(X).addScaledVector(ot,.012),A.copy(X).add(ot),rt.lookAt(A),rt.material.opacity=.82,rt.visible=!0}function G(X,ot){a.position.copy(X),a.scale.setScalar(ot),a.material.opacity=1,a.visible=!0,Z=rm}function et(){N(P,0,y);let X=S.y+du,ot=null,rt=1/0,R=0,b=0,V=0;for(let pt of t){if(!dm(pt))continue;let Rt=pt.mesh.position,bt=Rt.x-S.x,St=Rt.z-S.z,Q=Math.hypot(bt,St);if(Q>ww||Q<1e-4)continue;let gt=Rt.y+1.15*((pt.mesh.userData?.body?.scale??1)||1);if(Math.abs(gt-X)>Aw)continue;let at=bt/Q,yt=St/Q,Ot=at*y.x+yt*y.z;Ot<Tw||Q<rt&&(ot=pt,rt=Q,R=at,b=yt,V=Ot)}if(!ot)return!1;let j=rt<=Sw&&V>=Rw,ut=(ot.mesh.userData?.body?.scale??1)||1;return v.set(ot.mesh.position.x-R*.18,ot.mesh.position.y+1.2*ut,ot.mesh.position.z-b*.18),k(ot,R,b,j?1:.5),G(v,j?.11:.075),M(j?"panic_02":"interject_oi_01"),e?.({kind:"punch",victim:ot,lethal:j,point:v.clone()}),!0}function ct(X,ot=0,rt=0){return T>=0||U>=0?!1:(X&&S.set(X.x,X.y||0,X.z),P=ot,T=0,I=0,Y=!1,!0)}function ft(X,ot,rt){let R=.016+rt*9e-4;K=rt;for(let[b,V]of[[o,1],[r,4.2]])b.scale.set(R*V,rt,R*V),b.position.copy(X).addScaledVector(ot,rt*.5),b.quaternion.setFromUnitVectors(mu,ot),b.material.opacity=V===1?1:.4,b.visible=!0;F=om}function lt(){x.length=0;for(let X of n.children)X===s||!X.visible||X.isLight||X.isCamera||X.position&&X.position.distanceToSquared(S)<.25||X.traverse(m)}function Et(X,ot){if(!n)return null;lt(),d.set(X,ot),d.far=Cc,g.length=0,d.intersectObjects(x,!1,g);for(let rt of g)if(!(rt.distance<.9))return rt;return null}function O(){N(z,B,y).normalize(),_.set(S.x,S.y+du,S.z).addScaledVector(y,Cw),f.length=0,p.clear();for(let V of t)dm(V)&&(f.push(V.mesh),p.set(V.mesh,V));d.set(_,y),d.far=Cc,g.length=0,f.length&&d.intersectObjects(f,!0,g);let X=null,ot=1/0;for(let V of g){if(V.distance<.5)continue;let j=V.object;for(;j&&!p.has(j);)j=j.parent;if(j){X=p.get(j),ot=V.distance,v.copy(V.point);break}}let rt=Et(_,y);if(!X){let V=rt?rt.distance:Cc;return ft(_,y,V),rt&&(v.copy(rt.point),um(rt,C),J(v,C),G(v,.11)),!1}if(rt&&rt.distance<ot-.05)return ft(_,y,rt.distance),v.copy(rt.point),um(rt,C),J(v,C),G(v,.11),!1;ft(_,y,ot),G(v,.16);let R=Math.hypot(y.x,y.z)||1,b=k(X,y.x/R,y.z/R,.85);return H(b,v),M("panic_03"),e?.({kind:"laser",victim:X,lethal:!0,point:v.clone()}),!0}function mt(X,ot=0,rt=0){return T>=0||U>=0?!1:(X&&S.set(X.x,X.y||0,X.z),z=ot,B=rt,U=0,E=0,q=!1,!0)}function nt(X,ot){if(ot&&S.set(ot.x,ot.y||0,ot.z),!(X>0))return;let rt=Math.min(X,.05);if(T>=0&&(T+=rt,I=Math.min(1,T/nm),!Y&&T>=bw&&(Y=!0,et()),T>=nm&&(T=-1,I=0)),U>=0){U+=rt,E=Math.min(1,U/im);let R=Math.min(1,U/sm);q||(c.position.set(S.x,S.y+du,S.z),N(z,B,A),c.position.addScaledVector(A,.2),c.scale.setScalar(.03+R*.075),c.material.opacity=.35+R*.6,c.visible=!0),!q&&U>=sm&&(q=!0,c.visible=!1,O()),U>=im&&(U=-1,E=0,c.visible=!1)}if(F>0){F-=rt;let R=Math.max(0,F/om);if(F<=0)o.visible=!1,r.visible=!1;else{o.material.opacity=R,r.material.opacity=.4*R*R;let b=1+(1-R)*.9,V=.016+K*9e-4;r.scale.set(V*4.2*b,K,V*4.2*b)}}if(Z>0){Z-=rt;let R=Math.max(0,Z/rm);Z<=0?a.visible=!1:(a.material.opacity=R,a.scale.multiplyScalar(1+2*rt))}for(let R=0;R<u.length;R++){let b=u[R];if(b.asleep)continue;b.acc+=rt;let V=0;for(;b.acc>=Lo&&V<4;){b.acc-=Lo,V++,Bw(b.parts,Lo);for(let j=0;j<Iw;j++)zw(b.parts,b.s);Fw(b.parts,b.groundY)}if(V){for(let j of b.parts)j.mesh.position.set(j.x,j.y,j.z),j.mesh.rotation.set(j.rx,b.yaw,j.rz);Gw(b.parts)<Dw?(b.still+=rt,b.still>=Uw&&(b.asleep=!0)):b.still=0}}}function ht(){for(let X of u)n?.remove(X.root);u.length=0,n?.remove(s)}return{punch:ct,laser:mt,tick:nt,dispose:ht,get swinging(){return T>=0||U>=0},get punchT(){return I},get laserT(){return E},get downed(){return u.length}}}var Lc=1/60,Vw=14,pm=4,Ww=.9,Xw=.16,qw=.55,Yw=.45;var gu=30,xu=26,Zw=.004,$w={boardwalkY:.22,waterEdgeZ:-14,wetEdgeZ:-3,waterY:.02,swellZ0:-32,bedSlope:.13,bedDepth:2.2},_m={mu:.85,bounce:.5,roll:.9,creep:.45},Kw={mu:.5,bounce:.92,roll:.3,creep:.2},mm={mu:.95,bounce:.34,roll:1.5,creep:.7},gm={sphere:{density:45,e:.62,mu:1,drag:.06,buoy:5,kick:1,lift:.5},box:{density:170,e:.3,mu:1,drag:.12,buoy:2.6,kick:.8,lift:.28},debris:{density:40,e:.36,mu:1,drag:.9,buoy:4,kick:1.15,lift:.55}},yi=new D,ts=new de,xm=new Ie,Ir=new Un,Ic=new D,ym=new D,qn={y:0,surf:_m,water:!1},Qi={x:0,y:0,z:0},ge=[[0,0,0],[0,0,0],[0,0,0]];function Dr(n,t,e){return n<t?t:n>e?e:n}function Jw(n,t,e,i,s){let o=t*s*.5,r=e*s*.5,a=i*s*.5,{x:c,y:l,z:h,w:u}=n,d=-(o*c+r*l+a*h),f=o*u+r*h-a*l,g=r*u+a*c-o*h,x=a*u+o*l-r*c,p=c+f,m=l+g,_=h+x,y=u+d,v=Math.hypot(p,m,_,y)||1;n.set(p/v,m/v,_/v,y/v)}function jw(n,t){ts.makeRotationFromQuaternion(n);let e=ts.elements;ge[0][0]=e[0],ge[0][1]=e[1],ge[0][2]=e[2],ge[1][0]=e[4],ge[1][1]=e[5],ge[1][2]=e[6],ge[2][0]=e[8],ge[2][1]=e[9],ge[2][2]=e[10];let i=0;for(let f=1;f<3;f++)Math.abs(ge[f][1])>Math.abs(ge[i][1])&&(i=f);let s=(i+1)%3,o=(i+2)%3,r=ge[i][1]>=0?1:-1,a=Math.round(Math.atan2(ge[s][0],ge[s][2])/(Math.PI/2))*(Math.PI/2);ge[i][0]=0,ge[i][1]=r,ge[i][2]=0,ge[s][0]=Math.sin(a),ge[s][1]=0,ge[s][2]=Math.cos(a);let c=ge[i],l=ge[s];ge[o][0]=c[1]*l[2]-c[2]*l[1],ge[o][1]=c[2]*l[0]-c[0]*l[2],ge[o][2]=c[0]*l[1]-c[1]*l[0];let h=ge[0],u=ge[1],d=ge[2];ts.set(h[0],u[0],d[0],0,h[1],u[1],d[1],0,h[2],u[2],d[2],0,0,0,0,1),t.setFromRotationMatrix(ts)}function Qw(n,t){ts.makeRotationFromQuaternion(n.q);let e=ts.elements,i=e[1]>=0?-1:1,s=e[5]>=0?-1:1,o=e[9]>=0?-1:1,r=i*n.hx,a=s*n.hy,c=o*n.hz;t.x=e[0]*r+e[4]*a+e[8]*c,t.y=e[1]*r+e[5]*a+e[9]*c,t.z=e[2]*r+e[6]*a+e[10]*c;let l=Math.max(Math.abs(e[1]),Math.abs(e[5]),Math.abs(e[9]));if(l>.9){let h=1-Dr((l-.9)/.085,0,1);t.x*=h,t.z*=h}}function tS(n,t){ts.makeRotationFromQuaternion(n.q);let e=ts.elements,i=Math.abs(e[1]),s=Math.abs(e[5]),o=Math.abs(e[9]),r=i>s?i>o?0:2:s>o?1:2;if(r===n.thin)return!1;let c=(3-r-n.thin)*4,l=e[c],h=e[c+2],u=Math.hypot(l,h);return u<.2?!1:(l/=u,h/=u,n.w.x+=l*n.spin0*7*t,n.w.z+=h*n.spin0*7*t,!0)}function eS(n,t,e,i,s,o,r,a,c,l){let h=n.v.x+(n.w.y*i-n.w.z*e),u=n.v.y+(n.w.z*t-n.w.x*i),d=n.v.z+(n.w.x*e-n.w.y*t),f=h*s+u*o+d*r,g=e*r-i*o,x=i*s-t*r,p=t*o-e*s,m=n.invM+n.invI*(g*g+x*x+p*p),_=0;f<0&&(_=-(1+(-f>Ww?a:0))*f/m,n.v.x+=s*_*n.invM,n.v.y+=o*_*n.invM,n.v.z+=r*_*n.invM,n.w.x+=g*_*n.invI,n.w.y+=x*_*n.invI,n.w.z+=p*_*n.invI,h=n.v.x+(n.w.y*i-n.w.z*e),u=n.v.y+(n.w.z*t-n.w.x*i),d=n.v.z+(n.w.x*e-n.w.y*t));let y=h*s+u*o+d*r,v=h-s*y,C=u-o*y,A=d-r*y,S=Math.hypot(v,C,A);if(S<1e-4)return;v/=S,C/=S,A/=S;let I=e*A-i*C,E=i*v-t*A,T=t*C-e*v,U=n.invM+n.invI*(I*I+E*E+T*T),Y=Math.min(S/U,c*Math.max(_,l));n.v.x-=v*Y*n.invM,n.v.y-=C*Y*n.invM,n.v.z-=A*Y*n.invM,n.w.x-=I*Y*n.invI,n.w.y-=E*Y*n.invI,n.w.z-=T*Y*n.invI}function vm(n={}){let t=n.scene||null,e=n.bounds||{minX:-44,maxX:44,minZ:-34,maxZ:34},i=n.colliders||null,s=n.isWood||null,o=Object.assign({},$w,n.world||{}),r=n.playerRadius??.42,a=n.playerHeight??1.9,c=n.colliderTop??2.4,l=n.kickGain??1.55,h=n.gravity??Vw,u=n.waterHeight||((M,N,w)=>o.waterY+(Math.sin(M*.12+w*1.35)*.16+Math.sin((N-o.swellZ0)*.2+w*.95)*.1)*.5),d=[],f=new Map,g=0,x=0,p=!0,m=0,_=()=>Array.isArray(i)?i:i?.COL||null;function y(M,N){return s&&s(M,N)?(qn.y=o.boardwalkY,qn.surf=Kw,qn.water=!1,qn):N<o.waterEdgeZ?(qn.y=-Math.min(o.bedDepth,(o.waterEdgeZ-N)*o.bedSlope),qn.surf=mm,qn.water=!0,qn):(qn.y=0,qn.surf=N<o.wetEdgeZ?mm:_m,qn.water=!1,qn)}function v(M){M.awake||(M.awake=!0,m++),M.sleepT=0}function C(M){M.awake&&(M.awake=!1,m--),M.v.set(0,0,0),M.w.set(0,0,0),M.sleepT=0}function A(M){M.mesh.quaternion.copy(M.q),yi.copy(M.off).applyQuaternion(M.q),M.mesh.position.set(M.p.x-yi.x,M.p.y-yi.y,M.p.z-yi.z)}function S(M,N={}){if(!M)return null;let w=f.get(M);if(w)return w;let k=M.position.clone(),H=M.quaternion.clone();M.position.set(0,0,0),M.quaternion.identity(),Ir.setFromObject(M),M.position.copy(k),M.quaternion.copy(H),M.updateMatrixWorld(!0),Ir.isEmpty()&&Ir.set(new D(-.2,-.2,-.2),new D(.2,.2,.2)),Ir.getSize(Ic),Ir.getCenter(ym);let J=N.hx??Math.max(.02,Ic.x/2),G=N.hy??Math.max(.02,Ic.y/2),et=N.hz??Math.max(.02,Ic.z/2),ct=M.userData?.radius!=null||M.geometry?.type==="SphereGeometry",ft=N.type||(ct?"sphere":"box"),lt=gm[ft]||gm.box,Et=N.radius??(ft==="sphere"?M.userData?.radius??(J+G+et)/3:Math.hypot(J,et)),O=ft==="sphere"?4/3*Math.PI*Et*Et*Et:8*J*G*et,mt=Math.max(.05,N.mass??lt.density*O),nt=ft==="sphere"?.4*mt*Et*Et:mt*(J*J+G*G+et*et)/3,ht={mesh:M,type:ft,sphere:ft==="sphere",mass:mt,invM:1/mt,invI:1/Math.max(1e-4,nt),r:Et,hx:J,hy:G,hz:et,off:ym.clone(),e:N.restitution??lt.e,mu:N.friction??lt.mu,drag:N.drag??lt.drag,buoy:N.buoyancy??lt.buoy,kick:N.kick??lt.kick,lift:N.lift??lt.lift,p:new D,v:new D,w:new D,q:H.clone(),home:{p:new D,q:H.clone()},awake:!1,sleepT:0,grounded:!1,sub:0,fixed:!!N.fixed,thin:J<G?J<et?0:2:G<et?1:2,slab:N.topple??Math.min(J,G,et)<.4*Math.max(J,G,et),spin0:Math.round(Math.abs(k.x)*3+Math.abs(k.z)*5)&1?1:-1};return yi.copy(ht.off).applyQuaternion(ht.q),ht.p.set(k.x+yi.x,k.y+yi.y,k.z+yi.z),ht.home.p.copy(ht.p),d.push(ht),f.set(M,ht),N.awake&&v(ht),ht}function I(M,N){let w=[];if(!M)return w;for(let k of M){let H=S(k,N);H&&w.push(H)}return w}function E(M){return M&&M.mesh?M:f.get(M)||null}function T(M,N=!1){let w=E(M);if(!w)return!1;let k=d.indexOf(w);return k>=0&&d.splice(k,1),f.delete(w.mesh),w.awake&&m--,N&&t&&t.remove(w.mesh),!0}function U(M,N,w=1,k={}){let H=E(M);if(!H||!N)return!1;let J=Math.hypot(N.x,N.y||0,N.z)||1,G=k.velocity?w:w*H.invM,et=N.x/J,ct=(N.y||0)/J,ft=N.z/J;H.v.x+=et*G,H.v.y+=ct*G+(k.lift??H.lift)*G*.35,H.v.z+=ft*G;let lt=k.spin??.7;return lt&&(H.w.x+=-ft*G*lt*(H.sphere?1/H.r:.9),H.w.z+=et*G*lt*(H.sphere?1/H.r:.9)),H.fixed=!1,v(H),!0}function Y(M,N=3,w=8,k={}){let H=0;for(let J of d){let G=J.p.x-M.x,et=J.p.y-(M.y??J.p.y),ct=J.p.z-M.z,ft=Math.hypot(G,et,ct);if(ft>N)continue;let lt=1-ft/N;yi.set(G,Math.max(.35,et),ct),U(J,yi,w*lt*lt,k),H++}return H}function q(M,N){if(!M)return;let w=N?.x||0,k=N?.z||0,H=Math.hypot(w,k)>.05;for(let J=0;J<d.length;J++){let G=d[J];if(G.fixed)continue;let et=G.p.x-M.x,ct=G.p.z-M.z,ft=r+G.r,lt=et*et+ct*ct;if(lt>ft*ft)continue;let Et=G.p.y-G.r,O=G.p.y+G.r;if(Et>M.y+a||O<M.y-.35)continue;let mt=Math.sqrt(lt)||1e-4,nt=et/mt,ht=ct/mt,X=ft-mt;G.p.x+=nt*X,G.p.z+=ht*X;let ot=w*nt+k*ht-(G.v.x*nt+G.v.z*ht);if(ot>.05){let rt=ot*l*G.kick;if(G.v.x+=nt*rt,G.v.z+=ht*rt,G.p.y-G.r<y(G.p.x,G.p.z).y+.12&&(G.v.y=Math.min(3.6,G.v.y+ot*G.lift)),G.sphere){let R=rt/G.r*.4;G.w.x+=ht*R,G.w.z+=-nt*R}v(G)}else(H||X>.002)&&(G.v.x+=nt*.9*G.kick,G.v.z+=ht*.9*G.kick,v(G))}}function P(M,N){let w=0;if(M.p.z<o.waterEdgeZ+.6){let G=u(M.p.x,M.p.z,x),et=Math.max(.08,(M.sphere?M.r:M.hy)*2);if(w=Dr((G-(M.p.y-(M.sphere?M.r:M.hy)))/et,0,1),w*=Dr((o.waterEdgeZ+.6-M.p.z)/1.2,0,1),w>.02){M.v.y+=h*M.buoy*w*N,M.v.y-=M.v.y*Math.min(1,3.4*w*N);let ct=Math.min(1,1.5*w*N);M.v.x-=M.v.x*ct,M.v.z-=(M.v.z-.45)*ct,M.v.x-=Math.cos(M.p.x*.12+x*1.35)*.0192*h*w*N,M.v.z-=Math.cos((M.p.z-o.swellZ0)*.2+x*.95)*.02*h*w*N,M.w.x-=M.w.x*Math.min(1,2.2*w*N),M.w.y-=M.w.y*Math.min(1,1.4*w*N),M.w.z-=M.w.z*Math.min(1,2.2*w*N)}}M.sub=w,M.v.y-=h*N*(1-Math.min(1,w));let k=Math.min(1,(M.drag+w*1.2)*N);M.v.x-=M.v.x*k,M.v.y-=M.v.y*k*.4,M.v.z-=M.v.z*k,M.p.x+=M.v.x*N,M.p.y+=M.v.y*N,M.p.z+=M.v.z*N;let H=y(M.p.x,M.p.z);M.sphere?(Qi.x=0,Qi.y=-M.r,Qi.z=0):Qw(M,Qi);let J=H.y-(M.p.y+Qi.y);if(M.grounded=!1,J>-Zw){J>0&&(M.p.y+=J),M.grounded=!0;let G=M.mass*h*N;eS(M,Qi.x,Qi.y,Qi.z,0,1,0,M.e*H.surf.bounce,M.mu*H.surf.mu,G);let et=Math.min(1,H.surf.roll*(1-w*.4)*N);M.v.x-=M.v.x*et,M.v.z-=M.v.z*et,M.w.x-=M.w.x*et,M.w.y-=M.w.y*et*1.6,M.w.z-=M.w.z*et;let ct=Math.hypot(M.v.x,M.v.z),ft=H.surf.creep*N;if(ct>1e-5){let lt=Math.max(0,ct-ft)/ct;M.v.x*=lt,M.v.z*=lt}if(!M.sphere){let lt=M.w.length();ct<.6&&lt<2.2&&!(M.slab&&tS(M,N))&&(jw(M.q,xm),M.q.slerp(xm,Math.min(1,5*N)),M.w.multiplyScalar(Math.max(0,1-6*N)))}}M.p.y<-6&&(M.p.y=H.y+M.r,M.v.set(0,0,0))}function z(M){let N=M.e*.7,w=_();if(w&&M.p.y-M.r<c)for(let k=0;k<w.length;k++){let H=w[k];if(M.p.x<H.minX-M.r||M.p.x>H.maxX+M.r||M.p.z<H.minZ-M.r||M.p.z>H.maxZ+M.r)continue;let J=Dr(M.p.x,H.minX,H.maxX),G=Dr(M.p.z,H.minZ,H.maxZ),et=M.p.x-J,ct=M.p.z-G,ft=Math.hypot(et,ct);if(ft<1e-5){let Et=M.p.x-H.minX,O=H.maxX-M.p.x,mt=M.p.z-H.minZ,nt=H.maxZ-M.p.z,ht=Math.min(Et,O,mt,nt);et=ht===Et?-1:ht===O?1:0,ct=et!==0?0:ht===mt?-1:1,ft=0,M.p.x+=et*(ht+M.r),M.p.z+=ct*(ht+M.r)}else{et/=ft,ct/=ft;let Et=M.r-ft;M.p.x+=et*Et,M.p.z+=ct*Et}let lt=M.v.x*et+M.v.z*ct;lt<0&&(M.v.x-=(1+N)*lt*et,M.v.z-=(1+N)*lt*ct,M.w.x*=.7,M.w.z*=.7)}M.p.x<e.minX+M.r?(M.p.x=e.minX+M.r,M.v.x<0&&(M.v.x*=-N)):M.p.x>e.maxX-M.r&&(M.p.x=e.maxX-M.r,M.v.x>0&&(M.v.x*=-N)),M.p.z<e.minZ+M.r?(M.p.z=e.minZ+M.r,M.v.z<0&&(M.v.z*=-N)):M.p.z>e.maxZ-M.r&&(M.p.z=e.maxZ-M.r,M.v.z>0&&(M.v.z*=-N)),M.v.lengthSq()>gu*gu&&M.v.setLength(gu),M.w.lengthSq()>xu*xu&&M.w.setLength(xu)}function B(){for(let M=0;M<d.length;M++){let N=d[M];if(!N.fixed)for(let w=M+1;w<d.length;w++){let k=d[w];if(k.fixed||!N.awake&&!k.awake)continue;let H=k.p.x-N.p.x,J=k.p.y-N.p.y,G=k.p.z-N.p.z,et=N.r+k.r,ct=H*H+J*J+G*G;if(ct>et*et||ct<1e-8)continue;let ft=Math.sqrt(ct),lt=H/ft,Et=J/ft,O=G/ft,mt=N.invM+k.invM,nt=(et-ft)/mt;N.p.x-=lt*nt*N.invM,N.p.y-=Et*nt*N.invM,N.p.z-=O*nt*N.invM,k.p.x+=lt*nt*k.invM,k.p.y+=Et*nt*k.invM,k.p.z+=O*nt*k.invM;let ht=(k.v.x-N.v.x)*lt+(k.v.y-N.v.y)*Et+(k.v.z-N.v.z)*O;if(ht<0){let ot=-(1+Math.min(N.e,k.e)*.8)*ht/mt;N.v.x-=lt*ot*N.invM,N.v.y-=Et*ot*N.invM,N.v.z-=O*ot*N.invM,k.v.x+=lt*ot*k.invM,k.v.y+=Et*ot*k.invM,k.v.z+=O*ot*k.invM,Math.abs(ht)>.3&&(v(N),v(k))}}}}function F(M,N,w){x+=M,q(N,w);for(let k=0;k<d.length;k++){let H=d[k];!H.awake||H.fixed||(P(H,M),z(H),Jw(H.q,H.w.x,H.w.y,H.w.z,M))}B();for(let k=0;k<d.length;k++){let H=d[k];if(!H.awake||H.fixed)continue;let J=Math.hypot(H.v.x,H.v.z),G=H.w.length(),et=Math.abs(H.v.y)<h*Lc*1.6;if(J<Xw&&et&&G<qw&&H.grounded&&H.sub<.05){if(H.sleepT+=M,H.sleepT>=Yw){C(H);let ct=y(H.p.x,H.p.z);H.sphere&&(H.p.y=ct.y+H.r),A(H)}}else H.sleepT=0}}function Z(M,N,w){if(!p||!(M>0))return;g+=Math.min(M,.1);let k=0;for(;g>=Lc&&k<pm;)F(Lc,N,w),g-=Lc,k++;if(k===pm&&(g=0),!!k)for(let H=0;H<d.length;H++){let J=d[H];J.awake&&!J.fixed&&A(J)}}function K(){for(let M of d)M.p.copy(M.home.p),M.q.copy(M.home.q),M.v.set(0,0,0),M.w.set(0,0,0),M.sleepT=0,M.sub=0,M.awake&&m--,M.awake=!1,A(M);g=0}return{add:S,addAll:I,get:E,remove:T,impulse:U,explode:Y,wake:M=>{let N=E(M);return N&&(N.fixed=!1,v(N)),!!N},tick:Z,reset:K,bodies:d,get awake(){return m},get count(){return d.length},get time(){return x},setEnabled(M){p=!!M},groundAt:y,waterHeight:(M,N,w)=>u(M,N,w??x)}}var Em=12,nS=.02,Mm=.85,bm="aus101-reticule-css";function Ur(n){return n?n.mesh||n:null}function Tm(n){return n&&(n.kind||n.mesh?.userData?.kind||n.userData?.kind)||null}function iS(n){let t=Ur(n);if(!t)return!1;let e=t.userData||{},i=n.ageBand??e.ageBand,s=Tm(n);return!(i!=="adult"||e.paintTarget===!1||s==="sigma_07"||s==="goth"||s==="kid"||s==="gull")}function wm(n){let t=xi(n);if(Number.isFinite(t))return Math.min(1,Math.max(0,t));let i=Ur(n)?.userData?.coverage;return Number.isFinite(i)?Math.min(1,Math.max(0,i)):0}function sS(n){return String(n).padStart(2,"0")}function oS(){if(typeof document>"u"||document.getElementById(bm))return;let n=document.createElement("style");n.id=bm,n.textContent=`
#aus101-reticule{
  position:fixed;
  z-index:12;
  pointer-events:none;
  left:max(8px, env(safe-area-inset-left, 0px));
  top:max(8px, env(safe-area-inset-top, 0px));
  display:grid;
  grid-template-columns:repeat(6, minmax(86px, 1fr));
  gap:4px;
  max-width:min(920px, calc(100vw - 16px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)));
  font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  -webkit-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:transparent;
}
@media (orientation:landscape){
  #aus101-reticule{top:max(20px, env(safe-area-inset-top, 0px));}
}
@media (max-width:699px){
  #aus101-reticule{grid-template-columns:minmax(112px, 44vw);}
}
.aus101-ret-slot{
  pointer-events:none;
  box-sizing:border-box;
  min-height:22px;
  padding:3px 6px;
  border:1px solid rgba(196,160,80,0.42);
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 1px rgba(255,180,80,0.1);
  background:linear-gradient(180deg, rgba(42,30,16,0.72), rgba(10,12,10,0.78));
  color:#ff1818;
  font-size:9px;
  line-height:1.25;
  letter-spacing:0.07em;
  text-transform:uppercase;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  cursor:pointer;
}
.aus101-ret-slot.is-empty{
  pointer-events:none;
  opacity:0.22;
  color:rgba(255,40,40,0.55);
}
.aus101-ret-slot.is-live{pointer-events:auto;}
.aus101-ret-slot.is-applying{
  border-color:#e0b040;
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 2px #e0b040;
}
.aus101-ret-slot.is-locked{
  border-color:rgba(70,180,90,0.7);
  color:#7dff8a;
}
.aus101-ret-slot.is-sel{
  border-color:#f2c12e;
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 2px #f2c12e;
}
.aus101-ret-slot.is-burn{
  color:#ff3a3a;
  animation:aus101-ret-flash 0.42s steps(2, end) infinite;
}
@keyframes aus101-ret-flash{
  0%,49%{background:rgba(110,8,8,0.88);color:#ff4444;}
  50%,100%{background:rgba(18,6,6,0.8);color:#ffd0d0;}
}
`.trim(),document.head.appendChild(n)}function Sm(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e&&e.appendChild(i),i}function Rm(n={}){oS();let t=Sm("div");t.id="aus101-reticule",t.setAttribute("aria-label","Reticule bay");let e=[],i=[],s=0,o=-1;for(let f=0;f<Em;f++){e.push({id:f,kind:null,mesh:null,coverage:0,dose:0,burn:!1,applying:!1,_seq:0,_prevCov:0});let g=Sm("div","aus101-ret-slot is-empty",t);g.dataset.slot=String(f),g.addEventListener("pointerdown",x=>{let p=e[f];p.mesh&&(x.preventDefault(),x.stopPropagation(),o=f,n.onSelect?.(p),t.dispatchEvent(new CustomEvent("aus101-reticule-select",{detail:p})),c())}),i.push(g)}function r(f){let g=sS(f.id+1);if(!f.mesh)return`SUBJECT ${g} // \u2014\u2014`;if(f.burn||f.dose>1)return`SUBJECT ${g} // BURN`;let x=Math.max(0,Math.round((1-f.dose)*100));return`SUBJECT ${g} // TELOMERE ${x}%`}function a(f){let g=e[f],x=i[f];x.textContent=r(g);let p=!!g.mesh;x.className="aus101-ret-slot",p?x.classList.add("is-live"):x.classList.add("is-empty"),p&&(g.burn||g.dose>1)?x.classList.add("is-burn"):p&&g.coverage>=Mm&&x.classList.add("is-locked"),p&&g.applying&&x.classList.add("is-applying"),p&&o===f&&x.classList.add("is-sel")}function c(){for(let f=0;f<Em;f++)a(f)}function l(f,g){let x=Ur(g),p=x.userData||(x.userData={});f.kind=Tm(g),f.mesh=x,f.coverage=wm(g),f.dose=Number.isFinite(p.dose)?p.dose:0,f.burn=f.dose>1||!!p.burn,f.applying=!1,f._seq=++s,f._prevCov=f.coverage,p.dose=f.dose,f.burn&&(p.burn=!0),a(f.id)}function h(f){f.kind=null,f.mesh=null,f.coverage=0,f.dose=0,f.burn=!1,f.applying=!1,f._seq=0,f._prevCov=0,o===f.id&&(o=-1),a(f.id)}function u(f){if(!iS(f))return null;let g=Ur(f),x=e.find(m=>m.mesh===g);if(x)return x;let p=e.find(m=>!m.mesh);return p||(p=e.reduce((m,_)=>m._seq<=_._seq?m:_),h(p)),l(p,f),p}function d(f,g){let x=Ur(g),p=Number.isFinite(f)?Math.max(0,f):0;for(let m of e){if(!m.mesh)continue;let _=wm(m.mesh);m.coverage=_;let y=_>m._prevCov+1e-5,v=x===m.mesh||y;m.applying=v,m._prevCov=_,_<Mm&&!v&&(m.dose+=(1-_)*p*nS),m.dose>1&&(m.burn=!0);let C=m.mesh.userData||(m.mesh.userData={});C.coverage=_,C.dose=m.dose,m.burn&&(C.burn=!0),a(m.id)}}return c(),{track:u,tick:d,html:t,slots:e}}var Hr=["boardwalk","apply","menu"],rS=["dj_song_01","dj_song_02","dj_song_03"];function aS(n){return n<10?`0${n}`:String(n)}function cS(){let n=t=>typeof matchMedia=="function"?matchMedia(t).matches:!1;return typeof matchMedia!="function"?"ontouchstart"in window:!!(n("(pointer: coarse)")||n("(any-pointer: coarse)")||"ontouchstart"in window&&n("(hover: none)"))}function lS(){return typeof matchMedia=="function"&&matchMedia("(orientation: landscape)").matches?!0:window.innerWidth>window.innerHeight}function Nn(n,t,e){let i=document.createElement(n);return t&&Object.assign(i.style,t),e&&e.appendChild(i),i}function hS(n,t){let e=t>>>0||1,i=n.slice();for(let s=i.length-1;s>0;s--){e=Math.imul(e,1664525)+1013904223>>>0;let o=e%(s+1),r=i[s];i[s]=i[o],i[o]=r}return i}function uS(n){if(!n||n===document.body||n===document.documentElement)return!1;let t=(n.tagName||"").toLowerCase();return t==="input"||t==="textarea"||t==="select"?!0:!!n.isContentEditable}function dS(){let n=Nn("span",{display:"flex",alignItems:"center",gap:"1px"});return Nn("span",{width:"2px",height:"10px",background:"currentColor",borderRadius:"1px"},n),Nn("span",{width:"0",height:"0",borderStyle:"solid",borderWidth:"5px 8px 5px 0",borderColor:"transparent currentColor transparent transparent"},n),n}function fS(){let n=Nn("span",{display:"flex",alignItems:"center",gap:"1px"});return Nn("span",{width:"0",height:"0",borderStyle:"solid",borderWidth:"5px 0 5px 8px",borderColor:"transparent transparent transparent currentColor"},n),Nn("span",{width:"2px",height:"10px",background:"currentColor",borderRadius:"1px"},n),n}function Am(){let n=Nn("span",{display:"flex",alignItems:"center",gap:"3px"}),t=()=>Nn("span",{width:"3px",height:"10px",background:"currentColor",borderRadius:"1px"},n);return t(),t(),n}function pS(){return Nn("span",{width:"0",height:"0",marginLeft:"2px",borderStyle:"solid",borderWidth:"6px 0 6px 9px",borderColor:"transparent transparent transparent currentColor"})}function yu(n,t){let e=Nn("button",{width:"26px",height:"26px",borderRadius:"50%",padding:"0",margin:"0",border:"1px solid rgba(251,246,234,0.28)",background:"rgba(12,18,16,0.42)",color:"rgba(251,246,234,0.92)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.18), 0 3px 12px rgba(0,0,0,0.28)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",touchAction:"none",cursor:"pointer",appearance:"none",webkitAppearance:"none",outline:"none",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",userSelect:"none",webkitUserSelect:"none"});return e.type="button",e.tabIndex=-1,e.setAttribute("aria-label",t),e.appendChild(n),e}function mS(){let n=[];for(let t=1;t<=49;t++)n.push(`dj_quip_${aS(t)}`);return hS(n,performance.now()*997|0)}function Cm({carpenter:n,voice:t,isTalking:e}={}){let i=Hr.indexOf(n?.state);i<0&&(i=0);let s=n?n.running===!1:!1,o=1,r=!1,a=[],c=!1,l=null;if(!document.getElementById("aus101-radio-css")){let F=document.createElement("style");F.id="aus101-radio-css",F.textContent="#aus101-radio,#aus101-radio *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}#aus101-radio button:active{background:rgba(255,215,106,0.28)!important;}#aus101-radio .radio-vol{-webkit-appearance:none;appearance:none;width:56px;height:18px;background:transparent;padding:0;margin:0 2px 0 0;cursor:pointer;}#aus101-radio .radio-vol::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:rgba(251,246,234,0.28);}#aus101-radio .radio-vol::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:#ffd76a;margin-top:-3.5px;border:0;}#aus101-radio .radio-vol::-moz-range-track{height:3px;border-radius:2px;background:rgba(251,246,234,0.28);}#aus101-radio .radio-vol::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:#ffd76a;border:0;}#aus101-radio[data-touch='1'] .radio-vol{display:none;}",document.head.appendChild(F)}let h=Nn("div",{position:"fixed",zIndex:"12",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",touchAction:"none"});h.id="aus101-radio",h.setAttribute("role","group"),h.setAttribute("aria-label","Reticule FM 101.7");let u=Nn("div",{display:"flex",alignItems:"center",gap:"8px",pointerEvents:"auto",touchAction:"none"},h),d=document.createElement("input");d.type="range",d.className="radio-vol",d.min="0",d.max="1",d.step="0.01",d.value="1",d.tabIndex=-1,d.setAttribute("aria-label","Volume"),u.appendChild(d);let f=yu(dS(),"Previous"),g=yu(Am(),"Pause"),x=yu(fS(),"Next"),p=Nn("span",{position:"absolute",width:"5px",height:"5px",borderRadius:"50%",right:"3px",top:"3px",background:"#ffd76a",boxShadow:"0 0 6px rgba(255,215,106,0.7)",pointerEvents:"none"});g.style.position="relative",g.appendChild(p),u.append(f,g,x);function m(){if(t?.busy)return!0;if(typeof e=="function")try{if(e(performance.now()))return!0}catch{}return!1}function _(){return a.length||(a=mS()),a.pop()}function y(){if(typeof t?.play!="function"){r=!1;return}if(m()){r=!0;return}r=!1;let F=rS[i]||"dj_song_01",Z=t.play(F);Z.ready?.then(K=>{if(!K){r=!0;return}let M=Z.onended;Z.onended=()=>{if(typeof M=="function"&&M(),m())return;let N=_();N&&t.play(N)}})}function v(F){o=Math.max(0,Math.min(1,F)),d.value!==String(o)&&(d.value=String(o)),n?.setMix?.(o)}function C(){g.replaceChildren(s?pS():Am(),p),g.setAttribute("aria-label",s?"Play":"Pause"),g.setAttribute("aria-pressed",s?"true":"false")}function A(){let F=["#ffd76a","#fbf6ea","#ff6a4a"];p.style.background=F[i]||F[0],p.style.boxShadow=`0 0 6px ${F[i]||F[0]}`}function S(F){n?.setState?.(Hr[i]),s||(n?.start?.(),n?.setMix?.(o)),A(),F&&y()}function I(F){i=(i+F+Hr.length)%Hr.length,S(!0)}function E(){s=!s,s?n?.stop?.():(n?.setState?.(Hr[i]),n?.start?.(),n?.setMix?.(o)),C()}function T(){let Z=lS()?"max(20px, calc(env(safe-area-inset-top, 0px) + 4px))":"max(12px, calc(env(safe-area-inset-top, 0px) + 6px))";h.style.top=Z,h.style.right="max(10px, env(safe-area-inset-right, 0px))",h.dataset.touch=cS()?"1":"0"}let U=F=>{if(c||F.metaKey||F.ctrlKey||F.altKey||uS(F.target))return;let Z=F.code,K=F.key;if(Z==="Minus"||Z==="NumpadSubtract"||K==="-"||K==="_"){v(o-.06),F.preventDefault();return}if(Z==="Equal"||Z==="NumpadAdd"||K==="="||K==="+"){v(o+.06),F.preventDefault();return}if(!F.repeat){if(Z==="BracketLeft"||K==="["||Z==="Comma"||K===","){I(-1),F.preventDefault();return}if(Z==="BracketRight"||K==="]"||Z==="Period"||K==="."){I(1),F.preventDefault();return}(Z==="KeyP"||K==="p"||K==="P")&&(E(),F.preventDefault())}},Y=()=>v(parseFloat(d.value)),q=F=>{if(!(F.pointerType==="mouse"&&F.button!==0)&&F.target!==d){l={id:F.pointerId,y:F.clientY,vol:o,moved:!1};try{u.setPointerCapture(F.pointerId)}catch{}}},P=F=>{if(!l||F.pointerId!==l.id)return;let Z=l.y-F.clientY;Math.abs(Z)>7&&(l.moved=!0),l.moved&&v(l.vol+Z/140)},z=F=>{if(!l||F.pointerId!=null&&F.pointerId!==l.id)return;let Z=l.moved;l=null,Z&&(F.preventDefault(),F.stopPropagation())};function B(F,Z){F.addEventListener("pointerup",K=>{l?.moved||(K.preventDefault(),K.stopPropagation(),Z())}),F.addEventListener("click",K=>{K.preventDefault(),K.stopPropagation()})}return B(f,()=>I(-1)),B(g,()=>E()),B(x,()=>I(1)),d.addEventListener("input",Y),d.addEventListener("change",Y),u.addEventListener("pointerdown",q),u.addEventListener("pointermove",P),u.addEventListener("pointerup",z),u.addEventListener("pointercancel",z),window.addEventListener("keydown",U),window.addEventListener("resize",T),window.addEventListener("orientationchange",T),T(),C(),A(),document.body.appendChild(h),{el:h,tick(){c||(T(),r&&!m()&&y())},dispose(){c||(c=!0,r=!1,window.removeEventListener("keydown",U),window.removeEventListener("resize",T),window.removeEventListener("orientationchange",T),d.removeEventListener("input",Y),d.removeEventListener("change",Y),u.removeEventListener("pointerdown",q),u.removeEventListener("pointermove",P),u.removeEventListener("pointerup",z),u.removeEventListener("pointercancel",z),h.remove())}}}var Pm="aus101-apply-mg-css",_u={r:243,g:239,b:228},vu={r:58,g:36,b:24},Lm=.22,Eu=.45,gS=3.6,Im=1.15,Dm={head:{u:.5,v:.15},torso:{u:.5,v:.4},armL:{u:.2,v:.38},armR:{u:.8,v:.38},legL:{u:.35,v:.65},legR:{u:.65,v:.65}},xS=["head","armL","armR","torso","legL","legR"];function Um(n){return n?n.mesh||n:null}function Dc(n){return n<0?0:n>1?1:n}function Mu(n,t,e){return n+(t-n)*e+.5|0}function yS(n){let t=Dc(n);return`rgb(${Mu(vu.r,_u.r,t)},${Mu(vu.g,_u.g,t)},${Mu(vu.b,_u.b,t)})`}function _S(){return typeof Cr=="function"?Cr:null}function vS(n){if(typeof xi=="function"){let e=xi(n);if(Number.isFinite(e))return Dc(e)}let t=Um(n)?.userData?.coverage;return Number.isFinite(t)?Dc(t):0}function ES(n,t,e,i){let s=n.size,o=n.data;if(!s||!o)return 0;let r=Math.max(1,i*s),a=(t%1+1)%1*s,c=Math.min(1,Math.max(0,e))*s,l=r*r,h=Math.floor(a-r),u=Math.ceil(a+r),d=Math.max(0,Math.floor(c-r)),f=Math.min(s-1,Math.ceil(c+r)),g=0,x=0;for(let p=d;p<=f;p++){let m=p+.5-c;for(let _=h;_<=u;_++){let y=_+.5-a;if(y*y+m*m>l)continue;let v=(_%s+s)%s;g+=o[p*s+v],x++}}return x?g/(x*255):0}function MS(n,t){let e=Dm[t],i=Um(n)?.userData?.coverageMap;return i&&e?Dc(ES(i,e.u,e.v,.1)):vS(n)}function es(n,t,e,i,s,o){let r=i-t,a=s-e,c=Math.hypot(r,a)||1,l=-a/c*o,h=r/c*o,u=Math.atan2(h,l),d=u+Math.PI;n.moveTo(t+l,e+h),n.lineTo(i+l,s+h),n.arc(i,s,o,u,d),n.lineTo(t-l,e-h),n.arc(t,e,o,d,u),n.closePath()}function bS(n,t){let e=n/200,i=t/360,s=f=>f*e,o=f=>f*i,r=f=>f*Math.min(e,i),a=new Path2D;a.ellipse(s(100),o(48),s(26),o(30),0,0,Math.PI*2);let c=new Path2D;c.moveTo(s(88),o(76)),c.bezierCurveTo(s(78),o(78),s(66),o(84),s(58),o(96)),c.lineTo(s(62),o(198)),c.quadraticCurveTo(s(64),o(216),s(78),o(222)),c.lineTo(s(122),o(222)),c.quadraticCurveTo(s(136),o(216),s(138),o(198)),c.lineTo(s(142),o(96)),c.bezierCurveTo(s(134),o(84),s(122),o(78),s(112),o(76)),c.closePath();let l=new Path2D;es(l,s(56),o(100),s(40),o(168),r(9)),es(l,s(40),o(168),s(34),o(230),r(7.5)),l.ellipse(s(32),o(242),r(8),r(9),0,0,Math.PI*2);let h=new Path2D;es(h,s(144),o(100),s(160),o(168),r(9)),es(h,s(160),o(168),s(166),o(230),r(7.5)),h.ellipse(s(168),o(242),r(8),r(9),0,0,Math.PI*2);let u=new Path2D;es(u,s(84),o(222),s(78),o(282),r(12)),es(u,s(78),o(282),s(76),o(336),r(10)),u.ellipse(s(70),o(344),s(16),o(7),0,0,Math.PI*2);let d=new Path2D;return es(d,s(116),o(222),s(122),o(282),r(12)),es(d,s(122),o(282),s(124),o(336),r(10)),d.ellipse(s(130),o(344),s(16),o(7),0,0,Math.PI*2),{head:a,torso:c,armL:l,armR:h,legL:u,legR:d}}function wS(){if(typeof document>"u"||document.getElementById(Pm))return;let n=document.createElement("style");n.id=Pm,n.textContent=`
#aus101-apply-mg{
  position:fixed;
  inset:0;
  z-index:16;
  display:none;
  pointer-events:none;
  box-sizing:border-box;
  padding-top:max(8px, env(safe-area-inset-top, 0px));
  padding-right:max(8px, env(safe-area-inset-right, 0px));
  padding-bottom:max(8px, env(safe-area-inset-bottom, 0px));
  padding-left:max(8px, env(safe-area-inset-left, 0px));
  -webkit-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:transparent;
}
#aus101-apply-mg.is-on{display:block;}
#aus101-apply-mg .aus101-apply-card{
  position:absolute;
  left:8px;
  top:8px;
  width:min(280px, 38vw);
  height:min(520px, calc(100% - 88px));
  pointer-events:auto;
  touch-action:none;
  box-sizing:border-box;
  background:linear-gradient(180deg, rgba(42,30,16,0.92), rgba(10,12,10,0.94));
  border:1px solid rgba(224,184,88,0.7);
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 1px rgba(255,180,80,0.18), 0 16px 36px rgba(0,0,0,0.45);
  border-radius:8px;
  overflow:hidden;
}
@media (orientation:portrait){
  #aus101-apply-mg .aus101-apply-card{
    left:50%;
    top:auto;
    bottom:8px;
    transform:translateX(-50%);
    width:min(260px, 72vw);
    height:min(460px, 62vh);
  }
}
#aus101-apply-mg canvas{
  display:block;
  width:100%;
  height:100%;
  cursor:crosshair;
  touch-action:none;
}
`.trim(),document.head.appendChild(n)}function Hm({onStamp:n}={}){wS();let t=document.createElement("div");t.id="aus101-apply-mg",t.setAttribute("aria-hidden","true"),t.setAttribute("aria-label","Coverage map");let e=document.createElement("div");e.className="aus101-apply-card",t.appendChild(e);let i=document.createElement("canvas");e.appendChild(i);let s=i.getContext("2d"),o=null,r=!1,a=null,c=0,l=0,h=null,u={down:!1,id:-1,region:null,lastT:0},d={x:0,y:0,on:!1};function f(){let q=Math.min(window.devicePixelRatio||1,2),P=Math.max(1,i.clientWidth||e.clientWidth||260),z=Math.max(1,i.clientHeight||e.clientHeight||480),B=Math.max(1,Math.round(P*q)),F=Math.max(1,Math.round(z*q));if((i.width!==B||i.height!==F)&&(i.width=B,i.height=F,a=null),!a||c!==B||l!==F){let Z=c||B,K=l||F;a=bS(B,F),d.on&&Z&&K?(d.x=d.x/Z*B,d.y=d.y/K*F):(d.x=B*.5,d.y=F*.4),c=B,l=F}return{w:B,h:F}}function g(q,P){if(!a||!s)return null;for(let z of xS)if(s.isPointInPath(a[z],q,P))return z;return null}function x(q){let P=i.getBoundingClientRect(),z=P.width||1,B=P.height||1;return{x:(q.clientX-P.left)/z*c,y:(q.clientY-P.top)/B*l}}function p(){if(!s||!r)return;let{w:q,h:P}=f();s.clearRect(0,0,q,P),s.fillStyle="rgba(8,10,8,0.2)",s.beginPath(),s.ellipse(q*.5,P*.96,q*.28,P*.03,0,0,Math.PI*2),s.fill();let z=["legL","legR","armL","armR","torso","head"];for(let F of z){let Z=o?MS(o,F):0;if(s.fillStyle=yS(Z),s.fill(a[F]),Z>.08){s.save(),s.clip(a[F]);let K=s.createLinearGradient(0,0,0,P*.5);K.addColorStop(0,`rgba(255,255,248,${.14+Z*.22})`),K.addColorStop(1,"rgba(255,255,248,0)"),s.fillStyle=K,s.fillRect(0,0,q,P),s.restore()}}s.lineJoin="round",s.lineCap="round",s.strokeStyle="rgba(251,246,234,0.28)",s.lineWidth=Math.max(1,q/200);for(let F of z)s.stroke(a[F]);let B=u.region||h;if(B&&a[B]&&(s.strokeStyle="rgba(224,176,64,0.95)",s.lineWidth=Math.max(1.5,q/110),s.stroke(a[B])),d.on){let F=Math.max(7,q*.035);s.beginPath(),s.arc(d.x,d.y,F,0,Math.PI*2),s.fillStyle="rgba(243,239,228,0.88)",s.fill(),s.strokeStyle="rgba(224,176,64,0.95)",s.lineWidth=Math.max(1.5,q/140),s.stroke()}}function m(q,P){if(!o||!q||!(P>0))return;let z=Dm[q];if(!z)return;let B=_S();B&&(B(o,z.u,z.v,Lm,P),typeof Pr=="function"&&Pr(o)),n?.({npc:o,u:z.u,v:z.v,radius:Lm,amount:P,region:q})}function _(q,P,z){let B=g(q,P);return u.region=B,h=B,B&&m(B,z),B}function y(q,P){let z=x(q);_(z.x,z.y,P),p()}function v(){if(!u.region||!u.down&&!d.on)return;let q=performance.now(),P=u.lastT||q,z=Math.min(.05,Math.max(0,(q-P)/1e3));u.lastT=q,z>0&&m(u.region,gS*z)}function C(q){if(r&&!(q.pointerType==="mouse"&&q.button!==0)){q.preventDefault(),q.stopPropagation(),u.down=!0,u.id=q.pointerId,u.lastT=performance.now();try{i.setPointerCapture(q.pointerId)}catch{}y(q,Eu)}}function A(q){if(!r)return;let P=x(q),z=g(P.x,P.y);if(u.down&&(u.id===-1||q.pointerId===u.id)){q.preventDefault(),q.stopPropagation();let B=u.region;u.region=z,h=z,d.x=P.x,d.y=P.y,d.on=!0,z&&z!==B&&m(z,Eu),v(),p();return}h!==z&&(h=z,p())}function S(q){if(!(u.id!==-1&&q.pointerId!==u.id)&&(u.down=!1,u.id=-1,u.region=null,u.lastT=0,r)){let P=x(q);h=g(P.x,P.y),p()}}function I(q){if(!r||!o||typeof document>"u"||!document.pointerLockElement)return;(!c||!l)&&f(),d.x=Math.max(0,Math.min(c,d.x+q.movementX*Im)),d.y=Math.max(0,Math.min(l,d.y+q.movementY*Im)),d.on=!0;let P=u.region,z=g(d.x,d.y);u.region=z,h=z,u.lastT||(u.lastT=performance.now()),z&&z!==P&&m(z,Eu),v(),p()}function E(q){q.stopPropagation()}i.addEventListener("pointerdown",C),i.addEventListener("pointermove",A),i.addEventListener("pointerup",S),i.addEventListener("pointercancel",S),i.addEventListener("lostpointercapture",S),i.addEventListener("contextmenu",q=>q.preventDefault()),e.addEventListener("mousedown",E),e.addEventListener("pointerdown",E),window.addEventListener("pointermove",q=>{u.down&&A(q)}),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),document.addEventListener("mousemove",I),window.addEventListener("resize",()=>{r&&p()});function T(q){if(!q){U();return}o=q,r=!0,t.classList.add("is-on"),t.setAttribute("aria-hidden","false"),f(),d.on||(d.x=c*.5,d.y=l*.4),d.on=!0,u.region=g(d.x,d.y),h=u.region,u.lastT||(u.lastT=performance.now()),p(),requestAnimationFrame(p)}function U(){o=null,r=!1,h=null,d.on=!1,u.down=!1,u.id=-1,u.region=null,u.lastT=0,t.classList.remove("is-on"),t.setAttribute("aria-hidden","true")}function Y(){r&&(v(),p())}return document.body.appendChild(t),{show:T,hide:U,tick:Y,el:t}}var SS={piano:[{src:"assets/media/cutscene/enc_piano.jpg",hold:2800}],painter:[{src:"assets/media/cutscene/enc_painter.jpg",hold:2800}],incel:[{src:"assets/media/cutscene/enc_incel.jpg",hold:2800}],kid:[{src:"assets/media/cutscene/enc_kid.jpg",hold:2800}],babe:[{src:"assets/media/cutscene/enc_babe.jpg",hold:2800}],fight:[{src:"assets/media/cutscene/enc_fight.jpg",hold:2800}]};function TS(n,t){if(!n||!t)return 1/0;let e=n.x??n.position?.x,i=n.z??n.position?.z,s=t.x??t.position?.x,o=t.z??t.position?.z;if(e==null||s==null)return 1/0;let r=e-s,a=i-o;return r*r+a*a}function Nm(n){let t=new Set,e=!1,i=null;return{seen:t,tick(){if(e||!n.isPlaying()||n.reel.playing)return;let s=n.getPlayerPos();for(let o of n.spots){if(t.has(o.id))continue;let r=o.radius??5.5;if(TS(s,o.getPos())>r*r)continue;let a=SS[o.id];if(!a)continue;t.add(o.id),e=!0,i=o.id;let c=n.reel.onDone;n.reel.onDone=()=>{n.reel.onDone=c,e=!1;let l=i;i=null,n.onEnd?.(l)},n.onStart?.(o.id),n.reel.start(a);return}}}}var ln=64,km=256,RS=170,Om=.08,Bm=1,Uc=.82,Hc=.6,Vm=16052196,AS=8898799,ke={height:1.72,headR:.115,neckH:.1,shoulderW:.4,chestW:.32,chestD:.19,hipW:.27,armR:.045,legR:.058,footH:.055};ke.headY=ke.height-ke.headR-.01;ke.shoulderY=ke.headY-ke.headR-ke.neckH*.55;ke.hipY=.52*ke.height;ke.torsoH=ke.shoulderY-ke.hipY;ke.thighH=(ke.hipY-ke.footH)*.53;ke.shinH=(ke.hipY-ke.footH)*.47;var ri=.29,ns=.27,CS=.22,PS=(ri+ns)*.985,Wm=.34,LS=.035,Xm=.55,IS=.17,DS=.15,Nc={x:.36,z:.8,turn:.22},zm=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,US=`
uniform sampler2D viewMap;
uniform sampler2D paintMap;
varying vec2 vUv;
void main() {
  vec3 v = texture2D(viewMap, vUv).rgb;
  vec3 p = texture2D(paintMap, vUv).rgb;
  gl_FragColor = vec4(abs(v - p), 1.0);
}
`,HS=`
uniform sampler2D viewMap;
uniform vec2 center;
uniform float radius;
uniform float amount;
varying vec2 vUv;
void main() {
  vec2 d = vUv - center;
  d.x *= 1.15;
  float dist = length(d);
  float mask = smoothstep(radius, radius * 0.28, dist);
  mask *= 0.82 + 0.18 * sin((vUv.x * 71.0 + vUv.y * 53.0) + center.x * 9.0);
  if (mask < 0.012) discard;
  vec3 src = texture2D(viewMap, vUv).rgb;
  gl_FragColor = vec4(src, mask * amount);
}
`,Ft={box:new Tt(1,1,1),sphere:new Kt(1,10,8),sphereHi:new Kt(1,12,10),skull:new Kt(1,16,12),hairCrown:new Kt(1,16,10,0,Math.PI*2,0,1.32),hairBack:new Kt(1,12,8,Math.PI,Math.PI,.42,1.55),cyl:new Mt(1,1,1,8),cyl12:new Mt(1,1,1,12),cone:new He(1,1,6),torus:new mn(1,.09,5,14)},Fm=new D(0,0,1),NS=new D(0,1,0);function Ze(n,t={}){return new Bt({color:n,roughness:.72,metalness:.04,...t})}function Gt(n,t,e,i=e,s=e){let o=new W(n,t);return o.castShadow=!0,o.receiveShadow=!0,o.scale.set(e,i,s),o}function Gm(n,t,e,i){let s=new D().subVectors(i,e),o=s.length(),r=Gt(Ft.cyl,n,t,o,t);return r.position.copy(e).addScaledVector(s,.5),r.quaternion.setFromUnitVectors(NS,s.normalize()),r}function bu(n,t,{depth:e=!1,colorSpace:i=je}={}){let s=new Qn(n,t,{minFilter:Se,magFilter:Se,format:Dn,type:Fn,depthBuffer:e,stencilBuffer:!1,generateMipmaps:!1});return s.texture.colorSpace=i,s.texture.flipY=!1,s}function kS(){let n=new _t,t=Ze(8015402,{roughness:.9}),e=Ze(4861462,{roughness:.88}),i=Ze(Vm,{roughness:.96});for(let[l,h,u]of[[-.3,.14,.08],[.3,.14,-.08],[0,-.2,0]]){let d=Gt(Ft.box,t,.048,1.52,.048);d.position.set(l,.76,h),d.rotation.z=u,n.add(d)}let s=Gt(Ft.box,e,.72,.04,.16);s.position.set(0,.52,.1),n.add(s);let o=Gt(Ft.box,t,.7,.04,.04);o.position.set(0,1.46,.08),n.add(o);let r=Gt(Ft.box,i,Uc+.04,Hc+.04,.028);r.position.set(0,1.16,.11),r.rotation.x=-.1,n.add(r);let a=Gt(Ft.box,e,.03,.08,.03);a.position.set(-.34,.84,.12);let c=Gt(Ft.box,e,.03,.08,.03);return c.position.set(.34,.84,.12),n.add(a,c),{group:n,board:r}}function OS(n,t,e){let i=new _t;i.add(Gt(Ft.sphere,n,e*1.3,e*1.24,e*1.24));let s=new _t,o=Gt(Ft.cyl,n,e,ri,e);o.rotation.x=Math.PI/2,o.position.z=ri*.5;let r=Gt(Ft.cyl,n,e*1.12,.045,e*1.12);r.rotation.x=Math.PI/2,r.position.z=ri-.02;let a=Gt(Ft.sphere,t,e*.98);a.position.z=ri,s.add(o,r,a),i.add(s);let c=new _t,l=Gt(Ft.cyl,t,e*.92,ns,e*.78);l.rotation.x=Math.PI/2,l.position.z=ns*.5;let h=Gt(Ft.sphere,t,e*.72);return h.position.z=ns,c.add(l,h),i.add(c),{group:i,upper:s,fore:c}}var Nr=new D,wu=new D;function qm(n,t,e){let i=Ch.clamp(t,Math.abs(ri-ns)+.03,(ri+ns)*.999),s=(i*i+ri*ri-ns*ns)/(2*i),o=Math.sqrt(Math.max(0,ri*ri-s*s));Nr.set(Math.sin(e)*o,-Math.cos(e)*o,s),n.upper.quaternion.setFromUnitVectors(Fm,wu.copy(Nr).normalize()),n.fore.position.copy(Nr),wu.set(-Nr.x,-Nr.y,i-s).normalize(),n.fore.quaternion.setFromUnitVectors(Fm,wu)}function BS(n,t=1){let e=new _t,i=Gt(Ft.sphere,n,.034,.034,.03);i.position.z=-.012;let s=Gt(Ft.box,n,.072,.034,.086);s.position.set(0,.021,.03);let o=Gt(Ft.box,n,.068,.032,.08);o.position.set(0,-.021,.032);let r=Gt(Ft.sphere,n,.036,.03,.014);r.position.set(0,.004,.072);let a=Gt(Ft.box,n,.024,.026,.064);return a.position.set(t*.031,.01,.038),a.rotation.z=t*-.22,e.add(i,s,o,r,a),e}function zS(n,t=1){let e=new _t,i=Gt(Ft.sphere,n,.032,.028,.032),s=Gt(Ft.box,n,.072,.028,.078);s.position.set(0,.004,.044);let o=Gt(Ft.box,n,.07,.022,.056);o.position.set(0,.008,.104),o.rotation.x=-.22;let r=Gt(Ft.box,n,.024,.05,.05);return r.position.set(t*.04,.024,.048),r.rotation.y=t*-.35,r.rotation.z=t*-.2,e.add(i,s,o,r),e}function FS(n){let t=new _t;t.add(BS(n,-1));let e=Gt(Ft.cyl,Ze(5913114,{roughness:.7}),.011,.3,.011);e.rotation.x=Math.PI/2,e.position.z=.075;let i=Gt(Ft.cyl,Ze(11575408,{metalness:.45,roughness:.4}),.013,.032,.013);i.rotation.x=Math.PI/2,i.position.z=.24;let s=Gt(Ft.cone,Ze(3811864,{roughness:.9}),.016,.055,.016);return s.rotation.x=Math.PI/2,s.position.z=Wm-.028,t.add(e,i,s),t}function GS(){let n=new _t,{headR:t,shoulderW:e,chestW:i,chestD:s,hipW:o,armR:r,legR:a,footH:c}=ke,{headY:l,shoulderY:h,hipY:u,torsoH:d,thighH:f,shinH:g}=ke,x=Ze(13213818,{roughness:.62}),p=Ze(14998208,{roughness:.88}),m=Ze(7035450,{roughness:.82}),_=Ze(15260064,{roughness:.92}),y=Ze(10254922,{roughness:.85}),v=Ze(6967360,{roughness:.88}),C=Ze(4864556,{roughness:.78}),A=Ze(1709072,{roughness:.45}),S=Gt(Ft.box,m,o,.2,s*.98);S.position.y=u-.03,n.add(S);let I=Gt(Ft.box,Ze(4864548,{roughness:.7}),o*1.03,.045,s*1.01);I.position.y=u+.075,n.add(I);let E=Gt(Ft.box,p,i,d,s);E.position.y=u+d*.5-.02,n.add(E);let T=Gt(Ft.box,p,(i+e)*.5,.14,s*.95);T.position.y=h-.13,n.add(T);let U=Gt(Ft.box,p,e*.94,.13,s*.92);U.position.y=h-.04,n.add(U);for(let b of[-1,1]){let V=Gt(Ft.sphere,p,.072,.075,s*.52);V.position.set(b*(e*.5-r*.6),h-.035,0),n.add(V)}let Y=Gt(Ft.sphere,p,.1,.055,.075);Y.position.y=h+.005,n.add(Y);let q=l-t*.62,P=h-.05,z=Gt(Ft.cyl12,x,.05,q-P,.048);z.position.y=(q+P)*.5,n.add(z);for(let[b,V,j]of[[-.06,-.12,13123630],[.05,-.21,3108762],[.09,-.07,13934615]]){let ut=Gt(Ft.sphere,Ze(j,{roughness:.6}),.018,.024,.008);ut.position.set(b,h+V,s*.5),n.add(ut)}let B=new _t;B.position.y=l,B.rotation.y=-Nc.turn;let F=Gt(Ft.skull,x,t*.96,t*1.05,t);B.add(F);let Z=Gt(Ft.sphere,x,t*.72,t*.52,t*.8);Z.position.set(0,-t*.52,t*.14),B.add(Z);let K=Gt(Ft.cone,x,.018,.04,.018);K.rotation.x=Math.PI/2,K.position.set(0,-.014,t*.9),B.add(K);for(let b of[-1,1]){let V=Gt(Ft.sphere,A,.015);V.position.set(b*.04,.012,t*.8),B.add(V);let j=Gt(Ft.sphere,x,.013,.028,.019);j.position.set(b*t*.95,-.008,-.006),B.add(j)}let M=Gt(Ft.hairCrown,v,t*1.04,t*1.09,t*1.05);M.rotation.x=-.13,B.add(M);let N=Gt(Ft.hairBack,v,t*1.05,t*1.14,t*1.07);N.rotation.x=-.06,B.add(N);for(let b of[-1,1]){let V=Gt(Ft.box,v,.02,.048,.028);V.position.set(b*t*.93,-t*.2,-t*.16),B.add(V)}let w=new _t;w.position.set(0,t*.72,-.018),w.rotation.x=-.14;let k=Gt(Ft.cyl12,_,.2,.018,.2);w.add(k);let H=Gt(Ft.cyl12,_,.118,.105,.118);H.position.y=.055,w.add(H);let J=Gt(Ft.sphereHi,_,.118,.05,.118);J.position.y=.104,w.add(J);let G=Gt(Ft.torus,y,.122,.122,.122);G.rotation.x=Math.PI/2,G.position.y=.024,G.scale.z=.35,w.add(G),B.add(w),n.add(B);let et=OS(p,x,r),ct=et.group;ct.position.set(e*.5-r*.6,h-.035,.015);let ft=FS(x);ft.position.z=.42,ct.add(ft),qm(et,.42,Xm),n.add(ct);let lt=new D(-(e*.5-r*.6),h-.035,.015),Et=new D(-.255,1.145,.035),O=new D(-.145,1.055,.235),mt=Gt(Ft.sphere,p,r*1.3,r*1.24,r*1.24);mt.position.copy(lt),n.add(mt),n.add(Gm(p,r,lt,Et));let nt=Gt(Ft.sphere,p,r*1.12);nt.position.copy(Et),n.add(nt),n.add(Gm(x,r*.9,Et,O));let ht=Gt(Ft.sphere,x,r*.95);ht.position.copy(Et),n.add(ht);let X=zS(x,-1);X.position.copy(O),X.rotation.set(-.1,.5,.2),n.add(X);let ot=new _t;ot.position.set(0,.03,.028),ot.rotation.y=-.15;let rt=Gt(Ft.cyl12,Ze(13351062,{roughness:.7}),.105,.011,.078);ot.add(rt);for(let[b,V,j]of[[-.055,-.022,13123630],[-.03,.036,3108762],[.014,.044,13934615],[.048,.02,3832378],[.058,-.026,15262418],[.008,-.042,6961802]]){let ut=Gt(Ft.sphere,Ze(j,{roughness:.5}),.016,.007,.013);ut.position.set(b,.008,V),ot.add(ut)}X.add(ot);for(let[b,V,j]of[[-1,.055,-.12],[1,-.075,.16]]){let ut=new _t;ut.position.set(b*o*.3,u,V),ut.rotation.x=-V*.55;let pt=Gt(Ft.sphere,m,a*1.16);ut.add(pt);let Rt=Gt(Ft.cyl,m,a,f,a*.94);Rt.position.y=-f*.5,ut.add(Rt);let bt=Gt(Ft.cyl12,m,a*.95,.06,a*.95);bt.position.y=-f,ut.add(bt);let St=new _t;St.position.y=-f,St.rotation.x=V*.8;let Q=Gt(Ft.cyl,x,a*.8,g,a*.78);Q.position.y=-g*.5,St.add(Q);let gt=Gt(Ft.sphere,x,a*.66);gt.position.y=-g,St.add(gt);let at=new _t;at.position.y=-g,at.rotation.y=j;let yt=Gt(Ft.box,C,.088,.028,.2);yt.position.set(0,-c+.014,.045),at.add(yt);let Ot=Gt(Ft.box,C,.082,.036,.07);Ot.position.set(0,-c+.03,-.018),at.add(Ot);let zt=Gt(Ft.sphere,x,.042,.024,.045);zt.position.set(0,-c+.035,.108),at.add(zt);let Nt=Gt(Ft.box,C,.086,.016,.03);Nt.position.set(0,-c+.05,.052),Nt.rotation.x=.25,at.add(Nt),St.add(at),ut.add(St),n.add(ut)}let R=new D(0,.014,t*.85).applyEuler(B.rotation).add(B.position);return n.userData.arm=ct,n.userData.brush=ft,n.userData.limb=et,n.userData.eye=R,n.userData.paintTarget=!1,n.userData.kind="artist",n.userData.ageBand="adult",n}function VS(n){let t=-1,e=ln>>1,i=ln>>1,s=ln*ln;for(let o=0;o<s;o++){let r=o*4,a=n[r]*n[r]+n[r+1]*n[r+1]+n[r+2]*n[r+2];a>t&&(t=a,e=o%ln,i=o/ln|0)}return{u:(e+.5)/ln,v:(i+.5)/ln,err:t}}function Ym(n,t={x:4.5,z:-6.2,yaw:-2.6}){let e=new _t;e.name="artist",e.position.set(t.x,0,t.z),e.rotation.y=t.yaw+Math.PI,e.userData.kind="artist",e.userData.ageBand="adult",e.userData.paintTarget=!1;let{group:i,board:s}=kS(),o=GS();o.position.set(Nc.x,0,Nc.z),o.rotation.order="YXZ",o.rotation.y=Math.PI+Nc.turn,e.add(i,o),n.add(e),e.updateMatrixWorld(!0);let r=bu(ln,ln,{depth:!0,colorSpace:ee}),a=bu(km,km,{depth:!1,colorSpace:ee}),c=bu(ln,ln,{depth:!1,colorSpace:je}),l=new ce({map:a.texture,toneMapped:!1}),h=new W(new ue(Uc,Hc),l);h.position.copy(s.position),h.position.z+=.018,h.rotation.copy(s.rotation),h.layers.set(Bm),h.layers.enable(0),s.layers.set(Bm),s.layers.enable(0),i.add(h);let u=t.x+Math.sin(t.yaw)*14,d=t.z+Math.cos(t.yaw)*14,f=new Je(42,Uc/Hc,.28,90),g=o.userData.eye.clone();o.localToWorld(g),f.position.set(g.x+Math.sin(t.yaw)*.14,g.y,g.z+Math.cos(t.yaw)*.14),f.lookAt(u,1.15,d),f.layers.set(0),f.updateProjectionMatrix();let x=new uo(-1,1,1,-1,0,1),p=new Gn({uniforms:{viewMap:{value:r.texture},paintMap:{value:a.texture}},vertexShader:zm,fragmentShader:US,depthTest:!1,depthWrite:!1,toneMapped:!1}),m=new xs;m.add(new W(new ue(2,2),p));let _=new Gn({uniforms:{viewMap:{value:r.texture},center:{value:new wt(.5,.5)},radius:{value:Om},amount:{value:.7}},vertexShader:zm,fragmentShader:HS,transparent:!0,blending:Vi,depthTest:!1,depthWrite:!1,toneMapped:!1}),y=new xs;y.add(new W(new ue(2,2),_));let v=new Uint8Array(ln*ln*4),C=new Vt(Vm),A=new Vt(AS),S=new Vt,I=new wt(.5,.5),E=new D,T=new D,U=new D,Y=new Ie,q=new Ie,P=o.userData.arm,z=o.userData.brush,B=o.userData.limb,F=!1,Z=0,K=.42,M=0,N=0,w=0;function k(G,et,ct,ft,lt){G.shadowMap.enabled=lt,G.autoClear=ct,G.setClearColor(S,ft),G.setRenderTarget(et)}function H(G,et){let ct=G.getRenderTarget(),ft=G.autoClear,lt=G.getClearAlpha(),Et=G.shadowMap.enabled;G.getClearColor(S),G.autoClear=!0,G.shadowMap.enabled=!1,F||(G.setRenderTarget(a),G.setClearColor(C,1),G.clear(),F=!0),e.visible=!1,G.setRenderTarget(r),G.setClearColor(A,1),G.render(et,f),e.visible=!0,G.setRenderTarget(c),G.setClearColor(0,1),G.render(m,x),G.readRenderTargetPixels(c,0,0,ln,ln,v);let O=VS(v);I.set(O.u,O.v),M=1,_.uniforms.center.value.set(O.u,O.v),_.uniforms.radius.value=Om*(.72+Math.random()*.5),_.uniforms.amount.value=.58+Math.min(.36,O.err/9e4),G.autoClear=!1,G.setRenderTarget(a),G.render(y,x),k(G,ct,ft,lt,Et)}function J(){E.set((I.x-.5)*Uc,(I.y-.5)*Hc,.006),h.localToWorld(T.copy(E)),N+=(IS*(.44-I.y)-N)*.07,w+=(DS*(I.x-.5)-w)*.07,o.rotation.x=N,o.rotation.z=w,o.updateMatrixWorld(!0),Y.copy(P.quaternion),P.lookAt(T),q.copy(P.quaternion),P.quaternion.copy(Y).slerp(q,.2),P.getWorldPosition(U);let G=Ch.clamp(U.distanceTo(T)-Wm,CS,PS);M*=.82;let et=G-LS*(1-M);K+=(et-K)*.34,z.position.z=K,qm(B,K,Xm)}return{root:e,pose:t,tick(G,et,ct){!/iP(hone|ad|od)/.test(navigator.userAgent)&&ct-Z>=RS&&(H(G,et),Z=ct),J()}}}var Zm=3,WS=4.8,XS=.26,$m=8,No="assets/media/psa/",Or="assets/media/ads/",qS=[`${No}psa1.mp4`,`${No}psa2.mp4`,`${No}psa3.mp4`,`${No}psa4.mp4`,`${No}psa5.mp4`,`${Or}loop_apply.mp4`,`${Or}loop_billboard.mp4`,`${Or}loop_bunker.mp4`,`${Or}loop_crt.mp4`],Km=[{brand:"BBL.TIPS",title:"Brazilian Butt Lift Tips",url:"bbl.tips/stairs",bg:"#1a0c12",bar:"#2a121c",accent:"#ff5a9a",ink:"#ffe6f0",dim:"#c898a8",rows:["3 flights or it didn't happen","Sit on a donut, not your career","Surgeon's IG vs your hallway"]},{brand:"CHEMTRAILS WEEKLY",title:"They lengthened the lines",url:"chemtrails.week/issue-408",bg:"#0b1520",bar:"#102030",accent:"#7ec8ff",ink:"#e8f4ff",dim:"#8aa8c0",rows:["Grid over the Gold Coast","Barium taste in the slushie","Unsubscribe is a psyop"]},{brand:"CLOUD//MART",title:"Vape Juice 40% Off",url:"cloudmart.au/juice",bg:"#120818",bar:"#1c1028",accent:"#c8ff3a",ink:"#f4ffe8",dim:"#a0b878",rows:["Mango-menthol 50mg","Free lung with 3 bottles","Not a cigarette, a lifestyle"]},{brand:"UNAPPROVED ZINC",title:"Unapproved Zinc Forum",url:"zinc.forum/unapproved",bg:"#14180e",bar:"#1c2212",accent:"#d4c070",ink:"#f2edd4",dim:"#9a9870",rows:["Is 50+ a psyop? (342)","White nose = class traitor","Sticky: council banned my tin"]},{brand:"CUBE KITCHEN",title:"Cockroach Cube Recipes",url:"cubekitchen.au/roast",bg:"#181208",bar:"#241c10",accent:"#e89030",ink:"#fff0d8",dim:"#c0a070",rows:["12-min roast, no questions","Stock from the tray water","Guest: crunch is the point"]}],YS=[{x:-17.4,z:10.7,yaw:.28,stripe:14703183},{x:-16.15,z:11.15,yaw:-.18,stripe:4166596}],Su=new D,Jm=new D,pg=new D(0,1,0),Tu=new Ie,jm=new Ie,Qm=new Ie,ZS=new Ie().setFromAxisAngle(pg,Math.PI),tg=new de,kr=new D,eg=new D,Ru=new Ie,ng=new Ie,ig=(n,t,e)=>n<t?t:n>e?e:n;function Pu(n){if(n.userData.segLens)return n.userData.segLens;let t=n.getObjectByName("hand")||n.children.find(o=>o.isGroup)||null,e=t?-t.position.y:.54,i=e*.52;for(let o of n.children){if(!o.isMesh)continue;let r=o.scale.y;if(r>e*.3&&Math.abs(o.position.y+r*.5)<.001){i=r;break}}let s={upper:i,fore:Math.max(e-i,.02),wrist:e,hand:t};return n.userData.segLens=s,s}function Gc(n,t,e,i){if(!n)return null;if(n.userData[e])return n.userData[e];let s=new _t;s.name=i,s.position.y=t,n.add(s);for(let o of[...n.children])o===s||o.position.y>t-.001||(o.position.y-=t,s.add(o));return n.userData[e]=s,s}function mg(n){return n?n.userData.elbowHinge?n.userData.elbowHinge:Gc(n,-Pu(n).upper,"elbowHinge","elbow"):null}function $S(n,t){let e=t<0?n?.userData?.body?.armL:n?.userData?.body?.armR;return e?(mg(e),Pu(e).hand):null}function Di(n,t,e,i=0){let s=n?.userData?.body,o=t<0?s?.armL:s?.armR;if(!o)return null;let r=mg(o),{upper:a,fore:c,hand:l}=Pu(o);kr.copy(e).sub(o.position);let h=kr.length();if(h<1e-4)return null;h=ig(h,Math.abs(a-c)+.03,(a+c)*.995);let u=ig((a*a+c*c-h*h)/(2*a*c),-1,1),d=-(Math.PI-Math.acos(u));return eg.set(0,-(a+c*Math.cos(d)),-c*Math.sin(d)).normalize(),kr.normalize(),Ru.setFromUnitVectors(eg,kr),i?(ng.setFromAxisAngle(kr,i),o.quaternion.copy(ng).multiply(Ru)):o.quaternion.copy(Ru),r.rotation.set(d,0,0),{hand:l,hinge:r,arm:o}}var kc=.071,Oc=.146,Bc=.152,zc=.212,Yn={phoneBack:new Tt(kc,Oc,.0072),phoneRail:new Tt(kc+.0035,Oc+.0035,.0044),phoneScreen:new ue(kc-.007,Oc-.011),phoneBump:new Tt(.024,.024,.0022),tabletBack:new Tt(Bc,zc,.0068),tabletRail:new Tt(Bc+.004,zc+.004,.0042),tabletScreen:new ue(Bc-.017,zc-.022),lens:new Mt(.0055,.0055,.0026,8),fingerTip:new Tt(.017,.013,.019),thumbPad:new Tt(.019,.03,.017)},sg=new Bt({color:1447450,roughness:.42,metalness:.3}),KS=new Bt({color:10134188,roughness:.24,metalness:.88}),Cu=new Bt({color:328970,roughness:.18,metalness:.1}),JS=new Bt({color:2368554,roughness:.38,metalness:.26}),og=new Bt({color:3816514,roughness:.38,metalness:.48}),rg=new Bt({color:1710622,roughness:.5,metalness:.22}),jS=new Bt({color:13934698,roughness:.72,metalness:.04});function Cs(n){return n.castShadow=!0,n.receiveShadow=!0,n}function gg(n){return new Bt({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.48,color:16777215,roughness:.32,metalness:.04})}function ag(n,t){n.map=t,n.emissiveMap=t,n.needsUpdate=!0}function Br(n,t,e,i,s,o){n.beginPath(),n.moveTo(t+o,e),n.arcTo(t+i,e,t+i,e+s,o),n.arcTo(t+i,e+s,t,e+s,o),n.arcTo(t,e+s,t,e,o),n.arcTo(t,e,t+i,e,o),n.closePath()}function cg(n,t,e,i="phone"){let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d");o.fillStyle="#05050a",o.fillRect(0,0,t,e),o.save(),Br(o,0,0,t,e,Math.min(t,e)*.07),o.clip(),o.fillStyle=n.bg,o.fillRect(0,0,t,e),o.fillStyle=n.bar,o.fillRect(0,0,t,e*.055),o.fillStyle=n.dim,o.font=`600 ${Math.round(e*.022)}px Arial, sans-serif`,o.textAlign="left",o.textBaseline="middle",o.fillText("9:41",t*.06,e*.028),o.textAlign="right",o.fillText("LTE   74%",t*.94,e*.028),i==="phone"&&(o.fillStyle="#05050a",Br(o,t*.34,e*.006,t*.32,e*.034,e*.017),o.fill()),o.fillStyle="#00000066";let r=e*.07,a=e*.048;Br(o,t*.08,r,t*.84,a,a*.4),o.fill(),o.fillStyle=n.dim,o.font=`${Math.round(e*.02)}px Arial, sans-serif`,o.textAlign="center",o.fillText(n.url,t*.5,r+a*.55);let c=e*.14,l=e*.22;o.fillStyle=n.accent,o.fillRect(0,c,t,l),o.fillStyle=n.bar,o.globalAlpha=.18,o.fillRect(0,c+l*.62,t,l*.38),o.globalAlpha=1,o.fillStyle=n.bar,o.textAlign="left",o.font=`800 ${Math.round(e*.032)}px Impact, Arial Black, sans-serif`,o.fillText(n.brand,t*.06,c+e*.055),o.fillStyle=n.ink,o.font=`700 ${Math.round(e*.042)}px Arial, sans-serif`,o.fillText(n.title,t*.06,c+e*.125);let h=e*.4;for(let f of n.rows)o.fillStyle="#ffffff12",o.fillRect(t*.05,h,t*.9,e*.09),o.fillStyle=n.accent,o.fillRect(t*.05,h,6,e*.09),o.fillStyle=n.ink,o.font=`600 ${Math.round(e*.026)}px Arial, sans-serif`,o.fillText(f,t*.1,h+e*.052),h+=e*.105;i==="phone"&&(o.fillStyle="#ffffff66",Br(o,t*.32,e*.968,t*.36,e*.008,e*.004),o.fill());let u=o.createLinearGradient(0,0,t,e);u.addColorStop(0,"rgba(255,255,255,0.10)"),u.addColorStop(.35,"rgba(255,255,255,0.02)"),u.addColorStop(1,"rgba(255,255,255,0.06)"),o.fillStyle=u,o.fillRect(0,0,t,e),o.globalAlpha=.1,o.fillStyle="#000";for(let f=0;f<e;f+=3)o.fillRect(0,f,t,1);o.globalAlpha=1,o.restore();let d=new rn(s);return d.colorSpace=ee,d.anisotropy=4,d.needsUpdate=!0,d}function QS(){let n=document.createElement("canvas");n.width=256,n.height=128;let t=n.getContext("2d");t.fillStyle="#1a1a1e",t.fillRect(0,0,256,128),t.fillStyle="#2e2e34";for(let i=0;i<5;i++)for(let s=0;s<15;s++){let o=i===4&&s>3&&s<9?60:13;i===4&&s>4&&s<9||(Br(t,6+s*16.5,6+i*24,o,18,3),t.fill())}let e=new rn(n);return e.colorSpace=ee,e.needsUpdate=!0,e}function tT(n){let t=document.createElement("canvas");t.width=128,t.height=256;let e=t.getContext("2d"),i=n>>16&255,s=n>>8&255,o=n&255;e.fillStyle=`rgb(${i},${s},${o})`,e.fillRect(0,0,128,256),e.fillStyle="rgba(255,255,255,0.22)";for(let a=0;a<10;a++)e.fillRect(0,a*26,128,10);e.fillStyle="rgba(0,0,0,0.12)",e.fillRect(0,0,128,8),e.fillRect(0,248,128,8);let r=new rn(t);return r.colorSpace=ee,r.needsUpdate=!0,r}function eT(){return{portrait:Km.map(n=>cg(n,384,640,"phone")),landscape:Km.map(n=>cg(n,640,400,"flat"))}}async function lg(n,t=()=>!0){try{let e=await fetch(n);if(!e.ok)return[];let i=await e.text(),s=[],o=/href=["']([^"']+\.mp4)["']/gi,r;for(;r=o.exec(i);){let a=r[1].split("/").pop();t(a)&&s.push(n+a)}return s}catch{return[]}}function nT(n){return new Promise(t=>{let e=document.createElement("video");e.src=n,e.loop=!0,e.muted=!0,e.playsInline=!0,e.preload="auto",e.setAttribute("playsinline",""),e.setAttribute("muted","");let i=!1,s=o=>{i||(i=!0,t(o?e:null))};e.addEventListener("loadeddata",()=>s(!0),{once:!0}),e.addEventListener("error",()=>s(!1),{once:!0}),setTimeout(()=>s(e.readyState>=1),2200)})}async function iT(){let n=[...await lg(No),...await lg(Or,o=>/^loop_.*\.mp4$/i.test(o))],t=[...new Set([...n,...qS])],i=(await Promise.all(t.map(nT))).filter(Boolean),s=[];for(let o of i){let r=new fo(o);r.colorSpace=ee,r.minFilter=Se,r.magFilter=Se,r.generateMipmaps=!1,s.push({video:o,tex:r})}return s}function sT(n){let t=n?.mesh;return!t||typeof t.add!="function"||!t.children?.length||t.userData?.hasGadget||n.ageBand==="child"||n.ageBand==="gull"||n.kind==="gull"||n.kind==="kid"||t.name&&/guitar/i.test(t.name)?!1:n.ageBand==="adult"||n.kind==="ken"||n.kind==="babe"||n.kind==="sigma_07"||n.kind==="goth"}function oT(n,t,e,i){let s=new _t,o=n==="tablet",r=o?Bc:kc,a=o?zc:Oc,c=o?-i*r*.5:0,l=o?0:a*.5,h=Cs(new W(o?Yn.tabletBack:Yn.phoneBack,o?JS:sg));h.position.set(c,l,0);let u=Cs(new W(o?Yn.tabletRail:Yn.phoneRail,KS));u.position.set(c,l,0);let d=new W(o?Yn.tabletBack:Yn.phoneBack,Cu);d.position.set(c,l,.0022),d.scale.set(.985,.99,.5);let f=new W(o?Yn.tabletScreen:Yn.phoneScreen,gg(t));f.position.set(c,l,.0052),s.add(h,u,d,f);let g=c-r*.3,x=l+a*.38,p=new W(Yn.phoneBump,sg);p.position.set(g,x,-.0048),p.scale.set(o?.8:1,o?.8:1,1),s.add(p);for(let v of o?[0]:[.006,-.006]){let C=new W(Yn.lens,Cu);C.rotation.x=Math.PI/2,C.position.set(g,x+v,-.0058),s.add(C)}let m=e||jS,_=new _t;for(let v=0;v<3;v++){let C=Cs(new W(Yn.fingerTip,m));o?(C.position.set(.004,(v-1)*.026,.008),C.rotation.z=Math.PI/2):(C.position.set(-i*(r*.5-.003),.016+v*.019,.006),C.rotation.z=-i*.12),_.add(C)}let y=Cs(new W(Yn.thumbPad,m));return o?y.position.set(-i*.014,.03,.009):y.position.set(i*(r*.36),.036,.009),y.rotation.z=i*.45,_.add(y),s.add(_),{group:s,screen:f,mat:f.material,grip:_,width:r}}var Fc={scroll:{hand:[.09,-.22,.19],tilt:-1.02,yaw:.3,roll:.62,head:.34},photo:{hand:[.1,-.07,.24],tilt:-.24,yaw:.05,roll:.7,head:.05},tablet:{hand:[.1,-.2,.2],tilt:-.88,yaw:.2,roll:.55,head:.3}};function rT(n,t,e,i){let s=n.scale||1,o=Fc[e]||Fc.scroll;return i.set(t*o.hand[0]*s,n.shoulderY+o.hand[1]*s,(n.chestD||.18)*.5+o.hand[2]*s)}var Ho=new D,As=new D,hg=new D,Au=new Ie,ug=new lo,dg=new Ie;function aT(n,t,e,i,s){let o=n.mesh,r=o.userData?.body,{group:a,mat:c,grip:l,width:h}=oT(t,e,r?.skinM,i),u=$S(o,i);if(u&&r){let d=r.scale||1;a.position.set(i*.006*d,-.05*d,.014*d),u.add(a),n.gadgetPose={side:i,pose:s,body:r,mesh:o,width:h}}else{let d=r?.shoulderY||1.36;a.position.set(i*.16,d-.16,.2),a.rotation.set(-.95,i*.22,i*.08),o.add(a)}return o.userData.hasGadget=!0,{yawNode:a,mat:c,grip:l,restQuat:a.quaternion.clone()}}function fg(n,t){let e=n.pose;if(!e)return;let{body:i,mesh:s,side:o}=e,r=i.scale||1,a=Fc[e.pose]||Fc.scroll;rT(i,o,e.pose,Ho),Ho.y+=Math.sin(t*1.1+n.phase)*.006,e.pose==="photo"&&(Ho.z+=Math.sin(t*.8+n.phase)*.008);let c=Di(s,o,Ho,o*a.roll);c&&(ug.set(a.tilt,-o*a.yaw,0),Au.setFromEuler(ug),dg.copy(c.arm.quaternion).multiply(c.hinge.quaternion).invert().multiply(Au),n.restQuat.copy(dg),e.pose==="tablet"?(hg.set(-o*e.width,0,0).applyQuaternion(Au),As.copy(Ho).add(hg),Di(s,-o,As,-o*.3)):e.pose==="photo"&&(As.copy(Ho),As.x=-o*.13*r,As.y-=.03,As.z-=.04,Di(s,-o,As,-o*.75)),i.head&&(i.head.rotation.x=a.head))}function cT(n,t,e){let i=new _t,s=new W(new ue(1.12,2.15),new Bt({map:tT(n.stripe),roughness:.98,metalness:0}));s.rotation.x=-Math.PI/2,s.position.y=.018,s.receiveShadow=!0,i.add(s);let o=new _t,r=Cs(new W(new Tt(.34,.016,.245),og));r.position.y=.012,o.add(r);let a=new W(new ue(.29,.145),new Bt({map:e,roughness:.7,metalness:.1}));a.rotation.x=-Math.PI/2,a.position.set(0,.0205,-.03),o.add(a);let c=new W(new ue(.1,.058),rg);c.rotation.x=-Math.PI/2,c.position.set(0,.0205,.078),o.add(c);let l=Cs(new W(new Mt(.009,.009,.3,8),rg));l.rotation.z=Math.PI/2,l.position.set(0,.018,-.115),o.add(l);let h=new _t;h.position.set(0,.018,-.115),h.rotation.x=-.38;let u=Cs(new W(new Tt(.34,.225,.011),og));u.position.set(0,.112,0);let d=new W(new Tt(.322,.208,.004),Cu);d.position.set(0,.112,.0068);let f=new W(new ue(.296,.183),gg(t));return f.position.set(0,.114,.0093),h.add(u,d,f),o.add(h),o.position.set(0,.028,-.38),i.add(o),i.position.set(n.x,0,n.z),i.rotation.y=n.yaw,{group:i,laptop:o,mat:f.material,restQuat:o.quaternion.clone()}}function lT(n,t,e,i){if(i<.02){n.quaternion.copy(t);return}n.getWorldPosition(Su),Jm.set(e.x,Su.y+.15,e.z),tg.lookAt(Su,Jm,pg),Tu.setFromRotationMatrix(tg),Tu.multiply(ZS),n.parent.getWorldQuaternion(jm),Qm.copy(jm).invert().multiply(Tu),n.quaternion.copy(t).slerp(Qm,i)}function hT(n,t,e,i){let s=e.x-n,o=e.z-t,r=s*s+o*o,a=i*i;return r>=a?{amt:0,d2:r}:{amt:(1-Math.sqrt(r)/i)*XS,d2:r}}function xg(n,t){let e=eT(),i=QS(),s=[],o=-1,r=(n||[]).filter(sT);r.forEach((c,l)=>{let h=l%3===1?"tablet":"phone",u=l%2===0?1:-1,d=h==="tablet"?"tablet":l%4===2?"photo":"scroll",f=e.portrait[l%e.portrait.length],g={kind:h,mesh:c.mesh,offset:l,usesVideo:!1,video:null,phase:l*.73,landscape:!1,pose:null},{yawNode:x,mat:p,restQuat:m}=aT(c,h,f,u,d);g.yawNode=x,g.mat=p,g.restQuat=m,g.pose=c.gadgetPose||null,s.push(g),fg(g,0)}),YS.forEach((c,l)=>{let h=e.landscape[l%e.landscape.length],u=cT(c,h,i);t.add(u.group),s.push({kind:"laptop",yawNode:u.laptop,mat:u.mat,restQuat:u.restQuat,mesh:u.group,offset:r.length+l,usesVideo:!1,video:null,phase:2.1+l,landscape:!0,pose:null})});let a=[];return iT().then(c=>{c.length&&(a.push(...c),s.forEach((l,h)=>{let u=c[h%c.length];ag(l.mat,u.tex),l.usesVideo=!0,l.video=u.video}))}),{tick(c,l){if(!l)return;let h=Math.floor(c/Zm);if(h!==o){o=h;for(let d of s){if(d.usesVideo)continue;let f=d.landscape?e.landscape:e.portrait;ag(d.mat,f[Math.floor(c/Zm+d.offset)%f.length])}}let u=new Set;for(let d of s){let f=d.mesh.position.x,g=d.mesh.position.z,{amt:x,d2:p}=hT(f,g,l,WS);fg(d,c),lT(d.yawNode,d.restQuat,l,x),d.kind!=="laptop"&&d.yawNode.rotateX(Math.sin(c*1.6+d.phase)*.014);let m=.42+x*1.4;d.mat.emissiveIntensity+=(m-d.mat.emissiveIntensity)*.12,d.video&&p<$m*$m&&u.add(d.video)}for(let d of a){let f=u.has(d.video);f&&d.video.paused?d.video.play().catch(()=>{}):!f&&!d.video.paused&&d.video.pause()}}}}var uT=14198880,dT=8012832,fT=12886122,pT=2889744;function On(n,t={}){return new Bt({color:n,roughness:.72,metalness:.04,...t})}function ai(n){return n.castShadow=!0,n.receiveShadow=!0,n}var Rn={lower:new Mt(.165,.165,.1,16,1),upper:new Mt(.126,.126,.1,14,1),waist:new Mt(.104,.104,.099,12,1),hole:new Mt(.043,.043,.012,14),rosette:new mn(.05,.005,4,16),neck:new Tt(.05,.46,.036),board:new Tt(.052,.44,.01),fret:new Tt(.052,.0035,.003),head:new Tt(.066,.115,.024),peg:new Mt(.006,.006,.026,6),bridge:new Tt(.096,.026,.014),saddle:new Tt(.086,.006,.005),string:new Tt(.0022,.79,.0022),strap:new Tt(.038,.008,1)},An={top:On(uT,{roughness:.44,metalness:.06}),side:On(dT,{roughness:.5,metalness:.06}),neck:On(fT,{roughness:.52}),dark:On(pT,{roughness:.45}),wire:On(14211280,{roughness:.3,metalness:.8}),chrome:On(11581116,{roughness:.3,metalness:.7}),strap:On(2771562,{roughness:.9})};function mT(){let n=new _t,t=[An.side,An.top,An.side];for(let[l,h]of[[Rn.lower,-.1],[Rn.waist,.02],[Rn.upper,.13]]){let u=ai(new W(l,t));u.rotation.x=Math.PI/2,u.position.y=h,n.add(u)}let e=new W(Rn.hole,An.dark);e.rotation.x=Math.PI/2,e.position.set(0,.045,.046),n.add(e);let i=new W(Rn.rosette,An.dark);i.position.set(0,.045,.05),n.add(i);let s=ai(new W(Rn.bridge,An.dark));s.position.set(0,-.13,.052),n.add(s);let o=new W(Rn.saddle,An.wire);o.position.set(0,-.118,.058),n.add(o);let r=ai(new W(Rn.neck,An.neck));r.position.set(0,.44,.03),n.add(r);let a=new W(Rn.board,An.dark);a.position.set(0,.45,.052),n.add(a);for(let l=0;l<7;l++){let h=new W(Rn.fret,An.chrome);h.position.set(0,.27+l*.062,.0575),n.add(h)}let c=ai(new W(Rn.head,An.dark));c.position.set(0,.72,.028),c.rotation.x=-.12,n.add(c);for(let l=0;l<6;l++){let h=new W(Rn.peg,An.chrome);h.rotation.z=Math.PI/2,h.position.set((l<3?-1:1)*.04,.75-l%3*.032,.03),n.add(h)}for(let l=0;l<6;l++){let h=new W(Rn.string,An.wire);h.position.set((l-2.5)*.0085,.27,.061),n.add(h)}return n}var yg=new D,_g=new D;function gT(n,t,e,i,s=0){let o=ai(new W(e,i));return o.position.copy(n).lerp(t,.5),o.lookAt(t),o.rotateZ(s),o.scale.z=n.distanceTo(t),o}var kn={shell:On(2368554,{roughness:.4,metalness:.42}),trim:On(12107462,{roughness:.26,metalness:.72}),cone:On(1315866,{roughness:.6,metalness:.3}),dust:On(5264990,{roughness:.45,metalness:.4}),deck:On(921106,{roughness:.32,metalness:.25}),btn:On(13620442,{roughness:.45,metalness:.3}),vu:new Bt({color:1714704,emissive:7143242,emissiveIntensity:.4,roughness:.4})};function xT(){let n=new _t,t=ai(new W(new Tt(.94,.44,.3),kn.shell));t.position.y=.24,n.add(t);let e=new Tt(.9,.4,.02),i=ai(new W(e,kn.deck));i.position.set(0,.24,.152),n.add(i);let s=new Mt(.16,.16,.035,16),o=new Mt(.035,.035,.03,10),r=new Mt(.075,.135,.032,16);for(let x of[-.29,.29]){let p=ai(new W(s,kn.trim));p.rotation.x=Math.PI/2,p.position.set(x,.24,.158);let m=new W(r,kn.cone);m.rotation.x=-Math.PI/2,m.position.set(x,.24,.168);let _=new W(o,kn.dust);_.rotation.x=Math.PI/2,_.position.set(x,.24,.182),n.add(p,m,_)}let a=ai(new W(new Tt(.24,.15,.03),kn.trim));a.position.set(0,.3,.162);let c=new W(new Tt(.19,.1,.012),kn.cone);c.position.set(0,.31,.178),n.add(a,c);let l=new Tt(.032,.03,.026);for(let x=0;x<5;x++){let p=new W(l,kn.btn);p.position.set(-.09+x*.045,.15,.166),n.add(p)}let h=new W(new Tt(.22,.022,.012),kn.vu);h.position.set(0,.2,.172),n.add(h);let u=new Mt(.022,.022,.02,8);for(let x of[-.44,.44]){let p=new W(u,kn.trim);p.rotation.x=Math.PI/2,p.position.set(x,.36,.152),n.add(p)}let d=ai(new W(new mn(.17,.017,6,14,Math.PI),kn.trim));d.position.set(0,.46,0),n.add(d);let f=new W(new Mt(.006,.004,.5,6),kn.trim);f.position.set(.4,.68,-.06),f.rotation.z=-.34,n.add(f);let g=new Tt(.1,.045,.22);for(let x of[-.32,.32]){let p=ai(new W(g,kn.deck));p.position.set(x,.022,0),n.add(p)}return n.userData.vu=h.material,n}var Vc=new D;function vg(n,t,e,i,s){let o=xn(n);o.position.set(t,e,i),o.rotation.y=s;let r=mT(),a=o.userData.body;return r.position.set(.05,a.hipY+.2,a.chestD*.5+.08),r.rotation.set(.16,-.3,1),r.updateMatrix(),o.add(r),yg.set(.13,.17,-.045).applyMatrix4(r.matrix),_g.set(-a.chestW*.42,a.shoulderY+.02,-.02),o.add(gT(yg,_g,Rn.strap,An.strap)),{mesh:o,guitar:r,yaw:s,body:a}}function yT(n,t,e){let i=Math.sin(t*8.2+e*1.7);n.guitar.rotation.z=1+i*.02,n.guitar.updateMatrix(),Vc.set(.03,.06+i*.07,.15).applyMatrix4(n.guitar.matrix),Di(n.mesh,1,Vc,1.25),Vc.set(-.03,.25+Math.sin(t*1.7+e)*.05,-.03).applyMatrix4(n.guitar.matrix),Di(n.mesh,-1,Vc,-.55),n.body.head&&(n.body.head.rotation.x=.16,n.body.head.rotation.z=Math.sin(t*2.1+e)*.07),n.mesh.rotation.y=n.yaw+Math.sin(t*1.1+e)*.04}var Eg=new D;function Mg(n,t,e,i){let s=si(n);s.position.set(t,0,e),s.rotation.y=i;let o=s.userData.body,r=[{leg:o.legL,hinge:Gc(o.legL,-o.thighH,"kneeHinge","knee"),foot:o.footL,side:-1},{leg:o.legR,hinge:Gc(o.legR,-o.thighH,"kneeHinge","knee"),foot:o.footR,side:1}];return{mesh:s,yaw:i,body:o,legs:r,phase:t*.7+e*.4}}function _T(n,t){let e=n.body,i=t*4.6+n.phase,s=Math.sin(i),o=Math.sin(i*.5),r=0,a=.12+.34*(.5+.5*s);for(let l of n.legs){let h=a+l.side*o*.06;l.leg.rotation.set(-h,l.side*o*.1,l.side*(.06+o*.05)),l.hinge.rotation.x=h,l.foot&&(l.foot.rotation.x=0),r=Math.max(r,Math.cos(h))}n.mesh.position.y=-e.thighH*(1-r);let c=.25;for(let l of[-1,1]){let h=i+(l>0?Math.PI:0);Eg.set(l*(c+Math.cos(h)*.05),e.shoulderY+.16+Math.sin(h)*.2,.13+Math.cos(h)*.07),Di(n.mesh,l,Eg,l*.5)}e.head&&(e.head.rotation.x=.06+s*.07,e.head.rotation.z=o*.14),n.mesh.rotation.y=n.yaw+o*.22,n.mesh.rotation.z=0}function bg(n){let t=new D(-6,0,5),e=new D(5,0,3),i=new D(12,0,8),s=vg({hair:16769162,shorts:936530,skin:14198126},t.x,0,t.z,.35),o=vg({hair:15783050,shorts:13123630,skin:13537112},e.x,0,e.z,-.4);s.mesh.name="ken-guitar-a",o.mesh.name="ken-guitar-b",n.add(s.mesh,o.mesh);let r=xT();r.position.copy(i),r.rotation.y=Math.PI-.35,r.name="boombox",n.add(r);let a=Mg({hair:1708560,bikini:16739226,skin:15251608},10.85,7.15,.55),c=Mg({hair:15909166,bikini:3112912,skin:14262392},13.2,8.7,-.7);a.mesh.name="babe-boom-a",c.mesh.name="babe-boom-b",n.add(a.mesh,c.mesh);let l=[s,o],h=[a,c],u=r.userData.vu;return{tick(d){for(let f=0;f<l.length;f++)yT(l[f],d,f);for(let f of h)_T(f,d);u&&(u.emissiveIntensity=.35+Math.abs(Math.sin(d*4.6))*.9)},musicSpots:[{id:"guitar-a",position:s.mesh.position,radius:7},{id:"guitar-b",position:o.mesh.position,radius:7},{id:"boombox",position:r.position,radius:8},{id:"dj",position:new D(-24,0,7),radius:10}]}}var vT=16,ET=.15,MT=0,bT=4,Iu=.4,Du=.8,wT=2.2,Oo=1/60,Lu=.984,wg=1,Lg=5,ST=4,TT={torso:new Tt(.34,.5,.18),head:new Tt(.22,.22,.22),arm:new Tt(.09,.5,.09),leg:new Tt(.11,.7,.11)},ko=[{id:"torso",geo:"torso",ox:0,oy:1.16,oz:0,half:.25,inv:.35,mat:"skin"},{id:"head",geo:"head",ox:0,oy:1.62,oz:0,half:.11,inv:.85,mat:"skin"},{id:"armL",geo:"arm",ox:-.28,oy:1.2,oz:0,half:.25,inv:1,mat:"skin"},{id:"armR",geo:"arm",ox:.28,oy:1.2,oz:0,half:.25,inv:1,mat:"skin"},{id:"legL",geo:"leg",ox:-.09,oy:.36,oz:0,half:.35,inv:1,mat:"shorts"},{id:"legR",geo:"leg",ox:.09,oy:.36,oz:0,half:.35,inv:1,mat:"shorts"}],RT=ko.slice(1).map(n=>({a:0,b:ko.indexOf(n),rest:Math.hypot(n.ox-ko[0].ox,n.oy-ko[0].oy,n.oz-ko[0].oz)})),Sg=[{hair:16041009,shorts:2060152,skin:13934698},{hair:16739226,shorts:1723788,skin:13406042},{hair:16048762,shorts:14826299,skin:14721120},{hair:6211839,shorts:15909166,skin:13931082}],AT=[{x:16,z:2,axis:"x"},{x:-10,z:-3,axis:"z"}];function Ps(n,t){return n+Math.random()*(t-n)}function Tg(n){return new Bt({color:n,roughness:.72,metalness:.04})}function CT(n,t,e){let i=Math.cos(e),s=Math.sin(e);return{x:n*i-t*s,z:n*s+t*i}}function PT(n,t){return Math.atan2(t.x-n.x,t.z-n.z)}function LT(n,t){let e=Tg(t.skin),i=Tg(t.shorts),s=new _t;s.name="ken-ragdoll",s.visible=!1;let o=ko.map(r=>{let a=r.mat==="shorts"?i:e,c=new W(TT[r.geo],a);return c.castShadow=!0,c.receiveShadow=!0,s.add(c),{mesh:c,x:0,y:r.oy,z:0,px:0,py:r.oy,pz:0,half:r.half,inv:r.inv,rx:0,rz:0,ox:r.ox,oy:r.oy,oz:r.oz}});return n.add(s),{root:s,parts:o}}function IT(n,t,e,i){let s=n.mesh.rotation.y,o=n.x,r=n.z;for(let a of n.doll.parts){let c=CT(a.ox,a.oz,s);a.x=o+c.x,a.y=a.oy,a.z=r+c.z;let l=t+Ps(-1.4,1.4),h=e+Ps(.4,2.2),u=i+Ps(-1.4,1.4);a.px=a.x-l*Oo,a.py=a.y-h*Oo,a.pz=a.z-u*Oo,a.rx=0,a.rz=0,a.mesh.position.set(a.x,a.y,a.z),a.mesh.rotation.set(0,s,0)}}function DT(n,t){let e=-vT*t*t;for(let i of n){let s=(i.x-i.px)*Lu,o=(i.y-i.py)*Lu,r=(i.z-i.pz)*Lu;i.px=i.x,i.py=i.y,i.pz=i.z,i.x+=s,i.y+=o+e,i.z+=r,i.rx+=r*10,i.rz-=s*10}}function UT(n){for(let t of RT){let e=n[t.a],i=n[t.b],s=i.x-e.x,o=i.y-e.y,r=i.z-e.z,a=Math.hypot(s,o,r)||1e-6,c=e.inv+i.inv,l=(a-t.rest)/a*(1/c);e.x+=s*l*e.inv,e.y+=o*l*e.inv,e.z+=r*l*e.inv,i.x-=s*l*i.inv,i.y-=o*l*i.inv,i.z-=r*l*i.inv}}function HT(n){for(let t of n){let e=MT+t.half;if(t.y>=e)continue;let i=t.x-t.px,s=t.y-t.py,o=t.z-t.pz;t.y=e,t.py=s<0?t.y+s*ET:t.y,t.px=t.x-i*.7,t.pz=t.z-o*.7}}function NT(n){for(let t of n.doll.parts)t.mesh.position.set(t.x,t.y,t.z),t.mesh.rotation.set(t.rx,n.mesh.rotation.y,t.rz)}function Ig(n,t){n.state=t;let e=t==="ragdoll";n.mesh.visible=!e,n.doll.root.visible=e}function Uu(n,t=0){let e=n.mesh.userData.body;if(!e)return;let i=n.lead||1;e.armL.rotation.set(-1.22+(i<0?-t*.5:t*.1),.1,.48),e.armR.rotation.set(-1.22+(i>0?-t*.5:t*.1),-.1,-.48),e.legL.rotation.set(.1,0,.05),e.legR.rotation.set(.06,0,-.05)}function Rg(n){n.x=n.home.x,n.z=n.home.z,n.vx=0,n.vz=0,n.hp=Lg+(Math.random()*3|0),n.cool=Ps(Iu,Du),n.punch=0,n.acc=0,n.mesh.position.set(n.home.x,0,n.home.z),n.mesh.rotation.set(0,n.home.yaw,0),Uu(n,0),Ig(n,"stand")}function kT(n,t,e,i){let s=3.2+i*2.4;IT(n,t*s,3.4+i*2,e*s),Ig(n,"ragdoll")}function OT(n,t){let e=t.x-n.x,i=t.z-n.z,s=Math.hypot(e,i)||1,o=e/s,r=i/s,a=Math.random()<.14,c=a?1.35:Ps(.7,1.05);if(n.vx+=o*1.6*c,n.vz+=r*1.6*c,n.punch=.16,t.state==="stand")t.vx+=o*2.8*c,t.vz+=r*2.8*c,t.hp-=a?wg*2:wg,t.hp<=0&&kT(t,o,r,c);else{let l=t.doll.parts[0];l.px-=o*.1*c,l.pz-=r*.1*c,l.py-=.03*c}}function Ag(n,t,e){n.cool-=e,n.cool<=0&&(n.cool=Ps(Iu,Du),OT(n,t)),n.vx+=(n.home.x-n.x)*6*e,n.vz+=(n.home.z-n.z)*6*e,n.vx*=Math.max(0,1-5.5*e),n.vz*=Math.max(0,1-5.5*e),n.x+=n.vx*e,n.z+=n.vz*e,n.mesh.rotation.y=PT(n,t);let i=n.x,s=n.z,o=0;if(n.punch>0){n.punch=Math.max(0,n.punch-e),o=Math.sin((1-n.punch/.16)*Math.PI);let r=Math.sin(n.mesh.rotation.y),a=Math.cos(n.mesh.rotation.y);i+=r*o*.22,s+=a*o*.22}n.mesh.position.set(i,0,s),n.mesh.rotation.x=0,Uu(n,o)}function Cg(n,t){for(n.acc+=Math.min(t,.05);n.acc>=Oo;){n.acc-=Oo,DT(n.doll.parts,Oo);for(let i=0;i<ST;i++)UT(n.doll.parts);HT(n.doll.parts)}NT(n);let e=n.doll.parts[0];n.x=e.x,n.z=e.z}function Pg(n,t,e,i,s){let o=xn(s);o.position.set(t,0,e),o.rotation.y=i,o.userData.fight=!0,o.userData.paintTarget=!1,n.add(o);let r={mesh:o,doll:LT(n,s),home:{x:t,z:e,yaw:i},x:t,z:e,vx:0,vz:0,hp:Lg,cool:Ps(Iu,Du),punch:0,acc:0,lead:Math.random()<.5?-1:1,state:"stand"};return Uu(r,0),r}function BT(n,t,e,i){let s=wT*.5,o=t.x,r=t.z,a=t.x,c=t.z,l=0,h=Math.PI;return t.axis==="x"?(o-=s,a+=s,l=Math.PI*.5,h=-Math.PI*.5):(r-=s,c+=s,l=0,h=Math.PI),{a:Pg(n,o,r,l,e),b:Pg(n,a,c,h,i),down:0}}function Dg(n){let t=AT.map((i,s)=>BT(n,i,Sg[s*2],Sg[s*2+1]));function e(i){if(!(i>0))return;let s=Math.min(i,.05);for(let o of t)o.a.state==="stand"&&Ag(o.a,o.b,s),o.b.state==="stand"&&Ag(o.b,o.a,s),o.a.state==="ragdoll"&&Cg(o.a,s),o.b.state==="ragdoll"&&Cg(o.b,s),(o.a.state==="ragdoll"||o.b.state==="ragdoll")&&(o.down+=s,o.down>=bT&&(Rg(o.a),Rg(o.b),o.down=0))}return{tick:e}}var zr=5.5;var Ug={x:0,z:10},zT=[[-20,16],[0,12],[18,8],[8,-2],[-12,8]],Hg=["assets/media/psa/psa1.mp4","assets/media/psa/psa2.mp4","assets/media/psa/psa3.mp4","assets/media/psa/psa4.mp4","assets/media/psa/psa5.mp4"],Ng=["assets/media/cutscene/s4_i_can_use_them.jpg","assets/media/ads/billboard_terminate_uv.png","assets/media/ads/tv_surfclub.jpg","assets/media/ads/dj_slide_apply.jpg","assets/media/cutscene/aus101_ref.jpg"],FT=[["I CAN USE THEM","PUBLIC HEALTH REASSIGNMENT"],["TERMINATE UV","THE SUN IS A HOSTILE ACTOR"],["SURF CLUB NOTICE","ZINC ON \xB7 SHIRT OPTIONAL"],["APPLY","OR BE RECALLED"],["AUS101","DOES NOT TAKE REQUESTS"]];function GT(n,t){let e=document.createElement("canvas");e.width=512,e.height=384;let i=e.getContext("2d");i.fillStyle="#0b1210",i.fillRect(0,0,512,384),i.fillStyle="#1a3a28",i.fillRect(0,0,512,58),i.fillStyle="#c8a44a",i.fillRect(0,58,512,4),i.fillRect(0,380,512,4),i.fillStyle="#e8d48a",i.font="bold 18px Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("DEPARTMENT OF WELLNESS",256,28),i.font="12px Arial, sans-serif",i.fillStyle="#9aaa88",i.fillText("GOLD COAST UNIT  \xB7  PSA",256,46),i.fillStyle="#f4f7fb",i.font="bold 42px Impact, Arial Black, sans-serif",i.fillText(n,256,188),i.fillStyle="#ffb040",i.font="bold 22px Arial, sans-serif",i.fillText(t,256,248),i.globalAlpha=.12,i.fillStyle="#000";for(let o=0;o<384;o+=3)i.fillRect(0,o,512,1);i.globalAlpha=1;let s=new rn(e);return s.colorSpace=ee,s.needsUpdate=!0,s}function VT(n){let t=FT.map(([o,r])=>GT(o,r)),e=new _o,i=Ng.length,s=()=>{i-=1,i<=0&&n()};return Ng.forEach((o,r)=>{e.load(o,a=>{a.colorSpace=ee,a.needsUpdate=!0,t[r]=a,s()},void 0,s)}),t}function WT(n,t,e,i){let s=new _t,o=xt(3817026,{metalness:.55,roughness:.42}),r=xt(1447962,{roughness:.62,metalness:.18}),a=xt(789518,{roughness:.5,metalness:.12}),c=new W(new Mt(.18,.22,.1,10),o);c.position.y=.05,c.castShadow=!0,s.add(c);let l=new W(new Mt(.05,.062,1.52,8),o);l.position.y=.86,l.castShadow=!0,s.add(l);let h=kt(.16,.08,.16,o);h.position.y=1.58,s.add(h);let u=kt(.78,.6,.26,r);u.position.y=1.78,s.add(u);let d=kt(.74,.52,.04,a);d.position.set(0,1.78,.14),s.add(d);let f=kt(.82,.07,.22,r);f.position.set(0,2.12,.06),s.add(f);let g=kt(.5,.08,.02,xt(2761748,{roughness:.7}));g.position.set(0,1.42,.14),s.add(g);let x=new W(new Kt(.018,8,6),new Bt({color:3348480,emissive:16746496,emissiveIntensity:.12,roughness:.4}));x.position.set(.3,1.52,.15),s.add(x);let p=new Bt({map:i[e%i.length],emissive:16777215,emissiveMap:i[e%i.length],emissiveIntensity:.12,color:4868682,roughness:.38,metalness:.05}),m=new W(new ue(.42,.62),p);return m.position.set(0,1.82,.162),s.add(m),s.position.set(n,0,t),s.rotation.y=Math.atan2(Ug.x-n,Ug.z-t),{group:s,screenMat:p,ledMat:x.material,frame:e%i.length}}function kg(n){let t=[],e=[],i=VT(()=>{for(let r of t){let a=i[r.frame];r.screenMat.map=a,r.screenMat.emissiveMap=a}});zT.forEach(([r,a],c)=>{let l=WT(r,a,c,i),h=document.createElement("video");h.src=Hg[c%Hg.length],h.loop=!0,h.muted=!0,h.playsInline=!0,h.preload="metadata",h.setAttribute("playsinline","");let u=new fo(h);u.colorSpace=ee,l.video=h,l.videoTex=u,l.stillTex=i[c%i.length],n.add(l.group),t.push(l),e.push({position:new D(r,0,a),radius:zr})});let s=new Vt(3815994),o=new Vt(16777215);return{spots:e,tick(r,a=!0){let c=performance.now(),l=-1,h=zr*zr;for(let u=0;u<t.length;u++){let d=e[u].position,f=(r.x-d.x)**2+(r.z-d.z)**2;f<h&&(h=f,l=u)}for(let u=0;u<t.length;u++){let d=t[u],f=e[u].position,g=r.x-f.x,x=r.z-f.z,p=g*g+x*x<zr*zr,m=d.screenMat,_=p?.92:.1;m.emissiveIntensity+=(_-m.emissiveIntensity)*.12,m.color.lerp(p?o:s,.12),d.ledMat.emissiveIntensity+=((p?1.4:.1)-d.ledMat.emissiveIntensity)*.14,p?(d.videoTex&&m.map!==d.videoTex&&(m.map=d.videoTex,m.emissiveMap=d.videoTex),d.video&&d.video.paused&&d.video.play().catch(()=>{}),d.video&&(d.video.muted=!a||u!==l,d.video.volume=.45)):d.video&&!d.video.paused&&(d.video.pause(),d.video.muted=!0,d.stillTex&&(m.map=d.stillTex,m.emissiveMap=d.stillTex))}}}}function XT(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function Og({carpenter:n,shades:t,locals:e=[]}={}){let i=null;function s(){let a=new Set;n&&a.add(n),t&&a.add(t);for(let c of e)c?.bed&&a.add(c.bed);return a}function o(a){return a.id==="piano"||t&&a.bed===t?Math.max(a.radius??0,14):a.radius!=null?a.radius:0}function r(a){if(a===i)return;i=a;let c=s();if(a==="mute"){for(let h of c)h.setMix?.(0,.65);return}let l=n;a!=="carpenter"&&(l=e.find(u=>u.id===a)?.bed||n);for(let h of c)h.setMix?.(h===l?1:0,.65)}return{tick(a,c){if(!c||!a){r("mute");return}let l=null,h=1/0;for(let u of e){if(!u?.getPos||!u.bed)continue;let d=u.getPos();if(!d)continue;let f=XT(a,d);f<o(u)&&f<h&&(h=f,l=u)}r(l?l.id:"carpenter")}}}var ci=n=>440*2**((n-69)/12);function _i(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function vn(n,t){let e=n.createGain();return e.gain.value=t,e}function Xc(n,t,e,i){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,i!=null&&(s.Q.value=i),s}function Hu(n,t,e,i){n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(t,i+e)}function Bg(n,t){let e=Math.max(1,n.sampleRate*t|0),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0);for(let o=0;o<e;o++)s[o]=Math.random()*2-1;return i}function Fr(n,t,e,i,s){let o=vn(n,1e-4);return o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(e,t+i),o.gain.exponentialRampToValueAtTime(1e-4,t+s),o}function Nu(n,t,e){let i=vn(n,0);i.connect(t||n.destination);let s=!1,o=0,r=0,a=0,c=0;return{out:i,get running(){return s},start(l){n.state==="suspended"&&n.resume(),!s&&(s=!0,a=0,r=n.currentTime+.06,Hu(i.gain,e*c,.08,n.currentTime),l())},setMix(l,h=.6){c=Math.max(0,Math.min(1,l)),Hu(i.gain,e*c,h,n.currentTime)},stop(){s=!1,clearTimeout(o),Hu(i.gain,0,.08,n.currentTime)},clock(l,h,u){if(!s)return;let d=n.currentTime+l;for(;r<d;)u(r,a++),r+=h;o=setTimeout(()=>this.clock(l,h,u),35)}}}function zg(n,t,e,i=148,s=41,o=.72,r=.22){let a=_i(n,"sine",i);a.frequency.setValueAtTime(i,e),a.frequency.exponentialRampToValueAtTime(s,e+.11);let c=Fr(n,e,o,.004,r);a.connect(c).connect(t),a.start(e),a.stop(e+r+.02)}function Wc(n,t,e,i,s,o,r){let a=n.createBufferSource();a.buffer=e;let c=Xc(n,"highpass",r,.7),l=Fr(n,i,s,.002,o);a.connect(c).connect(l).connect(t),a.start(i),a.stop(i+o+.02)}function Fg(n,t){let s=Nu(n,t,.48),o=vn(n,1),r=vn(n,.7),a=vn(n,.45),c=vn(n,.28);o.connect(s.out),r.connect(s.out),a.connect(s.out),c.connect(s.out);let l=Bg(n,.06),h=_i(n,"triangle",ci(36)),u=Xc(n,"lowpass",280,1.1),d=vn(n,1e-4);h.connect(d).connect(u).connect(a);let f=!1;function g(p,m){let _=_i(n,"sine",ci(m)),y=_i(n,"sine",ci(m+7));y.detune.value=4;let v=Fr(n,p,.16,.01,.28);_.connect(v),y.connect(v),v.connect(c),_.start(p),_.stop(p+.3),y.start(p),y.stop(p+.3)}function x(p,m){let _=m&15;(_&3)===0&&zg(n,o,p,142,40,.78,.2),Wc(n,r,l,p,_&1?.05:.14,_&1?.035:.048,7200),(_===6||_===14)&&Wc(n,r,l,p,.18,.16,4800);let v=ci([36,36,39,43][_>>2&3]);h.frequency.setValueAtTime(v,p),d.gain.cancelScheduledValues(p),d.gain.setValueAtTime(1e-4,p),(_&3)===0&&(d.gain.exponentialRampToValueAtTime(.55,p+.012),d.gain.exponentialRampToValueAtTime(1e-4,p+.18)),(_===4||_===12)&&g(p,_===4?79:76),_===10&&g(p,72)}return{start(){f||(h.start(),f=!0),s.start(()=>s.clock(.12,15/118,x))},setMix:(p,m)=>s.setMix(p,m),stop:()=>s.stop()}}function Gg(n,t){let i=[52,59,55,62,47,55,64,59,52,50,55,62],s=Nu(n,t,.42),o=vn(n,.85),r=Xc(n,"lowpass",2400,.6),a=n.createDelay(.45);a.delayTime.value=.28;let c=vn(n,.28);o.connect(r).connect(s.out),r.connect(a).connect(c).connect(a),a.connect(s.out);let l=_i(n,"sine",ci(40)),h=vn(n,.05);l.connect(h).connect(r);let u=!1;function d(g,x){let p=_i(n,"sine",ci(x)),m=_i(n,"triangle",ci(x));m.detune.value=6;let _=Fr(n,g,.22,.012,1.8);if(p.connect(_),m.connect(_),_.connect(o),p.start(g),p.stop(g+1.9),m.start(g),m.stop(g+1.9),x>=55&&x&1){let y=_i(n,"sine",ci(x+7)),v=Fr(n,g,.08,.02,1.4);y.connect(v).connect(o),y.start(g),y.stop(g+1.5)}}function f(g,x){d(g,i[x%i.length])}return{start(){u||(l.start(),u=!0),s.start(()=>s.clock(.2,.92,f))},setMix:(g,x)=>s.setMix(g,x),stop:()=>s.stop()}}function Vg(n,t){let s=Nu(n,t,.44),o=vn(n,.7),r=vn(n,.55),a=vn(n,.35);o.connect(s.out),r.connect(s.out),a.connect(s.out);let c=Bg(n,.04),l=_i(n,"sawtooth",ci(28)),h=_i(n,"square",ci(28));l.detune.value=3,h.detune.value=-5;let u=vn(n,.32),d=vn(n,1e-4),f=Xc(n,"lowpass",520,1.8);l.connect(d),h.connect(u).connect(d),d.connect(f).connect(o);let g=!1;function x(p,m){let _=m>>3&7,y=m&7,v=ci(_>=4?31:28);l.frequency.setValueAtTime(v,p),h.frequency.setValueAtTime(v*.997,p);let C=y&1;d.gain.cancelScheduledValues(p),d.gain.setValueAtTime(1e-4,p),d.gain.exponentialRampToValueAtTime(C?.12:.5,p+.01),d.gain.exponentialRampToValueAtTime(1e-4,p+(C?.06:.12)),C||(f.frequency.setValueAtTime(720,p),f.frequency.setTargetAtTime(480,p+.02,.05)),Wc(n,r,c,p,C?.07:.12,C?.03:.045,8e3),Wc(n,r,c,p+15/124,.045,.025,9e3),(y===2||y===6)&&zg(n,a,p,210,90,.18,.06)}return{start(){g||(l.start(),h.start(),g=!0),s.start(()=>s.clock(.12,30/124,x))},setMix:(p,m)=>s.setMix(p,m),stop:()=>s.stop()}}var qT=2.6,ku=new D,YT=new D(0,1,0),Wg=["#e07040","#fbf6ea","#ffd76a","#2ec4c8","#7ad0ff","#9be07a","#ff7ab0"],ZT=[3065032,8048895,10215546,16743088];function tn(n,t={}){return new Bt({color:n,roughness:.72,metalness:.04,...t})}function Yg(n){return n.castShadow=!0,n.receiveShadow=!0,n}function Ui(n,t,e,i){return Yg(new W(new Tt(n,t,e),i))}function $T(n,t){return!n||!t?1/0:Math.hypot((n.x??0)-(t.x??0),(n.z??0)-(t.z??0))}function Xg(n,t){let e=new _t,i=Ui(.086,.014,.054,n);e.add(i);let s=Ui(.07,.002,.028,t);return s.position.y=.008,e.add(s),e}function Ou(n,t,e,i){let s=n.clone().lerp(t,.5);s.y-=e;let o=new po(n.clone(),s,t.clone());return new W(new xo(o,10,.007,5,!1),i)}var KT=new Tt(1,1,1);function qg(n,t,e,i){let s=new _t,o=.018,r=(a,c,l,h,u,d)=>{let f=Yg(new W(KT,i));f.scale.set(a,c,l),f.position.set(h,u,d),s.add(f)};for(let a of[(e-o)*.5,-(e-o)*.5]){for(let c=0;c<4;c++)r(.05,t,o,-n*.5+.045+c*((n-.09)/3),t*.5,a);for(let c of[o,t-o])r(n,o*1.6,o,0,c,a)}for(let a of[-(n-o)*.5,(n-o)*.5])r(o,t,e*.92,a,t*.5,0);return r(n,o*1.4,e*.94,0,t-o*.7,0),s}function JT(){let n=new _t,t=tn(1710624,{roughness:.4,metalness:.38}),e=tn(6965804,{roughness:.6}),i=tn(15261904,{roughness:.45}),s=tn(10133672,{roughness:.28,metalness:.62}),o=tn(8016432,{roughness:.84}),r=tn(1184278,{roughness:.85}),a=.44,c=qg(.94,.56,.3,o);c.position.set(0,0,a);let l=qg(.86,.52,.28,o);l.position.set(0,.56,a),n.add(c,l);let h=1.08,u=Ui(.64,.075,.25,t);u.position.set(-.06,h+.038,a),n.add(u);for(let F of[-.36,.28]){let Z=Ui(.045,.09,.29,e);Z.position.set(F,h+.045,a),n.add(Z)}let d=Ui(.6,.012,.075,tn(1118488,{roughness:.34,metalness:.2}));d.position.set(-.06,h+.082,a+.068),n.add(d);let f=[],g=[0,2,4,5,7,9,11],x=new Tt(.03,.014,.125),p=new Tt(.016,.02,.078),m=h+.083,_=a-.05,y=-.33;for(let F=0;F<17;F++){let Z=new W(x,i);Z.castShadow=!0,Z.position.set(y+F*.0315,m,_),n.add(Z),f.push(Z);let K=g[F%7];if(K!==4&&K!==11&&F<16){let M=new W(p,tn(855312,{roughness:.35}));M.position.set(y+F*.0315+.016,m+.014,_+.024),n.add(M)}}let v=new Mt(.011,.013,.016,8);for(let F=0;F<5;F++){let Z=new W(v,s);Z.position.set(-.26+F*.05,h+.096,a+.068),Z.rotation.y=F*.7,n.add(Z)}let C=new Tt(.012,.01,.05);for(let F=0;F<3;F++){let Z=new W(C,i);Z.position.set(.02+F*.028,h+.093,a+.068),n.add(Z)}let A=new Mt(.024,.024,.014,10);for(let F of[-.36,-.32]){let Z=new W(A,r);Z.rotation.z=Math.PI/2,Z.position.set(F,h+.1,a+.05),n.add(Z)}let S=Ui(.3,.06,.24,t);S.position.set(.46,h+.03,a+.02),S.rotation.y=-.35,n.add(S);let I=Ui(.14,.006,.045,tn(666138,{emissive:3065032,emissiveIntensity:.5}));I.position.set(.005,.036,.085),S.add(I);let E=[],T=new Tt(.05,.014,.042);for(let F=0;F<2;F++)for(let Z=0;Z<4;Z++){let K=tn(2763314,{roughness:.45,emissive:0,emissiveIntensity:1}),M=new W(T,K);M.castShadow=!0,M.position.set(-.09+Z*.06,.036,-.055+F*.055),S.add(M),E.push({mesh:M,mat:K})}let U=Ui(.34,.28,.2,t);U.position.set(-.62,.14,a+.06),U.rotation.y=.5,n.add(U);let Y=Ui(.24,.18,.02,tn(2894900,{roughness:.9}));Y.position.set(0,.01,.105),U.add(Y);let q=new W(new Mt(.055,.085,.03,12),r);q.rotation.x=Math.PI/2,q.position.set(0,.01,.115),U.add(q);let P=tn(1315866,{roughness:.7});n.add(Ou(new D(-.42,h+.05,a+.1),new D(-.6,.24,a+.02),.22,P)),n.add(Ou(new D(.3,h+.05,a+.1),new D(.42,h+.03,a+.1),.14,P));let z=new _t,B=new W(new mn(.115,.012,5,14,Math.PI),tn(1447450));B.rotation.y=Math.PI/2,z.add(B);for(let F of[-1,1]){let Z=new W(new Mt(.042,.046,.028,12),tn(1710622,{metalness:.3}));Z.rotation.z=Math.PI/2,Z.position.set(F*.118,-.02,0),z.add(Z);let K=new W(new Mt(.036,.036,.016,10),r);K.rotation.z=Math.PI/2,K.position.set(F*.104,-.02,0),z.add(K)}return n.userData.cans=z,n.userData.keys=f,n.userData.pads=E,n.userData.keyY=m,n.userData.deck={x:-.06,y:m,z:_,standZ:a},n.userData.cableMat=P,n}function is(n,t,e){let i=document.createElement(n);return t&&Object.assign(i.style,t),e&&e.appendChild(i),i}function jT(){if(typeof document>"u"||document.getElementById("aus101-seq-css"))return;let n=document.createElement("style");n.id="aus101-seq-css",n.textContent="#aus101-seq,#aus101-seq *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}#aus101-seq{position:fixed;z-index:16;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom,0px) + 8px));transform:translateX(-50%);display:none;pointer-events:auto;padding:8px 8px 7px;background:rgba(11,18,16,.78);border:1px solid rgba(251,246,234,.22);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.35);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}#aus101-seq .grid{display:grid;grid-template-columns:10px repeat(16,14px);gap:3px;align-items:center}#aus101-seq .sw{width:8px;height:8px;border-radius:2px}#aus101-seq button.st{width:14px;height:14px;padding:0;margin:0;border:0;border-radius:2px;background:rgba(251,246,234,.12);cursor:pointer}#aus101-seq button.st[data-on='1']{background:var(--c,#ffd76a)}#aus101-seq button.st[data-now='1']{box-shadow:inset 0 0 0 1px #fff}#aus101-seq .row{display:flex;gap:6px;justify-content:flex-end;margin-top:6px}#aus101-seq .act{min-width:44px;height:22px;border:1px solid rgba(251,246,234,.28);border-radius:11px;background:rgba(12,18,16,.5);color:#fbf6ea;font:600 10px/1 system-ui,sans-serif;letter-spacing:.04em;padding:0 8px;cursor:pointer}#aus101-seq-pad{position:fixed;z-index:15;left:50%;bottom:max(20px,calc(env(safe-area-inset-bottom,0px) + 10px));transform:translateX(-50%);width:68px;height:68px;border-radius:50%;display:none;pointer-events:auto;background:rgba(12,18,16,.4);border:1px solid rgba(251,246,234,.28);box-shadow:0 4px 18px rgba(0,0,0,.28);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}#aus101-seq-pad:active{background:rgba(255,215,106,.28)}",document.head.appendChild(n)}function QT(n,t,e,i){jT();let s=document.getElementById("aus101-seq"),o=document.getElementById("aus101-seq-pad");if(s&&o)return{root:s,pad:o,cells:s._cells};s=is("div",null,document.body),s.id="aus101-seq";let r=is("div",null,s);r.className="grid";let a={};So.forEach((u,d)=>{let f=is("div",{background:Wg[d]},r);f.className="sw";let g=[];for(let x=0;x<16;x++){let p=is("button",null,r);p.className="st",p.type="button",p.style.setProperty("--c",Wg[d]),p.dataset.tr=u,p.dataset.s=String(x),g.push(p)}a[u]=g}),s._cells=a;let c=is("div",null,s);c.className="row";let l=is("button",null,c);l.className="act",l.type="button",l.textContent="SAVE";let h=is("button",null,c);return h.className="act",h.type="button",h.textContent="TAKE",l.addEventListener("pointerup",u=>{u.preventDefault(),u.stopPropagation(),t()}),h.addEventListener("pointerup",u=>{u.preventDefault(),u.stopPropagation(),e()}),r.addEventListener("pointerup",u=>{let d=u.target;!(d instanceof HTMLElement)||!d.classList.contains("st")||(u.preventDefault(),u.stopPropagation(),n(d.dataset.tr,parseInt(d.dataset.s,10)))}),o=is("div",null,document.body),o.id="aus101-seq-pad",o.title="KeyE \u2014 open sequencer",o.setAttribute("aria-label","KeyE \u2014 open sequencer"),o.addEventListener("pointerup",u=>{u.preventDefault(),u.stopPropagation(),i()}),{root:s,pad:o,cells:a}}function Zg(n){let t=new _t;t.name="synth-rig",t.position.set(15.6,0,4.2),t.rotation.y=.35;let e=xn({hair:3809816,shorts:1710626,skin:13010498});e.name="synth-lad",e.userData.kind="ken",t.add(e);let i=JT();t.add(i);let s=i.userData.cans,o=e.userData.body,{headY:r,headR:a}=o;s.position.set(0,r+a*.62,0),e.add(s);let c=i.userData.deck;e.add(Ou(new D(-a*1.05,r+a*.4,0),new D(c.x-.3,c.y-.02,c.standZ+.1),.12,i.userData.cableMat));let l=tn(1447450,{roughness:.45,metalness:.2}),h=tn(14708784,{roughness:.55});for(let U=0;U<3;U++){let Y=Xg(l,h);Y.position.set(.3-U*.02,c.y+.03+U*.015,c.standZ+.02),Y.rotation.y=.2+U*.08,i.add(Y)}let u=Xg(l,tn(16766826,{roughness:.5}));u.position.set(-.34,c.y+.03,c.standZ+.03),u.visible=!1,i.add(u),n.add(t);let d=o0(),f=!1,g=null,x=!1,p=!1,m=!1,_=null;function y(){if(E)for(let U of So){let Y=E.cells[U],q=d[U];for(let P=0;P<16;P++)Y[P].dataset.on=q[P]?"1":"0"}}function v(U){if(!(!E||!f))for(let Y of So){let q=E.cells[Y];for(let P=0;P<16;P++)q[P].dataset.now=P===U?"1":"0"}}function C(){let U=an();U&&(U.state==="suspended"&&U.resume(),_||(_=Kh(U,U.destination,d,{peak:.48})),_.setMix(.4,.06),_.start())}function A(){_?.setMix(0,.08),_?.stop()}function S(U){U!==f&&(f=U,E&&(E.root.style.display=f?"block":"none",E.pad.style.display="none"),f?(document.exitPointerLock?.(),y(),C()):A())}function I(U){E&&(E.pad.style.display=U&&!f?"block":"none")}let E=typeof document<"u"?QT((U,Y)=>{d[U]&&(d[U][Y]=d[U][Y]?0:1,y())},()=>{g="save",u.visible=!0},()=>{g="take",u.visible=!1},()=>{g="open",S(!0)}):null;typeof window<"u"&&window.addEventListener("keydown",U=>{U.code==="KeyE"&&an()});function T(U,Y){let q=$T(U,t.position)<=qT,P=!!Y?.KeyE,z=!!(Y?.Enter||Y?.NumpadEnter),B=!!Y?.KeyT,F=P&&!x,Z=z&&!p,K=B&&!m;if(x=P,p=z,m=B,!q)return f&&S(!1),I(!1),g=null,null;I(!f);let M=null;return g&&(M=g,g=null),F?f?(S(!1),null):(S(!0),"open"):f&&Z?(u.visible=!0,"save"):f&&K?(u.visible=!1,"take"):M==="open"?(S(!0),"open"):M==="save"||M==="take"?M:null}return{tick(U){let Y=Math.sin(U*7.2);e.rotation.y=Math.sin(U*.7)*.05;for(let B of[-1,1]){let F=U*3.6+(B>0?1.7:0);ku.set(c.x+B*(.16+Math.sin(F)*.07),c.y+.1+Math.abs(Math.sin(F*2))*.02,c.z+.03),ku.applyAxisAngle(YT,-e.rotation.y),Di(e,B,ku,B*.85)}o.head&&(o.head.rotation.x=.22+Math.sin(U*1.4)*.05,o.head.rotation.z=Math.sin(U*.9)*.06);let q=_?.running?_.step:U*3.1&15,P=i.userData.pads;for(let B=0;B<P.length;B++){let F=f&&(q&7)===B;P[B].mat.emissive.setHex(F?ZT[B%4]:0)}let z=i.userData.keys;for(let B=0;B<z.length;B++)z[B].position.y=.505+(f&&q%12===B?.006:0);f&&v(_?.step??0)},position:t.position,tryInteract:T,get pattern(){return d},snapshot(){return $h(d)},get open(){return f}}}var tR=725520;up();pp();dp();var Wu=document.getElementById("game"),Is=new fr({canvas:Wu,antialias:!0,alpha:!1,powerPreference:"high-performance"});Is.setClearColor(tR,1);Is.outputColorSpace=ee;Is.shadowMap.enabled=!0;Is.shadowMap.type=wh;var $e=new xs;m0($e);var Bo=new Je(62,1,.08,220),eR=Up(),Xu=Ap(),Fo=g0($e,Xu),Jg=vm({scene:$e,bounds:bc,colliders:Xu,isWood:(n,t)=>Fo.isWood(n,t)});for(let n of Fo.balls)Jg.add(n);var le=Rp({x:0,y:0,z:10});le.yaw=0;var zo=S0();$e.add(zo);var Ds=d0($e),qu=bg($e),nR=Dg($e),iR=kg($e),jg=Ym($e),sR=xg(Ds,$e),Bu=Zg($e),Zc=r0({getBoomPos:()=>qu.musicSpots.find(n=>n.id==="boombox")?.position||{x:12,z:8},getDjPos:()=>({x:-24,z:7})});for(let n of["ken-guitar-a","ken-guitar-b"]){let t=$e.getObjectByName(n);t&&Ds.push({mesh:t,kind:"ken",ageBand:"adult"})}var En=new uc;En.loadManifest().catch(()=>{});var Go=new dc,oR=xp(Go,null),rR=Sp(Go),Gu=C0(En,Ds),$g=P0();cu(zo);var Qg=Rm();document.body.appendChild(Qg.html);var aR=Hm(),tx=em({scene:$e,cast:Ds,play:n=>En.play(n)}),ex=j0({scene:$e,play:n=>En.play(n),onGameOver:()=>{Zn=!1,vi?.setState("menu")}}),nx=null,Wr=fm({scene:$e,cast:Ds,play:n=>En.play(n),onHarm:n=>{tx.onHarm(n),ex.onHarm(n)}});window.addEventListener("keydown",n=>{!Zn||$n||n.repeat||(n.code==="KeyF"&&(n.preventDefault(),Wr.laser(le.pos,le.yaw,le.pitch)),n.code==="KeyG"&&(n.preventDefault(),Wr.punch(le.pos,le.yaw,le.pitch)))});var vi=null,Kg=null,Gr=null,ix=null,qc=null,Vr=null,Yc=null,Zn=!1,$n=!1,zu=0,sx=new ic(!1),Ls=Cp({dom:Wu,isPlaying:()=>Zn&&!$n,onEscapePause:()=>{Zn&&!$n&&($n=!0,hR.showAsPause(),vi?.setState("menu"),document.pointerLockElement&&document.exitPointerLock())}});Ls.bindPlayer(le);Fp({keys:Ls.keys,isPlaying:()=>Zn&&!$n});function Yu(){let{w:n,h:t}=fp(Is,Wu);Bo.aspect=n/Math.max(1,t),Bo.updateProjectionMatrix()}Yu();window.addEventListener("resize",Yu);window.addEventListener("orientationchange",()=>setTimeout(Yu,300));var Ei=!0;window.addEventListener("keydown",n=>{n.code==="KeyM"&&Zn&&(Ei=!Ei,En.gain&&(En.gain.gain.value=Ei?.5:0),Go.master&&(Go.master.gain.value=Ei?.85:0))});async function cR(){Zn=!0,$n=!1,sx.start(),eR.snap(),Ls.tryLock();try{await En.unlock(),await Go.unlock();let n=En.ctx||Go.ctx;if(n&&!vi){vi=yp(n),Kg=_p(n),Gr=Wp(n),Gr.start(),Gr.setMix(0,.05),qc=Fg(n),Vr=Gg(n),Yc=Vg(n),qc.start(),Vr.start(),Yc.start(),qc.setMix(0,.05),Vr.setMix(0,.05),Yc.setMix(0,.05);let t=qu.musicSpots,e=i=>t.find(s=>s.id===i);nx=Cm({carpenter:vi,voice:En,isTalking:i=>Gu.isTalking(i??performance.now())}),ix=Og({carpenter:vi,shades:Gr,locals:[{id:"piano",getPos:()=>Fo.piano,radius:12,bed:Gr},{id:"dj",getPos:()=>e("dj")?.position||{x:-24,z:7},radius:10,bed:Yc},{id:"boombox",getPos:()=>e("boombox")?.position,radius:8,bed:qc},{id:"guitar-a",getPos:()=>e("guitar-a")?.position,radius:7,bed:Vr},{id:"guitar-b",getPos:()=>e("guitar-b")?.position,radius:7,bed:Vr},{id:"tape",getPos:()=>Zc.currentBed.inserted==="dj"?{x:-24,z:7}:{x:12,z:8},radius:9,bed:Zc.currentBed}]})}vi?.setState("boardwalk"),vi?.start(),Kg?.start(),Ei&&(En.play("dj_open_01"),En.preload(["gold_coast_lad_01","walkby_flirt_01","interject_oi_01","gull_01"]).catch(()=>{}))}catch(n){console.warn("audio",n)}}var Vu=new hc({onDone:()=>cR()}),Fu=n=>Ds.find(t=>t.kind===n)?.mesh?.position,lR=Nm({reel:Vu,getPlayerPos:()=>le.pos,isPlaying:()=>Zn&&!$n&&!Vu.playing,spots:[{id:"piano",getPos:()=>Fo.piano,radius:8},{id:"painter",getPos:()=>jg.root?.position,radius:6},{id:"incel",getPos:()=>Fu("sigma_07"),radius:5.5},{id:"kid",getPos:()=>Fu("kid"),radius:5.2},{id:"babe",getPos:()=>Fu("babe"),radius:5.5},{id:"fight",getPos:()=>({x:16,z:2}),radius:7}],onStart:()=>{$n=!0,document.pointerLockElement&&document.exitPointerLock()},onEnd:()=>{$n=!1,Ls.tryLock()}}),hR=new lc({onStart:()=>{En.unlock().then(()=>{Ei&&En.play("factory_recall_01")}).catch(()=>{}),Vu.start()}}),uR=new _o().load("assets/media/ads/billboard_terminate_uv.png",n=>{n.colorSpace=ee}),Zu=new W(new ue(9.2,5.2),new ce({map:uR}));Zu.position.set(0,6.4,Jt.boardwalkZ-5.5);Zu.rotation.y=Math.PI;$e.add(Zu);function ox(){requestAnimationFrame(ox);let n=$n||!Zn?0:Math.min(.05,sx.getDelta());for(zu+=n;zu>=wn;){if(Zn&&!$n){let t=Gp();t.mag>.04&&(le.yaw-=t.x*2.35*wn,le.pitch-=t.y*1.55*wn,le.pitch=Math.max(-1.45,Math.min(1.45,le.pitch))),Pp(le,Ls.keys,Xu.COL,bc,wn)}zu-=wn}if(Zn&&!$n){let t=performance.now()*.001;Fo.update(t),qu.tick(t),nR.tick(n||wn),iR.tick(le.pos,Ei),sR.tick(t,le.pos),Bu.tick(t);{let o=Bu.tryInteract(le.pos,Ls.keys);(o==="save"||o==="take")&&Zc.saveFromSynth(Bu.snapshot())}Zc.tick(le.pos),nx?.tick?.(),ex.tick(n||wn,le.pos),tx.tick(n||wn,le.pos),Wr.tick(n||wn,le.pos),Jg.tick(n||wn,le.pos,le.vel);let e=Math.hypot(le.vel.x,le.vel.z);zo.position.set(le.pos.x,le.pos.y,le.pos.z),zo.rotation.y=le.yaw+Math.PI,eu(zo,{walkPhase:le.step,speed:e,punchT:Wr.punchT,laserT:Wr.laserT}),Hp(Bo,le,n||.016),oR.tick(performance.now(),e>.4),rR.tick({speed:e,onWood:Fo.isWood(le.pos.x,le.pos.z),dt:n||wn});let i=!!Ls.keys.Space;i?vi?.setState("apply"):vi?.setState("boardwalk");let s=z0({lotion:$g,cast:Ds,playerPos:le.pos,playerYaw:le.yaw,squeezing:i,dt:n||wn,applyUx:aR,bay:Qg});F0(zo,$g,n||wn),s&&Ei&&!Gu.isTalking(performance.now())&&Math.random()<.012&&En.play("rub_pleasure_01",{gain:1.2}),Ei&&Gu.tick(performance.now(),le.pos),ix?.tick(le.pos,Ei),jg.tick(Is,$e,performance.now()),lR.tick()}else Zn||(Bo.position.set(8,6.5,22),Bo.lookAt(0,1.2,4));Is.render($e,Bo)}ox();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
