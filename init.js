setInterval(() => {
    let score = document.getElementById('score-board').textContent;
    document.getElementById('score-board').textContent = parseInt(score) + 1 + "초";
}, 1000);