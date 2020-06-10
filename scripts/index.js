images = [
    {
        file: "banners/1.jpg",
        description: "Art Jakarta 2021 - Coming Soon"
    },
    {
        file: "banners/2.jpg",
        description: "March's Auction in New York!"
    },
    {
        file: "banners/3.jpg",
        description: "What You've Been Waiting For: Peru's Branch Birthday Auction!"
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
