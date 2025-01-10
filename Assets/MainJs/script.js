AOS.init();

Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
        showOnStart: false,
    },
});

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

function faqsAccordion() {
    const accordionSections = document.querySelectorAll(".faq__accordion");

    accordionSections.forEach(section => {
        const accordionItemHeaders = section.querySelectorAll(".accordion-item-header");

        if (accordionItemHeaders.length > 0) {
            const firstAccordionItemHeader = accordionItemHeaders[0];
            const firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

            firstAccordionItemHeader.classList.add("active");
            firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
        }

        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event => {
                const accordionItemBody = accordionItemHeader.nextElementSibling;

                accordionItemHeaders.forEach(item => {
                    if (item !== accordionItemHeader) {
                        item.classList.remove("active");
                        item.nextElementSibling.style.maxHeight = 0;
                    }
                });

                accordionItemHeader.classList.toggle("active");

                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    });
}

faqsAccordion();


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
                popup.style.transform = "scale(1)";
            }, 10);
        } else {
            overlay.style.opacity = "0";
            popup.style.opacity = "0";
            popup.style.transform = "scale(0.5)";

            setTimeout(() => {
                overlay.style.display = "none";
                popup.style.display = "none";
            }, 300);
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const discountButton = document.getElementById("discountButton");
        const closePopup = document.getElementById("closePopup");
        const closepopbtn = document.getElementById("closepopbtn");

        discountButton.addEventListener("click", togglePopupDiscount);

        closePopup.addEventListener("click", togglePopupDiscount);

        closepopbtn.addEventListener("click", togglePopupDiscount);

        setTimeout(togglePopupDiscount, 3000);
    });

}
discountPopUpPercentage()

