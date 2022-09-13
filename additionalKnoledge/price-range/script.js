

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider  .progress");

let priceGap = 1000;

rangeInput.forEach(input => {
    input.addEventListener("input", e =>{
        //Pega os valores das 2 range-input e associa a um número
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
            //Se o slider activo for o mínimo
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
            
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            //Juntando a linha e as bolinhas
            /*let percent = (minVal / rangeInput[0].max) * 100; 
            console.log(percent)*/
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        
    });
});