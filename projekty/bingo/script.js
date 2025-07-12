let words = [];
let n = 0;


function generuj(){
    n = document.getElementById("bingoSize").value;
    let values = document.getElementById("bingoValues").value;
    const bingoTitle = document.getElementById("bingoTitle");

    if(n > 6){
        bingoTitle.innerHTML = "Tablica zbyt duża, podaj mniejszy rozmiar.";
    }else{
        bingoTitle.innerHTML = "";
        words = values.split(",").map(str => str.trim())
        generateBingo();
    }
}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateBingo() {
    const shuffled = shuffle([...words]);
    const board = document.getElementById("bingo-board");
    board.innerHTML = "";

    const table = document.createElement("table");

    for (let i = 0; i < n; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < n; j++) {
        const cell = document.createElement("td");
        cell.textContent = shuffled[i * n + j];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    board.appendChild(table);
}