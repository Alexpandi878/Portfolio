document.addEventListener('DOMContentLoaded', function() {
    const contentElements = document.querySelectorAll('.headings'); // Corrected querySelector selector

    const colors = ['#FF5733', '#07AE98', '#3d85C6', '#F33FF']; // Removed an empty string from the array

    function changeBackgroundColor(element) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.backgroundColor = randomColor;
    }

    // Change the background color for each section every 2 seconds (2000 milliseconds)
    contentElements.forEach((element, index) => {
        setInterval(() => changeBackgroundColor(element), 2000 * (index + 1));
    });
});
