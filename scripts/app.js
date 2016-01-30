$(function(){
    var t=0;
    $(".yuan>li").css({background:"white"}).eq(0).css({background:"black"});
    $(document).click(function(e){
        e.stopPropagation();
    })
    $(".right1").click(function(){

       t++;
        if(t==4){
            t=3;
            return false;
        }
        $(".box").animate({marginLeft:-t*100+'%'},1000);
            $(".yuan>li").css({background:"white"}).eq(t).css({background:"black"});

    })
    $(".left1").click(function(){
        t--;
        if(t==-1){
            t=0;
            return false;}
        $(".box").animate({marginLeft: -t*100 + '%'},1000);
        $(".yuan>li").css({background:"white"}).eq(t).css({background:"black"});

    })
    //var tt,num;
    $(window).resize(function(){
        ll();

    });
    function ll(){
        if($(window).width()<760){
            $(".lbo").css("display","block");
            $(".lbo1").css("display","none");
            $(".container1").css("display","none");
            $(".container2").css("display","block");

        }else{
            $(".lbo").css("display","none");
            $(".lbo1").css("display","block");
            $(".container1").css("display","block");
            $(".container2").css("display","none");
        }
    }
    ll();








    //var margin;
    //touch.on(".box",'dragstart',function(ev){
    //     margin=$(".box")[0].offsetLeft;
    //
    //
    //});
    // touch.on(".box",'drag',function(ev){
    //     $(".box").css("marginLeft",ev.x+margin+"px");
    //
    //
    // });
    //
    //touch.on(".box",'dragend',function(ev){
    //    if(Math.abs(ev.x)>300||ev.factor<5) {
    //        if (ev.direction='left') {
    //            num++;
    //            if (num == $(".list").length - 1) {
    //                num = 0;
    //                $(".box").css({marginLeft: -num * 100 + '%'}, "slow");
    //            } else {
    //                $(".box").finish();
    //                $(".box").animate({marginLeft: -num * 100 + '%'});
    //            }
    //        } else {
    //            num--;
    //            if (num == -1) {
    //                num = 0;
    //                $(".box").css({marginLeft: -num * 100 + '%'}, "slow");
    //            } else {
    //                $(".box").finish();
    //                $(".box").animate({marginLeft: -num * 100 + '%'});
    //            }
    //
    //        }
    //    }else{
    //            $(".box").animate({marginLeft: -num* 100 + '%'})
    //        }
    //    });
    //--------------------------------------------
    $(".dengyu").click(function(){
        $(".zhu").toggle();
    })


    //--------------------------------------
    var newtop;
    $('.biaoti').click(function(){
        v = $(this).index(".biaoti");

        var m1=$(".scroll1").offset().top;
        var m2=$(".scroll2").offset().top;
      if(v==0){
          newtop=m1;
      }else if(v==1){
          newtop=m2;
      }
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 700,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });
    $('.biaoti1').click(function(){
        v = $(this).index(".biaoti1");

        var m1=$(".scroll1").offset().top;
        var m2=$(".scroll2").offset().top;
        if(v==0){
            newtop=m1;
        }else if(v==1){
            newtop=m2;
        }
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 700,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });

});
