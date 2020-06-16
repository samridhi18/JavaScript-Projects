const currency__buttons = document.getElementById('currency__buttons');
const usdvalue = document.getElementById('usdvalue');
const resultInput = document.getElementById('result');
currency__buttons.addEventListener('click',function(event){
    const button = event.target;
    const currencyId = button.getAttribute('data-currencyid');
    if(currencyId === null) 
        return ;
    if(usdvalue.value === "") {
        alert('input cannot be empty');
        return ;
    }
    convert(currencyId,usdvalue.value);
})

function convert(currencyId,usdvalue) {
    fetch(`https://free.currconv.com/api/v7/convert?q=USD_${currencyId}&compact=ultra&apiKey=4af268115bebe3311ba0`)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        var rate = result[`USD_${currencyId}`];
        resultInput.value = usdvalue*rate;
    })
    .catch(function(err){
        console.log(err);
    })
}