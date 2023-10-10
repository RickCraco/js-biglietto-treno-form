const generateBtn = document.getElementById('generate');
let nome;
let km;
let age;
let result;

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
            }else if(age === 'over65'){
                result = basePrice - (basePrice * 0.40);
            }else{
                result = basePrice;
            }

            console.log(result);
        }

        
    }

)