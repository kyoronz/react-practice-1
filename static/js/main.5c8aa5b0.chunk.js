(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{73:function(e,t,r){e.exports=r(94)},78:function(e,t,r){},79:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},80:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),n=r(9),s=r.n(n),o=(r(78),r(32)),l=r(30),u=r(48),d=r(33),c=r(46),h=(r(79),r(80),r(132)),m=r(134),p=r(96),f=function(){return i.a.createElement("div",null,i.a.createElement(h.a,{position:"static"},i.a.createElement(m.a,null,i.a.createElement(p.a,{color:"inherit"},"React Application"))))},g=r(62),_=r(19),q=r(4),v=r(136),y=r(135),E=r(151),b=r(147),V=r(144),C=r(145),S=r(140),w=r(142),O=r(97),j=r(141),k=r(138),R=r(143),F=r(146),T=r(148),x=r(139),M=r(63),N=r.n(M),D=r(64),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={cr_number:"",cr_type:"",request_type:"",description:"",reason:"",date_required:(new Date).toISOString().substring(0,10),priority:"",request_date:(new Date).toISOString().substring(0,10),requester:"",signature:!1,error_cr_number:!1,error_cr_type:!1,error_request_type:!1,error_description:!1,error_reason:!1,error_date_required:!1,error_priority:!1,error_request_date:!1,error_requester:!1,error_signature:!1,id:123},e.handleChange=e.handleChange.bind(Object(_.a)(e)),e.submit=e.submit.bind(Object(_.a)(e)),e.requestTypeValidation=e.requestTypeValidation.bind(Object(_.a)(e)),e.descriptionValidation=e.descriptionValidation.bind(Object(_.a)(e)),e.reasonValidation=e.reasonValidation.bind(Object(_.a)(e)),e.dateRequiredValidation=e.dateRequiredValidation.bind(Object(_.a)(e)),e.priorityValidation=e.priorityValidation.bind(Object(_.a)(e)),e.requesterValidation=e.requesterValidation.bind(Object(_.a)(e)),e.signatureValidation=e.signatureValidation.bind(Object(_.a)(e)),e.validator=new N.a({element:!1,validators:{date_format:{message:"The :attribute must be a date.",rule:function(e,t,r){return D(e).isValid()}},boolean_true:{message:"The :attribute must be a boolean with true value",rule:function(e,t,r){return!0===e}}}}),e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=this,r=e.target,a="checkbox"===r.type?r.checked:r.value,i=r.name;console.log(r.name),console.log(r.value),"signature"===i&&this.setState(function(e,r){return{signature:!t.state.signature}}),this.setState(function(e,t){return Object(g.a)({},i,a)})}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(y.a,{style:{marginTop:"1rem"}},i.a.createElement(v.a,{container:!0,justify:"center"},i.a.createElement(p.a,{variant:"h4",classes:{root:e.formTitle}},"Change Request Form")),i.a.createElement("form",{action:"#"},i.a.createElement(v.a,{container:!0,direction:"column",spacing:2},i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"cr_number",required:!0,classes:{root:e.formLabel}},"CR Number"),i.a.createElement(E.a,{disabled:!0,id:"cr_number",name:"cr_number",placeholder:"CR000001",value:this.state.cr_number,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0,required:!0})),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"cr_type",required:!0,classes:{root:e.formLabel}},"Type of CR"),i.a.createElement(k.a,{fullWidth:!0},i.a.createElement(S.a,{"aria-label":"cr_type",name:"cr_type",value:this.state.cr_type,onChange:this.handleChange},i.a.createElement(v.a,{container:!0},i.a.createElement(v.a,{item:!0,sm:6,xs:12},i.a.createElement(j.a,{value:"ENHANCEMENT",control:i.a.createElement(C.a,null),label:"Enhancement"})),i.a.createElement(v.a,{item:!0,sm:6,xs:12},i.a.createElement(j.a,{value:"DEFECT",control:i.a.createElement(C.a,null),label:"Defect"})))))),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"request_type",required:!0,classes:{root:e.formLabel}},"Project/System/Initiative"),i.a.createElement(E.a,{id:"request_type",name:"request_type",placeholder:"",value:this.state.request_type,onChange:this.handleChange,onBlur:this.requestTypeValidation,margin:"normal",variant:"outlined",fullWidth:!0,required:!0,error:this.state.error_request_type}),this.state.error_request_type?i.a.createElement(x.a,{error:!0},this.validator.message("request_type",this.state.request_type,"required",{messages:{required:"Project/System/Initiative is required"}})):""),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"description",required:!0,classes:{root:e.formLabel}},"Description of Request"),i.a.createElement(E.a,{id:"description",name:"description",placeholder:"",value:this.state.description,onChange:this.handleChange,onBlur:this.descriptionValidation,margin:"normal",variant:"outlined",fullWidth:!0,multiline:!0,rows:"4",required:!0,error:this.state.error_description}),this.state.error_description?i.a.createElement(x.a,{error:!0},this.validator.message("description",this.state.description,"required")):""),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"reason",required:!0,classes:{root:e.formLabel}},"Reason for Change"),i.a.createElement(E.a,{id:"reason",name:"reason",placeholder:"Eg:Legal Requirement, PDPA, etc.",value:this.state.reason,onChange:this.handleChange,onBlur:this.reasonValidation,margin:"normal",variant:"outlined",fullWidth:!0,required:!0,error:this.state.error_reason}),this.state.error_reason?i.a.createElement(x.a,{error:!0},this.validator.message("reason",this.state.reason,"required")):""),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"date_required",required:!0,classes:{root:e.formLabel}},"Date Required"),i.a.createElement(E.a,{id:"date_required",name:"date_required",placeholder:"CR000001",value:this.state.date_required,onChange:this.handleChange,onBlur:this.dateRequiredValidation,margin:"normal",variant:"outlined",fullWidth:!0,type:"date",required:!0,error:this.state.error_date_required}),this.state.error_date_required?i.a.createElement(x.a,{error:!0},this.validator.message("date_required",this.state.date_required,"required|date_format")):""),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"priority",required:!0,classes:{root:e.formLabel}},"Priority"),i.a.createElement(R.a,{name:"priority",displayEmpty:!0,value:this.state.priority,onChange:this.handleChange,input:i.a.createElement(F.a,{error:this.state.error_priority,classes:{root:e.formSelect}}),fullWidth:!0,onBlur:this.priorityValidation},i.a.createElement(T.a,{value:""},i.a.createElement("em",null,"Choose your priority")),i.a.createElement(T.a,{value:"LOW"},"Low"),i.a.createElement(T.a,{value:"MEDIUM"},"Medium"),i.a.createElement(T.a,{value:"HIGH"},"High"),i.a.createElement(T.a,{value:"MANDATORY"},"Mandatory")),this.state.error_priority?i.a.createElement(x.a,{error:!0},this.validator.message("priority",this.state.priority,"required")):""),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"request_date",classes:{root:e.formLabel}},"Request Date"),i.a.createElement(E.a,{id:"request_date",name:"request_date",placeholder:"CR000001",value:this.state.request_date,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0,type:"date",disabled:!0,required:!0})),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(b.a,{htmlFor:"requester",required:!0,classes:{root:e.formLabel}},"Requester Name"),i.a.createElement(E.a,{id:"requester",name:"requester",placeholder:"",value:this.state.requester,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0,onBlur:this.requesterValidation,required:!0,error:this.state.error_requester}),this.state.error_requester?i.a.createElement(x.a,{error:!0},this.validator.message("requester",this.state.requester,"required")):""),i.a.createElement(v.a,{item:!0,xs:!0},i.a.createElement(v.a,{container:!0,spacing:2},i.a.createElement(v.a,{item:!0,sm:10,xs:12},i.a.createElement(k.a,{fullWidth:!0},i.a.createElement(O.a,null,i.a.createElement(j.a,{control:i.a.createElement(V.a,{id:"signature",name:"signature"}),label:"I agree to Segment's Terms and Privacy Policy",labelPlacement:"end",checked:this.state.signature,onChange:this.handleChange,onBlur:this.signatureValidation}))),this.state.error_signature?i.a.createElement(x.a,{error:!0},this.validator.message("signature",this.state.signature,"boolean_true",{messages:{boolean_true:"You must agree to the terms and privacy policy to proceed"}})):""),i.a.createElement(v.a,{item:!0,sm:2,xs:12,justify:"center",container:!0},i.a.createElement(w.a,{onClick:this.submit,variant:"contained",color:"primary"},"Submit")))))))}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.initForm()}},{key:"initForm",value:function(){var e=this;this.state.id>=0?this.setState(function(t,r){return{cr_number:"CR"+e.getCRNumber(e.state.id)}}):this.setState(function(e,t){return{cr_number:"CR000000"}}),this.setState(function(e,t){return{cr_type:"ENHANCEMENT"}}),this.refreshValidation()}},{key:"getCRNumber",value:function(e){return e.toString().length<6?("000000"+this.state.id.toString()).slice(-6):e.toString()}},{key:"clearInput",value:function(){var e=this;return new Promise(function(t){return e.setState(function(e,t){return{cr_type:"ENHANCEMENT",request_type:"",description:"",reason:"",date_required:(new Date).toISOString().substring(0,10),priority:"",request_date:(new Date).toISOString().substring(0,10),requester:"",signature:!1,error_cr_number:!1,error_cr_type:!1,error_request_type:!1,error_description:!1,error_reason:!1,error_date_required:!1,error_priority:!1,error_request_date:!1,error_requester:!1,error_signature:!1}},t)})}},{key:"refreshValidation",value:function(){this.validator.message("request_type",this.state.request_type,"required"),this.validator.message("description",this.state.description,"required"),this.validator.message("reason",this.state.reason,"required"),this.validator.message("date_required",this.state.date_required,"required|date_format"),this.validator.message("priority",this.state.priority,"required"),this.validator.message("requester",this.state.requester,"required"),this.validator.message("signature",this.state.signature,"boolean_true")}},{key:"submit",value:function(){var e=this;this.validator.allValid()&&this.isValidatorValid()?this.clearInput().then(function(t){return new Promise(function(t){return e.setState({id:e.state.id+1},t)})}).then(function(t){e.initForm(),alert("The change request is sent successfully."),e.forceUpdate()}):(this.requestTypeValidation(),this.descriptionValidation(),this.reasonValidation(),this.dateRequiredValidation(),this.priorityValidation(),this.requesterValidation(),this.signatureValidation())}},{key:"isValidatorValid",value:function(){return this.validator.fieldValid("request_type")&&this.validator.fieldValid("description")&&this.validator.fieldValid("reason")&&this.validator.fieldValid("date_required")&&this.validator.fieldValid("priority")&&this.validator.fieldValid("requester")&&this.validator.fieldValid("signature")}},{key:"requestTypeValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("request_type")?this.setState(function(e,t){return{error_request_type:!1}}):(this.setState(function(e,t){return{error_request_type:!0}}),this.validator.showMessageFor("request_type"),this.forceUpdate())}},{key:"descriptionValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("description")?this.setState(function(e,t){return{error_description:!1}}):(this.setState(function(e,t){return{error_description:!0}}),this.validator.showMessageFor("description"),this.forceUpdate())}},{key:"reasonValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("reason")?this.setState(function(e,t){return{error_reason:!1}}):(this.setState(function(e,t){return{error_reason:!0}}),this.validator.showMessageFor("reason"),this.forceUpdate())}},{key:"dateRequiredValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("date_required"),this.validator.fieldValid("date_required")?this.setState(function(e,t){return{error_date_required:!1}}):(this.setState(function(e,t){return{error_date_required:!0}}),this.validator.showMessageFor("date_required"),this.forceUpdate())}},{key:"priorityValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("priority")?this.setState(function(e,t){return{error_priority:!1}}):(this.setState(function(e,t){return{error_priority:!0}}),this.validator.showMessageFor("priority"),this.forceUpdate())}},{key:"requesterValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("requester")?this.setState(function(e,t){return{error_requester:!1}}):(this.setState(function(e,t){return{error_requester:!0}}),this.validator.showMessageFor("requester"),this.forceUpdate())}},{key:"signatureValidation",value:function(){this.refreshValidation(),this.validator.fieldValid("signature")?this.setState(function(e,t){return{error_signature:!1}}):(this.setState(function(e,t){return{error_signature:!0}}),this.validator.showMessageFor("signature"),this.forceUpdate())}}]),t}(a.Component),W=Object(q.a)(function(e){return{formLabel:{color:"black"},formSelect:{marginTop:".9rem"},formTitle:{marginTop:"1rem",marginBottom:"1rem"}}})(L),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement(f,null),i.a.createElement(W,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[73,1,2]]]);
//# sourceMappingURL=main.5c8aa5b0.chunk.js.map