(this["webpackJsonpzambetas-react-app"]=this["webpackJsonpzambetas-react-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},20:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),s=(n(20),n(2)),i=n(3),u=n.n(i),l=function(e){var t=e.children,n=Object(a.useState)(""),c=Object(s.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){u()({url:"https://api.unsplash.com/photos/random/?client_id=yvDbdmzH9jwPVA3lUMj6GkzZhssWbnnjYUBj0jyWMHc"}).then((function(e){i(e.data.urls.full)})).catch(console.error)}),[]),r.a.createElement("div",{className:"app",style:{backgroundImage:"url(".concat(o,")")}},t)},m=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],m=i[1];return Object(a.useEffect)((function(){u()({url:"http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=6e50bcfc9824d701e06f39dfd8668779"}).then((function(e){c(e.data.weather[0].main),m(e.data.main.temp)})).catch(console.error)}),[]),r.a.createElement("div",{className:"weather"},r.a.createElement("div",{className:"container weather-container"},function(e){var t=e.toLowerCase();return"clear"===t?"\u2600":"rain"===t?"\ud83c\udf27":"storm"===t?"\u26c8":"snow"===t?"\ud83c\udf28":"mist"===t?"\ud83c\udf2b":"clouds"===t?"\u2601":""}(n)," ",l,"\xb0C"),r.a.createElement("div",{className:"container weather-container"},"Riyadh"))},d=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],m=i[1];return Object(a.useEffect)((function(){u()({url:"https://quotes.rest/qod"}).then((function(e){return c(e.data.contents.quotes[0].quote),e})).then((function(e){return m(e.data.contents.quotes[0].author)})).catch(console.error)}),[]),r.a.createElement("div",{className:"quote"},'"',n,'" - ',l)},h=n(4),f=n.n(h);n(39);var p=function(){return r.a.createElement(l,null,r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"time-and-greeting"},r.a.createElement("p",{className:"time"},f()().format("LT")),"Good ",function(){var e=f()().format("LT"),t=e.charAt(0),n=parseInt(t);return e.includes("AM")?n>2&&n<12?"morning":12===n?"afternoon":"night":n<5?"afternoon":n>=5&&n<9?"evening":"night"}(),"!"),r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.af955303.chunk.js.map