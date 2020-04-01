$(function(){
    var $Swiper=(function(){
    var html = '' +'<div>'+'<div class="slider" id="slider">'
                +'<div class="slide"><img src="img/b5.png" alt=""></div>'
                +'<div class="slide"><img src="img/b1.png" alt=""></div>'
                +'<div class="slide"><img src="img/b2.png" alt=""></div>'
                +'<div class="slide"><img src="img/b3.png" alt=""></div>'
                +'<div class="slide"><img src="img/b4.png" alt=""></div>'
                +'<div class="slide"><img src="img/b5.png" alt=""></div>'
                +'<div class="slide"><img src="img/b1.png" alt=""></div>'+'</div>'
                +'<span id="left"><</span>'+'<span id="right">></span>'
                +'<ul class="nav" id="navs">'
                +'<li>1</li>'+'<li>2</li>'+'<li>3</li>'+'<li>4</li>'+'<li>5</li>'+'</ul>'+'</div>',
        $sw=$(html);

    var $slider=$sw.find('#slider'),
        $left=$sw.find('#left'),
        $right=$sw.find('#right'),
        $navs=$sw.find('#navs'),
        $navsChild=$navs.children(),
        $span=$sw.find('span'),
        index = 0;

    function Swiper(){
        var auto;
        //设定第一个为active
        //.eq()返回值为一个对象
        $('#box').append($sw.children());
        $navs.find('li').eq(0).addClass('active');
        auto = setInterval(rightClick, 2500);
        
        //跳转指定页面
        $navsChild.bind('click',function(){
            $navs.children().removeClass('active');
            $(this).addClass('active');
            index = Number($(this).html());
            $slider.animate({left:-index*1200},'slow');
        })

        //点击左箭头
        $left.click(function (){
            index--;
            $navsChild.removeClass('active');
            if(index <= 0){
                index = 5;
                $slider.animate({left:0},'slow',()=>{$slider.css('left',-5*1200);});
                
            }
            $slider.animate({left:-index*1200},'slow');
            $navsChild.eq(index-1).addClass('active');
        })
        //点击右箭头
        function rightClick(){
            index++;
            $navsChild.removeClass('active');
            if(index >= 6){
                index = 1;
                $slider.animate({left:-6*1200},'slow',()=>{$slider.css('left',-1*1200);});
            }
            $navsChild.eq(index-1).addClass('active');
            $slider.animate({left:-index*1200},'slow');
        }
        
       //鼠标悬停时
          $span.hover(function (){
            clearInterval(auto);
            $span.css('opacity',0.5);
        })

        //鼠标离开时
        $span.mouseout(function (){
            $span.animate({opacity:0.1},1500)
            auto = setInterval(rightClick, 2500);
        })
        $right.click(rightClick);
    }
    return {
        Swiper:Swiper
    }
    }());
    $Swiper.Swiper();
})