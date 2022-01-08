function is_weixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}

;(function($){

$(function(){
  var isWinxin = is_weixin()

  if (isWinxin) {
    $('body').addClass('weixin')
  }
})

})(jQuery)

