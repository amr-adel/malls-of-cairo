(this["webpackJsonpmalls-of-cairo"]=this["webpackJsonpmalls-of-cairo"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(19),a(1)),i=a(2),s=a(4),d=a(3),f=a(5),u=a(9),m=a.n(u),p=function(e){var t,a=e.mall,n=e.setSelected,o=e.isSelected,l=function(){o||n(a)},c=function(e){if(e.response.venue){var t=e.response.venue,a=t.bestPhoto,n=t.name,r=t.ratingColor,o=t.rating,l=t.location,c=t.likes,i=t.canonicalUrl,s=t.id,d='\n                <img class="photo" src="'.concat(a?"".concat(a.prefix,"500x300").concat(a.suffix):m.a,'" alt="').concat(n,'" onload="this.parentElement.parentElement.scrollIntoView({behavior: \'smooth\'})">\n                ').concat(o?'<div class="rating" style="color: #'.concat(r,';">').concat(o,"</div>"):"",'\n                <div class="address"><svg><use xlink:href="./icons.svg#marker"></use></svg>').concat(l.formattedAddress[0],'</div>\n                <div class="status"><svg><use xlink:href="./icons.svg#like"></use></svg>Liked by ').concat(c.count,' user</div>\n                <a class="link" href="').concat(i,'" target="_blank" rel="noopener noreferrer">More on FourSquare<svg><use xlink:href="./icons.svg#link"></use></svg></a>\n            ');document.querySelector("#fs".concat(s," .details")).innerHTML=d}else alert("Unable to get details from FourSquare (".concat(e.meta.errorDetail,")"))};return o&&(t=a.id,fetch("https://api.foursquare.com/v2/venues/".concat(t,"?client_id=N0UR5Z3XKXDNY4GWMBV4H4J0VZIHDCKLUZIZ0U4RBNLAE1CG&client_secret=LVDZ0NKPQVY1SMUFSVJJT02ARZOJXWUFMIJ1AZ0ACSLMKNHR&v=20180620")).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return alert("Unable to get data from FourSquare (".concat(e,")"))}))),r.a.createElement("li",{className:"place".concat(o?" selected":""),role:"button",tabIndex:"0",id:"fs".concat(a.id),onClick:function(e){return l()},onKeyPress:function(e){return l()}},r.a.createElement("h4",{className:"name"},a.name),r.a.createElement("span",{className:"close","aria-label":"Close",role:"button",tabIndex:"0",onClick:function(e){return n(null)}},"X"),r.a.createElement("div",{className:"details"},"Loading mall details..."))},g=function(e){var t=e.filteredList,a=e.filterList,n=e.selectedId,o=e.setSelected;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",className:"filter",placeholder:"Filter Places","aria-label":"Filter",onChange:function(e){return a(e.target.value)}}),r.a.createElement("ol",{className:"places"},t.length>0?t.map((function(e){return r.a.createElement(p,{key:e.id,mall:e,setSelected:o,isSelected:e.id===n})})):r.a.createElement("li",{className:"place",key:"no-match"},r.a.createElement("h4",{className:"name"},"Unfortunately, your keyword doesn't match any of the listed malls."))))},h=function(){return r.a.createElement("footer",{className:"footer",id:"footer"},r.a.createElement("div",{className:"footer__follow"},r.a.createElement("a",{href:"https://twitter.com/fullstackamr/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"./icons.svg#twitter"}))),r.a.createElement("a",{href:"https://github.com/amr-adel/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"./icons.svg#github"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/amr-abdelmoez/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"./icons.svg#linkedin"}))),r.a.createElement("a",{href:"https://codepen.io/amr-adel/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"./icons.svg#codepen"})))))},v=function(e){return r.a.createElement("section",{className:"sidebar"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("h1",null,r.a.createElement("svg",{className:"logo"},r.a.createElement("use",{xlinkHref:"./icons.svg#bag"}))))),r.a.createElement(g,e),r.a.createElement(h,null))},b=a(6),I=a.n(b),y=a(10),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={bounds:null,markers:[]},a.updateMarkers=function(e,t){var n=a.state.markers,r=a.props,o=r.map,l=r.setSelected,c=window.google.maps;if(!n.length){var i=[];e.forEach((function(e){var t,a={lat:e.location.lat,lng:e.location.lng};t=new c.Marker({position:a,animation:c.Animation.DROP,map:o,id:e.id});var n=new c.InfoWindow({content:"<h4>".concat(e.name,"</h4>")});t.addListener("click",(function(){return l(e)})),t.addListener("mouseover",(function(){return n.open(o,t)})),t.addListener("mouseout",(function(){return n.close()})),i.push(t)})),a.setState({markers:i})}var s=e.map((function(e){return e.id})),d=t.map((function(e){return e.id}));if(e.length<t.length){var f=d.filter((function(e){return-1===s.indexOf(e)}));n.forEach((function(e){-1!==f.indexOf(e.id)&&e.setMap(null)}))}else if(e.length>t.length){var u=s.filter((function(e){return-1===d.indexOf(e)}));n.forEach((function(e){-1!==u.indexOf(e.id)&&e.setMap(o)}))}},a.fitBounds=function(){var e=Object(y.a)(I.a.mark((function e(t){var n,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.google.maps,r=a.props.map,e.next=4,new n.LatLngBounds;case 4:o=e.sent,a.setState({bounds:o}),t.forEach((function(e){var t={lat:e.location.lat,lng:e.location.lng};a.state.bounds.extend(t)})),r.fitBounds(a.state.bounds),r.setCenter(a.state.bounds.getCenter());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.recenterMap=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lat:30.0444,lng:31.2357},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:11,n=a.props.map;n.setZoom(t),n.setCenter(e)},a.activateMarker=function(e){e.setAnimation(1),a.recenterMap(e.position,15)},a.deactivateMarker=function(e){e.setAnimation(5)},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this,a=window.google.maps,n=this.props,r=n.filteredList,o=n.setSelected,l=n.selectedId,c=n.map,i=this.state.markers;if(a&&c){if(r.length!==e.filteredList.length)switch(this.updateMarkers(r,e.filteredList),r.length){case 0:this.recenterMap();break;case 1:o(r[0]);break;default:this.fitBounds(r)}l!==e.selectedId&&(null!==l?i.forEach((function(e){e.id===l?t.activateMarker(e):t.deactivateMarker(e)})):(i.forEach((function(e){return t.deactivateMarker(e)})),r.length>1&&this.fitBounds(r)))}}},{key:"render",value:function(){return r.a.createElement("div",{id:"map",role:"application","aria-roledescription":"map for malls list"},"Loading map...")}}]),t}(n.Component),w={malls:[{name:"Mall of Arabia",gmapId:"ChIJeZAyaVFXWBQRD4a_Vq4vVvg",coor:{lat:30.0062993,lng:30.97348050000005},fsId:"4e64d41e483bd9a975557768"},{name:"Cairo Festival City Mall",gmapId:"ChIJYQYFKvE8WBQRIJRXhDyYEYE",coor:{lat:30.0319579,lng:31.408473100000037},fsId:"5268f5d2498ee025c2cb6794"},{name:"Downtown Mall",gmapId:"ChIJ98iK8-88WBQR_RBD6r2sO2A",coor:{lat:30.0174272,lng:31.412420500000053},fsId:"4d5d3a959ac9a09369027994"},{name:"Americana Plaza",gmapId:"ChIJ4wWsX2paWBQRGPkCKzwfhy0",coor:{lat:30.0275716,lng:31.013195600000017},fsId:"507d61dfe4b087a6ab444d33"},{name:"Citystars Mall",gmapId:"ChIJo0ecE_gVWBQRGGrouhZFdME",coor:{lat:30.072979,lng:31.34604999999999},fsId:"4b853e48f964a520845231e3"},{name:"Sun City Mall",gmapId:"ChIJmVTb2UUWWBQRjnpeYIqBncQ",coor:{lat:30.102616,lng:31.38614480000001},fsId:"53e0e485498e46a6b3609b09"},{name:"Mall Of Egypt",gmapId:"ChIJGfFdneZQWBQRoFxwQ5okV14",coor:{lat:29.9722532,lng:31.017524399999957},fsId:"519dcd44498e2ebd18d8e1d2"},{name:"First Mall",gmapId:"ChIJnQUHZCdHWBQRDaAJ6j1aog0",coor:{lat:30.0242101,lng:31.217196400000034},fsId:"4c72eb0457b6a143e8d1c6cc"},{name:"Nile City Towers",gmapId:"ChIJUTumGvpAWBQRdeaHrFtl1HM",coor:{lat:30.0715475,lng:31.22782559999996},fsId:"4ce9181ae888f04d3e2f466b"},{name:"Porto Cairo Mall",gmapId:"ChIJ5_bMsF89WBQRM7-YOesuHM8",coor:{lat:30.0644511,lng:31.42453690000002},fsId:"4fb8a611e4b04abc0c11d4bc"},{name:"Genena Mall",gmapId:"ChIJa_i0F2g-WBQRr7xwkbhUzpw",coor:{lat:30.0610462,lng:31.3299931},fsId:"4c4bedd8712ac9282981976d"},{name:"Arkadia Mall",gmapId:"ChIJNXz3ZvpAWBQRtbdRovhD6aQ",coor:{lat:30.069613349999997,lng:31.227202691153604},fsId:"50dc283de4b057fecdd1e610"},{name:"Tiba Outlet Mall",gmapId:"ChIJj1eMyEE-WBQRqOFFesZ-c7o",coor:{lat:30.06734595,lng:31.32987509169704},fsId:"4e31e68cb0fbb985a508ee47"},{name:"Cairo Mall",gmapId:"ChIJAQAAAJxFWBQRCmuO5k3gAb8",coor:{lat:29.9986787,lng:31.1735371},fsId:"4e725f2f183821b8cc96fdac"},{name:"Talaat Harb Mall",gmapId:"ChIJb1BvepVAWBQRY6OnzlEYbZI",coor:{lat:30.05016095,lng:31.239893859811517},fsId:"4ec14a6b5c5c3d470d610538"},{name:"City Center Mall",gmapId:"ChIJw4AoL3I-WBQRzql0xs_BnNs",coor:{lat:30.0683421,lng:31.3446867},fsId:"4bd9d7493904a5936cd4439e"},{name:"Maadi City Center",gmapId:"ChIJa31qzKhHWBQR9KlOjzqX0iM",coor:{lat:29.9825607,lng:31.3162377},fsId:"4c421543a48d9c7418c70c40"},{name:"Maadi Grand Mall",gmapId:"ChIJESyQo3M4WBQRz5lXBs5ZO5o",coor:{lat:29.964932,lng:31.2679123},fsId:"4bcb02fdcc8cd13ab88abecf"},{name:"Dandy Mall",gmapId:"ChIJ3QwL3qNbWBQR9nQCXPvj5Z0",coor:{lat:30.0633801,lng:31.0255163},fsId:"4b743b8bf964a520b9ce2de3"},{name:"Zizinia Mall",gmapId:"ChIJBYbSBnhGWBQRlRQgkTWllls",coor:{lat:29.9981988,lng:31.1690108},fsId:"55081363498ed14f195a8b16"}],mapStyles:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"},{color:"#e6d7c5"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7fc1d3"}]}]},E=a(11),C=(a(25),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={malls:[],filteredList:[],selected:null},a.filterList=function(e){a.setState({filteredList:a.state.malls.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.trim().toLowerCase())})),selected:null})},a.setSelected=function(e){a.setState({selected:e})},a.AsyncHOCCallback=function(){if(window.google){var e=new window.google.maps.Map(document.getElementById("map"),{zoom:11,center:{lat:30.0444,lng:31.2357},styles:w.mapStyles,disableDefaultUI:!0});a.setState({map:e})}},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.foursquare.com/v2/venues/search?near=cairo&categoryId=4bf58dd8d48988d1fd941735&client_id=N0UR5Z3XKXDNY4GWMBV4H4J0VZIHDCKLUZIZ0U4RBNLAE1CG&client_secret=LVDZ0NKPQVY1SMUFSVJJT02ARZOJXWUFMIJ1AZ0ACSLMKNHR&v=20191020").then((function(e){return e.json()})).then((function(t){e.setState({malls:t.response.venues,filteredList:t.response.venues})})).catch((function(e){return alert("Unable to get data from FourSquare (".concat(e,")"))}))}},{key:"render",value:function(){var e=this.state,t=e.filteredList,a=e.selected,n=e.map,o=a?a.id:null;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{filterList:this.filterList,setSelected:this.setSelected,selectedId:o,filteredList:t}),r.a.createElement(M,{asyncScriptOnLoad:this.AsyncHOCCallback,setSelected:this.setSelected,selectedId:o,filteredList:t,map:n}))}}]),t}(n.Component)),M=Object(E.a)("https://maps.googleapis.com/maps/api/js?key=AIzaSyCA5F0pGoVUQo0ZTtUInz6Kd_XfmOW3rAI")(k),B=C,L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/malls-of-cairo",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/malls-of-cairo","/service-worker.js");L?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()},9:function(e,t,a){e.exports=a.p+"static/media/fs_fallback.69fea0a0.jpg"}},[[14,1,2]]]);
//# sourceMappingURL=main.8f94cf2f.chunk.js.map