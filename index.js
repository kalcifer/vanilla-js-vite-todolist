import { debounce } from "lodash-es";

const main = () => {
  const listOfTodos = document.getElementById("todos");
  const todos = [];
  const addButton = document.getElementById("addTodo");
  const newTodo = document.getElementById("newTodo");
  listOfTodos.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const text = event.textContent;
      const filteredTodos = todos.filter((todo) => todo !== text);
      render(filteredTodos);
    }
  });
  const addNewTodo = () => {
    const text = newTodo.value.trim();
    todos.push(text);
    render(todos);
    newTodo.value = "";
  };
  const render = (todos) => {
    const todosHtml = todos
      .map((todo) => {
        console.log("render todo");
        return `<li>${todo}</li>`;
      })
      .join("");
    listOfTodos.innerHTML = todosHtml;
  };
  addButton.addEventListener("click", addNewTodo);
  newTodo.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addNewTodo();
    }
  });
  render(todos);
};

export default main;
