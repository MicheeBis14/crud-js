
let selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    let formData = readFormData();
    if(selectedRow === null){
        insertNewItems(formData);
    }else{

    }

}
// Function Read Data
function readFormData(){
    let formData = {};

        formData["name"] = document.getElementById("name-txt").value;
        formData["first-nom"] = document.getElementById("first-nom").value;
        formData["phone-txt"] = document.getElementById("phone-txt").value;
        formData["mail-txt"] = document.getElementById("mail-txt").value;
        return formData;
}
// Function Insert new items
function insertNewItems(data){
    let table = document.getElementById("tableau-result").getElementsByTagName('td')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.first-nom;
    let cell = newRow.insertCell(2);
        cell2.innerHTML = data.phone-text;
    let cell3 = newRow.insertCell(3);
        celle3.innerHTML = data.mail-text;
    let cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button> Edit </button> <button>Delete</button>` 

}  