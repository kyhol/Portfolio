var index = 0;

show_image(index);

function show_image(i) {
    index += i;

    var images = document.getElementsByClassName("foodImage");
    var dots = document.getElementsByClassName("dot");
    
    for (var j = 0; j < images.length; j++) {
        images[j].style.display = "none";
    }

    for (var j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    if (index > images.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = images.length - 1;
    }

    images[index].style.display = "flex";
    dots[index].className += " active";
}
