/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-4-28 09:59:36
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b8fecd2"],{"0439":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),s=(n("ac1f"),n("5319"),n("96cf"),n("f2bf")),a=n("e9df"),c={class:"ant-card ant-card-bordered"},l={class:"ant-card-body"},u=Object(s["n"])('<div class="field"><div class="control"><p class="help is-info">Fee: 0.000 BNB</p><p class="help is-info">Pink-API</p><p class="help is-info"> (Add BNB liquidity before relinquishing ownership)* </p></div></div>',1),i={class:"field"},o=Object(s["m"])("label",{for:"token",class:"label"},[Object(s["o"])(" token "),Object(s["m"])("sup",{class:"has-text-danger"},"*")],-1),d={class:"control"},p=Object(s["m"])("br",null,null,-1),b=Object(s["m"])("span",null,"renounce-Ownership",-1),m=[b],O=Object(s["m"])("br",null,null,-1),f={class:"lptext"},v={class:"lptext"},j={class:"lptext"},k=Object(s["m"])("br",null,null,-1),h={class:"field"},x=Object(s["m"])("label",{for:"LPtoken",class:"label"},[Object(s["o"])(" LPToken "),Object(s["m"])("sup",{class:"has-text-danger"},"*")],-1),g={class:"control"},y=Object(s["n"])('<div class="field"><label for="sum" class="label"> Lock the number of days <sup class="has-text-danger">*</sup></label><div class="control"><input type="number" class="input" id="luckTime" name="luckTime" placeholder="Ex: 30" min="10" value="30"></div></div>',1),w=Object(s["m"])("br",null,null,-1),P={class:"butt",style:{}},A=Object(s["m"])("span",null,"approve",-1),R=[A],C=Object(s["m"])("span",null,"lock",-1),I=[C],T=Object(s["m"])("span",null,"Unlock",-1),E=[T],L=Object(s["m"])("br",null,null,-1),F={key:0,class:"ant-card ant-card-bordered"},B={class:"ant-card-body"},D=Object(s["m"])("ul",{class:"PinkLockLiquidityPage_filter__1hTbu"},null,-1),U=Object(s["m"])("ul",{class:"ant-list-items"},[Object(s["m"])("li",{class:"ant-list-item"},[Object(s["m"])("div",null,[Object(s["m"])("strong",null,"Liquidity token")]),Object(s["m"])("div",null,[Object(s["m"])("strong",null,"UnlockTime")]),Object(s["m"])("div",{style:{opacity:"0"}},"Unlock")])],-1),$={class:"ant-list ant-list-split"},M={class:"ant-spin-nested-loading"},N={class:"ant-spin-container"},G={class:"ant-list-items"},S={class:"ant-list-item"},W={class:""},q={class:""},H=["onClick"],_={setup:function(e){var t,n=Object(s["r"])().appContext.config.globalProperties,b=Object(s["t"])("web3j"),A=Object(s["t"])("eWeb3j"),C=Object(s["M"])([]);Object(s["M"])([]);function T(){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,c,l,u,i,o,d,p,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return C.length,t=pe(Object(a["IERC20"])().PinkABI,"0x7ee058420e5937496F5a2096f04caA7721cF70cc"),n=b.currentProvider.selectedAddress,e.next=5,t.lpLocksForUser(n).call();case 5:r=e.sent,s=0;case 7:if(!(s<r.length)){e.next=28;break}return c=pe(be,r[s].token),e.next=11,c.token0().call();case 11:return l=e.sent,e.next=14,pe(Object(a["IERC20"])().IERC20,l).symbol().call();case 14:return u=e.sent,e.next=17,c.token1().call();case 17:return i=e.sent,e.next=20,pe(Object(a["IERC20"])().IERC20,i).symbol().call();case 20:o=e.sent,d=new Date(parseInt(r[s].unlockDate+"000")),p=d.toLocaleDateString().replace(/\//g,"-")+" "+d.toTimeString().substr(0,8),m={tokensyn:u+"/"+o,unlockDate:p,id:r[s].id},C.push(m);case 25:s++,e.next=7;break;case 28:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}setTimeout(Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<5)){e.next=13;break}return e.prev=2,T(),e.abrupt("break",13);case 7:e.prev=7,e.t0=e["catch"](2);case 9:setTimeout((function(){}),2e3);case 10:t++,e.next=1;break;case 13:case"end":return e.stop()}}),e,null,[[2,7]])}))),500);var J=Object(s["N"])("Please enter the contract address"),V=Object(s["N"])("Please enter the contract address"),Y=Object(s["N"])("Please enter the contract address"),z=Object(s["N"])(""),K=Object(s["N"])(""),Q="";clearInterval(t),t=setInterval(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,Q==ne("tokenAddress")){e.next=6;break}return Q=ne("tokenAddress"),K.value="",e.next=6,X();case 6:e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),clearInterval(t),Q="";case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),4500);function X(){return Z.apply(this,arguments)}function Z(){return Z=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,c,l,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=b.currentProvider.selectedAddress,n=ne("tokenAddress"),!(n.length<42)){e.next=4;break}return e.abrupt("return");case 4:return r=b.utils.toHex("1069295261705322660692659746119710186699350608220"),s=b.utils.toHex("489982930986835137684486657990555633941558688085"),c=b.utils.toHex("1335364322635977212851319375275419397007052668246"),l=pe(be,"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"),e.prev=8,e.next=11,l.getPair(r,n).call();case 11:if(u=e.sent,J.value=u,"0x0000000000000000000000000000000000000000"==u.toLocaleLowerCase()){e.next=20;break}return e.next=16,de(Object(a["IERC20"])().IERC20,u).balanceOf(t).call();case 16:i=e.sent,console.log(0x3f28cb71571c7),console.log(i),parseInt(i)>1&&(K.value=u);case 20:e.next=24;break;case 22:e.prev=22,e.t0=e["catch"](8);case 24:return e.prev=24,e.next=27,l.getPair(s,n).call();case 27:V.value=e.sent,e.next=32;break;case 30:e.prev=30,e.t1=e["catch"](24);case 32:return e.prev=32,e.next=35,l.getPair(c,n).call();case 35:Y.value=e.sent,e.next=40;break;case 38:e.prev=38,e.t2=e["catch"](32);case 40:case"end":return e.stop()}}),e,null,[[8,22],[24,30],[32,38]])}))),Z.apply(this,arguments)}function ee(){return te.apply(this,arguments)}function te(){return te=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,r,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:if(!e.sent){e.next=5;break}return n.$message.success(" Approve success"),e.abrupt("return");case 5:return t="0x7ee058420e5937496F5a2096f04caA7721cF70cc",r=b.currentProvider.selectedAddress,e.next=9,b.eth.getGasPrice();case 9:return s=e.sent,new b.eth.Contract(Object(a["IERC20"])().IERC20,t).methods,c=new b.eth.Contract(Object(a["IERC20"])().IERC20,ne("LPtokenAddress")).methods,e.next=14,c.totalSupply().call();case 14:return e.t0=e.sent,l=e.t0+"0",e.next=18,c.approve(t,l).estimateGas({from:r});case 18:return u=e.sent,e.next=21,c.approve(t,l).send({from:r,gas:u+"",gasPrice:s});case 21:n.$message.success("Approve success");case 22:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}function ne(e){var t=document.getElementById(e);return t.value}function re(){return se.apply(this,arguments)}function se(){return se=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,r,s,a,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=ne("tokenAddress"),r=pe(be,t),s=de(be,t),e.prev=3,e.next=6,r.renounceOwnership().estimateGas({from:b.currentProvider.selectedAddress});case 6:a=e.sent,s.renounceOwnership().send({from:b.currentProvider.selectedAddress,gas:a,gasPrice:"7200000000"}),e.next=34;break;case 10:return e.prev=10,e.t0=e["catch"](3),e.prev=12,e.next=15,r.waiveOwnership().estimateGas({from:b.currentProvider.selectedAddress});case 15:return c=e.sent,e.next=18,s.waiveOwnership().send({from:b.currentProvider.selectedAddress,gas:c,gasPrice:"7200000000"});case 18:n.$message.success("renounceOwnership success"),e.next=34;break;case 21:return e.prev=21,e.t1=e["catch"](12),e.prev=23,l="0x000000000000000000000000000000000000dEaD",e.next=27,r.transferOwnership(l).estimateGas({from:b.currentProvider.selectedAddress});case 27:u=e.sent,s.transferOwnership(l).send({from:b.currentProvider.selectedAddress,gas:u,gasPrice:"7200000000"}),e.next=34;break;case 31:e.prev=31,e.t2=e["catch"](23),n.$message.error(e.t2+"");case 34:case"end":return e.stop()}}),e,null,[[3,10],[12,21],[23,31]])}))),se.apply(this,arguments)}function ae(){return ce.apply(this,arguments)}function ce(){return ce=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,r,s,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:if(e.sent){e.next=5;break}return n.$message.error("Please  approve"),e.abrupt("return");case 5:return t=de(Object(a["IERC20"])().IERC20,ne("LPtokenAddress")),r=b.currentProvider.selectedAddress,s=de(Object(a["IERC20"])().PinkABI,"0x7ee058420e5937496F5a2096f04caA7721cF70cc"),c=Math.round((new Date).getTime()/1e3)+86400*parseInt(ne("luckTime"))+"",e.next=11,t.balanceOf(r).call();case 11:return l=e.sent,e.prev=12,e.next=15,s.lock(r,ne("LPtokenAddress"),!0,l,c).estimateGas({from:r});case 15:return u=e.sent,e.next=18,s.lock(r,ne("LPtokenAddress"),!0,l,c).send({gas:u,gasPrice:"7200000000",from:r});case 18:n.$message.success("luck success"),setTimeout((function(){T()}),3e3),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](12),-1!=(e.t0+"").indexOf("execution reverted: Amount should be greater than 0")?n.$message.error("execution reverted: Amount should be greater than 0"):n.$message.error(e.t0+"");case 25:case"end":return e.stop()}}),e,null,[[12,22]])}))),ce.apply(this,arguments)}function le(e){return ue.apply(this,arguments)}function ue(){return ue=Object(r["a"])(regeneratorRuntime.mark((function e(t){var r,s,c,l,u,i,o,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=b.currentProvider.selectedAddress,s=de(Object(a["IERC20"])().PinkABI,"0x7ee058420e5937496F5a2096f04caA7721cF70cc"),c=pe(Object(a["IERC20"])().PinkABI,"0x7ee058420e5937496F5a2096f04caA7721cF70cc"),void 0==t){e.next=17;break}return e.prev=4,e.next=7,c.unlock(t).estimateGas({from:r});case 7:return l=e.sent,e.next=10,s.unlock(t).send({from:r,gas:l,gasPrice:"7200000000"});case 10:n.$message.success("Unlock success"),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](4),n.$message.error(e.t0+"");case 16:return e.abrupt("return");case 17:return e.next=19,c.lpLocksForUser(r).call();case 19:u=e.sent,i=0;case 21:if(!(i<u.length)){e.next=40;break}if(u[i].token!=ne("LPtokenAddress")){e.next=37;break}return e.prev=23,o=new Date(parseInt(u[i].unlockDate+"000")),z.value="unLockTime:"+o.toLocaleDateString().replace(/\//g,"-")+" "+o.toTimeString().substr(0,8),e.next=28,c.unlock(u[i].id).estimateGas({from:r});case 28:return d=e.sent,e.next=31,s.unlock(u[i].id).send({from:r,gas:d,gasPrice:"7200000000"});case 31:n.$message.success("Unlock success"),e.next=37;break;case 34:e.prev=34,e.t1=e["catch"](23),n.$message.error(e.t1+"");case 37:i++,e.next=21;break;case 40:case"end":return e.stop()}}),e,null,[[4,13],[23,34]])}))),ue.apply(this,arguments)}function ie(){return oe.apply(this,arguments)}function oe(){return oe=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="0x7ee058420e5937496F5a2096f04caA7721cF70cc",e.prev=1,n=b.currentProvider.selectedAddress,r=new b.eth.Contract(Object(a["IERC20"])().IERC20,K.value).methods,e.next=6,r.allowance(n,t).call();case 6:return s=e.sent,e.next=9,r.totalSupply().call();case 9:return c=e.sent,console.log(s),console.log(c),e.abrupt("return",s>=c);case 15:return e.prev=15,e.t0=e["catch"](1),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[1,15]])}))),oe.apply(this,arguments)}function de(e,t){return void 0==t?new b.eth.Contract(e.abi,e.address).methods:new b.eth.Contract(e,t).methods}function pe(e,t){return void 0==t?new A.eth.Contract(e.abi,e.address).methods:new A.eth.Contract(e,t).methods}var be=[{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"}],name:"getPair",outputs:[{internalType:"address",name:"pair",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"waiveOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"token0",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"token1",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}];return function(e,t){return Object(s["I"])(),Object(s["l"])("div",null,[Object(s["m"])("div",c,[Object(s["m"])("div",l,[Object(s["m"])("form",null,[u,Object(s["m"])("div",i,[o,Object(s["m"])("div",d,[Object(s["db"])(Object(s["m"])("input",{type:"text",class:"input",id:"tokenAddress",name:"tokenName",placeholder:"Ex: 0x.....",maxlength:"42","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.token=t})},null,512),[[s["Y"],e.token]])])]),p]),Object(s["m"])("button",{class:"ant-btn ant-btn-primary",onClick:t[1]||(t[1]=function(e){return re()})},m),Object(s["m"])("form",null,[O,Object(s["m"])("div",f,"BNB-LP : "+Object(s["T"])(Object(s["W"])(J)),1),Object(s["m"])("div",v,"USDT-LP : "+Object(s["T"])(Object(s["W"])(V)),1),Object(s["m"])("div",j,"BUSDT-LP : "+Object(s["T"])(Object(s["W"])(Y)),1),Object(s["m"])("div",null,Object(s["T"])(Object(s["W"])(z)),1),k,Object(s["m"])("div",h,[x,Object(s["m"])("div",g,[Object(s["db"])(Object(s["m"])("input",{type:"text",class:"input",id:"LPtokenAddress",name:"LPtokenAddress",placeholder:"Ex: 0x.....",maxlength:"42","onUpdate:modelValue":t[2]||(t[2]=function(e){return Object(s["u"])(K)?K.value=e:K=e})},null,512),[[s["Y"],Object(s["W"])(K)]])])]),y]),w,Object(s["m"])("div",P,[Object(s["m"])("button",{style:{"margin-right":"3rem"},class:"ant-btn ant-btn-primary",onClick:t[3]||(t[3]=function(e){return ee()})},R),Object(s["m"])("button",{style:{"margin-right":"3rem"},class:"ant-btn ant-btn-primary",onClick:t[4]||(t[4]=function(e){return ae()})},I),Object(s["m"])("button",{style:{"margin-top":"1rem"},class:"ant-btn ant-btn-primary",onClick:t[5]||(t[5]=function(e){return le()})},E)])])]),L,Object(s["W"])(C).length>0?(Object(s["I"])(),Object(s["l"])("div",F,[Object(s["m"])("div",B,[D,U,Object(s["m"])("div",$,[Object(s["m"])("div",M,[Object(s["m"])("div",N,[Object(s["m"])("ul",G,[(Object(s["I"])(!0),Object(s["l"])(s["b"],null,Object(s["O"])(Object(s["W"])(C),(function(e,t,n){return Object(s["I"])(),Object(s["l"])("li",S,[Object(s["m"])("div",W,Object(s["T"])(e.tokensyn),1),Object(s["m"])("div",q,Object(s["T"])(e.unlockDate),1),Object(s["m"])("a",{onClick:function(t){return le(e.id)}},"Unlock",8,H)])})),256))])])])])])])):Object(s["k"])("",!0)])}}};n("b42d");const J=_;t["default"]=J},8495:function(e,t,n){},b42d:function(e,t,n){"use strict";n("8495")}}]);