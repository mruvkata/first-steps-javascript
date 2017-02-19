var windowWidth
var windowHeight

var currentPosLeft
var currentPosTop
$(document).ready(function(){
    windowWidth = $( window ).width();
    windowHeight = $( window ).height();

    currentPosLeft =  parseInt($("#moving-block").css('left'));
    currentPosTop =  parseInt($("#moving-block").css('top'));

    console.log(windowWidth + "this is window width")
    console.log(windowHeight + "this is window height")

    console.log(currentPosLeft + "this is Div left")
    console.log(currentPosTop + "this is Div top")
});

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
};

function moveLeft()
{
    currentPosLeft = currentPosLeft - 30
    if (currentPosLeft <= 0)
    {
        currentPosLeft = 0
        $("#moving-block").css("left",currentPosLeft + "px")
    }
    else
    {
        $("#moving-block").css("left",currentPosLeft + "px")
    }
}
function moveRight()
{
    currentPosLeft = currentPosLeft + 30
    if (currentPosLeft >= windowWidth - 106)
    {
        currentPosLeft = windowWidth- 106
        $("#moving-block").css("left",currentPosLeft + "px")
    }
    else
    {
        //$("#moving-block").animate({left: currentPosLeft + "px"} )
        $("#moving-block").css("left",currentPosLeft + "px")
    }
}
function moveUp()
{
    currentPosTop = currentPosTop - 30
    if (currentPosTop <= 0)
    {
        currentPosTop = 0
        $("#moving-block").css("top",currentPosTop + "px")
    }
    else
    {
        $("#moving-block").css("top",currentPosTop + "px")
    }
}
function moveDown()
{
    currentPosTop = currentPosTop + 30
    if (currentPosTop >= windowHeight-71)
    {
        currentPosTop = windowHeight-71
        $("#moving-block").css("top",currentPosTop + "px")
    }
    else
    {
        $("#moving-block").css("top",currentPosTop + "px")
    }
}
