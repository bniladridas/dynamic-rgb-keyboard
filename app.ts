// Create a dynamic keyboard interface in TypeScript with RGB styling

// Create main container
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.marginTop = '20px';
container.style.fontFamily = 'Arial, sans-serif';
container.style.width = '100%'; // Ensure container fits screen width
container.style.boxSizing = 'border-box'; // Include padding and border in the element's total width and height

document.body.appendChild(container);

// Add a display area for key presses
const display = document.createElement('div');
display.style.width = '90%'; // Adjust width for better fit on mobile
display.style.height = '50px';
display.style.marginBottom = '20px';
display.style.backgroundColor = '#000';
display.style.color = '#fff';
display.style.display = 'flex';
display.style.alignItems = 'center';
display.style.justifyContent = 'center';
display.style.fontSize = '20px';
display.style.border = '1px solid #333';
display.style.borderRadius = '5px';
container.appendChild(display);

// Add keyboard container
const keyboard = document.createElement('div');
keyboard.id = 'keyboard'; // Add ID for media query
keyboard.style.display = 'grid';
keyboard.style.gridTemplateColumns = 'repeat(auto-fit, minmax(30px, 1fr))'; // Responsive grid layout
keyboard.style.gap = '5px';
keyboard.style.padding = '10px';
keyboard.style.width = '100%'; // Ensure keyboard fits screen width
keyboard.style.maxWidth = '800px';
keyboard.style.backgroundColor = '#111';
keyboard.style.borderRadius = '10px';
keyboard.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
container.appendChild(keyboard);

// Define keyboard keys
const keys = [
    'Esc', '', '', '', '', '', '', '', '', '', '', '',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Fn', 'Ctrl'
];

// Generate keys
keys.forEach((key, index) => {
    const keyElement = document.createElement('button');
    keyElement.textContent = key;
    keyElement.style.padding = '10px'; // Adjust padding for better fit on mobile
    keyElement.style.fontSize = '12px'; // Adjust font size for better fit on mobile
    keyElement.style.borderRadius = '5px';
    keyElement.style.border = '1px solid #333';
    keyElement.style.color = '#fff';
    keyElement.style.backgroundColor = '#111';
    keyElement.style.textAlign = 'center';
    keyElement.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.5)';

    // RGB background styling
    const colors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff80', '#00ffff', '#0080ff', '#8000ff', '#ff0080'];
    const color = colors[index % colors.length];
    keyElement.style.backgroundImage = `linear-gradient(135deg, ${color}, #111)`;

    // Add click and keyboard functionality
    keyElement.addEventListener('click', () => {
        display.textContent = `Key pressed: ${key}`;
    });

    document.addEventListener('keydown', (event) => {
        if (event.key.toUpperCase() === key.toUpperCase() || (event.key === ' ' && key === 'Space')) {
            keyElement.style.boxShadow = '0 0 10px rgba(255, 255, 255, 1)';
            display.textContent = `Key pressed: ${key}`;
            setTimeout(() => keyElement.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.5)', 200);
        }
    });

    // Layout adjustments
    if (key === '') {
        keyElement.style.visibility = 'hidden';
    }

    if (key === 'Space') {
        keyElement.style.gridColumn = 'span 6';
    }

    keyboard.appendChild(keyElement);
});

// Add media query for portrait mode on mobile
const style = document.createElement('style');
style.textContent = `
@media (max-width: 600px) {
    #keyboard {
        grid-template-columns: repeat(3, 1fr); // Adjust columns for portrait mode
    }
}
`;
document.head.appendChild(style);
