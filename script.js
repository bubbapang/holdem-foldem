let foldCount = 0;
let betCallCount = 0;

document.getElementById('fold').addEventListener('click', () => {
    foldCount++;
    updateDisplay();
});

document.getElementById('betCall').addEventListener('click', () => {
    betCallCount++;
    updateDisplay();
});

document.getElementById('undoFold').addEventListener('click', () => {
    if (foldCount > 0) foldCount--;
    updateDisplay();
});

document.getElementById('undoBetCall').addEventListener('click', () => {
    if (betCallCount > 0) betCallCount--;
    updateDisplay();
});

document.getElementById('reset').addEventListener('click', () => {
    foldCount = 0;
    betCallCount = 0;
    updateDisplay();
});

function updateDisplay() {
    let total = foldCount + betCallCount;
    // round total to hundredth place
    let ratio = total === 0 ? 0 : Math.round(foldCount / total * 100) / 100;

    document.getElementById('foldAmount').innerText = `Fold Amount: ${foldCount}`;
    document.getElementById('betCallAmount').innerText = `Hold Amount: ${betCallCount}`;
    document.getElementById('ratioDisplay').innerText = `Folding percentage: ${ratio * 100}%`;
    document.getElementById('suggestionDisplay').innerText = `Suggestion: ${getSuggestion(ratio)}`;
}

function getSuggestion(ratio) {
    if (ratio > 0.67) return "Consider holding more";
    else if (ratio < 0.67) return "Consider folding more";
    return "Balanced... your call";
}