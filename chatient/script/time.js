function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}
function hideloader(){
    const land = document.querySelector(".landing");
    const create = document.querySelector(".createbody");

    land.classList.remove("active");
    create.classList.add("active");
    land.style.display = "none";
}
delay(2000).then(() => hideloader());   