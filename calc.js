const quadrado=document.querySelector("quadrado")

const primeiro=document.getElementById("primeiro")

const segundo=document.getElementById("segundo")

const soma=document.getElementById("soma")

const subtracao=document.getElementById("subtracao")

const multiplicacao=document.getElementById("multiplicacao")

const divisao=document.getElementById("divisao")

const oresultado=document.getElementById("oresultado") 

soma.addEventListener('click', ()=>{
    let conta = parseInt( primeiro.value) + parseInt( segundo.value)
    oresultado.value = conta
})

subtracao.addEventListener('click', ()=>{
    let conta = parseInt( primeiro.value) - parseInt( segundo.value)
    oresultado.value = conta
})

multiplicacao.addEventListener('click', ()=>{
    let conta = parseInt( primeiro.value) * parseInt( segundo.value)
    oresultado.value = conta
})

divisao.addEventListener('click', ()=>{
    let conta = parseInt( primeiro.value) / parseInt( segundo.value)
    oresultado.value = conta
})