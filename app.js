// Function to handle button click and toggle visibility of elements
function setupToggle(buttonId, elementId) {
    var button = document.querySelector("#".concat(buttonId));
    var element = document.querySelector("#".concat(elementId));
    if (button && element) {
        button.addEventListener('click', function () {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                button.innerHTML = 'Less';
            }
            else {
                element.style.display = 'none';
                button.innerHTML = 'More';
            }
        });
    }
}
// Initialize toggles for each section
setupToggle('objBtn', 'obj');
setupToggle('EduBtn', 'edu');
setupToggle('expBtn', 'exp');
setupToggle('skillBtn', 'skills');
setupToggle('infoBtn', 'info');
