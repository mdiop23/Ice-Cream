"use strict";

window.onload = function () {
  
    let submitOrderBtn = document.getElementById("submitOrderBtn");
    submitOrderBtn.onclick = submitOrderBtnClicked;

    let coneSelected = document.getElementById("cone");
    coneSelected.onchange = showTopping;

    let cupSelected = document.getElementById("cup");
    cupSelected.onchange = showTopping;


    let toppingCard = document.getElementById("toppingCard");
    toppingCard.style.display = "none";
}


function submitOrderBtnClicked(event) {
    event.preventDefault();
 
    let numberOfScoops = Number(document.getElementById("numberOfScoops").value);
    let basePay = 2.95;
    let extraScoop = 1.25;

    let selectedOptions = document.querySelectorAll("input[name='addToppings']:checked");
    let extraTopping = 0; // 

    for (let i = 0; i < selectedOptions.length; i++) {
        let selectedOption = selectedOptions[i];
        if (selectedOption.value == "sprinkles") {
            extraTopping += 0.50;
        } else if (selectedOption.value == "cherry") {
            extraTopping += 0.25;
        } else if (selectedOption.value == "hotFudge") {
            extraTopping += 1.25;
        } else {
            extraTopping += 0.25;
        }
    }

    let taxRate = 0.082; 

   
    let totalPriceWithoutTax;

    if (numberOfScoops > 1) {
        totalPriceWithoutTax = basePay + (extraScoop * (numberOfScoops - 1)) + extraTopping;
    } else {
        totalPriceWithoutTax = basePay + extraTopping;
    }

    let taxAmount = totalPriceWithoutTax * taxRate;

    let totalAmount = totalPriceWithoutTax + taxAmount;

    let totalDue = document.getElementById("totalDue");
    totalDue.innerHTML = `Total Due $: ${totalAmount.toFixed(2)}`;

    let toppingCheckboxes = document.querySelectorAll("input[name='addToppings']");
    toppingCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    let basePriceValue = document.getElementById("basePriceValue");
    basePriceValue.innerHTML = `Base price $: ${totalPriceWithoutTax.toFixed(2)}`;

    let taxPrice = document.getElementById("taxPrice");
    taxPrice.innerHTML = `Tax $: ${taxAmount.toFixed(2)}`;
}



function showTopping() {
    let coneSelected = document.getElementById("cone");
    let cupSelected = document.getElementById("cup");
    let toppingCard = document.getElementById("toppingCard");

    if (cupSelected.checked) {
        toppingCard.style.display = "block";
    } else if (coneSelected.checked) {
        toppingCard.style.display = "none";
    }
}
