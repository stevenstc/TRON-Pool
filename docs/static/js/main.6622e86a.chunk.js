(this["webpackJsonptron-legendario"]=this["webpackJsonptron-legendario"]||[]).push([[0],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(52),c=a.n(s),l=a(2),o=a.n(l),i=a(3),d=a(53),m=a.n(d),u={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},p="TB7RTxBPY4eMvKjceXj8SWjVnZCrWr4XvF",h="TNFmfFgvUbAgpZ2ghzMAHEaC4tPrk1Vqns";class v extends n.Component{constructor(e){super(e),this.state={texto:"Click to register",registrado:!1,min:200},this.deposit=this.deposit.bind(this),this.estado=this.estado.bind(this),this.reInvest=this.reInvest.bind(this)}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,h);case 2:e.estado(),setInterval(()=>e.estado(),3e3);case 4:case"end":return t.stop()}}),t)})))()}estado(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,n=a.address,n=window.tronWeb.address.fromHex(n),t.next=7,u.contract.investors(n).call();case 7:return t.sent.registered?e.setState({texto:"Invest",registrado:!0}):(document.getElementById("amount").value="",e.setState({texto:"Click to register",registrado:!1})),t.next=11,u.contract.MIN_DEPOSIT().call();case 11:return r=t.sent,r=parseInt(r._hex)/1e6,t.next=15,u.contract.tarifa().call();case 15:s=t.sent,s=parseInt(s._hex),e.setState({min:r,tarifa:s});case 18:case"end":return t.stop()}}),t)})))()}deposit(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r,s,c,l,i,d,m,h,v;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.registrado,n=document.getElementById("amount").value,!a){t.next=8;break}return t.next=5,u.contract.deposit().send({shouldPollResponse:!0,callValue:1e6*n});case 5:document.getElementById("amount").value="",t.next=31;break;case 8:if(document.getElementById("amount").value="",!((r=document.location.href).indexOf("?")>0)){t.next=27;break}for(s=r.split("?")[1],c=s.split("&"),l={},i=0,d=c.length;i<d;i++)m=c[i].split("="),l[m[0]]=unescape(decodeURI(m[1]));if(!l.ref){t.next=24;break}return m=l.ref.split("#"),t.next=19,u.contract.investors(m[0]).call();case 19:h=t.sent,console.log(h),h.registered&&h.exist?document.getElementById("sponsor").value=m[0]:document.getElementById("sponsor").value=p,t.next=25;break;case 24:document.getElementById("sponsor").value=p;case 25:t.next=28;break;case 27:document.getElementById("sponsor").value=p;case 28:return v=document.getElementById("sponsor").value,t.next=31,u.contract.miRegistro(v).send();case 31:case"end":return t.stop()}}),t)})))()}reInvest(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.registrado,n=document.getElementById("amount").value,n=parseInt(1e6*n),!a){t.next=7;break}return t.next=6,u.contract.deposit(n).send();case 6:document.getElementById("amount").value="";case 7:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.texto,a=e.min,n=e.tarifa;switch(a="Min. "+a+" TRX",n){case 0:n=2;break;case 1:n=3;break;case 2:n=4;break;case 3:n=6;break;default:n="N/A"}return r.a.createElement("div",null,r.a.createElement("h6",{className:"text-center"},"Return: ",r.a.createElement("strong",null,n,"00%"),r.a.createElement("br",null),r.a.createElement("strong",null,n,"%")," per day",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("input",{type:"text",className:"form-control mb-20 text-center",id:"amount",placeholder:a}),r.a.createElement("p",{className:"card-text"},"You must have ~ 50 TRX to make the transaction"),r.a.createElement("button",{type:"button",style:{"margin-right":"3.8em"},className:"primary-btn header-btn text-uppercase mb-20 text-center",onClick:()=>this.reInvest()},"Re-Invest"),r.a.createElement("button",{type:"button",style:{"margin-right":"3.8em"},className:"primary-btn header-btn text-uppercase mb-20 text-center",onClick:()=>this.deposit()},t)))}}class b extends n.Component{constructor(e){super(e),this.state={totalInvestors:0,totalInvested:0,totalRefRewards:0},this.totalInvestors=this.totalInvestors.bind(this)}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,h);case 2:setInterval(()=>e.totalInvestors(),1e3);case 3:case"end":return t.stop()}}),t)})))()}totalInvestors(){var e=this;return Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.contract.setstate().call();case 2:a=t.sent,e.setState({totalInvestors:parseInt(a.Investors._hex),totalInvested:parseInt(a.Invested._hex)/1e6,totalRefRewards:parseInt(a.RefRewards._hex)/1e6});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return r.a.createElement("section",{className:"section-gap aboutus-area"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 single-services"},r.a.createElement("h1",{className:"pt-40 pb-30 text-white"},t),r.a.createElement("p",null,"Global Investors")),r.a.createElement("div",{className:"col-lg-4 single-services"},r.a.createElement("h1",{className:"pt-40 pb-30 text-white"},a," TRX"),r.a.createElement("p",null,"Global Inverted")),r.a.createElement("div",{className:"col-lg-4 single-services"},r.a.createElement("h1",{className:"pt-40 pb-30 text-white"},n," TRX"),r.a.createElement("p",null,"Global Referral Rewards")))))}}var w=a(54);class f extends n.Component{constructor(e){super(e),this.state={direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},this.Investors=this.Investors.bind(this),this.Link=this.Link.bind(this),this.withdraw=this.withdraw.bind(this)}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,h);case 2:setInterval(()=>e.Investors(),1e3),setInterval(()=>e.Link(),1e3);case 4:case"end":return t.stop()}}),t)})))()}Link(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.registered){t.next=12;break}return(a=document.location.href).indexOf("?")>0&&(a=a.split("?")[0]),t.next=6,window.tronWeb.trx.getAccount();case 6:n=t.sent,n=window.tronWeb.address.fromHex(n.address),n=a+"?ref="+n,e.setState({link:n}),t.next=13;break;case 12:e.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return t.stop()}}),t)})))()}Investors(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,t.next=5,u.contract.investors(a.address).call();case 5:return n=t.sent,t.next=8,u.contract.MYwithdrawable().call();case 8:r=t.sent,e.setState({direccion:window.tronWeb.address.fromHex(a.address),registered:n.registered,balanceRef:parseInt(n.balanceRef._hex)/1e6,totalRef:parseInt(n.totalRef._hex)/1e6,invested:parseInt(n.invested._hex)/1e6,paidAt:parseInt(n.paidAt._hex)/1e6,my:parseInt(r.amount._hex)/1e6,withdrawn:parseInt(n.withdrawn._hex)/1e6});case 10:case"end":return t.stop()}}),t)})))()}withdraw(){return Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.contract.withdraw().send();case 2:case"end":return e.stop()}}),e)})))()}render(){var e=this.state,t=e.balanceRef,a=e.totalRef,n=e.invested,s=e.withdrawn,c=e.my,l=e.direccion,o=e.link,i=t+c;return i=i.toFixed(6),i=parseFloat(i),t=t.toFixed(6),t=parseFloat(t),a=a.toFixed(6),a=parseFloat(a),n=n.toFixed(6),n=parseFloat(n),s=s.toFixed(6),s=parseFloat(s),c=c.toFixed(6),c=parseFloat(c),r.a.createElement("section",{className:"simple-services-area section-gap"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",{className:"white"},r.a.createElement("span",{style:{fontweight:"bold"}},"My office:")," ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontsize:"18px"}},l)),r.a.createElement("br",null),r.a.createElement("h3",{className:"white"},"Referral link:"),r.a.createElement("h6",{className:"aboutus-area",style:{padding:"1.5em"}},r.a.createElement("a",{href:o},o),r.a.createElement("br",null),r.a.createElement(w.CopyToClipboard,{text:o},r.a.createElement("button",{type:"button",className:"primary-btn header-btn"},"Copy to clipboard"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},n," TRX"),r.a.createElement("p",null,"Total invested")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},a," TRX"),r.a.createElement("p",null,"Total earnings from referrals")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},c," TRX"),r.a.createElement("p",null,"My balance")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},i," TRX"),r.a.createElement("p",null,"Available")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},s," TRX"),r.a.createElement("p",null,"withdrawn")))))}}class E extends n.Component{constructor(e){super(e),this.state={accountAddress:"Billetera NO conectada",accountBalance:"Billetera NO conectada",accountBandwidth:"Billetera NO conectada"}}componentDidMount(){setInterval(()=>this.fetchAccountAddress(),1e3),setInterval(()=>this.fetchAccountBalance(),1e3),setInterval(()=>this.fetchAccountBandwidth(),1e3)}fetchAccountAddress(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:a=t.sent,n=a.address,r=window.tronWeb.address.fromHex(n),e.setState({accountAddress:r});case 6:case"end":return t.stop()}}),t)})))()}fetchAccountBalance(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBalance();case 2:a=t.sent,n=window.tronWeb.fromSun(a),e.setState({accountBalance:n});case 5:case"end":return t.stop()}}),t)})))()}fetchAccountBandwidth(){var e=this;return Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBandwidth();case 2:a=t.sent,e.setState({accountBandwidth:a});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.accountAddress,a=e.accountBalance,n=e.accountBandwidth;return r.a.createElement("div",null,r.a.createElement("h5",{className:"text-center"},"Billetera Conectada"),r.a.createElement("h6",{className:"text-center"},"Direcci\xf3n:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,t)),r.a.createElement("br",null),r.a.createElement("br",null),"Balance:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,a," TRX")),r.a.createElement("br",null),r.a.createElement("br",null),"Bandwidth:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,n)),r.a.createElement("br",null)))}}var x=a(55),g=a.n(x),I="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",k=r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("img",{src:g.a,className:"img-fluid",alt:"TronLink logo"})),N=()=>{window.open(I,"_blank")},W=e=>{var t=e.installed;return void 0!==t&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tronLink row",onClick:N,style:{padding:"3em"}},r.a.createElement("div",{className:"info col-sm-8"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously created wallet.")),k)):r.a.createElement("div",{className:"row",onClick:N},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:I,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),k)};class y extends n.Component{constructor(e){super(e),this.state={tronWeb:{installed:!1,loggedIn:!1}}}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(t=>{var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return e.setState({tronWeb:a}),t();var n=0,r=setInterval(()=>{if(n>=10){return window.tronWeb=new m.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),e.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),t()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;e.setState({tronWeb:a}),t()},100)});case 2:e.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",()=>{e.state.tronWeb.loggedIn||e.setState({tronWeb:{installed:!0,loggedIn:!0}})})),u.setTronWeb(window.tronWeb);case 4:case"end":return t.stop()}}),t)})))()}render(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"convert-area",id:"convert"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"convert-wrap"},r.a.createElement("div",{className:"row justify-content-center align-items-center flex-column pb-30"},r.a.createElement("h1",{className:"text-white"},"Make your investment")),r.a.createElement("div",{className:"row justify-content-center align-items-start"},r.a.createElement("div",{className:"col-lg-6 cols"},r.a.createElement(v,null)),r.a.createElement("div",{className:"col-lg-6 cols"},r.a.createElement(E,null)))))),r.a.createElement(f,null),r.a.createElement(b,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(W,{installed:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(W,null)))}}var R=y,B=document.getElementById("root");c.a.render(r.a.createElement(R,null),B)},55:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},56:function(e,t,a){e.exports=a(193)},85:function(e,t){},86:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.6622e86a.chunk.js.map