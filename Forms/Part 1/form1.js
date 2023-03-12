var roll = 1;
var Array = []; 

function AddRow() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var sem = document.getElementById("sem").value;
    var electives = "";

    var roll = document.getElementById("roll").value;
    if (!roll) {
        alert("Please enter a roll number.");
        return false;
    }
    if (Array.includes(roll)) {
        alert("Roll number already exists. Please enter a unique roll number.");
        return false;
    }

    Array.push(roll);
 

    var checkboxes = document.getElementsByName("electives");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            electives += checkboxes[i].value + ", ";
        }
    }
    electives = electives.slice(0, -2);


    var table = document.getElementById("show");
    var newRow = table.insertRow(table.length);


  

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = roll;
    cell2.innerHTML = name|| "-";
    cell3.innerHTML = sem || "-";
    cell4.innerHTML = gender|| "-";
    cell5.innerHTML = electives|| "-";

    roll++;
}

