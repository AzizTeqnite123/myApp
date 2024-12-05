AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll('.read-more-rev'); // Select all "Read more" buttons

    // Loop over each "Read more" button
    readMoreButtons.forEach(button => {
        const textElement = button.previousElementSibling; // Get the corresponding text element (assuming the button is after the text)
        const fullText = textElement.innerText;  // Get the full text from the paragraph, preserving any special characters

        // Split the text into words and limit it to 15 words
        const words = fullText.split(' ');
        const initialText = words.slice(0, 15).join(' ') + '...'; // Show only 15 words initially

        // Set the initial truncated text
        textElement.textContent = initialText;

        // When the "Read more" button is clicked, toggle between full text and truncated text
        button.addEventListener('click', function () {
            if (textElement.textContent !== fullText) {
                textElement.textContent = fullText;
                button.textContent = 'Read less'; // Change button text to "Read less"
            } else {
                textElement.textContent = initialText;
                button.textContent = 'Read more'; // Reset to show "Read more"
            }
        });
    });
});
