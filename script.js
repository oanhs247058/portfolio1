// Thay đổi màu header khi scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (!header) return;
    
    const currentScroll = window.scrollY;
    if (currentScroll > 50 && currentScroll > lastScroll) {
        header.classList.add('scrolled');
    } else if (currentScroll < 50) {
        header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});
//greeting
const text = "おはようございます、オアンと申します。";
const emoji = "🌸";
let i = 0;

function typeEffect() {
  const greeting = document.getElementById("greeting");
  if (i < text.length) {
    greeting.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  } else {
    // Sau khi gõ xong chữ, thêm emoji bằng hiệu ứng mờ dần hiện ra
    const flower = document.createElement("span");
    flower.textContent = emoji;
    flower.style.opacity = 0;
    flower.style.transition = "opacity 0.8s";
    greeting.appendChild(flower);
    setTimeout(() => flower.style.opacity = 1, 300);
  }
}

window.addEventListener("load", typeEffect);


// Hiệu ứng gửi form
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
    e.preventDefault(); // chặn reload
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert('🌸 メッセージを送信しました！ありがとうございます。');
            form.reset();
        } else {
            alert('送信中にエラーが発生しました。もう一度お試しください。');
        }
    });
});


