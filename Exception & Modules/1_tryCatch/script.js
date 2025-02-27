const parentContainer = document.getElementById("main-container");
const api = "https://dummyjson.com/todos";

const createTodoTable = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Id</th>
      <th>Todo</th>
    </tr>
  `;
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  parentContainer.appendChild(table);

  return tbody;
};

const addTodoRow = (tbody, todoData) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${todoData.id}</td>
    <td>${todoData.todo}</td>
  `;
  tbody.appendChild(row);
};

const getData = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();

    if (!response.ok) {
      return console.error(data.message);
    }

    if (data && data.todos) {
      const tbody = createTodoTable();
      data.todos.forEach((todo) => {
        addTodoRow(tbody, todo);
      });
    } else {
      console.error("Invalid data format from API");
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("API request completed.");
  }
};

getData();
