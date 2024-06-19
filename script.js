let currentDegree = 0;

function flipCoin() {
    const coin = document.getElementById('coin');
    const isHeads = Math.random() < 0.5; // Randomly determine if it's heads or tails
    const fullRotations = 5; // Number of full rotations per flip
    const baseDegree = 180; // Degree for heads or tails

    // Update the current degree by adding full rotations and the base degree for heads/tails
    currentDegree += fullRotations * 360 + (isHeads ? 0 : baseDegree);
    
    coin.style.transform = `rotateY(${currentDegree}deg)`;
}
