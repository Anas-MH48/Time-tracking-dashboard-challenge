import myData from "./mydata.js";

let worknow = document.querySelector(".worktime h2");
let workpref = document.querySelector(".worktime h6");

let playnow = document.querySelector(".playtime h2");
let playpref = document.querySelector(".playtime h6");

let studynow = document.querySelector(".studytime h2");
let studypref = document.querySelector(".studytime h6");

let exerynow = document.querySelector(".exerciestime h2");
let exerpref = document.querySelector(".exerciestime h6");

let socialnow = document.querySelector(".socialtime h2");
let socialpref = document.querySelector(".socialtime h6");

let selfnow = document.querySelector(".selfcaretime h2");
let selfpref = document.querySelector(".selfcaretime h6");

const timeChanger = function () {
    let activeTime = document.querySelector(".times-list .active");
    switch (activeTime.dataset.timing) {
        case "daily":
            worknow.textContent = myData.daily.work[0];
            workpref.textContent = myData.daily.work[1];
            playnow.textContent = myData.daily.play[0];
            playpref.textContent = myData.daily.play[1];
            studynow.textContent = myData.daily.study[0];
            studypref.textContent = myData.daily.study[1];
            exerynow.textContent = myData.daily.exercise[0];
            exerpref.textContent = myData.daily.exercise[1];
            socialnow.textContent = myData.daily.social[0];
            socialpref.textContent = myData.daily.social[1];
            selfnow.textContent = myData.daily.selfcare[0];
            selfpref.textContent = myData.daily.selfcare[1];
            break;
        case "weekly":
            worknow.textContent = myData.weekly.work[0];
            workpref.textContent = myData.weekly.work[1];
            playnow.textContent = myData.weekly.play[0];
            playpref.textContent = myData.weekly.play[1];
            studynow.textContent = myData.weekly.study[0];
            studypref.textContent = myData.weekly.study[1];
            exerynow.textContent = myData.weekly.exercise[0];
            exerpref.textContent = myData.weekly.exercise[1];
            socialnow.textContent = myData.weekly.social[0];
            socialpref.textContent = myData.weekly.social[1];
            selfnow.textContent = myData.weekly.selfcare[0];
            selfpref.textContent = myData.weekly.selfcare[1];
            break;
        case "monthly":
            worknow.textContent = myData.monthly.work[0];
            workpref.textContent = myData.monthly.work[1];
            playnow.textContent = myData.monthly.play[0];
            playpref.textContent = myData.monthly.play[1];
            studynow.textContent = myData.monthly.study[0];
            studypref.textContent = myData.monthly.study[1];
            exerynow.textContent = myData.monthly.exercise[0];
            exerpref.textContent = myData.monthly.exercise[1];
            socialnow.textContent = myData.monthly.social[0];
            socialpref.textContent = myData.monthly.social[1];
            selfnow.textContent = myData.monthly.selfcare[0];
            selfpref.textContent = myData.monthly.selfcare[1];
            break;
    }
};

let activeTime = document.querySelectorAll(".times-list h4");

activeTime.forEach((ele) => {
    ele.addEventListener("click", () => {
        activeTime.forEach((ele) => {
            ele.classList.remove("active");
        });
        ele.classList.toggle("active");
        timeChanger();
    });
});

console.log(myData);
