let body = document.querySelector("body");
let taskName = document.querySelector("#taskName");
let aboutTask = document.querySelector("#aboutTask");
let save = document.querySelector("#save");
save.addEventListener('click', function() {
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
  body.appendChild(taskConteiner);

  taskConteiner.addEventListener('click', function(event){
    onExpandClick(event);
  });
  // Функционал кнопок
  // let showMoreAll = document.querySelectorAll(".showMore");
  // for (elem of showMoreAll) {
  //   console.log(elem);
  //   elem.onclick = function() {
  //     about.style.display = "block";
  //   };
  // }
});

function onExpandClick(evt){
  let el = evt.currentTarget;

  let about = el.querySelector('.about');

  about.style.display = 'block';
}


