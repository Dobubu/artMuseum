$(document).ready(function() {
  // goTop按鈕 出現消失
  $(window).load(function() {　　　　
    $(window).bind('scroll resize', function() {

      var $this = $(this);　　　　
      var $this_Top = $this.scrollTop();　　　　 //當高度小於100時，關閉區塊
      if ($this_Top < 100) {　　　　
        $('.goTop').stop().animate({
          bottom: "-100px"
        });
        // $('.goTop').fadeOut();　　　　
      }　　　　
      if ($this_Top > 100) {　　　　
        // $('.goTop').fadeIn();
        $('.goTop').stop().animate({
          bottom: "10px"
        });
      }　　　
    }).scroll();
  });

  //goTop按鈕 效果
  $('.goTop').click(function() {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
      scrollTop: 0
    }, 600);
    return false;
  });
})
