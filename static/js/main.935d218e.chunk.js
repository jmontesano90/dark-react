(this["webpackJsonpdark-rolls-react"]=this["webpackJsonpdark-rolls-react"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(22),s=a.n(r),o=(a(31),a(3)),u=a(4),c=a(6),i=a(5),m=a(7),d=(a(32),n.a.createContext({results:[]})),h=a(25),p=a(14);a(19);function f(e){return e.message?n.a.createElement("div",{className:"error"},e.message):n.a.createElement(n.a.Fragment,null)}var b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={result:{black:{value:"0",touched:!1},blue:{value:"0",touched:!1},orange:{value:"0",touched:!1},modifier:{value:"0",touched:!1},desiredRoll:{value:"0",touched:!1},nameOfRoll:""}},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=Object(h.a)({},this.state.result);t[e.target.name.toString()]={value:e.target.value,touched:!0},this.setState({result:t},(function(){}))}},{key:"validateDice",value:function(){return!1===this.state.result.black.touched&&!1===this.state.result.blue.touched&&!1===this.state.result.orange.touched?"At least one dice must be selected":""}},{key:"validateNumberInputs",value:function(){var e=!0;if(isNaN(this.state.result.black.value)&&(e=!1),isNaN(this.state.result.blue.value)&&(e=!1),isNaN(this.state.result.orange.value)&&(e=!1),isNaN(this.state.result.modifier.value)&&(e=!1),isNaN(this.state.result.desiredRoll.value)&&(e=!1),!1===e)return"All inputs must be numbers"}},{key:"additionalDiceValidation",value:function(){var e=!1;return!0===this.state.result.modifier.touched?e=!0:!0===this.state.result.desiredRoll.touched?e=!0:!0===this.state.result.nameOfRoll.touched&&(e=!0),e}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.context.addResult(this.state.result),this.setState({result:{black:{value:"0",touched:!1},blue:{value:"0",touched:!1},orange:{value:"0",touched:!1},modifier:{value:"0",touched:!1},desiredRoll:{value:"0",touched:!1},nameOfRoll:""}}),document.getElementById("black").value="",document.getElementById("blue").value="",document.getElementById("orange").value="",document.getElementById("modifier").value="",document.getElementById("desiredRoll").value="",document.getElementById("nameOfRoll").value=""}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"inputForm"},n.a.createElement("form",{className:"newResult",onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("h2",null,"Dice being rolled"),n.a.createElement("div",{className:"colors"},n.a.createElement("label",{htmlFor:"black",className:"black color"},"Black:"),n.a.createElement("input",{className:"colorInput",type:"text",name:"black",id:"black",placeholder:"0",onChange:function(t){return e.handleChange(t)}}),n.a.createElement("label",{htmlFor:"blue",className:"blue color"},"Blue:"),n.a.createElement("input",{className:"colorInput",type:"text",name:"blue",id:"blue",placeholder:"0",onChange:function(t){return e.handleChange(t)}}),n.a.createElement("label",{htmlFor:"orange",className:"orange color"},"Orange:"),n.a.createElement("input",{className:"colorInput",type:"text",name:"orange",id:"orange",placeholder:"0",onChange:function(t){return e.handleChange(t)}})),n.a.createElement("div",{className:"additionalInput"},n.a.createElement("label",{htmlFor:"modifier",className:"additional"},"Modifier:"),n.a.createElement("input",{className:"modifier",type:"text",name:"modifier",id:"modifier",placeholder:"0",onChange:function(t){return e.handleChange(t)}}),n.a.createElement("label",{htmlFor:"desiredRoll",className:"additional"},"Desired Roll:"),n.a.createElement("input",{className:"otherInput",type:"text",name:"desiredRoll",id:"desiredRoll",placeholder:"0",onChange:function(t){return e.handleChange(t)}})),n.a.createElement("div",{className:"bottomInput"},n.a.createElement("label",{htmlFor:"nameOfRoll"},n.a.createElement("input",{type:"text",name:"nameOfRoll",id:"nameOfRoll",placeholder:"Name of Roll",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(f,{message:this.validateNumberInputs()}),this.additionalDiceValidation()&&n.a.createElement(f,{message:this.validateDice()}),n.a.createElement("input",{type:"image",src:"https://imgur.com/fFV9HS6.png",alt:"initialzie button",className:"rollButton",width:"224",height:"29",disabled:this.validateNumberInputs()||this.validateDice()}))))}}]),t}(l.Component);b.contextType=d;var v=b,E=(a(33),function(e){function t(){var e,a;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).handleClickDelete=function(e){e.preventDefault(),a.context.removeResult(a.props.id)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return e=this.props.results.rollInfo.modifier.value<0?"":"+",n.a.createElement("div",{className:"results"},n.a.createElement("input",{type:"image",src:"https://imgur.com/FyZgoKZ.png",alt:"initialzie button",className:"deleteButton",width:"35",height:"35",onClick:this.handleClickDelete}),n.a.createElement("h3",{style:{display:this.props.results.rollInfo.nameOfRoll.value?"block":"none"}},this.props.results.rollInfo.nameOfRoll.value),n.a.createElement("div",{className:"diceInputted"},n.a.createElement("span",{style:{display:this.props.results.rollInfo.black.touched?"block":"none"}},this.props.results.rollInfo.black.value," ",n.a.createElement("span",{className:"black"},"Black")," dice"),n.a.createElement("span",{style:{display:this.props.results.rollInfo.blue.touched?"block":"none"}},this.props.results.rollInfo.blue.value," ",n.a.createElement("span",{className:"blue"},"Blue")," dice"),n.a.createElement("span",{style:{display:this.props.results.rollInfo.orange.touched?"block":"none"}},this.props.results.rollInfo.orange.value," ",n.a.createElement("span",{className:"orange"},"Orange")," dice"),n.a.createElement("span",{style:{display:this.props.results.rollInfo.modifier.touched?"block":"none"}},e,this.props.results.rollInfo.modifier.value," modifier")),n.a.createElement("div",{className:"result"},n.a.createElement("span",{className:"title"},"Mode: "),n.a.createElement("span",{className:"calculation"},this.props.results.mode)),n.a.createElement("div",{className:"result"},n.a.createElement("span",{className:"title"},"Median: "),n.a.createElement("span",{className:"calculation"},this.props.results.median)),n.a.createElement("div",{className:"result"},n.a.createElement("span",{className:"title"},"Average: "),n.a.createElement("span",{className:"calculation"},this.props.results.average)),n.a.createElement("div",{className:"result"},n.a.createElement("span",{className:"title"},"Variance: "),n.a.createElement("span",{className:"calculation"},this.props.results.variance)),n.a.createElement("div",{className:"result",style:{display:this.props.results.percentRoll?"block":"none"}},n.a.createElement("span",{className:"title"},"Success Rate: "),n.a.createElement("span",{className:"calculation"},this.props.results.percentRoll,"% to roll a"," ",this.props.results.rollInfo.desiredRoll.value)))}}]),t}(l.Component));E.contextType=d;var g=E,k=[0,1,1,1,2,2],y=[1,1,2,2,2,3],N=[1,2,2,3,3,4];function O(){var e=6*Math.random()-.5;return e=Math.round(e)}function I(e,t,a,l){var n=0,r=0;for(r=0;r!==e;r++)n+=k[O()];var s=0,o=0;for(o=0;o!==t;o++)s+=y[O()];var u=0,c=0;for(c=0;c!==a;c++)u+=N[O()];return n+s+u+l}function R(e,t){for(var a=0,l=0;a<e.length;)l+=Math.pow(t-e[a],2),a++;return Math.round(l/e.length*1e3)/1e3}function j(e,t){if(0===t)return!1;e.sort((function(e,t){return e-t}));var a=0;for(a=0;t!==e[a]&&a<e.length;a++);return(e.length-a)/50}function C(e){var t=[],a=0;for(a=0;a<e.length;a++){for(var l=0;l<t.length;){if(t[l].number===e[a]){t[l].numberCount+=1;break}l++}l===t.length&&t.push({number:e[a],numberCount:1})}return t.sort((function(e,t){return t.numberCount-e.numberCount})),t[0].number}var w=a(11),D=(a(34),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"Home"},n.a.createElement(w.b,{to:"/dark-react/"},"Home")),n.a.createElement("li",{className:"what"},n.a.createElement(w.b,{to:"/dark-react/what"},"What is this?")),n.a.createElement("li",{className:"how"},n.a.createElement(w.b,{to:"/dark-react/how"},"How does this work?"))))}}]),t}(l.Component)),x=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"navInfo"},n.a.createElement("h2",null,"How does this work?"),n.a.createElement("p",null,"Dark Rolls simulates 5000 rolls based on the amount of die you entered, and your preferred minimum roll. Then based on those rolls, will give you the accompanying statistics. This does lead to a natural variation in every time you click the button, so theres no need to panic when you witness this. Could I just have used math to calculate the stats? Yeah but thats boring."))}}]),t}(l.Component)),B=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"navInfo"},n.a.createElement("h2",null,"What is this?"),n.a.createElement("p",null,"Dark Rolls is meant to be used in conjunction with the Dark Souls board game. Lets say you can't decide what gear you should upgrade for, or you need to decide who should attack and who should back off. Is 3 blacks and a -1 modifier better than a blue and a +1? I hope this site helps answer those on the fly questions, best of luck Ashen Ones!"),n.a.createElement("p",null,"Dark Rolls also works on mobile. I assumed most people wouldn't drag their PC to their board game sessions, but hey whatever works."))}}]),t}(l.Component),S=a(10),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleAddResult=function(e){var t=function(e,t,a,l,n){var r=[],s=0;for(s=0;s<5e3;s++)r.push(I(e,t,a,l));var o,u=function(e){var t=0,a=0;for(a=0;a<e.length;a++)t+=e[a];return t/e.length}(r);return{average:u,median:(o=r,o.sort((function(e,t){return e-t})),o[o.length/2]),variance:R(r,u),percentRoll:j(r,n),mode:C(r)}}(parseInt(e.black.value),parseInt(e.blue.value),parseInt(e.orange.value),parseInt(e.modifier.value),parseInt(e.desiredRoll.value));t.rollInfo=e,a.state.results.unshift(t),a.setState({results:a.state.results})},a.handleDeleteResult=function(e){var t=a.state.results;t.splice(e,1),a.setState({results:t})},a.state={results:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={results:this.state.results,addResult:this.handleAddResult,removeResult:this.handleDeleteResult};return n.a.createElement(d.Provider,{value:e},n.a.createElement("main",null,n.a.createElement(D,null),n.a.createElement("h1",null,"Dark Rolls"),n.a.createElement(S.a,{exact:!0,path:"/dark-react/",component:v}),n.a.createElement(S.a,{exact:!0,path:"/dark-react/what",component:x}),n.a.createElement(S.a,{exact:!0,path:"/dark-react/how",component:B}),this.state.results.map((function(e,t){return n.a.createElement(g,{results:e,key:t,id:t})}))))}}]),t}(l.Component);s.a.render(n.a.createElement(w.a,null,n.a.createElement(F,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.935d218e.chunk.js.map