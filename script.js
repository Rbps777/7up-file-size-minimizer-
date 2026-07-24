// 7up Button Click Handler
const button = document.querySelector('.cta-button');

button.addEventListener('click', function(e) {
    console.log('7up button clicked! Redirecting to 7-Zip...');
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
});

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.innerHTML = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log initialization
console.log('7up File Size Minimizer loaded successfully!');
console.log('Click the button to download 7-Zip compression tool');
