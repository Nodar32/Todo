let body = document.querySelector("body");
let allTask = document.querySelector(".allTask");
let taskName = document.querySelector("#taskName");
let aboutTask = document.querySelector("#aboutTask");
let save = document.querySelector("#save");
window.onload = function() {
  if (localStorage.getItem("all") != null) {
    allTask.innerHTML = localStorage.getItem("all");
  }
};
save.addEventListener("click", function() {
  //
  let taskConteiner = document.createElement("div");
  taskConteiner.classList.add("taskConteiner");
  //
  let about = document.createElement("div");
  about.classList.add("about");
  about.innerHTML = aboutTask.value;
  //
  let taskList = document.createElement("div");
  taskList.classList.add("taskList");
  // //
  let check = document.createElement("div");
  check.classList.add("check");
  taskList.appendChild(check);
  // //
  let taskTitle = document.createElement("p");
  taskTitle.classList.add("taskTitle");
  taskList.appendChild(taskTitle);
  taskTitle.innerHTML = taskName.value;
  // //
  let clear = document.createElement("div");
  clear.classList.add("delete");
  // // //
  let trash = document.createElement("img");
  trash.src = "images/trash.png";
  clear.appendChild(trash);
  taskList.appendChild(clear);
  // //
  let showMore = document.createElement("div");
  showMore.classList.add("showMore");
  // // //
  let open = document.createElement("img");
  open.src = "images/ArrowDown.png";
  showMore.appendChild(open);
  taskList.appendChild(showMore);
  //
  taskConteiner.appendChild(taskList);
  taskConteiner.appendChild(about);
  allTask.appendChild(taskConteiner);

  // taskConteiner.addEventListener("click", function(event) {
  //   onExpandClick(event);
  // });
  // Функционал кнопок
  // Отметить как выполненное
  let checkAll = document.querySelectorAll(".check");
  for (elem of checkAll) {
    elem.onclick = function() {
      if (this.parentElement.childNodes[1].classList.length == 1) {
        let checked = document.createElement("img");
        checked.src = "images/check.png";
        this.appendChild(checked);
        this.parentElement.childNodes[1].classList.add("checkY");
        localStorage.setItem("all", allTask.innerHTML);
      } else if (this.parentElement.childNodes[1].classList.length == 2) {
        this.removeChild(this.firstChild);
        this.parentElement.childNodes[1].classList.remove("checkY");
        localStorage.setItem("all", allTask.innerHTML);
      }
    };
  }
  // Удаление таска
  let clearAll = document.querySelectorAll(".delete");
  for (elem of clearAll) {
    elem.onclick = function() {
      allTask.removeChild(this.parentElement.parentElement);
      localStorage.setItem("all", allTask.innerHTML);
    };
  }
  // Показ подробностей таска
  let showMoreAll = document.querySelectorAll(".showMore");
  for (elem of showMoreAll) {
    elem.onclick = function() {
      if (this.classList.length == 1) {
        this.parentElement.parentElement.childNodes[1].style.display = "block";
        this.classList.add("rotate");
        localStorage.setItem("all", allTask.innerHTML);
      } else if (this.classList.length == 2) {
        this.parentElement.parentElement.childNodes[1].style.display = "none";
        this.classList.remove("rotate");
        localStorage.setItem("all", allTask.innerHTML);
      }
    };
  }
  localStorage.setItem("all", allTask.innerHTML);
});

// function onExpandClick(evt) {
//   let el = evt.currentTarget;

//   let about = el.querySelector(".about");

//   about.style.display = "block";
// }
