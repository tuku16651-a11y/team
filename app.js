/* =============================================
   TEAMANIA CAFE & LOUNGE — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994559406018';
const MENU_IMG = 'images/menu-item.jpg';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];

// ─── DATA ─────────────────────────────────────

const menuData = {
  fastfood: [
    {
      id: 'ff1',
      name: 'Toyuq Şaurma Seti',
      desc: 'Toyuq şaurma (2 ədəd), kartof fri (2 ədəd), kola (2 ədəd), ayran (2 ədəd) və ya Sandora (1 litr)',
      price: 18,
      weight: '2 ədəd şaurma',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'ff2',
      name: 'Sezar Rol Seti',
      desc: 'Sezar rol (2 ədəd), kartof fri (2 ədəd), kola (2 ədəd), ayran (2 ədəd) və ya Sandora (2 litr)',
      price: 18,
      weight: '2 ədəd rol',
      img: MENU_IMG
    },
    {
      id: 'ff3',
      name: 'Ət Burger Seti',
      desc: 'Ət burger (2 ədəd), kartof fri (2 ədəd), kola (2 ədəd), ayran (2 ədəd) və ya Sandora (1 litr)',
      price: 28,
      weight: '2 ədəd burger',
      img: MENU_IMG,
      badge: 'Premium'
    },
    {
      id: 'ff4',
      name: 'Ət Şaurma Seti',
      desc: 'Ət şaurma (2 ədəd), kartof fri (2 ədəd), kola (2 ədəd), ayran (2 ədəd) və ya Sandora (1 litr)',
      price: 22,
      weight: '2 ədəd şaurma',
      img: MENU_IMG
    },
    {
      id: 'ff5',
      name: 'Toyuq Burger Seti',
      desc: 'Toyuq burger (2 ədəd), kartof fri (2 ədəd), kola (2 ədəd), ayran (2 ədəd) və ya Sandora (1 litr)',
      price: 22,
      weight: '2 ədəd burger',
      img: MENU_IMG
    }
  ],
  teasets: [
    {
      id: 'ts1',
      name: 'Çay Seti — Mürəbbəli',
      desc: 'Çay, mürəbbə, rulet',
      price: 18,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts2',
      name: 'Çay Seti — Şokoladlı',
      desc: 'Çay, mürəbbə, şokolad',
      price: 18,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts3',
      name: 'Çay Seti — Südlü Paxlava',
      desc: 'Çay, südlü paxlava, şokolad',
      price: 19,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts4',
      name: 'Çay Seti — Türk Paxlavası',
      desc: 'Çay, türk paxlavası, mürəbbə',
      price: 19,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts5',
      name: 'Çay Seti — Lokumlu',
      desc: 'Çay, qaymaqlı lokum, şokolad, rulet',
      price: 23,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts6',
      name: 'Çay Seti — Mürəbbə-Rulet',
      desc: 'Çay, mürəbbə, şokolad, rulet',
      price: 23,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts7',
      name: 'Çay Seti — Lokum-Paxlava',
      desc: 'Çay, mürəbbə, rulet, qaymaqlı lokum, paxlava',
      price: 25,
      weight: '1 nəfərlik',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'ts8',
      name: 'Çay Seti — Quru Meyvəli',
      desc: 'Çay, quru meyvə assortisi, rulet',
      price: 25,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts9',
      name: 'Çay Seti — Oreo',
      desc: 'Çay, quru meyvə assortisi, Oreo',
      price: 27,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts10',
      name: 'Çay Seti — Şokoladlı-Meyvəli',
      desc: 'Çay, şokolad, quru meyvə assortisi',
      price: 27,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts11',
      name: 'Çay Seti — Ləbləbili',
      desc: 'Çay, mürəbbə, ləbləbi assortisi',
      price: 30,
      weight: '1 nəfərlik',
      img: MENU_IMG
    },
    {
      id: 'ts12',
      name: 'Çay Seti — Premium',
      desc: 'Çay, qaymaqlı lokum, şokolad, quru meyvə assortisi',
      price: 33,
      weight: '1 nəfərlik',
      img: MENU_IMG,
      badge: 'Premium'
    },
    {
      id: 'ts13',
      name: 'Çay Seti — Grand',
      desc: 'Çay, ləbləbi assortisi, quru meyvə assortisi',
      price: 34,
      weight: '1 nəfərlik',
      img: MENU_IMG
    }
  ]
};

const faqData = [
  {
    q: 'Rezervasiya necə edilir?',
    a: 'Rezervasiya üçün WhatsApp vasitəsilə bizimlə əlaqə saxlaya və ya saytdakı Rezervasiya formasından istifadə edə bilərsiniz. Masa saxlamaq tamamilə pulsuzdur.'
  },
  {
    q: 'Minimum sifariş məbləği nədir?',
    a: 'Minimum sifariş məbləği 10 AZN-dir.'
  },
  {
    q: 'Rezervasiya üçün depozit tələb olunurmu?',
    a: 'Xeyr, rezervasiya tamamilə pulsuzdur. Sadəcə gəlmədiyiniz halda xəbər verməyinizi rica edirik.'
  },
  {
    q: 'Allergenləri nəzərə alırsınızmı?',
    a: 'Bəli, biz allergen məlumatlarını çox ciddi qəbul edirik. Sifarişinizi verərkən xüsusi diet tələblərinizi qeyd edin.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı (Kapital Bank, ABB, PASHA Bank) və onlayn ödəniş sistemləri qəbul edilir.'
  },
  {
    q: 'Korporativ sifarişlər mümkündürmü?',
    a: 'Bəli! Şirkətlər, tədbirlər və böyük qruplar üçün xüsusi menyu və endirim proqramlarımız mövcuddur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Restoranın iş saatları necədir?',
    a: 'B.E – Cümə: 10:00–23:00 | Şənbə: 10:00–24:00 | Bazar: 11:00–23:00.'
  },
  {
    q: 'Instagram hesabınız varmı?',
    a: 'Bəli! Instagram-da @teamaniabaku olaraq bizi izləyə bilərsiniz.'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '☕',
    title: 'Barista',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə (2/2)',
    requirements: 'Ən az 1 il barista təcrübəsi, ünsiyyət bacarığı',
    desc: 'Teamania-ya peşəkar barista axtarırıq. Kreativlik, dəqiqlik və komanda ruhu vacibdir.',
    duties: 'Menyu içkilərinin hazırlanması, müştəri ilə ünsiyyət, kafeyi səliqəli saxlamaq'
  },
  {
    id: 'v2',
    icon: '🍽️',
    title: 'Ofisiant',
    type: 'Tam / Yarım Ştat',
    salary: '500 – 750 AZN + çay pulu',
    schedule: 'Çevik qrafik',
    requirements: 'Gülərüz, ünsiyyətcil, məsuliyyətli',
    desc: 'Müştərilərimizə ən yaxşı xidmət təqdim etmək üçün ofisiant axtarırıq.',
    duties: 'Sifarişlərin qəbulu, masa xidməti, müştəri məmnuniyyəti'
  },
  {
    id: 'v3',
    icon: '👩‍💼',
    title: 'Kassir / Operator',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Kompüter savadlılığı, ünsiyyət bacarığı, 18+ yaş',
    desc: 'Müştəri xidmətləri üzrə kassir/operator axtarırıq.',
    duties: 'Sifarişlərin qəbulu, ödəniş əməliyyatları, müştəri məmnuniyyəti'
  },
  {
    id: 'v4',
    icon: '🧹',
    title: 'Sanitar Texnik',
    type: 'Tam Ştat',
    salary: '500 – 650 AZN',
    schedule: 'Günlük, 09:00–18:00',
    requirements: 'Gigiyena standartları bilikləri, fiziki hazırlıq',
    desc: 'Kafe sahəsinin gigiyena standartlarına uyğun saxlanılması üçün işçi axtarırıq.',
    duties: 'Kafe sahəsinin təmizliyi, sanitariya standartlarına riayət'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }
  currentPage = pageId;
  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function findProduct(id) {
  for (const cat of Object.values(menuData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">${item.price * item.qty} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;
  let msg = '☕ *YENİ SİFARİŞ — Teamania Cafe & Lounge*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name}\n   ${item.qty} × ${item.price} AZN = ${item.qty * item.price} AZN\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *CƏMİ: ${total} AZN*\n\n`;
  msg += '📍 Ünvanınızı yazın.';
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── MENU RENDERING ───────────────────────────

function renderMenuGrids() {
  Object.entries(menuData).forEach(([cat, items]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      const badgeHtml = item.badge
        ? `<div class="menu-card-badge">${escHtml(item.badge)}</div>`
        : '';

      card.innerHTML = `
        <div class="menu-card-img">
          ${badgeHtml}
          <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${escHtml(item.name)}</div>
          <div class="menu-card-desc">${escHtml(item.desc)}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price} AZN</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(item));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
      grid.appendChild(card);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.menu-section').forEach(s => {
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price + ' AZN';
  document.getElementById('modalWeight').textContent = product.weight;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── FAQ RENDERING ────────────────────────────

function renderFaq() {
  const list = document.getElementById('faqList');
  faqData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${escHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${escHtml(item.a)}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    grid.appendChild(card);
  });
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;
  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;
  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Teamania Cafe & Lounge*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── RESERVATION ─────────────────────────────

function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('resName').value.trim();
  const phone  = document.getElementById('resPhone').value.trim();
  const date   = document.getElementById('resDate').value;
  const time   = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const note   = document.getElementById('resNote').value.trim();

  if (!name || !phone || !date || !time || !guests) {
    showToast('Zəhmət olmasa bütün məcburi xanaları doldurun!');
    return;
  }

  const formattedDate = formatDate(date);
  let msg = `📅 *REZERVASIYA — Teamania Cafe & Lounge*\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Ad, Soyad:* ${name}\n`;
  msg += `📞 *Telefon:* ${phone}\n`;
  msg += `📅 *Tarix:* ${formattedDate}\n`;
  msg += `⏰ *Saat:* ${time}\n`;
  msg += `👥 *Nəfər sayı:* ${guests}\n`;
  if (note) msg += `📝 *Qeyd:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── GALLERY LIGHTBOX ─────────────────────────

function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMenuGrids();
  renderFaq();
  renderVacancies();
  renderCart();

  const today = new Date().toISOString().split('T')[0];
  const resDate = document.getElementById('resDate');
  if (resDate) resDate.min = today;
});
