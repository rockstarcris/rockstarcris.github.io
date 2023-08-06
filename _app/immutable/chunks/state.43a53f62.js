var Re=Object.defineProperty;var Te=(t,e,n)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(Te(t,typeof e!="symbol"?e+"":e,n),n);import{t as ye,a as Ee}from"./index.62cbe4b4.js";import{G as ke}from"./scheduler.aba5b0ee.js";import{w as Ae}from"./index.4f3efb00.js";import{q as Ue,e as Oe,w as Ie,j as Ne,o as Pe,c as Ce,_ as De,C as xe,r as Z,S as ve,F as Le,k as $,l as Se,m as Be,n as Me,p as Fe,t as He}from"./index.esm.56b6a403.js";function cn(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function un(t,e){ye(t,1,1,()=>{e.delete(t.key)})}function an(t,e,n,s,r,o,i,c,u,a,m,w){let l=t.length,g=o.length,p=l;const U={};for(;p--;)U[t[p].key]=p;const _=[],O=new Map,A=new Map,y=[];for(p=g;p--;){const f=w(r,o,p),T=n(f);let I=i.get(T);I?s&&y.push(()=>I.p(f,e)):(I=a(T,f),I.c()),O.set(T,_[p]=I),T in U&&A.set(T,Math.abs(p-U[T]))}const b=new Set,C=new Set;function D(f){Ee(f,1),f.m(c,m),i.set(f.key,f),m=f.first,g--}for(;l&&g;){const f=_[g-1],T=t[l-1],I=f.key,M=T.key;f===T?(m=f.first,l--,g--):O.has(M)?!i.has(I)||b.has(I)?D(f):C.has(M)?l--:A.get(I)>A.get(M)?(C.add(I),D(f)):(b.add(M),l--):(u(T,i),l--)}for(;l--;){const f=t[l];O.has(f.key)||u(f,i)}for(;g;)D(_[g-1]);return ke(y),_}const $e=Ae(),ln=(t,e,n,s,r)=>new Promise((o,i)=>{const c=$e.subscribe(async u=>{if(u){setTimeout(()=>{c()},0);try{if(n){const a=Ue(Oe(u,t),Ie(e==="doc_id"?Ne():e,"==",n),...s?[Pe(s,r?"desc":void 0)]:[]),w=(await Ce(a)).docs.map(l=>l.data());o(w)}else i("The valor is empty.")}catch(a){i(a)}}})});/**
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
 */const se="firebasestorage.googleapis.com",re="storageBucket",je=2*60*1e3,qe=10*60*1e3;/**
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
 */class d extends Le{constructor(e,n,s=0){super(j(e),`Firebase Storage: ${n} (${j(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return j(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var h;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(h||(h={}));function j(t){return"storage/"+t}function W(){const t="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,t)}function Ve(t){return new d(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ze(t){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function We(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,t)}function Xe(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ke(t){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ge(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ye(){return new d(h.CANCELED,"User canceled the upload/download.")}function Ze(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}function Je(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qe(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+re+"' property when initializing the app?")}function et(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tt(){return new d(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nt(t){return new d(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function V(t){return new d(h.INVALID_ARGUMENT,t)}function oe(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function st(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function B(t,e){return new d(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function S(t){throw new d(h.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class k{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=k.makeFromUrl(e,n)}catch{return new k(e,"")}if(s.path==="")return s;throw Je(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function a(b){b.path_=decodeURIComponent(b.path)}const m="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),l="(/([^?#]*).*)?$",g=new RegExp(`^https?://${w}/${m}/b/${r}/o${l}`,"i"),p={bucket:1,path:3},U=n===se?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",O=new RegExp(`^https?://${U}/${r}/${_}`,"i"),y=[{regex:c,indices:u,postModify:o},{regex:g,indices:p,postModify:a},{regex:O,indices:{bucket:1,path:2},postModify:a}];for(let b=0;b<y.length;b++){const C=y[b],D=C.regex.exec(e);if(D){const f=D[C.indices.bucket];let T=D[C.indices.path];T||(T=""),s=new k(f,T),C.postModify(s);break}}if(s==null)throw Ze(e);return s}}class rt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ot(t,e,n){let s=1,r=null,o=null,i=!1,c=0;function u(){return c===2}let a=!1;function m(..._){a||(a=!0,e.apply(null,_))}function w(_){r=setTimeout(()=>{r=null,t(g,u())},_)}function l(){o&&clearTimeout(o)}function g(_,...O){if(a){l();return}if(_){l(),m.call(null,_,...O);return}if(u()||i){l(),m.call(null,_,...O);return}s<64&&(s*=2);let y;c===1?(c=2,y=0):y=(s+Math.random())*1e3,w(y)}let p=!1;function U(_){p||(p=!0,l(),!a&&(r!==null?(_||(c=2),clearTimeout(r),w(0)):_||(c=1)))}return w(0),o=setTimeout(()=>{i=!0,U(!0)},n),U}function it(t){t(!1)}/**
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
 */function ct(t){return t!==void 0}function ut(t){return typeof t=="object"&&!Array.isArray(t)}function X(t){return typeof t=="string"||t instanceof String}function J(t){return K()&&t instanceof Blob}function K(){return typeof Blob<"u"&&!He()}function Q(t,e,n,s){if(s<e)throw V(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw V(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function G(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ie(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var v;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(v||(v={}));/**
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
 */function at(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
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
 */class lt{constructor(e,n,s,r,o,i,c,u,a,m,w,l=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=u,this.timeout_=a,this.progressCallback_=m,this.connectionFactory_=w,this.retry=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,p)=>{this.resolve_=g,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new F(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=c=>{const u=c.loaded,a=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,a)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const c=o.getErrorCode()===v.NO_ERROR,u=o.getStatus();if(!c||at(u,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===v.ABORT;s(!1,new F(!1,null,m));return}const a=this.successCodes_.indexOf(u)!==-1;s(!0,new F(a,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());ct(u)?o(u):o()}catch(u){i(u)}else if(c!==null){const u=W();u.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,u)):i(u)}else if(r.canceled){const u=this.appDelete_?oe():Ye();i(u)}else{const u=Ge();i(u)}};this.canceled_?n(!1,new F(!1,null,!0)):this.backoffId_=ot(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&it(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class F{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ht(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ft(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _t(t,e,n,s,r,o,i=!0){const c=ie(t.urlParams),u=t.url+c,a=Object.assign({},t.headers);return ft(a,e),ht(a,n),dt(a,o),pt(a,s),new lt(u,t.method,a,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */function gt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mt(...t){const e=gt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(K())return new Blob(t);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function wt(t){if(typeof atob>"u")throw nt("base-64");return atob(t)}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class q{constructor(e,n){this.data=e,this.contentType=n||null}}function Rt(t,e){switch(t){case N.RAW:return new q(ce(e));case N.BASE64:case N.BASE64URL:return new q(ue(t,e));case N.DATA_URL:return new q(yt(e),Et(e))}throw W()}function ce(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Tt(t){let e;try{e=decodeURIComponent(t)}catch{throw B(N.DATA_URL,"Malformed data URL.")}return ce(e)}function ue(t,e){switch(t){case N.BASE64:{const r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw B(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw B(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wt(e)}catch(r){throw r.message.includes("polyfill")?r:B(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ae{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw B(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=kt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function yt(t){const e=new ae(t);return e.base64?ue(N.BASE64,e.rest):Tt(e.rest)}function Et(t){return new ae(t).contentType}function kt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class P{constructor(e,n){let s=0,r="";J(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(J(this.data_)){const s=this.data_,r=bt(s,e,n);return r===null?null:new P(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new P(s,!0)}}static getBlob(...e){if(K()){const n=e.map(s=>s instanceof P?s.data_:s);return new P(mt.apply(null,n))}else{const n=e.map(i=>X(i)?Rt(N.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)r[o++]=i[c]}),new P(r,!0)}}uploadData(){return this.data_}}/**
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
 */function le(t){let e;try{e=JSON.parse(t)}catch{return null}return ut(e)?e:null}/**
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
 */function At(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ut(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function he(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Ot(t,e){return e}class R{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Ot}}let H=null;function It(t){return!X(t)||t.length<2?t:he(t)}function de(){if(H)return H;const t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(o,i){return It(i)}const n=new R("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new R("size");return r.xform=s,t.push(r),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),H=t,H}function Nt(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new k(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Pt(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return Nt(s,t),s}function fe(t,e,n){const s=le(e);return s===null?null:Pt(t,s,n)}function Ct(t,e,n,s){const r=le(e);if(r===null||!X(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(a=>{const m=t.bucket,w=t.fullPath,l="/b/"+i(m)+"/o/"+i(w),g=G(l,n,s),p=ie({alt:"media",token:a});return g+p})[0]}function Dt(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class pe{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _e(t){if(!t)throw W()}function xt(t,e){function n(s,r){const o=fe(t,r,e);return _e(o!==null),o}return n}function vt(t,e){function n(s,r){const o=fe(t,r,e);return _e(o!==null),Ct(o,r,t.host,t._protocol)}return n}function ge(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Xe():r=We():n.getStatus()===402?r=ze(t.bucket):n.getStatus()===403?r=Ke(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Lt(t){const e=ge(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=Ve(t.path)),o.serverResponse=r.serverResponse,o}return n}function St(t,e,n){const s=e.fullServerUrl(),r=G(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,c=new pe(r,o,vt(t,n),i);return c.errorHandler=Lt(e),c}function Bt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Mt(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Bt(null,e)),s}function Ft(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const u=c();i["Content-Type"]="multipart/related; boundary="+u;const a=Mt(e,s,r),m=Dt(a,n),w="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+a.contentType+`\r
\r
`,l=`\r
--`+u+"--",g=P.getBlob(w,s,l);if(g===null)throw et();const p={name:a.fullPath},U=G(o,t.host,t._protocol),_="POST",O=t.maxUploadRetryTime,A=new pe(U,_,xt(t,n),O);return A.urlParams=p,A.headers=i,A.body=g.uploadData(),A.errorHandler=ge(e),A}class Ht{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=v.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=v.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=v.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $t extends Ht{initXhr(){this.xhr_.responseType="text"}}function me(){return new $t}/**
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
 */class L{constructor(e,n){this._service=e,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return he(this._location.path)}get storage(){return this._service}get parent(){const e=At(this._location.path);if(e===null)return null;const n=new k(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw st(e)}}function jt(t,e,n){t._throwIfRoot("uploadBytes");const s=Ft(t.storage,t._location,de(),new P(e,!0),n);return t.storage.makeRequestWithTokens(s,me).then(r=>({metadata:r,ref:t}))}function qt(t){t._throwIfRoot("getDownloadURL");const e=St(t.storage,t._location,de());return t.storage.makeRequestWithTokens(e,me).then(n=>{if(n===null)throw tt();return n})}function Vt(t,e){const n=Ut(t._location.path,e),s=new k(t._location.bucket,n);return new L(t.storage,s)}/**
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
 */function zt(t){return/^[A-Za-z]+:\/\//.test(t)}function Wt(t,e){return new L(t,e)}function be(t,e){if(t instanceof Y){const n=t;if(n._bucket==null)throw Qe();const s=new L(n,n._bucket);return e!=null?be(s,e):s}else return e!==void 0?Vt(t,e):t}function Xt(t,e){if(e&&zt(e)){if(t instanceof Y)return Wt(t,e);throw V("To use ref(service, url), the first argument must be a Storage instance.")}else return be(t,e)}function ee(t,e){const n=e==null?void 0:e[re];return n==null?null:k.makeFromBucketSpec(n,t)}function Kt(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Fe(r,t.app.options.projectId))}class Y{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=se,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=je,this._maxUploadRetryTime=qe,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=ee(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=ee(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Q("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Q("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new rt(oe());{const i=_t(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const te="@firebase/storage",ne="0.11.2";/**
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
 */const we="storage";function hn(t,e,n){return t=$(t),jt(t,e,n)}function dn(t){return t=$(t),qt(t)}function fn(t,e){return t=$(t),Xt(t,e)}function pn(t=Me(),e){t=$(t);const s=Se(t,we).getImmediate({identifier:e}),r=Be("storage");return r&&Gt(s,...r),s}function Gt(t,e,n,s={}){Kt(t,e,n,s)}function Yt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Y(n,s,r,e,ve)}function Zt(){De(new xe(we,Yt,"PUBLIC").setMultipleInstances(!0)),Z(te,ne,""),Z(te,ne,"esm2017")}Zt();let z=0;class Jt{constructor(){E(this,"subscribers");E(this,"toasts");E(this,"subscribe",e=>(this.subscribers.push(e),()=>{const n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}));E(this,"publish",e=>{this.subscribers.forEach(n=>n(e))});E(this,"addToast",e=>{this.publish(e),this.toasts=[...this.toasts,e]});E(this,"create",e=>{var i;const{message:n,...s}=e,r=typeof(e==null?void 0:e.id)=="number"||e.id&&((i=e.id)==null?void 0:i.length)>0?e.id:z++;return this.toasts.find(c=>c.id===r)?this.toasts=this.toasts.map(c=>c.id===r?(this.publish({...c,...e,id:r,title:n}),{...c,...e,id:r,title:n}):c):this.addToast({title:n,...s,id:r}),r});E(this,"dismiss",e=>(e||this.toasts.forEach(n=>{this.subscribers.forEach(s=>s({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:e,dismiss:!0})),e));E(this,"message",(e,n)=>this.create({...n,message:e}));E(this,"error",(e,n)=>this.create({...n,message:e,type:"error"}));E(this,"success",(e,n)=>this.create({...n,type:"success",message:e}));E(this,"promise",(e,n)=>{const s=this.create({...n,promise:e,type:"loading",message:n==null?void 0:n.loading});return(e instanceof Promise?e:e()).then(o=>{const i=typeof(n==null?void 0:n.success)=="function"?n.success(o):n==null?void 0:n.success;this.create({id:s,type:"success",message:i})}).catch(o=>{const i=typeof(n==null?void 0:n.error)=="function"?n.error(o):n==null?void 0:n.error;this.create({id:s,type:"error",message:i})}),s});E(this,"custom",(e,n)=>{const s=(n==null?void 0:n.id)||z++;this.publish({component:e,id:s,...n})});this.subscribers=[],this.toasts=[]}}const x=new Jt;function Qt(t,e){const n=(e==null?void 0:e.id)||z++;return x.addToast({title:t,...e,id:n}),n}const en=Qt,_n=Object.assign(en,{success:x.success,error:x.error,custom:x.custom,message:x.message,promise:x.promise,dismiss:x.dismiss}),gn=t=>({subscribe:t});export{x as T,gn as a,an as b,dn as c,$e as d,cn as e,pn as g,un as o,ln as q,fn as r,_n as t,hn as u};
