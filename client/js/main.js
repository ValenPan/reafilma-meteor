
/*$(document).on('ready',function(){
var video="//player.vimeo.com/video/74622325?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=0";
$('#video_destacado_player').attr('src',video);
//el player stop ha sido clave..
 player.api('stop');

});*/

Meteor.subscribe('reels');
Meteor.render(function(){

var iframe = $('#video_destacado_player')[0];
alert(iframe);
var player = $f(iframe),
    status = $('.status');



var video="//player.vimeo.com/video/74622325?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=0";
$('#video_destacado_player').attr('src',video);
//el player stop ha sido clave..
 player.api('stop');


	

// When the player is ready, add listeners for pause, finish, and playProgress
player.addEvent('ready', function() {
    status.text('ready');
    player.api('stop');
    player.addEvent('pause', onPause);
    player.addEvent('finish', onFinish);
    player.addEvent('playProgress', onPlayProgress);
});

// Call the API when a button is pressed
$('#video_destacado').on('click',function(){
	
     player.api('play');//player.vimeo.com/video/74622330?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=0
     $(this).fadeOut('slow',function(){
     	 $('#video_destacado_player').css('display','block');
     });
    
});

$('.player').on('click',function(){
	var video=$(this).data('href');
	
	
	 $('#video_destacado_player').attr('src',video);
	  $('#video_destacado').fadeOut('slow',function(){
     	 $('#video_destacado_player').css('display','block');
     });
});

function onPause(id) {
    status.text('paused');
}

function onFinish(id) {
    status.text('finished');
}

function onPlayProgress(data, id) {
    status.text(data.seconds + 's played');
}

});

