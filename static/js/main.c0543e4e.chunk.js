(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/background.824c31a5.png"},function(e){e.exports={is_online:!0,ip:"game-fr-10.mtxserv.com",port:"27180",game:"minecraft",params:{gametype:"SMP",host_name:"Le serveur des zizi",map:"world",max_slots:"20",password:!1,players:[{player:"Gobliprane",gq_name:"Gobliprane"}],plugins:"Paper on 1.14.3-R0.1-SNAPSHOT",type:"minecraft",used_slots:"1",version:"1.14.3"},current_clients:"1",is_fetch:!0,loaded:!0,state:null}},function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(12),n(4)),s=n.n(i),l=function(e){var t=e.children;return r.a.createElement("div",{className:"Background__container",style:{backgroundImage:"url(".concat(s.a,")")}},t)},u=function(){return r.a.createElement("div",{className:"Header__container"},r.a.createElement("h1",{className:"Header--title"},"Server News"))},m=n(1),d={status:function(){return{url:"https://mtxserv.com/api/v1/viewers/game?type=minecraft&ip=game-fr-10.mtxserv.com&port=27180",mock:"server-status"}}},f={"server-status":n(5)},p="mock",v="url",g=p,w=function(e){return new Promise(function(t,n){setTimeout(function(){t(f[e])},1e3)})},h=function(e){return fetch(e).then(function(e){if(e.ok)return e.json();throw new Error(e.text)})},E=function(e){var t=d[e.urlKey](e);switch(g){case p:return w(t.mock);case v:return h(t.url);default:return Promise.resolve()}},_=function(e){var t=Object(a.useState)(null),n=Object(m.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(!1),i=Object(m.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)(null),d=Object(m.a)(u,2),f=d[0],p=d[1];return Object(a.useEffect)(function(){l(!0),p(null),E(e).then(function(e){o(e),l(!1)}).catch(function(e){l(!1),p(e)})},[e]),{data:r,loading:s,errors:f}},b=function(e){var t=e.loading,n=e.children;return t?r.a.createElement("div",{className:"loading-text"}):r.a.createElement("span",null,n)},k={urlKey:"status"},y=function(){var e=_(k),t=e.data,n=e.loading;return t||(t={}),r.a.createElement("div",{className:"StatusCard__wrapper"},r.a.createElement("div",{className:"StatusCard__container ".concat(n?"loading":""," ").concat(t.is_online?"online":"offline")},r.a.createElement("div",{className:"StatusCard--title"},r.a.createElement(b,{loading:n},t.ip,":",t.port))))},S=function(){return r.a.createElement(l,null,r.a.createElement(u,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.c0543e4e.chunk.js.map