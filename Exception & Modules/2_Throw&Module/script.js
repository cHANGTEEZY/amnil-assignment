import { createTodoTable, addTodoRow } from "./table.js"; // Add .js extension

const parentContainer = document.getElementById("main-container");
const api = "https://dummyjson.com/todos";

const getData = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();

    if (!response.ok) {
      return console.error(data.message);
    }

    if (data && data.todos) {
      const tbody = createTodoTable(parentContainer);
      data.todos.forEach((todo) => {
        addTodoRow(tbody, todo);
      });
    } else {
      throw new Error("Invalid data format from API");
    }
  } catch (err) {
    throw new Error(err.message || "Something went wrong");
  } finally {
    console.log("API request completed.");
  }
};
getData();
