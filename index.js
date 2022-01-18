let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenvalue = '';
for (item of button) {
          
          item.addEventListener('click',(e)=>{
          buttonText = e.target.innerText;
          if (buttonText=='X') {
                    buttonText = '*';
                      screenvalue += buttonText; 
                    screen.value = buttonText;
          }
          else if(buttonText == 'C'){
             screenvalue = '';
             screen.value = screenvalue;            
          }
          else if(buttonText== '='){
           screen.value = eval(screenvalue);
           console.log("Answer");
          }
          else{
                    screenvalue += buttonText;
                    screen.value = screenvalue;
          }
          } )
}
