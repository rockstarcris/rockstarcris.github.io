import{w as ee}from"./index.d2456d52.js";import{q as te,e as ne,w as se,f as re,c as oe,_ as ie,C as ae,r as S,S as ue,F as ce,h as C,j as le,k as he,l as de,m as fe}from"./index.esm.a0d8edf4.js";const pe=ee(),gt=(e,t,n)=>new Promise((s,r)=>{const o=pe.subscribe(async i=>{var u;if(i){setTimeout(()=>{o()},0);try{if(n){const a=te(ne(i,e),se(t==="doc_id"?re():t,"==",n)),p=(u=(await oe(a)).docs[0])==null?void 0:u.data();s(p)}else r("The valor is empty.")}catch(a){r(a)}}})});/**
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
 */const j="firebasestorage.googleapis.com",q="storageBucket",_e=2*60*1e3,ge=10*60*1e3;/**
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
 */class h extends ce{constructor(t,n,s=0){super(x(t),`Firebase Storage: ${n} (${x(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return x(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var l;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(l||(l={}));function x(e){return"storage/"+e}function B(){const e="An unknown error occurred, please check the error payload for server response.";return new h(l.UNKNOWN,e)}function me(e){return new h(l.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Re(e){return new h(l.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Te(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(l.UNAUTHENTICATED,e)}function we(){return new h(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function be(e){return new h(l.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function ke(){return new h(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ee(){return new h(l.CANCELED,"User canceled the upload/download.")}function Oe(e){return new h(l.INVALID_URL,"Invalid URL '"+e+"'.")}function Ie(e){return new h(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ne(){return new h(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+q+"' property when initializing the app?")}function Ae(){return new h(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function P(e){return new h(l.INVALID_ARGUMENT,e)}function V(){return new h(l.APP_DELETED,"The Firebase app was deleted.")}function Ue(e){return new h(l.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(e){throw new h(l.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class f{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=f.makeFromUrl(t,n)}catch{return new f(t,"")}if(s.path==="")return s;throw Ie(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const i="(/(.*))?$",u=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(g){g.path_=decodeURIComponent(g.path)}const p="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${R}/${p}/b/${r}/o${m}`,"i"),T={bucket:1,path:3},I=n===j?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",N=new RegExp(`^https?://${I}/${r}/${_}`,"i"),E=[{regex:u,indices:a,postModify:o},{regex:w,indices:T,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let g=0;g<E.length;g++){const A=E[g],D=A.regex.exec(t);if(D){const Q=D[A.indices.bucket];let v=D[A.indices.path];v||(v=""),s=new f(Q,v),A.postModify(s);break}}if(s==null)throw Oe(t);return s}}class ye{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function De(e,t,n){let s=1,r=null,o=null,i=!1,u=0;function a(){return u===2}let c=!1;function p(..._){c||(c=!0,t.apply(null,_))}function R(_){r=setTimeout(()=>{r=null,e(w,a())},_)}function m(){o&&clearTimeout(o)}function w(_,...N){if(c){m();return}if(_){m(),p.call(null,_,...N);return}if(a()||i){m(),p.call(null,_,...N);return}s<64&&(s*=2);let E;u===1?(u=2,E=0):E=(s+Math.random())*1e3,R(E)}let T=!1;function I(_){T||(T=!0,m(),!c&&(r!==null?(_||(u=2),clearTimeout(r),R(0)):_||(u=1)))}return R(0),o=setTimeout(()=>{i=!0,I(!0)},n),I}function ve(e){e(!1)}/**
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
 */function xe(e){return e!==void 0}function Pe(e){return typeof e=="object"&&!Array.isArray(e)}function X(e){return typeof e=="string"||e instanceof String}function F(e,t,n,s){if(s<t)throw P(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw P(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function K(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function W(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var b;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(b||(b={}));/**
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
 */function Ce(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Le{constructor(t,n,s,r,o,i,u,a,c,p,R,m=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=p,this.connectionFactory_=R,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,T)=>{this.resolve_=w,this.reject_=T,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new U(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=u=>{const a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const u=o.getErrorCode()===b.NO_ERROR,a=o.getStatus();if(!u||Ce(a,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===b.ABORT;s(!1,new U(!1,null,p));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new U(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(u,u.getResponse());xe(a)?o(a):o()}catch(a){i(a)}else if(u!==null){const a=B();a.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,a)):i(a)}else if(r.canceled){const a=this.appDelete_?V():Ee();i(a)}else{const a=ke();i(a)}};this.canceled_?n(!1,new U(!1,null,!0)):this.backoffId_=De(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ve(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class U{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Se(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Fe(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Me(e,t){t&&(e["X-Firebase-GMPID"]=t)}function He(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function $e(e,t,n,s,r,o,i=!0){const u=W(e.urlParams),a=e.url+u,c=Object.assign({},e.headers);return Me(c,t),Se(c,n),Fe(c,o),He(c,s),new Le(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function z(e){let t;try{t=JSON.parse(e)}catch{return null}return Pe(t)?t:null}/**
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
 */function je(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qe(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function G(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Be(e,t){return t}class d{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Be}}let y=null;function Ve(e){return!X(e)||e.length<2?e:G(e)}function Xe(){if(y)return y;const e=[];e.push(new d("bucket")),e.push(new d("generation")),e.push(new d("metageneration")),e.push(new d("name","fullPath",!0));function t(o,i){return Ve(i)}const n=new d("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new d("size");return r.xform=s,e.push(r),e.push(new d("timeCreated")),e.push(new d("updated")),e.push(new d("md5Hash",null,!0)),e.push(new d("cacheControl",null,!0)),e.push(new d("contentDisposition",null,!0)),e.push(new d("contentEncoding",null,!0)),e.push(new d("contentLanguage",null,!0)),e.push(new d("contentType",null,!0)),e.push(new d("metadata","customMetadata",!0)),y=e,y}function Ke(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new f(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function We(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return Ke(s,e),s}function ze(e,t,n){const s=z(t);return s===null?null:We(e,s,n)}function Ge(e,t,n,s){const r=z(t);if(r===null||!X(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const p=e.bucket,R=e.fullPath,m="/b/"+i(p)+"/o/"+i(R),w=K(m,n,s),T=W({alt:"media",token:c});return w+T})[0]}class Ye{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ze(e){if(!e)throw B()}function Je(e,t){function n(s,r){const o=ze(e,r,t);return Ze(o!==null),Ge(o,r,e.host,e._protocol)}return n}function Qe(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=we():r=Te():n.getStatus()===402?r=Re(e.bucket):n.getStatus()===403?r=be(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function et(e){const t=Qe(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=me(e.path)),o.serverResponse=r.serverResponse,o}return n}function tt(e,t,n){const s=t.fullServerUrl(),r=K(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,u=new Ye(r,o,Je(e,n),i);return u.errorHandler=et(t),u}class nt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=b.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=b.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=b.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class st extends nt{initXhr(){this.xhr_.responseType="text"}}function rt(){return new st}/**
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
 */class k{constructor(t,n){this._service=t,n instanceof f?this._location=n:this._location=f.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new k(t,n)}get root(){const t=new f(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G(this._location.path)}get storage(){return this._service}get parent(){const t=je(this._location.path);if(t===null)return null;const n=new f(this._location.bucket,t);return new k(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ue(t)}}function ot(e){e._throwIfRoot("getDownloadURL");const t=tt(e.storage,e._location,Xe());return e.storage.makeRequestWithTokens(t,rt).then(n=>{if(n===null)throw Ae();return n})}function it(e,t){const n=qe(e._location.path,t),s=new f(e._location.bucket,n);return new k(e.storage,s)}/**
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
 */function at(e){return/^[A-Za-z]+:\/\//.test(e)}function ut(e,t){return new k(e,t)}function Y(e,t){if(e instanceof L){const n=e;if(n._bucket==null)throw Ne();const s=new k(n,n._bucket);return t!=null?Y(s,t):s}else return t!==void 0?it(e,t):e}function ct(e,t){if(t&&at(t)){if(e instanceof L)return ut(e,t);throw P("To use ref(service, url), the first argument must be a Storage instance.")}else return Y(e,t)}function M(e,t){const n=t==null?void 0:t[q];return n==null?null:f.makeFromBucketSpec(n,e)}function lt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:fe(r,e.app.options.projectId))}class L{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=j,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_e,this._maxUploadRetryTime=ge,this._requests=new Set,r!=null?this._bucket=f.makeFromBucketSpec(r,this._host):this._bucket=M(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=f.makeFromBucketSpec(this._url,t):this._bucket=M(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new k(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new ye(V());{const i=$e(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const H="@firebase/storage",$="0.11.2";/**
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
 */const Z="storage";function mt(e){return e=C(e),ot(e)}function Rt(e,t){return e=C(e),ct(e,t)}function Tt(e=de(),t){e=C(e);const s=le(e,Z).getImmediate({identifier:t}),r=he("storage");return r&&ht(s,...r),s}function ht(e,t,n,s={}){lt(e,t,n,s)}function dt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new L(n,s,r,t,ue)}function ft(){ie(new ae(Z,dt,"PUBLIC").setMultipleInstances(!0)),S(H,$,""),S(H,$,"esm2017")}ft();export{mt as a,pe as d,Tt as g,gt as q,Rt as r};
