const sortear=() => { 
    let nomes = ["ROBESVALDO 👍","PINK FLOID🎸","MACARENA💃🏻","MICHAEL JACKSON🕴","WINKS 🧚‍♀️","PATRULHA CANINA 🐶","BARBIE👸","KEN 👱🏻‍♂️","MONSTER HIGH 🧟‍♀️"];
    
    let h1Nome = document.getElementById("nome");
    
    let achouNumero = false;
    let numeroSorteado;
    
    while(achouNumero == false) {
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }

    switch (numeroSorteado) {
     case 0:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 1:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 2:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 3:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 4:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 5:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 6:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 7:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
    case 8:
        h1Nome.innerText = nomes[numeroSorteado];
        break;
        default:
        }
}
