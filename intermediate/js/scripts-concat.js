window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments;a.callee=a.callee.caller;a=[].slice.call(a);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(a){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),b;b=d.pop();)a[b]=a[b]||c})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());
soundManager.url="swf/";soundManager.flashVersion=9;soundManager.useFlashBlock=!1;
soundManager.onready(function(){var d=function(b){var a,e,d,c=document.cookie.split(";");for(a=0;a<c.length;a++)if(e=c[a].substr(0,c[a].indexOf("=")),d=c[a].substr(c[a].indexOf("=")+1),e=e.replace(/^\s+|\s+$/g,""),e==b)return unescape(d)},f=function(b){soundManager.stopAll();soundManager.destroySound(b);soundManager.createSound({id:b,url:b,autoLoad:!0,autoPlay:!0,onload:function(){},volume:50})};$("#cownter").flipCounter({number:d("cow")?parseInt(d("cow"),10):0,numIntegralDigits:1,numFractionalDigits:0,
digitClass:"counter-digit",counterFieldName:"counter-value",digitHeight:40,digitWidth:30,imagePath:"img/flipCounter-medium.png",easing:"easeOutQuad",duration:1E4});$("#cow").on("click",function(){var b=$("#cownter").flipCounter("getNumber")+1,a=Math.floor(1+Math.random()*12);$("#cownter").flipCounter("setNumber",b);f("sound/moo"+a+".ogg");a=new Date;a.setDate(a.getDate()+30);b=escape(b)+(30===null?"":"; expires="+a.toUTCString());document.cookie="cow="+b});$("#cow").on("mouseenter",function(){f("sound/intro.ogg");
$("#cow").off("mouseenter")})});