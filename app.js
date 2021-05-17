const userList = document.querySelector(".name-list ");
const listInput = document.querySelector(".list-input");
const addList = document.querySelector(".addList");

addList.addEventListener("click", function () {
  //create an  li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);

  //Add the input value inside that  now li
  newLi.appendChild(liContent);
  // Attaching the li to  the user list
  userList.appendChild(newLi);
});
