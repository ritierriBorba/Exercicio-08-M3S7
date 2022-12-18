let birthYear = 2001;
let currentYear = 2022;

function solucaoWhile(birthYear, currentYear) {

    console.warn("Solução While");
    while (birthYear <= currentYear) {
        console.log(birthYear);
        birthYear++
    }
}

function solucaoDoWhile(birthYear, currentYear) {
    console.warn("Solução Do While");
    do {
        console.log(birthYear);
        birthYear++
    } while (birthYear <= currentYear)
}

solucaoWhile(birthYear, currentYear);

solucaoDoWhile(birthYear,currentYear);

