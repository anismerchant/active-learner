const promise = fetch(baseUrl + showsPath + queryString);

// Parent within which all constructed elements are placed
let showsSection = document.getElementById("shows");

 // Table Parent
 let showsTable = document.createElement("table");
 showsSection.appendChild(showsTable);
 showsTable.className = "shows__table";

// Builds a single table with rows
function buildTableRows(elementSymbols, tableClassNames, data, rows) {
    for (let i=0; i<rows; i++) {
        // Primary row to hold shows details
        let showsTableRows = document.createElement(elementSymbols[0]);
        showsTable.appendChild(showsTableRows);

        let showsTableRowsDate = document.createElement(elementSymbols[1]);
        showsTableRows.appendChild(showsTableRowsDate);
        showsTableRowsDate.innerHTML = data[i].date;

        let showsTableRowsLocation = document.createElement(elementSymbols[1]);
        showsTableRows.appendChild(showsTableRowsLocation);
        showsTableRowsLocation.innerHTML = data[i].location;

        let showsTableRowsTicket = document.createElement(elementSymbols[1]);
        showsTableRows.appendChild(showsTableRowsTicket);

        let button = document.createElement(elementSymbols[2]);
        showsTableRowsTicket.appendChild(button);
        button.innerHTML = "GET TICKETS";

        // Secondary row to hold shows venues
        let showsTableRow = document.createElement(elementSymbols[0]);
        showsTable.appendChild(showsTableRow);

        let showsTableRowsVenue = document.createElement(elementSymbols[1]);
        showsTableRow.appendChild(showsTableRowsVenue);
        showsTableRowsVenue.innerHTML = data[i].place;
        
        // Assign class names to newly constructed elements
        showsTableRows.className = tableClassNames[0];
        showsTableRowsDate.className = tableClassNames[1];
        showsTableRowsLocation.className = tableClassNames[2];
        showsTableRowsTicket.className = tableClassNames[3];
        button.className = tableClassNames[4];
        showsTableRowsVenue.className = tableClassNames[5];
        showsTableRowsVenue.setAttribute("colspan", "3");
    }
    let rowsVenue = document.querySelectorAll("td");
    let lastChild = rowsVenue[rowsVenue.length-1];
    lastChild.setAttribute("id", "last");  
}

promise.then((response) => {
    return response.json();
})
.then((data) => {
        const elemSymbols =["tr", "td", "button"];
        const tbClassNames = [
            "show__table__rows",
            "shows__table__rows--date",
            "shows__table__rows--location",
            "shows__table__rows--ticket",
            "button",
            "shows__table__rows--venue",
            "last"
        ];
        rows = (data.length);
        return buildTableRows(elemSymbols, tbClassNames, data, rows);
}); 