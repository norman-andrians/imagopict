// apa liat-liat :v

function hide() {
    var hide = document.getElementById("hide");
    var show = document.getElementById("show");
    var hided = document.getElementById("hided");
    var hideda = document.getElementById("hideda");

    hide.style.display = "none";
    show.style.display = "block";
    hided.style.opacity = 0;
    hideda.style.opacity = 0;
}

function show() {
    var hide = document.getElementById("hide");
    var show = document.getElementById("show");
    var hided = document.getElementById("hided");
    var hideda = document.getElementById("hideda");

    hide.style.display = "block";
    show.style.display = "none";
    hided.style.opacity = 0.5;
    hideda.style.opacity = 1;
}