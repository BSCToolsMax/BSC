/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-18 15:49:35
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bf1559c"],{1280:function(e,t,n){"use strict";n.r(t);var s=n("1da1"),r=(n("ac1f"),n("1276"),n("a434"),n("96cf"),n("f2bf")),a=n("e9df"),c={class:"ant-card ant-card-bordered"},l={class:"ant-card-body"},o=Object(r["m"])("div",{class:"field"},[Object(r["m"])("div",{class:"control"},[Object(r["m"])("p",{class:"help is-info"},"Fee: 0.000 BNB")])],-1),i={class:"field"},d=Object(r["m"])("label",{for:"token",class:"label"},[Object(r["o"])(" token "),Object(r["m"])("sup",{class:"has-text-danger"},"*")],-1),u={class:"control"},p=Object(r["n"])('<div class="field"><label for="sum" class="label"> sum(Each address) <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="totalSupply" name="totalSupply" placeholder="Ex: 10000"></div></div><div class="field"></div><div class="has-text-centered mt-6 mb-4"></div><div class="field"><label for="token" class="label"> (address number &lt; 255) <sup class="has-text-danger">*</sup></label><div class="control"><textarea type="text" class="input" id="account" name="tokenName" placeholder="0x0000000000000000000000000000000000000000\r\n0x0000000000000000000000000000000000000001\r\n0x0000000000000000000000000000000000000002\r\n0x0000000000000000000000000000000000000003\r\n0x0000000000000000000000000000000000000004\r\n              " style="height:10rem;"></textarea></div></div>',4),b=Object(r["m"])("br",null,null,-1),m={class:"butt",style:{}},f=Object(r["m"])("span",null,"approve",-1),h=[f],v=Object(r["m"])("span",null,"airdrop",-1),j=[v],x={setup:function(e){var t=Object(r["t"])("web3j");function n(){return f.apply(this,arguments)}function f(){return f=Object(s["a"])(regeneratorRuntime.mark((function e(){var n,s,r,c,l,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.utils.toHex("1020220516228218853752583956447143109624721638431"),s=t.currentProvider.selectedAddress,e.next=4,t.eth.getGasPrice();case 4:return r=e.sent,new t.eth.Contract(Object(a["IERC20"])().IERC20,n).methods,c=new t.eth.Contract(Object(a["IERC20"])().IERC20,v("tokenAddress")).methods,e.next=9,c.totalSupply().call();case 9:return l=e.sent,e.next=12,c.approve(n,l).estimateGas({from:s});case 12:o=e.sent,c.approve(n,l).send({from:s,gas:o+"",gasPrice:r});case 14:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function v(e){var t=document.getElementById(e);return t.value}function x(){return O.apply(this,arguments)}function O(){return O=Object(s["a"])(regeneratorRuntime.mark((function e(){var n,s,r,c,l,o,i,d,u,p,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.utils.toHex("1020220516228218853752583956447143109624721638431"),s=t.currentProvider.selectedAddress,e.next=4,t.eth.getGasPrice();case 4:for(r=e.sent,c=v("account"),l=c.split("\n"),o=l.length-1;o>=0;o--)i=l[o],t.utils.isAddress(i)||l.splice(o,1);return e.next=10,new t.eth.Contract(Object(a["IERC20"])().IERC20,v("tokenAddress")).methods.decimals().call();case 10:return d=e.sent,u=t.utils.toWei(v("totalSupply"),d+""),p=new t.eth.Contract(Object(a["IERC20"])().PERC20,n).methods,e.next=15,p.sendErc20(l,u,v("tokenAddress")).estimateGas({from:s});case 15:b=e.sent,p.sendErc20(l,u,v("tokenAddress")).send({from:s,gas:b+"",gasPrice:r});case 17:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}return function(e,t){return Object(r["H"])(),Object(r["l"])("div",c,[Object(r["m"])("div",l,[Object(r["m"])("form",null,[o,Object(r["m"])("div",i,[d,Object(r["m"])("div",u,[Object(r["cb"])(Object(r["m"])("input",{type:"text",class:"input",id:"tokenAddress",name:"tokenName",placeholder:"Ex: 0x.....",maxlength:"255","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.token=t})},null,512),[[r["X"],e.token]])])]),p]),b,Object(r["m"])("div",m,[Object(r["m"])("button",{style:{"margin-right":"3rem"},class:"ant-btn ant-btn-primary",onClick:t[1]||(t[1]=function(e){return n()})},h),Object(r["m"])("button",{class:"ant-btn ant-btn-primary",onClick:t[2]||(t[2]=function(e){return x()})},j)])])])}}};n("711d");const O=x;t["default"]=O},"642c":function(e,t,n){},"711d":function(e,t,n){"use strict";n("642c")}}]);