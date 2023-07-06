import{w as L}from"./index.9a3dc4bc.js";import{m as re,a as oe,R as ie,_ as ae,b as ce,G as ue,d as le,c as he,C as de,r as M,S as fe,F as pe,e as S,f as _e,h as me,k as ge,l as Re}from"./index.esm.6ba77bfd.js";const D=L(),V=L(),we=L({perfil:!0}),Te=(e,t=500)=>{let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(void 0,s)},t)}},be=(e,t,n,s)=>new Promise((r,o)=>{const i=V.subscribe(async a=>{if(a){try{Te(async()=>{!s&&await Ee()},1e4),await re(oe(a,e,t),n),r()}catch(c){o(c)}i()}})}),H=(e,t,n)=>new Promise((s,r)=>{const o=V.subscribe(async i=>{var a;if(i){setTimeout(()=>{o()},0);try{if(n){const c=ie(ae(i,e),ce(t==="doc_id"?ue():t,"==",n)),p=(a=(await le(c)).docs[0])==null?void 0:a.data();s(p)}else r("The valor is empty.")}catch(c){r(c)}}})}),ke=async()=>{try{const e=o=>{we.update(i=>(i.perfil=o,i))},t=sessionStorage.getItem("user_id");if(!t)throw D.set(void 0),e(!1),new Error("No información de inicio de sesión.");const n=t&&await H("sesiónes","id",t),s=n==null?void 0:n.tiempo_de_expiración;if(s&&new Date().getTime()>=s)throw sessionStorage.removeItem("user_id"),D.set(void 0),e(!1),new Error("La sesión está vencida.");{const o=await H("users","id",t);D.set(o),e(!1)}return n}catch(e){throw new Error(e)}},Ee=async()=>{try{const e=await ke();e&&await be("sesiónes",e.id,{...e,tiempo_de_expiración:new Date().getTime()+36e5})}catch(e){throw new Error(e)}};/**
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
 */const X="firebasestorage.googleapis.com",K="storageBucket",Ie=2*60*1e3,Oe=10*60*1e3;/**
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
 */class h extends pe{constructor(t,n,s=0){super(P(t),`Firebase Storage: ${n} (${P(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return P(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var l;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(l||(l={}));function P(e){return"storage/"+e}function G(){const e="An unknown error occurred, please check the error payload for server response.";return new h(l.UNKNOWN,e)}function ye(e){return new h(l.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ne(e){return new h(l.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ae(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(l.UNAUTHENTICATED,e)}function ve(){return new h(l.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ue(e){return new h(l.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function xe(){return new h(l.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function De(){return new h(l.CANCELED,"User canceled the upload/download.")}function Pe(e){return new h(l.INVALID_URL,"Invalid URL '"+e+"'.")}function Ce(e){return new h(l.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Le(){return new h(l.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+K+"' property when initializing the app?")}function Se(){return new h(l.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function C(e){return new h(l.INVALID_ARGUMENT,e)}function W(){return new h(l.APP_DELETED,"The Firebase app was deleted.")}function Fe(e){return new h(l.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function I(e){throw new h(l.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class f{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=f.makeFromUrl(t,n)}catch{return new f(t,"")}if(s.path==="")return s;throw Ce(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function u(m){m.path_=decodeURIComponent(m.path)}const p="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${R}/${p}/b/${r}/o${g}`,"i"),w={bucket:1,path:3},O=n===X?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",y=new RegExp(`^https?://${O}/${r}/${_}`,"i"),E=[{regex:a,indices:c,postModify:o},{regex:T,indices:w,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let m=0;m<E.length;m++){const N=E[m],U=N.regex.exec(t);if(U){const se=U[N.indices.bucket];let x=U[N.indices.path];x||(x=""),s=new f(se,x),N.postModify(s);break}}if(s==null)throw Pe(t);return s}}class Me{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function He(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return a===2}let u=!1;function p(..._){u||(u=!0,t.apply(null,_))}function R(_){r=setTimeout(()=>{r=null,e(T,c())},_)}function g(){o&&clearTimeout(o)}function T(_,...y){if(u){g();return}if(_){g(),p.call(null,_,...y);return}if(c()||i){g(),p.call(null,_,...y);return}s<64&&(s*=2);let E;a===1?(a=2,E=0):E=(s+Math.random())*1e3,R(E)}let w=!1;function O(_){w||(w=!0,g(),!u&&(r!==null?(_||(a=2),clearTimeout(r),R(0)):_||(a=1)))}return R(0),o=setTimeout(()=>{i=!0,O(!0)},n),O}function $e(e){e(!1)}/**
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
 */function Be(e){return e!==void 0}function je(e){return typeof e=="object"&&!Array.isArray(e)}function z(e){return typeof e=="string"||e instanceof String}function $(e,t,n,s){if(s<t)throw C(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw C(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Y(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Z(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */function qe(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class Ve{constructor(t,n,s,r,o,i,a,c,u,p,R,g=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=R,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,w)=>{this.resolve_=T,this.reject_=w,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new A(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===b.NO_ERROR,c=o.getStatus();if(!a||qe(c,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===b.ABORT;s(!1,new A(!1,null,p));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new A(u,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Be(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=G();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(r.canceled){const c=this.appDelete_?W():De();i(c)}else{const c=xe();i(c)}};this.canceled_?n(!1,new A(!1,null,!0)):this.backoffId_=He(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&$e(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class A{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Xe(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Ke(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ge(e,t){t&&(e["X-Firebase-GMPID"]=t)}function We(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ze(e,t,n,s,r,o,i=!0){const a=Z(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return Ge(u,t),Xe(u,n),Ke(u,o),We(u,s),new Ve(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function J(e){let t;try{t=JSON.parse(e)}catch{return null}return je(t)?t:null}/**
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
 */function Ye(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ze(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Q(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Je(e,t){return t}class d{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Je}}let v=null;function Qe(e){return!z(e)||e.length<2?e:Q(e)}function et(){if(v)return v;const e=[];e.push(new d("bucket")),e.push(new d("generation")),e.push(new d("metageneration")),e.push(new d("name","fullPath",!0));function t(o,i){return Qe(i)}const n=new d("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new d("size");return r.xform=s,e.push(r),e.push(new d("timeCreated")),e.push(new d("updated")),e.push(new d("md5Hash",null,!0)),e.push(new d("cacheControl",null,!0)),e.push(new d("contentDisposition",null,!0)),e.push(new d("contentEncoding",null,!0)),e.push(new d("contentLanguage",null,!0)),e.push(new d("contentType",null,!0)),e.push(new d("metadata","customMetadata",!0)),v=e,v}function tt(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new f(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function nt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return tt(s,e),s}function st(e,t,n){const s=J(t);return s===null?null:nt(e,s,n)}function rt(e,t,n,s){const r=J(t);if(r===null||!z(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const p=e.bucket,R=e.fullPath,g="/b/"+i(p)+"/o/"+i(R),T=Y(g,n,s),w=Z({alt:"media",token:u});return T+w})[0]}class ot{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function it(e){if(!e)throw G()}function at(e,t){function n(s,r){const o=st(e,r,t);return it(o!==null),rt(o,r,e.host,e._protocol)}return n}function ct(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ve():r=Ae():n.getStatus()===402?r=Ne(e.bucket):n.getStatus()===403?r=Ue(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ut(e){const t=ct(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=ye(e.path)),o.serverResponse=r.serverResponse,o}return n}function lt(e,t,n){const s=t.fullServerUrl(),r=Y(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new ot(r,o,at(e,n),i);return a.errorHandler=ut(t),a}class ht{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=b.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=b.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=b.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw I("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw I("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw I("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw I("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw I("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class dt extends ht{initXhr(){this.xhr_.responseType="text"}}function ft(){return new dt}/**
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
 */class k{constructor(t,n){this._service=t,n instanceof f?this._location=n:this._location=f.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new k(t,n)}get root(){const t=new f(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Q(this._location.path)}get storage(){return this._service}get parent(){const t=Ye(this._location.path);if(t===null)return null;const n=new f(this._location.bucket,t);return new k(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Fe(t)}}function pt(e){e._throwIfRoot("getDownloadURL");const t=lt(e.storage,e._location,et());return e.storage.makeRequestWithTokens(t,ft).then(n=>{if(n===null)throw Se();return n})}function _t(e,t){const n=Ze(e._location.path,t),s=new f(e._location.bucket,n);return new k(e.storage,s)}/**
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
 */function mt(e){return/^[A-Za-z]+:\/\//.test(e)}function gt(e,t){return new k(e,t)}function ee(e,t){if(e instanceof F){const n=e;if(n._bucket==null)throw Le();const s=new k(n,n._bucket);return t!=null?ee(s,t):s}else return t!==void 0?_t(e,t):e}function Rt(e,t){if(t&&mt(t)){if(e instanceof F)return gt(e,t);throw C("To use ref(service, url), the first argument must be a Storage instance.")}else return ee(e,t)}function B(e,t){const n=t==null?void 0:t[K];return n==null?null:f.makeFromBucketSpec(n,e)}function wt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Re(r,e.app.options.projectId))}class F{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=X,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ie,this._maxUploadRetryTime=Oe,this._requests=new Set,r!=null?this._bucket=f.makeFromBucketSpec(r,this._host):this._bucket=B(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=f.makeFromBucketSpec(this._url,t):this._bucket=B(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new k(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Me(W());{const i=ze(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const j="@firebase/storage",q="0.11.2";/**
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
 */const te="storage";function Ot(e){return e=S(e),pt(e)}function yt(e,t){return e=S(e),Rt(e,t)}function Nt(e=ge(),t){e=S(e);const s=_e(e,te).getImmediate({identifier:t}),r=me("storage");return r&&Tt(s,...r),s}function Tt(e,t,n,s={}){wt(e,t,n,s)}function bt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new F(n,s,r,t,fe)}function kt(){he(new de(te,bt,"PUBLIC").setMultipleInstances(!0)),M(j,q,""),M(j,q,"esm2017")}kt();export{Te as a,be as b,we as c,V as d,Ot as e,Nt as g,Ee as m,D as p,H as q,yt as r};
