$(function(){
    const $gnb = $('.gnb>li');
    const $lnb = $('.lnb');
    const $slide = $('.slide');
    let idx = 0;
    
    
    $gnb.on('mouseover',function(){
        $lnb.show();
    })
    $gnb.on({
        mouseover:function(){
            $lnb.stop().show();
        },
        mouseout:function(){
            $lnb.stop().hide();
        }
            })
    
    setInterval(function(){
        if(idx <2){
            idx++;
        }else{
            idx = 0;
        }
        $slide.stop().animate({left:idx * -1200})
    },1500)
    
})