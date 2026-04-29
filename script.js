function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let diceImage = document.getElementById("dice");

    diceImage.src = "https://upload.wikimedia.org/wikipedia/commons/" +
        (randomNumber === 1 ? "1/1b/Dice-1-b.svg" :
        randomNumber === 2 ? "5/5f/Dice-2-b.svg" :
        randomNumber === 3 ? "b/b1/Dice-3-b.svg" :
        randomNumber === 4 ? "f/fd/Dice-4-b.svg" :
        randomNumber === 5 ? "0/08/Dice-5-b.svg" :
                             "2/26/Dice-6-b.svg");
}
