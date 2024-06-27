const Input = document.querySelector("#item");
const taskList = document.querySelector("#task_list");
let addTask = document.querySelector(".addTask");
let count=1;
addTask.addEventListener("click", () => {
  console.log(Input.value);
  if(Input.value != ""){
  taskList.innerHTML += `<li> ${count}. ${Input.value} <i class="fa-solid fa-xmark"></i> </li>`;
  Input.value = "";
  count++;
taskList.querySelectorAll("li i").forEach((i) => {
    i.addEventListener("click", () => {
      i.parentElement.remove();
    });

});
}
});
let bulb = document.querySelector(".fa-lightbulb");
let mainBackground = document.querySelector(".main_outer");
let bulbState = 0;

bulb.addEventListener("click", () => {
    if (bulbState === 0) {
        mainBackground.style.backgroundColor = "black";
        bulbState = 1;
    } else {
        mainBackground.style.backgroundColor = "white";
        bulbState = 0;
    }
});


function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let currentTimeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("currentTime").textContent = currentTimeString;
  }

 
  setInterval(updateTime, 1000);