function createMultiplicationTable(size) {
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const emptyCell = document.createElement("th");
    headerRow.appendChild(emptyCell);

    for (let i = 1; i <= size; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = 1; i <= size; i++) {
        const row = document.createElement("tr");
        const rowHeader = document.createElement("th");
        rowHeader.textContent = i;
        row.appendChild(rowHeader);

        for (let j = 1; j <= size; j++) {
            const cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
}


const container = document.getElementById("pifagor");
const table = createMultiplicationTable(10);
container.appendChild(table);