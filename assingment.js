// first work go to js file then i catch all element .most importantly which are my need .
// 1.all job card need.
// 2.dashboard count need.
// 3.tab button like all, interview , rejected
// 4. interview and rejected button card inside element
// get button
let jobCard = document.querySelectorAll(".job-card");
let allCard = document.getElementById('all-button');
let interviewButton = document.getElementById('interview-button');
let rejectedButton = document.getElementById('rejected-button');

// get element 
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// function count 
function updateCounts() {
    let total = jobCard.length;
    let interview = 0;
    let rejected = 0;

// now i check marked

jobCard.forEach(each=> {
    if(card.querySelector(".interview-btn").style.display !== "none"){
        if(card.dataset.status === 'interview'){
            interview++;
        }
    }
    if(card.querySelector(".rejected-btn").style.display !== "none"){
        if(card.dataset.status === "rejected"){
            rejected++;
        }
    }
});
totalCount.innerText = total;
interviewCount.innerText = interview;
rejectedCount.innerText = rejected;

}

// function based on filter 

function filterCards(status){
    jobCard.forEach(card=> {
        if(status === "all"){
            card.style.display = "block";
        }
        else if(card.dataset.status === status){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
}