const input = document.querySelector(".playerSelection");
const output = document.querySelector(".result");

input.addEventListener("change", () => {
    const playerSelection = input.value
    output.textContent = playerSelection;
});