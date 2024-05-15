function calcularIdade(){
    var iAno = document.getElementById("anoNasc").value;

    var idade = 2024-iAno;
    alert ("A sua é idade é de: "+idade);
}

function somarNum(){
    var numero1 = document.getElementById("num1").value;
    var numero1Alterado = parseInt(numero1);
    var numero2 = document.getElementById("num2").value;
    var numero2Alterado = parseInt(numero2);
    var resultado = numero1Alterado+numero2Alterado;
    alert("O resultado da some = "+resultado);
}

function subtracaoNum(){
    var numero3 = document.getElementById("nume3").value;
    var numero3Alterado = parseInt(numero3);
    var numero4 = document.getElementById("nume4").value;
    var numero4Alterado = parseInt(numero4);
    var resultado = numero3Alterado-numero4Alterado;
    alert("O resultado da subtração = "+resultado);
}

function divisaoNum(){
    var numero5 = document.getElementById("nume5").value;
    var numero5Alterado = parseInt(numero5);
    var numero6 = document.getElementById("nume6").value;
    var numero6Alterado = parseInt(numero6);
    var resultado = numero5Alterado/numero6Alterado;
    alert("O resultado da divisão = "+resultado);
}

function multiplicarNum(){
    var numero7 = document.getElementById("nume7").value;
    var numero7Alterado = parseInt(numero7);
    var numero8 = document.getElementById("nume8").value;
    var numero8Alterado = parseInt(numero8);
    var resultado = numero7Alterado*numero8Alterado;
    alert("O resultado da multiplicação = "+resultado);
}


function somar2Num(){
    var numero1a = document.getElementById("num1a").value;
    var numero1aAlterado = parseInt(numero1a);
    var numero2a = document.getElementById("num2a").value;
    var numero2aAlterado = parseInt(numero2a);
    var numero3a = document.getElementById("num3a").value;
    var numero3aAlterado = parseInt(numero3a);
    var numero4a = document.getElementById("num4a").value;
    var numero4aAlterado = parseInt(numero4a);
    var numero5a = document.getElementById("num5a").value;
    var numero5aAlterado = parseInt(numero5a);
    var resultado = numero1aAlterado+numero2aAlterado+numero3aAlterado+numero4aAlterado+numero5aAlterado;
    alert("O resultado da some = "+resultado);
}

function dividir5Num(){
    var numero6a = document.getElementById("num6a").value;
    var numero6aAlterado = parseInt(numero6a);
    var numero7a = document.getElementById("num7a").value;
    var numero7aAlterado = parseInt(numero7a);
    var numero8a = document.getElementById("num8a").value;
    var numero8aAlterado = parseInt(numero8a);
    var numero9a = document.getElementById("num9a").value;
    var numero9aAlterado = parseInt(numero9a);
    var numero10a = document.getElementById("num10a").value;
    var numero10aAlterado = parseInt(numero10a);
    var resultado = numero6aAlterado+numero7aAlterado+numero8aAlterado+numero9aAlterado+numero10aAlterado;
    var resultado2 = resultado/5
    alert("O resultado da divisão = "+resultado2);
}

function notaNum(){
    var numero11a = document.getElementById("num11a").value;
    var numero11aAlterado = parseInt(numero11a);
    var numero12a = document.getElementById("num12a").value;
    var numero12aAlterado = parseInt(numero12a);
    var resultado = numero11aAlterado+numero12aAlterado;
    var resultado2 = resultado/2
    var seis = 6;
    if (resultado2 > seis){
        alert("O aluno foi aprovado! Nota final "+resultado2);
    } else{
        alert("O aluno foi reprovado :( Nota final "+resultado2);
    }
}