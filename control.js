// ---------------- page underlines ------------------------ //
const pages = document.querySelector('.pages')
const pageItems = document.querySelectorAll(".pages li");
const underline = document.querySelector(".page-underline");

// underlines page item in nav bar 
function pageUnderline(item) {
    underline.style.display = "block";
    const itemRect = item.getBoundingClientRect();
    const navRect = item.closest('nav').getBoundingClientRect();
    
    underline.style.left = `${itemRect.left - navRect.left}px`;
    underline.style.width = `${itemRect.width}px`;

}

// looping through each page in the nav bar and adding an event listener 
pageItems.forEach (item => {
    item.addEventListener('mouseenter', () => {
        pageUnderline(item);
    });
});

// listening for mouseleave and repositioning the underline to the active page
pages.addEventListener('mouseleave', () => {
    underline.style.display = "none";
})

const field = document.querySelector('.stars');
const count = window.innerWidth < 900 ? 50 : 100 // 40 or 80 stars depending on window size
// less stars for mobile to improve performence


// ---------------- stars ------------------------ //
for (let i = 0; i < count; i++) {
    const s = document.createElement('span');

    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.setProperty('--star-scale', (2 + Math.random() * 4) + 'px');

    if (Math.random() < 0.33) {
        s.classList.add('twinkle');
        s.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        s.style.animationDelay = (-Math.random() * 6) + 's';
    }

    field.appendChild(s);
}

// ---------------- dialogs ------------------------ //
document.querySelectorAll('[data-dialog]').forEach(card => {
    const dialog = document.getElementById(card.dataset.dialog);
    card.addEventListener('click', () => dialog.showModal());
})

document.querySelectorAll('.dialog').forEach(dialog => {
    dialog.querySelector('.close').addEventListener('click', () => dialog.close());
})