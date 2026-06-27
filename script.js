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
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;

            // Agar aap chahte hain ki ek khulne par doosra band ho jaye (Accordion effect):
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });

            // Current item ko toggle karein
            faqItem.classList.toggle("active");
        });
    });
});
// Sabhi questions ko select karein
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.onclick = function() {
        // Is question ke parent (.faq-item) ko dhoondein
        const item = this.parentElement;
        
        // Active class ko toggle karein
        item.classList.toggle('active');
        
        // CSS se check karne ke liye console mein print karein
        console.log("Clicked! Active class toggled.");
    };
});