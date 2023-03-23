var form = document.querySelector("form");
var tableBody = document.querySelector("#table-body");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var rollNo = form.elements["rollno"].value;
    var Name = form.elements["name"].value;
    var gender = form.elements["gender"].value;
    var semester = form.elements["semester"].value;
    var subjects = form.elements["subjects"];
    var selectedSubjects = [];
    for (var i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            selectedSubjects.push(subjects[i].value);
        }
    }

    var rows = document.querySelectorAll(".row");
    for (var i = 1; i < rows.length; i++) {
        if (rows[i].querySelector(".col:first-child").textContent === rollNo) {
            alert("Roll no already exists!");
            return;
            }
            }
    
var newRow = document.createElement("div");
newRow.classList.add("row");

var rollNoCol = document.createElement("div");
rollNoCol.classList.add("col");
rollNoCol.textContent = rollNo;
newRow.appendChild(rollNoCol);

var name = document.createElement("div");
name.classList.add("col");
name.textContent = Name;
newRow.appendChild(name);

var genderCol = document.createElement("div");
genderCol.classList.add("col");
genderCol.textContent = gender;
newRow.appendChild(genderCol);

var semesterCol = document.createElement("div");
semesterCol.classList.add("col");
semesterCol.textContent = semester;
newRow.appendChild(semesterCol);

var subjectsCol = document.createElement("div");
subjectsCol.classList.add("col");
subjectsCol.textContent = selectedSubjects.join(", ");
newRow.appendChild(subjectsCol);

tableBody.appendChild(newRow);

form.reset();
});