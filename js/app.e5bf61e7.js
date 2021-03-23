(function(e){function t(t){for(var n,c,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"002f":function(e,t,a){"use strict";a.r(t),a.d(t,"Decrypt",(function(){return l}));a("e260"),a("fb6a"),a("ace4"),a("e6cf"),a("5cc6"),a("b39a"),a("ddb0"),a("2b3d");var n=a("06dc"),r=a("fd2f");const o=a("cb96"),c=[105,102,109,116],s=[254,254,254,254],i={" WAV":".wav",FLAC:".flac"," MP3":".mp3"," A4M":".m4a"};async function l(e,t,a){const l=new Uint8Array(await Object(n["d"])(e));if(!Object(n["f"])(c,l.slice(0,4))||!Object(n["f"])(s,l.slice(8,12)))return"xm"===a?{status:!1,message:"此xm文件已损坏"}:await Object(r["Decrypt"])(e,t,a,!0);let d=(new TextDecoder).decode(l.slice(4,8));if(!i.hasOwnProperty(d))return{status:!1,message:"未知的xm文件类型"};let u=l[15],f=l[12]|l[13]<<8,m=l.slice(16),h=m.length;for(let n=f;n<h;++n)m[n]=m[n]-u^255;const p=Object(n["b"])(m,"mp3"),b=n["a"][p];let g=new Blob([m],{type:b});const w=await o.parseBlob(g);"wav"===p&&(w.common.album="",w.common.artist="",w.common.title="");const v=Object(n["e"])(w.common.artist,w.common.title,t,"_");return{status:!0,title:v.title,artist:v.artist,ext:p,album:w.common.album,file:URL.createObjectURL(g),mime:b,rawExt:"xm"}}},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"06dc":function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return f})),a.d(t,"f",(function(){return m})),a.d(t,"b",(function(){return h})),a.d(t,"h",(function(){return p}));a("fb6a"),a("e6cf"),a("1276"),a("498a");const n=a("7907"),r=[102,76,97,67],o=[73,68,51],c=[79,103,103,83],s=[102,116,121,112],i=[48,38,178,117,142,102,207,17,166,217,0,170,0,98,206,108],l=[82,73,70,70],d={mp3:"audio/mpeg",flac:"audio/flac",m4a:"audio/mp4",ogg:"audio/ogg",wma:"audio/x-ms-wma",wav:"audio/x-wav"};async function u(e){return await new Promise(t=>{const a=new FileReader;a.onload=e=>{t(e.target.result)},a.readAsArrayBuffer(e)})}function f(e,t,a,n="-"){let r="",o="",c=a.split(n);return c.length>1?(r=c[0].trim(),o=c[1].trim()):1===c.length&&(o=c[0].trim()),"string"==typeof e&&""!==e&&(r=e),"string"==typeof t&&""!==t&&(o=t),{artist:r,title:o}}function m(e,t){return e.every((e,a)=>e===t[a])}function h(e,t){return m(o,e.slice(0,o.length))?"mp3":m(r,e.slice(0,r.length))?"flac":m(c,e.slice(0,c.length))?"ogg":m(s,e.slice(4,4+s.length))?"m4a":m(i,e.slice(0,i.length))?"wma":m(l,e.slice(0,l.length))?"wav":t}async function p(e,t,a,r){const o=new n(e);return o.setFrame("TPE1",t).setFrame("TIT2",a).setFrame("TALB",r),o.addTag(),o.arrayBuffer}},1:function(e,t){},2:function(e,t){},"23aa":function(e,t,a){"use strict";var n=a("8fd9"),r=a.n(n);r.a},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("46a1"),a("450d");var n=a("e5f2"),r=a.n(n),o=(a("6b30"),a("c284")),c=a.n(o),s=(a("0c67"),a("299c")),i=a.n(s),l=(a("b5d8"),a("f494")),d=a.n(l),u=(a("560b"),a("dcdc")),f=a.n(u),m=(a("f225"),a("89a9")),h=a.n(m),p=(a("f4f9"),a("c2cc")),b=a.n(p),g=(a("7a0f"),a("0f6c")),w=a.n(g),v=(a("aaa5"),a("a578")),y=a.n(v),_=(a("adec"),a("3d2d")),x=a.n(_),k=(a("bdc7"),a("aa2f")),O=a.n(k),j=(a("de31"),a("c69e")),M=a.n(j),D=(a("5466"),a("ecdf")),S=a.n(D),A=(a("38a0"),a("ad41")),U=a.n(A),C=(a("1951"),a("eedf")),B=a.n(C),E=(a("acb6"),a("c673")),L=a.n(E),F=(a("fd71"),a("a447")),P=a.n(F),T=a("2b0e"),q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{attrs:{id:"app"}},[a("el-main",[a("x-upload",{on:{handle_error:e.showFail,handle_finish:e.showSuccess}}),a("div",{attrs:{id:"app-control"}},[a("el-row",{staticStyle:{"padding-bottom":"1em","font-size":"14px"}},[e._v(" 歌曲命名格式： "),a("el-radio",{attrs:{label:"1",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("同原文件名")]),a("el-radio",{attrs:{label:"2",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌手-歌曲名")]),a("el-radio",{attrs:{label:"3",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌曲名")]),a("el-radio",{attrs:{label:"4",name:"format"},model:{value:e.download_format,callback:function(t){e.download_format=t},expression:"download_format"}},[e._v("歌曲名-歌手")])],1),a("el-row",[a("el-button",{attrs:{icon:"el-icon-download",plain:""},on:{click:e.handleDownloadAll}},[e._v("下载全部")]),a("el-button",{attrs:{icon:"el-icon-delete",plain:"",type:"danger"},on:{click:e.handleDeleteAll}},[e._v("清除全部")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v(" 当您使用此工具进行大量文件解密的时候，建议开启此选项。"),a("br"),e._v(" 开启后，解密结果将不会存留于浏览器中，防止内存不足。 ")]),a("el-checkbox",{staticStyle:{"margin-left":"1em"},attrs:{border:""},model:{value:e.instant_download,callback:function(t){e.instant_download=t},expression:"instant_download"}},[e._v("立即保存")])],1)],1)],1),a("audio",{attrs:{autoplay:e.playing_auto,src:e.playing_url,controlslist:"nodownload",controls:""}}),a("x-preview",{attrs:{download_format:e.download_format,"table-data":e.tableData},on:{music_changed:e.changePlaying}})],1),a("el-footer",{attrs:{id:"app-footer"}},[a("el-row",[a("a",{attrs:{target:"_blank"}},[e._v("音乐文件解密")]),e._v("(v"),a("span",{domProps:{textContent:e._s(e.version)}}),e._v(")：移除已购音乐的加密保护。 ")]),a("el-row",[e._v(" 目前支持网易云音乐(ncm), QQ音乐(qmcflac, qmc, mflac, mgg), 虾米音乐(xm), 酷我音乐(kwm)等。 ")]),a("el-row",[e._v(" Select Language: "),a("a",{attrs:{target:"_blank"}},[e._v("中文 (简体) ")]),e._v(" "),a("a",{attrs:{href:"en",target:"_blank"}},[e._v("English")])]),a("el-row",[e._v(" 音乐解密程序使用 MIT许可协议 开放源代码。 ")])],1)],1)},I=[],$=(a("e6cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-upload",{attrs:{"auto-upload":!1,"on-change":e.handleFile,"show-file-list":!1,action:"",drag:"",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击选择")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("此程序仅在浏览器内对文件进行解密，无需网络连接。")]),a("transition",{attrs:{name:"el-fade-in"}},[a("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.progress_show,expression:"progress_show"}],staticStyle:{margin:"16px 6px 0 6px"},attrs:{format:e.progressFormat,percentage:e.progress_percent,"stroke-width":16,"text-inside":!0}})],1)],1)}),R=[],N={name:"upload",data(){return{cacheQueue:[],workers:[],idle_workers:[],thread_num:1,progress_show:!1,progress_finished:0,progress_all:0,progress_percent:0}},mounted(){const e=a("bd2e");this.workers.push(e.CommonDecrypt),this.idle_workers.push(0)},methods:{progressFormat(){return this.progress_finished+"/"+this.progress_all},progressChange(e,t){this.progress_all+=t,this.progress_finished+=e,this.progress_percent=Math.round(this.progress_finished/this.progress_all*100),this.progress_finished===this.progress_all?setTimeout(()=>{this.progress_show=!1,this.progress_finished=0,this.progress_all=0},3e3):this.progress_show=!0},handleFile(e){this.progressChange(0,1),this.idle_workers.length>0?this.handleDoFile(e,this.idle_workers.shift()):this.cacheQueue.push(e)},handleCacheQueue(e){0!==this.cacheQueue.length?this.handleDoFile(this.cacheQueue.shift(),e):this.idle_workers.push(e)},handleDoFile(e,t){this.workers[t](e).then(e=>{this.$emit("handle_finish",e),this.handleCacheQueue(t),this.progressChange(1,0)}).catch(a=>{this.$emit("handle_error",a,e.name),this.handleCacheQueue(t),this.progressChange(1,0)})}}},Q=N,W=(a("23aa"),a("2877")),H=Object(W["a"])(Q,$,R,!1,null,"28a142ca",null),J=H.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"封面"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"image-slot el-image__error",staticStyle:{width:"100px",height:"100px"}},[e._v(" 暂无封面 ")])]}}])}),a("el-table-column",{attrs:{label:"歌曲名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{label:"歌手"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v(e._s(t.row.artist))])]}}])}),a("el-table-column",{attrs:{label:"专辑"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v(e._s(t.row.album))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{circle:"",icon:"el-icon-video-play",type:"success"},on:{click:function(a){return e.handlePlay(t.$index,t.row)}}}),a("el-button",{attrs:{circle:"",icon:"el-icon-download"},on:{click:function(a){return e.handleDownload(t.row)}}}),a("el-button",{attrs:{circle:"",icon:"el-icon-delete",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}})]}}])})],1)},G=[];a("a434"),a("e260"),a("ddb0"),a("2b3d");function z(e,t){const a=document.createElement("a");switch(a.href=e.file,t){default:case"1":a.download=e.rawFilename+"."+e.ext;break;case"2":a.download=e.artist+"-"+e.title+"."+e.ext;break;case"3":a.download=e.title+"."+e.ext;break;case"4":a.download=e.title+"-"+e.artist+"."+e.ext;break}document.body.append(a),a.click(),a.remove()}function K(e){URL.revokeObjectURL(e.file)}var X={name:"preview",props:{tableData:{type:Array,required:!0},download_format:{type:String,required:!0}},methods:{handlePlay(e,t){this.$emit("music_changed",t.file)},handleDelete(e,t){K(t),this.tableData.splice(e,1)},handleDownload(e){z(e,this.download_format)}}},Y=X,Z=Object(W["a"])(Y,V,G,!1,null,"2c426aa2",null),ee=Z.exports,te=a("9224"),ae={name:"app",components:{xUpload:J,xPreview:ee},data(){return{version:te.version,activeIndex:"1",tableData:[],playing_url:"",playing_auto:!1,download_format:"1",instant_download:!1}},created(){this.$nextTick((function(){this.finishLoad()}))},methods:{async finishLoad(){const e=document.getElementById("loader-mask");e.remove(),this.$notify.info({title:"离线使用",message:"我们使用PWA技术，无网络也能使用<br/>最近更新："+te.updateInfo,dangerouslyUseHTMLString:!0,duration:1e4,position:"top-left"})},showSuccess(e){e.status?this.instant_download?(z(e,this.download_format),K(e)):(this.tableData.push(e),this.$notify.success({title:"解密成功",message:"成功解密 "+e.title,duration:3e3})):this.showFail(e.message,e.rawFilename+"."+e.rawExt)},showFail(e,t){this.$notify.error({title:"出现问题",message:e+"，"+t,dangerouslyUseHTMLString:!0,duration:6e3})},changePlaying(e){this.playing_url=e,this.playing_auto=!0},handleDeleteAll(){this.tableData.forEach(e=>{K(e)}),this.tableData=[]},handleDownloadAll(){let e=0,t=setInterval(()=>{e<this.tableData.length?(z(this.tableData[e],this.download_format),e++):clearInterval(t)},300)}}},ne=ae,re=(a("034f"),Object(W["a"])(ne,q,I,!1,null,null,null)),oe=re.exports,ce=a("9483");Object(ce["a"])("service-worker.js",{ready(){console.log("程序已就绪。")},registered(){console.log("Service Worker启动成功。")},cached(){console.log("程序已做好离线使用前的准备工作。")},updatefound(){console.log("正在下载内容...")},updated(){console.log("内容更新成功!"),window.location.reload()},offline(){console.log("无可用网络连接，进入离线模式。")},error(e){console.error("Service Worker启动失败，错误信息: ",e)}}),T["default"].use(P.a),T["default"].use(L.a),T["default"].use(B.a),T["default"].use(U.a),T["default"].use(S.a),T["default"].use(M.a),T["default"].use(O.a),T["default"].use(x.a),T["default"].use(y.a),T["default"].use(w.a),T["default"].use(b.a),T["default"].use(h.a),T["default"].use(f.a),T["default"].use(d.a),T["default"].use(i.a),T["default"].use(c.a),T["default"].prototype.$notify=r.a,T["default"].config.productionTip=!1,new T["default"]({render:e=>e(oe)}).$mount("#app")},6:function(e,t){},"85ec":function(e,t,a){},"8fd9":function(e,t,a){},9224:function(e){e.exports=JSON.parse('{"name":"music-decryptor","version":"1.5.2","updateInfo":"修复GBK解码支持","license":"MIT","description":"在任何设备上解密已购的加密音乐文件！","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js"},"dependencies":{"base64-js":"^1.3.1","browser-id3-writer":"^4.4.0","core-js":"^3.6.4","crypto-js":"^4.0.0","element-ui":"^2.13.0","iconv-lite":"^0.5.1","music-metadata-browser":"^2.0.5","register-service-worker":"^1.7.1","vue":"^2.6.11"},"devDependencies":{"@vue/cli-plugin-babel":"^4.3.0","@vue/cli-plugin-pwa":"^4.3.0","@vue/cli-service":"^4.3.0","babel-plugin-component":"^1.1.1","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.11"}}')},a8ee:function(e,t,a){"use strict";a.r(t),a.d(t,"Decrypt",(function(){return c}));a("e260"),a("ace4"),a("e6cf"),a("5cc6"),a("b39a");var n=a("fd2f"),r=a("06dc");const o=[0,0,0,32,102,116,121,112];async function c(e,t){const a=await Object(r["d"])(e),c=new Uint8Array(a);for(let n=0;n<8;++n)c[n]=o[n];const s=new Blob([c],{type:"audio/mp4"});return await Object(n["Decrypt"])(s,t,"m4a",!1)}},b57b:function(e,t,a){"use strict";a.r(t),a.d(t,"Decrypt",(function(){return i}));a("e260"),a("fb6a"),a("ace4"),a("e6cf"),a("25f0"),a("843c"),a("5cc6"),a("b39a"),a("ddb0"),a("2b3d");var n=a("06dc"),r=a("acf9");const o=a("cb96"),c=[121,101,101,108,105,111,110,45,107,117,119,111,45,116,109,101],s="MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";async function i(e,t,a){const s=new Uint8Array(await Object(n["d"])(e));if(!Object(n["f"])(c,s.slice(0,16)))return{status:!1,message:"此kwm文件已损坏"};let i=s.slice(24,32),d=l(i),u=s.slice(1024),f=u.length;for(let n=0;n<f;++n)u[n]^=d[n%32];const m=Object(n["b"])(u,"mp3"),h=n["a"][m];let p=new Blob([u],{type:h});const b=await o.parseBlob(p);for(let n in b.native)b.native[n].some(e=>"TCON"===e.id&&"(12)"===e.value)&&(b.common.artist=Object(r["decode"])(b.common.artist,"gbk"),b.common.title=Object(r["decode"])(b.common.title,"gbk"),b.common.album=Object(r["decode"])(b.common.album,"gbk"));const g=Object(n["e"])(b.common.artist,b.common.title,t);return{status:!0,title:g.title,artist:g.artist,ext:m,album:b.common.album,file:URL.createObjectURL(p),mime:h}}function l(e){let t=new DataView(e.buffer),a=t.getBigUint64(0,!0).toString(),n=d(a),r=new Uint8Array(32);for(let o=0;o<32;o++)r[o]=s[o].charCodeAt()^n[o].charCodeAt();return r}function d(e){let t=e.length,a=e;return t>32?a=e.slice(0,32):t<32&&(a=e.padEnd(32,e)),a}},b6cf:function(e,t,a){"use strict";a.r(t),a.d(t,"Decrypt",(function(){return k}));a("e260"),a("fb6a"),a("ace4"),a("e6cf"),a("5cc6"),a("b39a"),a("ddb0"),a("2b3d");var n=a("06dc");a("26e9");const r=[79,103,103,83,0,2,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,255,255,255,255,1,30,1,118,111,114,98,105,115,0,0,0,0,2,68,172,0,0,0,0,0,0,0,238,2,0,0,0,0,0,184,1,79,103,103,83,0,0,0,0,0,0,0,0,0,0,255,255,255,255,1,0,0,0,255,255,255,255],o=[3,118,111,114,98,105,115,44,0,0,0,88,105,112,104,46,79,114,103,32,108,105,98,86,111,114,98,105,115,32,73,32,50,48,49,53,48,49,48,53,32,40,226,155,132,226,155,132,226,155,132,226,155,132,41,255,0,0,0,255,0,0,0,84,73,84,76,69,61],c=[9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,6,3,3,3,3,6,6,6,6,3,3,3,3,6,6,6,6,6,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0],s=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,3,3,0,1,3,3,3,3,3,3,3,3],i=[222,81,250,195,74,214,202,144,126,103,94,247,213,82,132,216,71,149,187,161,170,198,102,35,146,98,243,116,161,159,244,160,29,63,91,240,19,14,9,61,249,188,0,17];class l{constructor(e,t,a){void 0===t||void 0===a?(44===e.length?(this.Matrix44=e,this.generateMask128from44()):(this.Matrix128=e,this.generateMask44from128()),this.generateMask58from128()):(this.Matrix58=e,this.Super58A=t,this.Super58B=a,this.generateMask128from58(),this.generateMask44from128())}generateMask128from58(){if(56!==this.Matrix58.length)throw"incorrect mask58 matrix length";let e=[];for(let t=0;t<8;t+=1)e=e.concat([this.Super58A],this.Matrix58.slice(7*t,7*t+7),[this.Super58B],this.Matrix58.slice(49-7*t,56-7*t).reverse());this.Matrix128=e}generateMask58from128(){if(128!==this.Matrix128.length)throw"incorrect mask128 length";const e=this.Matrix128[0],t=this.Matrix128[8];let a=[];for(let r=0;r<8;r+=1){let o=16*r,c=120-o;if(this.Matrix128[o]!==e||this.Matrix128[o+8]!==t)throw"decode mask-128 to mask-58 failed";let s=this.Matrix128.slice(o+1,o+8),i=this.Matrix128.slice(c+1,c+8).reverse();if(!Object(n["f"])(s,i))throw"decode mask-128 to mask-58 failed";a=a.concat(s)}this.Matrix58=a,this.Super58A=e,this.Super58B=t}generateMask44from128(){if(128!==this.Matrix128.length)throw"incorrect mask128 matrix length";let e=b();this.Matrix44=[];let t=0;e.forEach(e=>{let a=e.length;for(let t=1;t<a;t++)if(this.Matrix128[e[0]]!==this.Matrix128[e[t]])throw"decode mask-128 to mask-44 failed";this.Matrix44[t]=this.Matrix128[e[0]],t++})}generateMask128from44(){if(44!==this.Matrix44.length)throw"incorrect mask length";this.Matrix128=[];let e=0;b().forEach(t=>{t.forEach(t=>{this.Matrix128[t]=this.Matrix44[e]}),e++})}Decrypt(e){let t=e.slice(0),a=-1,n=-1;for(let r=0;r<e.length;r++)a++,n++,(32768===a||a>32768&&(a+1)%32768===0)&&(a++,n++),n>=128&&(n-=128),t[r]^=this.Matrix128[n];return t}}function d(){return new l(i)}function u(e){let t,a=Math.min(32768,e.length);for(let o=0;o<a;o+=128)try{if(t=new l(e.slice(o,o+128)),Object(n["f"])(n["c"],t.Decrypt(e.slice(0,n["c"].length))))break}catch(r){}return t}function f(e){if(e.length<256)return;let t={};for(let n=0;n<44;n++)t[n]={};const a=e[84]^e[12]^r[12],o=w(a),c=v(a);for(let n=0;n<o.length;n++){if(0===c[n])continue;let a=g(n),r=e[n]^o[n],s=c[n];r in t[a]?t[a][r]+=s:t[a][r]=s}let s=[];try{for(let e=0;e<44;e++)s[e]=m(t[e])}catch(u){return}const i=new l(s);let d=i.Decrypt(e.slice(0,n["g"].length));return Object(n["f"])(n["g"],d)?i:void 0}function m(e){if(0===e.length)throw"can not match at least one key";let t,a=0;for(let n in e)e[n]>a&&(t=n,a=e[n]);return parseInt(t)}const h=[],p=[];function b(){return h}function g(e){return p[e%128]}function w(e){let t=[e,255];for(let a=2;a<e;a++)t.push(255);return t.push(255),r.concat(t,o)}function v(e){let t=[6,0];for(let a=2;a<e;a++)t.push(4);return t.push(0),c.concat(t,s)}(function(){for(let t=0;t<128;t++){let e=(t*t+27)%256;e in h?h[e].push(t):h[e]=[t]}let e=0;h.forEach(t=>{t.forEach(t=>{p[t]=e}),e++})})();a("1fb5");var y=a("acf9");const _=a("cb96"),x={mgg:{handler:f,ext:"ogg",detect:!0},mflac:{handler:u,ext:"flac",detect:!0},qmc0:{handler:d,ext:"mp3",detect:!1},qmc2:{handler:d,ext:"ogg",detect:!1},qmc3:{handler:d,ext:"mp3",detect:!1},qmc8:{handler:d,ext:"m4a",detect:!1},qmcogg:{handler:d,ext:"ogg",detect:!1},qmcflac:{handler:d,ext:"flac",detect:!1},bkcmp3:{handler:d,ext:"mp3",detect:!1},bkcflac:{handler:d,ext:"flac",detect:!1},tkm:{handler:d,ext:"m4a",detect:!1},"666c6163":{handler:d,ext:"flac",detect:!1},"6d7033":{handler:d,ext:"mp3",detect:!1},"6f6767":{handler:d,ext:"ogg",detect:!1},"6d3461":{handler:d,ext:"m4a",detect:!1},776176:{handler:d,ext:"wav",detect:!1}};async function k(e,t,a){if(!(a in x))return{status:!1,message:"文件格式不正确"};const r=x[a],o=new Uint8Array(await Object(n["d"])(e));let c,s,i;if(r.detect){const e=new DataView(o.slice(o.length-4).buffer).getUint32(0,!0),t=o.length-4-e;if(c=o.slice(0,t),s=r.handler(c),i=o.slice(t,t+e),void 0===s)return{status:!1,message:a+"格式仅提供实验性支持"}}else c=o,s=r.handler(c);let l=s.Decrypt(c);const d=Object(n["b"])(l,r.ext),u=n["a"][d];let f=new Blob([l],{type:u});const m=await _.parseBlob(f);for(let n in m.native)m.native[n].some(e=>"TCON"===e.id&&"(12)"===e.value)&&(m.common.artist=Object(y["decode"])(m.common.artist,"gbk"),m.common.title=Object(y["decode"])(m.common.title,"gbk"),m.common.album=Object(y["decode"])(m.common.album,"gbk"));const h=Object(n["e"])(m.common.artist,m.common.title,t);return{status:!0,title:h.title,artist:h.artist,ext:d,album:m.common.album,file:URL.createObjectURL(f),mime:u}}},bd2e:function(e,t,a){"use strict";a.r(t),a.d(t,"CommonDecrypt",(function(){return l}));a("baa5"),a("e6cf");const n=a("dde9"),r=a("b57b"),o=a("002f"),c=a("b6cf"),s=a("fd2f"),i=a("a8ee");async function l(e){let t,a=e.name.substring(e.name.lastIndexOf(".")+1,e.name.length).toLowerCase(),l=e.name.substring(0,e.name.lastIndexOf("."));switch(a){case"ncm":t=await n.Decrypt(e.raw,l,a);break;case"kwm":t=await r.Decrypt(e.raw,l,a);break;case"xm":case"wav":case"mp3":case"flac":case"m4a":t=await o.Decrypt(e.raw,l,a);break;case"ogg":t=await s.Decrypt(e.raw,l,a);break;case"tm0":case"tm3":t=await s.Decrypt(e.raw,l,"mp3");break;case"qmc0":case"qmc2":case"qmc3":case"qmc8":case"qmcflac":case"qmcogg":case"tkm":case"bkcmp3":case"bkcflac":case"mflac":case"mgg":case"666c6163":case"6d7033":case"6f6767":case"6d3461":case"776176":t=await c.Decrypt(e.raw,l,a);break;case"tm2":case"tm6":t=await i.Decrypt(e.raw,l);break;default:t={status:!1,message:"不支持此文件格式"}}return t.rawExt||(t.rawExt=a),t.rawFilename||(t.rawFilename=l),t}},dde9:function(e,t,a){"use strict";a.r(t),a.d(t,"Decrypt",(function(){return i}));a("c975"),a("e260"),a("fb6a"),a("ace4"),a("e6cf"),a("25f0"),a("5cc6"),a("b39a"),a("ddb0"),a("2b3d");var n=a("06dc");const r=a("3452"),o=r.enc.Hex.parse("687a4852416d736f356b496e62617857"),c=r.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728"),s=[67,84,69,78,70,68,65,77];async function i(e,t,a){const r=await Object(n["d"])(e),o=new DataView(r);if(!Object(n["f"])(s,new Uint8Array(r,0,8)))return{status:!1,message:"此ncm文件已损坏"};const c=l(o,r,10),i=d(c.data),f=u(o,r,c.offset),m=f.data;let h=f.offset+o.getUint32(f.offset+5,!0)+13,p=new Uint8Array(r,h),b=p.length;for(let n=0;n<b;++n)p[n]^=i[255&n];void 0===m.album&&(m.album="");const g=[];m.artist&&m.artist.forEach(e=>g.push(e[0]));const w=Object(n["e"])(g.join(" & "),m.musicName,t);0===g.length&&g.push(w.artist),void 0===m.format&&(m.format=Object(n["b"])(p,"mp3")),"mp3"===m.format&&(p=await Object(n["h"])(p,g,w.title,m.album));const v=n["a"][m.format],y=new Blob([p],{type:v});return{status:!0,title:w.title,artist:w.artist,ext:m.format,album:m.album,file:URL.createObjectURL(y),mime:v}}function l(e,t,a){const n=e.getUint32(a,!0);a+=4;const c=new Uint8Array(t,a,n).map(e=>100^e);a+=n;const s=r.AES.decrypt({ciphertext:r.lib.WordArray.create(c)},o,{mode:r.mode.ECB,padding:r.pad.Pkcs7}),i=new Uint8Array(s.sigBytes),l=s.words,d=s.sigBytes;for(let r=0;r<d;r++)i[r]=l[r>>>2]>>>24-r%4*8&255;return{offset:a,data:i.slice(17)}}function d(e){const t=new Uint8Array(Array(256).keys()),a=e.length;let n=0;for(let r=0;r<256;r++)n=t[r]+n+e[r%a]&255,[t[r],t[n]]=[t[n],t[r]];return t.map((e,t,a)=>{t=t+1&255;const n=a[t],r=a[t+n&255];return a[n+r&255]})}function u(e,t,a){const n=e.getUint32(a,!0);if(a+=4,0===n)return{data:{},offset:a};const o=new Uint8Array(t,a,n).map(e=>99^e);a+=n;const s=r.AES.decrypt({ciphertext:r.enc.Base64.parse(r.lib.WordArray.create(o.slice(22)).toString(r.enc.Utf8))},c,{mode:r.mode.ECB,padding:r.pad.Pkcs7}).toString(r.enc.Utf8),i=s.indexOf(":");let l=JSON.parse(s.slice(i+1));return"dj"===s.slice(0,i)&&(l=l.mainMusic),{data:l,offset:a}}},fd2f:function(e,t,a){"use strict";a.r(t),a.d(t,"Decrypt",(function(){return c}));a("e260"),a("ace4"),a("e6cf"),a("5cc6"),a("b39a"),a("ddb0"),a("2b3d");var n=a("06dc"),r=a("acf9");const o=a("cb96");async function c(e,t,a,c=!0){let s=a;if(c){const t=new Uint8Array(await Object(n["d"])(e));s=Object(n["b"])(t,a),s!==a&&(e=new Blob([t],{type:n["a"][s]}))}const i=await o.parseBlob(e);for(let n in i.native)i.native[n].some(e=>"TCON"===e.id&&"(12)"===e.value)&&(i.common.artist=Object(r["decode"])(i.common.artist,"gbk"),i.common.title=Object(r["decode"])(i.common.title,"gbk"),i.common.album=Object(r["decode"])(i.common.album,"gbk"));const l=Object(n["e"])(i.common.artist,i.common.title,t);return{status:!0,title:l.title,artist:l.artist,ext:s,album:i.common.album,file:URL.createObjectURL(e),mime:n["a"][s]}}}});