function getNumberFact() {
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(fact -> {
        document.getElementbyId('factDisplay').textContent = fact;
    })
    .catch(error -> {
        document.getElementbyId('factDisplay').textContent = "Error fetching fact.";
    });
}