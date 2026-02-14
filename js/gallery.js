/* Name this external file gallery.js */

function upDate(previewPic){
    console.log("Event triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    document.getElementById("image").innerHTML =
        previewPic.alt;
}

function unDo(){
    document.getElementById("image").style.backgroundImage =
        "url('')";

    document.getElementById("image").innerHTML =
        "Hover over or focus on an image below to display here.";
}

/* Add tabindex automatically */
function addTabIndex() {
    console.log("Page loaded — adding tabindex");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image", i + 1);
    }
}
