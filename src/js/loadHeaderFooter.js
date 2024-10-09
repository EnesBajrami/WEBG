function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Diese Funktion ruft die Header- und Footer-Dateien auf
document.addEventListener('DOMContentLoaded', function () {
    loadHTML('header', '../header.html'); // Lädt header.html eine Ebene höher
    loadHTML('footer', '../footer.html'); // Lädt footer.html eine Ebene höher
});
