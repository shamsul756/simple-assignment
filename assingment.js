// Current selected tab
let currentTab = "all";//new
// buttons tab
document.getElementById("all-button").onclick = () => changeTab ("all");
document.getElementById ("interview-button").onclick = () => changeTab ("interview");
document.getElementById("rejected-button").onclick = () => changeTab ("rejected");//new

function changeTab(tab){
    currentTab = tab;
    updateUI();
}

function updateUI(){ 
    let cards = document.querySelectorAll(".job-card");
    let total = cards.length;
    let interview = 0;
    let rejected = 0;
    let visible = 0;
//new
 cards.forEach (card =>{ 
let status = card.dataset.status || "";
if(status === "interview") interview++;
if(status === 'rejected') rejected++;
// filter
if(currentTab === "all" || status === currentTab){
    card.style.display = "block";
    visible++;
}
else{
    card.style.display = "none"
}
});


//new
// update dashboard
document.getElementById("total-count").innerText = total;
document.getElementById("interview-count").innerText = interview;
document.getElementById("rejected-count").innerText = rejected;
document.getElementById("job-count").innerText = visible + "jobs";

// this are the most hard thing 
// No data message
document.getElementById("no-data").style.display = visible === 0 ? "flex" : "none";//new
 }
// setup card
document.querySelectorAll(".job-card").forEach(card => {
    let interviewBtn = card.querySelector(".interview-btn");
    let rejectedBtn = card.querySelector(".rejected-btn");
    let appliedBtn = card.querySelector(".applied-btn");
    let deleteBtn = card.querySelector(".delete-icon")
//new
// check interviewBtn 
if(interviewBtn) {
    interviewBtn.onclick = () =>{
        card.dataset.status = "interview";
        updateUI()
    };
}//new

if(rejectedBtn){
    rejectedBtn.onclick = () => {
        card.dataset.status = "rejected";
        updateUI();
    }
}
// check delterBtn
if(deleteBtn){
    deleteBtn.onclick = () => {
        card.remove();
        updateUI();
    };
}
// check applied btn 
if(appliedBtn){
    appliedBtn.onclick = () => {
        appliedBtn.innerText = appliedBtn.innerText === "APPLIED" ? 
         "NOT APPLIED" : "APPLIED";
    };
}

});//new
updateUI();

// khel kotom 






