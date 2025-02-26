export const createTodoTable = (parentContainer) => {
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

export const addTodoRow = (tbody, todoData) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${todoData.id}</td>
    <td>${todoData.todo}</td>
  `;
  tbody.appendChild(row);
};
