const btnTip = document.querySelector(".btn-tip");
const btnCalculate = document.querySelector(".btn-calculate");

btnTip.addEventListener("click", selectTip);

function selectTip(e) {
    e.preventDefault();
    document.querySelector("#change-tip").style.display = "block";
}

btnCalculate.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    let bill = document.querySelector(".bill-input").value;
    let people = document.querySelector(".people-input").value;
    let tip = document.querySelector("#change-tip").value;  
    
    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!'
          })
    }
    else {
        let billPerPerson = bill / people;
        let tipPerPerson = billPerPerson * tip;
        let amountPerPerson = billPerPerson + tipPerPerson;
        document.querySelector(".bill-per-person").textContent = billPerPerson.toFixed(2);
        document.querySelector(".tip-per-person").textContent = tipPerPerson.toFixed(2);
        document.querySelector(".amount-per-person").textContent = amountPerPerson.toFixed(2);
    }
}