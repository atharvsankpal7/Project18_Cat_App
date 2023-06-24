//Variables
const API = "https://api.thecatapi.com/v1/images/search";
let catImg = document.getElementById("catimg");
let changeBtn = document.getElementById("change-image");
let imageUrl;
//Default Call
apiCall();

async function apiCall() {
    try {
        const response = await fetch(
            "https://api.thecatapi.com/v1/images/search"
        );
        const data = await response.json();
        console.log(data);
        imageUrl = await data[0].url;
        catImg.src = imageUrl;
    } catch (error) {
        console.error("Error:", error);
    }
}
catImg.addEventListener("click", () => {
    openLinkInBackground(imageUrl);
});
changeBtn.addEventListener("click", async () => {
    changeBtn.disabled = true;

    await apiCall();

    catImg.addEventListener("load", () => {
        changeBtn.disabled = false;
    });
});
function openLinkInBackground(url) {
    var link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
