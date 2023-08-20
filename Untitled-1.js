
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

        formData["nameTxt"] = document.getElementById("nameTxt").value;
        formData["firstNom"] = document.getElementById("firstNom").value;
        formData["phoneTxt"] = document.getElementById("phoneTxt").value;
        formData["emailTxt"] = document.getElementById("emailTxt").value;
        return formData;
}
// Function Insert new items
function insertNewItems(data){
    let tableau = document.getElementById("tableau-result").getElementsByTagName('tbody')[0];
    let newRow = tableau.insertRow(tableau.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nameTxt;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.firstNom;
    let cell = newRow.insertCell(2);
        cell2.innerHTML = data.phoneText;
    let cell3 = newRow.insertCell(3);
        celle3.innerHTML = data.emailText;
    let cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button> Edit </button> <button>Delete</button>` 

}  