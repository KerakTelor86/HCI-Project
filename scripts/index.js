images = [
    {
        file: "banners/1.png",
        description: "First art auction held online!"
    },
    {
        file: "banners/2.png",
        description: "Second art auction held online!"
    },
    {
        file: "banners/3.png",
        description: "Send help please"
    }
]

curIdx = 0;
numImg = images.length;

function setImg(index) {
    curIdx = (((curIdx + index) % numImg) + numImg) % numImg;
    $("#counter-cur").text(curIdx + 1);
    $("#slider-desc").text(images[curIdx].description);
    $("#slider-img").attr("src", "assets/" + images[curIdx].file);
}

function initSlider() {
    $("#counter-max").text(numImg);
    setImg(0);
}

$(document).ready(function() {
    initSlider();

    $("#slider-left").click(function() {
        setImg(-1);
    });

    $("#slider-right").click(function() {
        setImg(1);
    });
});
