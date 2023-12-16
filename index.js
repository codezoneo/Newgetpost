let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('categorySelect');
const amountInput = document.getElementById('amountInput');
const dateInput = document.getElementById('dateInput');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');
document.getElementById('show-btn').addEventListener('click', showData);
// Use the variables declared outside the event listener
addBtn.addEventListener("click", () => {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '' || isNaN(amount) || amount <= 0 || date === '') {
        alert('Please fill in all fields with valid values');
        return;
    }

    const obj = {
        categorySelect: category,
        amountInput: amount,
        dateInput: date
    };

    axios.post("https://crudcrud.com/api/a2919e07d96b47b4b8c7bd7e2ca7c0a1/addExpense", obj)
        .then((response) => {
            console.log(response);

            // If the request is successful, show the data
            showData(obj);
        })
        .catch((err) => {
            console.log(err);
        });
});


function showData() {
    // Move the following block outside the event listener
axios.get("https://crudcrud.com/api/a2919e07d96b47b4b8c7bd7e2ca7c0a1/addExpense")
.then((response) => {
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
        expense=response.data[i];
    
    const tableBody = document.getElementById('expnese-table-body');

    const newRow = document.createElement('tr');

    const categoryCell = document.createElement('td');
    categoryCell.textContent = expense.categorySelect;

    const amountCell = document.createElement('td');
    amountCell.textContent = expense.amountInput;

    const dateCell = document.createElement('td');
    dateCell.textContent = expense.dateInput;

    const deleteCell = document.createElement('td');
    deleteCell.textContent = 'Delete';

    newRow.appendChild(categoryCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(deleteCell);

    tableBody.appendChild(newRow);
}
})
.catch((err) => {
    console.log(err);
});

}
