const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const content = btn.nextElementSibling;

if(content.style.display==="block"){
content.style.display="none";
}
else{
content.style.display="block";
}

});

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});