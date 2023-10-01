$(document).ready(function(){
    $(window).scroll(function(event){
        const s = $(this).scrollTop();
        const w = $(this).outerWidth();
        const h = $('.content').outerHeight();
        const h_b = $('.parallax').outerHeight();

        const p = s / h * 100; 
        const p_b = s / h_b * 100; 
        const o = 1 - 1 / 100 * p_b;

        const z_1 = 1 + (w / 10000 * p_b);
        $('.parallax__fog').css('transform', 'scale('+z_1+')');
        $('.parallax__fog').css('opacity', o);

        const z_2 = 1 + (w / 5000000 * p);
        $('.parallax__img--n1').css('transform', 'scale('+z_2+')');

        const z_3 = 1 + (w * 0.000005 * p_b);
        const hr_1 = w / 2000 * p_b;
        $('.parallax__img--n2').css('transform', 'translate3d('+hr_1+'px,0,0) scale('+z_3+')');

        const z_4 = 1 + (w * 0.00001 * p_b);
        const hr_2 = w / 1500 * p_b;
        $('.parallax__img--n3').css('transform', 'translate3d('+hr_2+'px,0,0) scale('+z_4+')');

    });
});