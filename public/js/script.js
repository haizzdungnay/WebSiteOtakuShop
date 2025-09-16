$(document).ready(function() {
    // Cấu hình Slick slider cho slide chính
    $('#slick-slider-home').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow custom-style"><span class="arrow-custom arrow-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow custom-style"><span class="arrow-custom arrow-right"></span></button>'
    });
});
function addToCart(productName) {
  alert(productName + " đã được thêm vào giỏ hàng!");
}
// If you need to use the JSON-LD, assign it to a variable or move it to an HTML <script type="application/ld+json"> tag.