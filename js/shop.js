$(document).ready(function(){
    
    get_url_info();

    function get_url_info() {
        for(let i=0; i<ITEM_LIST.length; i++) {

            let list = '<div class="product_box">'
            list +=         '<a href="product.html?item_no='+ITEM_LIST[i].item_no+'">'
            list +=             '<div class="img_box">'
            list +=                 '<img src="img/item/'+ITEM_LIST[i].src+'" alt="product_img">'
            list +=             '</div>'
            list +=             '<div class="desc_box">'
            list +=                 '<div class="product_title">'+ITEM_LIST[i].title+'</div>'
            list +=                 '<div class="product_desc">'+ITEM_LIST[i].desc+'</div>'
            list +=                 '<div class="product_price">'+add_comma(ITEM_LIST[i].o_price)+'</div>'
            list +=                 '<div class="go_box">'
            list +=                     '<div class="go_txt">See more</div>'
            list +=                     '<div class="go_circle"></div>'
            list +=                     '<div class="go_arrow"><img src="img/icon/right-arrow.png" alt="go_icon"></div>'
            list +=                 '</div>'
            list +=             '</div>'
            list +=         '</a>'
            list +=     '</div>'

            $('.product_page').append(list);
            console.log(ITEM_LIST[i].item_no)
        }
    }


    $(window).scroll(function(){

        // 스크롤 하면 헤더 색 변경
        let w_s_top = $(window).scrollTop();
        console.log(w_s_top)

        if(w_s_top >= 100) {
            $('header').css({
                background: '#fff',
                boxShadow:'0 0 10px rgb(0 0 0 / 10%)',
                transition: 'all 0.2s'
            })
        }
        else if(w_s_top < 100) {
            $('header').css({
                background: 'transparent',
                boxShadow:'none',
                transition: 'all 0.2s'
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



    let w_s_top = $(window).scrollTop();
    let p_no = 0;
    let p_length = $('.product_box').length;
    setInterval(function(){
        if(w_s_top == 0) {
            $('.product_box').eq(p_no % p_length).css({
                transform: 'translateY(0)',
                transition: 'all 0.5s',
                opacity: 1
            })

        }
        else if(w_s_top > 0) {
            $('.product_box').eq(p_no % p_length).css({
                transform: 'translateY(0)',
                transition: 'all 0.5s',
                opacity: 1
            })
        }
        p_no++;
        
    }, 100)



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


    $('.M_lnb').slideUp(0);
    $('.M_gnb_title').click(function(){
        $(this).children('.M_lnb').stop().slideToggle(300);
    });
    let ham_t = true;
    $('.M_ham_btn').click(function(){

        if(ham_t == true) {
            $('.M_gnb_pan').css({
                left: 0
            });
            // $('.M_ham_line').children().first().css({
            //     transform: 'rotate(-44deg)',
            //     width: '20px'
            // });
            // $('.M_ham_line:nth:last-child').children().last().css({
            //     transform: 'rotate(44deg)',
            //     width: '20px'
            // });

            ham_t = false;
        }

        else if (ham_t == false) {
            $('.M_gnb_pan').css({
                left: '-120%'
            })

            ham_t = true;
        }
    });
    
})