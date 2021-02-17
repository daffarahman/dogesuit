function runGame() {
    let running = true;
    while (running) {
        let choices = ["rock", "paper", "scissor"];
        let player = prompt("Choose beetwen (rock, paper, scissor)")
            .toLowerCase()
            .trim();

        let comp = Math.random();
        comp =
            comp < 0.36
                ? "rock"
                : comp >= 0.36 && comp < 0.66
                ? "paper"
                : "scissor";

        let draw = false;
        let win = false;
        if (player == comp) draw = true;
        else if (player == "rock" && comp == "scissor") win = true;
        else if (player == "paper" && comp == "rock") win = true;
        else if (player == "scissor" && comp == "paper") win = true;

        let result = draw ? "No win" : win ? "You win!" : "You lose!";

        alert(result + `\n${player} vs ${comp}`);

        if (!confirm("Play again?")) running = false;
    }
}
