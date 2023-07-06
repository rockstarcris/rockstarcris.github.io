/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Wu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],u=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;u||(p=64,o||(f=64)),s.push(n[h],n[l],n[f],n[p])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(To(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||l==null)throw new Yu;const f=i<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),l!==64){const E=c<<6&192|l;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Yu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xu=function(e){const t=To(e);return Io.encodeByteArray(t,!0)},_n=function(e){return Xu(e).replace(/\./g,"")},Ju=function(e){try{return Io.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=()=>Zu().__FIREBASE_DEFAULTS__,ec=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ju(e[1]);return t&&JSON.parse(t)},So=()=>{try{return tc()||ec()||nc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sc=e=>{var t,n;return(n=(t=So())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},rc=e=>{const t=sc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Co=()=>{var e;return(e=So())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[_n(JSON.stringify(n)),_n(JSON.stringify(o)),a].join(".")}function ac(){try{return typeof indexedDB=="object"}catch{return!1}}function uc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="FirebaseError";class pe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=cc,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?hc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new pe(r,a,s)}}function hc(e,t){return e.replace(lc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const lc=/\{\$([^}]+)}/g;function Fs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(pi(i)&&pi(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function pi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return e&&e._delegate?e._delegate:e}class Me{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ic;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(gc(t))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Pt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pt){return this.instances.has(t)}getOptions(t=Pt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Pt){return this.component?this.component.multipleInstances?t:Pt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fc(e){return e===Pt?void 0:e}function gc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new dc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const mc={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},yc=k.INFO,vc={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},wc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=vc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Do{constructor(t){this.name=t,this._logLevel=yc,this._logHandler=wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Ec=(e,t)=>t.some(n=>e instanceof n);let mi,yi;function Tc(){return mi||(mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ic(){return yi||(yi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _o=new WeakMap,Vs=new WeakMap,No=new WeakMap,Ts=new WeakMap,pr=new WeakMap;function Sc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Dt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_o.set(n,e)}).catch(()=>{}),pr.set(t,e),t}function Cc(e){if(Vs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Vs.set(e,t)}let $s={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||No.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ac(e){$s=e($s)}function Dc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Is(this),t,...n);return No.set(s,t.sort?t.sort():[t]),Dt(s)}:Ic().includes(e)?function(...t){return e.apply(Is(this),t),Dt(_o.get(this))}:function(...t){return Dt(e.apply(Is(this),t))}}function _c(e){return typeof e=="function"?Dc(e):(e instanceof IDBTransaction&&Cc(e),Ec(e,Tc())?new Proxy(e,$s):e)}function Dt(e){if(e instanceof IDBRequest)return Sc(e);if(Ts.has(e))return Ts.get(e);const t=_c(e);return t!==e&&(Ts.set(e,t),pr.set(t,e)),t}const Is=e=>pr.get(e);function Nc(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Dt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Dt(o.result),u.oldVersion,u.newVersion,Dt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bc=["get","getKey","getAll","getAllKeys","count"],kc=["put","add","delete","clear"],Ss=new Map;function vi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ss.get(t))return Ss.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=kc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||bc.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,r?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&u.done]))[0]};return Ss.set(t,i),i}Ac(e=>({...e,get:(t,n,s)=>vi(t,n)||e.get(t,n,s),has:(t,n)=>!!vi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Us="@firebase/app",wi="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Do("@firebase/app"),Mc="@firebase/app-compat",Oc="@firebase/analytics-compat",Lc="@firebase/analytics",Pc="@firebase/app-check-compat",Fc="@firebase/app-check",Vc="@firebase/auth",$c="@firebase/auth-compat",Uc="@firebase/database",Bc="@firebase/database-compat",jc="@firebase/functions",qc="@firebase/functions-compat",zc="@firebase/installations",Kc="@firebase/installations-compat",Hc="@firebase/messaging",Gc="@firebase/messaging-compat",Qc="@firebase/performance",Wc="@firebase/performance-compat",Yc="@firebase/remote-config",Xc="@firebase/remote-config-compat",Jc="@firebase/storage",Zc="@firebase/storage-compat",th="@firebase/firestore",eh="@firebase/firestore-compat",nh="firebase",sh="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]",rh={[Us]:"fire-core",[Mc]:"fire-core-compat",[Lc]:"fire-analytics",[Oc]:"fire-analytics-compat",[Fc]:"fire-app-check",[Pc]:"fire-app-check-compat",[Vc]:"fire-auth",[$c]:"fire-auth-compat",[Uc]:"fire-rtdb",[Bc]:"fire-rtdb-compat",[jc]:"fire-fn",[qc]:"fire-fn-compat",[zc]:"fire-iid",[Kc]:"fire-iid-compat",[Hc]:"fire-fcm",[Gc]:"fire-fcm-compat",[Qc]:"fire-perf",[Wc]:"fire-perf-compat",[Yc]:"fire-rc",[Xc]:"fire-rc-compat",[Jc]:"fire-gcs",[Zc]:"fire-gcs-compat",[th]:"fire-fst",[eh]:"fire-fst-compat","fire-js":"fire-js",[nh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Map,js=new Map;function ih(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bn(e){const t=e.name;if(js.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;js.set(t,e);for(const n of Nn.values())ih(n,e);return!0}function oh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_t=new Ao("app","Firebase",ah);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=sh;function hh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Bs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw _t.create("bad-app-name",{appName:String(r)});if(n||(n=Co()),!n)throw _t.create("no-options");const i=Nn.get(r);if(i){if(Fs(n,i.options)&&Fs(s,i.config))return i;throw _t.create("duplicate-app",{appName:r})}const o=new pc(r);for(const u of js.values())o.addComponent(u);const a=new uh(n,s,o);return Nn.set(r,a),a}function lh(e=Bs){const t=Nn.get(e);if(!t&&e===Bs&&Co())return hh();if(!t)throw _t.create("no-app",{appName:e});return t}function te(e,t,n){var s;let r=(s=rh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}bn(new Me(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="firebase-heartbeat-database",fh=1,Oe="firebase-heartbeat-store";let Cs=null;function bo(){return Cs||(Cs=Nc(dh,fh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oe)}}}).catch(e=>{throw _t.create("idb-open",{originalErrorMessage:e.message})})),Cs}async function gh(e){try{return await(await bo()).transaction(Oe).objectStore(Oe).get(ko(e))}catch(t){if(t instanceof pe)Bt.warn(t.message);else{const n=_t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(n.message)}}}async function Ei(e,t){try{const s=(await bo()).transaction(Oe,"readwrite");await s.objectStore(Oe).put(t,ko(e)),await s.done}catch(n){if(n instanceof pe)Bt.warn(n.message);else{const s=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(s.message)}}}function ko(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=1024,mh=30*24*60*60*1e3;class yh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ti();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=mh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ti(),{heartbeatsToSend:n,unsentEntries:s}=vh(this._heartbeatsCache.heartbeats),r=_n(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ti(){return new Date().toISOString().substring(0,10)}function vh(e,t=ph){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ii(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ii(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ac()?uc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ei(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ii(e){return _n(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(e){bn(new Me("platform-logger",t=>new xc(t),"PRIVATE")),bn(new Me("heartbeat",t=>new yh(t),"PRIVATE")),te(Us,wi,e),te(Us,wi,"esm2017"),te("fire-js","")}Eh("");var Th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,mr=mr||{},I=Th||self;function zn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ge(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ih(e){return Object.prototype.hasOwnProperty.call(e,As)&&e[As]||(e[As]=++Sh)}var As="closure_uid_"+(1e9*Math.random()>>>0),Sh=0;function Ch(e,t,n){return e.call.apply(e.bind,arguments)}function Ah(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Ch:Z=Ah,Z.apply(null,arguments)}function fn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Mt(){this.s=this.s,this.o=this.o}var Dh=0;Mt.prototype.s=!1;Mt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Dh!=0)&&Ih(this)};Mt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function yr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Si(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(zn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var _h=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",()=>{},t),I.removeEventListener("test",()=>{},t)}catch{}return e}();function Le(e){return/^[\s\xa0]*$/.test(e)}function Kn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return Kn().indexOf(e)!=-1}function vr(e){return vr[" "](e),e}vr[" "]=function(){};function Nh(e,t){var n=El;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var bh=ft("Opera"),ie=ft("Trident")||ft("MSIE"),Ro=ft("Edge"),qs=Ro||ie,Mo=ft("Gecko")&&!(Kn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),kh=Kn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Oo(){var e=I.document;return e?e.documentMode:void 0}var zs;t:{var Ds="",_s=function(){var e=Kn();if(Mo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ro)return/Edge\/([\d\.]+)/.exec(e);if(ie)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kh)return/WebKit\/(\S+)/.exec(e);if(bh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_s&&(Ds=_s?_s[1]:""),ie){var Ns=Oo();if(Ns!=null&&Ns>parseFloat(Ds)){zs=String(Ns);break t}}zs=Ds}var Ks;if(I.document&&ie){var Ci=Oo();Ks=Ci||parseInt(zs,10)||void 0}else Ks=void 0;var xh=Ks;function Pe(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mo){t:{try{vr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Rh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pe.$.h.call(this)}}K(Pe,tt);var Rh={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Qe="closure_listenable_"+(1e6*Math.random()|0),Mh=0;function Oh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++Mh,this.fa=this.ia=!1}function Hn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function wr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Lh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Lo(e){const t={};for(const n in e)t[n]=e[n];return t}const Ai="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Po(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Ai.length;i++)n=Ai[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Gn(e){this.src=e,this.g={},this.h=0}Gn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Gs(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Oh(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function Hs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=xo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Hn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Gs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),bs={};function Fo(e,t,n,s,r){if(s&&s.once)return $o(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Fo(e,t[i],n,s,r);return null}return n=Sr(n),e&&e[Qe]?e.O(t,n,Ge(s)?!!s.capture:!!s,r):Vo(e,t,n,!1,s,r)}function Vo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Ge(r)?!!r.capture:!!r,a=Ir(e);if(a||(e[Er]=a=new Gn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Ph(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)_h||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Bo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ph(){function e(n){return t.call(e.src,e.listener,n)}const t=Fh;return e}function $o(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)$o(e,t[i],n,s,r);return null}return n=Sr(n),e&&e[Qe]?e.P(t,n,Ge(s)?!!s.capture:!!s,r):Vo(e,t,n,!0,s,r)}function Uo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Uo(e,t[i],n,s,r);else s=Ge(s)?!!s.capture:!!s,n=Sr(n),e&&e[Qe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Gs(i,n,s,r),-1<n&&(Hn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ir(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Gs(t,n,s,r)),(n=-1<e?t[e]:null)&&Tr(n))}function Tr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Qe])Hs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Bo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ir(t))?(Hs(n,e),n.h==0&&(n.src=null,t[Er]=null)):Hn(e)}}}function Bo(e){return e in bs?bs[e]:bs[e]="on"+e}function Fh(e,t){if(e.fa)e=!0;else{t=new Pe(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Tr(e),e=n.call(s,t)}return e}function Ir(e){return e=e[Er],e instanceof Gn?e:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sr(e){return typeof e=="function"?e:(e[ks]||(e[ks]=function(t){return e.handleEvent(t)}),e[ks])}function z(){Mt.call(this),this.i=new Gn(this),this.S=this,this.J=null}K(z,Mt);z.prototype[Qe]=!0;z.prototype.removeEventListener=function(e,t,n,s){Uo(this,e,t,n,s)};function Q(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var r=t;t=new tt(s,e),Po(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=gn(o,s,!0,t)&&r}if(o=t.g=e,r=gn(o,s,!0,t)&&r,r=gn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=gn(o,s,!1,t)&&r}z.prototype.N=function(){if(z.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Hn(n[s]);delete e.g[t],e.h--}}this.J=null};z.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};z.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function gn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Hs(e.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var Cr=I.JSON.stringify;class Vh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function $h(){var e=Ar;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Uh{constructor(){this.h=this.g=null}add(t,n){const s=jo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var jo=new Vh(()=>new Bh,e=>e.reset());class Bh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function qh(e){I.setTimeout(()=>{throw e},0)}let Fe,Ve=!1,Ar=new Uh,qo=()=>{const e=I.Promise.resolve(void 0);Fe=()=>{e.then(zh)}};var zh=()=>{for(var e;e=$h();){try{e.h.call(e.g)}catch(n){qh(n)}var t=jo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ve=!1};function Qn(e,t){z.call(this),this.h=e||1,this.g=t||I,this.j=Z(this.qb,this),this.l=Date.now()}K(Qn,z);m=Qn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(Dr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Qn.$.N.call(this),Dr(this),delete this.g};function _r(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function zo(e){e.g=_r(()=>{e.g=null,e.i&&(e.i=!1,zo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Kh extends Mt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zo(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){Mt.call(this),this.h=e,this.g={}}K($e,Mt);var Di=[];function Ko(e,t,n,s){Array.isArray(n)||(n&&(Di[0]=n.toString()),n=Di);for(var r=0;r<n.length;r++){var i=Fo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ho(e){wr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Tr(t)},e),e.g={}}$e.prototype.N=function(){$e.$.N.call(this),Ho(this)};$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wn(){this.g=!0}Wn.prototype.Ea=function(){this.g=!1};function Hh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Gh(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Zt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Wh(e,n)+(s?" "+s:"")})}function Qh(e,t){e.info(function(){return"TIMEOUT: "+t})}Wn.prototype.info=function(){};function Wh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Cr(n)}catch{return t}}var Ht={},_i=null;function Yn(){return _i=_i||new z}Ht.Ta="serverreachability";function Go(e){tt.call(this,Ht.Ta,e)}K(Go,tt);function Ue(e){const t=Yn();Q(t,new Go(t))}Ht.STAT_EVENT="statevent";function Qo(e,t){tt.call(this,Ht.STAT_EVENT,e),this.stat=t}K(Qo,tt);function st(e){const t=Yn();Q(t,new Qo(t,e))}Ht.Ua="timingevent";function Wo(e,t){tt.call(this,Ht.Ua,e),this.size=t}K(Wo,tt);function We(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Xn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nr(){}Nr.prototype.h=null;function Ni(e){return e.h||(e.h=e.i())}function Xo(){}var Ye={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function br(){tt.call(this,"d")}K(br,tt);function kr(){tt.call(this,"c")}K(kr,tt);var Qs;function Jn(){}K(Jn,Nr);Jn.prototype.g=function(){return new XMLHttpRequest};Jn.prototype.i=function(){return{}};Qs=new Jn;function Xe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new $e(this),this.P=Yh,e=qs?125:void 0,this.V=new Qn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jo}function Jo(){this.i=null,this.g="",this.h=!1}var Yh=45e3,Ws={},kn={};m=Xe.prototype;m.setTimeout=function(e){this.P=e};function Ys(e,t,n){e.L=1,e.v=ts(Tt(t)),e.s=n,e.S=!0,Zo(e,null)}function Zo(e,t){e.G=Date.now(),Je(e),e.A=Tt(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),aa(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Jo,e.g=Na(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Kh(Z(e.Pa,e,e.g),e.O)),Ko(e.U,e.g,"readystatechange",e.nb),t=e.I?Lo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ue(),Hh(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&gt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const h=gt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||qs||this.g&&(this.h.h||this.g.ja()||Ri(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Ue(3):Ue(2)),Zn(this);var n=this.g.da();this.ca=n;e:if(ta(this)){var s=Ri(this.g);e="";var r=s.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Ne(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Gh(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Le(a)){var c=a;break e}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xs(this,n);else{this.i=!1,this.o=3,st(12),Ft(this),Ne(this);break t}}this.S?(ea(this,h,o),qs&&this.i&&h==3&&(Ko(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),Xs(this,o)),h==4&&Ft(this),this.i&&!this.J&&(h==4?Ca(this.l,this):(this.i=!1,Je(this)))}else yl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Ft(this),Ne(this)}}}catch{}finally{}};function ta(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ea(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=Xh(e,n),r==kn){t==4&&(e.o=4,st(14),s=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Ws){e.o=4,st(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Zt(e.j,e.m,r,null),Xs(e,r);ta(e)&&r!=kn&&r!=Ws&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,st(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pr(t),t.M=!0,st(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),Ne(e))}m.mb=function(){if(this.g){var e=gt(this.g),t=this.g.ja();this.C<t.length&&(Zn(this),ea(this,e,t),this.i&&e!=4&&Je(this))}};function Xh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?kn:(n=Number(t.substring(n,s)),isNaN(n)?Ws:(s+=1,s+n>t.length?kn:(t=t.slice(s,s+n),e.C=s+n,t)))}m.cancel=function(){this.J=!0,Ft(this)};function Je(e){e.Y=Date.now()+e.P,na(e,e.P)}function na(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=We(Z(e.lb,e),t)}function Zn(e){e.B&&(I.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qh(this.j,this.A),this.L!=2&&(Ue(),st(17)),Ft(this),this.o=2,Ne(this)):na(this,this.Y-e)};function Ne(e){e.l.H==0||e.J||Ca(e.l,e)}function Ft(e){Zn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Dr(e.V),Ho(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Xs(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Js(n.i,e))){if(!e.K&&Js(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Mn(n),ss(n);else break t;Lr(n),st(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=We(Z(n.ib,n),6e3));if(1>=ha(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vt(n,11)}else if((e.K||n.g==e)&&Mn(n),!Le(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xr(i,i.h),i.h=null))}if(s.F){const D=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.Da=D,R(s.I,s.F,D))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=_a(s,s.J?s.pa:null,s.Y),o.K){la(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(Zn(a),Je(a)),s.g=o}else Ia(s);0<n.j.length&&rs(n)}else c[0]!="stop"&&c[0]!="close"||Vt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vt(n,7):Or(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ue(4)}catch{}}function Jh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(zn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Zh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(zn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function sa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(zn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Zh(e),s=Jh(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,xn(this,e.j),this.s=e.s,this.g=e.g,Rn(this,e.m),this.l=e.l;var t=e.i,n=new Be;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),bi(this,n),this.o=e.o}else e&&(t=String(e).match(ra))?(this.h=!1,xn(this,t[1]||"",!0),this.s=Ce(t[2]||""),this.g=Ce(t[3]||"",!0),Rn(this,t[4]),this.l=Ce(t[5]||"",!0),bi(this,t[6]||"",!0),this.o=Ce(t[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,ki,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,ki,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?sl:nl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,il)),e.join("")};function Tt(e){return new Ut(e)}function xn(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function bi(e,t,n){t instanceof Be?(e.i=t,ol(e.i,e.h)):(n||(t=Ae(t,rl)),e.i=new Be(t,e.h))}function R(e,t,n){e.i.set(t,n)}function ts(e){return R(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,el),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function el(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ki=/[#\/\?@]/g,nl=/[#\?:]/g,sl=/[#\?]/g,rl=/[#\?@]/g,il=/#/g;function Be(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&tl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Be.prototype;m.add=function(e,t){Ot(this),this.i=null,e=me(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ia(e,t){Ot(e),t=me(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function oa(e,t){return Ot(e),t=me(e,t),e.g.has(t)}m.forEach=function(e,t){Ot(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};m.ta=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};m.Z=function(e){Ot(this);let t=[];if(typeof e=="string")oa(this,e)&&(t=t.concat(this.g.get(me(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Ot(this),this.i=null,e=me(this,e),oa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function aa(e,t,n){ia(e,t),0<n.length&&(e.i=null,e.g.set(me(e,t),yr(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function me(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ol(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ia(this,s),aa(this,r,n))},e)),e.j=t}var al=class{constructor(e,t){this.g=e,this.map=t}};function ua(e){this.l=e||ul,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ul=10;function ca(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ha(e){return e.h?1:e.g?e.g.size:0}function Js(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xr(e,t){e.g?e.g.add(t):e.h=t}function la(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ua.prototype.cancel=function(){if(this.i=da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function da(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return yr(e.i)}var cl=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function hl(){this.g=new cl}function ll(e,t,n){const s=n||"";try{sa(e,function(r,i){let o=r;Ge(r)&&(o=Cr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function dl(e,t){const n=new Wn;if(I.Image){const s=new Image;s.onload=fn(pn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=fn(pn,n,s,"TestLoadImage: error",!1,t),s.onabort=fn(pn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=fn(pn,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function pn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Ze(e){this.l=e.fc||null,this.j=e.ob||!1}K(Ze,Nr);Ze.prototype.g=function(){return new es(this.l,this.j)};Ze.prototype.i=function(e){return function(){return e}}({});function es(e,t){z.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Rr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(es,z);var Rr=0;m=es.prototype;m.open=function(e,t){if(this.readyState!=Rr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,je(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=Rr};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function fa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tn(this):je(this),this.readyState==3&&fa(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,tn(this))};m.Ya=function(e){this.g&&(this.response=e,tn(this))};m.ka=function(){this.g&&tn(this)};function tn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,je(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function je(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var fl=I.JSON.parse;function P(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ga,this.L=this.M=!1}K(P,z);var ga="",gl=/^https?$/i,pl=["POST","PUT"];m=P.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qs.g(),this.C=this.u?Ni(this.u):Ni(Qs),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){xi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&e instanceof I.FormData,!(0<=xo(pl,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ya(this),0<this.B&&((this.L=ml(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=_r(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){xi(this,i)}};function ml(e){return ie&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof mr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function xi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pa(e),ns(e)}function pa(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),ns(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ns(this,!0)),P.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?ma(this):this.kb())};m.kb=function(){ma(this)};function ma(e){if(e.h&&typeof mr<"u"&&(!e.C[1]||gt(e)!=4||e.da()!=2)){if(e.v&&gt(e)==4)_r(e.La,0,e);else if(Q(e,"readystatechange"),gt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var r=String(e.I).match(ra)[1]||null;!r&&I.self&&I.self.location&&(r=I.self.location.protocol.slice(0,-1)),s=!gl.test(r?r.toLowerCase():"")}n=s}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var i=2<gt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",pa(e)}}finally{ns(e)}}}}function ns(e,t){if(e.g){ya(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=s}catch{}}}function ya(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function gt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),fl(t)}};function Ri(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ga:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function yl(e){const t={};e=(e.g&&2<=gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(Le(e[s]))continue;var n=jh(e[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}Lh(t,function(s){return s.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function va(e){let t="";return wr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Mr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=va(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):R(e,t,n))}function Ie(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function wa(e){this.Ga=0,this.j=[],this.l=new Wn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ie("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ie("baseRetryDelayMs",5e3,e),this.hb=Ie("retryDelaySeedMs",1e4,e),this.eb=Ie("forwardChannelMaxRetries",2,e),this.xa=Ie("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ua(e&&e.concurrentRequestLimit),this.Ja=new hl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=wa.prototype;m.ra=8;m.H=1;function Or(e){if(Ea(e),e.H==3){var t=e.W++,n=Tt(e.I);if(R(n,"SID",e.K),R(n,"RID",t),R(n,"TYPE","terminate"),en(e,n),t=new Xe(e,e.l,t),t.L=2,t.v=ts(Tt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=Na(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Je(t)}Da(e)}function ss(e){e.g&&(Pr(e),e.g.cancel(),e.g=null)}function Ea(e){ss(e),e.u&&(I.clearTimeout(e.u),e.u=null),Mn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function rs(e){if(!ca(e.i)&&!e.m){e.m=!0;var t=e.Na;Fe||qo(),Ve||(Fe(),Ve=!0),Ar.add(t,e),e.C=0}}function vl(e,t){return ha(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=We(Z(e.Na,e,t),Aa(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Xe(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Lo(i),Po(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ta(this,r,t),n=Tt(this.I),R(n,"RID",e),R(n,"CVER",22),this.F&&R(n,"X-HTTP-Session-Id",this.F),en(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(va(i)))+"&"+t:this.o&&Mr(n,this.o,i)),xr(this.i,r),this.bb&&R(n,"TYPE","init"),this.P?(R(n,"$req",t),R(n,"SID","null"),r.aa=!0,Ys(r,n,null)):Ys(r,n,t),this.H=2}}else this.H==3&&(e?Mi(this,e):this.j.length==0||ca(this.i)||Mi(this))};function Mi(e,t){var n;t?n=t.m:n=e.W++;const s=Tt(e.I);R(s,"SID",e.K),R(s,"RID",n),R(s,"AID",e.V),en(e,s),e.o&&e.s&&Mr(s,e.o,e.s),n=new Xe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ta(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),xr(e.i,n),Ys(n,s,t)}function en(e,t){e.na&&wr(e.na,function(n,s){R(t,s,n)}),e.h&&sa({},function(n,s){R(t,s,n)})}function Ta(e,t,n){n=Math.min(e.j.length,n);var s=e.h?Z(e.h.Va,e.h,e):null;t:{var r=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=r[u].g;const h=r[u].map;if(c-=i,0>c)i=Math.max(0,r[u].g-100),a=!1;else try{ll(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function Ia(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Fe||qo(),Ve||(Fe(),Ve=!0),Ar.add(t,e),e.A=0}}function Lr(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=We(Z(e.Ma,e),Aa(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,Sa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=We(Z(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),ss(this),Sa(this))};function Pr(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Sa(e){e.g=new Xe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Tt(e.wa);R(t,"RID","rpc"),R(t,"SID",e.K),R(t,"AID",e.V),R(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&R(t,"TO",e.qa),R(t,"TYPE","xmlhttp"),en(e,t),e.o&&e.s&&Mr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ts(Tt(t)),n.s=null,n.S=!0,Zo(n,e)}m.ib=function(){this.v!=null&&(this.v=null,ss(this),Lr(this),st(19))};function Mn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Ca(e,t){var n=null;if(e.g==t){Mn(e),Pr(e),e.g=null;var s=2}else if(Js(e.i,t))n=t.F,la(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=Yn(),Q(s,new Wo(s,n)),rs(e)}else Ia(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(s==1&&vl(e,t)||s==2&&Lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Vt(e,5);break;case 4:Vt(e,10);break;case 3:Vt(e,6);break;default:Vt(e,2)}}}function Aa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Vt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=Z(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||xn(n,"https"),ts(n)),dl(n.toString(),s)}else st(2);e.H=0,e.h&&e.h.za(t),Da(e),Ea(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))};function Da(e){if(e.H=0,e.ma=[],e.h){const t=da(e.i);(t.length!=0||e.j.length!=0)&&(Si(e.ma,t),Si(e.ma,e.j),e.i.i.length=0,yr(e.j),e.j.length=0),e.h.ya()}}function _a(e,t,n){var s=n instanceof Ut?Tt(n):new Ut(n);if(s.g!="")t&&(s.g=t+"."+s.g),Rn(s,s.m);else{var r=I.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Ut(null);s&&xn(i,s),t&&(i.g=t),r&&Rn(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&R(s,n,t),R(s,"VER",e.ra),en(e,s),s}function Na(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new P(new Ze({ob:!0})):new P(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function ba(){}m=ba.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function On(){if(ie&&!(10<=Number(xh)))throw Error("Environmental error: no available transport.")}On.prototype.g=function(e,t){return new ut(e,t)};function ut(e,t){z.call(this),this.g=new wa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Le(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Le(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}K(ut,z);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=_a(e,null,e.Y),rs(e)};ut.prototype.close=function(){Or(this.g)};ut.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Cr(e),e=n);t.j.push(new al(t.fb++,e)),t.H==3&&rs(t)};ut.prototype.N=function(){this.g.h=null,delete this.j,Or(this.g),delete this.g,ut.$.N.call(this)};function ka(e){br.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}K(ka,br);function xa(){kr.call(this),this.status=1}K(xa,kr);function ye(e){this.g=e}K(ye,ba);ye.prototype.Ba=function(){Q(this.g,"a")};ye.prototype.Aa=function(e){Q(this.g,new ka(e))};ye.prototype.za=function(e){Q(this.g,new xa)};ye.prototype.ya=function(){Q(this.g,"b")};function wl(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}K(ht,wl);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function xs(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)xs(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){xs(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){xs(this,s),r=0;break}}this.h=r,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function x(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var El={};function Fr(e){return-128<=e&&128>e?Nh(e,function(t){return new x([t|0],0>t?-1:0)}):new x([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return ee;if(0>e)return G(pt(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Zs;return new x(t,0)}function Ra(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(Ra(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),s=ee,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=pt(Math.pow(t,i)),s=s.R(i).add(pt(o))):(s=s.R(n),s=s.add(pt(o)))}return s}var Zs=4294967296,ee=Fr(0),tr=Fr(1),Oi=Fr(16777216);m=x.prototype;m.ea=function(){if(ct(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Zs+s)*t,t*=Zs}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(wt(this))return"0";if(ct(this))return"-"+G(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,s="";;){var r=Pn(n,t).g;n=Ln(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,wt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function wt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ct(e){return e.h==-1}m.X=function(e){return e=Ln(this,e),ct(e)?-1:wt(e)?0:1};function G(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new x(n,~e.h).add(tr)}m.abs=function(){return ct(this)?G(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new x(n,n[n.length-1]&-2147483648?-1:0)};function Ln(e,t){return e.add(G(t))}m.R=function(e){if(wt(this)||wt(e))return ee;if(ct(this))return ct(e)?G(this).R(G(e)):G(G(this).R(e));if(ct(e))return G(this.R(G(e)));if(0>this.X(Oi)&&0>e.X(Oi))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,u=e.D(r)&65535;n[2*s+2*r]+=o*u,mn(n,2*s+2*r),n[2*s+2*r+1]+=i*u,mn(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,mn(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,mn(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new x(n,0)};function mn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Se(e,t){this.g=e,this.h=t}function Pn(e,t){if(wt(t))throw Error("division by zero");if(wt(e))return new Se(ee,ee);if(ct(e))return t=Pn(G(e),t),new Se(G(t.g),G(t.h));if(ct(t))return t=Pn(e,G(t)),new Se(G(t.g),t.h);if(30<e.g.length){if(ct(e)||ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=tr,s=t;0>=s.X(e);)n=Li(n),s=Li(s);var r=Yt(n,1),i=Yt(s,1);for(s=Yt(s,2),n=Yt(n,2);!wt(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=Yt(s,1),n=Yt(n,1)}return t=Ln(e,r.R(t)),new Se(r,t)}for(r=ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=pt(n),o=i.R(t);ct(o)||0<o.X(e);)n-=s,i=pt(n),o=i.R(t);wt(i)&&(i=tr),r=r.add(i),e=Ln(e,o)}return new Se(r,e)}m.gb=function(e){return Pn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new x(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new x(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new x(n,this.h^e.h)};function Li(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new x(n,e.h)}function Yt(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new x(r,e.h)}On.prototype.createWebChannel=On.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Xn.NO_ERROR=0;Xn.TIMEOUT=8;Xn.HTTP_ERROR=6;Yo.COMPLETE="complete";Xo.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";z.prototype.listen=z.prototype.O;P.prototype.listenOnce=P.prototype.P;P.prototype.getLastError=P.prototype.Sa;P.prototype.getLastErrorCode=P.prototype.Ia;P.prototype.getStatus=P.prototype.da;P.prototype.getResponseJson=P.prototype.Wa;P.prototype.getResponseText=P.prototype.ja;P.prototype.send=P.prototype.ha;P.prototype.setWithCredentials=P.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;x.prototype.add=x.prototype.add;x.prototype.multiply=x.prototype.R;x.prototype.modulo=x.prototype.gb;x.prototype.compare=x.prototype.X;x.prototype.toNumber=x.prototype.ea;x.prototype.toString=x.prototype.toString;x.prototype.getBits=x.prototype.D;x.fromNumber=pt;x.fromString=Ra;var Tl=function(){return new On},Il=function(){return Yn()},Rs=Xn,Sl=Yo,Cl=Ht,Pi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Al=Ze,yn=Xo,Dl=P,_l=ht,ne=x;const Fi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Do("@firebase/firestore");function Vi(){return jt.logLevel}function v(e,...t){if(jt.logLevel<=k.DEBUG){const n=t.map(Vr);jt.debug(`Firestore (${ve}): ${e}`,...n)}}function It(e,...t){if(jt.logLevel<=k.ERROR){const n=t.map(Vr);jt.error(`Firestore (${ve}): ${e}`,...n)}}function oe(e,...t){if(jt.logLevel<=k.WARN){const n=t.map(Vr);jt.warn(`Firestore (${ve}): ${e}`,...n)}}function Vr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+e;throw It(t),new Error(t)}function O(e,t){e||T()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends pe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class bl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kl{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new Ma(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new Y(t)}}class xl{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new xl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ml{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ol{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.T=n.token,new Ml(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Ll(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function ae(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new U(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new U(0,0))}static max(){return new S(new U(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return qe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof qe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends qe{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Pl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends qe{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return Pl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(M.fromString(t))}static fromName(t){return new w(M.fromString(t).popFirst(5))}static empty(){return new w(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new M(t.slice()))}}function Fl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new U(n+1,0):new U(n,s));return new kt(r,w.empty(),t)}function Vl(e){return new kt(e.readTime,e.key,-1)}class kt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new kt(S.min(),w.empty(),-1)}static max(){return new kt(S.max(),w.empty(),-1)}}function $l(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Ul)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},u=>s(u))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function sn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}$r.ct=-1;function is(e){return e==null}function Fn(e){return e===0&&1/e==-1/0}function jl(e){return typeof e=="number"&&Number.isInteger(e)&&!Fn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Gt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function La(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){this.comparator=t,this.root=n||H.EMPTY}insert(t,n){return new L(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,H.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,H.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vn(this.root,t,this.comparator,!0)}}class vn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class H{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??H.RED,this.left=r??H.EMPTY,this.right=i??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new H(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return H.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,r){return this}insert(e,t,n){return new H(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ui(this.data.getIterator())}getIteratorFrom(t){return new Ui(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new et(this.comparator);return n.data=t,n}}class Ui{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new at([])}unionWith(t){let n=new et(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new at(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Pa("Invalid base64 string: "+r):r}}(t);return new nt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const ql=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(e){if(O(!!e),typeof e=="string"){let t=0;const n=ql.exec(e);if(O(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Br(e){const t=e.mapValue.fields.__previous_value__;return Ur(t)?Br(t):t}function ze(e){const t=xt(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n,s,r,i,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ke{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ke("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ke&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ur(e)?4:Kl(e)?9007199254740991:10:T()}function vt(e,t){if(e===t)return!0;const n=zt(e);if(n!==zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ze(e).isEqual(ze(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xt(s.timestampValue),o=xt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return qt(s.bytesValue).isEqual(qt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return V(s.geoPointValue.latitude)===V(r.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return V(s.integerValue)===V(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=V(s.doubleValue),o=V(r.doubleValue);return i===o?Fn(i)===Fn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ae(e.arrayValue.values||[],t.arrayValue.values||[],vt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($i(i)!==$i(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!vt(i[a],o[a])))return!1;return!0}(e,t);default:return T()}}function He(e,t){return(e.values||[]).find(n=>vt(n,t))!==void 0}function ue(e,t){if(e===t)return 0;const n=zt(e),s=zt(t);if(n!==s)return b(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=V(r.integerValue||r.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Bi(e.timestampValue,t.timestampValue);case 4:return Bi(ze(e),ze(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(r,i){const o=qt(r),a=qt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=b(V(r.latitude),V(i.latitude));return o!==0?o:b(V(r.longitude),V(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=ue(o[u],a[u]);if(c)return c}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===wn.mapValue&&i===wn.mapValue)return 0;if(r===wn.mapValue)return 1;if(i===wn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=b(a[h],c[h]);if(l!==0)return l;const f=ue(o[a[h]],u[c[h]]);if(f!==0)return f}return b(a.length,c.length)}(e.mapValue,t.mapValue);default:throw T()}}function Bi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=xt(e),s=xt(t),r=b(n.seconds,s.seconds);return r!==0?r:b(n.nanos,s.nanos)}function ce(e){return er(e)}function er(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=xt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=er(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${er(s.fields[a])}`;return i+"}"}(e.mapValue):T();var t,n}function ji(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function nr(e){return!!e&&"integerValue"in e}function jr(e){return!!e&&"arrayValue"in e}function qi(e){return!!e&&"nullValue"in e}function zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Sn(e){return!!e&&"mapValue"in e}function be(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Gt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=be(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=be(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Kl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Sn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=be(n)}setAll(t){let n=J.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=be(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Sn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return vt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Sn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Gt(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new it(be(this.value))}}function Fa(e){const t=[];return Gt(e.fields,(n,s)=>{const r=new J([n]);if(Sn(s)){const i=Fa(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new at(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new X(t,0,S.min(),S.min(),S.min(),it.empty(),0)}static newFoundDocument(t,n,s,r){return new X(t,1,n,S.min(),s,r,0)}static newNoDocument(t,n){return new X(t,2,n,S.min(),S.min(),it.empty(),0)}static newUnknownDocument(t,n){return new X(t,3,n,S.min(),S.min(),it.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof X&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,n){this.position=t,this.inclusive=n}}function Ki(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=ue(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!vt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n="asc"){this.field=t,this.dir=n}}function Hl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{}class $ extends Va{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Ql(t,n,s):n==="array-contains"?new Xl(t,s):n==="in"?new Jl(t,s):n==="not-in"?new Zl(t,s):n==="array-contains-any"?new td(t,s):new $(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Wl(t,s):new Yl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ue(n,this.value)):n!==null&&zt(this.value)===zt(n)&&this.matchesComparison(ue(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class lt extends Va{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new lt(t,n)}matches(t){return $a(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function $a(e){return e.op==="and"}function Ua(e){return Gl(e)&&$a(e)}function Gl(e){for(const t of e.filters)if(t instanceof lt)return!1;return!0}function sr(e){if(e instanceof $)return e.field.canonicalString()+e.op.toString()+ce(e.value);if(Ua(e))return e.filters.map(t=>sr(t)).join(",");{const t=e.filters.map(n=>sr(n)).join(",");return`${e.op}(${t})`}}function Ba(e,t){return e instanceof $?function(n,s){return s instanceof $&&n.op===s.op&&n.field.isEqual(s.field)&&vt(n.value,s.value)}(e,t):e instanceof lt?function(n,s){return s instanceof lt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ba(i,s.filters[o]),!0):!1}(e,t):void T()}function ja(e){return e instanceof $?function(t){return`${t.field.canonicalString()} ${t.op} ${ce(t.value)}`}(e):e instanceof lt?function(t){return t.op.toString()+" {"+t.getFilters().map(ja).join(" ,")+"}"}(e):"Filter"}class Ql extends ${constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class Wl extends ${constructor(t,n){super(t,"in",n),this.keys=qa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Yl extends ${constructor(t,n){super(t,"not-in",n),this.keys=qa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function qa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class Xl extends ${constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return jr(n)&&He(n.arrayValue,this.value)}}class Jl extends ${constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&He(this.value.arrayValue,n)}}class Zl extends ${constructor(t,n){super(t,"not-in",n)}matches(t){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!He(this.value.arrayValue,n)}}class td extends ${constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!jr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>He(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Gi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new ed(e,t,n,s,r,i,o)}function qr(e){const t=C(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>sr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),is(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ce(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ce(s)).join(",")),t.dt=n}return t.dt}function zr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Hl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ba(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Hi(e.startAt,t.startAt)&&Hi(e.endAt,t.endAt)}function rr(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function nd(e,t,n,s,r,i,o,a){return new rn(e,t,n,s,r,i,o,a)}function za(e){return new rn(e)}function Qi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ka(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kr(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ha(e){return e.collectionGroup!==null}function se(e){const t=C(e);if(t.wt===null){t.wt=[];const n=Kr(t),s=Ka(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new ke(n)),t.wt.push(new ke(J.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new ke(J.keyField(),i))}}}return t.wt}function St(e){const t=C(e);if(!t._t)if(t.limitType==="F")t._t=Gi(t.path,t.collectionGroup,se(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of se(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ke(i.field,o))}const s=t.endAt?new Vn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vn(t.startAt.position,t.startAt.inclusive):null;t._t=Gi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function ir(e,t){t.getFirstInequalityField(),Kr(e);const n=e.filters.concat([t]);return new rn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function or(e,t,n){return new rn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function os(e,t){return zr(St(e),St(t))&&e.limitType===t.limitType}function Ga(e){return`${qr(St(e))}|lt:${e.limitType}`}function ar(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>ja(s)).join(", ")}]`),is(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ce(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ce(s)).join(",")),`Target(${n})`}(St(e))}; limitType=${e.limitType})`}function as(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of se(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ki(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,se(n),s)||n.endAt&&!function(r,i,o){const a=Ki(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,se(n),s))}(e,t)}function sd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qa(e){return(t,n)=>{let s=!1;for(const r of se(e)){const i=rd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function rd(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?ue(a,u):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Gt(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return La(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new L(w.comparator);function Ct(){return id}const Wa=new L(w.comparator);function De(...e){let t=Wa;for(const n of e)t=t.insert(n.key,n);return t}function Ya(e){let t=Wa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function $t(){return xe()}function Xa(){return xe()}function xe(){return new we(e=>e.toString(),(e,t)=>e.isEqual(t))}const od=new L(w.comparator),ad=new et(w.comparator);function _(...e){let t=ad;for(const n of e)t=t.add(n);return t}const ud=new et(b);function cd(){return ud}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fn(t)?"-0":t}}function Za(e){return{integerValue:""+e}}function hd(e,t){return jl(t)?Za(t):Ja(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this._=void 0}}function ld(e,t,n){return e instanceof $n?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ur(r)&&(r=Br(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof he?eu(e,t):e instanceof le?nu(e,t):function(s,r){const i=tu(s,r),o=Wi(i)+Wi(s.gt);return nr(i)&&nr(s.gt)?Za(o):Ja(s.serializer,o)}(e,t)}function dd(e,t,n){return e instanceof he?eu(e,t):e instanceof le?nu(e,t):n}function tu(e,t){return e instanceof Un?nr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class $n extends us{}class he extends us{constructor(t){super(),this.elements=t}}function eu(e,t){const n=su(t);for(const s of e.elements)n.some(r=>vt(r,s))||n.push(s);return{arrayValue:{values:n}}}class le extends us{constructor(t){super(),this.elements=t}}function nu(e,t){let n=su(t);for(const s of e.elements)n=n.filter(r=>!vt(r,s));return{arrayValue:{values:n}}}class Un extends us{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Wi(e){return V(e.integerValue||e.doubleValue)}function su(e){return jr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.field=t,this.transform=n}}function fd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof he&&s instanceof he||n instanceof le&&s instanceof le?ae(n.elements,s.elements,vt):n instanceof Un&&s instanceof Un?vt(n.gt,s.gt):n instanceof $n&&s instanceof $n}(e.transform,t.transform)}class gd{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class cs{}function iu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new au(e.key,mt.none()):new on(e.key,e.data,mt.none());{const n=e.data,s=it.empty();let r=new et(J.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Lt(e.key,s,new at(r.toArray()),mt.none())}}function pd(e,t,n){e instanceof on?function(s,r,i){const o=s.value.clone(),a=Xi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Lt?function(s,r,i){if(!Cn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Xi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ou(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Re(e,t,n,s){return e instanceof on?function(r,i,o,a){if(!Cn(r.precondition,i))return o;const u=r.value.clone(),c=Ji(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Lt?function(r,i,o,a){if(!Cn(r.precondition,i))return o;const u=Ji(r.fieldTransforms,a,i),c=i.data;return c.setAll(ou(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return Cn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function md(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=tu(s.transform,r||null);i!=null&&(n===null&&(n=it.empty()),n.set(s.field,i))}return n||null}function Yi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ae(n,s,(r,i)=>fd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class on extends cs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lt extends cs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ou(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Xi(e,t,n){const s=new Map;O(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,dd(o,a,n[r]))}return s}function Ji(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ld(i,o,t))}return s}class au extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yd extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&pd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Xa();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const u=iu(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),_())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(n,s)=>Yi(n,s))&&ae(this.baseMutations,t.baseMutations,(n,s)=>Yi(n,s))}}class Hr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){O(t.mutations.length===s.length);let r=od;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,N;function Td(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function uu(e){if(e===void 0)return It("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(N=F||(F={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return En}static getOrCreateInstance(){return En===null&&(En=new Gr),En}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let En=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new ne([4294967295,4294967295],0);function Zi(e){const t=Id().encode(e),n=new _l;return n.update(t),new Uint8Array(n.digest())}function to(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ne([n,s],0),new ne([r,i],0)]}class Qr{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new _e(`Invalid padding: ${n}`);if(s<0)throw new _e(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new _e(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new _e(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=ne.fromNumber(this.It)}Et(t,n,s){let r=t.add(n.multiply(ne.fromNumber(s)));return r.compare(Sd)===1&&(r=new ne([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=Zi(t),[s,r]=to(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Qr(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=Zi(t),[s,r]=to(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class _e extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new hs(S.min(),r,new L(b),Ct(),_())}}class an{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new an(s,n,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,n,s,r){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=r}}class cu{constructor(t,n){this.targetId=t,this.Vt=n}}class hu{constructor(t,n,s=nt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class eo{constructor(){this.St=0,this.Dt=so(),this.Ct=nt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=_(),n=_(),s=_();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new an(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=so()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Cd{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Ct(),this.zt=no(),this.Wt=new L(b)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(t){var n;const s=t.targetId,r=t.Vt.count,i=this.se(s);if(i){const o=i.target;if(rr(o))if(r===0){const a=new w(o.path);this.Yt(s,a,X.newNoDocument(a,S.min()))}else O(r===1);else{const a=this.ie(s);if(a!==r){const u=this.re(t,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=Gr.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,h,l){var f,p,E,D,A,B;const j={localCacheCount:h,existenceFilterCount:l.count},rt=l.unchangedNames;return rt&&(j.bloomFilter={applied:c===0,hashCount:(f=rt==null?void 0:rt.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(D=(E=(p=rt==null?void 0:rt.bits)===null||p===void 0?void 0:p.bitmap)===null||E===void 0?void 0:E.length)!==null&&D!==void 0?D:0,padding:(B=(A=rt==null?void 0:rt.bits)===null||A===void 0?void 0:A.padding)!==null&&B!==void 0?B:0}),j}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:r}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=qt(i).toUint8Array()}catch(h){if(h instanceof Pa)return oe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new Qr(u,o,a)}catch(h){return oe(h instanceof _e?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.It===0?1:r!==n-this.oe(t.targetId,c)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(t,i,null),r++)}),r}ce(t){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&rr(a.target)){const u=new w(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,X.newNoDocument(u,t))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=_();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(t));const r=new hs(t,n,this.Wt,this.jt,s);return this.jt=Ct(),this.zt=no(),this.Wt=new L(b),r}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new eo,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new et(b),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new eo),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function no(){return new L(w.comparator)}function so(){return new L(w.comparator)}const Ad=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Dd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_d=(()=>({and:"AND",or:"OR"}))();class Nd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ur(e,t){return e.useProto3Json||is(t)?t:{value:t}}function Bn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bd(e,t){return Bn(e,t.toTimestamp())}function yt(e){return O(!!e),S.fromTimestamp(function(t){const n=xt(t);return new U(n.seconds,n.nanos)}(e))}function Wr(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function du(e){const t=M.fromString(e);return O(mu(t)),t}function cr(e,t){return Wr(e.databaseId,t.path)}function Ms(e,t){const n=du(t);if(n.get(1)!==e.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(fu(n))}function hr(e,t){return Wr(e.databaseId,t)}function kd(e){const t=du(e);return t.length===4?M.emptyPath():fu(t)}function lr(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function fu(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ro(e,t,n){return{name:cr(e,t),fields:n.value.mapValue.fields}}function xd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(O(c===void 0||typeof c=="string"),nt.fromBase64String(c||"")):(O(c===void 0||c instanceof Uint8Array),nt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:uu(u.code);return new y(c,u.message||"")}(o);n=new hu(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ms(e,s.document.name),i=yt(s.document.updateTime),o=s.document.createTime?yt(s.document.createTime):S.min(),a=new it({mapValue:{fields:s.document.fields}}),u=X.newFoundDocument(r,i,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];n=new An(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Ms(e,s.document),i=s.readTime?yt(s.readTime):S.min(),o=X.newNoDocument(r,i),a=s.removedTargetIds||[];n=new An([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Ms(e,s.document),i=s.removedTargetIds||[];n=new An([],i,r,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Ed(r,i),a=s.targetId;n=new cu(a,o)}}return n}function Rd(e,t){let n;if(t instanceof on)n={update:ro(e,t.key,t.value)};else if(t instanceof au)n={delete:cr(e,t.key)};else if(t instanceof Lt)n={update:ro(e,t.key,t.data),updateMask:Bd(t.fieldMask)};else{if(!(t instanceof yd))return T();n={verify:cr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $n)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof he)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof le)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Un)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:bd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(e,t.precondition)),n}function Md(e,t){return e&&e.length>0?(O(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?yt(s.updateTime):yt(r);return i.isEqual(S.min())&&(i=yt(r)),new gd(i,s.transformResults||[])}(n,t))):[]}function Od(e,t){return{documents:[hr(e,t.path)]}}function Ld(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=hr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=hr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return pu(lt.create(u,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Xt(h.field),direction:Vd(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ur(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Pd(e){let t=kd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){O(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=gu(h);return l instanceof lt&&Ua(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new ke(Jt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,is(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,f=h.values||[];return new Vn(f,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,f=h.values||[];return new Vn(f,l)}(n.endAt)),nd(t,r,o,i,a,"F",u,c)}function Fd(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Jt(t.unaryFilter.field);return $.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(t.unaryFilter.field);return $.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jt(t.unaryFilter.field);return $.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jt(t.unaryFilter.field);return $.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return $.create(Jt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return lt.create(t.compositeFilter.filters.map(n=>gu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function Vd(e){return Ad[e]}function $d(e){return Dd[e]}function Ud(e){return _d[e]}function Xt(e){return{fieldPath:e.canonicalString()}}function Jt(e){return J.fromServerFormat(e.fieldPath)}function pu(e){return e instanceof $?function(t){if(t.op==="=="){if(zi(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NAN"}};if(qi(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zi(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NAN"}};if(qi(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(t.field),op:$d(t.op),value:t.value}}}(e):e instanceof lt?function(t){const n=t.getFilters().map(s=>pu(s));return n.length===1?n[0]:{compositeFilter:{op:Ud(t.op),filters:n}}}(e):T()}function Bd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function mu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n,s,r,i=S.min(),o=S.min(),a=nt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new At(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this.fe=t}}function qd(e){const t=Pd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?or(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.rn=new Kd}addToCollectionParentIndex(t,n){return this.rn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(kt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(kt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Kd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new et(M.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new et(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new de(0)}static Mn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.changes=new we(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,X.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Re(s.mutation,r,at.empty(),U.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,_()).next(()=>s))}getLocalViewOfDocuments(t,n,s=_()){const r=$t();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=De();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=$t();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,_()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Ct();const o=xe(),a=xe();return n.forEach((u,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Lt)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Re(h.mutation,c,h.mutation.getFieldMask(),U.now())):o.set(c.key,at.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new Gd(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=xe();let r=new L((o,a)=>o-a),i=_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||at.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(r.get(a.batchId)||_()).add(u);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Xa();h.forEach(f=>{if(!i.has(f)){const p=iu(n.get(f),s.get(f));p!==null&&l.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ha(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve($t());let a=-1,u=i;return o.next(c=>g.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?g.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,_())).next(h=>({batchId:a,changes:Ya(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=De();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=De();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const u=function(c,h){return new rn(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,X.newInvalidDocument(c)))});let o=De();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&Re(c.mutation,u,at.empty(),U.now()),as(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return g.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:yt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:qd(s.bundledQuery),readTime:yt(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.overlays=new L(w.comparator),this.ls=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=$t();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.we(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=$t(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new L((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=$t(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=$t(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return g.resolve(a)}we(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wd(n,s));let i=this.ls.get(n);i===void 0&&(i=_(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.fs=new et(q.ds),this.ws=new et(q._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new q(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new q(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new w(new M([])),s=new q(n,t),r=new q(n,t+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new w(new M([])),s=new q(n,t),r=new q(n,t+1);let i=_();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new q(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class q{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return w.comparator(t.key,n.key)||b(t.As,n.As)}static _s(t,n){return b(t.As,n.As)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new et(q.ds)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new q(n,0),r=new q(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new et(b);return n.forEach(r=>{const i=new q(r,0),o=new q(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),g.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new q(new w(i),0);let a=new et(b);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)},o),g.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){O(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(n.mutations,r=>{const i=new q(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new q(n,0),r=this.Rs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.Ds=t,this.docs=new L(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(t,n){let s=Ct();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():X.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Ct();const o=n.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$l(Vl(h),s)<=0||(r.has(h.key)||as(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,s,r){T()}Cs(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Zd(this)}getSize(t){return g.resolve(this.size)}}class Zd extends Hd{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(t,r)):this.os.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.persistence=t,this.xs=new we(n=>qr(n),zr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Yr,this.targetCount=0,this.Ms=de.kn()}forEachTarget(t,n){return this.xs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),g.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Fn(n),g.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,n){this.$s={},this.overlays={},this.Os=new $r(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new tf(this),this.indexManager=new zd,this.remoteDocumentCache=function(s){return new Jd(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new jd(n),this.qs=new Wd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Yd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new Xd(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new nf(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(t,n){return g.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class nf extends Bl{constructor(t){super(),this.currentSequenceNumber=t}}class Xr{constructor(t){this.persistence=t,this.Qs=new Yr,this.js=null}static zs(t){return new Xr(t)}get Ws(){if(this.js)return this.js;throw T()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),g.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,s=>{const r=w.fromPath(s);return this.Hs(t,r).next(i=>{i||n.removeEntry(r,S.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return g.or([()=>g.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(t,n){let s=_(),r=_();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Jr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ki(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.Qi(t,n))}Ki(t,n){if(Qi(n))return g.resolve(null);let s=St(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=or(n,null,"F"),s=St(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=_(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.ji(n,a);return this.zi(n,c,o,u.readTime)?this.Ki(t,or(n,null,"F")):this.Wi(t,c,n,u)}))})))}Gi(t,n,s,r){return Qi(n)||r.isEqual(S.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(t,n):(Vi()<=k.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ar(n)),this.Wi(t,o,n,Fl(r,-1)))})}ji(t,n){let s=new et(Qa(t));return n.forEach((r,i)=>{as(t,i)&&(s=s.add(i))}),s}zi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,n){return Vi()<=k.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",ar(n)),this.Ui.getDocumentsMatchingQuery(t,n,kt.min())}Wi(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,s,r){this.persistence=t,this.Hi=n,this.serializer=r,this.Ji=new L(b),this.Yi=new we(i=>qr(i),zr),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qd(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function of(e,t,n,s){return new rf(e,t,n,s)}async function yu(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=_();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function af(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let f=g.resolve();return l.forEach(p=>{f=f.next(()=>c.getEntry(a,p)).next(E=>{const D=u.docVersions.get(p);O(D!==null),E.version.compareTo(D)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),c.addEntry(E)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=_();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function vu(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function uf(e,t){const n=C(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];t.targetChanges.forEach((h,l)=>{const f=r.get(l);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Bs.addMatchingKeys(i,h.addedDocuments,l)));let p=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(l)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),r=r.insert(l,p),function(E,D,A){return E.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,p,h)&&a.push(n.Bs.updateTargetData(i,p))});let u=Ct(),c=_();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(cf(i,o,t.documentUpdates).next(h=>{u=h.nr,c=h.sr})),!s.isEqual(S.min())){const h=n.Bs.getLastRemoteSnapshotVersion(i).next(l=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ji=r,i))}function cf(e,t,n){let s=_(),r=_();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Ct();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:r}})}function hf(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function lf(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new At(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function dr(e,t,n){const s=C(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!sn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function io(e,t,n){const s=C(e);let r=S.min(),i=_();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=C(a),l=h.Yi.get(c);return l!==void 0?g.resolve(h.Ji.get(l)):h.Bs.getTargetData(u,c)}(s,o,St(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?r:S.min(),n?i:_())).next(a=>(df(s,sd(t),a),{documents:a,ir:i})))}function df(e,t,n){let s=e.Xi.get(t)||S.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Xi.set(t,s)}class oo{constructor(){this.activeTargetIds=cd()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ff{constructor(){this.Hr=new oo,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new oo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn=null;function Os(){return Tn===null?Tn=268435456+Math.round(2147483648*Math.random()):Tn++,"0x"+Tn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="WebChannelConnection";class yf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,r,i){const o=Os(),a=this.To(t,n);v("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,r,i),this.Ao(t,a,u,s).then(c=>(v("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw oe("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,n,s,r,i,o){return this.Io(t,n,s,r,i)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ve,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}To(t,n){const s=pf[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,r){const i=Os();return new Promise((o,a)=>{const u=new Dl;u.setWithCredentials(!0),u.listenOnce(Sl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rs.NO_ERROR:const h=u.getResponseJson();v(W,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(h)),o(h);break;case Rs.TIMEOUT:v(W,`RPC '${t}' ${i} timed out`),a(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case Rs.HTTP_ERROR:const l=u.getStatus();if(v(W,`RPC '${t}' ${i} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const E=function(D){const A=D.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(A)>=0?A:d.UNKNOWN}(p.status);a(new y(E,p.message))}else a(new y(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v(W,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);v(W,`RPC '${t}' ${i} sending request:`,r),u.send(n,"POST",c,s,15)})}Ro(t,n,s){const r=Os(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Tl(),a=Il(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Al({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const h=i.join("");v(W,`Creating RPC '${t}' stream ${r}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,p=!1;const E=new mf({ro:A=>{p?v(W,`Not sending because RPC '${t}' stream ${r} is closed:`,A):(f||(v(W,`Opening RPC '${t}' stream ${r} transport.`),l.open(),f=!0),v(W,`RPC '${t}' stream ${r} sending:`,A),l.send(A))},oo:()=>l.close()}),D=(A,B,j)=>{A.listen(B,rt=>{try{j(rt)}catch(dt){setTimeout(()=>{throw dt},0)}})};return D(l,yn.EventType.OPEN,()=>{p||v(W,`RPC '${t}' stream ${r} transport opened.`)}),D(l,yn.EventType.CLOSE,()=>{p||(p=!0,v(W,`RPC '${t}' stream ${r} transport closed`),E.wo())}),D(l,yn.EventType.ERROR,A=>{p||(p=!0,oe(W,`RPC '${t}' stream ${r} transport errored:`,A),E.wo(new y(d.UNAVAILABLE,"The operation could not be completed")))}),D(l,yn.EventType.MESSAGE,A=>{var B;if(!p){const j=A.data[0];O(!!j);const rt=j,dt=rt.error||((B=rt[0])===null||B===void 0?void 0:B.error);if(dt){v(W,`RPC '${t}' stream ${r} received error:`,dt);const dn=dt.status;let Es=function(Qu){const gi=F[Qu];if(gi!==void 0)return uu(gi)}(dn),fi=dt.message;Es===void 0&&(Es=d.INTERNAL,fi="Unknown error status: "+dn+" with message "+dt.message),p=!0,E.wo(new y(Es,fi)),l.close()}else v(W,`RPC '${t}' stream ${r} received:`,j),E._o(j)}}),D(a,Cl.STAT_EVENT,A=>{A.stat===Pi.PROXY?v(W,`RPC '${t}' stream ${r} detected buffering proxy`):A.stat===Pi.NOPROXY&&v(W,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function Ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){return new Nd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n,s=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,s,r,i,o,a,u){this.ii=t,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new wu(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{t(()=>{const r=new y(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vf extends Eu{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=xd(this.serializer,t),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?yt(i.readTime):S.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=lr(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=rr(a)?{documents:Od(r,a)}:{query:Ld(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=lu(r,i.resumeToken);const u=ur(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(S.min())>0){o.readTime=Bn(r,i.snapshotVersion.toTimestamp());const u=ur(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=Fd(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=lr(this.serializer),n.removeTarget=t,this.Wo(n)}}class wf extends Eu{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Md(t.writeResults,t.commitTime),s=yt(t.commitTime);return this.listener.cu(s,n)}return O(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=lr(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Rd(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(d.UNKNOWN,r.toString())})}vo(t,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Tf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(It(n),this.mu=!1):v("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Qt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u.vu.add(4),await un(u),u.bu.set("Unknown"),u.vu.delete(4),await ds(u)}(this))})}),this.bu=new Tf(s,r)}}async function ds(e){if(Qt(e))for(const t of e.Ru)await t(!0)}async function un(e){for(const t of e.Ru)await t(!1)}function Tu(e,t){const n=C(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),ei(n)?ti(n):Ee(n).Ko()&&Zr(n,t))}function Iu(e,t){const n=C(e),s=Ee(n);n.Au.delete(t),s.Ko()&&Su(n,t),n.Au.size===0&&(s.Ko()?s.jo():Qt(n)&&n.bu.set("Unknown"))}function Zr(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ee(e).su(t)}function Su(e,t){e.Vu.qt(t),Ee(e).iu(t)}function ti(e){e.Vu=new Cd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Ee(e).start(),e.bu.gu()}function ei(e){return Qt(e)&&!Ee(e).Uo()&&e.Au.size>0}function Qt(e){return C(e).vu.size===0}function Cu(e){e.Vu=void 0}async function Sf(e){e.Au.forEach((t,n)=>{Zr(e,t)})}async function Cf(e,t){Cu(e),ei(e)?(e.bu.Iu(t),ti(e)):e.bu.set("Unknown")}async function Af(e,t,n){if(e.bu.set("Online"),t instanceof hu&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await jn(e,s)}else if(t instanceof An?e.Vu.Ht(t):t instanceof cu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(S.min()))try{const s=await vu(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),Su(r,a);const h=new At(c.target,a,u,c.sequenceNumber);Zr(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await jn(e,s)}}async function jn(e,t,n){if(!sn(t))throw t;e.vu.add(1),await un(e),e.bu.set("Offline"),n||(n=()=>vu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ds(e)})}function Au(e,t){return t().catch(n=>jn(e,n,t))}async function fs(e){const t=C(e),n=Rt(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Df(t);)try{const r=await hf(t.localStore,s);if(r===null){t.Eu.length===0&&n.jo();break}s=r.batchId,_f(t,r)}catch(r){await jn(t,r)}Du(t)&&_u(t)}function Df(e){return Qt(e)&&e.Eu.length<10}function _f(e,t){e.Eu.push(t);const n=Rt(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Du(e){return Qt(e)&&!Rt(e).Uo()&&e.Eu.length>0}function _u(e){Rt(e).start()}async function Nf(e){Rt(e).hu()}async function bf(e){const t=Rt(e);for(const n of e.Eu)t.uu(n.mutations)}async function kf(e,t,n){const s=e.Eu.shift(),r=Hr.from(s,t,n);await Au(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await fs(e)}async function xf(e,t){t&&Rt(e).ou&&await async function(n,s){if(r=s.code,Td(r)&&r!==d.ABORTED){const i=n.Eu.shift();Rt(n).Qo(),await Au(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fs(n)}var r}(e,t),Du(e)&&_u(e)}async function uo(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Qt(n);n.vu.add(3),await un(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ds(n)}async function Rf(e,t){const n=C(e);t?(n.vu.delete(2),await ds(n)):t||(n.vu.add(2),await un(n),n.bu.set("Unknown"))}function Ee(e){return e.Su||(e.Su=function(t,n,s){const r=C(t);return r.fu(),new vf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:Sf.bind(null,e),ao:Cf.bind(null,e),nu:Af.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),ei(e)?ti(e):e.bu.set("Unknown")):(await e.Su.stop(),Cu(e))})),e.Su}function Rt(e){return e.Du||(e.Du=function(t,n,s){const r=C(t);return r.fu(),new wf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:Nf.bind(null,e),ao:xf.bind(null,e),au:bf.bind(null,e),cu:kf.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await fs(e)):(await e.Du.stop(),e.Eu.length>0&&(v("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ni(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function si(e,t){if(It("AsyncQueue",`${t}: ${e}`),sn(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=De(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new re;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.Cu=new L(w.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):T():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class fe{constructor(t,n,s,r,i,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fe(t,n,re.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&os(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.Nu=void 0,this.listeners=[]}}class Of{constructor(){this.queries=new we(t=>Ga(t),os),this.onlineState="Unknown",this.ku=new Set}}async function Lf(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Mf),r)try{i.Nu=await n.onListen(s)}catch(o){const a=si(o,`Initialization of query '${ar(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&ri(n)}async function Pf(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ff(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&ri(n)}function Vf(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function ri(e){e.ku.forEach(t=>{t.next()})}class $f{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new fe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t){this.key=t}}class bu{constructor(t){this.key=t}}class Uf{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=_(),this.mutatedKeys=_(),this.tc=Qa(t),this.ec=new re(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new co,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const f=r.get(h),p=as(this.query,l)?l:null,E=!!f&&this.mutatedKeys.has(f.key),D=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;f&&p?f.data.isEqual(p.data)?E!==D&&(s.track({type:3,doc:p}),A=!0):this.rc(f,p)||(s.track({type:2,doc:p}),A=!0,(u&&this.tc(p,u)>0||c&&this.tc(p,c)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),A=!0):f&&!p&&(s.track({type:1,doc:f}),A=!0,(u||c)&&(a=!0)),A&&(p?(o=o.add(p),i=D?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((c,h)=>function(l,f){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(l)-p(f)}(c.type,h.type)||this.tc(c.doc,h.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new fe(this.query,t.ec,r,i,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new co,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=_(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new bu(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new Nu(s))}),n}hc(t){this.Yu=t.ir,this.Zu=_();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return fe.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Bf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class jf{constructor(t){this.key=t,this.fc=!1}}class qf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new we(a=>Ga(a),os),this._c=new Map,this.mc=new Set,this.gc=new L(w.comparator),this.yc=new Map,this.Ic=new Yr,this.Tc={},this.Ec=new Map,this.Ac=de.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function zf(e,t){const n=tg(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await lf(n.localStore,St(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Kf(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&Tu(n.remoteStore,o)}return r}async function Kf(e,t,n,s,r){e.Rc=(l,f,p)=>async function(E,D,A,B){let j=D.view.sc(A);j.zi&&(j=await io(E.localStore,D.query,!1).then(({documents:dn})=>D.view.sc(dn,j)));const rt=B&&B.targetChanges.get(D.targetId),dt=D.view.applyChanges(j,E.isPrimaryClient,rt);return lo(E,D.targetId,dt.cc),dt.snapshot}(e,l,f,p);const i=await io(e.localStore,t,!0),o=new Uf(t,i.ir),a=o.sc(i.documents),u=an.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),c=o.applyChanges(a,e.isPrimaryClient,u);lo(e,n,c.cc);const h=new Bf(t,n,o);return e.wc.set(t,h),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Hf(e,t){const n=C(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!os(i,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await dr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Iu(n.remoteStore,s.targetId),fr(n,s.targetId)}).catch(nn)):(fr(n,s.targetId),await dr(n.localStore,s.targetId,!0))}async function Gf(e,t,n){const s=eg(e);try{const r=await function(i,o){const a=C(i),u=U.now(),c=o.reduce((f,p)=>f.add(p.key),_());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Ct(),E=_();return a.Zi.getEntries(f,c).next(D=>{p=D,p.forEach((A,B)=>{B.isValidDocument()||(E=E.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(D=>{h=D;const A=[];for(const B of o){const j=md(B,h.get(B.key).overlayedDocument);j!=null&&A.push(new Lt(B.key,j,Fa(j.value.mapValue),mt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,A,o)}).next(D=>{l=D;const A=D.applyToLocalDocumentSet(h,E);return a.documentOverlayCache.saveOverlays(f,D.batchId,A)})}).then(()=>({batchId:l.batchId,changes:Ya(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.Tc[i.currentUser.toKey()];u||(u=new L(b)),u=u.insert(o,a),i.Tc[i.currentUser.toKey()]=u}(s,r.batchId,n),await cn(s,r.changes),await fs(s.remoteStore)}catch(r){const i=si(r,"Failed to persist write");n.reject(i)}}async function ku(e,t){const n=C(e);try{const s=await uf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(O(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?O(o.fc):r.removedDocuments.size>0&&(O(o.fc),o.fc=!1))}),await cn(n,s,t)}catch(s){await nn(s)}}function ho(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Mu(o)&&(u=!0)}),u&&ri(a)}(s.eventManager,t),r.length&&s.dc.nu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Qf(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let o=new L(w.comparator);o=o.insert(i,X.newNoDocument(i,S.min()));const a=_().add(i),u=new hs(S.min(),new Map,new L(b),o,a);await ku(s,u),s.gc=s.gc.remove(i),s.yc.delete(t),ii(s)}else await dr(s.localStore,t,!1).then(()=>fr(s,t,n)).catch(nn)}async function Wf(e,t){const n=C(e),s=t.batch.batchId;try{const r=await af(n.localStore,t);Ru(n,s,null),xu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await cn(n,r)}catch(r){await nn(r)}}async function Yf(e,t,n){const s=C(e);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(O(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);Ru(s,t,n),xu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await cn(s,r)}catch(r){await nn(r)}}function xu(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function Ru(e,t,n){const s=C(e);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.Tc[s.currentUser.toKey()]=r}}function fr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||Mu(e,s)})}function Mu(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(Iu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),ii(e))}function lo(e,t,n){for(const s of n)s instanceof Nu?(e.Ic.addReference(s.key,t),Xf(e,s)):s instanceof bu?(v("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Mu(e,s.key)):T()}function Xf(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.mc.add(s),ii(e))}function ii(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new w(M.fromString(t)),s=e.Ac.next();e.yc.set(s,new jf(n)),e.gc=e.gc.insert(n,s),Tu(e.remoteStore,new At(St(za(n.path)),s,"TargetPurposeLimboResolution",$r.ct))}}async function cn(e,t,n){const s=C(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const h=Jr.Li(u.targetId,c);i.push(h)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,l=>g.forEach(l.Fi,f=>c.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>g.forEach(l.Bi,f=>c.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!sn(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const f=c.Ji.get(l),p=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(p);c.Ji=c.Ji.insert(l,E)}}}(s.localStore,i))}async function Jf(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await yu(n.localStore,t);n.currentUser=t,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new y(d.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await cn(n,s.er)}}function Zf(e,t){const n=C(e),s=n.yc.get(t);if(s&&s.fc)return _().add(s.key);{let r=_();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function tg(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ku.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qf.bind(null,t),t.dc.nu=Ff.bind(null,t.eventManager),t.dc.Pc=Vf.bind(null,t.eventManager),t}function eg(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yf.bind(null,t),t}class fo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ls(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return of(this.persistence,new sf,t.initialUser,this.serializer)}createPersistence(t){return new ef(Xr.zs,this.serializer)}createSharedClientState(t){return new ff}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ng{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ho(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jf.bind(null,this.syncEngine),await Rf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Of}createDatastore(t){const n=ls(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new yf(r));var r;return function(i,o,a,u){return new Ef(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>ho(this.syncEngine,a,0),o=ao.D()?new ao:new gf,new If(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,u,c){const h=new qf(s,r,i,o,a,u);return c&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);v("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await un(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):It("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Y.UNAUTHENTICATED,this.clientId=Oa.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=si(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ps(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await yu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function go(e,t){e.asyncQueue.verifyOperationInProgress();const n=await og(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>uo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>uo(t.remoteStore,i)),e._onlineComponents=t}function ig(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function og(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ps(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!ig(n))throw n;oe("Error using user provided cache. Falling back to memory cache: "+n),await Ps(e,new fo)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Ps(e,new fo);return e._offlineComponents}async function Ou(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await go(e,e._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await go(e,new ng))),e._onlineComponents}function ag(e){return Ou(e).then(t=>t.syncEngine)}async function ug(e){const t=await Ou(e),n=t.eventManager;return n.onListen=zf.bind(null,t.syncEngine),n.onUnlisten=Hf.bind(null,t.syncEngine),n}function cg(e,t,n={}){const s=new Nt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new sg({next:l=>{i.enqueueAndForget(()=>Pf(r,h)),l.fromCache&&a.source==="server"?u.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new $f(o,c,{includeMetadataChanges:!0,Ku:!0});return Lf(r,h)}(await ug(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hg(e,t,n,s){if(t===!0&&s===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mo(e){if(!w.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yo(e){if(w.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function gs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Kt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gs(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class ps{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Nl;switch(n.type){case"firstParty":return new Rl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=po.get(t);n&&(v("ComponentProvider","Removing Datastore"),po.delete(t),n.terminate())}(this),Promise.resolve()}}function lg(e,t,n,s={}){var r;const i=(e=Kt(e,ps))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,u;if(typeof s.mockUserToken=="string")a=s.mockUserToken,u=Y.MOCK_USER;else{a=oc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Y(c)}e._authCredentials=new bl(new Ma(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class Te{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Te(this.firestore,t,this._query)}}class bt extends Te{constructor(t,n,s){super(t,n,za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new w(t))}withConverter(t){return new bt(this.firestore,t,this._path)}}function Lg(e,t,...n){if(e=Et(e),Pu("collection","path",t),e instanceof ps){const s=M.fromString(t,...n);return yo(s),new bt(e,null,s)}{if(!(e instanceof ot||e instanceof bt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return yo(s),new bt(e.firestore,null,s)}}function Pg(e,t,...n){if(e=Et(e),arguments.length===1&&(t=Oa.A()),Pu("doc","path",t),e instanceof ps){const s=M.fromString(t,...n);return mo(s),new ot(e,null,new w(s))}{if(!(e instanceof ot||e instanceof bt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return mo(s),new ot(e.firestore,e instanceof bt?e.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new wu(this,"async_queue_retry"),this.Xc=()=>{const n=Ls();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Nt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!sn(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=ni.createAndSchedule(this,t,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&T()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class ms extends ps{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new dg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vu(this),this._firestoreClient.terminate()}}function Fg(e,t){const n=typeof e=="object"?e:lh(),s=typeof e=="string"?e:t||"(default)",r=oh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=rc("firestore");i&&lg(r,...i)}return r}function Fu(e){return e._firestoreClient||Vu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Vu(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,u,c){return new zl(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Lu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new rg(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ge(nt.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ge(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Vg(){return new hn("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=/^__.*__$/;class gg{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Lt(t,this.data,this.fieldMask,n,this.fieldTransforms):new on(t,this.data,n,this.fieldTransforms)}}class $u{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Lt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ys{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new ys(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.fa(t),r}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return qn(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Uu(this.ca)&&fg.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class pg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ls(t)}ya(t,n,s,r=!1){return new ys({ca:t,methodName:n,ga:s,path:J.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ai(e){const t=e._freezeSettings(),n=ls(e._databaseId);return new pg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function mg(e,t,n,s,r,i={}){const o=e.ya(i.merge||i.mergeFields?2:0,t,n,r);ui("Data must be an object, but it was:",o,s);const a=ju(s,o);let u,c;if(i.merge)u=new at(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const f=gr(t,l,n);if(!o.contains(f))throw new y(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);zu(h,f)||h.push(f)}u=new at(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new gg(new it(a),u,c)}class vs extends ln{_toFieldTransform(t){if(t.ca!==2)throw t.ca===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof vs}}function Bu(e,t,n){return new ys({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class yg extends ln{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=Bu(this,t,!0),s=this.pa.map(i=>Wt(i,n)),r=new he(s);return new ru(t.path,r)}isEqual(t){return this===t}}class vg extends ln{constructor(t,n){super(t),this.pa=n}_toFieldTransform(t){const n=Bu(this,t,!0),s=this.pa.map(i=>Wt(i,n)),r=new le(s);return new ru(t.path,r)}isEqual(t){return this===t}}function wg(e,t,n,s){const r=e.ya(1,t,n);ui("Data must be an object, but it was:",r,s);const i=[],o=it.empty();Gt(s,(u,c)=>{const h=ci(t,u,n);c=Et(c);const l=r.da(h);if(c instanceof vs)i.push(h);else{const f=Wt(c,l);f!=null&&(i.push(h),o.set(h,f))}});const a=new at(i);return new $u(o,a,r.fieldTransforms)}function Eg(e,t,n,s,r,i){const o=e.ya(1,t,n),a=[gr(t,s,n)],u=[r];if(i.length%2!=0)throw new y(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(gr(t,i[f])),u.push(i[f+1]);const c=[],h=it.empty();for(let f=a.length-1;f>=0;--f)if(!zu(c,a[f])){const p=a[f];let E=u[f];E=Et(E);const D=o.da(p);if(E instanceof vs)c.push(p);else{const A=Wt(E,D);A!=null&&(c.push(p),h.set(p,A))}}const l=new at(c);return new $u(h,l,o.fieldTransforms)}function Tg(e,t,n,s=!1){return Wt(n,e.ya(s?4:3,t))}function Wt(e,t){if(qu(e=Et(e)))return ui("Unsupported field value:",t,e),ju(e,t);if(e instanceof ln)return function(n,s){if(!Uu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Wt(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=U.fromDate(n);return{timestampValue:Bn(s.serializer,r)}}if(n instanceof U){const r=new U(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bn(s.serializer,r)}}if(n instanceof oi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ge)return{bytesValue:lu(s.serializer,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Wr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${gs(n)}`)}(e,t)}function ju(e,t){const n={};return La(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gt(e,(s,r)=>{const i=Wt(r,t.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function qu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof U||e instanceof oi||e instanceof ge||e instanceof ot||e instanceof ln)}function ui(e,t,n){if(!qu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=gs(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function gr(e,t,n){if((t=Et(t))instanceof hn)return t._internalPath;if(typeof t=="string")return ci(e,t);throw qn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ig=new RegExp("[~\\*/\\[\\]]");function ci(e,t,n){if(t.search(Ig)>=0)throw qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hn(...t.split("."))._internalPath}catch{throw qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new y(d.INVALID_ARGUMENT,a+e+u)}function zu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Sg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(hi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sg extends Ku{data(){return super.data()}}function hi(e,t){return typeof t=="string"?ci(e,t):t instanceof hn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class li{}class Ag extends li{}function $g(e,t,...n){let s=[];t instanceof li&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof di).length,o=r.filter(a=>a instanceof ws).length;if(i>1||i>0&&o>0)throw new y(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class ws extends Ag{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new ws(t,n,s)}_apply(t){const n=this._parse(t);return Hu(t._query,n),new Te(t.firestore,t.converter,ir(t._query,n))}_parse(t){const n=ai(t.firestore);return function(r,i,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Eo(h,c);const f=[];for(const p of h)f.push(wo(a,r,p));l={arrayValue:{values:f}}}else l=wo(a,r,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Eo(h,c),l=Tg(o,i,h,c==="in"||c==="not-in");return $.create(u,c,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Ug(e,t,n){const s=t,r=hi("where",e);return ws._create(r,s,n)}class di extends li{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new di(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:lt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Hu(i,a),i=ir(i,a)}(t._query,n),new Te(t.firestore,t.converter,ir(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wo(e,t,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ha(t)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(M.fromString(n));if(!w.isDocumentKey(s))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ji(e,new w(s))}if(n instanceof ot)return ji(e,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gs(n)}.`)}function Eo(e,t){if(!Array.isArray(e)||e.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Hu(e,t){if(t.isInequality()){const s=Kr(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new y(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ka(e);i!==null&&Dg(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Dg(e,t,n){if(!n.isEqual(t))throw new y(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _g{convertValue(t,n="none"){switch(zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Gt(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new oi(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Br(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ze(t));default:return null}}convertTimestamp(t){const n=xt(t);return new U(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=M.fromString(t);O(mu(s));const r=new Ke(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bg extends Ku{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Dn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(hi("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Dn extends bg{data(t={}){return super.data(t)}}class kg{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new In(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Dn(this._firestore,this._userDataWriter,s.key,s,new In(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Dn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new In(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Dn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new In(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:xg(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class Rg extends _g{constructor(t){super(),this.firestore=t}convertBytes(t){return new ge(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Bg(e){e=Kt(e,Te);const t=Kt(e.firestore,ms),n=Fu(t),s=new Rg(t);return Cg(e._query),cg(n,e._query).then(r=>new kg(t,s,e,r))}function jg(e,t,n){e=Kt(e,ot);const s=Kt(e.firestore,ms),r=Ng(e.converter,t,n);return Gu(s,[mg(ai(s),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,mt.none())])}function qg(e,t,n,...s){e=Kt(e,ot);const r=Kt(e.firestore,ms),i=ai(r);let o;return o=typeof(t=Et(t))=="string"||t instanceof hn?Eg(i,"updateDoc",e._key,t,n,s):wg(i,"updateDoc",e._key,t),Gu(r,[o.toMutation(e._key,mt.exists(!0))])}function Gu(e,t){return function(n,s){const r=new Nt;return n.asyncQueue.enqueueAndForget(async()=>Gf(await ag(n),s,r)),r.promise}(Fu(e),t)}function zg(...e){return new yg("arrayUnion",e)}function Kg(...e){return new vg("arrayRemove",e)}(function(e,t=!0){(function(n){ve=n})(ch),bn(new Me("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ms(new kl(n.getProvider("auth-internal")),new Ol(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ke(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),te(Fi,"3.13.0",e),te(Fi,"3.13.0","esm2017")})();var Mg="firebase",Og="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Mg,Og,"app");export{Me as C,pe as F,Vg as G,Fg as P,zg as Q,$g as R,ch as S,Lg as _,Pg as a,Ug as b,bn as c,Bg as d,Et as e,oh as f,qg as g,rc as h,hh as i,Kg as j,lh as k,oc as l,jg as m,te as r};
