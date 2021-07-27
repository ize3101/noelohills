$(document).ready(function(){

    let item_no_cut = location.href;
    item_no_cut = item_no_cut.split("item_no=")[1]; // item_no
    // console.log(item_no_cut)

    get_url_info();

    function get_url_info() {
        
            let list = '<div class="product_sec">'
            list +=     '<div class="product_img_box">'
            list +=         '<div class="big_thum">'
            list +=             '<img src="img/item/'+ITEM_LIST[item_no_cut].src+'" alt="item_main_img">'
            list +=         '</div>'
            list +=         '<div class="small_thum_box">'
            list +=             '<div class="s_thum"><img src="img/item/'+ITEM_LIST[item_no_cut].sub_img0+'" alt="item_sub_img"></div>'
            list +=             '<div class="s_thum"><img src="img/item/'+ITEM_LIST[item_no_cut].sub_img1+'" alt="item_sub_img"></div>'
            list +=             '<div class="s_thum"><img src="img/item/'+ITEM_LIST[item_no_cut].sub_img2+'" alt="item_sub_img"></div>'
            list +=             '<div class="s_thum"><img src="img/item/'+ITEM_LIST[item_no_cut].sub_img3+'" alt="item_sub_img"></div>'
            list +=             '<div class="s_thum"><img src="img/item/'+ITEM_LIST[item_no_cut].sub_img4+'" alt="item_sub_img"></div>'
            list +=         '</div>'
            list +=     '</div>'
            list +=     '<div class="product_info">'
            list +=         '<div class="p_title">'+ITEM_LIST[item_no_cut].title+'</div>'
            list +=         '<div class="p_desc">'+ITEM_LIST[item_no_cut].desc+'</div>'
            list +=         '<div class="p_price">'+add_comma(ITEM_LIST[item_no_cut].o_price)+'</div>'
            list +=         '<div class="p_d_fee">'
            list +=             '<div class="fee_txt">배송비</div>'
            list +=             '<div class="fee_price">3,000원 (50,000원 이상 구매 시 무료)</div>'
            list +=         '</div>'
            list +=         '<div class="social">'
            list +=             '<img src="img/icon/product_facebk.png" alt="" class="facebk">'
            list +=             '<img src="img/icon/product_insta.png" alt="" class="insta">'
            list +=         '</div>'
            list +=         '<div class="option">'
            list +=             '<span class="o_p_title">'+ITEM_LIST[item_no_cut].title+'</span>'
            list +=             '<span class="num_box">'
            list +=                 '<div class="minus"><img src="img/icon/minus.png" alt=""></div>'
            list +=                 '<input type="text" value="1" class="num">'
            list +=                 '<div class="plus"><img src="img/icon/plus.png" alt=""></div>'
            list +=             '</span>'
            list +=             '<span class="o_t_price">'+add_comma(ITEM_LIST[item_no_cut].o_price)+'</span>'
            list +=         '</div>'
            list +=         '<div class="total_box">'
            list +=             '<span class="total_txt">총 상품 금액:</span>'
            list +=             '<span class="total_price">'+add_comma(ITEM_LIST[item_no_cut].o_price)+'</span>'
            list +=             '<span class="total_num">(1개)</span>'
            list +=         '</div>'
            list +=         '<div class="order_box">'
            list +=             '<div class="buy">Buy Now</div>'
            list +=             '<div class="wish">Wish List</div>'
            list +=             '<div class="cart">Cart</div>'
            list +=         '</div>'
            list +=     '</div>'
            list += '</div>'
            list += '<div class="product_detail">'
            list +=     '<div class="move_menu">'
            list +=         '<div class="pd">Product Detail</div>'
            list +=         '<div class="eNr">Exchange & Refund</div>'
            list +=         '<div class="review">Honest Review</div>'
            list +=     '</div>'
            list +=     '<div class="detail_cut">'
            list +=         '<div class="detail_img"><img src="img/item/'+ITEM_LIST[item_no_cut].detail_img+'" alt="detail_img"></div>'
            list +=         '<div class="desc_img"><img src="img/item/'+ITEM_LIST[item_no_cut].detail_desc+'" alt="detail_info"></div>'
            list +=     '</div>'
            list += '</div>'

            $('.about_product').append(list);
    }


    // 플러스, 마이너스 누를때 가격, 갯수 계산
    $(document).on('click','.minus', function(){
        if($('.num').val() > 1)
            $(this).next('.num').val(Number($(this).next('.num').val()) - 1);
            
        else 
            alert("최소 구매 수량은 1개입니다");

        total_price();

        
    });
    $(document).on('click','.plus', function(){
        $(this).prev('.num').val(Number($(this).prev('.num').val()) + 1);
        
        total_price();

        
    });
    $(document).on('keyup', '.num', function(){
        total_price();
    })

    function total_price() {
        let total_price = 0;
            total_price = Number($('.num').val()) * Number( ITEM_LIST[item_no_cut].o_price.split("원")[0]);

            console.log(ITEM_LIST[item_no_cut].o_price.split("원")[0])
            total_qty = Number($('.num').val())


        $('.total_price').text(add_comma(total_price)+"원");
        $('.o_t_price').text(add_comma(total_price)+"원");
        $('.total_num').text("("+(total_qty)+"개)");

    }
    


    $(window).scroll(function(){

        // 스크롤 하면 헤더 색 변경
        let w_s_top = $(window).scrollTop();
        // console.log(w_s_top)

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
    
    let icon_switch = true;
    $('.bi_icon').click(function(){
        $('.f_middle').stop().slideToggle(400);

        if(icon_switch == true) {
            $('.bi_icon').css({
                transform: 'rotateX(180deg)',
                transformOrigin: 'bottom',
                marginTop: '18px'
                
            });
            icon_switch = false;
        }
        
        else if (icon_switch == false) {
            $('.bi_icon').css({
                transform: 'rotateX(0)',
                marginTop: '2px'
            });
            icon_switch = true;
        }
    });

    $('.tb_close').click(function(){
        $('.top_banner').fadeOut(1000);
    });




    $('.s_thum').mouseenter(function(){
        let chg_img = $(this).children('img').attr('src')

        $('.big_thum > img').attr('src', chg_img);
    })


    // 아코디언 아이콘 돌리기
    $('.accodion > .inner').slideUp(0)
    $('.acco_plus').click(function(){
        
        $('.inner').stop().slideUp(200);
        $('.acco_plus').css({transform: 'rotate(0)'})
        
        $(this).next().stop().slideDown(200);
        $(this).css({transform: 'rotate(45deg)'})
    });


    

    // 메뉴 누르면 해당 섹션으로 이동
    let pd_top = $('.product_detail').offset().top;
    let pa_top = $('.product_add').offset().top;
    let pr_top = $('.product_review').offset().top;

    $('.pd').click(function(){
        
        pd_top = $('.product_detail').offset().top;
        pa_top = $('.product_add').offset().top;
        pr_top = $('.product_review').offset().top;

        $('html').animate({
            scrollTop: pd_top - 150
        }, 700)
    });

    $('.eNr').click(function(){
        
        pd_top = $('.product_detail').offset().top;
        pa_top = $('.product_add').offset().top;
        pr_top = $('.product_review').offset().top;

        $('html').animate({
            scrollTop: pa_top - 150
        }, 700)
    });

    $('.review').click(function(){
        
        pd_top = $('.product_detail').offset().top;
        pa_top = $('.product_add').offset().top;
        pr_top = $('.product_review').offset().top;

        $('html').animate({
            scrollTop: pr_top - 150
        }, 700)
    });

    $('.bi_txt').click(function(){
        $('.f_middle').stop().slideToggle(400);
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