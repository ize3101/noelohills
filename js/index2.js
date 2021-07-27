// 익스플로러에서 알림창 띄워주기
let userAgent = window.navigator.userAgent.toLowerCase(); 

let isChrome = userAgent.indexOf('chrome'); 
let isEdge = userAgent.indexOf('edge'); 
let isIE = userAgent.indexOf('trident');  
let isIE2= userAgent.indexOf("msie");

if(isIE > -1 || isIE2 > -1 ){ 
    alert("익스플로러에서는 지원하지 않습니다.\n다른 브라우저에서 접속해주세요.")
}



$(document).ready(function(){

    
    let chk_footer=false;
    let chk_slide = true;
    function m_wheel() {
        $('.sec_move').on('mousewheel DOMMouseScroll', function(){
            event.preventDefault();
            if(chk_slide) {
                chk_slide = false;
                setTimeout(function(){
                    chk_slide = true;
                }, 800)

                let dir = event.wheelDelta;
                let pos;

    console.log(dir)

                if(dir < 0) { // 휠 내림
                    if($(this).next().length > 0) {
                        pos = $(this).next().offset().top
                    }
                    else if($(this).next().length == 0) {
                        pos = $('footer').offset().top
                        chk_footer=true;
                    }
                }
                else if(dir > 0) { // 휠 올림
                    if(!chk_footer && $(this).prev().length > 0) {
                        pos = $(this).prev().offset().top
                    }
                    else if(chk_footer) {
                        pos = $('.container > .sec_move').last().offset().top;
                        chk_footer=false;
                    }

                } 
                $('html, body').stop().animate({
                    scrollTop: pos
                }, 800)
            }
        });
    }

    
    function scr_dtop() {
        $(window).scroll(function(){

            let w_s_top = $(window).scrollTop();
            // console.log(w_s_top)
            let op_o_top = $('.o_promise').offset().top;
            let op_height = $('.o_promise').height();
            let op_bottom = op_o_top + op_height;
    
            if(w_s_top >= op_o_top - 100 && w_s_top < op_bottom) {
                $('.oprom_pan').css({
                    backgroundSize: 0,
                    transition: 'all 2s cubic-bezier(0, 0, 0.2, 1) 0s',
                });
    
                setTimeout(function(){
                    $('.oprom_pan').css({
                        display: 'none'
                    })
                }, 1000)
    
                $('.logo').css({
                    background: 'url(img/logo-bk.png) no-repeat center / contain',
                    transition: 'all 0.1s'
                });
                $('.gnb').css({
                    color: '#000000'
                });
                $('.mymenu > div > a > img').css({
                    filter: 'opacity(.5) drop-shadow(0 0 0 #000000)'
                })
            }
            else {
                $('.oprom_pan').css({
                    backgroundSize: '150%',
                    transition: 'all 2s cubic-bezier(0, 0, 0.2, 1) 0s',
                });
    
                setTimeout(function(){
                    $('.oprom_pan').css({
                        display: 'block'
                    })
                }, 1000)
                $('.logo').css({
                    background: 'url(img/logo.png) no-repeat center / contain',
                    transition: 'all 0.1s'
                });
                $('.gnb').css({
                    color: '#676d72'
                });
                $('.mymenu > div > a > img').css({
                    filter: 'opacity(.5) drop-shadow(0 0 0 #676d72)'
                })
            }
    
            // product 스크롤 이벤트
            let oprod_top = $('.o_product').offset().top;
            if(w_s_top >= oprod_top - 100) {
                $('.oprod_contents_L').css({
                    transform: 'translateX(0)',
                    transition: 'all 0.5s',
                    opacity: 1
                });
                $('.oprod_contents_R').css({
                    transform: 'translateX(0)',
                    transition: 'all 0.5s',
                    opacity: 1
                });
            }
    
    
            // benefit 스크롤 이벤트
            let b_o_top = $('.benefit').offset().top;
            let i_b_no = 0;
            let i_b_length = $('.b_item_box').length;
            setInterval(function(){
                if(w_s_top >= b_o_top - 100) {
                    // console.log(i_b_length)
                    $('.b_item_box').eq(i_b_no % i_b_length).css({
                        transform: 'translateY(0)',
                        transition: 'all 0.5s',
                        opacity: 1
                    })
        
                }
                i_b_no++;
                
            }, 100)
    
    
        });
    }

    
    function resize(){
        let w_width = $(window).width();
        console.log(w_width)
        if(w_width < 1161) {
            $('.sec_move').off('mousewheel DOMMouseScroll')
            $(window).off('scroll')
        }
        else {
            m_wheel();
            scr_dtop()
        }
    }

    
    resize()
    scr_dtop()

    $(window).resize(function(){
        resize()
        scr_dtop()
    })


    $('.go_box').hover(function(){
        $(this).children('.go_circle').css({
            background: '#fad833',
            transition: 'all 0.5s'
        });
        $(this).children('.go_arrow').css({
            transform: 'translateX(-10px)',
            transition: 'all 0.5s'
        });
    }, function(){
        $(this).children('.go_circle').css({
            background: '#fff',
            transition: 'all 0.5s'
        });
        $(this).children('.go_arrow').css({
            transform: 'translateX(-25px)',
            transition: 'all 0.5s'
        });
    });

    // MAIN BANNER
    $('.indi_btn > img').attr

    let b_timer = 1000;
    let b_index = 1;
    let b_length = $('.banner').length;
    
    // 배너 갯수만큼 인디 갯수 ++
    for(let i=0; i<b_length; i++) {
        $('.indi_box').append('<div class="indi_btn"><img src="img/icon/indi.png" alt="인디케이터"></div>')
    }

    $('.indi_btn').eq(0).children('img').attr('src', 'img/icon/this_indi1.png')


    function tmp(b_index, b_timer, speed) {
        $('.banner').eq(b_index % b_length).css({
            left: '100%'
        }).animate({
            left: 0
        }, b_timer, speed);

        $('.banner').eq((b_index - 1) % b_length).animate({
            left: '-100%'
        }, b_timer, speed)

        $('.indi_btn > img').attr('src', 'img/icon/indi.png')
        $('.indi_btn').eq(b_index % b_length).children('img').attr('src', 'img/icon/this_indi1.png')
    }


    // 배너 자동으로 돌리기
    let tmp_int;
    function auto_slide(b_timer)  {
        clearInterval(tmp_int);
        tmp_int=setInterval(function(){
            tmp(b_index, b_timer, '')
            b_index++;
        }, b_timer * 5)
    }

    auto_slide(b_timer);

    $('.indi_btn, .banner_txt > .go_box').mouseenter(function(){
        clearInterval(tmp_int);
        console.log("들어옴")
    })
    $('.indi_btn, .banner_txt > .go_box').mouseleave(function(){
        console.log(b_timer, "나감")
        auto_slide(b_timer);
    })
    $('.indi_btn').click(function(){

        // 현재꺼보다 우측 인디 눌렀을때
        let gap = $(this).index() - ((b_index - 1) % b_length);
        if(gap > 0) {
            console.log("우측: "+ gap)    
        }
        // 현재꺼보다 좌측 인디 눌렀을때
        else if(gap < 0) {
            gap = b_length - Math.abs(gap);
            console.log("좌측: "+ gap)
        }

         
        for(let i=0; i < Math.abs(gap); i++) {
            (function(tmp_i){
                setTimeout(function(){
                    tmp(b_index, b_timer / Math.abs(gap),'linear');
                    b_index++
                },  b_timer / Math.abs(gap) * (tmp_i))
            })(i)
        }  
      

        $('.indi_btn > img').attr('src', 'img/icon/indi.png')
        $(this).children('img').attr('src', 'img/icon/this_indi1.png')


    })

    $('.p_icon_box').hover(function(){
        $(this).css({
            transform: 'translateY(0)',
            transition: 'all 0.5s'
        })
    }, function(){
        $(this).css({
            transform: 'translateY(10px)',
            transition: 'all 0.5s'
        })
    })
    



    // project 섹션 탭 내리고 올리기
    let tmp_chk = [true,true];
    $('.os_edge').click(function(){
        if(tmp_chk[0]==true) {
            $('.KI').animate({bottom: '-695px'}, 300)
            tmp_chk[0]=false;
        }
        else if (tmp_chk[1]==false) {
            $('.OS').animate({bottom: '0'}, 300)
            tmp_chk[1]=true;
        }
    });
    $('.hc_edge').click(function(){
        $('.OS').animate({bottom: '-690px'}, 300)
        $('.KI').animate({bottom: '-695px'}, 300)
        tmp_chk[0]=false;
        tmp_chk[1]=false;
    });
    $('.ki_edge').click(function(){
        if(tmp_chk[0]==false) {
            $('.OS').animate({bottom: '0'}, 300)
            $('.KI').animate({bottom: '0'}, 300)
            tmp_chk[0]=true;
            tmp_chk[1]=true;
        }
        else if(tmp_chk[0]==true) {
            $('.OS').animate({bottom: '0'}, 300)
            $('.KI').animate({bottom: '0'}, 300)
            tmp_chk[0]=true;
            tmp_chk[1]=true;
        }
    });
    
    $('.HC').find('.go_arrow').css({
        transform: 'rotateY(180deg) translateX(-25px)',
    });
    $('.KI').find('.go_arrow').css({
        transform: 'rotateY(180deg) translateX(-25px)',
    });

    $('.HC, .KI').find('.go_box').hover(function(){
        console.log(this)
        $(this).children('.go_arrow').css({
            transform: 'rotateY(180deg) translateX(-10px)',
            transition: 'all 0.5s'
        });
    }, function(){
        $(this).children('.go_arrow').css({
            transform: 'rotateY(180deg) translateX(-25px)',
            transition: 'all 0.5s'
        });
    });

    

    
});