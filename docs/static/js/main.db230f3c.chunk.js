(this["webpackJsonptron-legendario"]=this["webpackJsonptron-legendario"]||[]).push([[0],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(52),c=a.n(s),l=a(2),o=a.n(l),i=a(3),d=a(53),m=a.n(d),u={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},p="TB7RTxBPY4eMvKjceXj8SWjVnZCrWr4XvF",h="TK7dauFFSsg13LmDaKa5UJmgirytmRPMSo";class w extends n.Component{constructor(e){super(e),this.state={min:200},this.deposit=this.deposit.bind(this),this.estado=this.estado.bind(this)}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,h);case 2:e.estado(),setInterval(()=>e.estado(),3e3);case 4:case"end":return t.stop()}}),t)})))()}estado(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.contract.MIN_DEPOSIT().call();case 2:return a=t.sent,a=parseInt(a._hex)/1e6,t.next=6,u.contract.tarifa().call();case 6:n=t.sent,n=parseInt(n._hex),e.setState({min:a,tarifa:n});case 9:case"end":return t.stop()}}),t)})))()}deposit(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r,s,c,l,i,d,m,h,w,v,b,f,E,x;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.min,n=document.getElementById("amount").value,t.next=4,window.tronWeb.trx.getBalance();case 4:if(r=t.sent,s=window.tronWeb.fromSun(r),!((s=parseFloat(s))>=n+50)){t.next=47;break}if(!((c=document.location.href).indexOf("?")>0)){t.next=26;break}for(l=c.split("?")[1],i=l.split("&"),d={},m=0,h=i.length;m<h;m++)w=i[m].split("="),d[w[0]]=unescape(decodeURI(w[1]));if(!d.ref){t.next=23;break}return w=d.ref.split("#"),t.next=18,u.contract.investors(w[0]).call();case 18:v=t.sent,console.log(v),v.registered?document.getElementById("sponsor").value=w[0]:document.getElementById("sponsor").value=p,t.next=24;break;case 23:document.getElementById("sponsor").value=p;case 24:t.next=27;break;case 26:document.getElementById("sponsor").value=p;case 27:return b=document.getElementById("sponsor").value,t.next=30,window.tronWeb.trx.getAccount();case 30:return f=t.sent,E=f.address,E=window.tronWeb.address.fromHex(E),t.next=35,u.contract.investors(E).call();case 35:if((x=t.sent).registered&&(b=x.sponsor),!(n>=a)){t.next=43;break}return document.getElementById("amount").value="",t.next=41,u.contract.deposit(b).send({shouldPollResponse:!0,callValue:1e6*n});case 41:t.next=45;break;case 43:window.alert("Please enter an amount greater than 200 TRX"),document.getElementById("amount").value=200;case 45:t.next=49;break;case 47:window.alert("You must leave 50 TRX free in your account to make the transaction"),document.getElementById("amount").value=n>s?s-50:n-50;case 49:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.min,a=e.tarifa;switch(t="Min. "+t+" TRX",a){case 0:a=2;break;case 1:a=3;break;case 2:a=4;break;case 3:a=5;break;case 4:a=6;break;default:a="N/A"}return r.a.createElement("div",null,r.a.createElement("h6",{className:"text-center"},"Return: ",r.a.createElement("strong",null,"200%"),r.a.createElement("br",null),r.a.createElement("strong",null,a,"%")," per day",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("input",{type:"number",className:"form-control mb-20 text-center",id:"amount",placeholder:t}),r.a.createElement("p",{className:"card-text"},"You must have ~ 50 TRX to make the transaction"),r.a.createElement("p",null," ",r.a.createElement("img",{style:{cursor:"pointer"},src:"img/botonInvest.png",height:"120px",alt:"tron",onClick:()=>this.deposit()}))))}}class v extends n.Component{constructor(e){super(e),this.state={totalInvestors:0,totalInvested:0,totalRefRewards:0},this.totalInvestors=this.totalInvestors.bind(this)}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,h);case 2:setInterval(()=>e.totalInvestors(),1e3);case 3:case"end":return t.stop()}}),t)})))()}totalInvestors(){var e=this;return Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.contract.setstate().call();case 2:a=t.sent,e.setState({totalInvestors:parseInt(a.Investors._hex),totalInvested:parseInt(a.Invested._hex)/1e6,totalRefRewards:parseInt(a.RefRewards._hex)/1e6});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return r.a.createElement("section",{id:"stats",className:"section-gap aboutus-area"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 single-services"},r.a.createElement("h1",{className:"pt-40 pb-30 text-white"},t),r.a.createElement("p",null,"Global Investors")),r.a.createElement("div",{className:"col-lg-4 single-services"},r.a.createElement("h1",{className:"pt-40 pb-30 text-white"},a," TRX"),r.a.createElement("p",null,"Global Inverted")),r.a.createElement("div",{className:"col-lg-4 single-services"},r.a.createElement("h1",{className:"pt-40 pb-30 text-white"},n," TRX"),r.a.createElement("p",null,"Global Referral Rewards")))))}}var b=a(54);class f extends n.Component{constructor(e){super(e),this.state={direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},this.Investors=this.Investors.bind(this),this.Link=this.Link.bind(this),this.withdraw=this.withdraw.bind(this)}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,h);case 2:setInterval(()=>e.Investors(),1e3),setInterval(()=>e.Link(),1e3);case 4:case"end":return t.stop()}}),t)})))()}Link(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.registered){t.next=12;break}return(a=document.location.href).indexOf("?")>0&&(a=a.split("?")[0]),t.next=6,window.tronWeb.trx.getAccount();case 6:n=t.sent,n=window.tronWeb.address.fromHex(n.address),n=a+"?ref="+n,e.setState({link:n}),t.next=13;break;case 12:e.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return t.stop()}}),t)})))()}Investors(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,t.next=5,u.contract.investors(a.address).call();case 5:return n=t.sent,t.next=8,u.contract.MYwithdrawable().call();case 8:r=t.sent,e.setState({direccion:window.tronWeb.address.fromHex(a.address),registered:n.registered,balanceRef:parseInt(n.balanceRef._hex)/1e6,totalRef:parseInt(n.totalRef._hex)/1e6,invested:parseInt(n.invested._hex)/1e6,paidAt:parseInt(n.paidAt._hex)/1e6,my:parseInt(r.amount._hex)/1e6,withdrawn:parseInt(n.withdrawn._hex)/1e6});case 10:case"end":return t.stop()}}),t)})))()}withdraw(){return Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.contract.withdraw().send();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))()}render(){var e=this.state,t=e.balanceRef,a=e.totalRef,n=e.invested,s=e.withdrawn,c=e.my,l=e.direccion,o=e.link,i=t+c;return i=i.toFixed(6),i=parseFloat(i),t=t.toFixed(6),t=parseFloat(t),a=a.toFixed(6),a=parseFloat(a),n=n.toFixed(6),n=parseFloat(n),s=s.toFixed(6),s=parseFloat(s),c=c.toFixed(6),c=parseFloat(c),r.a.createElement("section",{id:"office",className:"simple-services-area section-gap"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",{className:"white"},r.a.createElement("span",{style:{fontweight:"bold"}},"My office:")),r.a.createElement("p",null,l),r.a.createElement("br",null),r.a.createElement("h3",{className:"white"},"Referral link:"),r.a.createElement("h6",{className:"aboutus-area",style:{padding:"1.5em",fontSize:"11px"}},r.a.createElement("a",{href:o},o),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.CopyToClipboard,{text:o},r.a.createElement("button",{type:"button",className:"primary-btn header-btn text-uppercase ",style:{paddingRight:"30px"}},"Copy to clipboard"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},n," TRX"),r.a.createElement("p",null,"Total invested")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},a," TRX"),r.a.createElement("p",null,"Total earnings from referrals")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},c," TRX"),r.a.createElement("p",null,"My Profits")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},i," TRX"),r.a.createElement("p",null,"Available"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:()=>this.withdraw()},"Withdrawal")),r.a.createElement("div",{className:"col-sm-4 single-services"},r.a.createElement("h4",{className:"pt-30 pb-20"},s," TRX"),r.a.createElement("p",null,"withdrawn")))))}}class E extends n.Component{constructor(e){super(e),this.state={accountAddress:"Billetera NO conectada",accountBalance:"Billetera NO conectada",accountBandwidth:"Billetera NO conectada"}}componentDidMount(){setInterval(()=>this.fetchAccountAddress(),1e3),setInterval(()=>this.fetchAccountBalance(),1e3),setInterval(()=>this.fetchAccountBandwidth(),1e3)}fetchAccountAddress(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:a=t.sent,n=a.address,r=window.tronWeb.address.fromHex(n),e.setState({accountAddress:r});case 6:case"end":return t.stop()}}),t)})))()}fetchAccountBalance(){var e=this;return Object(i.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBalance();case 2:a=t.sent,n=window.tronWeb.fromSun(a),e.setState({accountBalance:n});case 5:case"end":return t.stop()}}),t)})))()}fetchAccountBandwidth(){var e=this;return Object(i.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBandwidth();case 2:a=t.sent,e.setState({accountBandwidth:a});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.accountAddress,a=e.accountBalance,n=e.accountBandwidth;return r.a.createElement("div",null,r.a.createElement("h5",{className:"text-center"},"Connected Wallet"),r.a.createElement("h6",{className:"text-center"},"Address:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",{style:{fontSize:"11px"}},t)),r.a.createElement("br",null),r.a.createElement("br",null),"Balance:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,a," TRX")),r.a.createElement("br",null),r.a.createElement("br",null),"Bandwidth:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,n)),r.a.createElement("br",null)))}}var x=a(55),g=a.n(x),k="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",I=r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("img",{src:g.a,className:"img-fluid",alt:"TronLink logo"})),N=()=>{window.open(k,"_blank")},W=e=>{var t=e.installed;return void 0!==t&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tronLink row",onClick:N,style:{padding:"3em"}},r.a.createElement("div",{className:"info col-sm-8"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously created wallet.")),I)):r.a.createElement("div",{className:"row",onClick:N},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:k,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),I)};class R extends n.Component{constructor(e){super(e),this.state={tronWeb:{installed:!1,loggedIn:!1}}}componentDidMount(){var e=this;return Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(t=>{var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return e.setState({tronWeb:a}),t();var n=0,r=setInterval(()=>{if(n>=10){return window.tronWeb=new m.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),e.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),t()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;e.setState({tronWeb:a}),t()},100)});case 2:e.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",()=>{e.state.tronWeb.loggedIn||e.setState({tronWeb:{installed:!0,loggedIn:!0}})})),u.setTronWeb(window.tronWeb);case 4:case"end":return t.stop()}}),t)})))()}render(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"convert-area",id:"convert"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"convert-wrap"},r.a.createElement("div",{className:"row justify-content-center align-items-center flex-column pb-30"},r.a.createElement("h1",{className:"text-white"},"Make your investment")),r.a.createElement("div",{className:"row justify-content-center align-items-start"},r.a.createElement("div",{className:"col-lg-6 cols"},r.a.createElement(w,null)),r.a.createElement("div",{className:"col-lg-6 cols"},r.a.createElement(E,null)))))),r.a.createElement(f,null),r.a.createElement(v,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(W,{installed:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(W,null)))}}var y=R,B=document.getElementById("root");c.a.render(r.a.createElement(y,null),B)},55:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},56:function(e,t,a){e.exports=a(193)},85:function(e,t){},86:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.db230f3c.chunk.js.map