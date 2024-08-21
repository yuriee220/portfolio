$(function() {
    // スライダー
    $('#slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false
    });

    // ホバー
    $('a').hover(
        function() {
           $(this).animate({opacity: 0.5}, 100);
        },
        function() {
           $(this).animate({opacity: 1}, 100);
        }
    );

    // TOPに戻るボタンの表示
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
         $('.back-btn').fadeIn();
        } else $('.back-btn').fadeOut();   
    });
    
    // リンクのスクロールをなめらかにする
    $('a[href^="#"]').on('click', function() {
        const href = $(this).attr('href');
        const target = $(href == "#" ? 'html' : href);
        const position = target.offset().top
        const speed = 500;
        $('html, body').animate({scrollTop: position},speed, 'swing');
        return false;
    });

    // セクションのフェードイン
    $(window).scroll(function() {
        const scrollValue = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('section').each(function() {
          const position = $(this).offset().top;
          if (scrollValue > position - windowHeight +200) {
            $(this).addClass('fade-in');
          }
        });
    });

    // モーダル
    $('.works img').on('click', function() {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false;
    })   
    $('.close-btn').on('click', function() {
        $('.modal').fadeOut();
        return false;
    })
});