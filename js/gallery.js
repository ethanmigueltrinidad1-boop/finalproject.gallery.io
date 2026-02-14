/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("Event triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Change background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    // Change text
    document.getElementById("image").innerHTML =
        previewPic.alt;
}

function unDo(){
    // Reset background image
    document.getElementById("image").style.backgroundImage =
        "url('')";

    // Reset text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
