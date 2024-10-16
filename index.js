let victory = 10;
let defeat = 5;
let stopp = ""


function ranking(victory, defeat) {
    while (stopp === "") {
      if (victory < 10) {
        return console.log("Ferro");
      } else if (victory >= 11 && victory <= 20) {
        return console.log("Bronze");
      } else if (victory >= 21 && victory <= 50) {
        return console.log("Prata");
      } else if (victory >= 51 && victory <= 80) {
        return console.log("Ouro");
      } else if (victory >= 81 && victory <= 90) {
        return console.log("Diamante");
      } else if (victory >= 91 && victory <= 100) {
        return console.log("Lendário");
      } else if (victory >= 101) {
        return console.log("Imortal");
      }
  }
}

ranking(victory, defeat);





