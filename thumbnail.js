document.addEventListener("DOMContentLoaded", function(event) {
    let targetImage = document.querySelector("#smart-image");
if (targetImage.classList.contains("small")) {
    targetImage.classList.remove("small");
} else {
    targetImage.classList.add("small");
}

});
