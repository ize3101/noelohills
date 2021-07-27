const ITEM_LIST = [
    {item_no: 0, src: '1.png', title: '모이스처라이징 로션 200ml', o_price: '38000원', desc: '피부에 힘을 길러주는 보습장벽케어',sub_img0: 'sub1-0.png', sub_img1: 'sub1-1.png', sub_img2: 'sub1-2.png', sub_img3: 'sub1-3.png', sub_img4: 'sub1-4.png', detail_img: 'detail_img1.png', detail_desc: 'detail_desc1.png'},
    {item_no: 1, src: '2.png', title: '마일드 젤 워시 300ml', o_price: '35000원', desc: '피부를 씻는 동시에 보호하는 워시케어',sub_img0: 'sub2-0.png', sub_img1: 'sub2-1.png', sub_img2: 'sub2-2.png', sub_img3: 'sub2-3.png', sub_img4: 'sub2-4.png', detail_img: 'detail_img2.png', detail_desc: 'detail_desc2.png'},
    {item_no: 2, src: '3.png', title: '피부 발달 기프트 세트', o_price: '75000원', desc: '소중한 아기피부를 위한 선물세트 (5% 상당의 가격 혜택 적용)',sub_img0: 'sub3-0.png', sub_img1: 'sub3-1.png', sub_img2: 'sub3-2.png', sub_img3: 'sub3-3.png', sub_img4: 'sub3-4.png', detail_img: 'detail_img3.png', detail_desc: 'detail_desc_duo.png'},
    {item_no: 3, src: '4.png', title: '모이스처라이징 로션 듀오', o_price: '72000원', desc: '피부에 힘을 길러주는 보습장벽케어 (5% 상당의 가격 혜택 적용)',sub_img0: 'sub4-0.png', sub_img1: 'sub1-1.png', sub_img2: 'sub1-2.png', sub_img3: 'sub1-3.png', sub_img4: 'sub1-4.png', detail_img: 'detail_img1.png', detail_desc: 'detail_desc1.png'},
    {item_no: 4, src: '5.png', title: '마일드 젤 워시 듀오', o_price: '66000원', desc: '피부를 씻는 동시에 보호하는 워시케어 (5% 상당의 가격 혜택 적용)', sub_img0: 'sub5-0.png', sub_img1: 'sub2-1.png', sub_img2: 'sub2-2.png', sub_img3: 'sub2-3.png', sub_img4: 'sub2-4.png', detail_img: 'detail_img2.png', detail_desc: 'detail_desc2.png'},
    {item_no: 5, src: '6.png', title: '피부 발달 세트', o_price: '69000원', desc: '여린피부를 보호해주는 피부발달케어 (5% 상당의 가격 혜택 적용)',sub_img0: 'sub6-0.png', sub_img1: 'sub1-1.png', sub_img2: 'sub2-2.png', sub_img3: 'sub1-4.png', sub_img4: 'sub2-4.png', detail_img: 'detail_img6.png', detail_desc: 'detail_desc_duo.png'}
]

// 숫자 3자리마다 콤마찍기
function add_comma(x) { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}