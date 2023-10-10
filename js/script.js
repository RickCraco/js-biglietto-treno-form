const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset')
let nome;
let km;
let age;
let result;
const ticket = document.getElementById('ticket');

generateBtn.addEventListener('click', 

    function(){
        nome = document.getElementById('nome').value;
        km = parseInt(document.getElementById('km').value);
        age = document.getElementById('age').value;

        //if(isNaN(km)){
        //    alert('inserire valori validi')
        //}else if(nome === '' || nome === isNaN(nome)){
            //alert('inserire valori validi')
        //}

        if(nome === '' || !isNaN(parseInt(nome))){
            alert('inserire valori validi');
            
        }else if (isNaN(km)){
            alert('inserire valori validi');
        }else{
            const basePrice = km * 0.21;

            if(age === 'minorenne'){
                result = basePrice - (basePrice * 0.20);
                document.querySelector('.offerta').innerHTML = 'Offerta minorenni';
            }else if(age === 'over65'){
                result = basePrice - (basePrice * 0.40);
                document.querySelector('.offerta').innerHTML = 'Offerta over 65';
            }else{
                result = basePrice;
                document.querySelector('.offerta').innerHTML = 'Offerta standard';
            }

            ticket.classList.remove('d-none');  
            document.querySelector('.nome-pass').innerHTML = nome;
            document.querySelector('.carrozza').innerHTML = Math.floor(Math.random() * 11);
            document.querySelector('.cp').innerHTML = Math.floor(Math.random() * 10000);
            document.querySelector('.costo').innerHTML = result;

            console.log(result);
        }

        
    }

)

resetBtn.addEventListener('click',

    function(){
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('age').value = 'minorenne';
        ticket.classList.add('d-none');
    }

)