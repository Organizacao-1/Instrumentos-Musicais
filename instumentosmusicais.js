// Instrumentos-Musicais
//agora vai


console.log("Você toca algum instrumento musical?");
let resposta;
let instrumento;
process.stdin.on("data", function (data) {
  let entrada = data.toString().trim().toLowerCase();
  if (!resposta) {
    resposta = entrada;
    if (resposta == "sim" || resposta == "s") {
      console.log("Que ótimo");
      console.log(
        "Caso toque algum instrumento, digite o nome do mesmo, caso não toque, digite não, nao ou n"
      );
    } else if (resposta == "n" || resposta == "nao" || resposta == "não") {
      console.log("Que pena!");
      process.exit();
    } else {
      console.log("Escreva uma resposta válida: sim(s) ou não(n)");
      resposta = undefined;
    }
  } else if (!instrumento) {
    instrumento = entrada;
    switch (instrumento) {
      case "violao":
      case "violão":
        console.log("Adoro violão. Toca alguma música diferente para mim?");
        console.log("Toca algum outro instrumento?");
        instrumento = undefined;
        break;
      case "violino":
        console.log("Que chique!");
        console.log("Toca algum outro instrumento?");
        instrumento = undefined;
        break;
      case "pandeiro":
        console.log("Aposto que gosta de um pagodinho");
        console.log("Toca algum outro instrumento?");
        instrumento = undefined;
        break;
      case "n":
      case "não":
      case "nao":
        console.log("Que pena");
        process.exit();
        break;
      default:
        console.log("Não conheço esse instrumento");
        console.log("Toca algum outro instrumento?");
        instrumento = undefined;
        break;
    }
  }
});