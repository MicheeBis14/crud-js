let form = document.getElementById('formDatas');
let btnAdd = document.getElementById('btnAdd');
let listview = document.querySelector('.tableau');
let btnReset = doculent.getElementById('btnReset');

// Datas
let phones = [];

btnAdd.addEventListener('click', (e) => {
    btnAdd.classList.toggle('d-none');
    formDatas.classList.toggle('d-none');
});

btnReset.addEventListener('click',(e) => {
    btnReset.classList.toggle('d-none');
    formDatas.classList.toggle('d-none');
});

// add Action
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.target);

    let phone = {
        'nameUse': data.get('nameUse'),
        'prenomUse': data.get('prenomUse'),
        'emailUse': data.get('emailUse'),
        'phoneUse': data.get('phoneUse'),
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
                            <td>${phone.nameUse}</td>
                            <td>${phone.prenomUse}</td>
                            <td>${phone.emailUse}</td>
                            <td>${phone.phoneUse}</td>
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