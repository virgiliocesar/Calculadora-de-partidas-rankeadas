let victory = 40;
let defeat = 10;
let stopp = "";

function ranking(victory, defeat) {
  const winningBalance = victory - defeat;

  //   while (stopp === "") {
  let nivel;
  if (victory < 10) {
    nivel = "Ferro";
  } else if (victory >= 11 && victory <= 20) {
    nivel = "Bronze";
  } else if (victory >= 21 && victory <= 50) {
    nivel = "Prata";
  } else if (victory >= 51 && victory <= 80) {
    nivel = "Ouro";
  } else if (victory >= 81 && victory <= 90) {
    nivel = "Diamante";
  } else if (victory >= 91 && victory <= 100) {
    nivel = "Lendário";
  } else if (victory >= 101) {
    nivel = "Imortal";
  }
  return console.log(`Imortal ${winningBalance} está no nivel de ${nivel}`);
}
// }

ranking(victory, defeat);