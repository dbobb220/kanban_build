(window.webpackJsonpkanban=window.webpackJsonpkanban||[]).push([[0],{154:function(e,t,a){e.exports=a.p+"static/media/kanban_home.fa3da3de.png"},162:function(e,t,a){e.exports=a(515)},172:function(e,t,a){},173:function(e,t,a){},361:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(44),o=a.n(i),s=a(53),c=a.n(s),l=a(45),u=a(27),d=a(28),m=a(31),h=a(29),p=a(18),g=a(30),E=a(522),f=a(524),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(l.a)({},n,a))}},{key:"onSubmit",value:function(e){var t={username:this.state.username,password:this.state.password};this.props.userLoading(!0),this.props.userLogin(t),this.props.userLoading(!1)}},{key:"render",value:function(){return r.a.createElement(E.a,{className:"login"},r.a.createElement(E.a.Group,{controlId:"loginUsername"},r.a.createElement(E.a.Control,{name:"username",type:"text",placeholder:"Enter username",onChange:this.handleChange})),r.a.createElement(E.a.Group,{controlId:"loginPassword"},r.a.createElement(E.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement(f.a,{variant:"secondary",onClick:this.onSubmit},"Login"))}}]),t}(n.Component),v=a(12),y=function(e,t){return{type:"USER_ERROR",hasErrored:e,message:t}},C=function(e){return{type:"USER_LOADING",isLoading:e}},b=function(e){return{type:"USER_SUCCESS",token:e}},T=Object(v.b)((function(e){return{userLoading:e.userLoading,userErrored:e.userErrored,user:[]}}),(function(e){return{userLogin:function(t){return e(function(e){return function(t){console.log("user is logging in"),fetch("/api/session",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error?t(y(!0,e.error)):t(b(e))}))}}(t))},userLoading:function(t){return e(C(t))},userError:function(t){return e(y(t))}}}))(k),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={name:"",username:"",password:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(l.a)({},n,a))}},{key:"onSubmit",value:function(e){var t={name:this.state.name,username:this.state.username,password:this.state.password};this.props.userLoading(!0),this.props.userSignup(t),this.props.userLoading(!1)}},{key:"render",value:function(){return r.a.createElement(E.a,{className:"signup"},r.a.createElement(E.a.Group,{controlId:"signupEmail"},r.a.createElement(E.a.Control,{name:"name",type:"name",placeholder:"Name",onChange:this.handleChange})),r.a.createElement(E.a.Group,{controlId:"signupUsername"},r.a.createElement(E.a.Control,{name:"username",type:"text",placeholder:"Username",onChange:this.handleChange})),r.a.createElement(E.a.Group,{controlId:"signupPassword"},r.a.createElement(E.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement(f.a,{variant:"primary",style:{textAlign:"right"},onClick:this.onSubmit},"Sign Up"))}}]),t}(n.Component),O=Object(v.b)((function(e){return{userLoading:e.userLoading,userErrored:e.userErrored,user:[]}}),(function(e){return{userSignup:function(t){return e(function(e){return console.log(e),console.log("user is signing up"),function(t){fetch("/api/users",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error?t(y(!0,e.error)):t(b(e))}))}}(t))},userLoading:function(t){return e(C(t))},userError:function(t){return e(y(t))}}}))(S),A=(a(172),a(154)),L=a.n(A),w=function(e){return r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"promo"},r.a.createElement("h2",null,"A virtual project management board"),r.a.createElement("img",{src:L.a})),r.a.createElement("section",{className:"auth"},r.a.createElement("div",null,r.a.createElement(T,null)),r.a.createElement("div",{className:"create_acc"},r.a.createElement("h4",null,"Don't have an account?"),r.a.createElement("h5",null,"Create one below to get started:"),r.a.createElement(O,null))))},j=(a(173),a(101),a(54)),N=a(523),D=a(521),I=(a(361),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,r=t.name;"type"===r?a.setState({type:n,color:a.colorType[n]}):a.setState(Object(l.a)({},r,n))},a.state={title:"",id:"",description:"",category:"",type:"",status:"",color:"",assignee:null,priority:3},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.colorType={Bug:"danger",Feature:"success",TechDebt:"warning",Improvement:"primary",Research:"info"},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onSubmit",value:function(e){var t=this.state;this.props.fetchLoading(!0),this.props.fetchPut("/tasks/".concat(e),t),this.props.fetchLoading(!1),this.props.closeAside(!1)}},{key:"onDelete",value:function(e,t){this.props.fetchLoading(!0),this.props.updateStatus(e,t),this.props.fetchLoading(!1),this.props.closeAside(!1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"edit-task"},r.a.createElement(N.a,{style:{width:"180px",height:"110px"},bg:"light",text:"dark"},r.a.createElement(N.a.Header,null,r.a.createElement(N.a.Title,null,this.state.title),r.a.createElement(D.a,{pill:!0,variant:this.state.color},this.state.category)),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Text,null,this.state.description)),r.a.createElement(N.a.Footer,{className:"text-muted"})),r.a.createElement(E.a,null,r.a.createElement(E.a.Group,{controlId:"taskTitle"},r.a.createElement(E.a.Label,null,"Title"),r.a.createElement(E.a.Control,{required:!0,type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement(E.a.Group,{controlId:"taskCategory"},r.a.createElement(E.a.Label,null,"Category"),r.a.createElement(E.a.Control,{required:!0,type:"text",name:"category",value:this.state.category,onChange:this.handleChange})),r.a.createElement(E.a.Group,{controlId:"taskDescription"},r.a.createElement(E.a.Label,null,"Description"),r.a.createElement(E.a.Control,{required:!0,as:"textarea",rows:"3",name:"description",value:this.state.description,onChange:this.handleChange})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Type"),r.a.createElement(E.a.Control,{required:!0,as:"select",name:"type",value:this.state.type,onChange:this.handleChange},r.a.createElement("option",{value:"- Select One -",disabled:!0},"- Select One -"),r.a.createElement("option",{id:"danger",value:"Bug"},"Bug"),r.a.createElement("option",{id:"success",value:"Feature"},"Feature"),r.a.createElement("option",{id:"warning",value:"TechDebt"},"Tech Debt"),r.a.createElement("option",{id:"primary",value:"Improvement"},"Improvement"),r.a.createElement("option",{id:"info",value:"Research"},"Research")))),r.a.createElement("div",{className:"buttons"},r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:function(){e.onSubmit(e.state.id)}},"Submit"),r.a.createElement(f.a,{variant:"danger",type:"submit",onClick:function(){e.onDelete(e.state.id,"isDeleted")}},"Delete")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.editTask._id!==t.id?{title:e.editTask.title,id:e.editTask._id,description:e.editTask.description,category:e.editTask.category,type:e.editTask.type,status:e.editTask.status,color:e.editTask.color}:null}}]),t}(n.Component)),_=function(e){return{type:"FETCH_LOADING",isLoading:e}},x=function(e,t){return function(a){fetch(e,t).then((function(e){return e.json()})).then((function(e){a(function(e){return{type:"FETCH_SUCCESS",tasks:e}}(e))})).catch((function(e){return a(function(e,t){return{type:"FETCH_ERROR",hasErrored:e,message:t}}(!0,e))}))}},R=function(e){return{type:"ASIDE_CONTENT",asideContainer:e}},B=Object(v.b)((function(e){return{editTask:e.editTask,tasks:e.tasks,hasErrored:e.hasErrored,isLoading:e.isLoading,asideContainer:e.asideContainer,asideActive:e.asideActive}}),(function(e){return{fetchCall:function(t){return e(x(t))},fetchLoading:function(t){return e(_(t))},closeAside:function(){return e({type:"CLOSE_ASIDE",asideActive:!1})},fetchPut:function(t,a){return e(function(e,t){return function(a){fetch(e,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.text()})).then((function(e){console.log(e),a(x("/tasks"))})).catch((function(e){return console.log("Error:".concat(e))}))}}(t,a))},updateStatus:function(t,a){return e(function(e,t){return function(a){var n={status:t};fetch("/tasks/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.text()})).then((function(e){return a(x("/tasks"))})).catch((function(e){return console.log("Error:".concat(e))}))}}(t,a))}}}))(I);var F=function(e){var t=function(t,a){e.fetchLoading(!0);var n={status:a};fetch("/tasks/".concat(t),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),e.fetchCall("/tasks"),e.fetchLoading(!1)},a=function(t){var a=e.tasks.find((function(e){return e._id===t}));e.editClick(a),e.changeAside([""]),e.changeAside(r.a.createElement(B,null)),e.openAside(!0)},n=[];switch(!0){case"isBacklog"===e.status:n=[r.a.createElement("span",{className:"material-icons",title:"Edit",key:"Edit",onClick:function(){a(e.taskId)}},"edit"),r.a.createElement("span",{className:"material-icons",title:"Activate",key:"Activate",onClick:function(){t(e.taskId,"isActive")}},"add")];break;case"isActive"===e.status:n=[r.a.createElement("span",{className:"material-icons",title:"Edit",key:"Edit",onClick:function(){a(e.taskId)}},"edit"),r.a.createElement("div",{key:"Action"},r.a.createElement("span",{className:"material-icons",title:"Backlog",key:"Backlog",onClick:function(){t(e.taskId,"isBacklog"),console.log(e.taskId,"isDone")}},"thumb_down"),r.a.createElement("span",{className:"material-icons",title:"Done",key:"Done",onClick:function(){t(e.taskId,"isDone"),console.log(e.taskId,"isDone")}},"thumb_up"))];break;case"isDone"===e.status:n=[r.a.createElement("span",{className:"material-icons",title:"Edit",key:"Edit",onClick:function(){a(e.taskId)}},"edit"),r.a.createElement("div",{key:"Action"},r.a.createElement("span",{className:"material-icons",title:"Reject",onClick:function(){t(e.taskId,"isActive")}},"close"),r.a.createElement("span",{className:"material-icons",title:"Accept",onClick:function(){t(e.taskId,"isArchive")}},"check"))]}return r.a.createElement(N.a,{style:{width:"180px",height:"110px",margin:"2px"},bg:e.bgcolor,text:e.textColor},r.a.createElement(N.a.Header,null,r.a.createElement(N.a.Title,null,e.title),r.a.createElement(D.a,{pill:!0,variant:e.color},e.category)),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Text,null,e.description)),r.a.createElement(N.a.Footer,{className:"text-muted"},n))},G=Object(v.b)((function(e){return{tasks:e.tasks}}),(function(e){return{fetchCall:function(t){return e(x(t))},fetchLoading:function(t){return e(_(t))},editClick:function(t){return e(function(e){return{type:"EDIT_CLICK",editTask:e}}(t))},openAside:function(){return e({type:"OPEN_ASIDE",asideActive:!0})},changeAside:function(t){return e(R(t))}}}))(F),P=function(e){var t=[],a=[],n=[];return e.tasks.map((function(e,i){switch(!0){case"isBacklog"===e.status:t.push(r.a.createElement(G,{taskId:e._id,title:e.title,category:e.category,description:e.description,key:i,bgcolor:"light",textColor:"dark",color:e.color,status:e.status}));break;case"isActive"===e.status:a.push(r.a.createElement(G,{taskId:e._id,title:e.title,category:e.category,description:e.description,key:i,bgcolor:"light",textColor:"dark",color:e.color,status:e.status}));break;case"isDone"===e.status:n.push(r.a.createElement(G,{taskId:e._id,title:e.title,category:e.category,description:e.description,key:i,bgcolor:"light",textColor:"dark",color:e.color,status:e.status}))}})),r.a.createElement(j.Row,null,r.a.createElement(j.Col,null,r.a.createElement("h3",null,"Backlog"),r.a.createElement("div",{className:"column backlog"},t)),r.a.createElement(j.Col,null,r.a.createElement("h3",null,"Active"),r.a.createElement("div",{className:"column active"},a)),r.a.createElement(j.Col,null,r.a.createElement("h3",null,"Done"),r.a.createElement("div",{className:"column done"},n)))},q=Object(v.b)((function(e){return{tasks:e.tasks}}))(P),U=a(98),H=a.n(U),J=a(155),V=a(14),K=a.n(V),W=a(159),M=a.n(W),$=a(161),z=a(47),Q=a(99),X=a.n(Q),Y=z.object({taskTitle:z.string().min(4,"Task title is too short").max(20,"Task title is too long").required("Required"),taskCategory:z.string().min(3,"Task category is too short").max(20,"Task category is too long").required("Required"),taskDescription:z.string().required("Required"),taskType:z.string().oneOf(["Bug","Feature","Tech Debt","Improvement","Research"],"Required").required("Select a task type")}),Z={Bug:"danger",Feature:"success",TechDebt:"warning",Improvement:"primary",Research:"info"},ee=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center"}},"Create Task"),r.a.createElement($.a,{validationSchema:Y,onSubmit:function(){var t=Object(J.a)(H.a.mark((function t(a,n){var i;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i={title:a.taskTitle,description:a.taskDescription,category:a.taskCategory,status:"isBacklog",type:a.taskType,color:Z[a.taskType],assignee:null,priority:3},fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(t){var a="'".concat(t.title,"' task added to board");n.resetForm(),n.setStatus({alert:r.a.createElement(X.a,{variant:"success"},a)}),e.fetchLoading(!0),e.fetchCall("/tasks"),e.fetchLoading(!1)})).catch((function(e){var t="'".concat(a.taskTitle,"' task was not added. ").concat(e);n.resetForm(),n.setStatus({alert:r.a.createElement(X.a,{variant:"danger"},t)})}));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),initialValues:{taskTitle:"",taskCategory:"",taskDescription:"",taskType:"- Select One -",taskColor:""}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=e.isSubmitting,i=e.values,o=e.touched,s=e.errors,c=e.status;e.isValid;return r.a.createElement("div",null,c?c.alert:"",r.a.createElement(K.a,{className:"new_task",noValidate:!0,onSubmit:t},r.a.createElement(K.a.Group,{controlId:"taskTitle"},r.a.createElement(K.a.Label,null,"Title"),r.a.createElement(K.a.Control,{required:!0,type:"text",placeholder:"Keep it short!",name:"taskTitle",value:i.taskTitle,onChange:a,isValid:o.taskTitle&&!s.taskTitle}),s.taskTitle&&o.taskTitle?r.a.createElement("div",{className:"error"},s.taskTitle):null),r.a.createElement(K.a.Group,{controlId:"taskCategory"},r.a.createElement(K.a.Label,null,"Category"),r.a.createElement(K.a.Control,{required:!0,type:"text",placeholder:"Which project/component?",name:"taskCategory",value:i.taskCategory,onChange:a,isValid:o.taskCategory&&!s.taskCategory}),s.taskCategory&&o.taskCategory?r.a.createElement("div",{className:"error"},s.taskCategory):null),r.a.createElement(K.a.Group,{controlId:"taskDescription"},r.a.createElement(K.a.Label,null,"Description"),r.a.createElement(K.a.Control,{required:!0,as:"textarea",rows:"3",name:"taskDescription",placeholder:"Describe task in one sentence.",value:i.taskDescription,onChange:a,isValid:o.taskDescription&&!s.taskDescription}),s.taskDescription&&o.taskDescription?r.a.createElement("div",{className:"error"},s.taskDescription):null),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Type"),r.a.createElement(K.a.Control,{required:!0,as:"select",name:"taskType",value:i.taskType,onChange:a,isValid:o.taskType&&!s.taskType},r.a.createElement("option",{value:"- Select One -",disabled:!0},"- Select One -"),r.a.createElement("option",{id:"danger",value:"Bug"},"Bug"),r.a.createElement("option",{id:"success",value:"Feature"},"Feature"),r.a.createElement("option",{id:"warning",value:"TechDebt"},"Tech Debt"),r.a.createElement("option",{id:"primary",value:"Improvement"},"Improvement"),r.a.createElement("option",{id:"info",value:"Research"},"Research")),s.taskType&&o.taskType?r.a.createElement("div",{className:"error"},s.taskType):null),r.a.createElement(M.a,{variant:"primary",type:"submit",disabled:n},"Submit")))})))},te=Object(v.b)(null,(function(e){return{fetchCall:function(t){return e(x(t))},fetchLoading:function(t){return e(_(t))}}}))(ee),ae=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCall("/tasks"),this.props.fetchLoading(!1)}},{key:"render",value:function(){var e=this,t=[];return t=this.props.isLoading?r.a.createElement("p",null,"I'm Loading Here!"):this.props.hasErrored?r.a.createElement("h4",{className:"board_error"},"There was an issue loading your board. Please reach out to the admin of this page."):r.a.createElement(q,{tasks:this.props.tasks}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Kanban App"),r.a.createElement("nav",null,r.a.createElement("span",{className:"material-icons",onClick:function(){e.props.changeAside(r.a.createElement(te,null)),e.props.openAside(!0)},title:"New Task"},"playlist_add"))),r.a.createElement("main",null,t),this.props.asideActive?r.a.createElement("aside",{className:"aside active"},r.a.createElement("span",{className:"menuclose",onClick:function(){e.props.closeAside(!1)}},"\xd7"),this.props.asideContainer):r.a.createElement("aside",{className:"aside"},r.a.createElement("span",{className:"menuclose",onClick:function(){e.props.closeAside(!1)}},"\xd7"),this.props.asideContainer))}}]),t}(n.Component),ne=Object(v.b)((function(e){return{tasks:e.tasks,hasErrored:e.hasErrored,isLoading:e.isLoading,asideActive:e.asideActive,asideContainer:e.asideContainer}}),(function(e){return{fetchCall:function(t){return e(x(t))},fetchLoading:function(t){return e(_(t))},closeAside:function(){return e({type:"CLOSE_ASIDE",asideActive:!1})},openAside:function(){return e({type:"OPEN_ASIDE",asideActive:!0})},changeAside:function(t){return e(R(t))}}}))(ae);var re=function(e){var t=[];return t=void 0===c.a.get("kanban_crud_cookie")?r.a.createElement(w,null):r.a.createElement(ne,null),r.a.createElement("div",null,t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(36),oe=a(160),se=Object(ie.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return t.tasks;default:return e}},hasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ERROR":return t.hasErrored;default:return e}},isLoading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOADING":return t.isLoading;default:return e}},asideActive:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_ASIDE":case"CLOSE_ASIDE":return t.asideActive;default:return e}},asideContainer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASIDE_CONTENT":return t.asideContainer;default:return e}},editTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_CLICK":return t.editTask;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SUCCESS":c.a.set("kanban_crud_cookie",t.token).then(window.location.reload());default:return e}},userErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_ERROR":return console.log(t.message),t.hasErrored;default:return e}},userIsLoading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return t.isLoading;default:return e}}}),ce=Object(ie.d)(se,{tasks:[],isLoading:!0,hasErrored:!1,asideActive:!1,asideContainer:[],editTask:[],user:[],userErrored:!1,userIsLoading:!1},Object(ie.a)(oe.a));o.a.render(r.a.createElement(v.a,{store:ce},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.d3c8fb40.chunk.js.map