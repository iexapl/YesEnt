var langs={};
$.extend(langs,{
	"zh-cn":{
		more_title:"更多",
		back_desc:"返回",
		myfavorite_desc:"我的收藏",
		message_desc:"通知",
		register_desc:"注册",
		login_desc:"登录",
		logout_desc:"退出此账号",
		feedback_desc:"意见反馈",
		about_desc:"关于我们",
		site_name:"Yes娱乐"
	},
	"zh-tw":{
		more_title:"更多",
		back_desc:"返回",
		myfavorite_desc:"我的收藏",
		message_desc:"通知",
		register_desc:"註冊",
		login_desc:"登錄",
		logout_desc:"退出此帳號",
		feedback_desc:"意見回饋",
		about_desc:"關於我們",
		site_name:"Yes娛樂"
	}
});
var lang=langs[(navigator.browserLanguage ? navigator.browserLanguage : navigator.language).toString().toLowerCase()];
$(document).bind("ready",function(e) {
   var re;
   for( ele in  lang)
   {
	   re=new RegExp("{#" + ele.toString() + "}","ig");
	   $("html").html($("html").html().replace(re, lang[ele]));
   }
});