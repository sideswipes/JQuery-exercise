// JavaScript source code
$(document).ready(function () {
  /*  $('p').eq(1).hide();
    $('a.more').click(function (event) {
        event.preventDefault();
        $('p').eq(1).slideDown();
        $(this).hide();
    });
    */

      /*  var $firstPara = $('p').eq(1);
        $firstPara.hide();
        $('a.more').click(function (event) {
            event.preventDefault();
            if ($firstPara.is(':hidden')) {
                $firstPara.fadeIn('slow');
                $(this).text('read less');
            } else {
                $firstPara.fadeOut('slow');
                $(this).text('read more');
            }
        });
        */


        /*var $firstPara = $('p').eq(1);
        $firstPara.hide();
        $('a.more').click(function(event) {
            event.preventDefault();
            $firstPara.slideToggle('slow');
            var $link = $(this);
            if ($link.text() == 'read more') {
                $link.text('read less');
            } else {
                $link.text('read more');
            }
        });*/


    /*
        .animate()方法，用于创建控制更加
    精细的自定义动画。 .animate()方法有两种形式，第一种形式接收以下4个参数。
     一个包含样式属性及值的对象：与本章前面讨论的.css()方法中的参数类似。
     可选的时长参数：既可以是预置的字符串，也可以是毫秒数值。 
     可选的缓动（easing）类型：
     可选的回调函数：
    把这4个参数放到一起，结果如下所示：
    .animate({property1: 'value1', property2: 'value2'},
    duration, easing, function() {
    alert('The animation is finished.');
    }
    );
    */
    var $firstPara = $('p').eq(1);
    $firstPara.hide();
    $('a.more').click(function (event) {
        event.preventDefault();
        $firstPara.animate({ height: 'toggle' }, 'slow');
        var $link = $(this);
        if ($link.text() == 'read more') {
            $link.text('read less');
        } else {
            $link.text('read more');
        }
    });

    $(document).ready(function () {
        $('div.label').click(function () {
            var paraWidth = $('div.speech p').outerWidth();
            var $switcher = $(this).parent();
            var switcherWidth = $switcher.outerWidth();
            $switcher.animate({
                borderWidth: '5px',
                left: paraWidth - switcherWidth,
                height: '+=20px'
            }, 'slow');
        });
    });

    $(document).ready(function () {
        $('div.label').click(function () {
            var paraWidth = $('div.speech p').outerWidth();
            var $switcher = $(this).parent();
            var switcherWidth = $switcher.outerWidth();
            $switcher.css({
                position: 'relative'
            }).animate({
                borderWidth: '5px',
                left: paraWidth - switcherWidth,
                height: '+=20px'
            }, 'slow');
        });
    });

    $(document).ready(function() {
        $('div.label').click(function() {
            var paraWidth = $('div.speech p').outerWidth();
            var $switcher = $(this).parent();
            var switcherWidth = $switcher.outerWidth();
            $switcher
            .css({position: 'relative'})
            .fadeTo('fast', 0.5)
            .animate({left: paraWidth - switcherWidth}, 'slow')
            .fadeTo('slow', 1.0)
            .slideUp('slow')
            .slideDown('slow');
        });
    });
    /*(1) 通过.fadeTo()将其不透明度减退为0.5。
    (2) 通过.animate()将其移动到右侧。
    (3) 通过.fadeTo()将其渐增回完全不透明。
    (4) 通过.slideUp()隐藏它。
    (5) 通过.slideDown()再将其显示出来。*/

    $(document).ready(function () {
        $('div.label').click(function () {
            var paraWidth = $('div.speech p').outerWidth();
            var $switcher = $(this).parent();
            var switcherWidth = $switcher.outerWidth();
            $switcher
            .css({ position: 'relative' })
            .fadeTo('fast', 0.5)
            .animate({
                left: paraWidth - switcherWidth
            }, {
                duration: 'slow',
                queue: false
            })
            .fadeTo('slow', 1.0)
            .slideUp('slow')
            .slideDown('slow');
        });
    });
    $(document).ready(function () {
        $('p').eq(2).css('border', '1px solid #333');
        $('p').eq(3).css('backgroundColor', '#ccc').hide();
    });
   /* $(document).ready(function () {
        $('p').eq(2)
        .css('border', '1px solid #333')
        .click(function () {
            $(this).slideUp('slow').next().slideDown('slow');
        });
        $('p').eq(3).css('backgroundColor', '#ccc').hide();
    });*/
    $(document).ready(function () {
        $('p').eq(2)
        .css('border', '1px solid #333')
        .click(function () {
            var $clickedItem = $(this);
            $clickedItem.next().slideDown('slow', function () {
                $clickedItem.slideUp('slow');
            });
        });
        $('p').eq(3).css('backgroundColor', '#ccc').hide();
    });


    /*
    修改样式表，一开始先隐藏页面内容，当页面加载后，慢慢地淡入内容。
    $body.css('display','none');
    $body.fadeIn(3000);//此处的时间可以根据需要自行设置。

    在鼠标悬停到段落上面时，给段落应用黄色背景。
    $(document).ready(function(){
         $('p').mouseover(function(){
           $(this).css('backgroundColor', 'yellow')
           .mouseout(function(){
              $(this).css('backgroundColor', 'white')
            });
      });//改进版方法做了扩展，鼠标悬停时，相应段落应用黄色背景色，当鼠标移开后变成白色。
     });

     单击标题(<h2>)使其不透明度变为25%，同时添加20px的左外边距，当这两个效果完成后，把讲话文本变成50%的不透明度。
    $(document).ready(function(){
        $('h2').on('click', function(){
        $(this)
        .fadeTo('slow', 0.25)
        .animate({
            paddingLeft: '+=20px'
        },{
            duration: 'slow',
            queue:false
        })
        .queue(function(next) {
            $('div.speech').fadeTo('slow', 0.5)
        })
        })
    });
    按下方向键时，使样式转换器向相应的方向平滑移动20像素；四个方向键的键码分别是37(左)、38(上)、39(右)、40(下)
      $(document).ready(function(){
      var key_left = 37;
      var key_up = 38;
      var key_right = 39;
      var key_down = 40;
      var $switcher = $('#switcher');
      $switcher.css('position', 'relative');
      $(document).keyup(function(event){
        switch(event.which){
          case 37:
            $switcher 
            .animate({
              left: '-=20px'
            },{
              duration: 'fast'
            })
              break;
          case 38:
            $switcher
            .animate({
              top: '-=20px'
            },{
              duration: 'fast' 
            })
            break;
          case 39:
            $switcher
            .animate({
              left: '+=20px'
            },{
              duration: 'fast'
            })
            break;
          case 40:
            $switcher
           .animate({
             top: '+=20px'
           },{
             duration: 'fast' 
           })
        }
      })
    });
    */
});