var figure = $(".container_video").hover(hoverVideo, hideVideo);


function hoverVideo(e) {
    $('video', this).get(0).play();
    $('video', this).get(0).muted = true;
    $('video', this).get(0).currentTime = 5;
    $('video', this).get(0).playbackRate = 5.0;
    $('video', this).get(0).loop = true;
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).get(0).load();
}

var figure = $(".content_current_video").hover(hoverVideo, hideVideo);


function hoverVideo(e) {
    $('video', this).get(0).play();
    $('video', this).get(0).muted = true;
    $('video', this).get(0).currentTime = 5;
    $('video', this).get(0).playbackRate = 5.0;
    $('video', this).get(0).loop = true;
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).get(0).load();
}


var figure = $(".content_video_sm").hover(hoverVideo, hideVideo);


function hoverVideo(e) {
    $('video', this).get(0).play();
    $('video', this).get(0).muted = true;
    $('video', this).get(0).currentTime = 5;
    $('video', this).get(0).playbackRate = 5.0;
    $('video', this).get(0).loop = true;
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).get(0).load();
}




var rightArrow = document.getElementById("flip_card_button");
var topCard = document.getElementById("contnent_card_front");
var bottomCard = document.getElementById("content_card_back");
var followButton = document.getElementById("button_back_card");
var followButton2 = document.getElementById("button_back_card2");
rightArrow.addEventListener("click", function() {
    topCard.classList.add("hidden");
    bottomCard.classList.remove("hidden");
    console.log("Hide top card and show bottom card.");
});
followButton.addEventListener("click", function() {
    topCard.classList.remove("hidden");
    bottomCard.classList.add("hidden");
    console.log("Hide bottom card and show top card.");
});
followButton2.addEventListener("click", function() {
    topCard.classList.remove("hidden");
    bottomCard.classList.add("hidden");
    console.log("Hide bottom card and show top card.");
});