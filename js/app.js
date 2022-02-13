
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }  
};

function generatePin(){
    const pin = getPin ();
    document.getElementById('display-pin').value = pin;  
};

document.getElementById('key-pad').addEventListener('click', function(event){
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        // console.log(number);
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
    const preNumber = calcInput.value;
    const newNumber = preNumber + number;
    calcInput.value  = newNumber ;
    }
    
});


function verifyPin(){
    const pin =  document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessages = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (pin == typedNumbers){
         successMessages.style.display ='block'  
         failError.style.display ='none'
    }else{
        successMessages.style.display ='none'  
        failError.style.display ='block'
    }
}