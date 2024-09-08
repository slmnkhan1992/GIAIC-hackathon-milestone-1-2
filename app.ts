// Function to handle button click and toggle visibility of elements
function setupToggle(buttonId: string, elementId: string) {
    const button = document.querySelector(`#${buttonId}`) as HTMLButtonElement;
    const element = document.querySelector(`#${elementId}`) as HTMLElement;

    if (button && element) {
        button.addEventListener('click', () => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                button.innerHTML = 'Less';
            } else {
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
