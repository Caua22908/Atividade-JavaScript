/*
===========================================================
Exercícios Práticos - Estruturas de Decisão (if, else, switch)
===========================================================
*/

// 1. Crie uma variável `idade` e use um `if` para exibir "Maior de idade" se idade >= 18.

var idade = 18
if (idade >=18){
    console.log("Maior de idade")
}


// 2. Crie uma variável `hora` e use `if/else` para exibir "Bom dia" se hora < 12 e "Boa tarde" caso contrário.

var hora = 12
if (hora <12){
    console.log("Bom dia")
}

else{
    console.log("Boa tarde")
}

// 3. Crie uma variável `nota` e use `if/else if/else` para exibir:
// "Excelente" se nota >= 9
// "Aprovado" se nota >= 7
// "Recuperação" se nota >= 5
// "Reprovado" caso contrário

var nota = 10
if(nota >=9){
    console.log("Excelente")
}

else if (nota >=7) {
    console.log("Aprovado")
    
}

else if (nota >=5){
    console.log("Recuperação")
}

else{
    console.log("Reprovado")
}

// 4. Crie uma variável `diaSemana` (1 a 7) e use `switch/case` para exibir o nome do dia correspondente.

var diaSemana = 1
switch (diaSemana){
    case (diaSemana =1):
        console.log("Segunda");
        break;

    case (diaSemana =2):
        console.log("Terça");
        break;

    case (diaSemana = 3):
        console.log("Quarta");
        break;
    
    case (diaSemana =4):
        console.log("Quinta");
        break;

    case (diaSemana =5):
        console.log("Sexta");
        break;
    
    case (diaSemana =6):
        console.log("Sabado");
        break;

    case (diaSemana =7):
        console.log("Domingo");
        break;
}


// 5. Modifique o exercício anterior para usar `default` caso o valor da variável não seja de 1 a 7.

var diaSemana = 1
switch (diaSemana){
    case (diaSemana =1):
        console.log("Segunda");
        break;

    case (diaSemana =2):
        console.log("Terça");
        break;

    case (diaSemana = 3):
        console.log("Quarta");
        break;
    
    case (diaSemana =4):
        console.log("Quinta");
        break;

    case (diaSemana =5):
        console.log("Sexta");
        break;
    
    case (diaSemana =6):
        console.log("Sabado");
        break;

    case (diaSemana =7):
        console.log("Domingo");
        break;

        default:
            console.log("Dia da semana não reconhecido!")
}


// 6. Crie uma variável `cor` e use `switch/case` para agrupar cores primárias (vermelho, azul, verde) e secundárias (amarelo, roxo, laranja).

var cor = "vermelho"

switch (cor.toLowerCase()) {
    case "vermelho":
  case "azul":
  case "verde":
    console.log("Cor primária");
    break;

  case "amarelo":
  case "roxo":
  case "laranja":
    console.log("Cor secundária");
    break;

  default:
    console.log("Cor desconhecida");
    
}


// 7. Crie um `if` que verifique se um número é positivo, negativo ou zero, e exiba a mensagem correspondente.
var numero = 1
if (numero <= -1) {
    console.log("Negativo")
}

else (numero >=0){
    console.log("Positivo")
}

// 8. Crie um `if/else` que verifica se um usuário pode acessar um sistema com base em idade >= 18.
var idade = 18

if (idade <18){
    console.log("Você é de menor, não pode acessar a plataforma")
}

else{
    console.log("Acesso Liberado")
}


// 9. Crie um `switch` que exiba uma mensagem diferente para cada mês do ano (1 a 12), usando `default` para valor inválido.

var mes = 1

switch(mes){

    case (mes = 1):
    console.log("Janeiro");
    break;

    case (mes = 2):
    console.log("Fevereiro");
    break; 

    case (mes = 3):
    console.log("Março");
    break; 

    case (mes = 4):
    console.log("Abril");
    break;

    case (mes = 5):
    console.log("Maio");
    break;

    case (mes = 6):
    console.log("Junho");
    break;
    
    case (mes = 7):
    console.log("Julho");
    break 

    case (mes = 8):
    console.log("Agosto");
    break;

    case (mes= 9):
    console.log("Setembro");
    break;

    case (mes =10):
    console.log("Outubro");
    break;

    case (mes= 11):
    console.log("Novembro");
    break;

    case (mes = 12):
    console.log("Dezembro");
    break;

    default:
    console.log("Mês não reconhecido!")
    

}

