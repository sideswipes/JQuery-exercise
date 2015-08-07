// JavaScript source code
$(document).ready(function () {
    $('div.poem-stanza').addClass('highlight');//
    
    
    console.log('hello world');/*这里的代码表明，可以向console.log()方法中传入任何表达式。
    字符串、数值等简单的值会被直接打印出来，而jQuery对象等复杂的值则会以容易理解的格式展示出来*/
    console.log('52');
    console.log($('div.poem-stanza'));
   
    
    $('#selected-plays > li').addClass('horizontal');
    /*使用子元素组合符（>）将horizontal类只添加到位于顶级的项中。实际上，位
    于$()函数中的选择符的含义是，查找ID为selected-plays的元素（#selected-plays）的
    子元素（>）中所有的列表项（li）。*/
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');/*
    这一次取得的每个列表项（<li>）：
  是ID为selected-plays的元素（#selected-plays）的后代元素。
  没有horizontal类（:not(.horizontal)）。
    在为这些列表项添加了sub-level类之后，它们的背景颜色变为在样式表规则中定义的浅灰色。*/
    
    
    $('a[href ^ ="mailto:"]').addClass("mailto");//寻找所有带href属性（[href]）且以mailto开头（^="mailto:"]）的锚元素（a）
    $('a[href $ =".pdf"]').addClass("pdflink");//以.pdf结尾的 加类
    $('a[href ^ ="http"][href*="henry"]').addClass('henrylink');//为href属性即以http开头且任意位置包含henry的所有链接添加一个henrylink类



    $('tr:odd').addClass('alt');/*eq()选择符、 :odd和:even选
    择符都使用JavaScript内置从0开始的编号方式，因此，第一行的编号为0（偶数），第二行的编号为1（奇数） ，依此类推
    奇数行使用:even选择符
    :contains()选择器选取包含指定字符串的元素$('td:contains(Henry)').addClass('highlight');
    :input 输入字段、文本区、选择列表和按钮元素
    :button 按钮元素或type属性值为button的输入元素
    :enabled 启用的表单元素
    :disabled 禁用的表单元素
    :checked 勾选的单选按钮或复选框
    :selected 选择的选项元素
    */
    /*$('tr:nth-child(odd)').addClass('alt');如果一个页面上存在另外一个表格，我们则真有可能会看到意料之外的
    结果。例如，因为Plays表格中的最后一行为“另一种”浅灰色背景，所以Sonnets表格的第一行
    的背景就会为白色。解决这个问题的一种方法是使用:nth-child()选择符。这个选择符相对于
    元素的父元素而非当前选择的所有元素来计算位置，它可以接受数值、 odd或even作为参数
    值得一提的是， :nth-child()是jQuery中唯一从1开始计数的选择符*/


    $('a').filter(function() {
        return this.hostname && this.hostname != location.hostname;
    }).addClass('external');
    /*第二行代码可以筛选出符合下面两个条件的<a>元素。
  必须包含一个带有域名（this.hostname）的href属性。这个测试可以排除mailto及
    类似链接。 链接指向的域名（还是this.hostname）必须不等于（!=）页面当前所在域的名称（location.hostname）。
    更准确地说， .filter()方法会迭代所有匹配的元素，对每个元素都调用传入的函数并测试
    函数的返回值。如果函数返回false，则从匹配集合中删除相应元素；如果返回true，则保留相
    应元素。*/

    $(document).ready(function () {
       $('td:contains(Henry)').next().addClass('highlight');
    });//.next()方法只选择下一个最接近的同辈元素。要想突出显示Henry所在单元格后面的全部单元格，可以使用.nextAll()方法
    $(document).ready(function () {
       $('td:contains(Henry)').nextAll().addClass('highlight');
    });


    //练习1
    /*
    给位于嵌套列表第二个层次的所有<li>元素添加special类；
    $(document).ready(function(){
        $('#selected-plays > li > ul > li').addClass('special');
    });

    给位于表格第三列的所有单元格添加year类；
    $(document).ready(function(){
        $('td:nth-child(3)').addClass('year');
    });

    为表格中包含文本Tragedy的第一行添加special类；
    $(document).ready(function(){
        $('tr:contains(Tragedy)').filter('tr:eq(0)').addClass('special');
    });
    
    选择包含链接(<a>)的所有列表项(<li>元素)，为每个选中的列表项的同辈列表项元素添加afterlink类;
    $(document).ready(function(){
        $('#selected-plays > li > ul > li:has(a)').nextAll().not('li:has(a)').addClass('afterlink');
    });


    为与.pdf链接最接近的祖先元素<ul>添加tragedy类；
    $(document).ready(function(){
        $('a[href$=".pdf"]').parent().parent().addClass('tragedy');
    });

    */



    $('#switcher-default').on('click', function () {
        $('body').removeClass('narrow');
        $('body').removeClass('large');
    });
    $('#switcher-narrow').on('click', function () {
        $('body').addClass('narrow');
        $('body').removeClass('large');
    });
    $('#switcher-large').on('click', function () {
        $('body').removeClass('narrow');
        $('body').addClass('large');
    });
    

 
    $('#switcher h3').click(function () {
        $('#switcher button').toggleClass('hidden');
    });

    $('#switcher h3').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });


    /*
    在Charles Dickens被单击时，给它应用selected样式。
       $('.author').on('click',function(){
        $(this).addClass('selected');
      });


    在双击章标题(<h3 class=”chaper-title”>)时，切换章文本的可见性。
    $('.chapter-title').on('dblclick',function(){
        $(this).nextAll().toggleClass('hidden');
    });



    当用户按下向右方向键时，切换到下一个body类；右方向键的键码是39.
    //注：原题只要求按下右方向键切换就可以，下面的方法除了完成题目要求外还将键盘反应和样式转换器关联到一起，使二者可以联动。
        $(document).ready(function(){
            var temp = '#switcher-default';
            var key = 39;
            $('#switcher-default').addClass('selected').on('click', function(){
                $('body').removeClass().addClass('default');
            });
            $('#switcher-default').trigger('click');
              $('#switcher-narrow').on('click', function(){
            $('body').removeClass().addClass('narrow');
            })
            $('#switcher-large').on('click', function(){
                $('body').removeClass().addClass('large');
            })
            $('#switcher button').on('click', function(){
                $('#switcher button').removeClass('selected');
                $(this).addClass('selected');
                temp = $(this);//识别哪个按钮被选中了
            });
        $(document).keyup(function(event){
            if(key == event.which){
            if(temp == '#switcher-default'){
                $('#switcher-default').trigger('click');
            }//模拟用户点击Default，初始化temp对象，使得页面加载完按下方向键时就可以切换
            if(temp.attr('id') == 'switcher-large'){
                $('#switcher-default').trigger('click');//完成使用方向键在3中样式中循环切换
            }else{
                $(temp).removeClass('selected').next().trigger('click');//按下方向键后切换到当前选中按钮对应的下一个样式
            };
            };
           });
        });



        使用console.log()函数记录在段落中移动的鼠标的坐标位置。
         $(document).mousemove(function(event){
            console.log(event.pageX);
            console.log(event.pageY);
          });

          使用.mousedown()和.mouseup()跟踪页面中的鼠标事件。如果鼠标按键在按下它的地方被释放，
          则为所有段落添加hidden类。如果是在按下它的地方之下被释放的，删除所有段落的hidden类。
          $(document).ready(function(){
              var up_Y,down_Y;
              $(document).on('click', function(){
                $('p').addClass('hidden');
              });
              $(document).mousedown(function(down){
                down_Y = down.pageY;
              });
              $(document).mouseup(function(up){
                up_Y = up.pageY;
                if(down_Y < up_Y){
                  $('p').removeClass('hidden');
                };
                });
            //注：判断鼠标按下和释放为同一个位置的方法这里用了click方法判断，
            如果用.mousedown()和.mouseup()来判断的话，只要在加上判断.pageX相等的条件即可。
           });
       */


            //在样式转换器按钮上启用悬停效果
            $('#switcher').hover(function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
            });
            //让样式转换器能够扩展和折叠
            var toggleSwitcher = function(event) {
                if (!$(event.target).is('button')) {
                    $('#switcher button').toggleClass('hidden');
                }
            };
            $('#switcher').on('click', toggleSwitcher);
            //模拟一次单击，以便开始时处理折叠状态
            $('#switcher').click();
            //setBodyClass()用于修改页面样式
            //样式转换器的状态也会被更新
            var setBodyClass = function(className) {
                $('body').removeClass().addClass(className);
                $('#switcher button').removeClass('selected');
                $('#switcher-' + className).addClass('selected');
                $('#switcher').off('click', toggleSwitcher);
                if (className == 'default') {
                    $('#switcher').on('click', toggleSwitcher);
                }
            };
            //开始的时候先选中switcher-default按钮
            $('#switcher-default').addClass('selected');
            //映射键码和对应的按钮
            var triggers = {
                D: 'default',
                N: 'narrow',
                L: 'large'
            };
            //当按钮被单击时调用setBodyClass()
            $('#switcher').click(function(event) {
                if ($(event.target).is('button')) {
                    var bodyClass = event.target.id.split('-')[1];
                    setBodyClass(bodyClass);
                }
            });
            //当按下相应按键时调用setBodyClass()
            $(document).keyup(function(event) {
                var key = String.fromCharCode(event.keyCode);
                if (key in triggers) {
                    setBodyClass(triggers[key]);
                }
            });

         //每次单击字体变大40%
            $(document).ready(function () {
                var $speech = $('div.speech');
                $('#switcher-large').click(function () {
                    var num = parseFloat($speech.css('fontSize'));
                    num *= 1.4;
                    $speech.css('fontSize', num + 'px');
                });
            });
       //单击字体变大或者变小
        $(document).ready(function() {
        var $speech = $('div.speech');
        $('#switcher button').click(function() {
            var num = parseFloat($speech.css('fontSize'));
            if (this.id== 'switcher-large') {
                num *= 1.4;
            } else if (this.id== 'switcher-small') {
                num /= 1.4;
            }
            $speech.css('fontSize', num + 'px');
        });
        });
        //进一步完善 判断id然后变大变小或者不变
        $(document).ready(function () {
            var $speech = $('div.speech');
            var defaultSize = $speech.css('fontSize');
            $('#switcher button').click(function () {
                var num = parseFloat($speech.css('fontSize'));
                switch (this.id) {
                    case 'switcher-large':
                        num *= 1.4;
                        break;
                    case 'switcher-small':
                        num /= 1.4;
                        break;
                    default:
                        num = parseFloat(defaultSize);
                }
                $speech.css('fontSize', num + 'px');
            });
        });

});