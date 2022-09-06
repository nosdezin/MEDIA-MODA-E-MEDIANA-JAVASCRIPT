const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const messagem = "Digite sair para concluir\nDigite um número: ";
let concluido = false;
const lista = [];

const media = (lista) => {
  let soma = 0;
  lista.forEach((e) => {
    soma += e;
  });
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

  return modaSemDuplicata;
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

const input = () => {
  if (!concluido) {
    rl.question(messagem, (resp) => {
      if (resp == "sair") {
        concluido = true;
        input();
      } else {
        lista.push(Number(resp));
        input();
      }
    });
  } else {
    rl.close();
    console.log(
      `Lista: ${lista}\nMédia: ${media(lista)}\nModa: ${moda(
        lista
      )}\nMediana: ${mediana(lista)}`
    );
  }
};

input();
