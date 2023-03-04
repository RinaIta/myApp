function insertTable() {
    var name = document.getElementById('name').value;
    var role = document.getElementById('role').value;
    var workerID = document.getElementById('workerID').value;
    var date = document.getElementById('date').value;
    var hours = document.getElementById('hours').value;


    var table = document.getElementById('table');
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHtml = name;
    cell2.innerHtml = role;
    cell3.innerHtml = workerID;
    cell4.innerHtml = date;
    cell5.innerHtml = hours;



}