$(function(){$.getUrlParam=function(a){var t=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(t);return null!=e?unescape(e[2]):null};var e,a,r,t,c,u,l=$.getUrlParam("categoryid"),o=$.getUrlParam("productId");e=".su_nav",a=l,$.ajax({url:baseUrl+"/api/getcategorybyid",data:{categoryid:a||0},success:function(a){var t=template("categoryTitle",a);$(e).html(t)}}),r=".details_image",t=o,$.ajax({url:baseUrl+"/api/getproduct",data:{productid:t||0},success:function(a){var t=template("productShow",a);$(r).html(t)}}),c=".evaluate_info",u=o,$.ajax({url:baseUrl+"/api/getproductcom",data:{productid:u||0},success:function(a){var t=template("evaluate_info",a);$(c).html(t)}})});