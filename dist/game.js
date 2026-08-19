var om=0,hh=1,am=2;var zu=1,il=2,ei=3,_i=0,Ge=1,_e=2;var mi=0,gi=1,uh=2,dh=3,fh=4,cm=5,Ni=100,lm=101,hm=102,ph=103,mh=104,um=200,dm=201,fm=202,pm=203,uc=204,dc=205,mm=206,gm=207,xm=208,_m=209,ym=210,vm=211,Mm=212,Em=213,bm=214,Sm=0,wm=1,Tm=2,_o=3,Am=4,Rm=5,Cm=6,Pm=7,Gu=0,Lm=1,Im=2,xi=0,Dm=1,Um=2,Nm=3,Om=4,Bm=5,Fm=6;var Vu=300,As=301,Rs=302,fc=303,pc=304,jo=306,yi=1e3,un=1001,mc=1002,Ue=1003,gh=1004;var Ca=1005;var xe=1006,km=1007;var or=1008;var vn=1009,Hm=1010,zm=1011,sl=1012,Wu=1013,fi=1014,pi=1015,ar=1016,Xu=1017,qu=1018,Fi=1020,Gm=1021,dn=1023,Vm=1024,Wm=1025,ki=1026,Cs=1027,rl=1028,Yu=1029,Xm=1030,Zu=1031,$u=1033,Pa=33776,La=33777,Ia=33778,Da=33779,xh=35840,_h=35841,yh=35842,vh=35843,Ku=36196,Mh=37492,Eh=37496,bh=37808,Sh=37809,wh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,Ph=37815,Lh=37816,Ih=37817,Dh=37818,Uh=37819,Nh=37820,Oh=37821,Ua=36492,Bh=36494,Fh=36495,qm=36283,kh=36284,Hh=36285,zh=36286;var yo=2300,vo=2301,Na=2302,Gh=2400,Vh=2401,Wh=2402;var Ju=3e3,Hi=3001,Ym=3200,Zm=3201,ju=0,$m=1,Be="",ne="srgb",oi="srgb-linear",ol="display-p3",Qo="display-p3-linear",Mo="linear",fe="srgb",Eo="rec709",bo="p3";var ns=7680;var Xh=519,Km=512,Jm=513,jm=514,Qu=515,Qm=516,t0=517,e0=518,n0=519,gc=35044;var qh="300 es",xc=1035,si=2e3,So=2001,vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oa=Math.PI/180,_c=180/Math.PI;function ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function i0(n,t){return(n%t+t)%t}function Ba(n,t,e){return(1-e)*n+e*t}function Yh(n){return(n&n-1)===0&&n!==0}function yc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ct=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],y=s[1],_=s[4],M=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*x+a*y+c*R,r[3]=o*p+a*_+c*w,r[6]=o*m+a*M+c*A,r[1]=l*x+h*y+u*R,r[4]=l*p+h*_+u*w,r[7]=l*m+h*M+u*A,r[2]=d*x+f*y+g*R,r[5]=d*p+f*_+g*w,r[8]=d*m+f*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new ee;function td(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s0(){let n=cr("canvas");return n.style.display="block",n}var Zh={};function er(n){n in Zh||(Zh[n]=!0,console.warn(n))}var $h=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[oi]:{transfer:Mo,primaries:Eo,toReference:n=>n,fromReference:n=>n},[ne]:{transfer:fe,primaries:Eo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qo]:{transfer:Mo,primaries:bo,toReference:n=>n.applyMatrix3(Kh),fromReference:n=>n.applyMatrix3($h)},[ol]:{transfer:fe,primaries:bo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Kh),fromReference:n=>n.applyMatrix3($h).convertLinearToSRGB()}},r0=new Set([oi,Qo]),re={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Gr[t].toReference,s=Gr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Gr[n].primaries},getTransfer:function(n){return n===Be?Mo:Gr[n].transfer}};function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var is,wo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=cr("canvas")),is.width=t.width,is.height=t.height;let i=is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ws(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ws(e[i]/255)*255):e[i]=ws(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},o0=0,To=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var a0=0,tn=class n extends vi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=un,s=un,r=xe,o=or,a=dn,c=vn,l=n.DEFAULT_ANISOTROPY,h=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ri(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hi?ne:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yi:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yi:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ne?Hi:Ju}set encoding(t){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Hi?ne:Be}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Vu;tn.DEFAULT_ANISOTROPY=1;var Ie=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(f+1)/2,R=(m+1)/2,w=(h+d)/4,A=(u+x)/4,D=(g+p)/4;return _>M&&_>R?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=A/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=D/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=D/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends vi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hi?ne:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new To(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends vc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ao=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mc=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let p=1-a,m=c*d+l*f+h*g+u*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let R=Math.sqrt(_),w=Math.atan2(R,m*y);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}let M=a*y;if(c=c*p+d*M,l=l*p+f*M,h=h*p+g*M,u=u*p+x*M,p===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new L,Jh=new Ve,zi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Wr.subVectors(this.max,Zs),ss.subVectors(t.a,Zs),rs.subVectors(t.b,Zs),os.subVectors(t.c,Zs),ci.subVectors(rs,ss),li.subVectors(os,rs),Pi.subVectors(ss,os);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Pi.z,Pi.y,ci.z,0,-ci.x,li.z,0,-li.x,Pi.z,0,-Pi.x,-ci.y,ci.x,0,-li.y,li.x,0,-Pi.y,Pi.x,0];return!Ga(e,ss,rs,os,Wr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,ss,rs,os,Wr))?!1:(Xr.crossVectors(ci,li),e=[Xr.x,Xr.y,Xr.z],Ga(e,ss,rs,os,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,Vr=new zi,ss=new L,rs=new L,os=new L,ci=new L,li=new L,Pi=new L,Zs=new L,Wr=new L,Xr=new L,Li=new L;function Ga(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Li.fromArray(n,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var c0=new zi,$s=new L,Va=new L,lr=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):c0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Va)),this.expandByPoint($s.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new L,Wa=new L,qr=new L,hi=new L,Xa=new L,Yr=new L,qa=new L,Ec=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wa.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Wa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=hi.dot(this.direction),c=-hi.dot(qr),l=hi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wa).addScaledVector(qr,d),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,r){Xa.subVectors(e,t),Yr.subVectors(i,t),qa.crossVectors(Xa,Yr);let o=this.direction.dot(qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);let c=a*this.direction.dot(Yr.crossVectors(hi,Yr));if(c<0)return null;let l=a*this.direction.dot(Xa.cross(hi));if(l<0||c+l>o)return null;let h=-a*hi.dot(qa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,f,g,x,p)}set(t,e,i,s,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l0,t,h0)}lookAt(t,e,i){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ui.crossVectors(i,ln),ui.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ui.crossVectors(i,ln)),ui.normalize(),Zr.crossVectors(ln,ui),s[0]=ui.x,s[4]=Zr.x,s[8]=ln.x,s[1]=ui.y,s[5]=Zr.y,s[9]=ln.y,s[2]=ui.z,s[6]=Zr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],_=i[7],M=i[11],R=i[15],w=s[0],A=s[4],D=s[8],v=s[12],b=s[1],C=s[5],N=s[9],$=s[13],P=s[2],O=s[6],H=s[10],B=s[14],q=s[3],G=s[7],z=s[11],k=s[15];return r[0]=o*w+a*b+c*P+l*q,r[4]=o*A+a*C+c*O+l*G,r[8]=o*D+a*N+c*H+l*z,r[12]=o*v+a*$+c*B+l*k,r[1]=h*w+u*b+d*P+f*q,r[5]=h*A+u*C+d*O+f*G,r[9]=h*D+u*N+d*H+f*z,r[13]=h*v+u*$+d*B+f*k,r[2]=g*w+x*b+p*P+m*q,r[6]=g*A+x*C+p*O+m*G,r[10]=g*D+x*N+p*H+m*z,r[14]=g*v+x*$+p*B+m*k,r[3]=y*w+_*b+M*P+R*q,r[7]=y*A+_*C+M*O+R*G,r[11]=y*D+_*N+M*H+R*z,r[15]=y*v+_*$+M*B+R*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*l-x*d*l+x*c*f-a*p*f-u*c*m+a*d*m,_=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,M=h*x*l-g*u*l+g*a*f-o*x*f-h*a*m+o*u*m,R=g*u*c-h*x*c-g*a*d+o*x*d+h*a*p-o*u*p,w=e*y+i*_+s*M+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=y*A,t[1]=(x*d*r-u*p*r-x*s*f+i*p*f+u*s*m-i*d*m)*A,t[2]=(a*p*r-x*c*r+x*s*l-i*p*l-a*s*m+i*c*m)*A,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*A,t[4]=_*A,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*A,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=M*A,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*m-e*u*m)*A,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*p+e*u*p)*A,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*p-e*a*p)*A,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=c*l,_=c*h,M=c*u,R=i.x,w=i.y,A=i.z;return s[0]=(1-(x+m))*R,s[1]=(f+M)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+m))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+_)*A,s[9]=(p-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);let l=1/r,h=1/o,u=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=si){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===So)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=si){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*l,f=(i+s)*h,g,x;if(a===si)g=(o+r)*u,x=-2*u;else if(a===So)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},as=new L,Ln=new Ee,l0=new L(0,0,0),h0=new L(1,1,1),ui=new L,Zr=new L,ln=new L,jh=new Ee,Qh=new Ve,Ro=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ro.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u0=0,tu=new L,cs=new Ve,jn=new Ee,$r=new L,Ks=new L,d0=new L,f0=new Ve,eu=new L(1,0,0),nu=new L(0,1,0),iu=new L(0,0,1),p0={type:"added"},m0={type:"removed"},We=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new Ro,i=new Ve,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ee}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$r.copy(t):$r.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ks,$r,this.up):jn.lookAt($r,Ks,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(jn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(p0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,d0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,f0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};We.DEFAULT_UP=new L(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new L,Qn=new L,Ya=new L,ti=new L,ls=new L,hs=new L,su=new L,Za=new L,$a=new L,Ka=new L,Kr=!1,Bi=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),Qn.subVectors(i,e),Ya.subVectors(t,e);let o=In.dot(In),a=In.dot(Qn),c=In.dot(Ya),l=Qn.dot(Qn),h=Qn.dot(Ya),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(t,e,i,s,r,o,a,c){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),Qn.subVectors(t,e),In.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,i),hs.subVectors(r,i),Za.subVectors(t,i);let c=ls.dot(Za),l=hs.dot(Za);if(c<=0&&l<=0)return e.copy(i);$a.subVectors(t,s);let h=ls.dot($a),u=hs.dot($a);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(ls,o);Ka.subVectors(t,r);let f=ls.dot(Ka),g=hs.dot(Ka);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(hs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return su.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(su,a);let m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(ls,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ja(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=i0(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=ne){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){let i=ed[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=ka(t.r),this.g=ka(t.g),this.b=ka(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return re.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ne(ze.r*255,0,255))*65536+Math.round(Ne(ze.g*255,0,255))*256+Math.round(Ne(ze.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(ze.copy(this),e);let i=ze.r,s=ze.g,r=ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=ne){re.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,i=ze.g,s=ze.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Jr);let i=Ba(di.h,Jr.h,e),s=Ba(di.s,Jr.s,e),r=Ba(di.l,Jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Ot;Ot.NAMES=ed;var g0=0,Mi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=gi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},de=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new L,jr=new ct,fn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}};var Po=class extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Lo=class extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}};var x0=0,yn=new Ee,ja=new We,us=new L,hn=new zi,Js=new zi,Le=new L,Fe=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?Lo:Po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(hn.min,Js.min),hn.expandByPoint(Le),Le.addVectors(hn.max,Js.max),hn.expandByPoint(Le)):(hn.expandByPoint(Js.min),hn.expandByPoint(Js.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(t,l),Le.add(us)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new L,h[b]=new L;let u=new L,d=new L,f=new L,g=new ct,x=new ct,p=new ct,m=new L,y=new L;function _(b,C,N){u.fromArray(s,b*3),d.fromArray(s,C*3),f.fromArray(s,N*3),g.fromArray(o,b*2),x.fromArray(o,C*2),p.fromArray(o,N*2),d.sub(u),f.sub(u),x.sub(g),p.sub(g);let $=1/(x.x*p.y-p.x*x.y);isFinite($)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar($),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar($),l[b].add(m),l[C].add(m),l[N].add(m),h[b].add(y),h[C].add(y),h[N].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let b=0,C=M.length;b<C;++b){let N=M[b],$=N.start,P=N.count;for(let O=$,H=$+P;O<H;O+=3)_(i[O+0],i[O+1],i[O+2])}let R=new L,w=new L,A=new L,D=new L;function v(b){A.fromArray(r,b*3),D.copy(A);let C=l[b];R.copy(C),R.sub(A.multiplyScalar(A.dot(C))).normalize(),w.crossVectors(D,C);let $=w.dot(h[b])<0?-1:1;c[b*4]=R.x,c[b*4+1]=R.y,c[b*4+2]=R.z,c[b*4+3]=$}for(let b=0,C=M.length;b<C;++b){let N=M[b],$=N.start,P=N.count;for(let O=$,H=$+P;O<H;O+=3)v(i[O+0]),v(i[O+1]),v(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new Ee,Ii=new Ec,Qr=new lr,ou=new L,ds=new L,fs=new L,ps=new L,Qa=new L,to=new L,eo=new ct,no=new ct,io=new ct,au=new L,cu=new L,lu=new L,so=new L,ro=new L,W=class extends We{constructor(t=new Fe,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Qa.fromBufferAttribute(u,t),o?to.addScaledVector(Qa,h):to.addScaledVector(Qa.sub(e),h))}e.add(to)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Qr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Qr,ou)===null||Ii.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(ru.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,R=_;M<R;M+=3){let w=a.getX(M),A=a.getX(M+1),D=a.getX(M+2);s=oo(this,m,t,i,l,h,u,w,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);s=oo(this,o,t,i,l,h,u,y,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,R=_;M<R;M+=3){let w=M,A=M+1,D=M+2;s=oo(this,m,t,i,l,h,u,w,A,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,_=p+1,M=p+2;s=oo(this,o,t,i,l,h,u,y,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function _0(n,t,e,i,s,r,o,a){let c;if(t.side===Ge?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===_i,a),c===null)return null;ro.copy(a),ro.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ro);return l<e.near||l>e.far?null:{distance:l,point:ro.clone(),object:n}}function oo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ds),n.getVertexPosition(c,fs),n.getVertexPosition(l,ps);let h=_0(n,t,e,i,ds,fs,ps,so);if(h){s&&(eo.fromBufferAttribute(s,a),no.fromBufferAttribute(s,c),io.fromBufferAttribute(s,l),h.uv=Bi.getInterpolation(so,ds,fs,ps,eo,no,io,new ct)),r&&(eo.fromBufferAttribute(r,a),no.fromBufferAttribute(r,c),io.fromBufferAttribute(r,l),h.uv1=Bi.getInterpolation(so,ds,fs,ps,eo,no,io,new ct),h.uv2=h.uv1),o&&(au.fromBufferAttribute(o,a),cu.fromBufferAttribute(o,c),lu.fromBufferAttribute(o,l),h.normal=Bi.getInterpolation(so,ds,fs,ps,au,cu,lu,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Bi.getNormal(ds,fs,ps,u.normal),h.face=u}return h}var It=class n extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,p,m,y,_,M,R,w,A,D,v){let b=M/A,C=R/D,N=M/2,$=R/2,P=w/2,O=A+1,H=D+1,B=0,q=0,G=new L;for(let z=0;z<H;z++){let k=z*C-$;for(let st=0;st<O;st++){let X=st*b-N;G[x]=X*y,G[p]=k*_,G[m]=P,l.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(st/A),u.push(1-z/D),B+=1}}for(let z=0;z<D;z++)for(let k=0;k<A;k++){let st=d+k+O*z,X=d+k+O*(z+1),Q=d+(k+1)+O*(z+1),dt=d+(k+1)+O*z;c.push(st,X,dt),c.push(X,Q,dt),q+=6}a.addGroup(f,q,v),f+=q,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ps(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Qe(n){let t={};for(let e=0;e<n.length;e++){let i=Ps(n[e]);for(let s in i)t[s]=i[s]}return t}function y0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nd(n){return n.getRenderTarget()===null?n.outputColorSpace:re.workingColorSpace}var v0={clone:Ps,merge:Qe},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=y0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Io=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oe=class extends Io{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_c*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,bc=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Oe(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new Oe(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new Oe(ms,gs,t,e);a.layers=this.layers,this.add(a);let c=new Oe(ms,gs,t,e);c.layers=this.layers,this.add(c);let l=new Oe(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Do=class extends tn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Hi?ne:Be),this.texture=new Do(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:mi});r.uniforms.tEquirect.value=e;let o=new W(s,r),a=e.minFilter;return e.minFilter===or&&(e.minFilter=xe),new bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},tc=new L,b0=new L,S0=new ee,ni=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=tc.subVectors(i,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||S0.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new lr,ao=new L,hr=class{constructor(t=new ni,e=new ni,i=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],y=s[13],_=s[14],M=s[15];if(i[0].setComponents(c-r,d-l,p-f,M-m).normalize(),i[1].setComponents(c+r,d+l,p+f,M+m).normalize(),i[2].setComponents(c+o,d+h,p+g,M+y).normalize(),i[3].setComponents(c-o,d-h,p-g,M-y).normalize(),i[4].setComponents(c-a,d-u,p-x,M-_).normalize(),e===si)i[5].setComponents(c+a,d+u,p+x,M+_).normalize();else if(e===So)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function id(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function w0(n,t){let e=t.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];e?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var oe=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*d-o;for(let _=0;_<l;_++){let M=_*u-r;g.push(M,-y,0),x.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let _=y+l*m,M=y+l*(m+1),R=y+1+l*(m+1),w=y+1+l*m;f.push(_,M,w),f.push(M,R,w)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`
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
}`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
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
#endif`,wg=`struct PhysicalMaterial {
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
}`,Tg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hx=`float getShadowMask() {
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
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Zx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
}`,Jx=`#define TOON
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
}`,jx=`#define TOON
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
}`,Qx=`uniform float size;
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
}`,t_=`uniform vec3 diffuse;
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
}`,e_=`#include <common>
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
}`,n_=`uniform vec3 color;
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
}`,i_=`uniform float rotation;
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
}`,s_=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:I0,aomap_pars_fragment:D0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:F0,iridescence_fragment:k0,bumpmap_pars_fragment:H0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:$0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:J0,displacementmap_pars_vertex:j0,displacementmap_vertex:Q0,emissivemap_fragment:tg,emissivemap_pars_fragment:eg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:ag,envmap_physical_pars_fragment:yg,envmap_vertex:cg,fog_vertex:lg,fog_pars_vertex:hg,fog_fragment:ug,fog_pars_fragment:dg,gradientmap_pars_fragment:fg,lightmap_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Eg,lights_phong_pars_fragment:bg,lights_physical_fragment:Sg,lights_physical_pars_fragment:wg,lights_fragment_begin:Tg,lights_fragment_maps:Ag,lights_fragment_end:Rg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ig,map_fragment:Dg,map_pars_fragment:Ug,map_particle_fragment:Ng,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:Fg,morphcolor_vertex:kg,morphnormal_vertex:Hg,morphtarget_pars_vertex:zg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:jg,opaque_fragment:Qg,packing:tx,premultiplied_alpha_fragment:ex,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:hx,skinbase_vertex:ux,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:_x,transmission_fragment:yx,transmission_pars_fragment:vx,uv_pars_fragment:Mx,uv_pars_vertex:Ex,uv_vertex:bx,worldpos_vertex:Sx,background_vert:wx,background_frag:Tx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Lx,depth_frag:Ix,distanceRGBA_vert:Dx,distanceRGBA_frag:Ux,equirect_vert:Nx,equirect_frag:Ox,linedashed_vert:Bx,linedashed_frag:Fx,meshbasic_vert:kx,meshbasic_frag:Hx,meshlambert_vert:zx,meshlambert_frag:Gx,meshmatcap_vert:Vx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:Zx,meshphysical_vert:$x,meshphysical_frag:Kx,meshtoon_vert:Jx,meshtoon_frag:jx,points_vert:Qx,points_frag:t_,shadow_vert:e_,shadow_frag:n_,sprite_vert:i_,sprite_frag:s_},gt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},kn={basic:{uniforms:Qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Qe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Qe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Qe([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Qe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Qe([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Qe([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Qe([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Qe([gt.lights,gt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};kn.physical={uniforms:Qe([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var co={r:0,b:0,g:0};function r_(n,t,e,i,s,r,o){let a=new Ot(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),y=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jo)?(h===void 0&&(h=new W(new It(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ps(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=re.getTransfer(_.colorSpace)!==fe,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new W(new oe(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ps(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,m){p.getRGB(co,nd(n)),i.buffers.color.setClear(co.r,co.g,co.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(a,c)},render:g}}function o_(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function u(P,O,H,B,q){let G=!1;if(o){let z=x(B,H,O);l!==z&&(l=z,f(l.object)),G=m(P,B,H,q),G&&y(P,B,H,q)}else{let z=O.wireframe===!0;(l.geometry!==B.id||l.program!==H.id||l.wireframe!==z)&&(l.geometry=B.id,l.program=H.id,l.wireframe=z,G=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,D(P,O,H,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,O,H){let B=H.wireframe===!0,q=a[P.id];q===void 0&&(q={},a[P.id]=q);let G=q[O.id];G===void 0&&(G={},q[O.id]=G);let z=G[B];return z===void 0&&(z=p(d()),G[B]=z),z}function p(P){let O=[],H=[],B=[];for(let q=0;q<s;q++)O[q]=0,H[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:B,object:P,attributes:{},index:null}}function m(P,O,H,B){let q=l.attributes,G=O.attributes,z=0,k=H.getAttributes();for(let st in k)if(k[st].location>=0){let Q=q[st],dt=G[st];if(dt===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;z++}return l.attributesNum!==z||l.index!==B}function y(P,O,H,B){let q={},G=O.attributes,z=0,k=H.getAttributes();for(let st in k)if(k[st].location>=0){let Q=G[st];Q===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),q[st]=dt,z++}l.attributes=q,l.attributesNum=z,l.index=B}function _(){let P=l.newAttributes;for(let O=0,H=P.length;O<H;O++)P[O]=0}function M(P){R(P,0)}function R(P,O){let H=l.newAttributes,B=l.enabledAttributes,q=l.attributeDivisors;H[P]=1,B[P]===0&&(n.enableVertexAttribArray(P),B[P]=1),q[P]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),q[P]=O)}function w(){let P=l.newAttributes,O=l.enabledAttributes;for(let H=0,B=O.length;H<B;H++)O[H]!==P[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function A(P,O,H,B,q,G,z){z===!0?n.vertexAttribIPointer(P,O,H,q,G):n.vertexAttribPointer(P,O,H,B,q,G)}function D(P,O,H,B){if(i.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let q=B.attributes,G=H.getAttributes(),z=O.defaultAttributeValues;for(let k in G){let st=G[k];if(st.location>=0){let X=q[k];if(X===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let Q=X.normalized,dt=X.itemSize,Et=e.get(X);if(Et===void 0)continue;let pt=Et.buffer,Ct=Et.type,kt=Et.bytesPerElement,Rt=i.isWebGL2===!0&&(Ct===n.INT||Ct===n.UNSIGNED_INT||X.gpuType===Wu);if(X.isInterleavedBufferAttribute){let Nt=X.data,I=Nt.stride,lt=X.offset;if(Nt.isInstancedInterleavedBuffer){for(let J=0;J<st.locationSize;J++)R(st.location+J,Nt.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let J=0;J<st.locationSize;J++)M(st.location+J);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let J=0;J<st.locationSize;J++)A(st.location+J,dt/st.locationSize,Ct,Q,I*kt,(lt+dt/st.locationSize*J)*kt,Rt)}else{if(X.isInstancedBufferAttribute){for(let Nt=0;Nt<st.locationSize;Nt++)R(st.location+Nt,X.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Nt=0;Nt<st.locationSize;Nt++)M(st.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Nt=0;Nt<st.locationSize;Nt++)A(st.location+Nt,dt/st.locationSize,Ct,Q,dt*kt,dt/st.locationSize*Nt*kt,Rt)}}else if(z!==void 0){let Q=z[k];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(st.location,Q);break;case 3:n.vertexAttrib3fv(st.location,Q);break;case 4:n.vertexAttrib4fv(st.location,Q);break;default:n.vertexAttrib1fv(st.location,Q)}}}}w()}function v(){N();for(let P in a){let O=a[P];for(let H in O){let B=O[H];for(let q in B)g(B[q].object),delete B[q];delete O[H]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;let O=a[P.id];for(let H in O){let B=O[H];for(let q in B)g(B[q].object),delete B[q];delete O[H]}delete a[P.id]}function C(P){for(let O in a){let H=a[O];if(H[P.id]===void 0)continue;let B=H[P.id];for(let q in B)g(B[q].object),delete B[q];delete H[P.id]}}function N(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:$,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:M,disableUnusedAttributes:w}}function a_(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function c_(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,M=o||t.has("OES_texture_float"),R=_&&M,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:w}}function l_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ni,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let y=r?0:i,_=y*4,M=m.clippingState||null;c.value=M,M=h(g,d,_,f);for(let R=0;R!==_;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function h_(n){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=As:a===pc&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fc||a===pc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sc(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ls=class extends Io{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,hu=[.125,.215,.35,.446,.526,.582],Oi=20,ec=new Ls,uu=new Ot,nc=null,ic=0,sc=0,Ui=(1+Math.sqrt(5))/2,xs=1/Ui,du=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ui,xs),new L(0,Ui,-xs),new L(xs,0,Ui),new L(-xs,0,Ui),new L(Ui,xs,0),new L(-Ui,xs,0)],Uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nc,ic,sc),t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xe,minFilter:xe,generateMipmaps:!1,type:ar,format:dn,colorSpace:oi,depthBuffer:!1},s=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u_(r)),this._blurMaterial=d_(r,t,e)}return s}_compileMaterial(t){let e=new W(this._lodPlanes[0],t);this._renderer.compile(e,ec)}_sceneToCubeUV(t,e,i,s){let a=new Oe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(uu),h.toneMapping=xi,h.autoClear=!1;let f=new de({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new W(new It,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(uu),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let _=this._cubeSize;lo(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===As||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;lo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ec)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=du[(s-1)%du.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new W(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);let m=[],y=0;for(let A=0;A<Oi;++A){let D=A/x,v=Math.exp(-D*D/2);m.push(v),A===0?y+=v:A<p&&(y+=2*v)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let M=this._sizeLods[s],R=3*M*(s>_-Es?s-_+Es:0),w=4*(this._cubeSize-M);lo(e,R,w,3*M,2*M),c.setRenderTarget(e),c.render(u,ec)}};function u_(n){let t=[],e=[],i=[],s=n,r=n-Es+1+hu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Es?c=hu[o-n+Es-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,D=w>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(v,x*g*w),_.set(d,p*g*w);let b=[w,w,w,w,w,w];M.set(b,m*g*w)}let R=new Fe;R.setAttribute("position",new fn(y,x)),R.setAttribute("uv",new fn(_,p)),R.setAttribute("faceIndex",new fn(M,m)),t.push(R),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fu(n,t,e){let i=new Dn(n,t,e);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function d_(n,t,e){let i=new Float32Array(Oi),s=new L(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function pu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function mu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function f_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===fc||c===pc,h=c===As||c===Rs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Uo(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Uo(n));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function p_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function m_(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,M=y.length;_<M;_+=3){let R=y[_+0],w=y[_+1],A=y[_+2];d.push(R,w,w,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let R=_+0,w=_+1,A=_+2;d.push(R,w,w,A,A,R)}}else return;let p=new(td(d)?Lo:Po)(d,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g_(n,t,e,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let m=0;for(let y=0;y<x;y++)m+=g[y];e.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function x_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function __(n,t){return n[0]-t[0]}function y_(n,t){return Math.abs(t[1])-Math.abs(n[1])}function v_(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new Ie,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let P=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;y===!0&&(D=1),_===!0&&(D=2),M===!0&&(D=3);let v=h.attributes.position.count*D,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let C=new Float32Array(v*b*4*g),N=new Ao(C,v,b,g);N.type=pi,N.needsUpdate=!0;let $=D*4;for(let O=0;O<g;O++){let H=R[O],B=w[O],q=A[O],G=v*b*4*O;for(let z=0;z<H.count;z++){let k=z*$;y===!0&&(o.fromBufferAttribute(H,z),C[G+k+0]=o.x,C[G+k+1]=o.y,C[G+k+2]=o.z,C[G+k+3]=0),_===!0&&(o.fromBufferAttribute(B,z),C[G+k+4]=o.x,C[G+k+5]=o.y,C[G+k+6]=o.z,C[G+k+7]=0),M===!0&&(o.fromBufferAttribute(q,z),C[G+k+8]=o.x,C[G+k+9]=o.y,C[G+k+10]=o.z,C[G+k+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:N,size:new ct(v,b)},r.set(h,x),h.addEventListener("dispose",P)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){let M=g[_];M[0]=_,M[1]=d[_]}g.sort(y_);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(__);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let M=a[_],R=M[0],w=M[1];R!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),p&&h.getAttribute("morphNormal"+_)!==p[R]&&h.setAttribute("morphNormal"+_,p[R]),s[_]=w,m+=w):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function M_(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var No=class extends tn{constructor(t,e,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ki&&(i=fi),i===void 0&&h===Cs&&(i=Fi),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},sd=new tn,rd=new No(1,1);rd.compareFunction=Qu;var od=new Ao,ad=new Mc,cd=new Do,gu=[],xu=[],_u=new Float32Array(16),yu=new Float32Array(9),vu=new Float32Array(4);function Os(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ta(n,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function E_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function T_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;vu.set(i),n.uniformMatrix2fv(this.addr,!1,vu),Te(e,i)}}function A_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),Te(e,i)}}function R_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;_u.set(i),n.uniformMatrix4fv(this.addr,!1,_u),Te(e,i)}}function C_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function D_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function U_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function N_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function B_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?rd:sd;e.setTexture2D(t||r,s)}function F_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ad,s)}function k_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||cd,s)}function H_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||od,s)}function z_(n){switch(n){case 5126:return E_;case 35664:return b_;case 35665:return S_;case 35666:return w_;case 35674:return T_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return I_;case 5125:return D_;case 36294:return U_;case 36295:return N_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return H_}}function G_(n,t){n.uniform1fv(this.addr,t)}function V_(n,t){let e=Os(t,this.size,2);n.uniform2fv(this.addr,e)}function W_(n,t){let e=Os(t,this.size,3);n.uniform3fv(this.addr,e)}function X_(n,t){let e=Os(t,this.size,4);n.uniform4fv(this.addr,e)}function q_(n,t){let e=Os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Y_(n,t){let e=Os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Z_(n,t){let e=Os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $_(n,t){n.uniform1iv(this.addr,t)}function K_(n,t){n.uniform2iv(this.addr,t)}function J_(n,t){n.uniform3iv(this.addr,t)}function j_(n,t){n.uniform4iv(this.addr,t)}function Q_(n,t){n.uniform1uiv(this.addr,t)}function ty(n,t){n.uniform2uiv(this.addr,t)}function ey(n,t){n.uniform3uiv(this.addr,t)}function ny(n,t){n.uniform4uiv(this.addr,t)}function iy(n,t,e){let i=this.cache,s=t.length,r=ta(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sd,r[o])}function sy(n,t,e){let i=this.cache,s=t.length,r=ta(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ad,r[o])}function ry(n,t,e){let i=this.cache,s=t.length,r=ta(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cd,r[o])}function oy(n,t,e){let i=this.cache,s=t.length,r=ta(e,s);we(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||od,r[o])}function ay(n){switch(n){case 5126:return G_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return Z_;case 5124:case 35670:return $_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return j_;case 5125:return Q_;case 36294:return ty;case 36295:return ey;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return oy}}var wc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=z_(e.type)}},Tc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ay(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},rc=/(\w+)(\])?(\[|\.)?/g;function Mu(n,t){n.seq.push(t),n.map[t.id]=t}function cy(n,t,e){let i=n.name,s=i.length;for(rc.lastIndex=0;;){let r=rc.exec(i),o=rc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mu(e,l===void 0?new wc(a,n,t):new Tc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ac(a),Mu(e,u)),e=u}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);cy(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Eu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ly=37297,hy=0;function uy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function dy(n){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(n),i;switch(t===e?i="":t===bo&&e===Eo?i="LinearDisplayP3ToLinearSRGB":t===Eo&&e===bo&&(i="LinearSRGBToLinearDisplayP3"),n){case oi:case Qo:return[i,"LinearTransferOETF"];case ne:case ol:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+uy(n.getShaderSource(t),o)}else return s}function fy(n,t){let e=dy(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function py(n,t){let e;switch(t){case Dm:e="Linear";break;case Um:e="Reinhard";break;case Nm:e="OptimizedCineon";break;case Om:e="ACESFilmic";break;case Fm:e="AgX";break;case Bm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function my(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function xy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _y(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function bs(n){return n!==""}function Su(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(yy,My)}var vy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function My(n,t){let e=Kt[t];if(e===void 0){let i=vy.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(Ey,by)}function by(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===il?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function wy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ty(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Rs&&(t="ENVMAP_MODE_REFRACTION"),t}function Ay(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gu:t="ENVMAP_BLENDING_MULTIPLY";break;case Lm:t="ENVMAP_BLENDING_MIX";break;case Im:t="ENVMAP_BLENDING_ADD";break}return t}function Ry(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Cy(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Sy(e),l=wy(e),h=Ty(e),u=Ay(e),d=Ry(e),f=e.isWebGL2?"":my(e),g=gy(e),x=xy(r),p=s.createProgram(),m,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),y.length>0&&(y+=`
`)):(m=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),y=[f,Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==xi?py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,fy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Rc(o),o=Su(o,e),o=wu(o,e),a=Rc(a),a=Su(a,e),a=wu(a,e),o=Tu(o),a=Tu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+m+o,R=_+y+a,w=Eu(s,s.VERTEX_SHADER,M),A=Eu(s,s.FRAGMENT_SHADER,R);s.attachShader(p,w),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(N){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(A).trim(),H=!0,B=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,w,A);else{let q=bu(s,w,"vertex"),G=bu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+q+`
`+G)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||O==="")&&(B=!1);B&&(N.diagnostics={runnable:H,programLog:$,vertexShader:{log:P,prefix:m},fragmentShader:{log:O,prefix:y}})}s.deleteShader(w),s.deleteShader(A),v=new Ts(s,p),b=_y(s,p)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,ly)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}var Py=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Pc(t),e.set(t,i)),i}},Pc=class{constructor(t){this.id=Py++,this.code=t,this.usedTimes=0}};function Ly(n,t,e,i,s,r,o){let a=new Co,c=new Cc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function p(v,b,C,N,$){let P=N.fog,O=$.geometry,H=v.isMeshStandardMaterial?N.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),q=B&&B.mapping===jo?B.image.height:null,G=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=z!==void 0?z.length:0,st=0;O.morphAttributes.position!==void 0&&(st=1),O.morphAttributes.normal!==void 0&&(st=2),O.morphAttributes.color!==void 0&&(st=3);let X,Q,dt,Et;if(G){let Ke=kn[G];X=Ke.vertexShader,Q=Ke.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,c.update(v),dt=c.getVertexShaderID(v),Et=c.getFragmentShaderID(v);let pt=n.getRenderTarget(),Ct=$.isInstancedMesh===!0,kt=$.isBatchedMesh===!0,Rt=!!v.map,Nt=!!v.matcap,I=!!B,lt=!!v.aoMap,J=!!v.lightMap,tt=!!v.bumpMap,j=!!v.normalMap,Tt=!!v.displacementMap,xt=!!v.emissiveMap,S=!!v.metalnessMap,E=!!v.roughnessMap,F=v.anisotropy>0,et=v.clearcoat>0,it=v.iridescence>0,nt=v.sheen>0,Mt=v.transmission>0,_t=F&&!!v.anisotropyMap,bt=et&&!!v.clearcoatMap,Lt=et&&!!v.clearcoatNormalMap,qt=et&&!!v.clearcoatRoughnessMap,rt=it&&!!v.iridescenceMap,ot=it&&!!v.iridescenceThicknessMap,ut=nt&&!!v.sheenColorMap,at=nt&&!!v.sheenRoughnessMap,At=!!v.specularMap,St=!!v.specularColorMap,Yt=!!v.specularIntensityMap,se=Mt&&!!v.transmissionMap,ve=Mt&&!!v.thicknessMap,Qt=!!v.gradientMap,mt=!!v.alphaMap,U=v.alphaTest>0,yt=!!v.alphaHash,vt=!!v.extensions,Gt=!!O.attributes.uv1,Ft=!!O.attributes.uv2,le=!!O.attributes.uv3,he=xi;return v.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(he=n.toneMapping),{isWebGL2:h,shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:Et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:kt,instancing:Ct,instancingColor:Ct&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:oi,map:Rt,matcap:Nt,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:J,bumpMap:tt,normalMap:j,displacementMap:d&&Tt,emissiveMap:xt,normalMapObjectSpace:j&&v.normalMapType===$m,normalMapTangentSpace:j&&v.normalMapType===ju,metalnessMap:S,roughnessMap:E,anisotropy:F,anisotropyMap:_t,clearcoat:et,clearcoatMap:bt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:qt,iridescence:it,iridescenceMap:rt,iridescenceThicknessMap:ot,sheen:nt,sheenColorMap:ut,sheenRoughnessMap:at,specularMap:At,specularColorMap:St,specularIntensityMap:Yt,transmission:Mt,transmissionMap:se,thicknessMap:ve,gradientMap:Qt,opaque:v.transparent===!1&&v.blending===gi,alphaMap:mt,alphaTest:U,alphaHash:yt,combine:v.combine,mapUv:Rt&&x(v.map.channel),aoMapUv:lt&&x(v.aoMap.channel),lightMapUv:J&&x(v.lightMap.channel),bumpMapUv:tt&&x(v.bumpMap.channel),normalMapUv:j&&x(v.normalMap.channel),displacementMapUv:Tt&&x(v.displacementMap.channel),emissiveMapUv:xt&&x(v.emissiveMap.channel),metalnessMapUv:S&&x(v.metalnessMap.channel),roughnessMapUv:E&&x(v.roughnessMap.channel),anisotropyMapUv:_t&&x(v.anisotropyMap.channel),clearcoatMapUv:bt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:at&&x(v.sheenRoughnessMap.channel),specularMapUv:At&&x(v.specularMap.channel),specularColorMapUv:St&&x(v.specularColorMap.channel),specularIntensityMapUv:Yt&&x(v.specularIntensityMap.channel),transmissionMapUv:se&&x(v.transmissionMap.channel),thicknessMapUv:ve&&x(v.thicknessMap.channel),alphaMapUv:mt&&x(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(j||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:Ft,vertexUv3s:le,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(Rt||mt),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===fe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_e,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:vt&&v.extensions.derivatives===!0,extensionFragDepth:vt&&v.extensions.fragDepth===!0,extensionDrawBuffers:vt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(y(b,v),_(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function _(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let b=g[v.type],C;if(b){let N=kn[b];C=v0.clone(N.uniforms)}else C=v.uniforms;return C}function R(v,b){let C;for(let N=0,$=l.length;N<$;N++){let P=l[N];if(P.cacheKey===b){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Cy(n,b,v,r),l.push(C)),C}function w(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:D}}function Iy(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Dy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ru(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Dy),i.length>1&&i.sort(d||Ru),s.length>1&&s.sort(d||Ru)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Uy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Cu,n.set(i,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ny(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Oy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var By=0;function Fy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ky(n,t){let e=new Ny,i=Oy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new Ee,a=new Ee;function c(h,u){let d=0,f=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,p=0,m=0,y=0,_=0,M=0,R=0,w=0,A=0,D=0,v=0;h.sort(Fy);let b=u===!0?Math.PI:1;for(let N=0,$=h.length;N<$;N++){let P=h[N],O=P.color,H=P.intensity,B=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*H*b,f+=O.g*H*b,g+=O.b*H*b;else if(P.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(P.sh.coefficients[G],H);v++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let z=P.shadow,k=i.get(P);k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,s.directionalShadow[x]=k,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=P.shadow.matrix,M++}s.directional[x]=G,x++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(O).multiplyScalar(H*b),G.distance=B,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,s.spot[m]=G;let z=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,z.updateMatrices(P),P.castShadow&&D++),s.spotLightMatrix[m]=z.matrix,P.castShadow){let k=i.get(P);k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,s.spotShadow[m]=k,s.spotShadowMap[m]=q,w++}m++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(O).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=G,y++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*b),G.distance=P.distance,G.decay=P.decay,P.castShadow){let z=P.shadow,k=i.get(P);k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,s.pointShadow[p]=k,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=P.shadow.matrix,R++}s.point[p]=G,p++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H*b),G.groundColor.copy(P.groundColor).multiplyScalar(H*b),s.hemi[_]=G,_++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let C=s.hash;(C.directionalLength!==x||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==y||C.hemiLength!==_||C.numDirectionalShadows!==M||C.numPointShadows!==R||C.numSpotShadows!==w||C.numSpotMaps!==A||C.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=y,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=v,C.directionalLength=x,C.pointLength=p,C.spotLength=m,C.rectAreaLength=y,C.hemiLength=_,C.numDirectionalShadows=M,C.numPointShadows=R,C.numSpotShadows=w,C.numSpotMaps=A,C.numLightProbes=v,s.version=By++)}function l(h,u){let d=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let M=h[y];if(M.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(M.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let R=s.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:s}}function Pu(n,t){let e=new ky(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hy(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Pu(n,t),e.set(r,[c])):o>=a.length?(c=new Pu(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var Lc=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ic=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`;function Vy(n,t,e){let i=new hr,s=new ct,r=new ct,o=new Ie,a=new Lc({depthPacking:Zm}),c=new Ic,l={},h=e.maxTextureSize,u={[_i]:Ge,[Ge]:_i,[_e]:_e},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:zy,fragmentShader:Gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new W(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let m=this.type;this.render=function(w,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(mi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let $=m!==ei&&this.type===ei,P=m===ei&&this.type!==ei;for(let O=0,H=w.length;O<H;O++){let B=w[O],q=B.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let G=q.getFrameExtents();if(s.multiply(G),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,q.mapSize.y=r.y)),q.map===null||$===!0||P===!0){let k=this.type!==ei?{minFilter:Ue,magFilter:Ue}:{};q.map!==null&&q.map.dispose(),q.map=new Dn(s.x,s.y,k),q.map.texture.name=B.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let z=q.getViewportCount();for(let k=0;k<z;k++){let st=q.getViewport(k);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),N.viewport(o),q.updateMatrices(B,k),i=q.getFrustum(),M(A,D,q.camera,B,this.type)}q.isPointLightShadow!==!0&&this.type===ei&&y(q,D),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(v,b,C)};function y(w,A){let D=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,D,f,x,null)}function _(w,A,D,v){let b=null,C=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let N=b.uuid,$=A.uuid,P=l[N];P===void 0&&(P={},l[N]=P);let O=P[$];O===void 0&&(O=b.clone(),P[$]=O,A.addEventListener("dispose",R)),b=O}if(b.visible=A.visible,b.wireframe=A.wireframe,v===ei?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=n.properties.get(b);N.light=D}return b}function M(w,A,D,v,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ei)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let $=t.update(w),P=w.material;if(Array.isArray(P)){let O=$.groups;for(let H=0,B=O.length;H<B;H++){let q=O[H],G=P[q.materialIndex];if(G&&G.visible){let z=_(w,G,v,b);w.onBeforeShadow(n,w,A,D,$,z,q),n.renderBufferDirect(D,null,$,z,w,q),w.onAfterShadow(n,w,A,D,$,z,q)}}}else if(P.visible){let O=_(w,P,v,b);w.onBeforeShadow(n,w,A,D,$,O,null),n.renderBufferDirect(D,null,$,O,w,null),w.onAfterShadow(n,w,A,D,$,O,null)}}let N=w.children;for(let $=0,P=N.length;$<P;$++)M(N[$],A,D,v,b)}function R(w){w.target.removeEventListener("dispose",R);for(let D in l){let v=l[D],b=w.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function Wy(n,t,e){let i=e.isWebGL2;function s(){let U=!1,yt=new Ie,vt=null,Gt=new Ie(0,0,0,0);return{setMask:function(Ft){vt!==Ft&&!U&&(n.colorMask(Ft,Ft,Ft,Ft),vt=Ft)},setLocked:function(Ft){U=Ft},setClear:function(Ft,le,he,Ce,Ke){Ke===!0&&(Ft*=Ce,le*=Ce,he*=Ce),yt.set(Ft,le,he,Ce),Gt.equals(yt)===!1&&(n.clearColor(Ft,le,he,Ce),Gt.copy(yt))},reset:function(){U=!1,vt=null,Gt.set(-1,0,0,0)}}}function r(){let U=!1,yt=null,vt=null,Gt=null;return{setTest:function(Ft){Ft?kt(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(Ft){yt!==Ft&&!U&&(n.depthMask(Ft),yt=Ft)},setFunc:function(Ft){if(vt!==Ft){switch(Ft){case Sm:n.depthFunc(n.NEVER);break;case wm:n.depthFunc(n.ALWAYS);break;case Tm:n.depthFunc(n.LESS);break;case _o:n.depthFunc(n.LEQUAL);break;case Am:n.depthFunc(n.EQUAL);break;case Rm:n.depthFunc(n.GEQUAL);break;case Cm:n.depthFunc(n.GREATER);break;case Pm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Ft}},setLocked:function(Ft){U=Ft},setClear:function(Ft){Gt!==Ft&&(n.clearDepth(Ft),Gt=Ft)},reset:function(){U=!1,yt=null,vt=null,Gt=null}}}function o(){let U=!1,yt=null,vt=null,Gt=null,Ft=null,le=null,he=null,Ce=null,Ke=null;return{setTest:function(ue){U||(ue?kt(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(ue){yt!==ue&&!U&&(n.stencilMask(ue),yt=ue)},setFunc:function(ue,Je,Fn){(vt!==ue||Gt!==Je||Ft!==Fn)&&(n.stencilFunc(ue,Je,Fn),vt=ue,Gt=Je,Ft=Fn)},setOp:function(ue,Je,Fn){(le!==ue||he!==Je||Ce!==Fn)&&(n.stencilOp(ue,Je,Fn),le=ue,he=Je,Ce=Fn)},setLocked:function(ue){U=ue},setClear:function(ue){Ke!==ue&&(n.clearStencil(ue),Ke=ue)},reset:function(){U=!1,yt=null,vt=null,Gt=null,Ft=null,le=null,he=null,Ce=null,Ke=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],p=null,m=!1,y=null,_=null,M=null,R=null,w=null,A=null,D=null,v=new Ot(0,0,0),b=0,C=!1,N=null,$=null,P=null,O=null,H=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,G=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=G>=2);let k=null,st={},X=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),dt=new Ie().fromArray(X),Et=new Ie().fromArray(Q);function pt(U,yt,vt,Gt){let Ft=new Uint8Array(4),le=n.createTexture();n.bindTexture(U,le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<vt;he++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(yt,0,n.RGBA,1,1,Gt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(yt+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return le}let Ct={};Ct[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ct[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),kt(n.DEPTH_TEST),c.setFunc(_o),xt(!1),S(hh),kt(n.CULL_FACE),j(mi);function kt(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Rt(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Nt(U,yt){return f[U]!==yt?(n.bindFramebuffer(U,yt),f[U]=yt,i&&(U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=yt),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=yt)),!0):!1}function I(U,yt){let vt=x,Gt=!1;if(U)if(vt=g.get(yt),vt===void 0&&(vt=[],g.set(yt,vt)),U.isWebGLMultipleRenderTargets){let Ft=U.texture;if(vt.length!==Ft.length||vt[0]!==n.COLOR_ATTACHMENT0){for(let le=0,he=Ft.length;le<he;le++)vt[le]=n.COLOR_ATTACHMENT0+le;vt.length=Ft.length,Gt=!0}}else vt[0]!==n.COLOR_ATTACHMENT0&&(vt[0]=n.COLOR_ATTACHMENT0,Gt=!0);else vt[0]!==n.BACK&&(vt[0]=n.BACK,Gt=!0);Gt&&(e.isWebGL2?n.drawBuffers(vt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function lt(U){return p!==U?(n.useProgram(U),p=U,!0):!1}let J={[Ni]:n.FUNC_ADD,[lm]:n.FUNC_SUBTRACT,[hm]:n.FUNC_REVERSE_SUBTRACT};if(i)J[ph]=n.MIN,J[mh]=n.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(J[ph]=U.MIN_EXT,J[mh]=U.MAX_EXT)}let tt={[um]:n.ZERO,[dm]:n.ONE,[fm]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[ym]:n.SRC_ALPHA_SATURATE,[xm]:n.DST_COLOR,[mm]:n.DST_ALPHA,[pm]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[_m]:n.ONE_MINUS_DST_COLOR,[gm]:n.ONE_MINUS_DST_ALPHA,[vm]:n.CONSTANT_COLOR,[Mm]:n.ONE_MINUS_CONSTANT_COLOR,[Em]:n.CONSTANT_ALPHA,[bm]:n.ONE_MINUS_CONSTANT_ALPHA};function j(U,yt,vt,Gt,Ft,le,he,Ce,Ke,ue){if(U===mi){m===!0&&(Rt(n.BLEND),m=!1);return}if(m===!1&&(kt(n.BLEND),m=!0),U!==cm){if(U!==y||ue!==C){if((_!==Ni||w!==Ni)&&(n.blendEquation(n.FUNC_ADD),_=Ni,w=Ni),ue)switch(U){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uh:n.blendFunc(n.ONE,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,R=null,A=null,D=null,v.set(0,0,0),b=0,y=U,C=ue}return}Ft=Ft||yt,le=le||vt,he=he||Gt,(yt!==_||Ft!==w)&&(n.blendEquationSeparate(J[yt],J[Ft]),_=yt,w=Ft),(vt!==M||Gt!==R||le!==A||he!==D)&&(n.blendFuncSeparate(tt[vt],tt[Gt],tt[le],tt[he]),M=vt,R=Gt,A=le,D=he),(Ce.equals(v)===!1||Ke!==b)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Ke),v.copy(Ce),b=Ke),y=U,C=!1}function Tt(U,yt){U.side===_e?Rt(n.CULL_FACE):kt(n.CULL_FACE);let vt=U.side===Ge;yt&&(vt=!vt),xt(vt),U.blending===gi&&U.transparent===!1?j(mi):j(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);let Gt=U.stencilWrite;l.setTest(Gt),Gt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),F(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?kt(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function S(U){U!==om?(kt(n.CULL_FACE),U!==$&&(U===hh?n.cullFace(n.BACK):U===am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),$=U}function E(U){U!==P&&(q&&n.lineWidth(U),P=U)}function F(U,yt,vt){U?(kt(n.POLYGON_OFFSET_FILL),(O!==yt||H!==vt)&&(n.polygonOffset(yt,vt),O=yt,H=vt)):Rt(n.POLYGON_OFFSET_FILL)}function et(U){U?kt(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function it(U){U===void 0&&(U=n.TEXTURE0+B-1),k!==U&&(n.activeTexture(U),k=U)}function nt(U,yt,vt){vt===void 0&&(k===null?vt=n.TEXTURE0+B-1:vt=k);let Gt=st[vt];Gt===void 0&&(Gt={type:void 0,texture:void 0},st[vt]=Gt),(Gt.type!==U||Gt.texture!==yt)&&(k!==vt&&(n.activeTexture(vt),k=vt),n.bindTexture(U,yt||Ct[U]),Gt.type=U,Gt.texture=yt)}function Mt(){let U=st[k];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _t(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(U){dt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function se(U){Et.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Et.copy(U))}function ve(U,yt){let vt=u.get(yt);vt===void 0&&(vt=new WeakMap,u.set(yt,vt));let Gt=vt.get(U);Gt===void 0&&(Gt=n.getUniformBlockIndex(yt,U.name),vt.set(U,Gt))}function Qt(U,yt){let Gt=u.get(yt).get(U);h.get(yt)!==Gt&&(n.uniformBlockBinding(yt,Gt,U.__bindingPointIndex),h.set(yt,Gt))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},k=null,st={},f={},g=new WeakMap,x=[],p=null,m=!1,y=null,_=null,M=null,R=null,w=null,A=null,D=null,v=new Ot(0,0,0),b=0,C=!1,N=null,$=null,P=null,O=null,H=null,dt.set(0,0,n.canvas.width,n.canvas.height),Et.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:kt,disable:Rt,bindFramebuffer:Nt,drawBuffers:I,useProgram:lt,setBlending:j,setMaterial:Tt,setFlipSided:xt,setCullFace:S,setLineWidth:E,setPolygonOffset:F,setScissorTest:et,activeTexture:it,bindTexture:nt,unbindTexture:Mt,compressedTexImage2D:_t,compressedTexImage3D:bt,texImage2D:At,texImage3D:St,updateUBOMapping:ve,uniformBlockBinding:Qt,texStorage2D:ut,texStorage3D:at,texSubImage2D:Lt,texSubImage3D:qt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ot,scissor:Yt,viewport:se,reset:mt}}function Xy(n,t,e,i,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,E){return f?new OffscreenCanvas(S,E):cr("canvas")}function x(S,E,F,et){let it=1;if((S.width>et||S.height>et)&&(it=et/Math.max(S.width,S.height)),it<1||E===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let nt=E?yc:Math.floor,Mt=nt(it*S.width),_t=nt(it*S.height);u===void 0&&(u=g(Mt,_t));let bt=F?g(Mt,_t):u;return bt.width=Mt,bt.height=_t,bt.getContext("2d").drawImage(S,0,0,Mt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Mt+"x"+_t+")."),bt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Yh(S.width)&&Yh(S.height)}function m(S){return a?!1:S.wrapS!==un||S.wrapT!==un||S.minFilter!==Ue&&S.minFilter!==xe}function y(S,E){return S.generateMipmaps&&E&&S.minFilter!==Ue&&S.minFilter!==xe}function _(S){n.generateMipmap(S)}function M(S,E,F,et,it=!1){if(a===!1)return E;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let nt=E;if(E===n.RED&&(F===n.FLOAT&&(nt=n.R32F),F===n.HALF_FLOAT&&(nt=n.R16F),F===n.UNSIGNED_BYTE&&(nt=n.R8)),E===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(nt=n.R8UI),F===n.UNSIGNED_SHORT&&(nt=n.R16UI),F===n.UNSIGNED_INT&&(nt=n.R32UI),F===n.BYTE&&(nt=n.R8I),F===n.SHORT&&(nt=n.R16I),F===n.INT&&(nt=n.R32I)),E===n.RG&&(F===n.FLOAT&&(nt=n.RG32F),F===n.HALF_FLOAT&&(nt=n.RG16F),F===n.UNSIGNED_BYTE&&(nt=n.RG8)),E===n.RGBA){let Mt=it?Mo:re.getTransfer(et);F===n.FLOAT&&(nt=n.RGBA32F),F===n.HALF_FLOAT&&(nt=n.RGBA16F),F===n.UNSIGNED_BYTE&&(nt=Mt===fe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(S,E,F){return y(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==Ue&&S.minFilter!==xe?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function w(S){return S===Ue||S===gh||S===Ca?n.NEAREST:n.LINEAR}function A(S){let E=S.target;E.removeEventListener("dispose",A),v(E),E.isVideoTexture&&h.delete(E)}function D(S){let E=S.target;E.removeEventListener("dispose",D),C(E)}function v(S){let E=i.get(S);if(E.__webglInit===void 0)return;let F=S.source,et=d.get(F);if(et){let it=et[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(S),Object.keys(et).length===0&&d.delete(F)}i.remove(S)}function b(S){let E=i.get(S);n.deleteTexture(E.__webglTexture);let F=S.source,et=d.get(F);delete et[E.__cacheKey],o.memory.textures--}function C(S){let E=S.texture,F=i.get(S),et=i.get(E);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(F.__webglFramebuffer[it]))for(let nt=0;nt<F.__webglFramebuffer[it].length;nt++)n.deleteFramebuffer(F.__webglFramebuffer[it][nt]);else n.deleteFramebuffer(F.__webglFramebuffer[it]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[it])}else{if(Array.isArray(F.__webglFramebuffer))for(let it=0;it<F.__webglFramebuffer.length;it++)n.deleteFramebuffer(F.__webglFramebuffer[it]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let it=0;it<F.__webglColorRenderbuffer.length;it++)F.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[it]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let it=0,nt=E.length;it<nt;it++){let Mt=i.get(E[it]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(E[it])}i.remove(E),i.remove(S)}let N=0;function $(){N=0}function P(){let S=N;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),N+=1,S}function O(S){let E=[];return E.push(S.wrapS),E.push(S.wrapT),E.push(S.wrapR||0),E.push(S.magFilter),E.push(S.minFilter),E.push(S.anisotropy),E.push(S.internalFormat),E.push(S.format),E.push(S.type),E.push(S.generateMipmaps),E.push(S.premultiplyAlpha),E.push(S.flipY),E.push(S.unpackAlignment),E.push(S.colorSpace),E.join()}function H(S,E){let F=i.get(S);if(S.isVideoTexture&&Tt(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let et=S.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(F,S,E);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+E)}function B(S,E){let F=i.get(S);if(S.version>0&&F.__version!==S.version){dt(F,S,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+E)}function q(S,E){let F=i.get(S);if(S.version>0&&F.__version!==S.version){dt(F,S,E);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+E)}function G(S,E){let F=i.get(S);if(S.version>0&&F.__version!==S.version){Et(F,S,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+E)}let z={[yi]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},k={[Ue]:n.NEAREST,[gh]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[xe]:n.LINEAR,[km]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},st={[Km]:n.NEVER,[n0]:n.ALWAYS,[Jm]:n.LESS,[Qu]:n.LEQUAL,[jm]:n.EQUAL,[e0]:n.GEQUAL,[Qm]:n.GREATER,[t0]:n.NOTEQUAL};function X(S,E,F){if(F?(n.texParameteri(S,n.TEXTURE_WRAP_S,z[E.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,z[E.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,z[E.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,k[E.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,k[E.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==un||E.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Ue&&E.minFilter!==xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,st[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ue||E.minFilter!==Ca&&E.minFilter!==or||E.type===pi&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===ar&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(S,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Q(S,E){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",A));let et=E.source,it=d.get(et);it===void 0&&(it={},d.set(et,it));let nt=O(E);if(nt!==S.__cacheKey){it[nt]===void 0&&(it[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),it[nt].usedTimes++;let Mt=it[S.__cacheKey];Mt!==void 0&&(it[S.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(E)),S.__cacheKey=nt,S.__webglTexture=it[nt].texture}return F}function dt(S,E,F){let et=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=n.TEXTURE_3D);let it=Q(S,E),nt=E.source;e.bindTexture(et,S.__webglTexture,n.TEXTURE0+F);let Mt=i.get(nt);if(nt.version!==Mt.__version||it===!0){e.activeTexture(n.TEXTURE0+F);let _t=re.getPrimaries(re.workingColorSpace),bt=E.colorSpace===Be?null:re.getPrimaries(E.colorSpace),Lt=E.colorSpace===Be||_t===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let qt=m(E)&&p(E.image)===!1,rt=x(E.image,qt,!1,s.maxTextureSize);rt=xt(E,rt);let ot=p(rt)||a,ut=r.convert(E.format,E.colorSpace),at=r.convert(E.type),At=M(E.internalFormat,ut,at,E.colorSpace,E.isVideoTexture);X(et,E,ot);let St,Yt=E.mipmaps,se=a&&E.isVideoTexture!==!0&&At!==Ku,ve=Mt.__version===void 0||it===!0,Qt=R(E,rt,ot);if(E.isDepthTexture)At=n.DEPTH_COMPONENT,a?E.type===pi?At=n.DEPTH_COMPONENT32F:E.type===fi?At=n.DEPTH_COMPONENT24:E.type===Fi?At=n.DEPTH24_STENCIL8:At=n.DEPTH_COMPONENT16:E.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ki&&At===n.DEPTH_COMPONENT&&E.type!==sl&&E.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=fi,at=r.convert(E.type)),E.format===Cs&&At===n.DEPTH_COMPONENT&&(At=n.DEPTH_STENCIL,E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Fi,at=r.convert(E.type))),ve&&(se?e.texStorage2D(n.TEXTURE_2D,1,At,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,At,rt.width,rt.height,0,ut,at,null));else if(E.isDataTexture)if(Yt.length>0&&ot){se&&ve&&e.texStorage2D(n.TEXTURE_2D,Qt,At,Yt[0].width,Yt[0].height);for(let mt=0,U=Yt.length;mt<U;mt++)St=Yt[mt],se?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,St.width,St.height,ut,at,St.data):e.texImage2D(n.TEXTURE_2D,mt,At,St.width,St.height,0,ut,at,St.data);E.generateMipmaps=!1}else se?(ve&&e.texStorage2D(n.TEXTURE_2D,Qt,At,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,ut,at,rt.data)):e.texImage2D(n.TEXTURE_2D,0,At,rt.width,rt.height,0,ut,at,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Qt,At,Yt[0].width,Yt[0].height,rt.depth);for(let mt=0,U=Yt.length;mt<U;mt++)St=Yt[mt],E.format!==dn?ut!==null?se?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,St.width,St.height,rt.depth,ut,St.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,At,St.width,St.height,rt.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,St.width,St.height,rt.depth,ut,at,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,At,St.width,St.height,rt.depth,0,ut,at,St.data)}else{se&&ve&&e.texStorage2D(n.TEXTURE_2D,Qt,At,Yt[0].width,Yt[0].height);for(let mt=0,U=Yt.length;mt<U;mt++)St=Yt[mt],E.format!==dn?ut!==null?se?e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,St.width,St.height,ut,St.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,At,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,St.width,St.height,ut,at,St.data):e.texImage2D(n.TEXTURE_2D,mt,At,St.width,St.height,0,ut,at,St.data)}else if(E.isDataArrayTexture)se?(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Qt,At,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ut,at,rt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,rt.width,rt.height,rt.depth,0,ut,at,rt.data);else if(E.isData3DTexture)se?(ve&&e.texStorage3D(n.TEXTURE_3D,Qt,At,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ut,at,rt.data)):e.texImage3D(n.TEXTURE_3D,0,At,rt.width,rt.height,rt.depth,0,ut,at,rt.data);else if(E.isFramebufferTexture){if(ve)if(se)e.texStorage2D(n.TEXTURE_2D,Qt,At,rt.width,rt.height);else{let mt=rt.width,U=rt.height;for(let yt=0;yt<Qt;yt++)e.texImage2D(n.TEXTURE_2D,yt,At,mt,U,0,ut,at,null),mt>>=1,U>>=1}}else if(Yt.length>0&&ot){se&&ve&&e.texStorage2D(n.TEXTURE_2D,Qt,At,Yt[0].width,Yt[0].height);for(let mt=0,U=Yt.length;mt<U;mt++)St=Yt[mt],se?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,ut,at,St):e.texImage2D(n.TEXTURE_2D,mt,At,ut,at,St);E.generateMipmaps=!1}else se?(ve&&e.texStorage2D(n.TEXTURE_2D,Qt,At,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,at,rt)):e.texImage2D(n.TEXTURE_2D,0,At,ut,at,rt);y(E,ot)&&_(et),Mt.__version=nt.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function Et(S,E,F){if(E.image.length!==6)return;let et=Q(S,E),it=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);let nt=i.get(it);if(it.version!==nt.__version||et===!0){e.activeTexture(n.TEXTURE0+F);let Mt=re.getPrimaries(re.workingColorSpace),_t=E.colorSpace===Be?null:re.getPrimaries(E.colorSpace),bt=E.colorSpace===Be||Mt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,rt=[];for(let mt=0;mt<6;mt++)!Lt&&!qt?rt[mt]=x(E.image[mt],!1,!0,s.maxCubemapSize):rt[mt]=qt?E.image[mt].image:E.image[mt],rt[mt]=xt(E,rt[mt]);let ot=rt[0],ut=p(ot)||a,at=r.convert(E.format,E.colorSpace),At=r.convert(E.type),St=M(E.internalFormat,at,At,E.colorSpace),Yt=a&&E.isVideoTexture!==!0,se=nt.__version===void 0||et===!0,ve=R(E,ot,ut);X(n.TEXTURE_CUBE_MAP,E,ut);let Qt;if(Lt){Yt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ve,St,ot.width,ot.height);for(let mt=0;mt<6;mt++){Qt=rt[mt].mipmaps;for(let U=0;U<Qt.length;U++){let yt=Qt[U];E.format!==dn?at!==null?Yt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,0,0,yt.width,yt.height,at,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,0,0,yt.width,yt.height,at,At,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U,St,yt.width,yt.height,0,at,At,yt.data)}}}else{Qt=E.mipmaps,Yt&&se&&(Qt.length>0&&ve++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ve,St,rt[0].width,rt[0].height));for(let mt=0;mt<6;mt++)if(qt){Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,rt[mt].width,rt[mt].height,at,At,rt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,St,rt[mt].width,rt[mt].height,0,at,At,rt[mt].data);for(let U=0;U<Qt.length;U++){let vt=Qt[U].image[mt].image;Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,0,0,vt.width,vt.height,at,At,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,St,vt.width,vt.height,0,at,At,vt.data)}}else{Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,at,At,rt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,St,at,At,rt[mt]);for(let U=0;U<Qt.length;U++){let yt=Qt[U];Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,0,0,at,At,yt.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U+1,St,at,At,yt.image[mt])}}}y(E,ut)&&_(n.TEXTURE_CUBE_MAP),nt.__version=it.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function pt(S,E,F,et,it,nt){let Mt=r.convert(F.format,F.colorSpace),_t=r.convert(F.type),bt=M(F.internalFormat,Mt,_t,F.colorSpace);if(!i.get(E).__hasExternalTextures){let qt=Math.max(1,E.width>>nt),rt=Math.max(1,E.height>>nt);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,bt,qt,rt,E.depth,0,Mt,_t,null):e.texImage2D(it,nt,bt,qt,rt,0,Mt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),j(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,it,i.get(F).__webglTexture,0,tt(E)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,it,i.get(F).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(S,E,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),E.depthBuffer&&!E.stencilBuffer){let et=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||j(E)){let it=E.depthTexture;it&&it.isDepthTexture&&(it.type===pi?et=n.DEPTH_COMPONENT32F:it.type===fi&&(et=n.DEPTH_COMPONENT24));let nt=tt(E);j(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,et,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,et,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(E.depthBuffer&&E.stencilBuffer){let et=tt(E);F&&j(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,E.width,E.height):j(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let et=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let it=0;it<et.length;it++){let nt=et[it],Mt=r.convert(nt.format,nt.colorSpace),_t=r.convert(nt.type),bt=M(nt.internalFormat,Mt,_t,nt.colorSpace),Lt=tt(E);F&&j(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,bt,E.width,E.height):j(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,bt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,bt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let et=i.get(E.depthTexture).__webglTexture,it=tt(E);if(E.depthTexture.format===ki)j(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(E.depthTexture.format===Cs)j(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Rt(S){let E=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");kt(E.__webglFramebuffer,S)}else if(F){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=n.createRenderbuffer(),Ct(E.__webglDepthbuffer[et],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ct(E.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(S,E,F){let et=i.get(S);E!==void 0&&pt(et.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Rt(S)}function I(S){let E=S.texture,F=i.get(S),et=i.get(E);S.addEventListener("dispose",D),S.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=E.version,o.memory.textures++);let it=S.isWebGLCubeRenderTarget===!0,nt=S.isWebGLMultipleRenderTargets===!0,Mt=p(S)||a;if(it){F.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[_t]=[];for(let bt=0;bt<E.mipmaps.length;bt++)F.__webglFramebuffer[_t][bt]=n.createFramebuffer()}else F.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)F.__webglFramebuffer[_t]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(nt)if(s.drawBuffers){let _t=S.texture;for(let bt=0,Lt=_t.length;bt<Lt;bt++){let qt=i.get(_t[bt]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&j(S)===!1){let _t=nt?E:[E];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let bt=0;bt<_t.length;bt++){let Lt=_t[bt];F.__webglColorRenderbuffer[bt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[bt]);let qt=r.convert(Lt.format,Lt.colorSpace),rt=r.convert(Lt.type),ot=M(Lt.internalFormat,qt,rt,Lt.colorSpace,S.isXRRenderTarget===!0),ut=tt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,ot,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,F.__webglColorRenderbuffer[bt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(F.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),X(n.TEXTURE_CUBE_MAP,E,Mt);for(let _t=0;_t<6;_t++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)pt(F.__webglFramebuffer[_t][bt],S,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt);else pt(F.__webglFramebuffer[_t],S,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(E,Mt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let _t=S.texture;for(let bt=0,Lt=_t.length;bt<Lt;bt++){let qt=_t[bt],rt=i.get(qt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),X(n.TEXTURE_2D,qt,Mt),pt(F.__webglFramebuffer,S,qt,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,0),y(qt,Mt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?_t=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,et.__webglTexture),X(_t,E,Mt),a&&E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)pt(F.__webglFramebuffer[bt],S,E,n.COLOR_ATTACHMENT0,_t,bt);else pt(F.__webglFramebuffer,S,E,n.COLOR_ATTACHMENT0,_t,0);y(E,Mt)&&_(_t),e.unbindTexture()}S.depthBuffer&&Rt(S)}function lt(S){let E=p(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0,it=F.length;et<it;et++){let nt=F[et];if(y(nt,E)){let Mt=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_t=i.get(nt).__webglTexture;e.bindTexture(Mt,_t),_(Mt),e.unbindTexture()}}}function J(S){if(a&&S.samples>0&&j(S)===!1){let E=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,et=S.height,it=n.COLOR_BUFFER_BIT,nt=[],Mt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(S),bt=S.isWebGLMultipleRenderTargets===!0;if(bt)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){nt.push(n.COLOR_ATTACHMENT0+Lt),S.depthBuffer&&nt.push(Mt);let qt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(qt===!1&&(S.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),bt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]),qt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Mt])),bt){let rt=i.get(E[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,F,et,0,0,F,et,it,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),bt)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[Lt]);let qt=i.get(E[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function tt(S){return Math.min(s.maxSamples,S.samples)}function j(S){let E=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(S){let E=o.render.frame;h.get(S)!==E&&(h.set(S,E),S.update())}function xt(S,E){let F=S.colorSpace,et=S.format,it=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===xc||F!==oi&&F!==Be&&(re.getTransfer(F)===fe?a===!1?t.has("EXT_sRGB")===!0&&et===dn?(S.format=xc,S.minFilter=xe,S.generateMipmaps=!1):E=wo.sRGBToLinear(E):(et!==dn||it!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=j}function qy(n,t,e){let i=e.isWebGL2;function s(r,o=Be){let a,c=re.getTransfer(o);if(r===vn)return n.UNSIGNED_BYTE;if(r===Xu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===qu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Hm)return n.BYTE;if(r===zm)return n.SHORT;if(r===sl)return n.UNSIGNED_SHORT;if(r===Wu)return n.INT;if(r===fi)return n.UNSIGNED_INT;if(r===pi)return n.FLOAT;if(r===ar)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gm)return n.ALPHA;if(r===dn)return n.RGBA;if(r===Vm)return n.LUMINANCE;if(r===Wm)return n.LUMINANCE_ALPHA;if(r===ki)return n.DEPTH_COMPONENT;if(r===Cs)return n.DEPTH_STENCIL;if(r===xc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rl)return n.RED;if(r===Yu)return n.RED_INTEGER;if(r===Xm)return n.RG;if(r===Zu)return n.RG_INTEGER;if(r===$u)return n.RGBA_INTEGER;if(r===Pa||r===La||r===Ia||r===Da)if(c===fe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===_h||r===yh||r===vh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ku)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mh||r===Eh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Mh)return c===fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Eh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bh||r===Sh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh||r===Nh||r===Oh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oh)return c===fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ua||r===Bh||r===Fh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ua)return c===fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qm||r===kh||r===Hh||r===zh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ua)return a.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Dc=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ft=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yy={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Uc=class extends vi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),p=null,m=null,y=[],_=[],M=new ct,R=null,w=new Oe;w.layers.enable(1),w.viewport=new Ie;let A=new Oe;A.layers.enable(2),A.viewport=new Ie;let D=[w,A],v=new Dc;v.layers.enable(1),v.layers.enable(2);let b=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=y[X];return Q===void 0&&(Q=new nr,y[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=y[X];return Q===void 0&&(Q=new nr,y[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=y[X];return Q===void 0&&(Q=new nr,y[X]=Q),Q.getHandSpace()};function N(X){let Q=_.indexOf(X.inputSource);if(Q===-1)return;let dt=y[Q];dt!==void 0&&(dt.update(X.inputSource,X.frame,l||o),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",P);for(let X=0;X<y.length;X++){let Q=_[X];Q!==null&&(_[X]=null,y[X].disconnect(Q))}b=null,C=null,t.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",$),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Dn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,dt=null,Et=null;x.depth&&(Et=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?Cs:ki,dt=x.stencil?Fi:fi);let pt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Dn(d.textureWidth,d.textureHeight,{format:dn,type:vn,depthTexture:new No(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ct=t.properties.get(m);Ct.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(X){for(let Q=0;Q<X.removed.length;Q++){let dt=X.removed[Q],Et=_.indexOf(dt);Et>=0&&(_[Et]=null,y[Et].disconnect(dt))}for(let Q=0;Q<X.added.length;Q++){let dt=X.added[Q],Et=_.indexOf(dt);if(Et===-1){for(let Ct=0;Ct<y.length;Ct++)if(Ct>=_.length){_.push(dt),Et=Ct;break}else if(_[Ct]===null){_[Ct]=dt,Et=Ct;break}if(Et===-1)break}let pt=y[Et];pt&&pt.connect(dt)}}let O=new L,H=new L;function B(X,Q,dt){O.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(dt.matrixWorld);let Et=O.distanceTo(H),pt=Q.projectionMatrix.elements,Ct=dt.projectionMatrix.elements,kt=pt[14]/(pt[10]-1),Rt=pt[14]/(pt[10]+1),Nt=(pt[9]+1)/pt[5],I=(pt[9]-1)/pt[5],lt=(pt[8]-1)/pt[0],J=(Ct[8]+1)/Ct[0],tt=kt*lt,j=kt*J,Tt=Et/(-lt+J),xt=Tt*-lt;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let S=kt+Tt,E=Rt+Tt,F=tt-xt,et=j+(Et-xt),it=Nt*Rt/E*S,nt=I*Rt/E*S;X.projectionMatrix.makePerspective(F,et,it,nt,S,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.near=A.near=w.near=X.near,v.far=A.far=w.far=X.far,(b!==v.near||C!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,C=v.far);let Q=X.parent,dt=v.cameras;q(v,Q);for(let Et=0;Et<dt.length;Et++)q(dt[Et],Q);dt.length===2?B(v,w,A):v.projectionMatrix.copy(w.projectionMatrix),G(X,v,Q)};function G(X,Q,dt){dt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_c*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let z=null;function k(X,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let Et=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,Et=!0);for(let pt=0;pt<dt.length;pt++){let Ct=dt[pt],kt=null;if(f!==null)kt=f.getViewport(Ct);else{let Nt=u.getViewSubImage(d,Ct);kt=Nt.viewport,pt===0&&(t.setRenderTargetTextures(m,Nt.colorTexture,d.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(m))}let Rt=D[pt];Rt===void 0&&(Rt=new Oe,Rt.layers.enable(pt),Rt.viewport=new Ie,D[pt]=Rt),Rt.matrix.fromArray(Ct.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ct.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(kt.x,kt.y,kt.width,kt.height),pt===0&&(v.matrix.copy(Rt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Et===!0&&v.cameras.push(Rt)}}for(let dt=0;dt<y.length;dt++){let Et=_[dt],pt=y[dt];Et!==null&&pt!==void 0&&pt.update(Et,Q,l||o)}z&&z(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let st=new id;st.setAnimationLoop(k),this.setAnimationLoop=function(X){z=X},this.dispose=function(){}}};function Zy(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,nd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $y(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let M=_.program;i.uniformBlockBinding(y,M)}function l(y,_){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",p));let R=_.program;i.updateUBOMapping(y,R);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let _=u();y.__bindingPointIndex=_;let M=n.createBuffer(),R=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],M=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,A=M.length;w<A;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,b=D.length;v<b;v++){let C=D[v];if(f(C,w,v,R)===!0){let N=C.__offset,$=Array.isArray(C.value)?C.value:[C.value],P=0;for(let O=0;O<$.length;O++){let H=$[O],B=x(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+P,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,_,M,R){let w=y.value,A=_+"_"+M;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{let D=R[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(y){let _=y.uniforms,M=0,R=16;for(let A=0,D=_.length;A<D;A++){let v=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,C=v.length;b<C;b++){let N=v[b],$=Array.isArray(N.value)?N.value:[N.value];for(let P=0,O=$.length;P<O;P++){let H=$[P],B=x(H),q=M%R;q!==0&&R-q<B.boundary&&(M+=R-q),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=B.storage}}}let w=M%R;return w>0&&(M+=R-w),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){let _=y.target;_.removeEventListener("dispose",p);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ur=class{constructor(t={}){let{canvas:e=s0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ne,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;let _=this,M=!1,R=0,w=0,A=null,D=-1,v=null,b=new Ie,C=new Ie,N=null,$=new Ot(0),P=0,O=e.width,H=e.height,B=1,q=null,G=null,z=new Ie(0,0,O,H),k=new Ie(0,0,O,H),st=!1,X=new hr,Q=!1,dt=!1,Et=null,pt=new Ee,Ct=new ct,kt=new L,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?B:1}let I=i;function lt(T,V){for(let Z=0;Z<T.length;Z++){let K=T[Z],Y=e.getContext(K,V);if(Y!==null)return Y}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",yt,!1),I===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),I=lt(V,T),I===null)throw lt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,tt,j,Tt,xt,S,E,F,et,it,nt,Mt,_t,bt,Lt,qt,rt,ot,ut,at,At,St,Yt,se;function ve(){J=new p_(I),tt=new c_(I,J,t),J.init(tt),St=new qy(I,J,tt),j=new Wy(I,J,tt),Tt=new x_(I),xt=new Iy,S=new Xy(I,J,j,xt,tt,St,Tt),E=new h_(_),F=new f_(_),et=new w0(I,tt),Yt=new o_(I,J,et,tt),it=new m_(I,et,Tt,Yt),nt=new M_(I,it,et,Tt),ut=new v_(I,tt,S),qt=new l_(xt),Mt=new Ly(_,E,F,J,tt,Yt,qt),_t=new Zy(_,xt),bt=new Uy,Lt=new Hy(J,tt),ot=new r_(_,E,F,j,nt,d,c),rt=new Vy(_,nt,tt),se=new $y(I,Tt,tt,j),at=new a_(I,J,Tt,tt),At=new g_(I,J,Tt,tt),Tt.programs=Mt.programs,_.capabilities=tt,_.extensions=J,_.properties=xt,_.renderLists=bt,_.shadowMap=rt,_.state=j,_.info=Tt}ve();let Qt=new Uc(_,I);this.xr=Qt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(O,H,!1))},this.getSize=function(T){return T.set(O,H)},this.setSize=function(T,V,Z=!0){if(Qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,H=V,e.width=Math.floor(T*B),e.height=Math.floor(V*B),Z===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(O*B,H*B).floor()},this.setDrawingBufferSize=function(T,V,Z){O=T,H=V,B=Z,e.width=Math.floor(T*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,V,Z,K){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,V,Z,K),j.viewport(b.copy(z).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,V,Z,K){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,V,Z,K),j.scissor(C.copy(k).multiplyScalar(B).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(T){j.setScissorTest(st=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(T=!0,V=!0,Z=!0){let K=0;if(T){let Y=!1;if(A!==null){let wt=A.texture.format;Y=wt===$u||wt===Zu||wt===Yu}if(Y){let wt=A.texture.type,Pt=wt===vn||wt===fi||wt===sl||wt===Fi||wt===Xu||wt===qu,Ht=ot.getClearColor(),Xt=ot.getClearAlpha(),Jt=Ht.r,Zt=Ht.g,$t=Ht.b;Pt?(f[0]=Jt,f[1]=Zt,f[2]=$t,f[3]=Xt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Jt,g[1]=Zt,g[2]=$t,g[3]=Xt,I.clearBufferiv(I.COLOR,0,g))}else K|=I.COLOR_BUFFER_BIT}V&&(K|=I.DEPTH_BUFFER_BIT),Z&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),bt.dispose(),Lt.dispose(),xt.dispose(),E.dispose(),F.dispose(),nt.dispose(),Yt.dispose(),se.dispose(),Mt.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",Ke),Qt.removeEventListener("sessionend",ue),Et&&(Et.dispose(),Et=null),Je.stop()};function mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=Tt.autoReset,V=rt.enabled,Z=rt.autoUpdate,K=rt.needsUpdate,Y=rt.type;ve(),Tt.autoReset=T,rt.enabled=V,rt.autoUpdate=Z,rt.needsUpdate=K,rt.type=Y}function yt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function vt(T){let V=T.target;V.removeEventListener("dispose",vt),Gt(V)}function Gt(T){Ft(T),xt.remove(T)}function Ft(T){let V=xt.get(T).programs;V!==void 0&&(V.forEach(function(Z){Mt.releaseProgram(Z)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Z,K,Y,wt){V===null&&(V=Rt);let Pt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ht=nm(T,V,Z,K,Y);j.setMaterial(K,Pt);let Xt=Z.index,Jt=1;if(K.wireframe===!0){if(Xt=it.getWireframeAttribute(Z),Xt===void 0)return;Jt=2}let Zt=Z.drawRange,$t=Z.attributes.position,be=Zt.start*Jt,cn=(Zt.start+Zt.count)*Jt;wt!==null&&(be=Math.max(be,wt.start*Jt),cn=Math.min(cn,(wt.start+wt.count)*Jt)),Xt!==null?(be=Math.max(be,0),cn=Math.min(cn,Xt.count)):$t!=null&&(be=Math.max(be,0),cn=Math.min(cn,$t.count));let Pe=cn-be;if(Pe<0||Pe===1/0)return;Yt.setup(Y,K,Ht,Z,Xt);let $n,ge=at;if(Xt!==null&&($n=et.get(Xt),ge=At,ge.setIndex($n)),Y.isMesh)K.wireframe===!0?(j.setLineWidth(K.wireframeLinewidth*Nt()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(Y.isLine){let te=K.linewidth;te===void 0&&(te=1),j.setLineWidth(te*Nt()),Y.isLineSegments?ge.setMode(I.LINES):Y.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else Y.isPoints?ge.setMode(I.POINTS):Y.isSprite&&ge.setMode(I.TRIANGLES);if(Y.isBatchedMesh)ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ge.renderInstances(be,Pe,Y.count);else if(Z.isInstancedBufferGeometry){let te=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,wa=Math.min(Z.instanceCount,te);ge.renderInstances(be,Pe,wa)}else ge.render(be,Pe)};function le(T,V,Z){T.transparent===!0&&T.side===_e&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,zr(T,V,Z),T.side=_i,T.needsUpdate=!0,zr(T,V,Z),T.side=_e):zr(T,V,Z)}this.compile=function(T,V,Z=null){Z===null&&(Z=T),p=Lt.get(Z),p.init(),y.push(p),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),T!==Z&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(_._useLegacyLights);let K=new Set;return T.traverse(function(Y){let wt=Y.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let Ht=wt[Pt];le(Ht,Z,Y),K.add(Ht)}else le(wt,Z,Y),K.add(wt)}),y.pop(),p=null,K},this.compileAsync=function(T,V,Z=null){let K=this.compile(T,V,Z);return new Promise(Y=>{function wt(){if(K.forEach(function(Pt){xt.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){Y(T);return}setTimeout(wt,10)}J.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let he=null;function Ce(T){he&&he(T)}function Ke(){Je.stop()}function ue(){Je.start()}let Je=new id;Je.setAnimationLoop(Ce),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(T){he=T,Qt.setAnimationLoop(T),T===null?Je.stop():Je.start()},Qt.addEventListener("sessionstart",Ke),Qt.addEventListener("sessionend",ue),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(V),V=Qt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,V,A),p=Lt.get(T,y.length),p.init(),y.push(p),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(pt),dt=this.localClippingEnabled,Q=qt.init(this.clippingPlanes,dt),x=bt.get(T,m.length),x.init(),m.push(x),Fn(T,V,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,G),this.info.render.frame++,Q===!0&&qt.beginShadows();let Z=p.state.shadowsArray;if(rt.render(Z,T,V),Q===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(x,T),p.setupLights(_._useLegacyLights),V.isArrayCamera){let K=V.cameras;for(let Y=0,wt=K.length;Y<wt;Y++){let Pt=K[Y];sh(x,T,Pt,Pt.viewport)}}else sh(x,T,V);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,V),Yt.resetDefaultState(),D=-1,v=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Fn(T,V,Z,K){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){K&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);let Pt=nt.update(T),Ht=T.material;Ht.visible&&x.push(T,Pt,Ht,Z,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let Pt=nt.update(T),Ht=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),kt.copy(Pt.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(Ht)){let Xt=Pt.groups;for(let Jt=0,Zt=Xt.length;Jt<Zt;Jt++){let $t=Xt[Jt],be=Ht[$t.materialIndex];be&&be.visible&&x.push(T,Pt,be,Z,kt.z,$t)}}else Ht.visible&&x.push(T,Pt,Ht,Z,kt.z,null)}}let wt=T.children;for(let Pt=0,Ht=wt.length;Pt<Ht;Pt++)Fn(wt[Pt],V,Z,K)}function sh(T,V,Z,K){let Y=T.opaque,wt=T.transmissive,Pt=T.transparent;p.setupLightsView(Z),Q===!0&&qt.setGlobalState(_.clippingPlanes,Z),wt.length>0&&em(Y,wt,V,Z),K&&j.viewport(b.copy(K)),Y.length>0&&Hr(Y,V,Z),wt.length>0&&Hr(wt,V,Z),Pt.length>0&&Hr(Pt,V,Z),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function em(T,V,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let wt=tt.isWebGL2;Et===null&&(Et=new Dn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ar:vn,minFilter:or,samples:wt?4:0})),_.getDrawingBufferSize(Ct),wt?Et.setSize(Ct.x,Ct.y):Et.setSize(yc(Ct.x),yc(Ct.y));let Pt=_.getRenderTarget();_.setRenderTarget(Et),_.getClearColor($),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let Ht=_.toneMapping;_.toneMapping=xi,Hr(T,Z,K),S.updateMultisampleRenderTarget(Et),S.updateRenderTargetMipmap(Et);let Xt=!1;for(let Jt=0,Zt=V.length;Jt<Zt;Jt++){let $t=V[Jt],be=$t.object,cn=$t.geometry,Pe=$t.material,$n=$t.group;if(Pe.side===_e&&be.layers.test(K.layers)){let ge=Pe.side;Pe.side=Ge,Pe.needsUpdate=!0,rh(be,Z,K,cn,Pe,$n),Pe.side=ge,Pe.needsUpdate=!0,Xt=!0}}Xt===!0&&(S.updateMultisampleRenderTarget(Et),S.updateRenderTargetMipmap(Et)),_.setRenderTarget(Pt),_.setClearColor($,P),_.toneMapping=Ht}function Hr(T,V,Z){let K=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,wt=T.length;Y<wt;Y++){let Pt=T[Y],Ht=Pt.object,Xt=Pt.geometry,Jt=K===null?Pt.material:K,Zt=Pt.group;Ht.layers.test(Z.layers)&&rh(Ht,V,Z,Xt,Jt,Zt)}}function rh(T,V,Z,K,Y,wt){T.onBeforeRender(_,V,Z,K,Y,wt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(_,V,Z,K,T,wt),Y.transparent===!0&&Y.side===_e&&Y.forceSinglePass===!1?(Y.side=Ge,Y.needsUpdate=!0,_.renderBufferDirect(Z,V,K,Y,T,wt),Y.side=_i,Y.needsUpdate=!0,_.renderBufferDirect(Z,V,K,Y,T,wt),Y.side=_e):_.renderBufferDirect(Z,V,K,Y,T,wt),T.onAfterRender(_,V,Z,K,Y,wt)}function zr(T,V,Z){V.isScene!==!0&&(V=Rt);let K=xt.get(T),Y=p.state.lights,wt=p.state.shadowsArray,Pt=Y.state.version,Ht=Mt.getParameters(T,Y.state,wt,V,Z),Xt=Mt.getProgramCacheKey(Ht),Jt=K.programs;K.environment=T.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(T.isMeshStandardMaterial?F:E).get(T.envMap||K.environment),Jt===void 0&&(T.addEventListener("dispose",vt),Jt=new Map,K.programs=Jt);let Zt=Jt.get(Xt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===Pt)return ah(T,Ht),Zt}else Ht.uniforms=Mt.getUniforms(T),T.onBuild(Z,Ht,_),T.onBeforeCompile(Ht,_),Zt=Mt.acquireProgram(Ht,Xt),Jt.set(Xt,Zt),K.uniforms=Ht.uniforms;let $t=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($t.clippingPlanes=qt.uniform),ah(T,Ht),K.needsLights=sm(T),K.lightsStateVersion=Pt,K.needsLights&&($t.ambientLightColor.value=Y.state.ambient,$t.lightProbe.value=Y.state.probe,$t.directionalLights.value=Y.state.directional,$t.directionalLightShadows.value=Y.state.directionalShadow,$t.spotLights.value=Y.state.spot,$t.spotLightShadows.value=Y.state.spotShadow,$t.rectAreaLights.value=Y.state.rectArea,$t.ltc_1.value=Y.state.rectAreaLTC1,$t.ltc_2.value=Y.state.rectAreaLTC2,$t.pointLights.value=Y.state.point,$t.pointLightShadows.value=Y.state.pointShadow,$t.hemisphereLights.value=Y.state.hemi,$t.directionalShadowMap.value=Y.state.directionalShadowMap,$t.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$t.spotShadowMap.value=Y.state.spotShadowMap,$t.spotLightMatrix.value=Y.state.spotLightMatrix,$t.spotLightMap.value=Y.state.spotLightMap,$t.pointShadowMap.value=Y.state.pointShadowMap,$t.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function oh(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Ts.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function ah(T,V){let Z=xt.get(T);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function nm(T,V,Z,K,Y){V.isScene!==!0&&(V=Rt),S.resetTextureUnits();let wt=V.fog,Pt=K.isMeshStandardMaterial?V.environment:null,Ht=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:oi,Xt=(K.isMeshStandardMaterial?F:E).get(K.envMap||Pt),Jt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Zt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),$t=!!Z.morphAttributes.position,be=!!Z.morphAttributes.normal,cn=!!Z.morphAttributes.color,Pe=xi;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=_.toneMapping);let $n=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=$n!==void 0?$n.length:0,te=xt.get(K),wa=p.state.lights;if(Q===!0&&(dt===!0||T!==v)){let _n=T===v&&K.id===D;qt.setState(K,T,_n)}let Me=!1;K.version===te.__version?(te.needsLights&&te.lightsStateVersion!==wa.state.version||te.outputColorSpace!==Ht||Y.isBatchedMesh&&te.batching===!1||!Y.isBatchedMesh&&te.batching===!0||Y.isInstancedMesh&&te.instancing===!1||!Y.isInstancedMesh&&te.instancing===!0||Y.isSkinnedMesh&&te.skinning===!1||!Y.isSkinnedMesh&&te.skinning===!0||Y.isInstancedMesh&&te.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&te.instancingColor===!1&&Y.instanceColor!==null||te.envMap!==Xt||K.fog===!0&&te.fog!==wt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==qt.numPlanes||te.numIntersection!==qt.numIntersection)||te.vertexAlphas!==Jt||te.vertexTangents!==Zt||te.morphTargets!==$t||te.morphNormals!==be||te.morphColors!==cn||te.toneMapping!==Pe||tt.isWebGL2===!0&&te.morphTargetsCount!==ge)&&(Me=!0):(Me=!0,te.__version=K.version);let Ri=te.currentProgram;Me===!0&&(Ri=zr(K,V,Y));let ch=!1,Ys=!1,Ta=!1,ke=Ri.getUniforms(),Ci=te.uniforms;if(j.useProgram(Ri.program)&&(ch=!0,Ys=!0,Ta=!0),K.id!==D&&(D=K.id,Ys=!0),ch||v!==T){ke.setValue(I,"projectionMatrix",T.projectionMatrix),ke.setValue(I,"viewMatrix",T.matrixWorldInverse);let _n=ke.map.cameraPosition;_n!==void 0&&_n.setValue(I,kt.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&ke.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ke.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Ys=!0,Ta=!0)}if(Y.isSkinnedMesh){ke.setOptional(I,Y,"bindMatrix"),ke.setOptional(I,Y,"bindMatrixInverse");let _n=Y.skeleton;_n&&(tt.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),ke.setValue(I,"boneTexture",_n.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(ke.setOptional(I,Y,"batchingTexture"),ke.setValue(I,"batchingTexture",Y._matricesTexture,S));let Aa=Z.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0&&tt.isWebGL2===!0)&&ut.update(Y,Z,Ri),(Ys||te.receiveShadow!==Y.receiveShadow)&&(te.receiveShadow=Y.receiveShadow,ke.setValue(I,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ci.envMap.value=Xt,Ci.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),Ys&&(ke.setValue(I,"toneMappingExposure",_.toneMappingExposure),te.needsLights&&im(Ci,Ta),wt&&K.fog===!0&&_t.refreshFogUniforms(Ci,wt),_t.refreshMaterialUniforms(Ci,K,B,H,Et),Ts.upload(I,oh(te),Ci,S)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ts.upload(I,oh(te),Ci,S),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ke.setValue(I,"center",Y.center),ke.setValue(I,"modelViewMatrix",Y.modelViewMatrix),ke.setValue(I,"normalMatrix",Y.normalMatrix),ke.setValue(I,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let _n=K.uniformsGroups;for(let Ra=0,rm=_n.length;Ra<rm;Ra++)if(tt.isWebGL2){let lh=_n[Ra];se.update(lh,Ri),se.bind(lh,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function im(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function sm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,V,Z){xt.get(T.texture).__webglTexture=V,xt.get(T.depthTexture).__webglTexture=Z;let K=xt.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){let Z=xt.get(T);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Z=0){A=T,R=V,w=Z;let K=!0,Y=null,wt=!1,Pt=!1;if(T){let Xt=xt.get(T);Xt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(I.FRAMEBUFFER,null),K=!1):Xt.__webglFramebuffer===void 0?S.setupRenderTarget(T):Xt.__hasExternalTextures&&S.rebindTextures(T,xt.get(T.texture).__webglTexture,xt.get(T.depthTexture).__webglTexture);let Jt=T.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);let Zt=xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[V])?Y=Zt[V][Z]:Y=Zt[V],wt=!0):tt.isWebGL2&&T.samples>0&&S.useMultisampledRTT(T)===!1?Y=xt.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[Z]:Y=Zt,b.copy(T.viewport),C.copy(T.scissor),N=T.scissorTest}else b.copy(z).multiplyScalar(B).floor(),C.copy(k).multiplyScalar(B).floor(),N=st;if(j.bindFramebuffer(I.FRAMEBUFFER,Y)&&tt.drawBuffers&&K&&j.drawBuffers(T,Y),j.viewport(b),j.scissor(C),j.setScissorTest(N),wt){let Xt=xt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,Xt.__webglTexture,Z)}else if(Pt){let Xt=xt.get(T.texture),Jt=V||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.__webglTexture,Z||0,Jt)}D=-1},this.readRenderTargetPixels=function(T,V,Z,K,Y,wt,Pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ht=Ht[Pt]),Ht){j.bindFramebuffer(I.FRAMEBUFFER,Ht);try{let Xt=T.texture,Jt=Xt.format,Zt=Xt.type;if(Jt!==dn&&St.convert(Jt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $t=Zt===ar&&(J.has("EXT_color_buffer_half_float")||tt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Zt!==vn&&St.convert(Zt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Zt===pi&&(tt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-K&&Z>=0&&Z<=T.height-Y&&I.readPixels(V,Z,K,Y,St.convert(Jt),St.convert(Zt),wt)}finally{let Xt=A!==null?xt.get(A).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(T,V,Z=0){let K=Math.pow(2,-Z),Y=Math.floor(V.image.width*K),wt=Math.floor(V.image.height*K);S.setTexture2D(V,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,T.x,T.y,Y,wt),j.unbindTexture()},this.copyTextureToTexture=function(T,V,Z,K=0){let Y=V.image.width,wt=V.image.height,Pt=St.convert(Z.format),Ht=St.convert(Z.type);S.setTexture2D(Z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,K,T.x,T.y,Y,wt,Pt,Ht,V.image.data):V.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,K,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Pt,V.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,K,T.x,T.y,Pt,Ht,V.image),K===0&&Z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Z,K,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let wt=T.max.x-T.min.x+1,Pt=T.max.y-T.min.y+1,Ht=T.max.z-T.min.z+1,Xt=St.convert(K.format),Jt=St.convert(K.type),Zt;if(K.isData3DTexture)S.setTexture3D(K,0),Zt=I.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)S.setTexture2DArray(K,0),Zt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);let $t=I.getParameter(I.UNPACK_ROW_LENGTH),be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Pe=I.getParameter(I.UNPACK_SKIP_ROWS),$n=I.getParameter(I.UNPACK_SKIP_IMAGES),ge=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?I.texSubImage3D(Zt,Y,V.x,V.y,V.z,wt,Pt,Ht,Xt,Jt,ge.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Zt,Y,V.x,V.y,V.z,wt,Pt,Ht,Xt,ge.data)):I.texSubImage3D(Zt,Y,V.x,V.y,V.z,wt,Pt,Ht,Xt,Jt,ge),I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$n),Y===0&&K.generateMipmaps&&I.generateMipmap(Zt),j.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,j.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ol?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Qo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ne?Hi:Ju}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Hi?ne:oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Nc=class extends ur{};Nc.prototype.isWebGL1Renderer=!0;var Oo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Oc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new L,Bo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_s,js=new L,ys=new L,vs=new L,Ms=new ct,Qs=new ct,ld=new Ee,ho=new L,tr=new L,uo=new L,Lu=new ct,oc=new ct,Iu=new ct,Fo=class extends We{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Oc(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Bo(i,3,0,!1)),_s.setAttribute("uv",new Bo(i,2,3,!1))}this.geometry=_s,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-vs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;fo(ho.set(-.5,-.5,0),vs,o,ys,s,r),fo(tr.set(.5,-.5,0),vs,o,ys,s,r),fo(uo.set(.5,.5,0),vs,o,ys,s,r),Lu.set(0,0),oc.set(1,0),Iu.set(1,1);let a=t.ray.intersectTriangle(ho,tr,uo,!1,js);if(a===null&&(fo(tr.set(-.5,.5,0),vs,o,ys,s,r),oc.set(0,1),a=t.ray.intersectTriangle(ho,uo,tr,!1,js),a===null))return;let c=t.ray.origin.distanceTo(js);c<t.near||c>t.far||e.push({distance:c,point:js.clone(),uv:Bi.getInterpolation(js,ho,tr,uo,Lu,oc,Iu,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fo(n,t,e,i,s,r){Ms.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Qs.x=r*Ms.x-s*Ms.y,Qs.y=s*Ms.x+r*Ms.y):Qs.copy(Ms),n.copy(t),n.x+=Qs.x,n.y+=Qs.y,n.applyMatrix4(ld)}var ko=class extends tn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Ue,h=Ue,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends tn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:xe,this.magFilter=r!==void 0?r:xe,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var En=class extends tn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new L,s=[],r=[],o=[],a=new L,c=new Ee;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends bn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let i=e||new ct,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bc=class extends fr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cl(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var po=new L,ac=new cl,cc=new cl,lc=new cl,Fc=class extends bn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(po.subVectors(s[0],s[1]).add(s[0]),l=po);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ac.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),cc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),lc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),cc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),lc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(ac.calc(c),cc.calc(c),lc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Du(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function Ky(n,t){let e=1-n;return e*e*t}function Jy(n,t){return 2*(1-n)*n*t}function jy(n,t){return n*n*t}function ir(n,t,e,i){return Ky(n,t)+Jy(n,e)+jy(n,i)}function Qy(n,t){let e=1-n;return e*e*e*t}function tv(n,t){let e=1-n;return 3*e*e*n*t}function ev(n,t){return 3*(1-n)*n*n*t}function nv(n,t){return n*n*n*t}function sr(n,t,e,i,s){return Qy(n,t)+tv(n,e)+ev(n,i)+nv(n,s)}var Ho=class extends bn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sr(t,s.x,r.x,o.x,a.x),sr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kc=class extends bn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sr(t,s.x,r.x,o.x,a.x),sr(t,s.y,r.y,o.y,a.y),sr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zo=class extends bn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hc=class extends bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends bn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ir(t,s.x,r.x,o.x),ir(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ds=class extends bn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ir(t,s.x,r.x,o.x),ir(t,s.y,r.y,o.y),ir(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Du(a,c.x,l.x,h.x,u.x),Du(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Wo=Object.freeze({__proto__:null,ArcCurve:Bc,CatmullRomCurve3:Fc,CubicBezierCurve:Ho,CubicBezierCurve3:kc,EllipseCurve:fr,LineCurve:zo,LineCurve3:Hc,QuadraticBezierCurve:Go,QuadraticBezierCurve3:Ds,SplineCurve:Vo}),zc=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Wo[s.type]().fromJSON(s))}return this}},pr=class extends zc{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new zo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Go(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ho(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Vo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new fr(t,e,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Gc=class n extends Fe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,d=new ct,f=new L,g=new L,x=new L,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=i+y*h*s,M=Math.sin(_),R=Math.cos(_);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),d.x=y/e,d.y=w/(t.length-1),a.push(d.x,d.y);let A=c[3*w+0]*M,D=c[3*w+1],v=c[3*w+0]*R;l.push(A,D,v)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let M=_+y*t.length,R=M,w=M+t.length,A=M+t.length+1,D=M+1;r.push(R,w,D),r.push(A,D,w)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Xo=class n extends Gc{constructor(t=1,e=1,i=4,s=8){let r=new pr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},mr=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bt=class n extends Fe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function y(){let M=new L,R=new L,w=0,A=(e-t)/i;for(let D=0;D<=r;D++){let v=[],b=D/r,C=b*(e-t)+t;for(let N=0;N<=s;N++){let $=N/s,P=$*c+a,O=Math.sin(P),H=Math.cos(P);R.x=C*O,R.y=-b*i+p,R.z=C*H,u.push(R.x,R.y,R.z),M.set(O,A,H).normalize(),d.push(M.x,M.y,M.z),f.push($,1-b),v.push(g++)}x.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){let b=x[v][D],C=x[v+1][D],N=x[v+1][D+1],$=x[v][D+1];h.push(b,C,$),h.push(C,N,$),w+=6}l.addGroup(m,w,0),m+=w}function _(M){let R=g,w=new ct,A=new L,D=0,v=M===!0?t:e,b=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;let C=g;for(let N=0;N<=s;N++){let P=N/s*c+a,O=Math.cos(P),H=Math.sin(P);A.x=v*H,A.y=p*b,A.z=v*O,u.push(A.x,A.y,A.z),d.push(0,b,0),w.x=O*.5+.5,w.y=H*.5*b+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){let $=R+N,P=C+N;M===!0?h.push(P,P+1,$):h.push(P+1,P,$),D+=3}l.addGroup(m,D,M===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ae=class n extends Bt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gr=class extends pr{constructor(t){super(t),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}},iv={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=hd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(i&&(r=cv(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return xr(r,o,e,a,c,f,0),o}};function hd(n,t,e,i,s){let r,o;if(s===yv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Uu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Uu(r,n[r],n[r+1],o);return o&&ea(o,o.next)&&(yr(o),o=o.next),o}function Vi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ea(e,e.next)||ye(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function xr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&fv(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?rv(n,i,s,r):sv(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),yr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ov(Vi(n),t,e),xr(n,t,e,i,s,r,2)):o===2&&av(n,t,e,i,s,r):xr(Vi(n),t,e,i,s,r,1);break}}}function sv(n){let t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(s,a,r,c,o,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rv(n,t,e,i){let s=n.prev,r=n,o=n.next;if(ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=Vc(f,g,t,e,i),y=Vc(x,p,t,e,i),_=n.prevZ,M=n.nextZ;for(;_&&_.z>=m&&M&&M.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ss(a,h,c,u,l,d,_.x,_.y)&&ye(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&ye(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Ss(a,h,c,u,l,d,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&ye(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ov(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ea(s,r)&&ud(s,i,i.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),yr(i),yr(i.next),i=n=r),i=i.next}while(i!==n);return Vi(i)}function av(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gv(o,a)){let c=dd(o,a);o=Vi(o,o.next),c=Vi(c,c.next),xr(o,t,e,i,s,r,0),xr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function cv(n,t,e,i){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=hd(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(mv(l));for(s.sort(lv),r=0;r<s.length;r++)e=hv(s[r],e);return e}function lv(n,t){return n.x-t.x}function hv(n,t){let e=uv(n,t);if(!e)return t;let i=dd(e,n);return Vi(i,i.next),Vi(e,e.next)}function uv(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ss(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),_r(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&dv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function dv(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function fv(n,t,e,i){let s=n;do s.z===0&&(s.z=Vc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pv(s)}function pv(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Vc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function mv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ss(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function gv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xv(n,t)&&(_r(n,t)&&_r(t,n)&&_v(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||ea(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ea(n,t){return n.x===t.x&&n.y===t.y}function ud(n,t,e,i){let s=go(ye(n,t,e)),r=go(ye(n,t,i)),o=go(ye(e,i,n)),a=go(ye(e,i,t));return!!(s!==r&&o!==a||s===0&&mo(n,e,t)||r===0&&mo(n,i,t)||o===0&&mo(e,n,i)||a===0&&mo(e,t,i))}function mo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function go(n){return n>0?1:n<0?-1:0}function xv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ud(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _r(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function _v(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function dd(n,t){let e=new Wc(n.i,n.x,n.y),i=new Wc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Uu(n,t,e,i){let s=new Wc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var rr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Nu(t),Ou(i,t);let o=t.length;e.forEach(Nu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ou(i,e[c]);let a=iv.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Nu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ou(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var qo=class n extends Fe{constructor(t=new gr([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:vv,_,M=!1,R,w,A,D;m&&(_=m.getSpacedPoints(h),M=!0,d=!1,R=m.computeFrenetFrames(h,!1),w=new L,A=new L,D=new L),d||(p=0,f=0,g=0,x=0);let v=a.extractPoints(l),b=v.shape,C=v.holes;if(!rr.isClockWise(b)){b=b.reverse();for(let I=0,lt=C.length;I<lt;I++){let J=C[I];rr.isClockWise(J)&&(C[I]=J.reverse())}}let $=rr.triangulateShape(b,C),P=b;for(let I=0,lt=C.length;I<lt;I++){let J=C[I];b=b.concat(J)}function O(I,lt,J){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(lt,J)}let H=b.length,B=$.length;function q(I,lt,J){let tt,j,Tt,xt=I.x-lt.x,S=I.y-lt.y,E=J.x-I.x,F=J.y-I.y,et=xt*xt+S*S,it=xt*F-S*E;if(Math.abs(it)>Number.EPSILON){let nt=Math.sqrt(et),Mt=Math.sqrt(E*E+F*F),_t=lt.x-S/nt,bt=lt.y+xt/nt,Lt=J.x-F/Mt,qt=J.y+E/Mt,rt=((Lt-_t)*F-(qt-bt)*E)/(xt*F-S*E);tt=_t+xt*rt-I.x,j=bt+S*rt-I.y;let ot=tt*tt+j*j;if(ot<=2)return new ct(tt,j);Tt=Math.sqrt(ot/2)}else{let nt=!1;xt>Number.EPSILON?E>Number.EPSILON&&(nt=!0):xt<-Number.EPSILON?E<-Number.EPSILON&&(nt=!0):Math.sign(S)===Math.sign(F)&&(nt=!0),nt?(tt=-S,j=xt,Tt=Math.sqrt(et)):(tt=xt,j=S,Tt=Math.sqrt(et/2))}return new ct(tt/Tt,j/Tt)}let G=[];for(let I=0,lt=P.length,J=lt-1,tt=I+1;I<lt;I++,J++,tt++)J===lt&&(J=0),tt===lt&&(tt=0),G[I]=q(P[I],P[J],P[tt]);let z=[],k,st=G.concat();for(let I=0,lt=C.length;I<lt;I++){let J=C[I];k=[];for(let tt=0,j=J.length,Tt=j-1,xt=tt+1;tt<j;tt++,Tt++,xt++)Tt===j&&(Tt=0),xt===j&&(xt=0),k[tt]=q(J[tt],J[Tt],J[xt]);z.push(k),st=st.concat(k)}for(let I=0;I<p;I++){let lt=I/p,J=f*Math.cos(lt*Math.PI/2),tt=g*Math.sin(lt*Math.PI/2)+x;for(let j=0,Tt=P.length;j<Tt;j++){let xt=O(P[j],G[j],tt);pt(xt.x,xt.y,-J)}for(let j=0,Tt=C.length;j<Tt;j++){let xt=C[j];k=z[j];for(let S=0,E=xt.length;S<E;S++){let F=O(xt[S],k[S],tt);pt(F.x,F.y,-J)}}}let X=g+x;for(let I=0;I<H;I++){let lt=d?O(b[I],st[I],X):b[I];M?(A.copy(R.normals[0]).multiplyScalar(lt.x),w.copy(R.binormals[0]).multiplyScalar(lt.y),D.copy(_[0]).add(A).add(w),pt(D.x,D.y,D.z)):pt(lt.x,lt.y,0)}for(let I=1;I<=h;I++)for(let lt=0;lt<H;lt++){let J=d?O(b[lt],st[lt],X):b[lt];M?(A.copy(R.normals[I]).multiplyScalar(J.x),w.copy(R.binormals[I]).multiplyScalar(J.y),D.copy(_[I]).add(A).add(w),pt(D.x,D.y,D.z)):pt(J.x,J.y,u/h*I)}for(let I=p-1;I>=0;I--){let lt=I/p,J=f*Math.cos(lt*Math.PI/2),tt=g*Math.sin(lt*Math.PI/2)+x;for(let j=0,Tt=P.length;j<Tt;j++){let xt=O(P[j],G[j],tt);pt(xt.x,xt.y,u+J)}for(let j=0,Tt=C.length;j<Tt;j++){let xt=C[j];k=z[j];for(let S=0,E=xt.length;S<E;S++){let F=O(xt[S],k[S],tt);M?pt(F.x,F.y+_[h-1].y,_[h-1].x+J):pt(F.x,F.y,u+J)}}}Q(),dt();function Q(){let I=s.length/3;if(d){let lt=0,J=H*lt;for(let tt=0;tt<B;tt++){let j=$[tt];Ct(j[2]+J,j[1]+J,j[0]+J)}lt=h+p*2,J=H*lt;for(let tt=0;tt<B;tt++){let j=$[tt];Ct(j[0]+J,j[1]+J,j[2]+J)}}else{for(let lt=0;lt<B;lt++){let J=$[lt];Ct(J[2],J[1],J[0])}for(let lt=0;lt<B;lt++){let J=$[lt];Ct(J[0]+H*h,J[1]+H*h,J[2]+H*h)}}i.addGroup(I,s.length/3-I,0)}function dt(){let I=s.length/3,lt=0;Et(P,lt),lt+=P.length;for(let J=0,tt=C.length;J<tt;J++){let j=C[J];Et(j,lt),lt+=j.length}i.addGroup(I,s.length/3-I,1)}function Et(I,lt){let J=I.length;for(;--J>=0;){let tt=J,j=J-1;j<0&&(j=I.length-1);for(let Tt=0,xt=h+p*2;Tt<xt;Tt++){let S=H*Tt,E=H*(Tt+1),F=lt+tt+S,et=lt+j+S,it=lt+j+E,nt=lt+tt+E;kt(F,et,it,nt)}}}function pt(I,lt,J){c.push(I),c.push(lt),c.push(J)}function Ct(I,lt,J){Rt(I),Rt(lt),Rt(J);let tt=s.length/3,j=y.generateTopUV(i,s,tt-3,tt-2,tt-1);Nt(j[0]),Nt(j[1]),Nt(j[2])}function kt(I,lt,J,tt){Rt(I),Rt(lt),Rt(tt),Rt(lt),Rt(J),Rt(tt);let j=s.length/3,Tt=y.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);Nt(Tt[0]),Nt(Tt[1]),Nt(Tt[3]),Nt(Tt[1]),Nt(Tt[2]),Nt(Tt[3])}function Rt(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function Nt(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Mv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wo[s.type]().fromJSON(s)),new n(i,t.options)}},vv={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-u),new ct(d,1-g),new ct(x,1-m)]:[new ct(a,1-c),new ct(h,1-u),new ct(f,1-g),new ct(p,1-m)]}};function Mv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var jt=class n extends Fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],_=m/i,M=0;m===0&&o===0?M=.5/e:m===i&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(w+M,1-_),y.push(l++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let _=h[m][y+1],M=h[m][y],R=h[m+1][y],w=h[m+1][y+1];(m!==0||o>0)&&f.push(_,M,w),(m!==i-1||c<Math.PI)&&f.push(M,R,w)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ei=class n extends Fe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Yo=class n extends Fe{constructor(t=new Ds(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ct,h=new L,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function x(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),y(),m()}function p(_){h=t.getPointAt(_/e,h);let M=o.normals[_],R=o.binormals[_];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,D=Math.sin(A),v=-Math.cos(A);c.x=v*M.x+D*R.x,c.y=v*M.y+D*R.y,c.z=v*M.z+D*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){let R=(s+1)*(_-1)+(M-1),w=(s+1)*_+(M-1),A=(s+1)*_+M,D=(s+1)*(_-1)+M;g.push(R,w,D),g.push(w,A,D)}}function y(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)l.x=_/e,l.y=M/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Vt=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ev(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Us=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xc=class extends Us{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=t,a=2*e-i;break;case Wh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Vh:o=t,c=2*i-e;break;case Wh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+y*o[l+R]+_*o[c+R]+M*o[u+R];return r}},qc=class extends Us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Yc=class extends Us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xo(e,this.TimeBufferType),this.values=xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xo(t.times,Array),values:xo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yo:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ev(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=vo;var Wi=class extends Un{};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=yo;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Un{};Zc.prototype.ValueTypeName="color";var $c=class extends Un{};$c.prototype.ValueTypeName="number";var Kc=class extends Us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ve.slerpFlat(r,0,o,l-a,o,l,c);return r}},vr=class extends Un{InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.DefaultInterpolation=vo;vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Un{};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=yo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Un{};Jc.prototype.ValueTypeName="vector";var Bu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},jc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},bv=new jc,Mr=class{constructor(t){this.manager=t!==void 0?t:bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qc=class extends Mr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Bu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=cr("img");function c(){h(),Bu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Ns=class extends Mr{constructor(t){super(t)}load(t,e,i,s){let r=new tn,o=new Qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Zo=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},$o=class extends Zo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hc=new Ee,Fu=new L,ku=new L,tl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var el=class extends tl{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new el}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Hu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Hu(){return(typeof performance>"u"?Date:performance).now()}var ll="\\[\\]\\.:\\/",Sv=new RegExp("["+ll+"]","g"),hl="[^"+ll+"]",wv="[^"+ll.replace("\\.","")+"]",Tv=/((?:WC+[\/:])*)/.source.replace("WC",hl),Av=/(WCOD+)?/.source.replace("WCOD",wv),Rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),Cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),Pv=new RegExp("^"+Tv+Av+Rv+Cv+"$"),Lv=["material","materials","bones","map"],nl=class{constructor(t,e,i){let s=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(t){let e=Pv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Lv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=nl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var fd="#0b1210";function pd(){document.documentElement.style.height="100vh",document.body.style.height="100vh",document.documentElement.style.background=fd,document.body.style.background=fd,document.body.style.margin="0",document.body.style.overflow="hidden",document.body.style.touchAction="none",document.body.style.userSelect="none",document.body.style.webkitUserSelect="none"}function md(){let n=document.createElement("div");n.setAttribute("aria-hidden","true"),n.style.cssText="position:fixed;pointer-events:none;visibility:hidden;top:0;left:0;right:0;bottom:0;padding-top:env(safe-area-inset-top);padding-right:env(safe-area-inset-right);padding-bottom:env(safe-area-inset-bottom);padding-left:env(safe-area-inset-left);",document.body.appendChild(n);let t=()=>{let i=getComputedStyle(n);return{top:parseFloat(i.paddingTop)||0,right:parseFloat(i.paddingRight)||0,bottom:parseFloat(i.paddingBottom)||0,left:parseFloat(i.paddingLeft)||0}},e=()=>{t(),setTimeout(t,100),setTimeout(t,500),setTimeout(t,1e3)};return e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",()=>setTimeout(e,300)),{read:t,el:n}}function gd(n,t){let e=Math.min(window.devicePixelRatio||1,2),i=Math.max(1,window.innerWidth),s=Math.max(1,window.innerHeight);return t.style.width=`${i}px`,t.style.height=`${s}px`,n.setPixelRatio(e),n.setSize(i,s,!1),{w:i,h:s,dpr:e}}function xd(){let t=e=>{if(e.touches.length!==1)return;let i=e.touches[0].clientX;(i<24||i>window.innerWidth-24)&&e.preventDefault()};document.addEventListener("touchstart",t,{passive:!1})}var _d="#0b1210",na=class{constructor(t){this.onStart=t.onStart,this.root=document.createElement("div"),this.root.id="poster-root",this.root.setAttribute("role","button"),this.root.setAttribute("aria-label","Play AUS101"),this.root.tabIndex=0,Object.assign(this.root.style,{position:"fixed",inset:"0",zIndex:"20",background:_d,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",opacity:"1",transition:"opacity 400ms ease",touchAction:"none",userSelect:"none",webkitUserSelect:"none"}),this.img=document.createElement("img"),this.img.src="assets/poster/og.webp",this.img.alt="AUS101",this.img.decoding="async",this.img.fetchPriority="high",Object.assign(this.img.style,{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",background:_d,pointerEvents:"none"}),this.logo=document.createElement("div"),this.logo.textContent="AUS101",Object.assign(this.logo.style,{position:"absolute",top:"max(4%, env(safe-area-inset-top, 0px))",left:"10%",right:"10%",textAlign:"center",fontFamily:'Impact, "Arial Black", Haettenschweiler, sans-serif',fontSize:"clamp(48px, 18vw, 140px)",lineHeight:"0.95",letterSpacing:"0.04em",color:"#f4f7fb",textShadow:"0 2px 0 #0b1210, 0 0 24px rgba(0,0,0,0.55)",pointerEvents:"none",zIndex:"2"}),this.tag=document.createElement("div"),this.tag.textContent="TERMINATE UV",Object.assign(this.tag.style,{position:"absolute",top:"calc(max(4%, env(safe-area-inset-top, 0px)) + clamp(52px, 19vw, 150px))",left:"10%",right:"10%",textAlign:"center",fontFamily:'Impact, "Arial Black", Haettenschweiler, sans-serif',fontSize:"clamp(16px, 4.5vw, 36px)",letterSpacing:"0.18em",color:"#ffb040",textShadow:"0 1px 0 #0b1210",pointerEvents:"none",zIndex:"2"}),this.play=document.createElement("div"),this.play.setAttribute("aria-hidden","true"),Object.assign(this.play.style,{position:"absolute",left:"50%",top:"72%",width:"0",height:"0",transform:"translate(-30%, -50%)",borderStyle:"solid",borderWidth:"clamp(28px, 8vw, 56px) 0 clamp(28px, 8vw, 56px) clamp(48px, 14vw, 96px)",borderColor:"transparent transparent transparent rgba(255,255,255,0.45)",filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.45))",pointerEvents:"none",zIndex:"3"}),this.root.append(this.img,this.logo,this.tag,this.play),document.body.appendChild(this.root),this._started=!1,this._onPointer=e=>{e.preventDefault(),this.start()},this._onKey=e=>{(e.code==="Enter"||e.code==="Space")&&(e.preventDefault(),this.start())},this.root.addEventListener("pointerdown",this._onPointer,{passive:!1}),this.root.addEventListener("keydown",this._onKey)}get visible(){return this.root.style.display!=="none"&&this.root.style.opacity!=="0"}start(){this._started||(this._started=!0,this.root.style.opacity="0",this.root.style.pointerEvents="none",window.setTimeout(()=>{this.root.style.display="none"},420),this.onStart())}showAsPause(){this._started=!1,this.root.style.display="flex",requestAnimationFrame(()=>{this.root.style.opacity="1",this.root.style.pointerEvents="auto"})}};var yd=[{src:"assets/media/cutscene/s1_bunker_bay.jpg",hold:2200},{src:"assets/media/cutscene/s2_captured_units.jpg",hold:2400},{src:"assets/media/cutscene/s3_what_now.jpg",hold:2200},{src:"assets/media/cutscene/s4_i_can_use_them.jpg",hold:2600},{src:"assets/media/cutscene/s5_psa_apply.jpg",hold:2400}],ia=class{constructor({onDone:t}){this.onDone=t,this.root=document.createElement("div"),Object.assign(this.root.style,{position:"fixed",inset:"0",zIndex:"25",background:"#0b1210",display:"none",alignItems:"center",justifyContent:"center"}),this.img=document.createElement("img"),Object.assign(this.img.style,{width:"100%",height:"100%",objectFit:"cover"}),this.root.appendChild(this.img),document.body.appendChild(this.root),this._i=0,this._timer=0,this._stills=yd,this._done=!1,this.root.addEventListener("pointerdown",()=>this.finish())}get playing(){return this.root.style.display==="flex"}start(t){this._stills=t&&t.length?t:yd,this._i=0,this._done=!1,this.root.style.display="flex",this.show()}show(){let t=this._stills[this._i];if(!t){this.finish();return}this.img.src=t.src,clearTimeout(this._timer),this._timer=setTimeout(()=>{this._i+=1,this.show()},t.hold)}finish(){this._done||(this._done=!0,clearTimeout(this._timer),this.root.style.display="none",this.onDone?.())}};var sa=class{constructor(){this.manifest=null,this.byId=new Map,this.ctx=null,this.lru=new Map,this.maxLru=16,this.gain=null,this.busy=!1,this.gen=0}async loadManifest(){let t=await fetch("assets/voice/manifest.json");this.manifest=await t.json(),this.byId.clear();for(let e of this.manifest.lines||[])this.byId.set(e.id,e);return this.manifest}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.gain.value=.5,this.gain.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx}async decode(t){if(this.lru.has(t)){let o=this.lru.get(t);return this.lru.delete(t),this.lru.set(t,o),o}let e=this.byId.get(t);if(!e)throw new Error(`Unknown VO id: ${t}`);let s=await(await fetch(`assets/voice/${e.file}`)).arrayBuffer(),r=await this.ctx.decodeAudioData(s.slice(0));for(this.lru.set(t,r);this.lru.size>this.maxLru;){let o=this.lru.keys().next().value;this.lru.delete(o)}return r}async preload(t){await this.unlock();for(let e of t)try{await this.decode(e)}catch{}}play(t,{when:e=0,gain:i=1}={}){let s={src:null,g:null,duration:0,started:!1,setGain(o){this.g&&this.g.context&&this.g.gain.setTargetAtTime(o,this.g.context.currentTime,.04)},fadeOut(o=.08){if(!this.g)return;let a=this.g.context.currentTime;this.g.gain.cancelScheduledValues(a),this.g.gain.setValueAtTime(Math.max(this.g.gain.value,1e-4),a),this.g.gain.linearRampToValueAtTime(1e-4,a+o);try{this.src?.stop(a+o+.02)}catch{}},stop(){try{this.src?.stop()}catch{}}};if(this.busy)return s.ready=Promise.resolve(!1),s;this.busy=!0;let r=++this.gen;return s.ready=this.unlock().then(()=>this.decode(t)).then(o=>{if(r!==this.gen)return!1;let a=this.ctx.createBufferSource();a.buffer=o;let c=this.ctx.createGain();return c.gain.value=i,a.connect(c),c.connect(this.gain),a.start(this.ctx.currentTime+e),s.src=a,s.g=c,s.duration=o.duration*1e3,s.started=!0,a.onended=()=>{s.onended&&s.onended()},!0}).catch(()=>!1).finally(()=>{this.busy=!1}),s}};var Hn="assets/sfx/foley",Er={squeeze:[`${Hn}/lotion_squeeze.mp3`,`${Hn}/lotion_squeeze_02.mp3`],cap:[`${Hn}/lotion_cap.mp3`],slap:[`${Hn}/lotion_slap.mp3`,`${Hn}/lotion_slap_02.mp3`],lather:[`${Hn}/lotion_lather.mp3`,`${Hn}/lotion_lather_02.mp3`],spread:[`${Hn}/lotion_spread.mp3`,`${Hn}/lotion_spread_02.mp3`],wet:[`${Hn}/lotion_wet.mp3`]},ra=class{constructor(){this.ctx=null,this.master=null,this.cache=new Map,this._i=0}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.85,this.master.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&await this.ctx.resume(),this.ctx}async decode(t){if(this.cache.has(t))return this.cache.get(t);let i=await(await fetch(t)).arrayBuffer(),s=await this.ctx.decodeAudioData(i.slice(0));return this.cache.set(t,s),s}pick(t){return this._i=(this._i+1)%997,t[this._i%t.length]}async play(t,{gain:e=1,rate:i=1,when:s=0}={}){await this.unlock();let r=Array.isArray(t)?this.pick(t):t,o=await this.decode(r),a=this.ctx.createBufferSource();a.buffer=o,a.playbackRate.value=i;let c=this.ctx.createGain();return c.gain.value=e,a.connect(c),c.connect(this.master),a.start(this.ctx.currentTime+s),a}squeeze(){return this.play(Er.squeeze,{gain:.7,rate:1.18})}slap(){return this.play(Er.slap,{gain:.9,rate:.95+Math.random()*.12})}lather(){return this.play(Er.lather,{gain:.75,rate:.9+Math.random()*.2})}spread(){return this.play(Er.spread,{gain:.65,rate:.85+Math.random()*.3})}wet(){return this.play(Er.wet,{gain:.35,rate:1.1})}};function vd(n,t){let e=!1,i=!1,s=0,r=0;return addEventListener("keydown",o=>{o.code==="Space"&&(e||(e=!0,i=!1,n.squeeze().catch(()=>{}),setTimeout(()=>{e&&(i=!0,n.slap().catch(()=>{}),n.lather().catch(()=>{}))},180)))}),addEventListener("keyup",o=>{o.code==="Space"&&(e=!1)}),{tick(o,a){!e||!i||(o-r>420&&(r=o,n.lather().catch(()=>{})),a&&o-s>160&&(s=o,n.spread().catch(()=>{})))}}}var qi={menu:[.22,.16,0,.3,380],boardwalk:[.55,.2,.32,.42,640],apply:[.28,.12,.16,.36,980]},Yi=n=>440*2**((n-69)/12);function Zi(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function nn(n,t){let e=n.createGain();return e.gain.value=t,e}function oa(n,t,e,i){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,i!=null&&(s.Q.value=i),s}function bi(n,t,e,i){n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(t,i+e)}function Iv(n,t,e){let i=nn(n,.6);t.connect(i),i.connect(e);let s=Zi(n,"sine",.6),r=nn(n,.002);s.connect(r);let o=n.createChannelMerger(2);for(let a=0;a<2;a++){let c=n.createDelay(.03);c.delayTime.value=.01;let l=nn(n,.4),h=nn(n,a?-1:1);t.connect(c),c.connect(l),l.connect(o,0,a),r.connect(h),h.connect(c.delayTime)}return o.connect(e),s}function Md(n,t){let e=nn(n,0);e.connect(t||n.destination);let i=nn(n,qi.menu[0]),s=nn(n,qi.menu[1]),r=nn(n,0),o=nn(n,0);i.connect(e),s.connect(e),r.connect(e),o.connect(e);let a=Zi(n,"sawtooth",Yi(26)),c=Zi(n,"square",Yi(26));a.detune.value=3,c.detune.value=-4;let l=nn(n,.4),h=nn(n,1e-4),u=oa(n,"lowpass",qi.menu[4],2.2);a.connect(h),c.connect(l).connect(h),h.connect(u).connect(i);let d=Zi(n,"sawtooth",Yi(50)),f=Zi(n,"sawtooth",Yi(57));d.detune.value=3,f.detune.value=-3;let g=nn(n,.08),x=oa(n,"lowpass",720,.7),p=nn(n,1);x.connect(p),d.connect(g),f.connect(g),g.connect(x);let m=Iv(n,p,s),y=Zi(n,"sawtooth",Yi(74)),_=Zi(n,"sawtooth",Yi(81));y.detune.value=5;let M=oa(n,"highpass",400,.5);y.connect(M),_.connect(M).connect(o);let R=n.sampleRate*.05|0,w=n.createBuffer(1,R,n.sampleRate),A=w.getChannelData(0);for(let z=0;z<R;z++)A[z]=Math.random()*2-1;let D="menu",v=!1,b=!1,C=0,N=0,$=0,P=[a,c,d,f,m,y,_];function O(z,k){let st=n.createBufferSource();st.buffer=w;let X=oa(n,"bandpass",k?130:2350,k?3.5:9),Q=nn(n,1e-4);Q.gain.setValueAtTime(1e-4,z),Q.gain.exponentialRampToValueAtTime(k?.4:.26,z+.004),Q.gain.exponentialRampToValueAtTime(1e-4,z+(k?.16:.04)),st.connect(X).connect(Q).connect(r),st.start(z),st.stop(z+.2)}function H(z){let k=n.currentTime;o.gain.cancelScheduledValues(k),z?(o.gain.setValueAtTime(1e-4,k),o.gain.linearRampToValueAtTime(.2,k+.9)):o.gain.setValueAtTime(0,k)}function B(z,k){let st=k>>3&15,X=k&7,Q=Yi(st>=8?38:26);a.frequency.setValueAtTime(Q,z),c.frequency.setValueAtTime(Q*.9977,z);let dt=X&1;if(h.gain.cancelScheduledValues(z),h.gain.setValueAtTime(1e-4,z),h.gain.exponentialRampToValueAtTime(dt?.14:.55,z+.012),h.gain.exponentialRampToValueAtTime(1e-4,z+(dt?.07:.13)),!dt){let pt=qi[D][4];u.frequency.setValueAtTime(pt+180,z),u.frequency.setTargetAtTime(pt,z+.02,.06)}(X===2||X===6)&&O(z,0),X===0&&O(z,0),st===14&&X>=4&&O(z,1);let Et=X===0||X===4?1:.15;p.gain.setValueAtTime(p.gain.value,z),p.gain.linearRampToValueAtTime(Et,z+.08),p.gain.linearRampToValueAtTime(.12,z+.42)}function q(){if(!v)return;let z=n.currentTime+.12,k=30/112;for(;N<z;)B(N,$++),N+=k;C=setTimeout(q,35)}function G(z){let k=qi[D],st=n.currentTime;bi(i.gain,k[0],z,st),bi(s.gain,k[1],z,st),bi(r.gain,k[2],z,st),bi(e.gain,v?k[3]:0,z,st),bi(u.frequency,k[4],z,st),bi(x.frequency,D==="apply"?1400:880,z*1.2,st)}return{output:e,start(){n.state==="suspended"&&n.resume();let z=n.currentTime;if(!b){for(let k of P)k.start(z);b=!0}v||(v=!0,$=0,N=z+.06,G(.08),D==="apply"&&H(!0),q())},stop(){v=!1,clearTimeout(C),bi(e.gain,0,.08,n.currentTime)},setState(z){if(!qi[z])return;let k=D;D=z,G(.45),z==="apply"&&k!=="apply"?H(!0):z!=="apply"&&k==="apply"&&H(!1)},get state(){return D},get running(){return v},setMix(z,k=.45){let st=n.currentTime,X=qi[D];bi(e.gain,v?X[3]*Math.max(0,Math.min(1,z)):0,k,st)}}}function Dv(n,t){let e=n.sampleRate*t|0,i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0),r=0;for(let o=0;o<e;o++)r=(r+.02*(Math.random()*2-1))/1.02,s[o]=r*3.2;return i}function Ed(n,t){let e=n.createBufferSource();e.buffer=Dv(n,3),e.loop=!0;let i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=.7;let s=n.createOscillator();s.type="sine",s.frequency.value=.07;let r=n.createGain();r.gain.value=90,s.connect(r),r.connect(i.frequency);let o=n.createGain();o.gain.value=0,e.connect(i),i.connect(o),o.connect(t||n.destination);let a=!1;function c(l,h){let u=n.currentTime;o.gain.cancelScheduledValues(u),o.gain.setValueAtTime(o.gain.value,u),o.gain.linearRampToValueAtTime(l,u+h)}return{output:o,start(){n.state==="suspended"&&n.resume(),a||(e.start(),s.start(),a=!0),c(.158,.6)},stop(){c(0,.4)},setGain(l,h=.08){c(l,h)}}}var ul="assets/sfx/foley",bd=[`${ul}/step_sand_01.mp3`,`${ul}/step_sand_02.mp3`],Sd=[`${ul}/step_wood_01.mp3`],Uv=1.9,Nv=.45,wd=[Math.PI/4,3*Math.PI/4];function Td(n){return n?n.ctx?n.ctx:typeof n.decodeAudioData=="function"?n:null:null}function Ov(n,t){return n&&n.master?n.master:t?t.destination:null}function Ad(n,t,e,i){let s=e?.09:.12,r=Math.max(32,Math.floor(n.sampleRate*s)),o=n.createBuffer(1,r,n.sampleRate),a=o.getChannelData(0),c=e?2.4:1.45;for(let d=0;d<r;d++)a[d]=(Math.random()*2-1)*Math.pow(1-d/r,c);let l=n.createBufferSource();l.buffer=o,l.playbackRate.value=i;let h=n.createBiquadFilter();h.type=e?"lowpass":"bandpass",h.frequency.value=e?380:640,h.Q.value=e?.65:1.05;let u=n.createGain();u.gain.value=e?.128:.104,l.connect(h),h.connect(u),u.connect(t),l.start(n.currentTime)}function Bv(n,t,e,i,s){let r=n.createBufferSource();r.buffer=e,r.playbackRate.value=s;let o=n.createGain();o.gain.value=i,r.connect(o),o.connect(t),r.start(n.currentTime)}function Fv(n,t){let e=(n%Math.PI+Math.PI)%Math.PI,i=(t%Math.PI+Math.PI)%Math.PI,s=t>n&&i<e;for(let r=0;r<wd.length;r++){let o=wd[r];if(s){if(e<o||i>=o)return!0}else if(e<o&&i>=o)return!0}return!1}function Rd(n){let t=n&&typeof n.play=="function"?n:null,e={sand:[],wood:[]},i=!1,s=null,r=!1,o=-1,a=0,c=()=>s||(s=(async()=>{if(t&&typeof t.unlock=="function")try{await t.unlock()}catch{}let h=Td(n);if(!h&&!t){r=!0;return}let u=async d=>{if(t&&typeof t.decode=="function")return t.decode(d);let f=await fetch(d);if(!f.ok)throw new Error(d);let g=await f.arrayBuffer();return h.decodeAudioData(g.slice(0))};try{e.sand=await Promise.all(bd.map(u)),e.wood=await Promise.all(Sd.map(u)),i=e.sand.length>0}catch{i=!1}finally{r=!0}})(),s),l=(h,u)=>{let d=(.93+Math.random()*.16)*(u>5.4?1.06:1),f=Td(n),g=Ov(n,f),x=h?Sd:bd,p=h?.168:.248;if(t){t.play(x,{gain:p,rate:d}).catch(()=>{r&&f&&g&&Ad(f,g,h,d)});return}if(f&&g&&i){let m=h?e.wood:e.sand,y=Math.floor(Math.random()*m.length);m.length>1&&y===o&&!h&&(y=(y+1)%m.length),h||(o=y);let _=m[y];if(_){Bv(f,g,_,h?.168:.248,d);return}}r&&f&&g&&Ad(f,g,h,d)};return{tick({speed:h=0,onWood:u=!1,dt:d=0}={}){c();let f=Math.max(0,h);if(f<Nv){a=0;return}let g=a;a+=f*Math.max(0,d)*Uv,Fv(g,a)&&l(!!u,f)}}}var pn=1/60;function Pd(n={x:0,y:0,z:8}){return{pos:new L(n.x,n.y,n.z),vel:new L,yaw:0,pitch:-.05,radius:.34,eye:1.65,bob:0,step:0,_tx:null,_ty:null}}function Ld(){let n=[];return{COL:n,addCollider:(e,i,s,r)=>n.push({minX:e,maxX:i,minZ:s,maxZ:r})}}function Cd(n,t,e,i){for(let s of n)if(t>s.minX-i&&t<s.maxX+i&&e>s.minZ-i&&e<s.maxZ+i)return s;return null}function Id({dom:n,isPlaying:t,onEscapePause:e}){let i=Object.create(null),s=!1,r=!1,o=!1,a=()=>{if(t())try{n.requestPointerLock?.()}catch{}};document.addEventListener("pointerlockchange",()=>{s=document.pointerLockElement===n,o&&!s&&t()&&e?.(),o=s}),document.addEventListener("mousemove",l=>{t()});let c={player:null};return document.addEventListener("mousemove",l=>{let h=c.player;!h||!t()||(s||r)&&(h.yaw-=l.movementX*.0022,h.pitch-=l.movementY*.0022,h.pitch=Math.max(-1.45,Math.min(1.45,h.pitch)))}),n.addEventListener("mousedown",()=>{t()&&(r=!0,s||a())}),addEventListener("mouseup",()=>{r=!1}),n.addEventListener("touchmove",l=>{let h=c.player;if(!h||!t())return;let u=l.touches[0];u&&(h._tx!=null&&(h.yaw-=(u.clientX-h._tx)*.005,h.pitch-=(u.clientY-h._ty)*.005,h.pitch=Math.max(-1.45,Math.min(1.45,h.pitch))),h._tx=u.clientX,h._ty=u.clientY,l.preventDefault())},{passive:!1}),addEventListener("touchend",()=>{c.player&&(c.player._tx=null)}),addEventListener("keydown",l=>{i[l.code]=!0,l.code==="Escape"&&t()&&e?.(),(l.code==="Space"||l.code==="Tab"||l.code.indexOf("Arrow")===0)&&l.preventDefault()}),addEventListener("keyup",l=>{i[l.code]=!1}),{keys:i,tryLock:a,bindPlayer(l){c.player=l},get locked(){return s}}}function Dd(n,t,e,i,s){let r=(t.KeyW||t.ArrowUp?1:0)-(t.KeyS||t.ArrowDown?1:0),o=(t.KeyD||t.ArrowRight?1:0)-(t.KeyA||t.ArrowLeft?1:0),c=t.ShiftLeft||t.ShiftRight?6.4:3.4,l=Math.sin(n.yaw),h=Math.cos(n.yaw),u=o*h-r*l,d=-r*h-o*l,f=Math.hypot(u,d);f>0&&(u/=f,d/=f);let g=f>0?12:10;n.vel.x+=(u*c-n.vel.x)*Math.min(1,g*s),n.vel.z+=(d*c-n.vel.z)*Math.min(1,g*s);let x=n.radius,p=n.pos.x+n.vel.x*s,m=Cd(e,p,n.pos.z,x);m&&(p=n.vel.x>0?m.minX-x:m.maxX+x,n.vel.x=0),n.pos.x=p;let y=n.pos.z+n.vel.z*s;m=Cd(e,n.pos.x,y,x),m&&(y=n.vel.z>0?m.minZ-x:m.maxZ+x,n.vel.z=0),n.pos.z=y,n.pos.x=Math.max(i.minX,Math.min(i.maxX,n.pos.x)),n.pos.z=Math.max(i.minZ,Math.min(i.maxZ,n.pos.z));let _=Math.hypot(n.vel.x,n.vel.z);n.step+=_*s*1.9,n.bob=Math.sin(n.step*2)*.035*Math.min(1,_/3)}var fl=4.2,Nd=2.1,Od=1.3,kv=8,Hv=-.36,zv=.28,dl=new L,Ud=new L,aa={ready:!1};function Bd(){return aa.ready=!1,{offset:new L(0,Nd,fl),chest:Od,snap(){aa.ready=!1}}}function Fd(n,t,e){let i=Math.max(Hv,Math.min(zv,t.pitch*.42)),s=Math.cos(i),r=Math.sin(i),o=Math.sin(t.yaw),a=Math.cos(t.yaw),c=fl*s,l=Math.max(.88,Nd-fl*r);if(dl.set(t.pos.x+c*o,t.pos.y+l+(t.bob||0)*.2,t.pos.z+c*a),!aa.ready)n.position.copy(dl),aa.ready=!0;else{let h=Math.min(1,kv*Math.max(0,e));n.position.lerp(dl,h)}Ud.set(t.pos.x,t.pos.y+Od+r*.5,t.pos.z),n.lookAt(Ud)}var sn={x:0,y:0,mag:0},Sn={x:0,y:0,mag:0},pl={w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1},ml=!1,De=null;function Gd(){let n=t=>typeof matchMedia=="function"?matchMedia(t).matches:!1;return typeof matchMedia!="function"?"ontouchstart"in window:!!(n("(pointer: coarse)")||n("(any-pointer: coarse)")||"ontouchstart"in window&&n("(hover: none)"))}function Vd(n,t,e){sn.x=n,sn.y=t,sn.mag=e}function gl(n){n.analogX=sn.x,n.analogY=sn.y,n.analogMag=sn.mag}function wn(n,t,e,i){i?(n[t]=!0,pl[e]=!0):pl[e]&&(n[t]=!1,pl[e]=!1)}function Gv(n){let t=sn.mag>.3;wn(n,"KeyW","w",t&&sn.y>.3),wn(n,"KeyS","s",t&&sn.y<-.3),wn(n,"KeyA","a",t&&sn.x<-.3),wn(n,"KeyD","d",t&&sn.x>.3),gl(n)}function kd(n){Vd(0,0,0),wn(n,"KeyW","w",!1),wn(n,"KeyS","s",!1),wn(n,"KeyA","a",!1),wn(n,"KeyD","d",!1),gl(n)}function Nn(n,t,e){let i=document.createElement(n);return Object.assign(i.style,t),e&&e.appendChild(i),i}function Hd(n,t,e,i){let s=Nn("div",{width:`${t}px`,height:`${t}px`,borderRadius:"50%",background:"rgba(12,18,16,0.38)",border:"1px solid rgba(251,246,234,0.28)",boxShadow:"0 4px 18px rgba(0,0,0,0.28)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",touchAction:"none",webkitUserSelect:"none",userSelect:"none",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"},n);s.appendChild(e);let r=null,o=c=>{r==null&&(r=c.pointerId,s.setPointerCapture?.(c.pointerId),s.style.background="rgba(255,215,106,0.28)",i(!0),c.preventDefault(),c.stopPropagation())},a=c=>{r==null||c.pointerId!=null&&c.pointerId!==r||(r=null,s.style.background="rgba(12,18,16,0.38)",i(!1),c.preventDefault(),c.stopPropagation())};return s.addEventListener("pointerdown",o),s.addEventListener("pointerup",a),s.addEventListener("pointercancel",a),s.addEventListener("lostpointercapture",a),s}function Vv(){return Nn("div",{width:"15px",height:"15px",background:"rgba(251,246,234,0.88)",borderRadius:"0 70% 70% 70%",transform:"rotate(45deg)",marginTop:"-2px"})}function Wv(){return Nn("div",{width:"11px",height:"11px",borderRadius:"50%",background:"rgba(255,215,106,0.9)"})}function zd(n,t,e,i,s,r){let o=null,a=l=>{let h=t.getBoundingClientRect(),u=h.left+h.width/2,d=h.top+h.height/2,f=l.clientX-u,g=l.clientY-d,x=Math.hypot(f,g),p=Math.min(1,x/i),m=x>0?f/x*p:0,y=x>0?-g/x*p:0;s(m,y,p),e.style.transform=`translate(${m*i}px, ${-y*i}px)`};n.addEventListener("pointerdown",l=>{o==null&&(o=l.pointerId,n.setPointerCapture?.(l.pointerId),a(l),l.preventDefault(),l.stopPropagation())}),n.addEventListener("pointermove",l=>{l.pointerId===o&&(a(l),l.preventDefault(),l.stopPropagation())});let c=l=>{o==null||l.pointerId!=null&&l.pointerId!==o||(o=null,r(),e.style.transform="translate(0px, 0px)",l.preventDefault(),l.stopPropagation())};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c),n.addEventListener("lostpointercapture",c)}function Xv(n,t){if(De)return De;let e=document.createElement("style");e.id="aus101-touch-css",e.textContent="#aus101-touch,#aus101-touch *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}",document.head.appendChild(e),De=Nn("div",{position:"fixed",inset:"0",zIndex:"15",pointerEvents:"none",touchAction:"none",userSelect:"none",webkitUserSelect:"none"}),De.id="aus101-touch",De.setAttribute("aria-hidden","true");let i=Nn("div",{position:"absolute",left:"max(18px, env(safe-area-inset-left))",bottom:"max(18px, env(safe-area-inset-bottom))",width:"132px",height:"132px",pointerEvents:"auto"},De),s=Nn("div",{position:"absolute",inset:"0",borderRadius:"50%",background:"rgba(12,18,16,0.34)",border:"1px solid rgba(251,246,234,0.22)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.18), 0 6px 22px rgba(0,0,0,0.25)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"},i),r=Nn("div",{position:"absolute",width:"58px",height:"58px",left:"50%",top:"50%",marginLeft:`${-58/2}px`,marginTop:`${-58/2}px`,borderRadius:"50%",background:"rgba(251,246,234,0.34)",border:"1px solid rgba(251,246,234,0.4)",boxShadow:"0 2px 10px rgba(0,0,0,0.3)",pointerEvents:"none"},i),o=74*.5;zd(i,s,r,o,(g,x,p)=>{t()&&(Vd(g,x,p),Gv(n))},()=>kd(n));let a=Nn("div",{position:"absolute",right:"max(16px, env(safe-area-inset-right))",bottom:"max(16px, env(safe-area-inset-bottom))",width:"96px",height:"96px",pointerEvents:"auto"},De),c=Nn("div",{position:"absolute",inset:"0",borderRadius:"50%",background:"rgba(12,18,16,0.30)",border:"1px solid rgba(251,246,234,0.18)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.22)",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)"},a),l=Nn("div",{position:"absolute",width:"42px",height:"42px",left:"50%",top:"50%",marginLeft:`${-42/2}px`,marginTop:`${-42/2}px`,borderRadius:"50%",background:"rgba(255,215,106,0.28)",border:"1px solid rgba(255,215,106,0.45)",boxShadow:"0 2px 8px rgba(0,0,0,0.28)",pointerEvents:"none"},a),h=54*.5;zd(a,c,l,h,(g,x,p)=>{t()&&(Sn.x=g,Sn.y=x,Sn.mag=p)},()=>{Sn.x=0,Sn.y=0,Sn.mag=0});let u=Nn("div",{position:"absolute",right:"max(16px, env(safe-area-inset-right))",bottom:"max(126px, calc(env(safe-area-inset-bottom) + 108px))",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",pointerEvents:"none"},De);Hd(u,56,Wv(),g=>{wn(n,"ShiftLeft","shift",g)}),Hd(u,62,Vv(),g=>{wn(n,"Space","space",g)}),document.body.appendChild(De);let d=()=>{let g=Gd()&&t();De.style.display=g?"block":"none",g||(kd(n),wn(n,"Space","space",!1),wn(n,"ShiftLeft","shift",!1),Sn.x=Sn.y=Sn.mag=0)},f=()=>{De&&(d(),requestAnimationFrame(f))};return requestAnimationFrame(f),typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").addEventListener?.("change",d),De}function Wd({keys:n,isPlaying:t}){return!n||typeof t!="function"?{getStick:ca}:(gl(n),Gd()?ml&&De?{getStick:ca,root:De}:(ml=!0,Xv(n,t),{getStick:ca,root:De}):(De&&(De.style.display="none"),ml=!0,{getStick:ca,root:De}))}function ca(){return{x:sn.x,y:sn.y,mag:sn.mag}}function Xd(){return{x:Sn.x,y:Sn.y,mag:Sn.mag}}var xl=n=>440*2**((n-69)/12);function la(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function br(n,t){let e=n.createGain();return e.gain.value=t,e}function qv(n){let t=n.sampleRate*2.4|0,e=n.createBuffer(2,t,n.sampleRate);for(let i=0;i<2;i++){let s=e.getChannelData(i);for(let r=0;r<t;r++)s[r]=(Math.random()*2-1)*Math.pow(1-r/t,2.1)}return e}function qd(n,t){let e=br(n,0);e.connect(t||n.destination);let i=n.createBuffer(1,n.sampleRate,n.sampleRate),s=i.getChannelData(0);for(let _=0;_<s.length;_++)s[_]=(Math.random()*2-1)*.08;let r=n.createBufferSource();r.buffer=i,r.loop=!0;let o=br(n,.04);r.connect(o).connect(e);let a=la(n,"sine",xl(50)),c=la(n,"triangle",xl(57));a.detune.value=6,c.detune.value=-8;let l=br(n,.11),h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=520,a.connect(l),c.connect(l),l.connect(h);let u=n.createConvolver();u.buffer=qv(n),h.connect(u).connect(e);let d=la(n,"sine",.07),f=br(n,80);d.connect(f).connect(h.frequency);let g=!1,x=!1,p=0;function m(_){let M=[62,64,69,57,50],R=xl(M[Math.random()*M.length|0]),w=la(n,"sine",R),A=br(n,1e-4);A.gain.setValueAtTime(1e-4,_),A.gain.exponentialRampToValueAtTime(.12,_+.03),A.gain.exponentialRampToValueAtTime(1e-4,_+2.4),w.connect(A).connect(u),w.start(_),w.stop(_+2.6)}function y(){x&&(m(n.currentTime+.05),p=setTimeout(y,2800+Math.random()*2200))}return{start(){n.state==="suspended"&&n.resume(),g||(r.start(),a.start(),c.start(),d.start(),g=!0),x=!0,y()},setMix(_,M=1.2){let R=n.currentTime;e.gain.cancelScheduledValues(R),e.gain.setValueAtTime(e.gain.value,R),e.gain.linearRampToValueAtTime(Math.max(0,Math.min(1,_))*.55,R+M)},stop(){x=!1,clearTimeout(p),this.setMix(0,.6)}}}function zn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function Tn(n,t=!0){let e=new En(n);return e.colorSpace=ne,t&&(e.wrapS=e.wrapT=yi),e.needsUpdate=!0,e}function Yd(n,t,e){let i=n.clone();return i.wrapS=i.wrapT=yi,i.repeat.set(t,e),i.needsUpdate=!0,i.colorSpace=ne,i}function ht(n,t){return new Vt(Object.assign({color:n,roughness:.92,metalness:0},t||{}))}function Wt(n,t,e,i){let s=new W(new It(n,t,e),i);return s.castShadow=!0,s.receiveShadow=!0,s}function Yv(){let n=zn(256,64),t=n.getContext("2d");t.fillStyle="#a9682f",t.fillRect(0,0,256,64);for(let e=0;e<70;e++){let i=Math.random()*64,s=20+Math.random()*60;t.fillStyle=["#8f561f","#b9762f","#c2853f","#965a27","#a96a30"][e%5],t.fillRect(Math.random()*256,i,s,2+Math.random()*4)}return Tn(n)}function _l(){let n=zn(256,256),t=n.getContext("2d");t.fillStyle="#ddc486",t.fillRect(0,0,256,256);for(let e=0;e<14e3;e++){let i=Math.random()*256,s=Math.random()*256,r=Math.random();t.fillStyle=r<.4?"rgba(168,140,92,0.30)":r<.7?"rgba(255,243,205,0.28)":"rgba(200,180,130,0.22)",t.fillRect(i,s,1.4,1.4)}t.globalAlpha=.06,t.strokeStyle="#9c7f4f",t.lineWidth=2;for(let e=0;e<22;e++){t.beginPath();let i=Math.random()*256;t.moveTo(0,i);for(let s=0;s<=256;s+=16)t.lineTo(s,i+Math.sin(s*.08+e)*4);t.stroke()}return t.globalAlpha=1,n}function Zv(){let n=zn(128,128),t=n.getContext("2d");return t.fillStyle="#c2402f",t.fillRect(0,0,128,128),t.fillStyle="#ecdfc0",t.fillRect(8,10,112,78),t.fillStyle="#cf2a20",t.fillRect(16,18,96,62),t.fillStyle="#a8201a",t.fillRect(20,22,88,54),t.fillStyle="#e23026",t.fillRect(0,98,128,30),t.fillStyle="#7d1813",t.fillRect(0,120,128,8),Tn(n)}function $v(n,t){let e=zn(128,128),i=e.getContext("2d");i.fillStyle=n,i.fillRect(0,0,128,128),i.strokeStyle=t,i.lineWidth=1.4;for(let s=0;s<8;s++){let r=s*16;i.beginPath(),i.moveTo(0,r),i.lineTo(128,r),i.stroke();let o=s%2*16;for(let a=o;a<128;a+=32)i.beginPath(),i.moveTo(a,r),i.lineTo(a,r+16),i.stroke()}return Tn(e)}function yl(){let n=zn(128,128),t=n.getContext("2d");t.fillStyle="#c8402e",t.fillRect(0,0,128,128);for(let e=0;e<128;e+=10)t.fillStyle="#a83321",t.fillRect(e,0,1.6,128),t.fillStyle="#d9533f",t.fillRect(e+2,0,1.2,128);for(let e=0;e<40;e++)t.fillStyle="rgba(150,40,28,0.10)",t.fillRect(0,Math.random()*128,128,1);return Tn(n)}function Kv(){let n=zn(128,128),t=n.getContext("2d");t.fillStyle="#b8945a",t.fillRect(0,0,128,128);for(let e=0;e<420;e++){let i=["#c9a86a","#a8854c","#d3b577","#9c7b44","#bf9c60"][e%5];t.strokeStyle=i,t.lineWidth=.8+Math.random()*1.2;let s=Math.random()*128,r=Math.random()*128;t.beginPath(),t.moveTo(s,r),t.lineTo(s+(Math.random()-.5)*3,r+6+Math.random()*10),t.stroke()}return Tn(n)}function Jv(){let n=zn(256,256),t=n.getContext("2d");t.fillStyle="#8c7567",t.fillRect(0,0,256,256);let e=64,i=32,s=["#a18979","#9a8270","#a98f7e","#977e6c","#a88f7d","#9b8472"];for(let r=0;r*i<256;r++){let o=r%2*(e/2);for(let a=-e;a<256;a+=e)t.fillStyle=s[Math.random()*s.length|0],t.fillRect(a+o+2.2,r*i+2.2,e-4.4,i-4.4)}return Tn(n)}function jv(){let n=zn(64,64),t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Tn(n,!1)}function Sr(n,t,e="#1a120c",i="#ffd99a"){let s=zn(256,128),r=s.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,256,128),r.strokeStyle="#5a3d22",r.lineWidth=8,r.strokeRect(4,4,248,120),r.fillStyle=i,r.font="bold 36px Georgia, serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n,128,t?50:64),t&&(r.font="600 14px ui-sans-serif, system-ui, sans-serif",r.fillStyle="#b89a6c",r.fillText(t,128,92)),Tn(s,!1)}function Qv(){let n=zn(64,64),t=n.getContext("2d");return t.fillStyle="#e8f2f6",t.fillRect(0,0,64,64),t.fillStyle="#1f9aa8",t.fillRect(0,18,64,18),t.fillStyle="#e85d4c",t.fillRect(0,36,64,8),t.fillStyle="#1a120c",t.font="bold 11px ui-sans-serif, system-ui, sans-serif",t.textAlign="center",t.fillText("SPF",32,31),Tn(n,!1)}function t1(){let e=new gr;e.moveTo(0,0),e.quadraticCurveTo(.44*.6,2*.12,.44*.5,2*.42),e.quadraticCurveTo(.44*.5,2*.82,0,2),e.quadraticCurveTo(-.44*.5,2*.82,-.44*.5,2*.42),e.quadraticCurveTo(-.44*.6,2*.12,0,0);let i=new qo(e,{depth:.06,bevelEnabled:!0,bevelThickness:.04,bevelSize:.05,bevelSegments:1,steps:1});return i.center(),i}function e1(n,t,e,i,s){let r=[],o=[],a=new Ot(i),c=new Ot(s);for(let h=0;h<e;h++){let u=h/e*Math.PI*2,d=(h+1)/e*Math.PI*2;r.push(0,t,0,Math.cos(d)*n,0,Math.sin(d)*n,Math.cos(u)*n,0,Math.sin(u)*n);let f=h%2===0?a:c;for(let g=0;g<3;g++)o.push(f.r,f.g,f.b)}let l=new Fe;return l.setAttribute("position",new ie(r,3)),l.setAttribute("color",new ie(o,3)),l.computeVertexNormals(),l}var ha=null;function mn(){if(ha)return ha;let n=Tn(_l()),t=Yv(),e=Jv(),i=yl(),s=Kv(),r=Zv(),o=jv();return ha={sandMap:n,woodMap:t,paverMap:e,roofMap:i,thatchMap:s,barMap:r,glow:o,brickLight:$v("#eef0ec","#d6d6d0"),chair:ht(1919536,{roughness:.8}),table:ht(2315833,{roughness:.7}),pole:ht(10133670,{metalness:.4,roughness:.5}),finial:ht(14038058),canopy:new Vt({vertexColors:!0,side:_e,roughness:.85}),canopyGeo:e1(1.35,.8,16,14038058,16184300),beachCanopyGeo:new Ae(1.3,.62,10),seatGeo:new Bt(.23,.21,.07,10),backGeo:new It(.4,.42,.055),railGeo:new Bt(.03,.03,.4,8),legGeo:new Bt(.028,.034,.45,6),tableTopGeo:new Bt(.62,.62,.07,14),tableLegGeo:new Bt(.06,.06,.74,8),tableBaseGeo:new Bt(.28,.32,.08,10),umbPoleGeo:new Bt(.045,.045,3.4,8),finGeo:new Bt(.04,.04,.22,6),cupBodyGeo:new Bt(.046,.036,.13,10),cupDrinkGeo:new Bt(.04,.032,.1,8),cupGlass:ht(14872052,{transparent:!0,opacity:.3,roughness:.08}),cupDrink:ht(15233082,{transparent:!0,opacity:.85}),cupStripe:Qv(),surfGeo:t1(),ballGeo:new jt(.35,12,10),ballGore:[0,1,2].map(a=>new jt(.353,12,10,a*2.094,1.02)),ballWhite:ht(16448250,{roughness:.5}),ballCols:[ht(14826299,{roughness:.5}),ht(15910205,{roughness:.5}),ht(3112900,{roughness:.5})],trunk:ht(10255183,{roughness:.95}),frondA:ht(3112255,{roughness:.85,side:_e}),frondB:ht(3967556,{roughness:.85,side:_e}),brown:ht(11111254,{roughness:.95,side:_e}),coco:ht(7031338),trunkGeo:new Bt(1,1,1,6),frondGeo:new Ae(.13,2.4,6),cocoGeo:new jt(.12,6,6),crownGeo:new jt(.34,8,6),gullBody:ht(15987701,{roughness:.8}),gullGrey:ht(9079440),gullTail:ht(14606050),string:new de({color:7037257,fog:!1}),bulbGeo:new jt(.06,6,6),iron:ht(1316635,{roughness:.5,metalness:.5}),bamboo:ht(8018482,{roughness:.85}),wall:ht(16184559,{roughness:.95}),darkGlass:ht(2765112,{roughness:.5,metalness:.2}),postWood:ht(7029542,{roughness:.9}),fascia:ht(11680298,{roughness:.7}),fern:ht(3046714,{roughness:.95,side:_e}),fern2:ht(4628810,{roughness:.9,side:_e}),crotonR:ht(12728863,{roughness:.85}),crotonO:ht(15238698,{roughness:.85}),crotonY:ht(15122739,{roughness:.85}),hedge:ht(3108403,{roughness:.95}),hedge2:ht(3571769,{roughness:.95}),brick:ht(10246724,{roughness:.95}),soil:ht(3811868,{roughness:1}),stone:ht(14604232,{roughness:.9}),statue:ht(15526626,{roughness:.85}),flameOut:new de({color:16747038,transparent:!0,opacity:.95,depthWrite:!1}),flameIn:new de({color:16769658,depthWrite:!1}),beachUmb:[3112912,2078374,15909166,15885646,5227744,14826350,14038058,15122739].map(a=>ht(a,{roughness:.7})),loungerFrame:ht(14606050,{roughness:.5,metalness:.3})},ha}function n1(){let n=mn(),t=new ft,e=new W(n.seatGeo,n.chair);e.position.y=.45,t.add(e);let i=new W(n.backGeo,n.chair);i.position.set(0,.68,.2),i.rotation.x=.13,t.add(i);let s=new W(n.railGeo,n.chair);s.rotation.z=Math.PI/2,s.position.set(0,.885,.225),t.add(s);for(let r of[-.18,.18])for(let o of[-.18,.18]){let a=new W(n.legGeo,n.chair);a.position.set(r,.225,o),t.add(a)}return t}function i1(){let n=mn(),t=new ft,e=new W(n.cupBodyGeo,n.cupGlass);e.position.y=.065,t.add(e);let i=new W(n.cupDrinkGeo,n.cupDrink);i.position.y=.055,t.add(i);let s=new W(new oe(.072,.1),new Vt({map:n.cupStripe,roughness:.5,side:_e}));return s.position.set(0,.072,.047),t.add(s),t}function s1(n){let t=mn(),e=new ft;if(Math.random()<.5){let l=i1();l.position.set(-.1+(Math.random()-.5)*.4,.775,-.05+(Math.random()-.5)*.4),l.rotation.y=Math.random()*Math.PI*2,e.add(l)}let i=new W(t.tableTopGeo,t.table);i.position.y=.74,i.castShadow=!0,i.receiveShadow=!0,e.add(i);let s=new W(t.tableLegGeo,t.pole);s.position.y=.37,e.add(s);let r=new W(t.tableBaseGeo,t.pole);r.position.y=.04,r.receiveShadow=!0,e.add(r);let o=new W(t.umbPoleGeo,t.pole);o.position.y=1.7,e.add(o);let a=new W(t.canopyGeo,t.canopy);a.position.y=2.45,a.castShadow=!0,e.add(a);let c=new W(t.finGeo,t.finial);if(c.position.y=3.4,e.add(c),n)for(let[l,h]of[[.95,0],[-.95,0],[0,.95],[0,-.95]]){let u=n1();u.position.set(l,0,h),u.rotation.y=Math.atan2(l,h),e.add(u)}return e}function Zd(n,t,e,i,s,r){let o=s1(s);o.position.set(e,0,i),o.rotation.y=r!==void 0?r:Math.random()*Math.PI*2,n.add(o);let a=s?.92:.6;return t(e-a,e+a,i-a,i+a),o}function r1(n){let t=mn(),e=new ft,i=.7,s=5;for(let l=0;l<s;l++){let h=.22-l*.025,u=new W(t.trunkGeo,t.trunk);u.scale.set(h,i,h),u.position.set(Math.sin(l*.5)*.12,i*.5+l*i*.96,0),u.rotation.z=Math.sin(l*.5)*.05,u.castShadow=!0,e.add(u)}let r=s*i*.96,o=Math.sin((s-1)*.5)*.12,a=8;for(let l=0;l<a;l++){let h=l%5===0,u=new W(t.frondGeo,h?t.brown:l%2?t.frondB:t.frondA);u.scale.set(.5,1,.12),u.position.set(o,r,0),u.rotation.order="YXZ",u.rotation.y=l/a*Math.PI*2,u.rotation.x=Math.PI/2-(h?.12:.45-l%2*.14),u.castShadow=!0,e.add(u)}let c=new W(t.bulbGeo,t.brown);c.scale.y=1.3,c.position.set(o,r-.1,0),e.add(c);for(let l=0;l<3;l++){let h=new W(t.cocoGeo,t.coco);h.position.set(o+(Math.random()-.5)*.3,r-.1,(Math.random()-.5)*.3),e.add(h)}return e.scale.setScalar(n||1),e}function $d(n,t,e,i,s,r){let o=r1(r);return o.position.set(i,0,s),o.rotation.y=Math.random()*Math.PI*2,o.userData.swayPh=Math.random()*Math.PI*2,o.userData.swayAmt=.018+Math.random()*.02,n.add(o),e.push(o),t(i-.3,i+.3,s-.3,s+.3),o}function Kd(){let n=mn(),t=new ft,e=new W(new jt(.16,6,5),n.gullBody);e.scale.set(1,.7,2.4),t.add(e);let i=new W(new jt(.1,6,5),n.gullBody);i.position.set(0,.04,.34),t.add(i);let s=new W(new Ae(.1,.34,4),n.gullTail);s.rotation.x=-Math.PI/2,s.position.set(0,0,-.4),t.add(s);let r=[];for(let o of[-1,1]){let a=new ft,c=new W(new Ae(.17,1.5,4),n.gullBody);c.rotation.z=-o*Math.PI/2,c.position.x=o*.78,c.scale.set(.55,1,.16);let l=new W(new Ae(.1,.5,4),n.gullGrey);l.rotation.z=-o*Math.PI/2,l.position.x=o*1.45,l.scale.set(.5,1,.14),a.add(c),a.add(l),t.add(a),r.push({pivot:a,side:o})}return t.userData.wings=r,t}function Jd(n,t,e,i){let s=mn(),r=new ft,o=new W(new Bt(.22,.3,.45,8),s.iron);o.position.y=.225,o.castShadow=!0,r.add(o);let a=new W(new Bt(.065,.085,3,8),s.iron);a.position.y=2,a.castShadow=!0,r.add(a);let c=new W(new Bt(.26,.2,.5,4),s.iron);c.rotation.y=Math.PI/4,c.position.y=3.6,r.add(c);let l=new W(new It(.3,.42,.3),new de({color:6971464}));l.position.y=3.6,r.add(l);let h=new W(new Ae(.3,.32,4),s.iron);return h.rotation.y=Math.PI/4,h.position.y=3.96,r.add(h),r.position.set(e,0,i),n.add(r),t(e-.28,e+.28,i-.28,i+.28),r}function jd(n,t,e,i,s){let r=mn(),o=new ft,a=new W(new Bt(.07,.09,2.2,6),r.bamboo);a.position.y=1.1,a.castShadow=!0,o.add(a);for(let d of[.5,1.1,1.7]){let f=new W(new Bt(.096,.096,.05,6),ht(6178088));f.position.y=d,o.add(f)}let c=new W(new Bt(.16,.1,.22,8),ht(2763310,{metalness:.4,roughness:.5}));c.position.y=2.28,o.add(c);let l=new W(new Ae(.13,.5,6),r.flameOut);l.position.y=2.62,l.userData.ph=Math.random()*6.28,o.add(l),e.push(l);let h=new W(new Ae(.07,.32,6),r.flameIn);h.position.y=2.6,h.userData.ph=l.userData.ph,o.add(h),e.push(h);let u=new Fo(new dr({map:r.glow,color:16757322,transparent:!0,opacity:.4,depthWrite:!1}));return u.scale.set(1.5,1.5,1),u.position.y=2.62,o.add(u),o.position.set(i,0,s),n.add(o),t(i-.16,i+.16,s-.16,s+.16),o}function vl(n,t,e,i,s){let r=mn(),o=new ft,a=ht(s,{roughness:.7}),c=Wt(.6,.08,1.4,a);c.position.set(0,.35,0),o.add(c);let l=Wt(.6,.08,.72,a);l.position.set(0,.55,-.78),l.rotation.x=.6,o.add(l);for(let h of[-.26,.26])for(let u of[-.6,.6]){let d=new W(new Bt(.03,.03,.35,5),r.loungerFrame);d.position.set(h,.17,u),o.add(d)}return o.position.set(t,0,e),o.rotation.y=i,n.add(o),o}function Qd(n){let t=mn(),e=new W(t.ballGeo,t.ballWhite);e.scale.setScalar(n);for(let i=0;i<3;i++){let s=new W(t.ballGore[i],t.ballCols[i]);e.add(s)}return e.castShadow=!0,e.userData.radius=.35*n,e}function tf(n){let t=mn(),e=new W(t.surfGeo,ht(n,{roughness:.4}));return e.castShadow=!0,e}function ef(n,t,e,i,s,r,o){let a=mn();for(let c=0;c<=o;c++){let l=c/o,h=t+(i-t)*l,u=e+(s-e)*l,d=Math.sin(l*Math.PI)*.55,f=new W(a.bulbGeo,a.string);f.position.set(h,r-d,u),n.add(f)}}var zt={width:90,depth:70,boardwalkZ:16,wetZ:-10,oceanZ:-22},Ml={minX:-zt.width/2+1,maxX:zt.width/2-1,minZ:-zt.depth/2+1,maxZ:zt.depth/2-1};function o1(){let n=document.createElement("canvas");n.width=4,n.height=256;let t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#6ec4ff"),e.addColorStop(.45,"#b8e0ff"),e.addColorStop(.72,"#ffe2a8"),e.addColorStop(1,"#f0c070"),t.fillStyle=e,t.fillRect(0,0,4,256);let i=new En(n);return i.colorSpace=ne,i.needsUpdate=!0,i}function nf(n){n.background=new Ot(8898799),n.fog=new Oo(14207136,28,95);let t=new $o(16773576,12886122,.95);n.add(t);let e=new Ko(16771264,2.2);return e.position.set(22,48,6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=2,e.shadow.camera.far=140,e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,e.shadow.bias=-5e-4,n.add(e),{hemi:t,sun:e}}function sf(n,t){let e=mn(),i=t.addCollider,s=[],r=[],o=[],a=[],c=[],l=new W(new jt(180,16,12),new de({map:o1(),side:Ge,fog:!1,depthWrite:!1}));n.add(l);let h=Tn(_l());h.repeat.set(48,36);let u=new W(new oe(zt.width+30,zt.depth+24),new Vt({map:h,roughness:1,color:15784352}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,n.add(u);let d=new W(new oe(zt.width+20,14),new Vt({color:12886128,roughness:.42,metalness:.08}));d.rotation.x=-Math.PI/2,d.position.set(0,.03,zt.wetZ),d.receiveShadow=!0,n.add(d);let f=new oe(zt.width+50,36,40,10),g=new W(f,new Vt({color:3065044,roughness:.28,metalness:.12}));g.rotation.x=-Math.PI/2,g.position.set(0,.02,zt.oceanZ-10),n.add(g);let x=Float32Array.from(f.attributes.position.array);for(let ot=0;ot<7;ot++){let ut=new W(new oe(zt.width+24,2.4),new de({color:15267572,transparent:!0,opacity:0,depthWrite:!1}));ut.rotation.x=-Math.PI/2,ut.userData.spd=1.8+ot*.28,ut.userData.z0=zt.oceanZ-6-ot*2.6,ut.userData.dieZ=zt.wetZ+2,ut.position.set(0,.08,ut.userData.z0),n.add(ut),c.push(ut)}let p=Yd(e.woodMap,28,6),m=Wt(zt.width*.78,.2,9.2,new Vt({map:p,roughness:.88}));m.position.set(0,.12,zt.boardwalkZ),n.add(m);for(let ot=-32;ot<=32;ot+=4){let ut=Wt(.16,1.15,.16,e.postWood);ut.position.set(ot,.7,zt.boardwalkZ+4.2),n.add(ut),i(ot-.18,ot+.18,zt.boardwalkZ+4,zt.boardwalkZ+4.4)}let y=Wt(zt.width*.78,.1,.12,e.postWood);y.position.set(0,1.18,zt.boardwalkZ+4.2),n.add(y);let _=new ft,M=Wt(8.4,3.2,5.2,e.wall);M.position.y=1.7,_.add(M);let R=yl();R.repeat.set(6,4);let w=Wt(9.2,.22,6,new Vt({map:R,roughness:.55,metalness:.15}));w.position.y=3.45,_.add(w);let A=Wt(8.6,.12,2.2,ht(13123630,{roughness:.7}));A.position.set(0,2.55,3.2),_.add(A);let D=new W(new oe(4.6,1.1),new de({map:Sr("SURF CLUB","SPF 50 \xB7 GOLD COAST"),side:_e}));D.position.set(0,2.85,2.72),_.add(D),_.position.set(-18,0,zt.boardwalkZ-1.2),n.add(_),i(-22.4,-13.6,zt.boardwalkZ-3.8,zt.boardwalkZ+1.4);let v=new ft,b=Wt(2.4,3.6,2.4,ht(15983466,{roughness:.85}));b.position.y=1.8,v.add(b);let C=Wt(3,1.9,3,ht(16250090,{roughness:.9}));C.position.y=4.15,v.add(C);let N=Wt(3.3,.18,3.3,ht(13123630,{roughness:.55}));N.position.y=5.2,v.add(N);let $=Wt(.06,1.4,.9,ht(13123630));$.position.set(.4,6,0),v.add($);let P=Wt(.06,1.4,.45,ht(15983466));P.position.set(.41,6,-.22),v.add(P),v.position.set(20,0,zt.boardwalkZ-2),n.add(v),i(18.4,21.6,zt.boardwalkZ-3.6,zt.boardwalkZ-.4);let O=new ft,H=Wt(3.4,2.4,2.6,e.wall);H.position.y=1.2,O.add(H);let B=Wt(3.8,.16,3,ht(13123630));B.position.y=2.5,O.add(B);let q=new W(new oe(2.8,.7),new de({map:Sr("ZINC","FREE SPF"),side:_e}));q.position.set(0,2.05,1.35),O.add(q),O.position.set(8,0,zt.boardwalkZ-1),n.add(O),i(6.2,9.8,zt.boardwalkZ-2.3,zt.boardwalkZ+.3);let G=new ft,z=Wt(2.4,2,2.2,ht(16250090));z.position.set(-2,1.15,0),G.add(z);let k=Wt(4.2,2.3,2.4,ht(16775163));k.position.set(1.1,1.3,0),G.add(k);let st=Wt(4.25,.28,2.42,ht(16739226));st.position.set(1.1,1.55,0),G.add(st);let X=Wt(1.4,.7,.08,ht(9357544,{roughness:.2,metalness:.3}));X.position.set(1.3,1.85,1.22),G.add(X);let Q=Wt(1.6,.08,.7,ht(16739226));Q.position.set(1.3,1.42,1.35),G.add(Q);for(let ot of[-2.3,2.9])for(let ut of[-.85,.85]){let at=new W(new Bt(.38,.38,.22,12),ht(1710618));at.rotation.z=Math.PI/2,at.position.set(ot,.38,ut),G.add(at)}let dt=new W(new Ae(.28,.7,8),ht(15909166));dt.position.set(1.1,3,0),G.add(dt);let Et=new W(new jt(.26,10,8),ht(16758472));Et.position.set(1.1,3.38,0),G.add(Et);let pt=new W(new oe(2.2,.55),new de({map:Sr("SOFT SERVE","GOLD COAST"),side:_e}));pt.position.set(1.1,2.35,1.24),G.add(pt),G.position.set(-6,0,zt.boardwalkZ+6.6),G.rotation.y=-.15,n.add(G),i(-9.2,-2.2,zt.boardwalkZ+4.8,zt.boardwalkZ+8.4);let Ct=new ft,kt=ht(16747069,{roughness:.85,side:_e}),Rt=Wt(2.6,2.2,2.4,kt);Rt.position.y=1.15,Ct.add(Rt);let Nt=Wt(1.1,1.8,.06,ht(16760954,{roughness:.8}));Nt.position.set(.4,.95,1.24),Nt.rotation.y=-.35,Ct.add(Nt);let I=new W(new Ae(1.9,.7,4),ht(15228236));I.rotation.y=Math.PI/4,I.position.y=2.55,Ct.add(I);let lt=new W(new oe(2,.5),new de({map:Sr("SPRAY TAN","$29"),side:_e}));lt.position.set(0,2.05,1.28),Ct.add(lt),Ct.position.set(26,0,8),Ct.rotation.y=-.6,n.add(Ct),i(24.6,27.4,6.6,9.4);let J=new ft,tt=new W(new Bt(.22,.28,1.8,8),ht(3979384));tt.position.y=.95,J.add(tt);for(let ot=0;ot<5;ot++){let ut=new W(new It(.9,.06,.22),ht(3120714));ut.position.set(Math.cos(ot/5*Math.PI*2)*.35,1.85,Math.sin(ot/5*Math.PI*2)*.35),ut.rotation.y=ot/5*Math.PI*2,J.add(ut)}J.position.set(4.5,0,11),n.add(J);let j=new ft,Tt=Wt(1.2,.12,1.1,ht(15983466));Tt.position.y=2.1,j.add(Tt);for(let[ot,ut]of[[-.5,-.45],[.5,-.45],[-.5,.45],[.5,.45]]){let at=Wt(.1,2.1,.1,ht(13123630));at.position.set(ot,1.05,ut),j.add(at)}let xt=Wt(1.2,.9,.08,ht(13123630));xt.position.set(0,2.6,-.5),j.add(xt),j.position.set(22.5,0,zt.boardwalkZ-6),n.add(j);let S=new ft,E=Wt(.08,1.1,.08,ht(546));E.position.y=.55,S.add(E);let F=Wt(.28,.18,.42,ht(1710618));F.position.set(0,1.2,.05),S.add(F);let et=new W(new Bt(.07,.08,.16,10),ht(819));et.rotation.x=Math.PI/2,et.position.set(0,1.2,.32),S.add(et),S.position.set(-11.5,0,8.5),n.add(S);for(let[ot,ut]of[[12.5,zt.boardwalkZ+3.4],[-1.5,zt.boardwalkZ+3.4]]){let at=Wt(.55,.85,.55,ht(2779964));at.position.set(ot,.42,ut),n.add(at),i(ot-.32,ot+.32,ut-.32,ut+.32)}ef(n,-22,zt.boardwalkZ+3.8,22,zt.boardwalkZ+3.8,3.1,18);let it=[[-30,14,1.1],[-26,8,.95],[-22,18,1.2],[-12,12,1],[12,13,1.05],[24,10,1.15],[28,17,.9],[-8,-4,.85],[16,-2,.9],[-28,0,1],[30,2,.95],[-18,6,.8]];for(let[ot,ut,at]of it)$d(n,i,s,ot,ut,at);let nt=[[-10,6,!0],[-6,3,!0],[-2,5,!0],[2,2,!0],[6,5,!0],[10,3,!0],[-14,1,!0],[14,1,!0],[-8,-1,!1],[4,-3,!1],[12,-5,!1],[-16,-3,!1],[0,8,!0],[-20,4,!0],[18,4,!0]];for(let[ot,ut,at]of nt)Zd(n,i,ot,ut,at,Math.random()*.4);let Mt=[15909166,15885646,3112912,2078374,14826350];for(let ot=0;ot<10;ot++){let ut=-18+ot*4.1;vl(n,ut,-2.5,.05,Mt[ot%Mt.length]),vl(n,ut+.9,.4,-.08,Mt[(ot+2)%Mt.length])}let _t=[15909166,14826299,3112900,16777215,2078374];for(let ot=0;ot<6;ot++){let ut=tf(_t[ot%_t.length]);ut.rotation.set(-.1,.2,Math.PI/2),ut.position.set(-12.5+ot*.35,1.1,zt.boardwalkZ+1.4),n.add(ut)}for(let[ot,ut]of[[-5,1],[7,-1],[3,7],[-11,-4]]){let at=Qd(1);at.position.set(ot,.35,ut),n.add(at),a.push(at)}for(let ot of[-28,-16,-4,8,20,30])Jd(n,i,ot,zt.boardwalkZ+3.2);for(let ot of[-24,-8,4,16])jd(n,i,r,ot,zt.boardwalkZ-4.2);for(let ot=0;ot<8;ot++){let ut=Kd();ut.position.set(-20+ot*6,4.5+ot%3,-6+ot%4*3),ut.userData.phase=ot*.7,n.add(ut),o.push(ut)}let bt={x:7,z:-29},Lt=a1();Lt.position.set(bt.x,.15,bt.z),n.add(Lt);let qt=l1(n,i),rt=h1(n);return{ocean:g,oceanBase:x,waves:c,palms:s,gulls:o,balls:a,flames:r,bounds:Ml,piano:bt,isWood(ot,ut){return Math.abs(ut-zt.boardwalkZ)<4.8&&Math.abs(ot)<zt.width*.4},update(ot){let ut=g.geometry.attributes.position;for(let at=0;at<ut.count;at++){let At=at*3,St=x[At],Yt=x[At+2];ut.array[At+1]=Math.sin(St*.12+ot*1.35)*.16+Math.sin(Yt*.2+ot*.95)*.1}ut.needsUpdate=!0;for(let at of c){at.position.z+=at.userData.spd*.016;let At=at.userData.dieZ-at.userData.z0,St=(at.position.z-at.userData.z0)/Math.max(.001,At);St<.12?at.material.opacity=St/.12:St>.72?at.material.opacity=Math.max(0,1-(St-.72)/.28):at.material.opacity=.6,at.position.z>=at.userData.dieZ&&(at.position.z=at.userData.z0,at.material.opacity=0)}for(let at of o){let At=at.userData.phase;at.position.x+=Math.sin(ot*.4+At)*.02,at.position.y=4.2+Math.sin(ot*1.1+At)*.6,at.rotation.y=Math.sin(ot*.3+At)*.5}for(let at of r){if(!at.scale)continue;let At=.85+Math.sin(ot*9+(at.userData?.ph||0))*.12;at.scale.setScalar(At)}Lt.userData.tick?.(ot),qt.tick(ot);for(let at of rt)at.tick(ot)}}}function a1(){let n=new ft,t=ht(13217946),e=ht(1315860),i=Wt(.38,.55,.22,ht(1842210));i.position.y=1.05,n.add(i);let s=new W(new jt(.12,10,8),t);s.position.y=1.48,n.add(s);let r=new W(new jt(.13,8,6),e);r.position.set(0,1.54,-.02),r.scale.set(1,.7,1),n.add(r);let o=Wt(1.35,.18,.55,e);o.position.set(.15,.78,.42),n.add(o);let a=Wt(1.2,.04,.22,ht(16052454));a.position.set(.15,.89,.52),n.add(a);let c=Wt(1.3,.04,.5,e);c.position.set(.15,1.05,.28),c.rotation.x=-.7,n.add(c);let l=Wt(.5,.08,.22,e);return l.position.set(0,.62,0),n.add(l),n.userData.tick=h=>{s.position.y=1.48+Math.sin(h*1.3)*.015,a.position.y=.89+Math.abs(Math.sin(h*6))*.008,n.position.y=.12+Math.sin(h*.7)*.06},n}function c1(){let n=[["THE SUN","IS A HOSTILE ACTOR"],["COME WITH ME","IF YOU WANT TO LIVE","(YOUR MELANOCYTES)"],["THIS UNIT","HAS BEEN REASSIGNED","TO PUBLIC HEALTH"],["NOT A NIGHTCLUB","A MELANOMA BRIEFING"],["AUS101","DOES NOT TAKE REQUESTS"],["APPLY","OR BE RECALLED"]],t=document.createElement("canvas");t.width=1024,t.height=576;let e=t.getContext("2d"),i=0,s=()=>{let o=n[i%n.length];e.fillStyle="#0b1210",e.fillRect(0,0,1024,576),e.fillStyle="#ffb040",e.fillRect(0,0,1024,8),e.fillRect(0,568,1024,8),e.fillStyle="#f4f7fb",e.font="bold 72px Impact, Arial Black, sans-serif",e.textAlign="center",e.textBaseline="middle";let a=288-(o.length-1)*44;o.forEach((c,l)=>{e.font=l===0?"bold 86px Impact, Arial Black, sans-serif":"bold 48px Impact, Arial Black, sans-serif",e.fillStyle=l===0?"#f4f7fb":"#ffb040",e.fillText(c,512,a+l*88)}),i+=1};s();let r=new En(t);return r.colorSpace=ne,{tex:r,paint:s,canvas:t}}function l1(n,t){let e=new ft,i=Wt(3.4,1.1,1.4,ht(1710622));i.position.y=.55,e.add(i);let s=Wt(2.6,.08,.9,ht(2763312,{metalness:.4,roughness:.4}));s.position.y=1.14,e.add(s);for(let d of[-.7,.7]){let f=new W(new Bt(.32,.32,.04,16),ht(273,{metalness:.6}));f.position.set(d,1.2,.05),e.add(f)}let r=Wt(.36,.7,.22,ht(546));r.position.set(0,1.55,-.15),e.add(r);let o=new W(new jt(.13,10,8),ht(13010498));o.position.set(0,2.05,-.15),e.add(o);let a=Wt(.38,.08,.08,ht(273));a.position.set(0,2.12,-.15),e.add(a);let c=c1(),l=new W(new oe(8.4,4.7),new de({map:c.tex}));l.position.set(0,4.4,-1.35),e.add(l);let h=Wt(8.7,5,.12,ht(273));h.position.set(0,4.4,-1.42),e.add(h),e.position.set(-24,0,7),e.rotation.y=.55,n.add(e),t(-26.5,-21.5,5.2,8.8);let u=0;return{tick(d){o.position.y=2.05+Math.sin(d*4)*.03,d-u>4.2&&(u=d,c.paint(),c.tex.needsUpdate=!0)}}}function h1(n){let t=[],e=[[-22.2,5.4],[-21,8.6],[-25.5,6.8],[-23.6,9.2],[-20.4,6.2]],i=[14826874,2060152,15909166,3112912,1315860];return e.forEach(([s,r],o)=>{let a=new ft,c=Wt(.28,.5,.16,ht(i[o%i.length]));c.position.y=1,a.add(c);let l=new W(new jt(.11,8,6),ht(13934698));l.position.y=1.38,a.add(l),a.position.set(s,0,r),n.add(a);let h=o*.9;t.push({tick(u){a.position.y=Math.abs(Math.sin(u*5+h))*.18,a.rotation.y=Math.sin(u*2+h)*.4,c.rotation.z=Math.sin(u*5+h)*.15}})}),t}var u1=12088115,d1=13934615,f1=16715792;function rf(n){return new Vt({color:n,metalness:.85,roughness:.35})}function Re(n){return n.castShadow=!0,n.receiveShadow=!0,n}function Bs(n,t,e,i,s=8){let r=Re(new W(new Bt(t,e,n,s),i));return r.position.y=-n/2,r}function $i(n,t,e=10){return Re(new W(new jt(n,e,e),t))}function of(n,t,e,i,s){let r=new Ds(new L(-t*.12,n,-e),new L(-t,n+.01,.02),new L(-t*.18,n-.008,i));return Re(new W(new Yo(r,8,.011,5,!1),s))}function p1(){let n=new ft,t=Re(new W(new Bt(.027,.032,.13,10),new Vt({color:15986660,roughness:.48,metalness:.05}))),e=Re(new W(new Bt(.033,.033,.046,10),new Vt({color:13123630,roughness:.55})));e.position.y=.01;let i=Re(new W(new Bt(.017,.02,.028,8),new Vt({color:1118481,roughness:.4,metalness:.2})));return i.position.y=.078,n.add(t,e,i),n.rotation.z=.35,n.rotation.x=.15,n.position.set(.02,-.04,.02),n}function m1(n,t){let e=new ft,i=Re(new W(new jt(.11,12,10),n));i.scale.set(.9,1.02,1.08),i.position.y=.02;let s=Re(new W(new It(.16,.028,.07),t));s.position.set(0,.045,.08);let r=Re(new W(new It(.13,.055,.11),n));r.position.set(0,-.095,.025);let o=Re(new W(new jt(.035,8,6),n));o.position.set(0,-.125,.06);let a=Re(new W(new It(.1,.018,.03),t));a.position.set(0,-.078,.085);let c=new ft,l=new de({color:f1}),h=new Vt({color:1706504,roughness:.8,metalness:.2});for(let u of[-.042,.042]){let d=Re(new W(new jt(.03,8,8),h));d.position.set(u,.018,.09),d.scale.set(1,.85,.55);let f=new W(new jt(.018,8,8),l);f.position.set(u,.018,.108),c.add(d,f)}return e.add(i,s,r,o,a,c),{skull:e,eyes:c}}function g1(n,t){let e=new ft,i=Bs(.5,.026,.032,n,8);i.position.y=.25,e.add(i);let s=Re(new W(new It(.045,.32,.018),t));s.position.set(0,.22,.155),e.add(s);let r=[[.38,.17,.12,.17],[.3,.165,.125,.175],[.22,.155,.13,.17],[.14,.14,.12,.155],[.06,.12,.1,.13]];for(let[o,a,c,l]of r){let h=of(o,a,c,l,t),u=of(o,a,c,l,t);u.scale.x=-1,e.add(h,u)}return e}function af(){let n=rf(u1),t=rf(d1),e=new ft;e.name="AUS101";let i=new ft;i.position.y=.94;let s=Re(new W(new jt(.09,10,8),n));s.scale.set(1.35,.7,1.05),i.add(s);let r=Re(new W(new Ei(.11,.016,6,14),t));r.rotation.x=Math.PI/2,r.scale.set(1.15,.85,1),i.add(r);function o(M){let R=M*.11,w=new ft;w.position.set(R,0,0),w.add($i(.055,t));let A=new ft;A.add(Bs(.45,.042,.05,n));let D=$i(.048,t);D.position.y=-.45,A.add(D);let v=new ft;v.position.y=-.45,v.add(Bs(.42,.032,.038,n));let b=$i(.038,t);b.position.y=-.42,v.add(b);let C=new ft;C.position.y=-.42;let N=Re(new W(new It(.07,.05,.16),n));N.position.set(0,-.045,.04);let $=Re(new W(new jt(.028,8,6),t));return $.position.set(0,-.04,.11),C.add(N,$),v.add(C),A.add(v),w.add(A),i.add(w),{thigh:A,shin:v,foot:C}}let a=o(-1),c=o(1),l=new ft;l.position.y=.04;let h=g1(n,t);l.add(h);let u=Re(new W(new Bt(.018,.018,.38,8),t));u.rotation.z=Math.PI/2,u.position.y=.52,l.add(u);function d(M){let R=new ft;R.position.set(M*.2,.52,0),R.add($i(.05,t));let w=new ft;w.rotation.z=M*.12,w.add(Bs(.28,.03,.038,n));let A=$i(.04,t);A.position.y=-.28,w.add(A);let D=new ft;D.position.y=-.28,D.add(Bs(.24,.024,.03,n));let v=$i(.032,t);v.position.y=-.24,D.add(v);let b=new ft;b.position.y=-.24;let C=Re(new W(new It(.05,.08,.035),n));return C.position.y=-.05,b.add(C),D.add(b),w.add(D),R.add(w),l.add(R),{upper:w,forearm:D,hand:b}}let f=d(-1),g=d(1),x=p1();g.hand.add(x);let p=Bs(.1,.028,.032,n,8);p.position.y=.57,l.add(p);let m=$i(.04,t);m.position.y=.62,l.add(m);let{skull:y,eyes:_}=m1(n,t);return y.position.y=.74,l.add(y),i.add(l),e.add(i),e.userData.parts={leftFoot:a.foot,rightFoot:c.foot,eyes:_,bottle:x,hips:i,torso:l,skull:y,leftThigh:a.thigh,rightThigh:c.thigh,leftShin:a.shin,rightShin:c.shin,leftUpperArm:f.upper,rightUpperArm:g.upper,leftForearm:f.forearm,rightForearm:g.forearm},e.userData.height=1.85,El(e,{walkPhase:0,speed:0}),e}function El(n,{walkPhase:t=0,speed:e=0}={}){let i=n.userData.parts;if(!i?.leftThigh)return;let s=Math.min(1,Math.max(0,e)/3.2),r=s<.05,o=r?0:Math.sin(t),a=r?0:s,c=r?Math.sin(t*.45)*.02:0;i.hips.position.y=.94+(r?c*.4:Math.abs(Math.sin(t*2))*.03*a),i.hips.rotation.y=r?Math.sin(t*.35)*.04:o*.08*a,i.torso.rotation.x=r?c:-Math.abs(o)*.04*a,i.torso.rotation.y=r?0:-o*.06*a,i.leftThigh.rotation.x=r?.02:-o*.55*a,i.rightThigh.rotation.x=r?.02:o*.55*a,i.leftShin.rotation.x=r?.04:Math.max(0,o)*.7*a,i.rightShin.rotation.x=r?.04:Math.max(0,-o)*.7*a,i.leftFoot.rotation.x=r?-.02:-Math.max(0,o)*.25*a,i.rightFoot.rotation.x=r?-.02:-Math.max(0,-o)*.25*a,i.leftUpperArm.rotation.x=r?.1:o*.5*a+.08,i.rightUpperArm.rotation.x=r?.18:-o*.45*a+.16,i.leftForearm.rotation.x=r?.12:.12+Math.max(0,-o)*.2*a,i.rightForearm.rotation.x=r?.32:.28+Math.max(0,o)*.15*a,i.skull&&(i.skull.rotation.x=r?c*.4:0)}var Dt={box:new It(1,1,1),sphere:new jt(1,10,8),sphereHi:new jt(1,12,10),cyl:new Bt(1,1,1,8),cyl12:new Bt(1,1,1,12),cone:new Ae(1,1,6),cone4:new Ae(1,1,4),torus:new Ei(1,.12,6,16)};function me(n,t={}){return new Vt({color:n,roughness:.72,metalness:.04,...t})}var Si={eye:me(1709072,{roughness:.45}),tooth:me(16052454,{roughness:.4}),cord:me(1710618,{roughness:.55}),beak:me(15777856,{roughness:.5}),gullWhite:me(16053488,{roughness:.7}),gullGrey:me(10133670,{roughness:.75}),gullLeg:me(14711346,{roughness:.6})};function Ut(n,t,e,i=e,s=e){let r=new W(n,t);return r.castShadow=!0,r.receiveShadow=!0,r.scale.set(e,i,s),r}function wr({height:n=1.7,skin:t=13010498,hair:e=2759186,shirt:i=null,sleeves:s=!1,bottoms:r=2771562,cover:o="shorts",footwear:a="bare",shoe:c=2761760,shoulderW:l=.38,chestD:h=.18,chestW:u=.3,hipW:d=.24,armR:f=.042,legR:g=.055}){let x=new ft,p=n/1.7,m=me(t),y=me(e,{roughness:.85}),_=i==null?null:me(i),M=me(r),R=me(c,{roughness:.62}),w=_||m,A=_&&s?_:m,D=.12*p,v=.09*p,b=a==="boot"?.11*p:.055*p,C=n-D-.01*p,N=C-D-v*.55,$=.52*n,P=Math.max(.28*p,N-$),O=$,H=(O-b)*.47,B=(O-b)*.53,q=.28*p,G=.26*p,z=f*p,k=g*p,st=Ut(Dt.box,M,d,.16*p,h*.95);st.position.y=$,x.add(st);let X=Ut(Dt.box,w,u,P,h);X.position.y=$+P*.5-.02*p,x.add(X);let Q=Ut(Dt.box,w,l*.92,.08*p,h*.88);Q.position.y=N,x.add(Q);let dt=Ut(Dt.cyl,m,.042*p,v,.042*p);dt.position.y=N+v*.42,x.add(dt);let Et=new ft;Et.position.y=C;let pt=Ut(Dt.sphereHi,m,D);Et.add(pt);for(let J of[-1,1]){let tt=Ut(Dt.sphere,Si.eye,.016*p);tt.position.set(J*.038*p,.012*p,D*.78),Et.add(tt)}x.add(Et);let Ct=Ut(Dt.sphere,y,D*1.06,D*.74,D*1.08);Ct.position.y=C+D*.14,x.add(Ct);let kt=[];for(let J of[-1,1]){let tt=new ft;tt.name=J<0?"armL":"armR",tt.position.set(J*(l*.5),N,0),tt.rotation.z=J*.1,tt.add(Ut(Dt.sphere,A,z*1.25));let j=Ut(Dt.cyl,A,z,q,z);j.position.y=-q*.5,tt.add(j);let Tt=Ut(Dt.sphere,A,z*1.08);Tt.position.y=-q,tt.add(Tt);let xt=Ut(Dt.cyl,A,z*.88,G,z*.88);xt.position.y=-q-G*.5,tt.add(xt);let S=new ft;S.position.y=-q-G;let E=Ut(Dt.box,m,.058*p,.088*p,.032*p);E.position.y=-.044*p;let F=Ut(Dt.box,m,.052*p,.05*p,.026*p);F.position.y=-.105*p;let et=Ut(Dt.box,m,.018*p,.04*p,.018*p);et.position.set(J*.038*p,-.052*p,.012*p),et.rotation.z=J*.65,S.add(E,F,et),tt.add(S),x.add(tt),kt.push(tt)}let Rt=o==="bikini"?m:M,Nt=o==="pants"?M:m,I=a==="bare"?m:R,lt=[];for(let J of[-1,1]){let tt=new ft;tt.name=J<0?"legL":"legR",tt.position.set(J*d*.32,$,0);let j=Ut(Dt.sphere,Rt,k*1.12);j.position.y=-.01*p,tt.add(j);let Tt=Ut(Dt.cyl,Rt,k*.95,B,k*.95);Tt.position.y=-B*.5,tt.add(Tt);let xt=Ut(Dt.sphere,Nt,k*.95);xt.position.y=-B,tt.add(xt);let S=Ut(Dt.cyl,Nt,k*.78,H,k*.78);S.position.y=-B-H*.5,tt.add(S);let E=Ut(Dt.sphere,I,k*.72);E.position.y=-B-H,tt.add(E);let F=new ft;F.position.y=-B-H;let et=a==="boot"?.1*p:.048*p,it=a==="boot"?.17*p:.16*p,nt=Ut(Dt.box,I,.085*p,et,it);if(nt.position.set(0,-b+et*.5,.04*p),F.add(nt),a==="shoe"){let Mt=Ut(Dt.box,R,.082*p,.045*p,.1*p);Mt.position.set(0,.01*p,.05*p),F.add(Mt)}if(a==="boot"){let Mt=Ut(Dt.cyl,R,k*.88,.12*p,k*.88);Mt.position.y=.04*p,F.add(Mt)}tt.add(F),x.add(tt),lt.push(tt)}return x.userData.body={head:pt,hairCap:Ct,headY:C,headR:D,shoulderY:N,hipY:$,scale:p,skinM:m,hairM:y,chestD:h,chestW:u,armL:kt[0],armR:kt[1],legL:lt[0],legR:lt[1]},x.userData.skinMats=[m],x.userData.bareColor=m.color.clone(),x.userData.coverage=0,x.userData.paintTarget=i==null,x}function x1(n,t){let e=n.userData.body.scale,i=Ut(Dt.torus,Si.cord,.058*e);i.position.y=t,i.rotation.x=Math.PI/2,n.add(i);let s=Ut(Dt.cone4,Si.tooth,.018*e,.05*e,.018*e);s.position.set(0,t-.055*e,.045*e),s.rotation.x=.4,n.add(s)}function Gn({hair:n=16041009,shorts:t=2060152,skin:e=13934698}={}){let i=wr({height:1.78,skin:e,hair:n,shirt:null,sleeves:!1,bottoms:t,cover:"shorts",footwear:"bare",shoulderW:.5,chestW:.36,chestD:.22,hipW:.26,armR:.05,legR:.062}),{headY:s,headR:r,shoulderY:o,hipY:a,scale:c,chestD:l,skinM:h}=i.userData.body,u=Ut(Dt.box,me(n,{roughness:.85}),.16*c,.12*c,.12*c);u.position.set(0,s+r*.55,.03*c),i.add(u),x1(i,o+.05*c);let d=me(e,{roughness:.5,metalness:.06});for(let g of[-1,1]){let x=Ut(Dt.sphere,d,.09*c,.055*c,.05*c);x.position.set(g*.085*c,o-.12*c,l*.42),i.add(x)}let f=me(e,{roughness:.48,metalness:.08});for(let g=0;g<3;g++)for(let x of[-1,1]){let p=Ut(Dt.box,f,.085*c,.055*c,.04*c);p.position.set(x*.05*c,a+.28*c-g*.07*c,l*.42),i.add(p)}return i.userData.skinMats=[...i.userData.skinMats,d,f],i.userData.kind="ken",i.userData.ageBand="adult",i.userData.paintTarget=!0,i.name="ken",i}function Fs({hair:n=13214247,bikini:t=14826874,skin:e=14725258}={}){let i=wr({height:1.68,skin:e,hair:n,shirt:null,sleeves:!1,bottoms:t,cover:"bikini",footwear:"bare",shoulderW:.36,chestW:.26,chestD:.16,hipW:.26,armR:.036,legR:.05}),{headY:s,headR:r,hipY:o,shoulderY:a,scale:c,chestD:l}=i.userData.body,h=me(t,{roughness:.62}),u=Ut(Dt.sphere,me(n,{roughness:.9}),r*.95,r*2.05,r*.78);u.position.set(0,s-.14*c,-.07*c),i.add(u);for(let g of[-1,1]){let x=Ut(Dt.sphere,h,.058*c,.05*c,.045*c);x.position.set(g*.058*c,a-.1*c,l*.48),i.add(x)}let d=Ut(Dt.box,h,.14*c,.012*c,.012*c);d.position.set(0,a-.02*c,l*.2),i.add(d);let f=Ut(Dt.box,h,.22*c,.09*c,.14*c);return f.position.set(0,o-.02*c,.01*c),i.add(f),i.userData.kind="babe",i.userData.ageBand="adult",i.userData.paintTarget=!0,i.name="babe",i}function cf(){let n=wr({height:1.72,skin:12888194,hair:1709586,shirt:1315860,sleeves:!0,bottoms:4867640,cover:"pants",footwear:"shoe",shoe:2761756,shoulderW:.34,chestW:.28,chestD:.17,hipW:.24,armR:.038,legR:.052}),{shoulderY:t,hipY:e,scale:i,chestD:s}=n.userData.body,r=Ut(Dt.box,me(5902352),.13*i,.13*i,.02*i);r.position.set(0,t-.18*i,s*.52),n.add(r);let o=me(3815468,{roughness:.78});for(let a of[-1,1]){let c=Ut(Dt.box,o,.08*i,.09*i,.045*i);c.position.set(a*.1*i,e-.16*i,s*.42),n.add(c)}return n.userData.kind="sigma_07",n.userData.ageBand="adult",n.userData.paintTarget=!1,n.name="SIGMA_07",n}function lf(){let n=wr({height:1.7,skin:13223102,hair:855312,shirt:1842206,sleeves:!0,bottoms:1447448,cover:"pants",footwear:"boot",shoe:1118483,shoulderW:.36,chestW:.3,chestD:.18,hipW:.26,armR:.04,legR:.054}),{headY:t,headR:e,hipY:i,scale:s}=n.userData.body,r=me(1842206,{roughness:.88}),o=Ut(Dt.sphere,me(855312,{roughness:.95}),e*1.05,e*2.2,e*.82);o.position.set(0,t-.18*s,-.06*s),n.add(o);let a=Ut(Dt.box,r,.4*s,.72*s,.22*s);a.position.set(0,i+.22*s,-.02*s),n.add(a);let c=Ut(Dt.cyl,me(14209220,{roughness:.5}),.006*s,.07*s,.006*s);c.rotation.z=Math.PI/2,c.rotation.y=.4,c.position.set(.09*s,t-.04*s,e*.85),n.add(c);let l=Ut(Dt.sphere,me(12599328,{roughness:.4,metalness:.1,emissive:4198408}),.007*s);return l.position.set(.125*s,t-.038*s,e*.9),n.add(l),n.userData.kind="goth",n.userData.ageBand="adult",n.userData.paintTarget=!1,n.name="goth",n}function hf(){let n=wr({height:1.15,skin:15780256,hair:7028255,shirt:4045e3,sleeves:!0,bottoms:2972300,cover:"shorts",footwear:"shoe",shoe:15258186,shoulderW:.28,chestW:.22,chestD:.14,hipW:.2,armR:.034,legR:.046}),{headY:t,headR:e,scale:i}=n.userData.body,s=me(16115363,{roughness:.86}),r=Ut(Dt.cyl12,s,.17*i,.02*i,.17*i);r.position.y=t+e*.32;let o=Ut(Dt.cyl12,s,.1*i,.09*i,.1*i);return o.position.y=t+e*.58,n.add(r,o),n.userData.kind="kid",n.userData.ageBand="child",n.userData.paintTarget=!1,n.name="kid",n}function uf(){let n=new ft,t=Si.gullWhite,e=Si.gullGrey,i=Si.gullLeg,s=Ut(Dt.cyl,t,.055,.2,.055);s.rotation.x=Math.PI/2,s.position.set(0,.16,0);let r=Ut(Dt.sphere,t,.07,.055,.09);r.position.set(0,.155,.04),n.add(s,r);let o=Ut(Dt.cyl,t,.022,.055,.022);o.position.set(0,.19,.11),o.rotation.x=.7;let a=Ut(Dt.sphere,t,.042);a.position.set(0,.22,.145),n.add(o,a);let c=Ut(Dt.cone,Si.beak,.012,.055,.012);c.rotation.x=Math.PI/2,c.position.set(0,.21,.195),n.add(c);for(let h of[-1,1]){let u=Ut(Dt.sphere,Si.eye,.008);u.position.set(h*.022,.228,.17),n.add(u)}for(let h of[-1,1]){let u=new ft;u.position.set(h*.04,.175,.01);let d=Ut(Dt.box,e,.15,.022,.085);d.position.set(h*.075,0,0),d.rotation.z=h*-.22;let f=Ut(Dt.box,e,.13,.016,.06);f.position.set(h*.19,.025,-.015),f.rotation.z=h*-.4,u.add(d,f),n.add(u)}let l=Ut(Dt.box,e,.07,.016,.11);l.position.set(0,.15,-.13),n.add(l);for(let h of[-1,1]){let u=Ut(Dt.sphere,i,.012);u.position.set(h*.028,.1,.02);let d=Ut(Dt.cyl,i,.007,.08,.007);d.position.set(h*.028,.055,.02);let f=Ut(Dt.box,i,.04,.01,.05);f.position.set(h*.028,.012,.035),n.add(u,d,f)}return n.userData.kind="gull",n.userData.ageBand="gull",n.userData.paintTarget=!1,n.name="gull",n}function qe(n,t,e,i,s=0){return n.position.set(t,e,i),n.rotation.y=s,n}function df(n){let t=zt.boardwalkZ+3.6,e=.18,i=[{mesh:qe(Gn(),-8.2,0,4,.4),kind:"ken",ageBand:"adult"},{mesh:qe(Fs(),6.2,0,2.2,-.6),kind:"babe",ageBand:"adult"},{mesh:qe(cf(),2,e,16.5,Math.PI),kind:"sigma_07",ageBand:"adult"},{mesh:qe(lf(),11.5,0,14,-2.4),kind:"goth",ageBand:"adult"},{mesh:qe(Gn({hair:16739226,shorts:1723788,skin:13406042}),9.8,0,6.2,-1.1),kind:"ken",ageBand:"adult"},{mesh:qe(Fs({hair:3809816,bikini:3786452,skin:14262392}),-4.2,0,-1.8,.2),kind:"babe",ageBand:"adult"},{mesh:qe(hf(),-3.5,e,15.5,.8),kind:"kid",ageBand:"child"},{mesh:qe(uf(),8,1.2,t,-.3),kind:"gull",ageBand:"gull"},{mesh:qe(Gn({hair:16048762,shorts:14826299,skin:14721120}),-7.2,.38,zt.boardwalkZ+6.2,1.4),kind:"ken",ageBand:"adult"},{mesh:qe(Fs({hair:15909166,bikini:16739226,skin:15251608}),25.2,0,7.4,-2.2),kind:"babe",ageBand:"adult"},{mesh:qe(Gn({hair:6211839,shorts:15909166,skin:13931082}),-14,0,3.2,.9),kind:"ken",ageBand:"adult"},{mesh:qe(Fs({hair:9124394,bikini:16777215,skin:13208162}),1.4,0,-4.6,2.8),kind:"babe",ageBand:"adult"},{mesh:qe(lf(),-22,0,9.5,.3),kind:"goth",ageBand:"adult"},{mesh:qe(cf(),15.5,0,9,-1.8),kind:"sigma_07",ageBand:"adult"},{mesh:qe(uf(),-10,1.2,t,.8),kind:"gull",ageBand:"gull"},{mesh:qe(hf(),10.2,0,4.8,-.4),kind:"kid",ageBand:"child"}];for(let s of i)s.mesh.userData.kind=s.kind,s.mesh.userData.ageBand=s.ageBand,s.ageBand!=="adult"&&(s.mesh.userData.paintTarget=!1),n.add(s.mesh);return i}var _1={ken:4.2,babe:4.2,goth:3.8,sigma_07:4,kid:3.6,gull:4.8},y1={ken:["ken","lad"],babe:["babe","flirt"],goth:["goth"],sigma_07:["incel","sigma07","iamverysmart"],kid:["child"],gull:["gull"]},v1={ken:11e3,babe:11e3,goth:13e3,sigma_07:14e3,kid:14e3,gull:9e3},ff=new Set(["pleasure","flirt","gossip","incel","iamverysmart","babe","ken"]),M1=1.15,E1=2.8,b1=/^(oi+|oy|hey|watch out|watch it|look out|heads up|oi copper)[\s!.?,]*$/i;function pf(n,t){let e=n.x-t.x,i=n.z-t.z;return e*e+i*i}function S1(n){return 1/(1+Math.pow(n/M1,E1))}function bl(n){return n[Math.random()*n.length|0]}function mf(n){return(n.tags||[]).includes("interject")?!0:b1.test((n.text||"").trim())}function gf(n,t){let e=new Map,i=new Map,s=0,r=null,o="",a=0,c=!1,l=new Map,h=[],u=()=>{l.clear(),h.length=0;let g=n.manifest?.lines||[];for(let x of g)mf(x)&&h.push(x);for(let[x,p]of Object.entries(y1))l.set(x,g.filter(m=>{if(mf(m))return!1;let y=m.tags||[];return x==="kid"&&y.some(_=>ff.has(_))||x==="gull"&&y.some(_=>ff.has(_))||m.ageBand==="child"&&x!=="kid"?!1:p.some(_=>y.includes(_)||m.id&&m.id.includes(_))}))},d=g=>{let x=[];for(let p of t){let m=_1[p.kind];if(!m)continue;let y=Math.sqrt(pf(g,p.mesh.position));y>m||x.push({npc:p,d:y,g:S1(y)})}return x.sort((p,m)=>p.d-m.d),x},f=(g,x,p)=>{if(c||n.busy)return;c=!0;let m=n.play(g.id,{gain:x});m.ready.then(y=>{c=!1,y&&p(m)})};return{isTalking(g){return c||g<s},tick(g,x){if(!n.manifest||(l.size||u(),c))return;let p=d(x);if(r&&g<s&&p[0]&&r.setGain?.(p[0].g*1.05),g>=s&&(r=null),!p.length)return;let m=p[0];if(m.g<.12)return;let y=t.some(A=>A.ageBand==="child"&&pf(x,A.mesh.position)<25);if(g<s){if(g<a||g-(i.get(m.npc.mesh)||0)<6e3||!h.length)return;let A=bl(h);f(A,Math.min(1,m.g*1.2),D=>{i.set(m.npc.mesh,performance.now()),a=performance.now()+(D.duration||900)});return}let M=v1[m.npc.kind]||12e3;if(g-(e.get(m.npc.mesh)||0)<M||y&&m.npc.ageBand==="adult")return;let R=l.get(m.npc.kind)||[];if(!R.length)return;let w=bl(R);R.length>1&&w.id===o&&(w=bl(R)),f(w,m.g*1.05,A=>{let D=performance.now();e.set(m.npc.mesh,D),o=w.id,r=A,s=D+(A.duration||2e3)+200})}}}var w1=128,xf=6,T1=new Ot(15986660),A1=new Set(["sigma_07","goth","kid","gull"]);function Ki(n){return n?n.mesh||n:null}function Sl(n){let t=Ki(n);return n?.kind||t?.userData?.kind||null}function wl(n){let t=Ki(n);if(!t)return!1;let e=t.userData||{},i=n.ageBand??e.ageBand,s=Sl(n);return!(i!=="adult"||e.paintTarget===!1||A1.has(s))}function _f(n){let t=n.userData?.skinMats;if(!t||!t.length)return!1;if(typeof n.traverse!="function"){let i=n.userData?.kind;return i==="ken"||i==="babe"}let e=!1;return n.traverse(i=>{if(e||!i.isMesh)return;let s=i.material;s&&t.indexOf(s)<0&&(e=!0)}),e}function yf(n,t,e){return t?n==="babe"?e>=.18&&e<=.34||e>=.5&&e<=.6:n==="ken"?e>=.2&&e<=.36:e>=.18&&e<=.34:!1}function vf(n,t,e){return e<.08||e>.86?!1:!yf(n,t,e)}function R1(n,t,e){let i=0,s=1/e;for(let r=0;r<e;r++)vf(n,t,(r+.5)*s)&&(i+=e);return i||e*e}function Tl(n){if(!wl(n))return null;let t=Ki(n),e=t.userData;if(e.coverageMap)return e.coverageMap;let i=w1,s=new Uint8Array(i*i),r=new Float32Array(i*i),o=new ko(s,i,i,rl,vn);o.name="CoverageMap",o.needsUpdate=!1,o.generateMipmaps=!1,o.minFilter=xe,o.magFilter=xe,o.wrapS=yi,o.wrapT=un,o.flipY=!1,o.colorSpace=Be;let a=Sl(n),c=_f(t),l={size:i,data:s,thick:r,tex:o,kind:a,hasCloth:c,sum:0,coated:0,skinCount:R1(a,c,i)};return e.coverageMap=l,e.coverageTex=o,Number.isFinite(e.coverage)||(e.coverage=0),l}function Tr(n,t,e,i,s){let r=Tl(n);if(!r||!(s>0)||!(i>0))return Vn(n);let o=r.size,a=r.data,c=r.thick,l=Math.max(.5,i*o),h=(t%1+1)%1*o,u=Math.min(1,Math.max(0,e))*o,d=l*l,f=Math.floor(h-l),g=Math.ceil(h+l),x=Math.max(0,Math.floor(u-l)),p=Math.min(o-1,Math.ceil(u+l)),m=1/l,y=1/o,_=r.sum,M=r.coated;for(let A=x;A<=p;A++){let D=A+.5-u,v=(A+.5)*y;if(vf(r.kind,r.hasCloth,v))for(let b=f;b<=g;b++){let C=b+.5-h,N=C*C+D*D;if(N>d)continue;let $=(b%o+o)%o,P=Math.sqrt(N)*m,O=Math.pow(1-P,1.6),H=A*o+$,B=a[H],q=c[H]+s*O;c[H]=q>1?1:q;let G=c[H]*255+.5|0;_+=G-B,B<xf&&G>=xf&&M++,a[H]=G}}r.sum=_,r.coated=M,r.tex.needsUpdate=!0;let R=Vn(n),w=Ki(n);return w&&(w.userData.coverage=R),R}function Vn(n){let t=Ki(n);if(!t)return 0;let e=t.userData?.coverageMap;if(!e||!e.skinCount){let i=t.userData?.coverage;return Number.isFinite(i)?Math.min(1,Math.max(0,i)):0}return Math.min(1,Math.max(0,e.coated/e.skinCount))}function Mf(n,t,e){let i=Ki(n);if(!i||i.userData.paintTarget===!1)return!0;let s=i.userData.coverageMap,r=s?.kind??Sl(n),o=s?s.hasCloth:_f(i);return yf(r,o,e)}function Ar(n){let t=Ki(n);if(!t)return;let e=t.userData.skinMats,i=t.userData.bareColor;if(!e||!i)return;let s=Vn(n);t.userData.coverage=s;for(let r of e)r.color.copy(i).lerp(T1,s*.72),r.roughness=.68*(1-s)+.26*s,r.metalness=.04+s*.08}var Ef=2.35,P1=.38,L1=.22,I1=.5,D1=.4,U1=[.14,.4,.68];function N1(n,t){let e=n.x-t.x,i=n.z-t.z;return e*e+i*i}function bf(n){return Math.atan2(Math.sin(n),Math.cos(n))}function O1(n){return n-Math.floor(n)}function B1(n,t,e){let i=t.rotation.y||0,s;if(e!=null&&Number.isFinite(e))s=bf(e-i);else if(n){let r=n.x-t.position.x,o=n.z-t.position.z;s=bf(Math.atan2(r,o)-i)}else s=0;return{u:O1(I1+s/(Math.PI*2)),v:D1}}function Sf(n,t,e,i,s){if(!e)return null;let r=null,o=Ef*Ef;for(let h of n){if(!wl(h))continue;let u=h.mesh;if(!u)continue;let d=N1(t,u.position);d<o&&(o=d,r=h)}if(!r)return null;Tl(r);let a=B1(t,r.mesh,s),c=Math.min(1,Math.max(0,i)*P1),l=!1;for(let h of U1)Mf(r,a.u,h)||(Tr(r,a.u,h,L1,c),l=!0);return l&&Ar(r),{npc:r,coverage:Vn(r)}}function wf(){let n={bottleMl:200,handMl:0,squeezing:!1,_waste:0,tick({squeezeHeld:t=!1,applying:e=!1,hitting:i=!1,dt:s=0}={}){let r=s>0?s:0;if(n.squeezing=!!t,n.squeezing&&n.bottleMl>0){let o=Math.min(10*r,n.bottleMl);n.bottleMl-=o,n.handMl+=o,n.handMl>6&&(n._waste+=n.handMl-6,n.handMl=6)}(e||i)&&n.handMl>0&&(n.handMl-=Math.min(2.2*r,n.handMl))},canPaint(){return n.handMl>0},waste(){return n._waste}};return n}var F1=15986660,k1=.42,H1=.48,Al={x:0,y:-.05,z:.032};function Rr(n,t,e,i){return n+(t-n)*(1-Math.exp(-i*Math.max(0,e)))}function z1(){let n=new W(new jt(.016,8,6),new Vt({color:F1,roughness:.22,metalness:.04}));return n.name="lotionBlob",n.castShadow=!0,n.position.set(Al.x,Al.y,Al.z),n.scale.set(0,0,0),n.visible=!1,n}function Rl(n){let t=n?.userData?.parts?.bottle;if(!t)return null;if(t.userData.restRot||(t.userData.restRot={x:t.rotation.x,y:t.rotation.y,z:t.rotation.z}),!t.userData.palm){let e=z1(),i=t.parent;i?i.add(e):t.add(e),t.userData.palm=e}return t}function Tf(n,t,e){let i=n?.userData?.parts?.bottle;if(!i||!t)return;(!i.userData.palm||!i.userData.restRot)&&Rl(n);let s=i.userData.restRot,r=i.userData.palm;if(!s)return;let o=t.squeezing?1:0;if(i.rotation.x=Rr(i.rotation.x,s.x+o*k1,e,14),i.rotation.z=Rr(i.rotation.z,s.z+o*H1,e,14),!r)return;let a=Math.max(0,Math.min(1,(t.handMl||0)/6));r.visible=a>.01;let c=Rr(r.scale.x,a*1.25,e,10),l=Rr(r.scale.y,a*.55,e,10),h=Rr(r.scale.z,a*1.15,e,10);r.scale.set(c,l,h)}var Af=12088115,G1=13934615,Rf=16715792,V1=2.4,Cf=6,W1=8,X1=9.4,q1=32,ua=13.2,Cl=11.5,Ye={hull:new Xo(.2,1.16,3,6),eye:new jt(.042,6,6),brow:new It(.22,.034,.07),heliBody:new It(2.35,.7,1.18),heliNose:new It(.72,.48,.86),heliCabin:new It(1.05,.42,1.05),heliTail:new It(2.05,.14,.14),heliFin:new It(.1,.52,.32),blade:new It(6.2,.035,.16),tailBlade:new It(.04,.9,.1),mast:new Bt(.05,.05,.28,6),skid:new It(2.15,.055,.055),skidLeg:new It(.055,.26,.055),beam:new Bt(.028,.01,1,5)},Ze={copper:new Vt({color:Af,metalness:.85,roughness:.35}),gold:new Vt({color:G1,metalness:.82,roughness:.32}),eye:new de({color:Rf}),heli:new Vt({color:1709586,metalness:.45,roughness:.55}),heliAccent:new Vt({color:Af,metalness:.7,roughness:.4}),rotor:new Vt({color:2761760,metalness:.35,roughness:.62}),beam:new de({color:Rf})},Y1=new L(0,1,0),Ji=new L,Z1=new L;function rn(n,t=!0){return n.castShadow=t,n.receiveShadow=!0,n}function $1(){let n=new ft;n.name="recall-hull";let t=rn(new W(Ye.hull,Ze.copper));t.position.y=.2+.58,n.add(t);let e=rn(new W(Ye.brow,Ze.gold),!1);e.position.set(0,1.58,.14),n.add(e);for(let i of[-.055,.055]){let s=new W(Ye.eye,Ze.eye);s.position.set(i,1.52,.16),n.add(s)}return n}function K1(){let n=new ft;n.name="recall-heli";let t=rn(new W(Ye.heliBody,Ze.heli));t.position.y=.55;let e=rn(new W(Ye.heliNose,Ze.heli));e.position.set(0,.42,.92);let i=rn(new W(Ye.heliCabin,Ze.heliAccent),!1);i.position.set(0,.92,.12);let s=rn(new W(Ye.heliTail,Ze.heli));s.position.set(0,.62,-1.85);let r=rn(new W(Ye.heliFin,Ze.heli));r.position.set(0,.95,-2.78);let o=rn(new W(Ye.mast,Ze.rotor),!1);o.position.set(0,1.22,0),n.add(t,e,i,s,r,o);for(let d of[-.42,.42]){let f=rn(new W(Ye.skid,Ze.rotor),!1);f.position.set(d,.05,.08);let g=rn(new W(Ye.skidLeg,Ze.rotor),!1);g.position.set(d,.2,.55);let x=rn(new W(Ye.skidLeg,Ze.rotor),!1);x.position.set(d,.2,-.45),n.add(f,g,x)}let a=new ft;a.position.set(0,1.38,0);let c=rn(new W(Ye.blade,Ze.rotor),!1),l=rn(new W(Ye.blade,Ze.rotor),!1);l.rotation.y=Math.PI/2,a.add(c,l),n.add(a);let h=new ft;h.position.set(.12,.95,-2.82);let u=rn(new W(Ye.tailBlade,Ze.rotor),!1);return h.add(u),n.add(h),n.userData.rotor=a,n.userData.tailRotor=h,n}function Pf({scene:n,onGameOver:t,play:e}={}){let i=!1,s=!1,r=0,o=0,a=new L,c=[],l=[],h=null;function u(x){let p=Cf+(Math.random()*(W1-Cf+1)|0),m=p>6?3:2,y=Math.random()*Math.PI*2;for(let _=0;_<m;_++){let M=y+_/m*Math.PI*2,R=x.x+Math.cos(M)*Cl,w=x.z+Math.sin(M)*Cl,A=K1();A.position.set(R,ua,w),A.rotation.y=M+Math.PI,n.add(A),l.push({root:A,cx:x.x,cz:x.z,angle:M,radius:Cl,spin:18+Math.random()*6})}for(let _=0;_<p;_++){let M=l[_%l.length],R=(_/m|0)*.55,w=(_%2===0?-1:1)*(.35+R),A=$1(),D=M.root.position.x+Math.cos(M.angle+Math.PI*.5)*w,v=M.root.position.z+Math.sin(M.angle+Math.PI*.5)*w,b=ua-1.05;A.position.set(D,b,v),n.add(A),c.push({root:A,x:D,y:b,z:v,vy:-1.2-Math.random()*2.4,phase:Math.random()*Math.PI*2,speed:X1*(.88+Math.random()*.22)})}}function d(x){h&&n.remove(h);let p=l[0]?l[0].root.position:new L(x.x,x.y+1.55,x.z-8),m=Z1.set(x.x,x.y+1.55,x.z);Ji.copy(p).sub(m),Ji.y=Math.max(.4,Ji.y);let y=Math.max(4,Ji.length());Ji.normalize(),h=new W(Ye.beam,Ze.beam),h.scale.set(1,y,1),h.position.copy(m).addScaledVector(Ji,y*.5),h.quaternion.setFromUnitVectors(Y1,Ji),n.add(h),o=.2}function f(x){if(i||x!=="laser"&&x!=="punch"||!n)return!1;if(i=!0,r=0,u(a),x==="laser"&&d(a),typeof e=="function")try{e("factory_recall_01")}catch{}return!0}function g(x,p){if(p&&a.set(p.x,p.y||0,p.z),!i||!(x>0))return;let m=Math.min(x,.05);r+=m,h&&(o-=m,o<=0&&(n.remove(h),h=null));for(let y of l){y.angle+=m*.28;let _=y.cx+Math.cos(y.angle)*y.radius,M=y.cz+Math.sin(y.angle)*y.radius;y.root.position.set(_,ua+Math.sin(r*2.1+y.angle)*.18,M),y.root.lookAt(a.x,ua,a.z),y.root.userData.rotor.rotation.y+=y.spin*m,y.root.userData.tailRotor.rotation.x+=y.spin*1.7*m}for(let y of c){let _=a.x-y.x,M=a.z-y.z;if(y.y>0)y.vy-=q1*m,y.y+=y.vy*m,y.y<=0&&(y.y=0,y.vy=0),y.root.rotation.x=0;else{let w=Math.hypot(_,M);if(w>.55){let A=1/w;y.x+=_*A*y.speed*m,y.z+=M*A*y.speed*m}y.phase+=m*14,y.root.rotation.x=.12}y.root.rotation.y=Math.atan2(_,M);let R=y.y>0?0:Math.abs(Math.sin(y.phase))*.06;y.root.position.set(y.x,y.y+R,y.z)}!s&&r>=V1&&(s=!0,t?.())}return{tryFire:f,tick:g,get wanted(){return i}}}var Lf=12,J1=.02,If=.85,Df="aus101-reticule-css";function Cr(n){return n?n.mesh||n:null}function Of(n){return n&&(n.kind||n.mesh?.userData?.kind||n.userData?.kind)||null}function j1(n){let t=Cr(n);if(!t)return!1;let e=t.userData||{},i=n.ageBand??e.ageBand,s=Of(n);return!(i!=="adult"||e.paintTarget===!1||s==="sigma_07"||s==="goth"||s==="kid"||s==="gull")}function Uf(n){let t=Vn(n);if(Number.isFinite(t))return Math.min(1,Math.max(0,t));let i=Cr(n)?.userData?.coverage;return Number.isFinite(i)?Math.min(1,Math.max(0,i)):0}function Q1(n){return String(n).padStart(2,"0")}function tM(){if(typeof document>"u"||document.getElementById(Df))return;let n=document.createElement("style");n.id=Df,n.textContent=`
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
`.trim(),document.head.appendChild(n)}function Nf(n,t,e){let i=document.createElement(n);return t&&(i.className=t),e&&e.appendChild(i),i}function Bf(n={}){tM();let t=Nf("div");t.id="aus101-reticule",t.setAttribute("aria-label","Reticule bay");let e=[],i=[],s=0,r=-1;for(let f=0;f<Lf;f++){e.push({id:f,kind:null,mesh:null,coverage:0,dose:0,burn:!1,applying:!1,_seq:0,_prevCov:0});let g=Nf("div","aus101-ret-slot is-empty",t);g.dataset.slot=String(f),g.addEventListener("pointerdown",x=>{let p=e[f];p.mesh&&(x.preventDefault(),x.stopPropagation(),r=f,n.onSelect?.(p),t.dispatchEvent(new CustomEvent("aus101-reticule-select",{detail:p})),c())}),i.push(g)}function o(f){let g=Q1(f.id+1);if(!f.mesh)return`SUBJECT ${g} // \u2014\u2014`;if(f.burn||f.dose>1)return`SUBJECT ${g} // BURN`;let x=Math.max(0,Math.round((1-f.dose)*100));return`SUBJECT ${g} // TELOMERE ${x}%`}function a(f){let g=e[f],x=i[f];x.textContent=o(g);let p=!!g.mesh;x.className="aus101-ret-slot",p?x.classList.add("is-live"):x.classList.add("is-empty"),p&&(g.burn||g.dose>1)?x.classList.add("is-burn"):p&&g.coverage>=If&&x.classList.add("is-locked"),p&&g.applying&&x.classList.add("is-applying"),p&&r===f&&x.classList.add("is-sel")}function c(){for(let f=0;f<Lf;f++)a(f)}function l(f,g){let x=Cr(g),p=x.userData||(x.userData={});f.kind=Of(g),f.mesh=x,f.coverage=Uf(g),f.dose=Number.isFinite(p.dose)?p.dose:0,f.burn=f.dose>1||!!p.burn,f.applying=!1,f._seq=++s,f._prevCov=f.coverage,p.dose=f.dose,f.burn&&(p.burn=!0),a(f.id)}function h(f){f.kind=null,f.mesh=null,f.coverage=0,f.dose=0,f.burn=!1,f.applying=!1,f._seq=0,f._prevCov=0,r===f.id&&(r=-1),a(f.id)}function u(f){if(!j1(f))return null;let g=Cr(f),x=e.find(m=>m.mesh===g);if(x)return x;let p=e.find(m=>!m.mesh);return p||(p=e.reduce((m,y)=>m._seq<=y._seq?m:y),h(p)),l(p,f),p}function d(f,g){let x=Cr(g),p=Number.isFinite(f)?Math.max(0,f):0;for(let m of e){if(!m.mesh)continue;let y=Uf(m.mesh);m.coverage=y;let _=y>m._prevCov+1e-5,M=x===m.mesh||_;m.applying=M,m._prevCov=y,y<If&&!M&&(m.dose+=(1-y)*p*J1),m.dose>1&&(m.burn=!0);let R=m.mesh.userData||(m.mesh.userData={});R.coverage=y,R.dose=m.dose,m.burn&&(R.burn=!0),a(m.id)}}return c(),{track:u,tick:d,html:t,slots:e}}var Pr=["boardwalk","apply","menu"],eM=["dj_song_01","dj_song_02","dj_song_03"];function nM(n){return n<10?`0${n}`:String(n)}function iM(){let n=t=>typeof matchMedia=="function"?matchMedia(t).matches:!1;return typeof matchMedia!="function"?"ontouchstart"in window:!!(n("(pointer: coarse)")||n("(any-pointer: coarse)")||"ontouchstart"in window&&n("(hover: none)"))}function sM(){return typeof matchMedia=="function"&&matchMedia("(orientation: landscape)").matches?!0:window.innerWidth>window.innerHeight}function gn(n,t,e){let i=document.createElement(n);return t&&Object.assign(i.style,t),e&&e.appendChild(i),i}function rM(n,t){let e=t>>>0||1,i=n.slice();for(let s=i.length-1;s>0;s--){e=Math.imul(e,1664525)+1013904223>>>0;let r=e%(s+1),o=i[s];i[s]=i[r],i[r]=o}return i}function oM(n){if(!n||n===document.body||n===document.documentElement)return!1;let t=(n.tagName||"").toLowerCase();return t==="input"||t==="textarea"||t==="select"?!0:!!n.isContentEditable}function aM(){let n=gn("span",{display:"flex",alignItems:"center",gap:"1px"});return gn("span",{width:"2px",height:"10px",background:"currentColor",borderRadius:"1px"},n),gn("span",{width:"0",height:"0",borderStyle:"solid",borderWidth:"5px 8px 5px 0",borderColor:"transparent currentColor transparent transparent"},n),n}function cM(){let n=gn("span",{display:"flex",alignItems:"center",gap:"1px"});return gn("span",{width:"0",height:"0",borderStyle:"solid",borderWidth:"5px 0 5px 8px",borderColor:"transparent transparent transparent currentColor"},n),gn("span",{width:"2px",height:"10px",background:"currentColor",borderRadius:"1px"},n),n}function Ff(){let n=gn("span",{display:"flex",alignItems:"center",gap:"3px"}),t=()=>gn("span",{width:"3px",height:"10px",background:"currentColor",borderRadius:"1px"},n);return t(),t(),n}function lM(){return gn("span",{width:"0",height:"0",marginLeft:"2px",borderStyle:"solid",borderWidth:"6px 0 6px 9px",borderColor:"transparent transparent transparent currentColor"})}function Pl(n,t){let e=gn("button",{width:"26px",height:"26px",borderRadius:"50%",padding:"0",margin:"0",border:"1px solid rgba(251,246,234,0.28)",background:"rgba(12,18,16,0.42)",color:"rgba(251,246,234,0.92)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.18), 0 3px 12px rgba(0,0,0,0.28)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",touchAction:"none",cursor:"pointer",appearance:"none",webkitAppearance:"none",outline:"none",backdropFilter:"blur(8px)",webkitBackdropFilter:"blur(8px)",userSelect:"none",webkitUserSelect:"none"});return e.type="button",e.tabIndex=-1,e.setAttribute("aria-label",t),e.appendChild(n),e}function hM(){let n=[];for(let t=1;t<=49;t++)n.push(`dj_quip_${nM(t)}`);return rM(n,performance.now()*997|0)}function kf({carpenter:n,voice:t,isTalking:e}={}){let i=Pr.indexOf(n?.state);i<0&&(i=0);let s=n?n.running===!1:!1,r=1,o=!1,a=[],c=!1,l=null;if(!document.getElementById("aus101-radio-css")){let B=document.createElement("style");B.id="aus101-radio-css",B.textContent="#aus101-radio,#aus101-radio *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}#aus101-radio button:active{background:rgba(255,215,106,0.28)!important;}#aus101-radio .radio-vol{-webkit-appearance:none;appearance:none;width:56px;height:18px;background:transparent;padding:0;margin:0 2px 0 0;cursor:pointer;}#aus101-radio .radio-vol::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:rgba(251,246,234,0.28);}#aus101-radio .radio-vol::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:#ffd76a;margin-top:-3.5px;border:0;}#aus101-radio .radio-vol::-moz-range-track{height:3px;border-radius:2px;background:rgba(251,246,234,0.28);}#aus101-radio .radio-vol::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:#ffd76a;border:0;}#aus101-radio[data-touch='1'] .radio-vol{display:none;}",document.head.appendChild(B)}let h=gn("div",{position:"fixed",zIndex:"12",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",touchAction:"none"});h.id="aus101-radio",h.setAttribute("role","group"),h.setAttribute("aria-label","Reticule FM 101.7");let u=gn("div",{display:"flex",alignItems:"center",gap:"8px",pointerEvents:"auto",touchAction:"none"},h),d=document.createElement("input");d.type="range",d.className="radio-vol",d.min="0",d.max="1",d.step="0.01",d.value="1",d.tabIndex=-1,d.setAttribute("aria-label","Volume"),u.appendChild(d);let f=Pl(aM(),"Previous"),g=Pl(Ff(),"Pause"),x=Pl(cM(),"Next"),p=gn("span",{position:"absolute",width:"5px",height:"5px",borderRadius:"50%",right:"3px",top:"3px",background:"#ffd76a",boxShadow:"0 0 6px rgba(255,215,106,0.7)",pointerEvents:"none"});g.style.position="relative",g.appendChild(p),u.append(f,g,x);function m(){if(t?.busy)return!0;if(typeof e=="function")try{if(e(performance.now()))return!0}catch{}return!1}function y(){return a.length||(a=hM()),a.pop()}function _(){if(typeof t?.play!="function"){o=!1;return}if(m()){o=!0;return}o=!1;let B=eM[i]||"dj_song_01",q=t.play(B);q.ready?.then(G=>{if(!G){o=!0;return}let z=q.onended;q.onended=()=>{if(typeof z=="function"&&z(),m())return;let k=y();k&&t.play(k)}})}function M(B){r=Math.max(0,Math.min(1,B)),d.value!==String(r)&&(d.value=String(r)),n?.setMix?.(r)}function R(){g.replaceChildren(s?lM():Ff(),p),g.setAttribute("aria-label",s?"Play":"Pause"),g.setAttribute("aria-pressed",s?"true":"false")}function w(){let B=["#ffd76a","#fbf6ea","#ff6a4a"];p.style.background=B[i]||B[0],p.style.boxShadow=`0 0 6px ${B[i]||B[0]}`}function A(B){n?.setState?.(Pr[i]),s||(n?.start?.(),n?.setMix?.(r)),w(),B&&_()}function D(B){i=(i+B+Pr.length)%Pr.length,A(!0)}function v(){s=!s,s?n?.stop?.():(n?.setState?.(Pr[i]),n?.start?.(),n?.setMix?.(r)),R()}function b(){let q=sM()?"max(20px, calc(env(safe-area-inset-top, 0px) + 4px))":"max(12px, calc(env(safe-area-inset-top, 0px) + 6px))";h.style.top=q,h.style.right="max(10px, env(safe-area-inset-right, 0px))",h.dataset.touch=iM()?"1":"0"}let C=B=>{if(c||B.metaKey||B.ctrlKey||B.altKey||oM(B.target))return;let q=B.code,G=B.key;if(q==="Minus"||q==="NumpadSubtract"||G==="-"||G==="_"){M(r-.06),B.preventDefault();return}if(q==="Equal"||q==="NumpadAdd"||G==="="||G==="+"){M(r+.06),B.preventDefault();return}if(!B.repeat){if(q==="BracketLeft"||G==="["||q==="Comma"||G===","){D(-1),B.preventDefault();return}if(q==="BracketRight"||G==="]"||q==="Period"||G==="."){D(1),B.preventDefault();return}(q==="KeyP"||G==="p"||G==="P")&&(v(),B.preventDefault())}},N=()=>M(parseFloat(d.value)),$=B=>{if(!(B.pointerType==="mouse"&&B.button!==0)&&B.target!==d){l={id:B.pointerId,y:B.clientY,vol:r,moved:!1};try{u.setPointerCapture(B.pointerId)}catch{}}},P=B=>{if(!l||B.pointerId!==l.id)return;let q=l.y-B.clientY;Math.abs(q)>7&&(l.moved=!0),l.moved&&M(l.vol+q/140)},O=B=>{if(!l||B.pointerId!=null&&B.pointerId!==l.id)return;let q=l.moved;l=null,q&&(B.preventDefault(),B.stopPropagation())};function H(B,q){B.addEventListener("pointerup",G=>{l?.moved||(G.preventDefault(),G.stopPropagation(),q())}),B.addEventListener("click",G=>{G.preventDefault(),G.stopPropagation()})}return H(f,()=>D(-1)),H(g,()=>v()),H(x,()=>D(1)),d.addEventListener("input",N),d.addEventListener("change",N),u.addEventListener("pointerdown",$),u.addEventListener("pointermove",P),u.addEventListener("pointerup",O),u.addEventListener("pointercancel",O),window.addEventListener("keydown",C),window.addEventListener("resize",b),window.addEventListener("orientationchange",b),b(),R(),w(),document.body.appendChild(h),{el:h,tick(){c||(b(),o&&!m()&&_())},dispose(){c||(c=!0,o=!1,window.removeEventListener("keydown",C),window.removeEventListener("resize",b),window.removeEventListener("orientationchange",b),d.removeEventListener("input",N),d.removeEventListener("change",N),u.removeEventListener("pointerdown",$),u.removeEventListener("pointermove",P),u.removeEventListener("pointerup",O),u.removeEventListener("pointercancel",O),h.remove())}}}var Hf="aus101-apply-mg-css",Ll={r:243,g:239,b:228},Il={r:58,g:36,b:24},zf=.2,uM=.2,dM=.42,Gf={head:{u:.5,v:.15},torso:{u:.5,v:.4},armL:{u:.2,v:.38},armR:{u:.8,v:.38},legL:{u:.35,v:.65},legR:{u:.65,v:.65}},fM=["head","armL","armR","torso","legL","legR"];function Vf(n){return n?n.mesh||n:null}function da(n){return n<0?0:n>1?1:n}function Dl(n,t,e){return n+(t-n)*e+.5|0}function pM(n){let t=da(n);return`rgb(${Dl(Il.r,Ll.r,t)},${Dl(Il.g,Ll.g,t)},${Dl(Il.b,Ll.b,t)})`}function mM(){return typeof Tr=="function"?Tr:null}function gM(n){if(typeof Vn=="function"){let e=Vn(n);if(Number.isFinite(e))return da(e)}let t=Vf(n)?.userData?.coverage;return Number.isFinite(t)?da(t):0}function xM(n,t,e,i){let s=n.size,r=n.data;if(!s||!r)return 0;let o=Math.max(1,i*s),a=(t%1+1)%1*s,c=Math.min(1,Math.max(0,e))*s,l=o*o,h=Math.floor(a-o),u=Math.ceil(a+o),d=Math.max(0,Math.floor(c-o)),f=Math.min(s-1,Math.ceil(c+o)),g=0,x=0;for(let p=d;p<=f;p++){let m=p+.5-c;for(let y=h;y<=u;y++){let _=y+.5-a;if(_*_+m*m>l)continue;let M=(y%s+s)%s;g+=r[p*s+M],x++}}return x?g/(x*255):0}function _M(n,t){let e=Gf[t],i=Vf(n)?.userData?.coverageMap;return i&&e?da(xM(i,e.u,e.v,.1)):gM(n)}function wi(n,t,e,i,s,r){let o=i-t,a=s-e,c=Math.hypot(o,a)||1,l=-a/c*r,h=o/c*r,u=Math.atan2(h,l),d=u+Math.PI;n.moveTo(t+l,e+h),n.lineTo(i+l,s+h),n.arc(i,s,r,u,d),n.lineTo(t-l,e-h),n.arc(t,e,r,d,u),n.closePath()}function yM(n,t){let e=n/200,i=t/360,s=f=>f*e,r=f=>f*i,o=f=>f*Math.min(e,i),a=new Path2D;a.ellipse(s(100),r(48),s(26),r(30),0,0,Math.PI*2);let c=new Path2D;c.moveTo(s(88),r(76)),c.bezierCurveTo(s(78),r(78),s(66),r(84),s(58),r(96)),c.lineTo(s(62),r(198)),c.quadraticCurveTo(s(64),r(216),s(78),r(222)),c.lineTo(s(122),r(222)),c.quadraticCurveTo(s(136),r(216),s(138),r(198)),c.lineTo(s(142),r(96)),c.bezierCurveTo(s(134),r(84),s(122),r(78),s(112),r(76)),c.closePath();let l=new Path2D;wi(l,s(56),r(100),s(40),r(168),o(9)),wi(l,s(40),r(168),s(34),r(230),o(7.5)),l.ellipse(s(32),r(242),o(8),o(9),0,0,Math.PI*2);let h=new Path2D;wi(h,s(144),r(100),s(160),r(168),o(9)),wi(h,s(160),r(168),s(166),r(230),o(7.5)),h.ellipse(s(168),r(242),o(8),o(9),0,0,Math.PI*2);let u=new Path2D;wi(u,s(84),r(222),s(78),r(282),o(12)),wi(u,s(78),r(282),s(76),r(336),o(10)),u.ellipse(s(70),r(344),s(16),r(7),0,0,Math.PI*2);let d=new Path2D;return wi(d,s(116),r(222),s(122),r(282),o(12)),wi(d,s(122),r(282),s(124),r(336),o(10)),d.ellipse(s(130),r(344),s(16),r(7),0,0,Math.PI*2),{head:a,torso:c,armL:l,armR:h,legL:u,legR:d}}function vM(){if(typeof document>"u"||document.getElementById(Hf))return;let n=document.createElement("style");n.id=Hf,n.textContent=`
#aus101-apply-mg{
  position:fixed;
  inset:0;
  z-index:14;
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
  left:0;
  top:8px;
  width:min(168px, 28vw);
  height:min(300px, calc(100% - 152px));
  pointer-events:auto;
  touch-action:none;
  box-sizing:border-box;
  background:linear-gradient(180deg, rgba(42,30,16,0.86), rgba(10,12,10,0.9));
  border:1px solid rgba(196,160,80,0.5);
  box-shadow:inset 0 0 0 1px rgba(12,10,8,0.72), 0 0 0 1px rgba(255,180,80,0.12), 0 12px 28px rgba(0,0,0,0.35);
  border-radius:6px;
  overflow:hidden;
}
@media (orientation:portrait){
  #aus101-apply-mg .aus101-apply-card{
    left:50%;
    top:auto;
    bottom:8px;
    transform:translateX(-50%);
    width:min(176px, 48vw);
    height:min(300px, 48vh);
  }
}
#aus101-apply-mg canvas{
  display:block;
  width:100%;
  height:100%;
  cursor:pointer;
  touch-action:none;
}
`.trim(),document.head.appendChild(n)}function Wf({onStamp:n}={}){vM();let t=document.createElement("div");t.id="aus101-apply-mg",t.setAttribute("aria-hidden","true"),t.setAttribute("aria-label","Coverage map");let e=document.createElement("div");e.className="aus101-apply-card",t.appendChild(e);let i=document.createElement("canvas");e.appendChild(i);let s=i.getContext("2d"),r=null,o=!1,a=null,c=0,l=0,h=null,u={down:!1,id:-1,region:null,lastT:0};function d(){let v=Math.min(window.devicePixelRatio||1,2),b=Math.max(1,i.clientWidth||e.clientWidth||160),C=Math.max(1,i.clientHeight||e.clientHeight||280),N=Math.max(1,Math.round(b*v)),$=Math.max(1,Math.round(C*v));return(i.width!==N||i.height!==$)&&(i.width=N,i.height=$,a=null),(!a||c!==N||l!==$)&&(a=yM(N,$),c=N,l=$),{w:N,h:$}}function f(v,b){if(!a||!s)return null;for(let C of fM)if(s.isPointInPath(a[C],v,b))return C;return null}function g(v){let b=i.getBoundingClientRect(),C=b.width||1,N=b.height||1;return{x:(v.clientX-b.left)/C*c,y:(v.clientY-b.top)/N*l}}function x(){if(!s||!o)return;let{w:v,h:b}=d();s.clearRect(0,0,v,b),s.fillStyle="rgba(8,10,8,0.2)",s.beginPath(),s.ellipse(v*.5,b*.96,v*.28,b*.03,0,0,Math.PI*2),s.fill();let C=["legL","legR","armL","armR","torso","head"];for(let $ of C){let P=r?_M(r,$):0;if(s.fillStyle=pM(P),s.fill(a[$]),P>.08){s.save(),s.clip(a[$]);let O=s.createLinearGradient(0,0,0,b*.5);O.addColorStop(0,`rgba(255,255,248,${.14+P*.22})`),O.addColorStop(1,"rgba(255,255,248,0)"),s.fillStyle=O,s.fillRect(0,0,v,b),s.restore()}}s.lineJoin="round",s.lineCap="round",s.strokeStyle="rgba(251,246,234,0.28)",s.lineWidth=Math.max(1,v/200);for(let $ of C)s.stroke(a[$]);let N=u.region||h;N&&a[N]&&(s.strokeStyle="rgba(224,176,64,0.95)",s.lineWidth=Math.max(1.5,v/110),s.stroke(a[N]))}function p(v,b){if(!r||!v||!(b>0))return;let C=Gf[v];if(!C)return;let N=mM();N&&(N(r,C.u,C.v,zf,b),typeof Ar=="function"&&Ar(r)),n?.({npc:r,u:C.u,v:C.v,radius:zf,amount:b,region:v})}function m(v,b){let C=g(v),N=f(C.x,C.y);u.region=N,h=N,N&&p(N,b),x()}function y(){if(!u.down||!u.region)return;let v=performance.now(),b=Math.min(.05,Math.max(0,(v-u.lastT)/1e3));u.lastT=v,b>0&&p(u.region,dM*b)}function _(v){if(o&&!(v.pointerType==="mouse"&&v.button!==0)){v.preventDefault(),v.stopPropagation(),u.down=!0,u.id=v.pointerId,u.lastT=performance.now();try{i.setPointerCapture(v.pointerId)}catch{}m(v,uM)}}function M(v){if(!o)return;let b=g(v),C=f(b.x,b.y);if(u.down&&v.pointerId===u.id){v.preventDefault(),v.stopPropagation(),u.region=C,h=C,y(),x();return}h!==C&&(h=C,x())}function R(v){if(!(u.id!==-1&&v.pointerId!==u.id)&&(u.down=!1,u.id=-1,u.region=null,u.lastT=0,o)){let b=g(v);h=f(b.x,b.y),x()}}i.addEventListener("pointerdown",_),i.addEventListener("pointermove",M),i.addEventListener("pointerup",R),i.addEventListener("pointercancel",R),i.addEventListener("lostpointercapture",R),i.addEventListener("contextmenu",v=>v.preventDefault()),window.addEventListener("resize",()=>{o&&x()});function w(v){if(!v){A();return}r=v,o=!0,t.classList.add("is-on"),t.setAttribute("aria-hidden","false"),x(),requestAnimationFrame(x)}function A(){r=null,o=!1,h=null,u.down=!1,u.id=-1,u.region=null,t.classList.remove("is-on"),t.setAttribute("aria-hidden","true")}function D(){o&&(y(),x())}return document.body.appendChild(t),{show:w,hide:A,tick:D,el:t}}var MM={piano:[{src:"assets/media/cutscene/enc_piano.jpg",hold:2800}],painter:[{src:"assets/media/cutscene/enc_painter.jpg",hold:2800}],incel:[{src:"assets/media/cutscene/enc_incel.jpg",hold:2800}],kid:[{src:"assets/media/cutscene/enc_kid.jpg",hold:2800}],babe:[{src:"assets/media/cutscene/enc_babe.jpg",hold:2800}],fight:[{src:"assets/media/cutscene/enc_fight.jpg",hold:2800}]};function EM(n,t){if(!n||!t)return 1/0;let e=n.x??n.position?.x,i=n.z??n.position?.z,s=t.x??t.position?.x,r=t.z??t.position?.z;if(e==null||s==null)return 1/0;let o=e-s,a=i-r;return o*o+a*a}function Xf(n){let t=new Set,e=!1,i=null;return{seen:t,tick(){if(e||!n.isPlaying()||n.reel.playing)return;let s=n.getPlayerPos();for(let r of n.spots){if(t.has(r.id))continue;let o=r.radius??5.5;if(EM(s,r.getPos())>o*o)continue;let a=MM[r.id];if(!a)continue;t.add(r.id),e=!0,i=r.id;let c=n.reel.onDone;n.reel.onDone=()=>{n.reel.onDone=c,e=!1;let l=i;i=null,n.onEnd?.(l)},n.onStart?.(r.id),n.reel.start(a);return}}}}var $e=64,qf=256,bM=170,Yf=.08,Zf=1,fa=.82,pa=.6,Kf=16052196,SM=8898799,$f=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,wM=`
uniform sampler2D viewMap;
uniform sampler2D paintMap;
varying vec2 vUv;
void main() {
  vec3 v = texture2D(viewMap, vUv).rgb;
  vec3 p = texture2D(paintMap, vUv).rgb;
  gl_FragColor = vec4(abs(v - p), 1.0);
}
`,TM=`
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
`;function on(n,t={}){return new Vt({color:n,roughness:.72,metalness:.04,...t})}function Ir(n){return n.castShadow=!0,n.receiveShadow=!0,n}function ai(n,t,e,i){return Ir(new W(new It(n,t,e),i))}function Lr(n,t,e=10,i=8){return Ir(new W(new jt(n,e,i),t))}function Wn(n,t,e,i,s=8){return Ir(new W(new Bt(n,t,e,s),i))}function Ul(n,t,{depth:e=!1,colorSpace:i=Be}={}){let s=new Dn(n,t,{minFilter:xe,magFilter:xe,format:dn,type:vn,depthBuffer:e,stencilBuffer:!1,generateMipmaps:!1});return s.texture.colorSpace=i,s.texture.flipY=!1,s}function AM(){let n=new ft,t=on(8015402,{roughness:.9}),e=on(4861462,{roughness:.88}),i=on(Kf,{roughness:.96});for(let[l,h,u]of[[-.3,.14,.08],[.3,.14,-.08],[0,-.2,0]]){let d=ai(.048,1.52,.048,t);d.position.set(l,.76,h),d.rotation.z=u,n.add(d)}let s=ai(.72,.04,.16,e);s.position.set(0,.52,.1),n.add(s);let r=ai(.7,.04,.04,t);r.position.set(0,1.46,.08),n.add(r);let o=ai(fa+.04,pa+.04,.028,i);o.position.set(0,1.16,.11),o.rotation.x=-.1,n.add(o);let a=ai(.03,.08,.03,e);a.position.set(-.34,.84,.12);let c=ai(.03,.08,.03,e);return c.position.set(.34,.84,.12),n.add(a,c),{group:n,board:o}}function RM(){let n=new ft,t=on(13213818,{roughness:.62}),e=on(14207920,{roughness:.86}),i=on(7035450,{roughness:.82}),s=on(15260064,{roughness:.92}),r=on(6967360,{roughness:.88}),o=ai(.3,.48,.17,e);o.position.y=1.12,n.add(o);let a=ai(.26,.14,.16,i);a.position.y=.84,n.add(a);let c=Lr(.115,t,12,10);c.position.y=1.5,n.add(c);let l=Lr(.12,r,10,8);l.position.set(0,1.53,-.01),l.scale.set(1.02,.72,1.04),n.add(l);let h=Wn(.18,.18,.02,s,14);h.position.y=1.6;let u=Wn(.11,.12,.08,s,12);u.position.y=1.65,n.add(h,u);let d=Wn(.036,.04,.26,e);d.position.set(-.2,1.2,.02),d.rotation.z=.35;let f=Wn(.03,.034,.22,t);f.position.set(-.28,1,.08),f.rotation.z=.55,f.rotation.x=-.4;let g=Lr(.03,t,8,6);g.position.set(-.32,.9,.16),n.add(d,f,g);let x=Ir(new W(new mr(.08,10),on(13351062,{roughness:.7})));x.position.set(-.3,.88,.2),x.rotation.x=-1.15,x.rotation.z=.4,n.add(x);for(let[v,b,C]of[[-.025,.02,13123630],[.02,.025,3108762],[.015,-.02,13934615],[-.02,-.018,3832378]]){let N=new W(new mr(.016,6),on(C,{roughness:.55}));N.position.set(-.3+v,.882,.2+b),N.rotation.copy(x.rotation),n.add(N)}let p=new ft;p.position.set(.18,1.34,.04);let m=Lr(.042,e,8,6);p.add(m);let y=Wn(.034,.038,.28,e);y.rotation.x=Math.PI/2,y.position.z=.14,p.add(y);let _=Wn(.028,.032,.24,t);_.rotation.x=Math.PI/2,_.position.z=.38,p.add(_);let M=Lr(.03,t,8,6);M.position.z=.52,p.add(M);let R=new ft,w=Wn(.009,.011,.26,on(5913114,{roughness:.7}),6);w.rotation.x=Math.PI/2,w.position.z=.13;let A=Wn(.012,.012,.03,on(11575408,{metalness:.45,roughness:.4}),6);A.rotation.x=Math.PI/2,A.position.z=.26;let D=Ir(new W(new Ae(.016,.055,6),on(3811864,{roughness:.9})));D.rotation.x=Math.PI/2,D.position.z=.3,R.add(w,A,D),R.position.z=.5,p.add(R),n.add(p);for(let v of[-1,1]){let b=Wn(.048,.052,.28,i);b.position.set(v*.08,.64,0);let C=Wn(.038,.046,.3,i);C.position.set(v*.08,.36,0);let N=ai(.07,.04,.13,on(3813416));N.position.set(v*.08,.02,.03),n.add(b,C,N)}return n.userData.arm=p,n.userData.brush=R,n.userData.paintTarget=!1,n.userData.kind="artist",n.userData.ageBand="adult",n}function CM(n){let t=-1,e=$e>>1,i=$e>>1,s=$e*$e;for(let r=0;r<s;r++){let o=r*4,a=n[o]*n[o]+n[o+1]*n[o+1]+n[o+2]*n[o+2];a>t&&(t=a,e=r%$e,i=r/$e|0)}return{u:(e+.5)/$e,v:(i+.5)/$e,err:t}}function Jf(n,t={x:4.5,z:-6.2,yaw:-2.6}){let e=new ft;e.name="artist",e.position.set(t.x,0,t.z),e.rotation.y=t.yaw+Math.PI,e.userData.kind="artist",e.userData.ageBand="adult",e.userData.paintTarget=!1;let{group:i,board:s}=AM(),r=RM();r.position.set(-.4,0,.34),r.rotation.y=Math.PI+.32,e.add(i,r),n.add(e),e.updateMatrixWorld(!0);let o=Ul($e,$e,{depth:!0,colorSpace:ne}),a=Ul(qf,qf,{depth:!1,colorSpace:ne}),c=Ul($e,$e,{depth:!1,colorSpace:Be}),l=new de({map:a.texture,toneMapped:!1}),h=new W(new oe(fa,pa),l);h.position.copy(s.position),h.position.z+=.018,h.rotation.copy(s.rotation),h.layers.set(Zf),h.layers.enable(0),s.layers.set(Zf),s.layers.enable(0),i.add(h);let u=t.x+Math.sin(t.yaw)*14,d=t.z+Math.cos(t.yaw)*14,f=new Oe(42,fa/pa,.28,90),g=new L(0,1.54,.08);r.localToWorld(g),f.position.set(g.x+Math.sin(t.yaw)*.14,g.y,g.z+Math.cos(t.yaw)*.14),f.lookAt(u,1.15,d),f.layers.set(0),f.updateProjectionMatrix();let x=new Ls(-1,1,1,-1,0,1),p=new Mn({uniforms:{viewMap:{value:o.texture},paintMap:{value:a.texture}},vertexShader:$f,fragmentShader:wM,depthTest:!1,depthWrite:!1,toneMapped:!1}),m=new Gi;m.add(new W(new oe(2,2),p));let y=new Mn({uniforms:{viewMap:{value:o.texture},center:{value:new ct(.5,.5)},radius:{value:Yf},amount:{value:.7}},vertexShader:$f,fragmentShader:TM,transparent:!0,blending:gi,depthTest:!1,depthWrite:!1,toneMapped:!1}),_=new Gi;_.add(new W(new oe(2,2),y));let M=new Uint8Array($e*$e*4),R=new Ot(Kf),w=new Ot(SM),A=new Ot,D=new ct(.5,.5),v=new L,b=new L,C=new Ve,N=new Ve,$=r.userData.arm,P=r.userData.brush,O=!1,H=0,B=.5;function q(k,st,X,Q,dt){k.shadowMap.enabled=dt,k.autoClear=X,k.setClearColor(A,Q),k.setRenderTarget(st)}function G(k,st){let X=k.getRenderTarget(),Q=k.autoClear,dt=k.getClearAlpha(),Et=k.shadowMap.enabled;k.getClearColor(A),k.autoClear=!0,k.shadowMap.enabled=!1,O||(k.setRenderTarget(a),k.setClearColor(R,1),k.clear(),O=!0),h.visible=!1,s.visible=!1,k.setRenderTarget(o),k.setClearColor(w,1),k.render(st,f),h.visible=!0,s.visible=!0,k.setRenderTarget(c),k.setClearColor(0,1),k.render(m,x),k.readRenderTargetPixels(c,0,0,$e,$e,M);let pt=CM(M);D.set(pt.u,pt.v),B=.62,y.uniforms.center.value.set(pt.u,pt.v),y.uniforms.radius.value=Yf*(.72+Math.random()*.5),y.uniforms.amount.value=.58+Math.min(.36,pt.err/9e4),k.autoClear=!1,k.setRenderTarget(a),k.render(_,x),q(k,X,Q,dt,Et)}function z(){v.set((D.x-.5)*fa,(D.y-.5)*pa,.02),h.localToWorld(b.copy(v)),C.copy($.quaternion),$.lookAt(b),N.copy($.quaternion),$.quaternion.copy(C).slerp(N,.2),B+=(.5-B)*.16,P.position.z=B}return{root:e,pose:t,tick(k,st,X){X-H>=bM&&(G(k,st),H=X),z()}}}var PM=9131048,LM=12886122,IM=2889744;function ji(n,t={}){return new Vt({color:n,roughness:.72,metalness:.04,...t})}function On(n){return n.castShadow=!0,n.receiveShadow=!0,n}function DM(){let n=new ft,t=ji(PM,{roughness:.62,metalness:.08}),e=ji(LM,{roughness:.5}),i=ji(IM,{roughness:.48}),s=On(new W(new jt(.15,10,8),t));s.scale.set(1.05,1.22,.28),n.add(s);let r=On(new W(new jt(.12,10,8),t));r.scale.set(.95,1.05,.28),r.position.set(0,-.12,0),n.add(r);let o=On(new W(new It(.042,.48,.032),e));o.position.set(0,.4,0),n.add(o);let a=On(new W(new It(.068,.1,.028),t));a.position.set(0,.68,0),n.add(a);let c=On(new W(new Bt(.042,.042,.02,12),i));c.rotation.x=Math.PI/2,c.position.set(0,.02,.04),n.add(c);let l=On(new W(new It(.08,.018,.016),i));return l.position.set(0,-.1,.038),n.add(l),n}function jf(n,t){let e=[];for(let r of[...n.children])t*r.position.x>.15&&r.position.y>.85&&e.push(r);let i=new ft;if(!e.length)return i;let s=e.reduce((r,o)=>r.position.y>=o.position.y?r:o);i.position.copy(s.position),n.add(i);for(let r of e)r.position.sub(i.position),i.add(r);return i}function Qf(n,t,e,i,s){let r=Gn(n);r.position.set(t,e,i),r.rotation.y=s;let o=DM();o.position.set(.08,.9,.2),o.rotation.set(.22,.12,1.05),r.add(o);let a=jf(r,1);a.rotation.set(-1.12,.08,-.52);let c=jf(r,-1);return c.rotation.set(-.98,-.06,.72),{mesh:r,guitar:o,strum:a,fret:c,yaw:s}}function UM(){let n=new ft,t=ji(1710622,{roughness:.42,metalness:.35}),e=ji(10133672,{roughness:.28,metalness:.65}),i=ji(1118481,{roughness:.55,metalness:.4}),s=On(new W(new It(.92,.42,.32),t));s.position.y=.22,n.add(s);for(let a of[-.26,.26]){let c=On(new W(new Bt(.155,.155,.04,16),e));c.rotation.x=Math.PI/2,c.position.set(a,.22,.155),n.add(c);let l=On(new W(new Bt(.08,.13,.03,14),i));l.rotation.x=Math.PI/2,l.position.set(a,.22,.175),n.add(l)}let r=On(new W(new Ei(.16,.016,6,12,Math.PI),e));r.rotation.set(0,0,Math.PI),r.position.set(0,.44,0),n.add(r);let o=On(new W(new It(.22,.1,.02),ji(2763312,{metalness:.25})));return o.position.set(0,.22,.165),n.add(o),n}function tp(n,t,e,i){let s=Fs(n);return s.position.set(t,0,e),s.rotation.y=i,{mesh:s,yaw:i,phase:t*.7+e*.4}}function ep(n){let t=new L(-6,0,5),e=new L(5,0,3),i=new L(12,0,8),s=Qf({hair:16769162,shorts:936530,skin:14198126},t.x,0,t.z,.35),r=Qf({hair:15783050,shorts:13123630,skin:13537112},e.x,0,e.z,-.4);s.mesh.name="ken-guitar-a",r.mesh.name="ken-guitar-b",n.add(s.mesh,r.mesh);let o=UM();o.position.copy(i),o.name="boombox",n.add(o);let a=tp({hair:1708560,bikini:16739226,skin:15251608},10.85,7.15,.55),c=tp({hair:15909166,bikini:3112912,skin:14262392},13.2,8.7,-.7);a.mesh.name="babe-boom-a",c.mesh.name="babe-boom-b",n.add(a.mesh,c.mesh);let l=[s,r],h=[a,c];return{tick(u){for(let d=0;d<l.length;d++){let f=l[d],g=Math.sin(u*8.2+d*1.7);f.strum.rotation.x=-1.12+g*.14,f.strum.rotation.z=-.52+g*.08,f.guitar.rotation.z=1.05+g*.035,f.guitar.rotation.x=.22+Math.abs(g)*.02,f.fret.rotation.z=.72+Math.sin(u*3.4+d)*.04,f.mesh.rotation.y=f.yaw+Math.sin(u*1.1+d)*.04}for(let d of h){let f=Math.sin(u*4.6+d.phase);d.mesh.position.y=Math.abs(f)*.14,d.mesh.rotation.z=Math.sin(u*2.3+d.phase)*.16,d.mesh.rotation.y=d.yaw+Math.sin(u*1.7+d.phase)*.28}},musicSpots:[{id:"guitar-a",position:s.mesh.position,radius:7},{id:"guitar-b",position:r.mesh.position,radius:7},{id:"boombox",position:o.position,radius:8},{id:"dj",position:new L(-24,0,7),radius:10}]}}var NM=16,OM=.15,BM=0,FM=4,Ol=.4,Bl=.8,kM=2.2,Hs=1/60,Nl=.984,np=1,lp=5,HM=4,zM={torso:new It(.34,.5,.18),head:new It(.22,.22,.22),arm:new It(.09,.5,.09),leg:new It(.11,.7,.11)},ks=[{id:"torso",geo:"torso",ox:0,oy:1.16,oz:0,half:.25,inv:.35,mat:"skin"},{id:"head",geo:"head",ox:0,oy:1.62,oz:0,half:.11,inv:.85,mat:"skin"},{id:"armL",geo:"arm",ox:-.28,oy:1.2,oz:0,half:.25,inv:1,mat:"skin"},{id:"armR",geo:"arm",ox:.28,oy:1.2,oz:0,half:.25,inv:1,mat:"skin"},{id:"legL",geo:"leg",ox:-.09,oy:.36,oz:0,half:.35,inv:1,mat:"shorts"},{id:"legR",geo:"leg",ox:.09,oy:.36,oz:0,half:.35,inv:1,mat:"shorts"}],GM=ks.slice(1).map(n=>({a:0,b:ks.indexOf(n),rest:Math.hypot(n.ox-ks[0].ox,n.oy-ks[0].oy,n.oz-ks[0].oz)})),ip=[{hair:16041009,shorts:2060152,skin:13934698},{hair:16739226,shorts:1723788,skin:13406042},{hair:16048762,shorts:14826299,skin:14721120},{hair:6211839,shorts:15909166,skin:13931082}],VM=[{x:16,z:2,axis:"x"},{x:-10,z:-3,axis:"z"}];function Qi(n,t){return n+Math.random()*(t-n)}function sp(n){return new Vt({color:n,roughness:.72,metalness:.04})}function WM(n,t,e){let i=Math.cos(e),s=Math.sin(e);return{x:n*i-t*s,z:n*s+t*i}}function XM(n,t){return Math.atan2(t.x-n.x,t.z-n.z)}function qM(n,t){let e=sp(t.skin),i=sp(t.shorts),s=new ft;s.name="ken-ragdoll",s.visible=!1;let r=ks.map(o=>{let a=o.mat==="shorts"?i:e,c=new W(zM[o.geo],a);return c.castShadow=!0,c.receiveShadow=!0,s.add(c),{mesh:c,x:0,y:o.oy,z:0,px:0,py:o.oy,pz:0,half:o.half,inv:o.inv,rx:0,rz:0,ox:o.ox,oy:o.oy,oz:o.oz}});return n.add(s),{root:s,parts:r}}function YM(n,t,e,i){let s=n.mesh.rotation.y,r=n.x,o=n.z;for(let a of n.doll.parts){let c=WM(a.ox,a.oz,s);a.x=r+c.x,a.y=a.oy,a.z=o+c.z;let l=t+Qi(-1.4,1.4),h=e+Qi(.4,2.2),u=i+Qi(-1.4,1.4);a.px=a.x-l*Hs,a.py=a.y-h*Hs,a.pz=a.z-u*Hs,a.rx=0,a.rz=0,a.mesh.position.set(a.x,a.y,a.z),a.mesh.rotation.set(0,s,0)}}function ZM(n,t){let e=-NM*t*t;for(let i of n){let s=(i.x-i.px)*Nl,r=(i.y-i.py)*Nl,o=(i.z-i.pz)*Nl;i.px=i.x,i.py=i.y,i.pz=i.z,i.x+=s,i.y+=r+e,i.z+=o,i.rx+=o*10,i.rz-=s*10}}function $M(n){for(let t of GM){let e=n[t.a],i=n[t.b],s=i.x-e.x,r=i.y-e.y,o=i.z-e.z,a=Math.hypot(s,r,o)||1e-6,c=e.inv+i.inv,l=(a-t.rest)/a*(1/c);e.x+=s*l*e.inv,e.y+=r*l*e.inv,e.z+=o*l*e.inv,i.x-=s*l*i.inv,i.y-=r*l*i.inv,i.z-=o*l*i.inv}}function KM(n){for(let t of n){let e=BM+t.half;if(t.y>=e)continue;let i=t.x-t.px,s=t.y-t.py,r=t.z-t.pz;t.y=e,t.py=s<0?t.y+s*OM:t.y,t.px=t.x-i*.7,t.pz=t.z-r*.7}}function JM(n){for(let t of n.doll.parts)t.mesh.position.set(t.x,t.y,t.z),t.mesh.rotation.set(t.rx,n.mesh.rotation.y,t.rz)}function hp(n,t){n.state=t;let e=t==="ragdoll";n.mesh.visible=!e,n.doll.root.visible=e}function rp(n){n.x=n.home.x,n.z=n.home.z,n.vx=0,n.vz=0,n.hp=lp+(Math.random()*3|0),n.cool=Qi(Ol,Bl),n.punch=0,n.acc=0,n.mesh.position.set(n.home.x,0,n.home.z),n.mesh.rotation.set(0,n.home.yaw,0),hp(n,"stand")}function jM(n,t,e,i){let s=3.2+i*2.4;YM(n,t*s,3.4+i*2,e*s),hp(n,"ragdoll")}function QM(n,t){let e=t.x-n.x,i=t.z-n.z,s=Math.hypot(e,i)||1,r=e/s,o=i/s,a=Math.random()<.14,c=a?1.35:Qi(.7,1.05);if(n.vx+=r*1.6*c,n.vz+=o*1.6*c,n.punch=.16,t.state==="stand")t.vx+=r*2.8*c,t.vz+=o*2.8*c,t.hp-=a?np*2:np,t.hp<=0&&jM(t,r,o,c);else{let l=t.doll.parts[0];l.px-=r*.1*c,l.pz-=o*.1*c,l.py-=.03*c}}function op(n,t,e){n.cool-=e,n.cool<=0&&(n.cool=Qi(Ol,Bl),QM(n,t)),n.vx+=(n.home.x-n.x)*6*e,n.vz+=(n.home.z-n.z)*6*e,n.vx*=Math.max(0,1-5.5*e),n.vz*=Math.max(0,1-5.5*e),n.x+=n.vx*e,n.z+=n.vz*e,n.mesh.rotation.y=XM(n,t);let i=n.x,s=n.z,r=0;if(n.punch>0){n.punch=Math.max(0,n.punch-e);let o=Math.sin((1-n.punch/.16)*Math.PI),a=Math.sin(n.mesh.rotation.y),c=Math.cos(n.mesh.rotation.y);i+=a*o*.38,s+=c*o*.38,r=o*.14}n.mesh.position.set(i,0,s),n.mesh.rotation.x=r}function ap(n,t){for(n.acc+=Math.min(t,.05);n.acc>=Hs;){n.acc-=Hs,ZM(n.doll.parts,Hs);for(let i=0;i<HM;i++)$M(n.doll.parts);KM(n.doll.parts)}JM(n);let e=n.doll.parts[0];n.x=e.x,n.z=e.z}function cp(n,t,e,i,s){let r=Gn(s);return r.position.set(t,0,e),r.rotation.y=i,r.userData.fight=!0,r.userData.paintTarget=!1,n.add(r),{mesh:r,doll:qM(n,s),home:{x:t,z:e,yaw:i},x:t,z:e,vx:0,vz:0,hp:lp,cool:Qi(Ol,Bl),punch:0,acc:0,state:"stand"}}function tE(n,t,e,i){let s=kM*.5,r=t.x,o=t.z,a=t.x,c=t.z,l=0,h=Math.PI;return t.axis==="x"?(r-=s,a+=s,l=Math.PI*.5,h=-Math.PI*.5):(o-=s,c+=s,l=0,h=Math.PI),{a:cp(n,r,o,l,e),b:cp(n,a,c,h,i),down:0}}function up(n){let t=VM.map((i,s)=>tE(n,i,ip[s*2],ip[s*2+1]));function e(i){if(!(i>0))return;let s=Math.min(i,.05);for(let r of t)r.a.state==="stand"&&op(r.a,r.b,s),r.b.state==="stand"&&op(r.b,r.a,s),r.a.state==="ragdoll"&&ap(r.a,s),r.b.state==="ragdoll"&&ap(r.b,s),(r.a.state==="ragdoll"||r.b.state==="ragdoll")&&(r.down+=s,r.down>=FM&&(rp(r.a),rp(r.b),r.down=0))}return{tick:e}}var Dr=5.5;var dp={x:0,z:10},eE=[[-20,16],[0,12],[18,8],[8,-2],[-12,8]],fp=["assets/media/psa/psa1.mp4","assets/media/psa/psa2.mp4","assets/media/psa/psa3.mp4","assets/media/psa/psa4.mp4","assets/media/psa/psa5.mp4"],pp=["assets/media/cutscene/s4_i_can_use_them.jpg","assets/media/ads/billboard_terminate_uv.png","assets/media/ads/tv_surfclub.jpg","assets/media/ads/dj_slide_apply.jpg","assets/media/cutscene/aus101_ref.jpg"],nE=[["I CAN USE THEM","PUBLIC HEALTH REASSIGNMENT"],["TERMINATE UV","THE SUN IS A HOSTILE ACTOR"],["SURF CLUB NOTICE","ZINC ON \xB7 SHIRT OPTIONAL"],["APPLY","OR BE RECALLED"],["AUS101","DOES NOT TAKE REQUESTS"]];function iE(n,t){let e=document.createElement("canvas");e.width=512,e.height=384;let i=e.getContext("2d");i.fillStyle="#0b1210",i.fillRect(0,0,512,384),i.fillStyle="#1a3a28",i.fillRect(0,0,512,58),i.fillStyle="#c8a44a",i.fillRect(0,58,512,4),i.fillRect(0,380,512,4),i.fillStyle="#e8d48a",i.font="bold 18px Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("DEPARTMENT OF WELLNESS",256,28),i.font="12px Arial, sans-serif",i.fillStyle="#9aaa88",i.fillText("GOLD COAST UNIT  \xB7  PSA",256,46),i.fillStyle="#f4f7fb",i.font="bold 42px Impact, Arial Black, sans-serif",i.fillText(n,256,188),i.fillStyle="#ffb040",i.font="bold 22px Arial, sans-serif",i.fillText(t,256,248),i.globalAlpha=.12,i.fillStyle="#000";for(let r=0;r<384;r+=3)i.fillRect(0,r,512,1);i.globalAlpha=1;let s=new En(e);return s.colorSpace=ne,s.needsUpdate=!0,s}function sE(n){let t=nE.map(([r,o])=>iE(r,o)),e=new Ns,i=pp.length,s=()=>{i-=1,i<=0&&n()};return pp.forEach((r,o)=>{e.load(r,a=>{a.colorSpace=ne,a.needsUpdate=!0,t[o]=a,s()},void 0,s)}),t}function rE(n,t,e,i){let s=new ft,r=ht(3817026,{metalness:.55,roughness:.42}),o=ht(1447962,{roughness:.62,metalness:.18}),a=ht(789518,{roughness:.5,metalness:.12}),c=new W(new Bt(.18,.22,.1,10),r);c.position.y=.05,c.castShadow=!0,s.add(c);let l=new W(new Bt(.05,.062,1.52,8),r);l.position.y=.86,l.castShadow=!0,s.add(l);let h=Wt(.16,.08,.16,r);h.position.y=1.58,s.add(h);let u=Wt(.78,.6,.26,o);u.position.y=1.78,s.add(u);let d=Wt(.74,.52,.04,a);d.position.set(0,1.78,.14),s.add(d);let f=Wt(.82,.07,.22,o);f.position.set(0,2.12,.06),s.add(f);let g=Wt(.5,.08,.02,ht(2761748,{roughness:.7}));g.position.set(0,1.42,.14),s.add(g);let x=new W(new jt(.018,8,6),new Vt({color:3348480,emissive:16746496,emissiveIntensity:.12,roughness:.4}));x.position.set(.3,1.52,.15),s.add(x);let p=new Vt({map:i[e%i.length],emissive:16777215,emissiveMap:i[e%i.length],emissiveIntensity:.12,color:4868682,roughness:.38,metalness:.05}),m=new W(new oe(.42,.62),p);return m.position.set(0,1.82,.162),s.add(m),s.position.set(n,0,t),s.rotation.y=Math.atan2(dp.x-n,dp.z-t),{group:s,screenMat:p,ledMat:x.material,frame:e%i.length}}function mp(n){let t=[],e=[],i=sE(()=>{for(let o of t){let a=i[o.frame];o.screenMat.map=a,o.screenMat.emissiveMap=a}});eE.forEach(([o,a],c)=>{let l=rE(o,a,c,i),h=document.createElement("video");h.src=fp[c%fp.length],h.loop=!0,h.muted=!0,h.playsInline=!0,h.preload="metadata",h.setAttribute("playsinline","");let u=new Is(h);u.colorSpace=ne,l.video=h,l.videoTex=u,l.stillTex=i[c%i.length],n.add(l.group),t.push(l),e.push({position:new L(o,0,a),radius:Dr})});let s=new Ot(3815994),r=new Ot(16777215);return{spots:e,tick(o,a=!0){let c=performance.now(),l=-1,h=Dr*Dr;for(let u=0;u<t.length;u++){let d=e[u].position,f=(o.x-d.x)**2+(o.z-d.z)**2;f<h&&(h=f,l=u)}for(let u=0;u<t.length;u++){let d=t[u],f=e[u].position,g=o.x-f.x,x=o.z-f.z,p=g*g+x*x<Dr*Dr,m=d.screenMat,y=p?.92:.1;m.emissiveIntensity+=(y-m.emissiveIntensity)*.12,m.color.lerp(p?r:s,.12),d.ledMat.emissiveIntensity+=((p?1.4:.1)-d.ledMat.emissiveIntensity)*.14,p?(d.videoTex&&m.map!==d.videoTex&&(m.map=d.videoTex,m.emissiveMap=d.videoTex),d.video&&d.video.paused&&d.video.play().catch(()=>{}),d.video&&(d.video.muted=!a||u!==l,d.video.volume=.45)):d.video&&!d.video.paused&&(d.video.pause(),d.video.muted=!0,d.stillTex&&(m.map=d.stillTex,m.emissiveMap=d.stillTex))}}}}function oE(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function gp({carpenter:n,shades:t,locals:e=[]}={}){let i=null;function s(){let a=new Set;n&&a.add(n),t&&a.add(t);for(let c of e)c?.bed&&a.add(c.bed);return a}function r(a){return a.radius!=null?a.radius:t&&a.bed===t?12:0}function o(a){if(a===i)return;i=a;let c=s();if(a==="mute"){for(let h of c)h.setMix?.(0,.65);return}let l=n;a!=="carpenter"&&(l=e.find(u=>u.id===a)?.bed||n);for(let h of c)h.setMix?.(h===l?1:0,.65)}return{tick(a,c){if(!c||!a){o("mute");return}let l=null,h=1/0;for(let u of e){if(!u?.getPos||!u.bed)continue;let d=u.getPos();if(!d)continue;let f=oE(a,d);f<r(u)&&f<h&&(h=f,l=u)}o(l?l.id:"carpenter")}}}var Bn=n=>440*2**((n-69)/12);function Xn(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function en(n,t){let e=n.createGain();return e.gain.value=t,e}function ga(n,t,e,i){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,i!=null&&(s.Q.value=i),s}function Fl(n,t,e,i){n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(t,i+e)}function xp(n,t){let e=Math.max(1,n.sampleRate*t|0),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return i}function Ur(n,t,e,i,s){let r=en(n,1e-4);return r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(e,t+i),r.gain.exponentialRampToValueAtTime(1e-4,t+s),r}function kl(n,t,e){let i=en(n,0);i.connect(t||n.destination);let s=!1,r=0,o=0,a=0,c=0;return{out:i,get running(){return s},start(l){n.state==="suspended"&&n.resume(),!s&&(s=!0,a=0,o=n.currentTime+.06,Fl(i.gain,e*c,.08,n.currentTime),l())},setMix(l,h=.6){c=Math.max(0,Math.min(1,l)),Fl(i.gain,e*c,h,n.currentTime)},stop(){s=!1,clearTimeout(r),Fl(i.gain,0,.08,n.currentTime)},clock(l,h,u){if(!s)return;let d=n.currentTime+l;for(;o<d;)u(o,a++),o+=h;r=setTimeout(()=>this.clock(l,h,u),35)}}}function _p(n,t,e,i=148,s=41,r=.72,o=.22){let a=Xn(n,"sine",i);a.frequency.setValueAtTime(i,e),a.frequency.exponentialRampToValueAtTime(s,e+.11);let c=Ur(n,e,r,.004,o);a.connect(c).connect(t),a.start(e),a.stop(e+o+.02)}function ma(n,t,e,i,s,r,o){let a=n.createBufferSource();a.buffer=e;let c=ga(n,"highpass",o,.7),l=Ur(n,i,s,.002,r);a.connect(c).connect(l).connect(t),a.start(i),a.stop(i+r+.02)}function yp(n,t){let s=kl(n,t,.48),r=en(n,1),o=en(n,.7),a=en(n,.45),c=en(n,.28);r.connect(s.out),o.connect(s.out),a.connect(s.out),c.connect(s.out);let l=xp(n,.06),h=Xn(n,"triangle",Bn(36)),u=ga(n,"lowpass",280,1.1),d=en(n,1e-4);h.connect(d).connect(u).connect(a);let f=!1;function g(p,m){let y=Xn(n,"sine",Bn(m)),_=Xn(n,"sine",Bn(m+7));_.detune.value=4;let M=Ur(n,p,.16,.01,.28);y.connect(M),_.connect(M),M.connect(c),y.start(p),y.stop(p+.3),_.start(p),_.stop(p+.3)}function x(p,m){let y=m&15;(y&3)===0&&_p(n,r,p,142,40,.78,.2),ma(n,o,l,p,y&1?.05:.14,y&1?.035:.048,7200),(y===6||y===14)&&ma(n,o,l,p,.18,.16,4800);let M=Bn([36,36,39,43][y>>2&3]);h.frequency.setValueAtTime(M,p),d.gain.cancelScheduledValues(p),d.gain.setValueAtTime(1e-4,p),(y&3)===0&&(d.gain.exponentialRampToValueAtTime(.55,p+.012),d.gain.exponentialRampToValueAtTime(1e-4,p+.18)),(y===4||y===12)&&g(p,y===4?79:76),y===10&&g(p,72)}return{start(){f||(h.start(),f=!0),s.start(()=>s.clock(.12,15/118,x))},setMix:(p,m)=>s.setMix(p,m),stop:()=>s.stop()}}function vp(n,t){let i=[52,59,55,62,47,55,64,59,52,50,55,62],s=kl(n,t,.42),r=en(n,.85),o=ga(n,"lowpass",2400,.6),a=n.createDelay(.45);a.delayTime.value=.28;let c=en(n,.28);r.connect(o).connect(s.out),o.connect(a).connect(c).connect(a),a.connect(s.out);let l=Xn(n,"sine",Bn(40)),h=en(n,.05);l.connect(h).connect(o);let u=!1;function d(g,x){let p=Xn(n,"sine",Bn(x)),m=Xn(n,"triangle",Bn(x));m.detune.value=6;let y=Ur(n,g,.22,.012,1.8);if(p.connect(y),m.connect(y),y.connect(r),p.start(g),p.stop(g+1.9),m.start(g),m.stop(g+1.9),x>=55&&x&1){let _=Xn(n,"sine",Bn(x+7)),M=Ur(n,g,.08,.02,1.4);_.connect(M).connect(r),_.start(g),_.stop(g+1.5)}}function f(g,x){d(g,i[x%i.length])}return{start(){u||(l.start(),u=!0),s.start(()=>s.clock(.2,.92,f))},setMix:(g,x)=>s.setMix(g,x),stop:()=>s.stop()}}function Mp(n,t){let s=kl(n,t,.44),r=en(n,.7),o=en(n,.55),a=en(n,.35);r.connect(s.out),o.connect(s.out),a.connect(s.out);let c=xp(n,.04),l=Xn(n,"sawtooth",Bn(28)),h=Xn(n,"square",Bn(28));l.detune.value=3,h.detune.value=-5;let u=en(n,.32),d=en(n,1e-4),f=ga(n,"lowpass",520,1.8);l.connect(d),h.connect(u).connect(d),d.connect(f).connect(r);let g=!1;function x(p,m){let y=m>>3&7,_=m&7,M=Bn(y>=4?31:28);l.frequency.setValueAtTime(M,p),h.frequency.setValueAtTime(M*.997,p);let R=_&1;d.gain.cancelScheduledValues(p),d.gain.setValueAtTime(1e-4,p),d.gain.exponentialRampToValueAtTime(R?.12:.5,p+.01),d.gain.exponentialRampToValueAtTime(1e-4,p+(R?.06:.12)),R||(f.frequency.setValueAtTime(720,p),f.frequency.setTargetAtTime(480,p+.02,.05)),ma(n,o,c,p,R?.07:.12,R?.03:.045,8e3),ma(n,o,c,p+15/124,.045,.025,9e3),(_===2||_===6)&&_p(n,a,p,210,90,.18,.06)}return{start(){g||(l.start(),h.start(),g=!0),s.start(()=>s.clock(.12,30/124,x))},setMix:(p,m)=>s.setMix(p,m),stop:()=>s.stop()}}var Ep=3,aE=4.8,cE=.62,bp=8,zs="assets/media/psa/",Nr="assets/media/ads/",lE=[`${zs}psa1.mp4`,`${zs}psa2.mp4`,`${zs}psa3.mp4`,`${zs}psa4.mp4`,`${zs}psa5.mp4`,`${Nr}loop_apply.mp4`,`${Nr}loop_billboard.mp4`,`${Nr}loop_bunker.mp4`,`${Nr}loop_crt.mp4`],Sp=[{brand:"BBL.TIPS",title:"Brazilian Butt Lift Tips",url:"bbl.tips/stairs",bg:"#1a0c12",bar:"#2a121c",accent:"#ff5a9a",ink:"#ffe6f0",dim:"#c898a8",rows:["3 flights or it didn't happen","Sit on a donut, not your career","Surgeon's IG vs your hallway"]},{brand:"CHEMTRAILS WEEKLY",title:"They lengthened the lines",url:"chemtrails.week/issue-408",bg:"#0b1520",bar:"#102030",accent:"#7ec8ff",ink:"#e8f4ff",dim:"#8aa8c0",rows:["Grid over the Gold Coast","Barium taste in the slushie","Unsubscribe is a psyop"]},{brand:"CLOUD//MART",title:"Vape Juice 40% Off",url:"cloudmart.au/juice",bg:"#120818",bar:"#1c1028",accent:"#c8ff3a",ink:"#f4ffe8",dim:"#a0b878",rows:["Mango-menthol 50mg","Free lung with 3 bottles","Not a cigarette, a lifestyle"]},{brand:"UNAPPROVED ZINC",title:"Unapproved Zinc Forum",url:"zinc.forum/unapproved",bg:"#14180e",bar:"#1c2212",accent:"#d4c070",ink:"#f2edd4",dim:"#9a9870",rows:["Is 50+ a psyop? (342)","White nose = class traitor","Sticky: council banned my tin"]},{brand:"CUBE KITCHEN",title:"Cockroach Cube Recipes",url:"cubekitchen.au/roast",bg:"#181208",bar:"#241c10",accent:"#e89030",ink:"#fff0d8",dim:"#c0a070",rows:["12-min roast, no questions","Stock from the tray water","Guest: crunch is the point"]}],hE=[{x:-17.4,z:10.7,yaw:.28,stripe:14703183},{x:-16.15,z:11.15,yaw:-.18,stripe:4166596}],Hl=new L,wp=new L,Dp=new L(0,1,0),zl=new Ve,Tp=new Ve,Ap=new Ve,uE=new Ve().setFromAxisAngle(Dp,Math.PI),Rp=new Ee,dE=new It(.058,.112,.009),fE=new oe(.05,.098),pE=new It(.112,.154,.009),mE=new oe(.1,.138),gE=new Vt({color:1710622,roughness:.45,metalness:.38}),xE=new Vt({color:2236968,roughness:.4,metalness:.28}),Cp=new Vt({color:3816514,roughness:.38,metalness:.48}),_E=new Vt({color:1710622,roughness:.5,metalness:.22});function Gl(n){return n.castShadow=!0,n.receiveShadow=!0,n}function Up(n){return new Vt({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.48,color:16777215,roughness:.32,metalness:.04})}function Pp(n,t){n.map=t,n.emissiveMap=t,n.needsUpdate=!0}function Lp(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e;let s=i.getContext("2d");s.fillStyle=n.bg,s.fillRect(0,0,t,e),s.fillStyle=n.bar,s.fillRect(0,0,t,e*.055),s.fillStyle=n.dim,s.font=`600 ${Math.round(e*.022)}px Arial, sans-serif`,s.textAlign="left",s.textBaseline="middle",s.fillText("9:41",t*.05,e*.028),s.textAlign="right",s.fillText("LTE   74%",t*.95,e*.028),s.fillStyle="#00000066";let r=e*.07,o=e*.048;s.fillRect(t*.08,r,t*.84,o),s.fillStyle=n.dim,s.font=`${Math.round(e*.02)}px Arial, sans-serif`,s.textAlign="center",s.fillText(n.url,t*.5,r+o*.55);let a=e*.14,c=e*.22;s.fillStyle=n.accent,s.fillRect(0,a,t,c),s.fillStyle=n.bar,s.globalAlpha=.18,s.fillRect(0,a+c*.62,t,c*.38),s.globalAlpha=1,s.fillStyle=n.bar,s.textAlign="left",s.font=`800 ${Math.round(e*.032)}px Impact, Arial Black, sans-serif`,s.fillText(n.brand,t*.06,a+e*.055),s.fillStyle=n.ink,s.font=`700 ${Math.round(e*.042)}px Arial, sans-serif`,s.fillText(n.title,t*.06,a+e*.125);let l=e*.4;for(let u of n.rows)s.fillStyle="#ffffff12",s.fillRect(t*.05,l,t*.9,e*.09),s.fillStyle=n.accent,s.fillRect(t*.05,l,6,e*.09),s.fillStyle=n.ink,s.font=`600 ${Math.round(e*.026)}px Arial, sans-serif`,s.fillText(u,t*.1,l+e*.052),l+=e*.105;s.globalAlpha=.1,s.fillStyle="#000";for(let u=0;u<e;u+=3)s.fillRect(0,u,t,1);s.globalAlpha=1;let h=new En(i);return h.colorSpace=ne,h.needsUpdate=!0,h}function yE(n){let t=document.createElement("canvas");t.width=128,t.height=256;let e=t.getContext("2d"),i=n>>16&255,s=n>>8&255,r=n&255;e.fillStyle=`rgb(${i},${s},${r})`,e.fillRect(0,0,128,256),e.fillStyle="rgba(255,255,255,0.22)";for(let a=0;a<10;a++)e.fillRect(0,a*26,128,10);e.fillStyle="rgba(0,0,0,0.12)",e.fillRect(0,0,128,8),e.fillRect(0,248,128,8);let o=new En(t);return o.colorSpace=ne,o.needsUpdate=!0,o}function vE(){return{portrait:Sp.map(n=>Lp(n,384,640)),landscape:Sp.map(n=>Lp(n,640,400))}}async function Ip(n,t=()=>!0){try{let e=await fetch(n);if(!e.ok)return[];let i=await e.text(),s=[],r=/href=["']([^"']+\.mp4)["']/gi,o;for(;o=r.exec(i);){let a=o[1].split("/").pop();t(a)&&s.push(n+a)}return s}catch{return[]}}function ME(n){return new Promise(t=>{let e=document.createElement("video");e.src=n,e.loop=!0,e.muted=!0,e.playsInline=!0,e.preload="auto",e.setAttribute("playsinline",""),e.setAttribute("muted","");let i=!1,s=r=>{i||(i=!0,t(r?e:null))};e.addEventListener("loadeddata",()=>s(!0),{once:!0}),e.addEventListener("error",()=>s(!1),{once:!0}),setTimeout(()=>s(e.readyState>=1),2200)})}async function EE(){let n=[...await Ip(zs),...await Ip(Nr,r=>/^loop_.*\.mp4$/i.test(r))],t=[...new Set([...n,...lE])],i=(await Promise.all(t.map(ME))).filter(Boolean),s=[];for(let r of i){let o=new Is(r);o.colorSpace=ne,o.minFilter=xe,o.magFilter=xe,o.generateMipmaps=!1,s.push({video:r,tex:o})}return s}function bE(n){let t=n?.mesh;return!t||typeof t.add!="function"||!t.children?.length||t.userData?.hasGadget||n.ageBand==="child"||n.ageBand==="gull"||n.kind==="gull"||n.kind==="kid"||t.name&&/guitar/i.test(t.name)?!1:n.ageBand==="adult"||n.kind==="ken"||n.kind==="babe"||n.kind==="sigma_07"||n.kind==="goth"}function SE(n,t){let e=[];for(let o of[...n.children])t*o.position.x>.15&&o.position.y>.85&&e.push(o);let i=new ft;if(!e.length)return{pivot:null,hand:null};let s=e.reduce((o,a)=>o.position.y>=a.position.y?o:a);i.position.copy(s.position),n.add(i);for(let o of e)o.position.sub(i.position),i.add(o);let r=i.children[0];for(let o of i.children)o.position.y<r.position.y&&(r=o);return{pivot:i,hand:r}}function wE(n,t){let e=new ft,i=n==="tablet",s=Gl(new W(i?pE:dE,i?xE:gE)),r=new W(i?mE:fE,Up(t));return r.position.z=i?.0052:.005,e.add(s,r),{group:e,screen:r,mat:r.material}}function TE(n,t,e,i){let s=n.mesh,{pivot:r,hand:o}=SE(s,i),{group:a,mat:c}=wE(t,e);if(r&&o)r.rotation.set(-1.28,i*.12,i*-.32),a.position.copy(o.position),a.position.z+=.04,a.position.y+=.012,a.position.x+=i*.008,a.rotation.set(-1.02,i*.16,i*.06),r.add(a);else{let l=s.userData?.body?.shoulderY||1.36;a.position.set(i*.16,l-.16,.2),a.rotation.set(-.95,i*.22,i*.08),s.add(a)}return s.userData.hasGadget=!0,{yawNode:a,mat:c,restQuat:a.quaternion.clone()}}function AE(n,t){let e=new ft,i=new W(new oe(1.12,2.15),new Vt({map:yE(n.stripe),roughness:.98,metalness:0}));i.rotation.x=-Math.PI/2,i.position.y=.018,i.receiveShadow=!0,e.add(i);let s=new ft,r=Gl(new W(new It(.34,.014,.24),Cp));r.position.y=.01,s.add(r);let o=new W(new It(.3,.004,.16),_E);o.position.set(0,.018,.02),s.add(o);let a=new ft;a.position.set(0,.016,-.112),a.rotation.x=-.42;let c=Gl(new W(new It(.34,.22,.01),Cp));c.position.set(0,.11,0);let l=new W(new oe(.3,.184),Up(t));return l.position.set(0,.11,.0065),a.add(c,l),s.add(a),s.position.set(0,.028,-.38),e.add(s),e.position.set(n.x,0,n.z),e.rotation.y=n.yaw,{group:e,laptop:s,mat:l.material,restQuat:s.quaternion.clone()}}function RE(n,t,e,i){if(i<.02){n.quaternion.copy(t);return}n.getWorldPosition(Hl),wp.set(e.x,Hl.y+.15,e.z),Rp.lookAt(Hl,wp,Dp),zl.setFromRotationMatrix(Rp),zl.multiply(uE),n.parent.getWorldQuaternion(Tp),Ap.copy(Tp).invert().multiply(zl),n.quaternion.copy(t).slerp(Ap,i)}function CE(n,t,e,i){let s=e.x-n,r=e.z-t,o=s*s+r*r,a=i*i;return o>=a?{amt:0,d2:o}:{amt:(1-Math.sqrt(o)/i)*cE,d2:o}}function Np(n,t){let e=vE(),i=[],s=-1,r=(n||[]).filter(bE);r.forEach((a,c)=>{let l=c%3===1?"tablet":"phone",h=c%2===0?1:-1,u=e.portrait[c%e.portrait.length],{yawNode:d,mat:f,restQuat:g}=TE(a,l,u,h);i.push({kind:l,yawNode:d,mat:f,restQuat:g,mesh:a.mesh,offset:c,usesVideo:!1,video:null,phase:c*.73,landscape:!1})}),hE.forEach((a,c)=>{let l=e.landscape[c%e.landscape.length],h=AE(a,l);t.add(h.group),i.push({kind:"laptop",yawNode:h.laptop,mat:h.mat,restQuat:h.restQuat,mesh:h.group,offset:r.length+c,usesVideo:!1,video:null,phase:2.1+c,landscape:!0})});let o=[];return EE().then(a=>{a.length&&(o.push(...a),i.forEach((c,l)=>{let h=a[l%a.length];Pp(c.mat,h.tex),c.usesVideo=!0,c.video=h.video}))}),{tick(a,c){if(!c)return;let l=Math.floor(a/Ep);if(l!==s){s=l;for(let u of i){if(u.usesVideo)continue;let d=u.landscape?e.landscape:e.portrait;Pp(u.mat,d[Math.floor(a/Ep+u.offset)%d.length])}}let h=new Set;for(let u of i){let d=u.mesh.position.x,f=u.mesh.position.z,{amt:g,d2:x}=CE(d,f,c,aE);RE(u.yawNode,u.restQuat,c,g),u.kind!=="laptop"&&u.yawNode.rotateX(Math.sin(a*1.6+u.phase)*.018);let p=.42+g*.7;u.mat.emissiveIntensity+=(p-u.mat.emissiveIntensity)*.12,u.video&&x<bp*bp&&h.add(u.video)}for(let u of o){let d=h.has(u.video);d&&u.video.paused?u.video.play().catch(()=>{}):!d&&!u.video.paused&&u.video.pause()}}}}var Vs=["kick","hat","snare","n0","n1","n2","n3"],xa=[72,75,79,84],Op=2.5,PE=8,LE=10,Bp=n=>440*2**((n-69)/12);function ya(n,t,e){let i=n.createOscillator();return i.type=t,i.frequency.value=e,i}function Gs(n,t){let e=n.createGain();return e.gain.value=t,e}function Fp(n,t,e,i){let s=n.createBiquadFilter();return s.type=t,s.frequency.value=e,i!=null&&(s.Q.value=i),s}function Vl(n,t,e,i){n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(t,i+e)}function IE(n,t){let e=Math.max(1,n.sampleRate*t|0),i=n.createBuffer(1,e,n.sampleRate),s=i.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return i}function Or(n,t,e,i,s){let r=Gs(n,1e-4);return r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(e,t+i),r.gain.exponentialRampToValueAtTime(1e-4,t+s),r}function Wl(n,t){return!n||!t?1/0:Math.hypot((n.x??0)-(t.x??0),(n.z??0)-(t.z??0))}function Ti(n){if(n)return n.state==="suspended"&&n.resume(),n;if(!Ti._c){let t=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null;if(!t)return null;Ti._c=new t}return Ti._c.state==="suspended"&&Ti._c.resume(),Ti._c}function kp(n=118){let t={steps:16,bpm:n};for(let e of Vs)t[e]=new Array(16).fill(0);return t}function Xl(n){let t=kp(n?.bpm||118);if(!n)return t;for(let e of Vs){let i=n[e];if(i)for(let s=0;s<16;s++)t[e][s]=i[s]?1:0}return t}function Hp(){let n=kp(118);for(let t=0;t<16;t++)(t&3)===0&&(n.kick[t]=1),(t&1)===0&&(n.hat[t]=1);return n.hat[3]=1,n.hat[11]=1,n.snare[4]=1,n.snare[12]=1,n.snare[14]=1,n.n0[0]=1,n.n2[4]=1,n.n1[8]=1,n.n0[10]=1,n.n3[12]=1,n}function DE(n,t,e){let i=ya(n,"sine",148);i.frequency.setValueAtTime(148,e),i.frequency.exponentialRampToValueAtTime(42,e+.11);let s=Or(n,e,.78,.004,.22);i.connect(s).connect(t),i.start(e),i.stop(e+.24)}function UE(n,t,e,i,s){let r=n.createBufferSource();r.buffer=e;let o=Fp(n,"highpass",s?5200:7600,.7),a=Or(n,i,s?.16:.11,.002,s?.14:.045);r.connect(o).connect(a).connect(t),r.start(i),r.stop(i+(s?.16:.06))}function NE(n,t,e,i){let s=n.createBufferSource();s.buffer=e;let r=Fp(n,"bandpass",1800,.85),o=Or(n,i,.28,.003,.16);s.connect(r).connect(o).connect(t),s.start(i),s.stop(i+.18);let a=ya(n,"sine",188);a.frequency.exponentialRampToValueAtTime(120,i+.08);let c=Or(n,i,.22,.004,.12);a.connect(c).connect(t),a.start(i),a.stop(i+.14)}function _a(n,t,e,i){let s=ya(n,"sine",Bp(i)),r=ya(n,"triangle",Bp(i));r.detune.value=7;let o=Or(n,e,.2,.01,.38);s.connect(o),r.connect(o),o.connect(t),s.start(e),s.stop(e+.4),r.start(e),r.stop(e+.4)}function ql(n,t,e,i={}){let s=i.peak??.46,r=Gs(n,0);r.connect(t||n.destination);let o=Gs(n,1),a=Gs(n,.72),c=Gs(n,.85),l=Gs(n,.7);o.connect(r),a.connect(r),c.connect(r),l.connect(r);let h=IE(n,.08),u=!1,d=0,f=0,g=0,x=0;function p(_,M){let R=M&15,w=e||{};w.kick?.[R]&&DE(n,o,_),w.hat?.[R]&&UE(n,a,h,_,R===6||R===14),w.snare?.[R]&&NE(n,c,h,_),w.n0?.[R]&&_a(n,l,_,xa[0]),w.n1?.[R]&&_a(n,l,_,xa[1]),w.n2?.[R]&&_a(n,l,_,xa[2]),w.n3?.[R]&&_a(n,l,_,xa[3])}function m(){if(!u)return;let _=15/(e?.bpm||118),M=n.currentTime+.12;for(;f<M;)p(f,g++),f+=_;d=setTimeout(m,35)}return{out:r,get running(){return u},get step(){return g&15},start(){n.state==="suspended"&&n.resume(),!u&&(u=!0,g=0,f=n.currentTime+.06,Vl(r.gain,s*x,.08,n.currentTime),m())},setMix(_,M=.5){x=Math.max(0,Math.min(1,_)),Vl(r.gain,s*x,M,n.currentTime)},stop(){u=!1,clearTimeout(d),Vl(r.gain,0,.08,n.currentTime)}}}function OE(){if(typeof document>"u")return null;if(document.getElementById("aus101-tape-pip"))return document.getElementById("aus101-tape-pip");if(!document.getElementById("aus101-tape-css")){let t=document.createElement("style");t.id="aus101-tape-css",t.textContent="#aus101-tape-pip{position:fixed;z-index:11;pointer-events:none;left:max(10px,env(safe-area-inset-left,0px));bottom:max(12px,env(safe-area-inset-bottom,0px));width:28px;height:16px;border-radius:2px;background:#1a1a1e;box-shadow:inset 0 0 0 1px #c84;opacity:0;transition:opacity .2s}#aus101-tape-pip[data-on='1']{opacity:.92}#aus101-tape-pip i{display:block;margin:4px 4px 0;height:5px;background:#e07030;border-radius:1px}",document.head.appendChild(t)}let n=document.createElement("div");return n.id="aus101-tape-pip",n.appendChild(document.createElement("i")),document.body.appendChild(n),n}function zp({getBoomPos:n,getDjPos:t,ctx:e}={}){let i=n||(()=>({x:12,z:8})),s=t||(()=>({x:-24,z:7})),r=null,o=!1,a=null,c=null,l=!1,h=0,u=OE(),d={start(){c?.start()},setMix(M,R){h=M,l||c?.setMix(M,R)},stop(){c?.stop()},get running(){return!!c?.running},get step(){return c?.step??0},get inserted(){return a}};function f(){u&&(u.dataset.on=o?"1":"0")}function g(M){let R=Ti(e);if(!R)return;let w=ql(R,R.destination,M,{peak:.48});c?.running&&c.stop(),c=w,w.start(),w.setMix(l?0:h||1,.08)}function x(M){return r=Xl(M),o=!0,_.hasTape=!0,f(),r}function p(M){if(!o||!r||!M)return null;let R=i(),w=s(),A=Wl(M,R),D=Wl(M,w),v=null;return A<=Op&&A<=D?v="boom":D<=Op&&(v="dj"),v?(o=!1,_.hasTape=!1,a=v,f(),g(r),d.setMix(1,.12),v):null}function m(M){if(o&&p(M),!a||!M||!c)return;let R=a==="boom"?i():s(),w=a==="boom"?PE:LE,A=Wl(M,R),D=0;A<w?D=1:D=Math.max(0,1-(A-w)/7),d.setMix(D,.28)}let y=M=>{M.code==="KeyM"&&(l=!l,c?.setMix(l?0:h,.08))};typeof window<"u"&&window.addEventListener("keydown",y);let _={hasTape:!1,saveFromSynth:x,insertNearest:p,tick:m,currentBed:d,get clip(){return r}};return _}var BE=2.6,Gp=["#e07040","#fbf6ea","#ffd76a","#2ec4c8","#7ad0ff","#9be07a","#ff7ab0"],FE=[3065032,8048895,10215546,16743088];function An(n,t={}){return new Vt({color:n,roughness:.72,metalness:.04,...t})}function Xp(n){return n.castShadow=!0,n.receiveShadow=!0,n}function qn(n,t,e,i){return Xp(new W(new It(n,t,e),i))}function kE(n,t){return!n||!t?1/0:Math.hypot((n.x??0)-(t.x??0),(n.z??0)-(t.z??0))}function Vp(n,t){let e=[];for(let r of[...n.children])t*r.position.x>.15&&r.position.y>.85&&e.push(r);let i=new ft;if(!e.length)return i;let s=e.reduce((r,o)=>r.position.y>=o.position.y?r:o);i.position.copy(s.position),n.add(i);for(let r of e)r.position.sub(i.position),i.add(r);return i}function Wp(n,t){let e=new ft,i=qn(.086,.014,.054,n);e.add(i);let s=qn(.07,.002,.028,t);return s.position.y=.008,e.add(s),e}function HE(){let n=new ft,t=An(1710624,{roughness:.4,metalness:.38}),e=An(13154458,{roughness:.55}),i=An(10133672,{roughness:.28,metalness:.62}),s=An(6964264,{roughness:.82}),r=qn(.92,.42,.58,s);r.position.set(0,.21,.62),n.add(r);let o=qn(.62,.07,.24,t);o.position.set(-.12,.46,.58),n.add(o);let a=qn(.58,.008,.1,An(1118488,{roughness:.35,metalness:.2}));a.position.set(-.12,.5,.52),n.add(a);let c=[];for(let g=0;g<12;g++){let x=g%7===1||g%7===3||g%7===6,p=qn(.038,.012,x?.07:.1,x?An(273):e);p.position.set(-.34+g*.042,.505,.64),n.add(p),c.push(p)}let l=qn(.28,.06,.22,t);l.position.set(.28,.455,.6),n.add(l);let h=[];for(let g=0;g<2;g++)for(let x=0;x<4;x++){let p=An(2763314,{roughness:.45,emissive:0,emissiveIntensity:1}),m=qn(.05,.012,.04,p);m.position.set(.175+x*.068,.492,.545+g*.07),n.add(m),h.push({mesh:m,mat:p})}let u=Xp(new W(new Bt(.016,.016,.018,8),i));u.position.set(.12,.51,.5),n.add(u);let d=new ft,f=qn(.2,.018,.16,An(273));f.position.y=.02,d.add(f);for(let g of[-1,1]){let x=qn(.03,.06,.06,An(1710618,{metalness:.3}));x.position.set(g*.11,-.02,0),d.add(x)}return n.userData.cans=d,n.userData.keys=c,n.userData.pads=h,n}function Ai(n,t,e){let i=document.createElement(n);return t&&Object.assign(i.style,t),e&&e.appendChild(i),i}function zE(){if(typeof document>"u"||document.getElementById("aus101-seq-css"))return;let n=document.createElement("style");n.id="aus101-seq-css",n.textContent="#aus101-seq,#aus101-seq *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}#aus101-seq{position:fixed;z-index:16;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom,0px) + 8px));transform:translateX(-50%);display:none;pointer-events:auto;padding:8px 8px 7px;background:rgba(11,18,16,.78);border:1px solid rgba(251,246,234,.22);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.35);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}#aus101-seq .grid{display:grid;grid-template-columns:10px repeat(16,14px);gap:3px;align-items:center}#aus101-seq .sw{width:8px;height:8px;border-radius:2px}#aus101-seq button.st{width:14px;height:14px;padding:0;margin:0;border:0;border-radius:2px;background:rgba(251,246,234,.12);cursor:pointer}#aus101-seq button.st[data-on='1']{background:var(--c,#ffd76a)}#aus101-seq button.st[data-now='1']{box-shadow:inset 0 0 0 1px #fff}#aus101-seq .row{display:flex;gap:6px;justify-content:flex-end;margin-top:6px}#aus101-seq .act{min-width:44px;height:22px;border:1px solid rgba(251,246,234,.28);border-radius:11px;background:rgba(12,18,16,.5);color:#fbf6ea;font:600 10px/1 system-ui,sans-serif;letter-spacing:.04em;padding:0 8px;cursor:pointer}#aus101-seq-pad{position:fixed;z-index:15;left:50%;bottom:max(20px,calc(env(safe-area-inset-bottom,0px) + 10px));transform:translateX(-50%);width:68px;height:68px;border-radius:50%;display:none;pointer-events:auto;background:rgba(12,18,16,.4);border:1px solid rgba(251,246,234,.28);box-shadow:0 4px 18px rgba(0,0,0,.28);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}#aus101-seq-pad:active{background:rgba(255,215,106,.28)}",document.head.appendChild(n)}function GE(n,t,e,i){zE();let s=document.getElementById("aus101-seq"),r=document.getElementById("aus101-seq-pad");if(s&&r)return{root:s,pad:r,cells:s._cells};s=Ai("div",null,document.body),s.id="aus101-seq";let o=Ai("div",null,s);o.className="grid";let a={};Vs.forEach((u,d)=>{let f=Ai("div",{background:Gp[d]},o);f.className="sw";let g=[];for(let x=0;x<16;x++){let p=Ai("button",null,o);p.className="st",p.type="button",p.style.setProperty("--c",Gp[d]),p.dataset.tr=u,p.dataset.s=String(x),g.push(p)}a[u]=g}),s._cells=a;let c=Ai("div",null,s);c.className="row";let l=Ai("button",null,c);l.className="act",l.type="button",l.textContent="SAVE";let h=Ai("button",null,c);return h.className="act",h.type="button",h.textContent="TAKE",l.addEventListener("pointerup",u=>{u.preventDefault(),u.stopPropagation(),t()}),h.addEventListener("pointerup",u=>{u.preventDefault(),u.stopPropagation(),e()}),o.addEventListener("pointerup",u=>{let d=u.target;!(d instanceof HTMLElement)||!d.classList.contains("st")||(u.preventDefault(),u.stopPropagation(),n(d.dataset.tr,parseInt(d.dataset.s,10)))}),r=Ai("div",null,document.body),r.id="aus101-seq-pad",r.addEventListener("pointerup",u=>{u.preventDefault(),u.stopPropagation(),i()}),{root:s,pad:r,cells:a}}function qp(n){let t=new ft;t.name="synth-rig",t.position.set(15.6,0,4.2),t.rotation.y=.35;let e=Gn({hair:3809816,shorts:1710626,skin:13010498});e.name="synth-lad",e.userData.kind="ken",t.add(e);let i=HE();t.add(i);let s=i.userData.cans,{headY:r,headR:o}=e.userData.body;s.position.set(0,r+o*.15,0),e.add(s);let a=Vp(e,-1),c=Vp(e,1);a.rotation.set(-.92,-.04,.55),c.rotation.set(-.88,.06,-.62);let l=An(1447450,{roughness:.45,metalness:.2}),h=An(14708784,{roughness:.55});for(let C=0;C<3;C++){let N=Wp(l,h);N.position.set(.38-C*.02,.455+C*.015,.42),N.rotation.y=.2+C*.08,i.add(N)}let u=Wp(l,An(16766826,{roughness:.5}));u.position.set(-.34,.455,.44),u.visible=!1,i.add(u),n.add(t);let d=Hp(),f=!1,g=null,x=!1,p=!1,m=!1,y=null;function _(){if(v)for(let C of Vs){let N=v.cells[C],$=d[C];for(let P=0;P<16;P++)N[P].dataset.on=$[P]?"1":"0"}}function M(C){if(!(!v||!f))for(let N of Vs){let $=v.cells[N];for(let P=0;P<16;P++)$[P].dataset.now=P===C?"1":"0"}}function R(){let C=Ti();C&&(y||(y=ql(C,C.destination,d,{peak:.3})),y.start(),y.setMix(.85,.06))}function w(){y?.setMix(0,.08),y?.stop()}function A(C){C!==f&&(f=C,v&&(v.root.style.display=f?"block":"none",v.pad.style.display="none"),f?(document.exitPointerLock?.(),_(),R()):w())}function D(C){v&&(v.pad.style.display=C&&!f?"block":"none")}let v=typeof document<"u"?GE((C,N)=>{d[C]&&(d[C][N]=d[C][N]?0:1,_())},()=>{g="save",u.visible=!0},()=>{g="take",u.visible=!1},()=>{g="open",A(!0)}):null;function b(C,N){let $=kE(C,t.position)<=BE,P=!!N?.KeyE,O=!!(N?.Enter||N?.NumpadEnter),H=!!N?.KeyT,B=P&&!x,q=O&&!p,G=H&&!m;if(x=P,p=O,m=H,!$)return f&&A(!1),D(!1),g=null,null;D(!f);let z=null;return g&&(z=g,g=null),B?f?(A(!1),null):(A(!0),"open"):f&&q?(u.visible=!0,"save"):f&&G?(u.visible=!1,"take"):z==="open"?(A(!0),"open"):z==="save"||z==="take"?z:null}return{tick(C){let N=Math.sin(C*7.2);c.rotation.x=-.88+N*.1,a.rotation.z=.55+Math.sin(C*2.1)*.04,e.rotation.y=Math.sin(C*.7)*.05,e.userData.body?.head&&(e.userData.body.head.position.y=r+Math.sin(C*1.4)*.012);let $=y?.running?y.step:C*3.1&15,P=i.userData.pads;for(let H=0;H<P.length;H++){let B=f&&($&7)===H;P[H].mat.emissive.setHex(B?FE[H%4]:0)}let O=i.userData.keys;for(let H=0;H<O.length;H++)O[H].position.y=.505+(f&&$%12===H?.006:0);f&&M(y?.step??0)},position:t.position,tryInteract:b,get pattern(){return d},snapshot(){return Xl(d)},get open(){return f}}}var VE=725520;pd();xd();md();var eh=document.getElementById("game"),es=new ur({canvas:eh,antialias:!0,alpha:!1,powerPreference:"high-performance"});es.setClearColor(VE,1);es.outputColorSpace=ne;es.shadowMap.enabled=!0;es.shadowMap.type=il;var an=new Gi;nf(an);var Ws=new Oe(62,1,.08,220),WE=Bd(),Zp=Ld(),Ea=sf(an,Zp),ce=Pd({x:0,y:0,z:10});ce.yaw=0;var Xs=af();an.add(Xs);var kr=df(an),Sa=ep(an),XE=up(an),qE=mp(an),$p=Jf(an),YE=Np(kr,an),Yl=qp(an),ba=zp({getBoomPos:()=>Sa.musicSpots.find(n=>n.id==="boombox")?.position||{x:12,z:8},getDjPos:()=>({x:-24,z:7})});for(let n of Sa.musicSpots)n.id.startsWith("guitar")&&n.position&&kr.push({mesh:{position:n.position},kind:"ken",ageBand:"adult"});var xn=new sa;xn.loadManifest().catch(()=>{});var qs=new ra,ZE=vd(qs,null),$E=Rd(qs),jl=gf(xn,kr),Zl=wf();Rl(Xs);var Ql=Bf();document.body.appendChild(Ql.html);var $l=Wf(),Kp=Pf({scene:an,play:n=>xn.play(n),onGameOver:()=>{Rn=!1,Yn?.setState("menu")}}),Jp=null;window.addEventListener("keydown",n=>{!Rn||Cn||n.code==="KeyF"&&(n.preventDefault(),Kp.tryFire("laser"))});var Yn=null,Yp=null,Br=null,jp=null,va=null,Fr=null,Ma=null,Rn=!1,Cn=!1,Kl=0,Qp=new Jo(!1),ts=Id({dom:eh,isPlaying:()=>Rn&&!Cn,onEscapePause:()=>{Rn&&!Cn&&(Cn=!0,jE.showAsPause(),Yn?.setState("menu"),document.pointerLockElement&&document.exitPointerLock())}});ts.bindPlayer(ce);Wd({keys:ts.keys,isPlaying:()=>Rn&&!Cn});function nh(){let{w:n,h:t}=gd(es,eh);Ws.aspect=n/Math.max(1,t),Ws.updateProjectionMatrix()}nh();window.addEventListener("resize",nh);window.addEventListener("orientationchange",()=>setTimeout(nh,300));var Zn=!0;window.addEventListener("keydown",n=>{n.code==="KeyM"&&Rn&&(Zn=!Zn,xn.gain&&(xn.gain.gain.value=Zn?.5:0),qs.master&&(qs.master.gain.value=Zn?.85:0))});async function KE(){Rn=!0,Cn=!1,Qp.start(),WE.snap(),ts.tryLock();try{await xn.unlock(),await qs.unlock();let n=xn.ctx||qs.ctx;if(n&&!Yn){Yn=Md(n),Yp=Ed(n),Br=qd(n),Br.start(),Br.setMix(0,.05),va=yp(n),Fr=vp(n),Ma=Mp(n),va.start(),Fr.start(),Ma.start(),va.setMix(0,.05),Fr.setMix(0,.05),Ma.setMix(0,.05);let t=Sa.musicSpots,e=i=>t.find(s=>s.id===i);Jp=kf({carpenter:Yn,voice:xn,isTalking:i=>jl.isTalking(i??performance.now())}),jp=gp({carpenter:Yn,shades:Br,locals:[{id:"piano",getPos:()=>Ea.piano,radius:12,bed:Br},{id:"dj",getPos:()=>e("dj")?.position||{x:-24,z:7},radius:10,bed:Ma},{id:"boombox",getPos:()=>e("boombox")?.position,radius:8,bed:va},{id:"guitar-a",getPos:()=>e("guitar-a")?.position,radius:7,bed:Fr},{id:"guitar-b",getPos:()=>e("guitar-b")?.position,radius:7,bed:Fr},{id:"tape",getPos:()=>ba.currentBed.inserted==="dj"?{x:-24,z:7}:{x:12,z:8},radius:9,bed:ba.currentBed}]})}Yn?.setState("boardwalk"),Yn?.start(),Yp?.start(),Zn&&(await xn.preload(["dj_open_01","gold_coast_lad_01","walkby_flirt_01","walkby_heckle_01","ken_gossip_steaks_beach","babe_gossip_botox_map","interject_oi_01","gull_01","goth_01"]),await xn.play("dj_open_01").ready)}catch(n){console.warn("audio",n)}}var th=new ia({onDone:()=>KE()}),Jl=n=>kr.find(t=>t.kind===n)?.mesh?.position,JE=Xf({reel:th,getPlayerPos:()=>ce.pos,isPlaying:()=>Rn&&!Cn&&!th.playing,spots:[{id:"piano",getPos:()=>Ea.piano,radius:8},{id:"painter",getPos:()=>$p.root?.position,radius:6},{id:"incel",getPos:()=>Jl("sigma_07"),radius:5.5},{id:"kid",getPos:()=>Jl("kid"),radius:5.2},{id:"babe",getPos:()=>Jl("babe"),radius:5.5},{id:"fight",getPos:()=>({x:16,z:2}),radius:7}],onStart:()=>{Cn=!0,document.pointerLockElement&&document.exitPointerLock()},onEnd:()=>{Cn=!1,ts.tryLock()}}),jE=new na({onStart:async()=>{try{await xn.unlock(),Zn&&await xn.play("factory_recall_01").ready}catch{}th.start()}}),QE=new Ns().load("assets/media/ads/billboard_terminate_uv.png",n=>{n.colorSpace=ne}),ih=new W(new oe(9.2,5.2),new de({map:QE}));ih.position.set(0,6.4,zt.boardwalkZ-5.5);ih.rotation.y=Math.PI;an.add(ih);function tm(){requestAnimationFrame(tm);let n=Cn||!Rn?0:Math.min(.05,Qp.getDelta());for(Kl+=n;Kl>=pn;){if(Rn&&!Cn){let t=Xd();t.mag>.04&&(ce.yaw-=t.x*2.35*pn,ce.pitch-=t.y*1.55*pn,ce.pitch=Math.max(-1.45,Math.min(1.45,ce.pitch))),Dd(ce,ts.keys,Zp.COL,Ml,pn)}Kl-=pn}if(Rn&&!Cn){let t=performance.now()*.001;Ea.update(t),Sa.tick(t),XE.tick(n||pn),qE.tick(ce.pos,Zn),YE.tick(t,ce.pos),Yl.tick(t);{let r=Yl.tryInteract(ce.pos,ts.keys);(r==="save"||r==="take")&&ba.saveFromSynth(Yl.snapshot())}ba.tick(ce.pos),Jp?.tick?.(),Kp.tick(n||pn,ce.pos);let e=Math.hypot(ce.vel.x,ce.vel.z);Xs.position.set(ce.pos.x,ce.pos.y,ce.pos.z),Xs.rotation.y=ce.yaw+Math.PI,El(Xs,{walkPhase:ce.step,speed:e}),Fd(Ws,ce,n||.016),ZE.tick(performance.now(),e>.4),$E.tick({speed:e,onWood:Ea.isWood(ce.pos.x,ce.pos.z),dt:n||pn});let i=!!ts.keys.Space;i?Yn?.setState("apply"):Yn?.setState("boardwalk");let s=Zl.canPaint()?Sf(kr,ce.pos,i,n||pn,ce.yaw):null;s?(Ql.track(s.npc),$l.show(s.npc)):$l.hide(),$l.tick(),Ql.tick(n||pn,s?.npc),Zl.tick({squeezeHeld:i,applying:!!s,dt:n||pn}),Tf(Xs,Zl,n||pn),s&&Zn&&!jl.isTalking(performance.now())&&Math.random()<.012&&xn.play("rub_pleasure_01",{gain:1.2}),Zn&&jl.tick(performance.now(),ce.pos),jp?.tick(ce.pos,Zn),$p.tick(es,an,performance.now()),JE.tick()}else Rn||(Ws.position.set(8,6.5,22),Ws.lookAt(0,1.2,4));es.render(an,Ws)}tm();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
