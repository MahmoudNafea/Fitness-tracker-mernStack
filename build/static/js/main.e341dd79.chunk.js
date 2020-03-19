(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),i=(a(61),a(17)),s=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(i.b,{to:"/",className:"navbar-brand"},"ExerciseTracker"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/user",className:"nav-link"},"Create User")))))},l=a(23),u=a(18),m=a(19),h=a(21),d=a(20),p=a(5),b=a(22),E=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.name),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(i.b,{to:"".concat("https://fitness-mearn-app.herokuapp.com","/edit/")+e.exercise._id},"Edit")," |",r.a.createElement("button",{onClick:function(){e.deleteExercise(e.exercise._id)}},"Delete")))},g=a(10),v=a.n(g);a(33).config();var f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={exercises:[]},a.deleteExercise=a.deleteExercise.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://fitness-mearn-app.herokuapp.com","/exercise")).then((function(t){e.setState({exercises:t.data})})).catch((function(e){return console.log(e)}))}},{key:"deleteExercise",value:function(e){v.a.delete("".concat("https://fitness-mearn-app.herokuapp.com","/")+e).then((function(e){return console.log(e.data)})),this.setState((function(t){return{exercises:t.exercises.filter((function(t){return t._id!==e}))}}))}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return r.a.createElement(E,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),t}(n.Component),C=a(35),N=a.n(C);a(71);a(33).config();var k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:"",duration:0,date:new Date,users:[]},a.onChangeName=a.onChangeName.bind(Object(p.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(p.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(p.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://fitness-mearn-app.herokuapp.com","/exercise/")+this.props.match.params.id).then((function(t){e.setState({name:t.data.name,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log("error"+e)})),v.a.get("".concat("https://fitness-mearn-app.herokuapp.com","/users/")).then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.name}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),v.a.post("".concat("https://fitness-mearn-app.herokuapp.com","/update/")+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="http://localhost:3000/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise "),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(N.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component);a(33).config();var D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:"",duration:"",date:new Date,users:[]},a.onChangeName=a.onChangeName.bind(Object(p.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(p.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(p.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://fitness-mearn-app.herokuapp.com","/users")).then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.name})),name:t.data[0].name})})).catch((function(e){return console.log(e)}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),v.a.post("".concat("https://fitness-mearn-app.herokuapp.com","/exercise/add"),t).then((function(e){return console.log(e.data)})),window.location="http://localhost:3000/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e}," ",e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes)"),r.a.createElement("input",{type:"number",required:!0,className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date"),r.a.createElement("div",null,r.a.createElement(N.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise",className:"btn btn-primary"}))))}}]),t}(n.Component);a(33).config();var x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={username:""},a.onChangeUsername=a.onChangeUsername.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.username};console.log(t),v.a.post("".concat("https://fitness-mearn-app.herokuapp.com","/users/add"),t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create User"))))}}]),t}(n.Component);var y=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(s,null),r.a.createElement(l.a,{path:"/",exact:!0,component:f}),r.a.createElement(l.a,{path:"/edit/:id",component:k}),r.a.createElement(l.a,{path:"/create",component:D}),r.a.createElement(l.a,{path:"/user",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,t,a){e.exports=a(163)}},[[79,1,2]]]);
//# sourceMappingURL=main.e341dd79.chunk.js.map