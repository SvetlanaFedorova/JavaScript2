const field = document.querySelector('#field');
let isBlack = true;

for (let y = 0; y < 8; y++) {
    isBlack = (y % 2 === 1) ? false : true;
    for (let x = 0; x < 8; x++) {
        const col = document.createElement('div');

        col.classList.add('col');
        col.classList.add(isBlack ? 'b' : 'w');

        isBlack = !isBlack;

        field.appendChild(col);

    }
}