(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{261:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},278:function(e,t,n){e.exports=n(596)},283:function(e,t,n){},284:function(e,t,n){},287:function(e,t,n){},317:function(e,t){},319:function(e,t){},351:function(e,t){},352:function(e,t){},421:function(e,t){},596:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(4),c=n.n(s),r=(n(283),n(31)),i=n(32),l=n(34),u=n(33),h=n(35),m=n(261),p=n.n(m),d=(n(284),n(285),n(286),n(601)),E=n(603),g=(n(287),n(105),n(303),n(105)),b=n(106),f={method:"GET",url:"https://cors-anywhere.herokuapp.com/https://data.edmonton.ca/download/7qed-k2fc/application%2Foctet-stream",encoding:null,app_token:"rCmWZj0urjkTW2OGXJeIga9kS",header:"access-control-allow-origin"},y={method:"GET",url:"https://data.edmonton.ca/resource/ctwr-tvrd.json?$select=trip_id,route_id&$order=route_id ",app_token:"rCmWZj0urjkTW2OGXJeIga9kS",limit:5e3},k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={busState:{},busNumbers:{}},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getContent",value:function(){var e={},t=[];b(f,function(n,a,o){if(!n&&200===a.statusCode){var s=g.transit_realtime.FeedMessage.decode(o);s.entity.forEach(function(e){t.push(e.vehicle.trip.tripId)}),e=s}}),this.getTrips(t),this.setState({busState:e})}},{key:"getTrips",value:function(e){var t={};b(y,function(n,a,o){n||200!==a.statusCode||JSON.parse(o).forEach(function(n){n.trip_id in e&&(t[n.trip_id]=n.route_id)})}),this.setState({busNumbers:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(E.a,{className:"lol",type:"primary",shape:"round",onClick:function(){e.getContent()}},"GET GTFS")),o.a.createElement("li",null,o.a.createElement(E.a,{type:"primary",shape:"round",onClick:function(){e.getTrips()}},"Trip Updates"))))}}]),t}(a.Component),v=(n(260),n(67)),w=n(58),j=Object(v.b)({accessToken:"pk.eyJ1IjoiYXBhZXRzY2giLCJhIjoiY2p3czk5ZWZyMGNzczRhbzhpdjV1NjM0YyJ9.l5Hitn6UuOWC5DoIEl5KHg"}),C=(n(105),n(106),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={busData:[]},n.contentd=o.a.createElement(j,{style:"mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7",containerStyle:{width:"85vw",height:"90vh"},center:n.props.center},o.a.createElement("div",null,o.a.createElement(v.a,{coordinates:[-113.5054,53.5372],anchor:"bottom"},o.a.createElement(w.a,{type:"environment",theme:"twoTone"})))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){console.log(e.busState),console.log(t)}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.setState({busData:[]})}},{key:"getBusses",value:function(){var e=this.props.getContent();this.setState({busData:e})}},{key:"render",value:function(){var e=this.state.busData.map(function(e,t){return o.a.createElement(v.a,{id:t,coordinates:[e.lat,e.long],anchor:"bottom"},o.a.createElement(w.a,{type:"environment",theme:"twoTone"}))});return console.log(e),o.a.createElement("div",null,o.a.createElement(j,{style:"mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7",containerStyle:{width:"85vw",height:"90vh"},center:this.props.center},o.a.createElement("div",null,o.a.createElement(v.a,{coordinates:[-113.5054,53.5372],anchor:"bottom"},o.a.createElement(w.a,{type:"environment",theme:"twoTone"})),e)))}}]),t}(a.Component)),O=Object(v.b)({accessToken:"pk.eyJ1IjoiYXBhZXRzY2giLCJhIjoiY2p3czk5ZWZyMGNzczRhbzhpdjV1NjM0YyJ9.l5Hitn6UuOWC5DoIEl5KHg"}),T=(n(106),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{style:"mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7",containerStyle:{width:"85vw",height:"90vh"},center:this.props.center}))}}]),t}(a.Component)),S=n(602),B=n(604),H=S.b.ItemGroup,I=(S.b.ItemGroup,S.b.SubMenu),M=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).menuKeys=["busfxn"],n.busFiltersMenu=o.a.createElement(H,{title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"filter"}),"Filters")},o.a.createElement(S.b.Item,{key:"F1"},o.a.createElement(B.a,{onChange:n.onChange}),o.a.createElement("span",null,"Some function to the Bus Map"))),n.testButtonsMenu=o.a.createElement(H,{title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"control"}),"Test Buttons")},o.a.createElement(S.b.Item,{key:"T1"},o.a.createElement(B.a,{onChange:n.onChange}),o.a.createElement("span",null,"Test Checkbox")),o.a.createElement(S.b.Item,{key:"T2"},o.a.createElement("span",null,"Test Button"))),n.houseMenu=o.a.createElement(H,{title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"home"}),"Home Buttons")},o.a.createElement(S.b.Item,{key:"H1"},o.a.createElement("span",null,"Test House"))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){console.log("checked = ${e.target.checked}")}},{key:"render",value:function(){return o.a.createElement(S.b,{mode:"inline",openKeys:this.props.openKeys,onOpenChange:this.props.onOpenChange,theme:"dark"},o.a.createElement(I,{key:"busfxn",disabled:!this.props.bus,title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"car"}),o.a.createElement("span",null,"Bus Functions"))},this.busFiltersMenu),o.a.createElement(I,{key:"housefxn",disabled:!this.props.housing,title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"home"}),o.a.createElement("span",null,"House Map Functions"))},this.houseMenu),o.a.createElement(I,{key:"testfxn",disabled:!this.props.test,title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"experiment"}),"Tests")},this.testButtonsMenu))}}]),t}(a.Component),z=S.b.ItemGroup,x=S.b.SubMenu,W=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).homeButton=o.a.createElement(S.b.Item,{style:{width:215},onClick:function(){n.props.showPage("Home")}},o.a.createElement("span",null,o.a.createElement(w.a,{type:"home"}),"Home")),n.edmviz=o.a.createElement(x,{key:"viz1",title:o.a.createElement("span",null,o.a.createElement(w.a,{type:"pie-chart"}),o.a.createElement("span",null,"Edmonton Visulizations")),placement:"bottomleft"},o.a.createElement(z,{title:"Bus Map Page"},o.a.createElement(S.b.Item,{onClick:function(){n.props.showPage("Bus")}},o.a.createElement(w.a,{type:"global"})," Bus Map")),o.a.createElement(z,{title:"Housing Map Page"},o.a.createElement(S.b.Item,{onClick:function(){n.props.showPage("House")}},o.a.createElement(w.a,{type:"home"}),"House Map")),o.a.createElement(z,{title:"Testing"},o.a.createElement(S.b.Item,{onClick:function(){n.props.showPage("Test")}},o.a.createElement(w.a,{type:"loading"}),"Test"))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(S.b,{onClick:this.handleClick,mode:"horizontal",theme:"dark"},this.homeButton,this.edmviz)}}]),t}(a.Component),_=(n(595),d.a.Header),G=d.a.Content,K=d.a.Sider,J={method:"GET",url:"https://cors-anywhere.herokuapp.com/https://data.edmonton.ca/download/7qed-k2fc/application%2Foctet-stream",encoding:null,app_token:"rCmWZj0urjkTW2OGXJeIga9kS",header:"access-control-allow-origin"},N={method:"GET",url:"https://data.edmonton.ca/resource/ctwr-tvrd.json?$select=trip_id,route_id&$order=route_id ",app_token:"rCmWZj0urjkTW2OGXJeIga9kS",limit:5e3},F=n(105),P=n(106),Z=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).menuKeys=[],n.showPage=function(e){n.setState({showTest:!1,showHome:!1,showHouse:!1,showBus:!1}),"Test"===e?n.setState({showTest:!0}):"Home"===e?n.setState({showHome:!0}):"House"===e?n.setState({showHouse:!0}):"Bus"===e&&(n.getBusContent(),n.setState({showBus:!0})),n.clearKeys()},n.onOpenChange=function(e){var t=e.find(function(t){return-1===e.indexOf(t)});-1===n.menuKeys.indexOf(t)?n.setState({openKeys:e}):n.setState({openKeys:t?[t]:[]})},n.handleClick=function(e){console.log("click ",e)},n.logo=o.a.createElement("div",{className:"logoStyle"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),n.state={edmontonCenter:[-113.5054,53.5372],showTest:!1,showHome:!0,showBus:!1,showHouse:!1,openKeys:[],checkedBoxes:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"clearKeys",value:function(){this.setState({openKeys:[]})}},{key:"onChange",value:function(e){console.log("checked = ${e.target.checked}")}},{key:"getBusContent",value:function(){var e=[];return P(J,function(t,n,a){t||200!==n.statusCode||F.transit_realtime.FeedMessage.decode(a).entity.forEach(function(t){var n={};n.id=t.id,n.tripId=t.vehicle.trip.tripId,n.lat=t.vehicle.position.latitude,n.long=t.vehicle.position.longitude;try{n.speed=t.vehicle.position.speed}catch(a){n.speed=0}try{n.bearing=t.vehicle.position.bearing}catch(a){n.bearing=null}e.push(n)})}),console.log("here is the edited data",e),e}},{key:"getBusTrips",value:function(){var e={};return P(N,function(t,n,a){t||200!==n.statusCode||JSON.parse(a).forEach(function(t){e[t.trip_id]=t.route_id})}),e}},{key:"render",value:function(e){var t;return this.state.showHome?this.state.showHome&&(t=this.logo):this.state.showTest?t=o.a.createElement(k,{showPage:this.showPage}):this.state.showBus?t=o.a.createElement(C,{center:this.state.edmontonCenter,getContent:this.getBusContent}):this.state.showHouse&&(t=o.a.createElement(T,null)),o.a.createElement(d.a,null,o.a.createElement(_,{style:{position:"fixed",zIndex:1,width:"100%",padding:"0px",background:"#282c34",height:0}},o.a.createElement(W,{ref:this.topmenu,showPage:this.showPage})),o.a.createElement(d.a,null,o.a.createElement(K,{className:"sm"},o.a.createElement(M,{ref:this.sidemenu,home:this.state.showHome,bus:this.state.showBus,test:this.state.showTest,housing:this.state.showHouse,openKeys:this.state.openKeys,onOpenChange:this.onOpenChange})),o.a.createElement(G,{style:{background:"#282c34",padding:"15px",margin:"45px 0 0 0",minHeight:"100vh"}},t)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[278,1,2]]]);
//# sourceMappingURL=main.b31cdad2.chunk.js.map