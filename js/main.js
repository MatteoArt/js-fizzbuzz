
//imposto il ciclo che andrà a stampare le varie stringhe

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0)  || (i % 5 === 0)) { //se il numero è divisibile per 3 o per 5
        let output = "";
        if (i % 3 === 0) { //se divisibile per 3 --> Fizz
            output = output + "Fizz";
        }
        if (i % 5 === 0) { //se divisibile per 5 --> Buzz
            output = output + "Buzz";
        }
        // se è divisibile per entrambi passa per tutti e due i rami if ed effettua concatenazione
        console.log(output);
    } else {
        console.log(i);
    }
}