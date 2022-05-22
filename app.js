var selectedRow = null;

function onFormSubmit(){
    if(validate()) {
    var formData = readFromData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }else{
        upateRecord(formData);
    }
    resetFrom();
  }
}

//read from data
function readFromData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["comission"] = document.getElementById("comission").value;
    return formData;
}

//insert data 
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
   
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.comission;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML =  Math.floor(data.salary) + Math.floor(data.comission * data.salary)/100 ; 

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onclick = "onEdit(this)">Edit</a>
                        <a onclick = "onDelete(this)">Delete</a>`;

}

//reset data
function resetFrom(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("comission").value = "";
}

//edit data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("comission").value = selectedRow.cells[3].innerHTML;

}

//update data
function upateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.comission;
    selectedRow.cells[4].innerHTML = Math.floor(formData.salary) + Math.floor(formData.comission * formData.salary)/100 ;
}

//delete data
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetFrom();
    }
}

//validate data
function validate(){
    isValid = true;
    if(document.getElementById("fullName").value == ""){
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
        document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}