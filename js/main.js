
// get the time of end year
let targetDate = new Date('Dec 31 2023 23:59:59').getTime();

// set counter
let counter = setInterval(()=> {
    //get the current time
    let currentDate = new Date().getTime();
    let diffTime = (targetDate - currentDate);
    // calc the remaining days, hours, minutes and seconds
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diffTime % (1000 * 60) / (1000));

    document.querySelector(".days").previousElementSibling.innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").previousElementSibling.innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").previousElementSibling.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").previousElementSibling.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (diffTime < 0) {
        clearInterval(counter);
    }
} ,1000);


// in skills section 

let targetSection = document.querySelector(".skills-container");
let skills = document.querySelectorAll(".skills-container .skill");

window.onscroll = function () {
    if (window.scrollY >= targetSection.offsetTop - 450) {
        skills.forEach((progress) => {
            progress.lastElementChild.firstElementChild.style.width = progress.lastElementChild.firstElementChild.dataset.width;
        });
    }
};

// in awesome section 

let awesomeSection = document.querySelector(".awesome");
let stats = document.querySelectorAll(".stats-container .stat");


let started = false;
window.addEventListener("scroll", function () {
    if(window.scrollY >= awesomeSection.offsetTop - 250) {
        if (!started) {
            stats.forEach((st)=> startCount(st.firstElementChild.nextElementSibling));
            console.log("of");
        }
        started = true;
    }
});

function startCount (ele) {
    let goal = ele.dataset.content;
    let countUP = setInterval(()=> {
        ele.textContent++;
        if(ele.textContent == goal) {
            clearInterval(countUP);
        }
    }, 2000 / goal);
}

// Scroll to top 
let toTop = document.querySelector(".top");

window.addEventListener("scroll", function() {
    if(this.scrollY >= 1000) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
});

toTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});