
function getXPForLevel(level) {
    let points = 0;
    for (let i = 1; i < level; i++) {
        points += Math.floor(i + 300 * Math.pow(2, i / 7));
    }
    return Math.floor(points / 4);
}

const table = [];
for (let i = 0; i <= 99; i++) {
    table.push(getXPForLevel(i));
}
console.log(JSON.stringify(table));
