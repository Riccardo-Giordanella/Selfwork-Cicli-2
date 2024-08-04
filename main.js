let risultato;


for(i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);

    }
}

let somma = 0;

for(i = 0; i <= 20; i++){
    if(i % 2 == 1){
        somma = somma + i
    }
}
console.log(`La media dei numeri dispari è: ${somma / 10}`);
