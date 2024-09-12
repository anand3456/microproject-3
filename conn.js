var value = null;
let arr = [];

function pegaValor(dado){
  let display = document.querySelector('#display');
  display.value = dado;

  if(display.value != undefined || display.value != null){
  value = display.value;
  arr.push(display.value);
  display.innerText = arr.join('');
  }
}

function res(){
  display.innerText = eval(arr.join('')); 
  arr = [];
}


 
function reset(){
  arr = [];
  display.innerText = '0';
}

function del() {
  arr.pop();  
  let display = document.querySelector('#display');
  display.innerText = arr.join(''); 
}