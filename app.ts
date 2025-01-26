let score1 = 0;
let score2 = 0;

const score1Element = document.getElementById('score1')!;
const score2Element = document.getElementById('score2')!;
const resetButton = document.getElementById('resetButton')!;

document.getElementById('team1')!.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('increment')) {
        score1++;
    } else if (target.classList.contains('decrement')) {
        score1--;
    }
    score1Element.textContent = score1.toString();
});

document.getElementById('team2')!.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('increment')) {
        score2++;
    } else if (target.classList.contains('decrement')) {
        score2--;
    }
    score2Element.textContent = score2.toString();
});

resetButton.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    score1Element.textContent = score1.toString();
    score2Element.textContent = score2.toString();
});