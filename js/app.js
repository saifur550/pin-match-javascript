
function getPin() {
    const pinNumber = Math.round(Math.random() * 10000);
    const pinString = pinNumber  + '';

    if (pinString.length == 4){
        return pinNumber
    }
   else {
       console.log(' got 3 digit number and call again start function again', pinNumber);
       return getPin()
   }  
}





function generatePin() {
    const pinNumber = getPin()
    document.getElementById('display-pin').value = pinNumber
    console.log(pinNumber);
}





document.getElementById('key-pad').addEventListener('click' , function(e){
   const keyNum = e.target.innerText;

   const calcInput = document.getElementById('typed-numbers');

   if(isNaN(keyNum)){
       console.log(keyNum);

       if(keyNum == 'C'){
           calcInput.value = ' '
       }
   }

   else{
   
    const preCalc = calcInput.value;
    const newCalc = preCalc + keyNum
    calcInput.value = newCalc
    console.log(keyNum);
   }
  
})


function verifyPin(){
   const pin = document.getElementById('display-pin').value;
   const type = document.getElementById('typed-numbers').value;
   const messageSuccess = document.getElementById('notify-success');
   const messageFail = document.getElementById('notify-fail');

   if (pin == type){
       console.log('pin match');
      
       messageSuccess.style.display ='block'
       messageFail.style.display ='none'
   }else{
       console.log('doe not match');
      
       messageFail.style.display ='block'
       messageSuccess.style.display ='none'
   }

   
}