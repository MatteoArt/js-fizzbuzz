//bonus: recupero div container dove 'appenderò' i div contenenti i valori da mostrare
const container = document.querySelector(".container");
let spanClass = "caption";

//imposto il ciclo che andrà a stampare le varie stringhe

for (let i = 1; i <= 100; i++) {
    let box = document.createElement("div"); //creo ad ogni iterazione un div da "inserire" nel div padre
    box.classList.add("square");
    //console.log(box);

    if ((i % 3 === 0)  || (i % 5 === 0)) { //se il numero è divisibile per 3 o per 5
        let output = "";
        if (i % 3 === 0) { //se divisibile per 3 --> Fizz
            output = output + "Fizz";
        }
        if (i % 5 === 0) { //se divisibile per 5 --> Buzz
            output = output + "Buzz";
        }

        // se è divisibile per entrambi passa per tutti e due i rami if ed effettua concatenazione
        box.innerHTML = `<span class='${spanClass}'>${output}</span>`;

        //bonus: in base alla stringa 'output' do uno stile diverso
        if (output === "Fizz") {
            box.classList.add("fizz");
        } else if (output === "Buzz") {
            box.classList.add("buzz");
        } else if (output === "FizzBuzz") {
            box.classList.add("fizz-buzz");
        }
    } else {
        box.innerHTML = `<span class='${spanClass}'>${i}</span>`;
        box.classList.add("number"); //bonus: aggiungo classe number
    }

    container.append(box); //aggiungo elem creato a container
}
