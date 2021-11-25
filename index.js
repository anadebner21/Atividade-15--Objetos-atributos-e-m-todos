function imc(){
    pessoa.nome = prompt ("Por favor informe seu nome:");
    console.log(pessoa.nome);
    pessoa.altura = prompt ("Informe sua altura:");
    console.log(pessoa.altura);
    pessoa.peso = prompt ("Informe seu peso:");
    console.log(pessoa.peso);
    console.log(pessoa.getImc());

    if(pessoa.getImc() <17){
        alert(`${pessoa.nome}, você está MUITO abaixo do peso!\n Seu IMC é de ${pessoa.getImc()}\n Dica: procure um nutricionista!`);
    } else if(pessoa.getImc() >= 17 && pessoa.getImc() <= 18.49){
        alert(`${pessoa.nome}, você está um pouco abaixo do peso!\n Seu IMC é de ${pessoa.getImc()}\n Dica: se alimente melhor!!`);
    }else if(pessoa.getImc() >= 18.5 && pessoa.getImc() <= 24.99){
        alert(`${pessoa.nome}, está no peso ideal para você!\n Seu IMC é de ${pessoa.getImc()}\n Dica: CONTINUE ASSIM!`);
    }else if(pessoa.getImc() >=25 && pessoa.getImc() <= 29.99){
        alert( `${pessoa.nome}! Você está acima do peso.\n Seu IMC é de ${pessoa.getImc()}\n Dica: É hora de parar de comer Big Mac.`);
    }else if(pessoa.getImc() >= 30 && pessoa.getImc() <= 34.99){
        alert(`${pessoa.nome}, você está acima do peso!\n Seu IMC é de ${pessoa.getImc()}, isso se encaixa em OBESIDADE 1! \n Dica: cuidado para não piorar, procure fazer atividades físicas!`);
    }else if(pessoa.getImc() >= 35 && pessoa.getImc() <= 39.99){
        alert(`${pessoa.nome}, você está ACIMA do peso, OBESIDADE 2 = SEVERA!\n Seu IMC é de ${pessoa.getImc()}\n Dica: Procure um nutricionista, CUIDADO!`);
    }else {
        alert(`${pessoa.nome}, você está MUITO Acima do peso, OBESIDADE 3 = MÓRBIDA !\n Seu IMC é de ${pessoa.getImc()}\n Dica: Procure um nutricionista, e faça ativadade física, muito Cuidado com sua saúde ${pessoa.nome}!`);
    }
  
}

function aposentadoria(){
   pessoa.nome = prompt('Qual é o seu nome?');
   console.log(pessoa.nome);
   pessoa.nascimento = prompt('Que ano você nasceu?');
   console.log(pessoa.nascimento);
   console.log(pessoa.getIdade());
   
   if(pessoa.getIdade() >= 65){
    alert(`Parabéns ${pessoa.nome} você conseguiu esse grande feito, você irá se aposentar!`);
   }else{
       alert(`IH tem que trabalhar mais um pouco ${pessoa.nome}`)
        let falta = 65 - pessoa.getIdade(); 
        console.log(falta);
        alert (`Faltam ${falta} anos pra vc se aposentar!!`);
    }

}


function numero(){
    var palavras = new Array();
    var n = prompt('Quantas palavras vc quer colocar?');
    console.log(palavras);
    for(let i = 0; i < n; i++){
        palavras[i] = prompt('Informe uma palavra:');

    
    }
    palavras.reverse();
    for(let i = 0; i < n; i++){
        alert(palavras[i]);
        console.log(palavras[i]);
    }

}


let pessoa = {
    nome : '', nascimento: '', altura:  '', peso: '', 
    getIdade: function(){
        return 2021 - this.nascimento;
    },
    getImc: function(){
        return  this.peso / (this.altura*this.altura);
    }
}

