$(function(){
const $gnb = $('.gnb>li')
const $lnb = $('.lnb>li')

$gnb.on({
    'mouseover':function(){
       $(this).addClass('on');
       $('.bg').stop().slideDown()
       $('.lnb').stop().slideDown();
    },
    'mouseout':function(){
        $('.lnb').stop().slideUp();
        $(this).removeClass('on')
        $('.bg').stop().slideUp()
        
    }}
    )
$lnb.on({
    'mouseover':function(){
       $(this).addClass('on');
    },
    'mouseout':function(){
        $(this).removeClass('on')        
    }})


    const $slide = $('.slide')
    let nowIdx = 0;
    setInterval(function(){
        if(nowIdx <2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        $slide.stop().animate({left:nowIdx * -1200})
    },2000)

    $('.popup').on('click',function(evt){
        evt.preventDefault();
        $('aside').show();
    })
    $('.cls').on('click',function(){
        $('aside').hide();
    })

})