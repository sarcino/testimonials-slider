const reviews = [{
        id: 1,
        name: "Tanya Sinclair",
        title: "UX Engineer",
        text: '\“I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future.\”',
        photo: "<img src='images/image-tanya.jpg' />"
    },
    {
        id: 2,
        name: "John Tarkpor",
        title: "Junior Front-end Developer",
        text: "\“If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\”",
        photo: "<img src='images/image-john.jpg' />"
    },
];


const author = document.getElementById("author");
const title = document.getElementById("title");
const info = document.getElementById("info");
const photo = document.getElementById("photo");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

// LOAD INITIAL ITEM

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    title.textContent = item.title;
    info.textContent = item.text;
    photo.innerHTML = item.photo;
};

// SHOW NEXT PERSON

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// SHOW PREV PERSON

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});