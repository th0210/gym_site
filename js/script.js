//wowアニメーション
new WOW().init();

//スワイパー
const swiper = new Swiper(".swiper", {
     // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
    clickable: true

  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  loop: true,
});

//トレーナーページとスタッフページ切り替え
$('.faq-question').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('is-active');
});

$('.staff-tab').on('click', function() {
    $('.staff-content').addClass('is-active');
    $('.staff-tab').addClass('is-active');
    $('.trainer-content').removeClass('is-active');
    $('.trainer-tab').removeClass('is-active');
});

$('.trainer-tab').on('click', function() {
    $('.trainer-content').addClass('is-active');
    $('.trainer-tab').addClass('is-active');
    $('.staff-content').removeClass('is-active');
    $('.staff-tab').removeClass('is-active');
});

//スクロールして移動
jQuery('a[href^="#"]').on('click', function() {
  //クリックしたもののid="#〇〇"を取得　
    var id = jQuery(this).attr('href');
  //ページの一番上からの距離をpositionとして0としておく
    var position = 0;
  //id="#〇〇"が#だけじゃない時はその距離を取得、#だけの時は元々0なので0扱いになる
    if (id != '#') {
        position = jQuery(id).offset().top;
    };

    jQuery('html, body').animate ({
        scrollTop: position
    }, 300);

});

//スクロールしたらトップへ戻るボタン表示
$(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (200 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 $('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  $('.to-top').removeClass( 'is-show' );
  }
});

//スクロールしたらヘッダーを表示
$(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (150 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 $('header, .header-button').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  $('header, .header-button').removeClass( 'is-show' );
  }
});

//スクロールしたら横スクロールボタンを表示
$('.price-content').on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < $(this).scrollLeft()) {
    // is-showクラスをつける
 $('.scroll-x-button').addClass( 'is-hidden' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  $('.scroll-x-button').removeClass( 'is-hidden' );
  }
});

// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }else{
    $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
  }
});	

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }else{
    $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
  }
});		
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

