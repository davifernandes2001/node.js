const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout
});

readline.question('Qual o seu carro favorito?',(carro) => {
    if(carro === "ecoesporte") {
        console.log("BOA ESCOLHA!")
    } else {
        console.log(`O meu carro favotiro é: ${carro}`);
    }
  readline.close(); 

});