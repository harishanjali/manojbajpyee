console.log("tested");
let mobileSearchContainer = document.getElementById("mobileSearchContainer");
let mobileSearchIcon = document.getElementById("mobileSearchIcon");
let closeBtn = document.getElementById("closeBtn");
let mobileSearchInput = document.getElementById("mobileSearchInput");
let mediumSearchIconBtn = document.getElementById("mediumSearchIconBtn");
let desktopSearchBtn = document.getElementById("desktopSearchBtn");
let inputContentContainer = document.getElementById("inputContentContainer");
let socialButtonContainer = document.getElementById("socialButtonContainer");
let menu = document.getElementById("menu");
let arrowBtn = document.getElementById("arrowBtn");
let profileOptions = document.getElementById("profileOptions");


arrowBtn.onclick = function(){
    profileOptions.classList.toggle("d-none");
}

function openLink(profileId){
    let selectedEl = document.getElementById(profileId);
    let ElText = selectedEl.textContent;
    arrowBtn.childNodes[0].textContent = ElText;
    profileOptions.classList.add("d-none");
}
function removeCard(cardId){
    let parentEl = document.getElementById(cardId).parentElement;
    let totalEl = parentEl.parentElement;
    totalEl.classList.add("d-none");
}

function showSocialBtns(){
    socialButtonContainer.classList.toggle('d-none');
}
function changedToLiked(clicked_id){
    let likedEl = document.getElementById(clicked_id);
    let heartEl = likedEl.childNodes[0];
    heartEl.classList.toggle('liked-heart');
    likedEl.classList.toggle('liked-btn');
}
// document.getElementsByTagName("BODY")[0].onclick = function(){
//     console.log("clicked on body");
//     inputContentContainer.classList.add("d-block");
// }
menu.onclick = function(){
    menu.classList.toggle("open");
}

function showMobileSearchContainer(){
    mobileSearchContainer.classList.toggle("d-none");
    mobileSearchInput.focus();
}
mobileSearchIcon.onclick = ()=>{
    showMobileSearchContainer();
}
closeBtn.onclick = ()=>{
    showMobileSearchContainer();
}
mediumSearchIconBtn.onclick = ()=>{
    showMobileSearchContainer();
}
// desktopSearchBtn.onclick = ()=>{
//     showMobileSearchContainer();
// }
