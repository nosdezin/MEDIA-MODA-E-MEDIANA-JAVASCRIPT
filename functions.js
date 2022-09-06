const exemplo = [9,10,9,7];

const media = (lista) => {
  let soma = 0;
  lista.forEach((e) => (soma += e));
  const media = soma / lista.length;
  return media;
};

const moda = (lista) => {
  const repetido = lista.filter((elemento, i) => {
    if (lista.indexOf(elemento) !== i) {
      return elemento;
    }
  });

  const modaArray = repetido.sort((a, b) => {
    return a - b;
  });

  const modaSemDuplicata = modaArray.filter((elemento, i) => {
    if (modaArray.indexOf(elemento) !== i) {
      modaArray.push(elemento);
    }
    return modaArray.indexOf(elemento) == i;
  });

  return modaSemDuplicata
};

const mediana = (lista) => {
  const listaOrganizada = lista.sort((a, b) => {
    return a - b;
  });

  if (lista.length % 2 == 0) {
    const metade = listaOrganizada.length / 2;
    const valor1 = listaOrganizada[metade];
    const valor2 = listaOrganizada[metade - 1];
    const medianaValor = (valor1 + valor2) / 2;

    return medianaValor;
  } else {
    const metade = (listaOrganizada.length - 1) / 2;
    const medianaValor = listaOrganizada[metade];

    return medianaValor;
  }
};

// listinha.forEach(element => {
//     console.log(`Lista: ${element}\nMédia: ${media(element)}\nModa: ${moda(element)}\nMediana: ${mediana(element)}\n`);
// });

console.log(`Lista: ${exemplo}\nMédia: ${media(exemplo)}\nModa: ${moda(exemplo)}\nMediana: ${mediana(exemplo)}`);
