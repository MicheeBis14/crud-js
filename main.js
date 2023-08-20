let form = document.getElementById('form');
let btnAdd = document.getElementById('btn-submit');
let listview = document.querySelector('.tableau');

// Data
let phones = [];

btnAdd.addEventListener('click', (e) => {
    btnAdd.classList.toggle('d-none');
    form.classList.toggle('d-none');
});

// add Action
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.target);

    let phone = {
        'nameTxt': data.get('nameTxt'),
        'firstNom': data.get('firstNom'),
        'phoneTxt': data.get('phoneTxt'),
        'emailTxt': data.get('emailTxt'),
    }

    phones.push(phone);
    // renderListView();
})

// Affiche la liste
function renderListView(){
    listview.innerHTML = ''
    for (const phone of phones) {
        let temp = `
                    <tbody>
                        <tr>
                            <td>${phone.nameTxt}</td>
                            <td>${phone.phoneTxt}</td>
                            <td>${phone.phoneTxt}</td>
                            <td>${phone.emailTxt}</td>
                            <td>
                                <button class="action-submit">
                                    <i class="bi bi-pencil"></i>
                                </button>

                                <button class="action-submit btn-edit">
                                    <i class="bi bi-trash3-fill"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
    `
    listview.innerHTML += temp
    }
}
renderListView()