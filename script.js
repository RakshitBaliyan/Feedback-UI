// Get elements
const emojiDivs = document.querySelectorAll('.emojis div');
const submitBtn = document.getElementById('send-btn');
let selectedFeedback = '';

// Add click event to each emoji div
emojiDivs.forEach(emojiDiv => {
    emojiDiv.addEventListener('click', () => {
        // Remove the selected class from all emoji divs
        emojiDivs.forEach(div => div.classList.remove('selected'));

        // Add selected class to the clicked emoji div
        emojiDiv.classList.add('selected');

        // Store the selected feedback based on the class name
        if (emojiDiv.classList.contains('sad')) {
            selectedFeedback = 'Unhappy';
        } else if (emojiDiv.classList.contains('neutral')) {
            selectedFeedback = 'Neutral';
        } else if (emojiDiv.classList.contains('happy')) {
            selectedFeedback = 'Happy';
        }
    });
});

// Handle submit button click
submitBtn.addEventListener('click', () => {
    if (selectedFeedback) {
        // Change the content of the .main div
        const mainDiv = document.querySelector('.main');
        mainDiv.innerHTML = `
            <h1>Thank you !</h1>
            <p>Feedback :  ${selectedFeedback}</p>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
        mainDiv.style.textAlign = 'center';
        const paragraphs = mainDiv.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.fontSize = '1.5rem';
            p.style.fontWeight = '700';
            p.style.lineHeight = '1.5';
            p.style.padding = '10px';
            p.style.margin = '20px';
            p.style.color = 'rgb(0, 50, 0)';  // Example text color
        });
    } else {
        alert('Please select a feedback option before submitting.');
    }
});