// 10. Crie um `if/else if/else` que classifica a velocidade de um veículo:
// <= 40 km/h → "Devagar"
// <= 80 km/h → "Moderado"
// <= 120 km/h → "Rápido"
// > 120 km/h → "Muito rápido"

var velo = 40

if (velo <= 40){
    console.log("Devagar")
}

else if (velo <= 80){
    console.log("Moderado")
}

else if (velo <= 120){
    console.log(Rápido)
}

else {
    console.log("Muito rápido")
}



// 11. Crie uma variável booleana `isAdmin` e use `if/else` para exibir se o usuário tem acesso ou não.
var isAdmin = "Ana"
if (isAdmin = "Ana" ){
    console.log("usuário tem acesso")
}

else{
    console.log("Não tem acesso")
}

// 12. Crie uma variável `temperatura` e use `switch` para exibir:
// "Frio" se 0, 1, 2
// "Agradável" se 3, 4, 5
// "Quente" se 6, 7, 8
// "Desconhecido" para outros valores

var temp = 1
switch (temp){
    case (temp = 0):
    case (temp = 1):
    case (temp = 2):
        console.log("Frio");
        break;

        case (temp = 3):
        case (temp = 4):
        case (temp = 5):
            console.log("Agradável");
            break;
        
        case (temp = 6):
        case (tempo = 7):
        case (temp = 8):
            console.log("Quente");
            break;

            default:
                console.log("Desconhecido");

}

     

         



// 13. Crie um `if` que verifica se um número é par ou ímpar.
var num + 2

if (var num % 2 == 0){
    console.log("Número par")
}

else{
    console.log("Numerao ímpar")
}

// 14. Crie um `switch` para exibir a estação do ano com base em um número de 1 a 4.
var estacao = 1
switch (estacao = 1){
    case (estacao = 1):
        console.log("Verão");
        break;
    case (estacao = 2):
    console.log("Outono");
    break;

    case (estacao = 3):
        console.log("Inverno");
        break;

    case (estacao = 4):
        console.log("Primavera");
        break;
}


// 15. Crie um `if/else if/else` para classificar idade de uma pessoa:
// 0-12 → Criança
// 13-19 → Adolescente
// 20-59 → Adulto
// 60+ → Idoso

    var idade = 12
    
    if(idade <0 >12)
        console.log("Criança")


// 16. Crie uma variável `saldo` e use `if` para verificar se é positivo, negativo ou zero.

// 17. Crie uma variável `letra` e use `switch` para verificar se é vogal ou consoante.

// 18. Crie um `if/else` que verifica se um número está dentro de um intervalo (10 a 20).

// 19. Crie um `switch` para exibir mensagens diferentes para valores 1, 2, 3 e default.

// 20. Crie um `if` que verifica se um ano é bissexto (divisível por 4, mas não por 100, exceto se divisível por 400).

// 21. Crie um `if/else` que verifica se uma string contém pelo menos 5 caracteres.

// 22. Crie uma variável `nota1` e `nota2` e use `if/else` para exibir se a média é maior ou igual a 7.

// 23. Crie um `switch` que exiba o tipo de triângulo com base em um número de 1 a 3 (1: Equilátero, 2: Isósceles, 3: Escaleno).

// 24. Crie um `if/else` que verifica se uma variável `senha` corresponde à senha correta.

// 25. Crie um `switch` que exiba a quantidade de dias do mês baseado em uma variável `mes` (1 a 12).

// 26. Crie um `if/else` que verifica se um número é múltiplo de 3, de 5, ou de ambos.

// 27. Crie um `switch` que retorna "Sim" para caso 1 e 2, "Não" para caso 3 e 4, e "Talvez" para outros.

// 28. Crie um `if` que verifica se uma variável `temperatura` está em uma faixa entre 18 e 25 graus.

// 29. Crie um `switch` que agrupe vários casos em uma mesma ação (por exemplo, cores quentes e frias).

// 30. Crie um `if/else` que combina duas condições (ex: idade >= 18 e isAdmin = true) para permitir ou negar acesso.
