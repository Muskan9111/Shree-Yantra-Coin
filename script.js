document.addEventListener("DOMContentLoaded", function() {
    // Saare questions ko select kiya
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Is question ke parent (.faq-item) ko dhoonda
            const faqItem = this.parentElement;
            
            // Active class ko toggle (add/remove) kiya
            faqItem.classList.toggle('active');
        });
    });
});