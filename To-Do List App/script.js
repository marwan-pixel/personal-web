let date = new Date();
const completeDate = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}`;

const add = document.getElementById("add");
function alerts() {
  const alertDanger = document.getElementById("alertdanger");
  let alertFail = "You cannot add an empty activity!";
  alertDanger.innerHTML = alertFail;
  setTimeout(() => {
    alertDanger.style.display = "none";
  }, 2000);
  return (alertDanger.style.display = "block");
}

add.addEventListener("click", () => {
  add.disabled = true;
  let input = document.createElement("input");
  let addtodo = document.createElement("button");
  let deleteaddtodo = document.createElement("button");
  let titleAddToDo = document.createTextNode("+");
  let titleDeleteToDo = document.createTextNode("x");

  addtodo.id = "addtodo";
  deleteaddtodo.id = "deleteaddtodo";
  addtodo.appendChild(titleAddToDo);
  deleteaddtodo.appendChild(titleDeleteToDo);
  let title = document.getElementById("title");
  title.appendChild(deleteaddtodo);
  title.appendChild(input);
  title.appendChild(addtodo);

  const deleteToList = document.getElementById("deleteaddtodo");

  const addtoList = document.getElementById("addtodo");

  deleteToList.addEventListener("click", () => {
    add.disabled = false;
    title.removeChild(input);
    title.removeChild(addtodo);
    title.removeChild(deleteaddtodo);
  });

  addtoList.addEventListener("click", () => {
    if (input.value === "") {
      alerts();
    } else {
      let checkbox = document.createElement("input");
      let remove = document.createElement("button");
      remove.id = "remove";
      remove.appendChild(document.createTextNode("Delete"));
      let p = document.createElement("p");
      let dates = document.createElement("p");
      let detail = document.createElement("div");
      detail.id = "detail";
      checkbox.type = "checkbox";
      checkbox.id = "checkbox";
      let list = document.getElementById("list");
      dates.appendChild(document.createTextNode(completeDate));
      p.appendChild(document.createTextNode(input.value));
      input.value = "";
      detail.appendChild(dates);
      detail.appendChild(checkbox);
      detail.appendChild(p);
      detail.appendChild(remove);

      list.appendChild(detail);

      remove.addEventListener("click", () => {
        list.removeChild(detail);
      });
    }
  });
});
