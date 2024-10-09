document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active'); // Toggle-Klasse hinzufügen oder entfernen
    });
});
