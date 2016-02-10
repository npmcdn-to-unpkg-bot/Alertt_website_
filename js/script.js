$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('video/alertt.mp4',{ambient:true});

    $('#next-btn').on('click', function(e) {
        $('#big-video-wrap').addClass('animated slideOutUp');
        $('#next-btn').css('display','none');
    });

    setInterval(function(){
        $('#next-btn').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated bounce');
        });
    },5000);

});