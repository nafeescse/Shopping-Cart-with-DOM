let number = document.getElementById("inputPhone");
let numberCase = document.getElementById("inputCase");
let pricePhone = document.getElementById("price-phone");
let priceCase = document.getElementById("price-case");
let sub = document.getElementById('subTotal');
let tax = document.getElementById("tax");
let total = document.getElementById("total");

// function cartPlus(pro, qnty, pricing, proPrice){
//     document.getElementById(pro + '-plus').addEventListener('click', function () {    
//         if (number.value < 0) {
//             console.log('bla bla');
//         }
//         else {
//             let numberInput = qnty.value ;
//             numberInput =  Number(numberInput) + 1;
//             qnty.value = numberInput;
//             let priceAmount = proPrice.innerText;
//             proPrice.innerText = pricing * numberInput;
//             let taxTotal = tax.innerText;
//             let subTotal = sub.innerText;
//             sub.innerText = Number(priceCase.innerText) + Number(proPrice.innerText);
//             tax.innerText = Math.floor(subTotal * 0.1);
//             let totalTaka = total.innerText;
//             total.innerText = Number(sub.innerText) + Number(tax.innerText);
    
//             }
//     })}

//     function cartMinus(pro, num, pricing, proPrice){
//         document.getElementById(pro + '-minus').addEventListener('click', function () {    
//             if (num.value <= 0) {
//                 console.log('bla bla');
//             }
//             else {
//                 let numberInput = Number(num.value);
//                 num.value = numberInput - 1;
//                 let priceAmount = proPrice.innerText;
//                 proPrice.innerText = pricing * num.value;
//                 let taxTotal = tax.innerText;
//                 let subTotal = sub.innerText;
//                 sub.innerText = Number(priceCase.innerText) + Number(proPrice.innerText);
//                 tax.innerText = Math.floor(sub.innerText * 0.1);
//                 let totalTaka = total.innerText;
//                 total.innerText = Number(sub.innerText) + Number(tax.innerText);
        
//                 }
//         })}


document.getElementById('phone-plus').addEventListener('click', function () {
    if (number.value < 0) {
        console.log('bla bla');
    }
    else {
        
        let numberInput = number.value;
       
        number.value =  Number(numberInput) + 1;
        console.log(number.value)
        let priceAmount = pricePhone.innerText;
        pricePhone.innerText = 1219 * number.value;
        let subTotal = sub.innerText;
        let taxTotal = tax.innerText;
        sub.innerText = Number(priceCase.innerText) + Number(pricePhone.innerText);
        tax.innerText = Math.floor(sub.innerText * 0.1);
        let totalTaka = total.innerText;
        total.innerText = Number(sub.innerText) + Number(tax.innerText);

        }
}

)
document.getElementById("phone-minus").addEventListener('click', function () {
    let numberInput = Number(number.value);
    if (number.value <= 0) {
        console.log('bla bla');
    }
    else {
        number.value = numberInput - 1;
        let priceAmount = pricePhone.innerText;
        pricePhone.innerText = 1219 * number.value;
        let subTotal = sub.innerText;
        sub.innerText = Number(priceCase.innerText) + Number(pricePhone.innerText);
        let taxTotal = tax.innerText;
        tax.innerText = Math.floor(sub.innerText * 0.1);
        let totalTaka = total.innerText;
        total.innerText = Number(sub.innerText) + Number(tax.innerText);
        }
})
document.getElementById('case-plus').addEventListener('click', function () {

    if (numberCase.value < 0) {
        console.log('bla bla');
    }
    else {
        let numberInput = Number(numberCase.value);
        numberCase.value = numberInput + 1;
        let priceAmount = priceCase.innerText;
        priceCase.innerText = 59 * numberCase.value;
        let subTotal = sub.innerText;
        sub.innerText = Number(priceCase.innerText) + Number(pricePhone.innerText);
        let taxTotal = tax.innerText;
        tax.innerText = Math.floor(sub.innerText * 0.1);
        let totalTaka = total.innerText;
        total.innerText = Number(sub.innerText) + Number(tax.innerText);
        }
}

)
document.getElementById('case-minus').addEventListener('click', function () {

    if (numberCase.value < 0) {
        console.log('bla bla');
    }
    else {
        let numberInput = Number(numberCase.value);
        numberCase.value = numberInput - 1;
        let priceAmount = priceCase.innerText;
        priceCase.innerText = 59 * numberCase.value;
        let subTotal = sub.innerText;
        sub.innerText = Number(priceCase.innerText) + Number(pricePhone.innerText);
        let taxTotal = tax.innerText;
        tax.innerText = Math.floor(sub.innerText * 0.1);
        let totalTaka = total.innerText;
        total.innerText = Number(sub.innerText) + Number(tax.innerText);
        }
}

)


