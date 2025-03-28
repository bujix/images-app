const count = 30; // Kaç resim yükleneceğini belirtiyoruz
const imagesDiv = document.querySelector(".images-div");

async function getImages() {
    try {
        imagesDiv.innerHTML = ""; // Önceki içerikleri temizle

        for (let i = 0; i < count; i++) {
            const width = 400;
            const height = 300;
            const imageUrl = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
            
            const item = document.createElement("a");
            item.setAttribute("href", imageUrl);
            item.setAttribute("target", "_blank");
            
            const img = document.createElement("img");
            img.setAttribute("src", imageUrl);
            img.setAttribute("alt", "Random Image from Picsum");
            
            item.appendChild(img);
            imagesDiv.appendChild(item);
        }
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        getImages();
    }
});

getImages();
