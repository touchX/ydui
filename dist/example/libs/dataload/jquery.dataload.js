!function(o){"function"==typeof define&&define.amd?define(["jquery"],o):"undefined"!=typeof exports?module.exports=o:o(jQuery)}(function(o){o.fn.dataload=function(e){return this.each(function(){function n(o,e){clearTimeout(o.tid),o.tid=setTimeout(function(){o.call(e)},200)}var a=o.extend({url:"",type:"get",dataType:"json",data:{},page:1,jsonpCallback:"",pageSize:10,pagestr:"page",initLoad:!0,loadtype:"click",triggerdom:"",appenddom:"",loadmoredom:"",loadingdom:"",callback:null},e),i=this,t=o(a.loadmoredom,i),d=o(a.loadingdom,i);o(i).append('<div id="J_DataLoadTag"></div>');var l={isloading:!1,isdone:!1,page:a.page,pageSize:a.pageSize,getContent:function(){var e=this;l.isloading||l.isdone||(l.isloading=!0,e.showLoading(),a.data[a.pagestr]=l.page,"jsonp"==a.dataType&&a.jsonpCallback&&o.ajaxSetup({jsonpCallback:a.jsonpCallback}),o.ajax({url:a.url,type:a.type,data:a.data,dataType:a.dataType,cache:!1,success:function(o){return l.page++,"function"==typeof a.callback&&a.callback(o,l.page-1),o.length<l.pageSize?(l.hideLoadMore(),void(l.isdone=!0)):void l.showLoadMore()},error:function(){console.error("网络错误")},complete:function(){e.hideLoading(),l.isloading=!1}}))},hideLoadMore:function(){"click"==a.loadtype&&t.hide()},showLoadMore:function(){"click"==a.loadtype&&t.show()},showLoading:function(){this.hideLoadMore(),d.show()},hideLoading:function(){d.hide()}};if(a.initLoad)l.getContent();else{if(!a.triggerdom)return void console.error("参数【triggerdom】必填");o(a.triggerdom,i).one("click",function(){l.getContent()})}if("scroll"==a.loadtype){var c=o(window).height();o(window).on("scroll",function(){n(function(){o("#J_DataLoadTag").offset().top<=c+o(window).scrollTop()+c/4&&l.getContent()},window)})}else{if(!a.loadmoredom)return void console.error("参数【loadmoredom】必填");t.on("click",function(){l.getContent()})}})}});