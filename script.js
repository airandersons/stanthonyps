// script.js

// ===== image data from the brief =====
const galleryItems = [
  { caption: "NURSERY AREA", icon: "fas fa-baby" },
  { caption: "PRIMARY CLASS ROOM BLOCK", icon: "fas fa-school" },
  { caption: "Nursery Pupils taking their breakfast", icon: "fas fa-utensils" },
  { caption: "Nursery Pupils warming for P.E Lesson", icon: "fas fa-futbol" },
  { caption: "School Choir Performing", icon: "fas fa-music" },
  { caption: "P.7 Pupils during blessing Mass", icon: "fas fa-church" },
  { caption: "Our School Brass Band", icon: "fas fa-trumpet" },
  { caption: "Study Tour at Nyero Rock Paintings", icon: "fas fa-mountain" },
  { caption: "Top Class Graduation", icon: "fas fa-graduation-cap" }
];

// ===== inject gallery cards =====
const galleryGrid = document.getElementById('galleryGrid');

if (galleryGrid) {
  galleryItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-card';

    // colorful placeholder with icon
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    // add both font-awesome icon and an emoji for fun
    placeholder.innerHTML = `<i class="${item.icon}"></i>`;

    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    captionDiv.textContent = item.caption;

    card.appendChild(placeholder);
    card.appendChild(captionDiv);
    galleryGrid.appendChild(card);
  });
}

// ===== interactive registration banner (click effect) =====
const regBanner = document.getElementById('regBanner');
if (regBanner) {
  regBanner.addEventListener('click', function() {
    this.style.backgroundColor = '#fe8c3a';
    this.style.borderColor = '#f9cf6b';
    setTimeout(() => {
      this.style.backgroundColor = ''; // revert to radial gradient
      this.style.borderColor = '#ffe26f';
    }, 200);
  });
}

// ===== extra: change icon colors on hover (playful) =====
document.querySelectorAll('.service-card, .gallery-card').forEach(card => {
  card.addEventListener('mouseenter', (e) => {
    const icon = card.querySelector('i');
    if (icon) icon.style.color = '#e67e22';
  });
  card.addEventListener('mouseleave', (e) => {
    const icon = card.querySelector('i');
    if (icon) icon.style.color = ''; // back to original
  });
});

// ===== console greeting (separate js behavior) =====
console.log('🌟 St. Anthony’s Mutungo — professional, colourful & caring. 🌟');
