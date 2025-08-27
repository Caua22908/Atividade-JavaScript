// 1. Declare duas variáveis numéricas e exiba a soma usando o operador `+`.
    let a = 10, b = 5;
console.log(a + b); 

// 2. Declare duas variáveis numéricas e exiba a subtração usando o operador `-`.
    let c = 20, d = 8;
console.log(c - d); 

// 3. Declare duas variáveis numéricas e exiba a multiplicação usando o operador `*`.
    let e = 4, f = 3;
console.log(e * f); 

// 4. Declare duas variáveis numéricas e exiba a divisão usando o operador `/`.
    let g = 20, h = 4;
console.log(g / h); 

// 5. Declare duas variáveis numéricas e exiba o resto da divisão usando `%`.
    let i = 25, j = 7;
console.log(i % j); 

// 6. Use o operador de exponenciação `**` para calcular 2 elevado a 5.
    console.log(2 ** 5); 

// 7. Crie uma variável e use o operador `+=` para somar um valor a ela.
    let k = 10;
k += 5; // k = k + 5
console.log(k); 

// 8. Crie uma variável e use o operador `-=` para subtrair um valor dela.
    let l = 20;
l -= 5; // l = l - 5
console.log(l); 

// 9. Crie uma variável e use o operador `*=` para multiplicar seu valor por outro.
    let m = 4;
m *= 3; // m = m * 3
console.log(m); 

// 10. Crie uma variável e use o operador `/=` para dividir seu valor por outro.
    let n = 16;
n /= 4; // n = n / 4
console.log(n);

// 11. Declare duas variáveis e use o operador `==` para comparar seus valores.
    let o = 10, p = '10';
console.log(o == p); 

// 12. Declare duas variáveis e use o operador `===` para comparar valor e tipo.
    let q = 10, r = '10';
console.log(q === r); 
// 13. Declare duas variáveis e use o operador `!=` para verificar se são diferentes (valores).
    let s = 5, t = 3;
console.log(s != t); 

// 14. Declare duas variáveis e use o operador `!==` para verificar se são diferentes (valor e tipo).
    let u = 5, v = '5';
console.log(u !== v);

// 15. Compare se uma variável é maior que outra usando `>`.
    let w = 8, x = 6;
console.log(w > x); 

// 16. Compare se uma variável é menor que outra usando `<`.
    let y = 3, z = 7;
console.log(y < z); 

// 17. Compare se uma variável é maior ou igual a outra usando `>=`.
    let a1 = 10, b1 = 5;
console.log(a1 >= b1); 

// 18. Compare se uma variável é menor ou igual a outra usando `<=`.
    let a2 = 10, b2 = 15;
console.log(a2 <= b2); 

// 19. Crie uma expressão com `&&` que só retorne verdadeiro se duas condições forem verdadeiras.
    let cond1 = true, cond2 = true;
console.log(cond1 && cond2); 

// 20. Crie uma expressão com `||` que retorne verdadeiro se pelo menos uma condição for verdadeira.
    let cond3 = false, cond4 = true;
console.log(cond3 || cond4); 

// 21. Use o operador `!` para inverter o valor booleano de uma variável.
    let isTrue = true;
console.log(!isTrue);

// 22. Use o operador ternário `condicao ? valor1 : valor2` para verificar se um número é par ou ímpar.
    let num = 7;
console.log(num % 2 === 0 ? 'Par' : 'Ímpar'); 

// 23. Use o operador `typeof` para verificar o tipo de uma variável string.
    let str = "Olá, Mundo!";
console.log(typeof str); 

// 24. Use o operador `typeof` para verificar o tipo de uma variável número.
    let num1 = 42;
console.log(typeof num1);

// 25. Use o operador `typeof` para verificar o tipo de uma variável booleana.
    let isValid = true;
console.log(typeof isValid);

// 26. Crie um objeto e use o operador `delete` para remover uma de suas propriedades.
    let person = { name: 'John', age: 30 };
delete person.age;
console.log(person); 

// 27. Use o operador `in` para verificar se uma propriedade existe em um objeto.
    let car = { make: 'Toyota', model: 'Corolla' };
console.log('make' in car); 
console.log('year' in car); 

// 28. Use o operador `instanceof` para verificar se um objeto é instância de uma função construtora.
    let date = new Date();
console.log(date instanceof Date); 

// 29. Crie uma operação com `??` para definir um valor padrão caso a variável seja `null` ou `undefined`.
    let value = null;
console.log(value ?? 'Valor padrão'); 

// 30. Combine operadores aritméticos, lógicos e de comparação em uma expressão complexa e exiba o resultado.
    let a3 = 10, b3 = 5, c3 = 2;
let result = (a3 + b3 > 10 && c3 !== 0) || (a3 - b3 < 5);
console.log(result); 