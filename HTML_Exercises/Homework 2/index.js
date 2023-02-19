const createCard = (data) => {
    const cards = document.querySelector(".cards");

    cards.innerHTML += data.map((item) => {
        const likedHeart = item.liked ? "heart-red" : "heart-black";
        return `
        <div class="card">
        <img src="Images/${item.image}" alt="Image Not Available">
        <div class="date-time padding-10">
            <span>${item.date}</span>
            <span>${item.readingTime}</span>
        </div>
        <h2 class="padding-10">${item.title}</h2>
        <p class="padding-10">${item.description}?</p>
        <div class="break-line padding-10"></div>
        <div class="comment-like padding-10">
            <div class="comments">
                <img src="Icons/clapping.svg" alt="Image Not Available">
                <span>${item.claps}</span>
            </div>
            <img src="Icons/${likedHeart}.svg">
        </div>
    </div>
        `;
    }).join("");
};

const toggleLikeAndComment = () => {
    const hearts = document.querySelectorAll(".comment-like > img");

    hearts.forEach(ele => ele.addEventListener("click", (e) => {
        e.target.src = e.target.src.includes("heart-black") ? "Icons/heart-red.svg" : "Icons/heart-black.svg";
    }));


    const claps = document.querySelectorAll(".comments > img");

    claps.forEach(ele => ele.addEventListener("click", (e) => {
        let clapped = false;
        const clapsCount = e.target.parentElement.querySelector("span");
        if (!clapped) {
            clapsCount.innerText = parseInt(clapsCount.innerText) + 1;
            clapped = true;
        }
        else if(clapped){
            clapsCount.innerText = parseInt(clapsCount.innerText) - 1;
            clapped = false;
        }
    }
    ));

}

const loadDataFromJSON = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    createCard(data);
    toggleLikeAndComment();

};



loadDataFromJSON();
