const toggleButton = document.getElementById('toggleTheme');
const menuToggle = document.getElementById('menuToggle');
const dropdownContent = document.getElementById('dropdownContent');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Cambiar el texto del botón
    if (document.body.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Cambiar a Tema Claro';
    } else {
        toggleButton.textContent = 'Cambiar a Tema Oscuro';
    }
});

// Función para seleccionar un elemento del menú
function selectMenuItem(button, page) {
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(btn => {
        btn.classList.remove('selected'); // Remover la clase de selección de todos los botones
    });
    button.classList.add('selected'); // Agregar la clase de selección al botón clicado

    // Redireccionar a la página correspondiente
    window.location.href = page;
}

// Manejar el clic en el menú
menuToggle.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});
