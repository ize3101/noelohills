$(document).ready(function(){

    $(window).scroll(function(){

        // 스크롤 하면 헤더 색 변경
        let w_s_top = $(window).scrollTop();
        let insta_top = $('.insta').offset().top;
        let insta_height = $('.insta').height();
        let insta_bot = insta_top + insta_height;
        console.log(insta_top)

        if(w_s_top >= insta_top) {
            $('header').css({
                background: '#fff',
                boxShadow:'0 0 10px rgb(0 0 0 / 10%)',
                transition: 'all 0.3s'
            })
        }
        else if(w_s_top < insta_top) {
            $('header').css({
                background: 'transparent',
                boxShadow:'none',
                transition: 'all 0.3s'
            })
        }
    });

    // 탑 배너 돌리기
    let timer = 1000;
    let tb_index_no = 1;
    let tb_count = $('.t_banner').length;

    setInterval(function(){
        // 들어올 판
        $('.t_banner').eq(tb_index_no % tb_count).css({
            top: '100%'
        }).animate({
            top: 0
        }, timer)


        // 나갈 판
        $('.t_banner').eq((tb_index_no - 1) % tb_count).animate({
            top: '-100%'
        }, timer)

        
        tb_index_no+=1;

    }, timer + 1000);
    
    $('.tb_close').click(function(){
        $('.top_banner').fadeOut(1000);
    });


    $('.bi_txt').click(function(){
        $('.f_middle').stop().slideToggle(400);
    });


    
    $('.M_lnb').slideUp(0);
    $('.M_gnb_title').click(function(){
        $(this).children('.M_lnb').stop().slideToggle(300);

        $(this).find('img').toggleClass('lnb_icon_active')
    });

    let ham_t = true;
    $('.M_ham_btn').click(function(){
        console.log(ham_t);
        if(ham_t == true) {
            $('.M_gnb_pan').css({
                left: 0
            });
            $('.M_ham_line').first().css({
                transform: 'rotate(-42deg) translate(-2px, 2px)',
                width: '12px',
                transition: 'all 0.3s'
            });
            $('.M_ham_line').last().css({
                transform: 'rotate(42deg) translate(-1px, -2px)',
                width: '12px',
                transition: 'all 0.3s'
            });

            ham_t = false;
        }

        else if (ham_t == false) {
            $('.M_gnb_pan').css({
                left: '-120%'
            })
            
            $('.M_ham_line').first().css({
                transform: 'rotate(0deg) translate(0, 0)',
                width: '22px',
                transition: 'all 0.3s'
            });
            $('.M_ham_line').last().css({
                transform: 'rotate(0deg) translate(0, 0)',
                width: '22px',
                transition: 'all 0.3s'
            });

            ham_t = true;
        }
    });
});