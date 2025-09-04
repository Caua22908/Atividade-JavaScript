 /*
===========================================================
Exercícios Práticos - Laços de Repetição (for, while, do...while, forEach)
===========================================================
*/

// ---------- FOR ----------

// 1. Use um for para exibir os números de 1 a 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use um for para exibir apenas os números pares de 0 a 20.

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 3. Crie um for que exiba a tabuada do 5 (de 1 até 10).

for (let i = 1; i <= 10; i++) {
  console.log(5 x ${i} = ${5 * i});
}

// 4. Use um for para somar todos os números de 1 a 100 e exiba o resultado.

let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(A soma de 1 a 100 é: ${soma}…
[21:42, 03/09/2025] +55 61 8203-1781: /*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.

const meuArray = [1, 2, 3, 4, 5];
console.log(meuArray[2]);


// 2. Adicione um elemento ao final do array.

const meuArray2 = [1, 2, 3, 4, 5];
meuArray.push(6);
console.log(meuArray);


// 3. Remova o primeiro elemento do array.

const meuArray3 = [1, 2, 3, 4, 5];
meuArray.shift();
console.log(meuArray);

// 4. Use map para transformar todos os elementos em strings maiúsculas.

const meuArray4 = ['maçã', 'banana', 'laranja'];
const arrayMaiusculas = meuArray.map(item => item.toUpperCase());
console.log(arrayMaiusculas);

// 5. Use filter para criar um novo array apenas com números pares.

const meuArray5 = [1, 2, 3, 4, 5, 6];
const numerosPares = meuArray.filter(num => num % 2 === 0);
console.log(numerosPares);

// 6. Use reduce para somar todos os números de um array.

const meuArray6 = [1, 2, 3, 4, 5];
const soma = meuArray6.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);


// 7. Use find para encontrar o primeiro elemento maior que 10.

const meuArray7 = [5, 8, 12, 19, 3];
const primeiroMaiorQue10 = meuArray7.find(num => num > 10);
console.log(primeiroMaiorQue10);

// 8. Ordene um array de números em ordem crescente.

const meuArray8 = [5, 2, 9, 1, 5, 6];
meuArray8.sort((a, b) => a - b);
console.log(meuArray8);

// 9. Inverta a ordem dos elementos de um array.

const meuArray9 = [1, 2, 3, 4, 5];
meuArray9.reverse();
console.log(meuArray9);

// 10. Faça a troca de valores entre dois índices usando destructuring.

const meuArray10 = [10, 20, 30, 40, 50];
let index1 = 1; 
let index2 = 3; 
[meuArray10[index1], meuArray10[index2]] = [meuArray10[index2], meuArray10[index1]];
console.log(meuArray10);