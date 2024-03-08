const botao = document.getElementById("botao");

botao.addEventListener("click", (e) => {
    e.preventDefault();

    const container = document.querySelector(".container")
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const description = document.getElementById("description");
    const imcValue = document.getElementById("valor");
    let descricao = "";

    let imc = peso /( altura * altura);

    if(!imc) {
        console.log("erro");
    } else {
        if(imc < 18.5){
            descricao = "Abaixo do peso";
        } else if( 18.5 >= imc <= 25) {
            descricao = "Peso normal";
        } else if( 25 >= imc <= 30) {
            descricao = "Acima do peso";
        } else {
            descricao = "Obeso";
        }

        imcValue.innerText = imc.toFixed(2);
        description.innerText = descricao;
    
        document.getElementById("resultado").classList.remove("hidden");
    }
    
    // container.style.height = "600px";
    
})