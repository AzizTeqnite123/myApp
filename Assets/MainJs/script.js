AOS.init();

function readMorerev() {
    document.addEventListener("DOMContentLoaded", function () {
        const readMoreButtons = document.querySelectorAll('.read-more-rev');

        readMoreButtons.forEach(button => {
            const textElement = button.previousElementSibling;
            const fullText = textElement.innerText;

            const words = fullText.split(' ');
            const initialText = words.slice(0, 15).join(' ') + '...';

            textElement.textContent = initialText;

            button.addEventListener('click', function () {
                if (textElement.textContent !== fullText) {
                    textElement.textContent = fullText;
                    button.textContent = 'Read less';
                } else {
                    textElement.textContent = initialText;
                    button.textContent = 'Read more';
                }
            });
        });
    });
}
readMorerev()

function discountPopUpPercentage() {
    const togglePopupDiscount = () => {
        const popup = document.getElementById("discountPopupSidefixed");
        const overlay = document.getElementById("overlay-pop-up-discount");

        if (popup.style.display === "none" || popup.style.display === "") {
            popup.style.display = "block";
            overlay.style.display = "block";

            setTimeout(() => {
                overlay.style.opacity = "1";
                popup.style.opacity = "1";
                popup.style.transform = "translate(-50%, -50%) scale(1)";
            }, 10);
        } else {
            overlay.style.opacity = "0";
            popup.style.opacity = "0";
            popup.style.transform = "translate(-50%, -50%) scale(0.5)";

            setTimeout(() => {
                overlay.style.display = "none";
                popup.style.display = "none";
            }, 300);
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const discountButton = document.getElementById("discountButton");
        const closePopup = document.getElementById("closePopup");

        discountButton.addEventListener("click", togglePopupDiscount);

        closePopup.addEventListener("click", togglePopupDiscount);

        setTimeout(togglePopupDiscount, 3000);
    });

}
discountPopUpPercentage()