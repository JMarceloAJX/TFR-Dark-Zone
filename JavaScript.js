const contacts = [
  {
    id: "andre",
    name: "Andre",
    initials: "AN",
    role: "Operador de Asalto // PMC",
    color: "#f3a804",
    photo: "Contactos/Andre.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Casco Antibalas KSS3", price: "7,200 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/AN-PVS-14_Monocular_Night_Vision_Device.jpg/800px-AN-PVS-14_Monocular_Night_Vision_Device.jpg" }],
    nodes: {
      n1: { text: "Preparando equipo para la siguiente incursión.", choices: [{ label: "Buena suerte.", next: "n2_fin" }] },
      n2_fin: { text: "Nos vemos en la zona.", choices: [], end: true }
    }
  },
  {
    id: "bolita",
    name: "Bolita",
    initials: "BL",
    role: "Especialista Táctico // Independiente",
    color: "#f3a804",
    photo: "Contactos/Bolita.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Visor Térmico", price: "8,500 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/AN-PVS-14_Monocular_Night_Vision_Device.jpg/800px-AN-PVS-14_Monocular_Night_Vision_Device.jpg" }],
    nodes: {
      n1: { text: "Los radares de la Dark Zone registran movimiento inusual.", choices: [{ label: "Entendido.", next: "n2_fin" }] },
      n2_fin: { text: "Mantén perfil bajo.", choices: [], end: true }
    }
  },
  {
    id: "dan",
    name: "Comandante Dan",
    initials: "CD",
    role: "Aliado de confianza // GFL",
    color: "#f3a804",
    photo: "Contactos/Comandante Dan.png",
    status: "online",
    start: "n1",
    shop: [
      { name: "Fusil HK416", price: "12,500 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Heckler_%26_Koch_HK416.JPG/800px-Heckler_%26_Koch_HK416.JPG" }
    ],
    nodes: {
      n1: { text: "Qué tal, Contratista. Me alegra ver que sigues operativo.", choices: [{ label: "Todo bajo control.", next: "n2_fin" }] },
      n2_fin: { text: "Excelente.", choices: [], end: true }
    }
  },
  {
    id: "deke",
    name: "Deke Vinson",
    initials: "DV",
    role: "Comerciante de objetos raros",
    color: "#f3a804",
    photo: "Contactos/Deke Vinson.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "FAL Tactical", price: "18,400 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/FAL_L1A1_S_A.jpg/800px-FAL_L1A1_S_A.jpg" }],
    nodes: {
      n1: { text: "Contrabando exclusivo hoy.", choices: [{ label: "Muéstrame.", next: "n2_fin" }] },
      n2_fin: { text: "Vuelve pronto.", choices: [], end: true }
    }
  },
  {
    id: "evita",
    name: "Evita",
    initials: "EV",
    role: "Médica de campo",
    color: "#ff5a5a",
    photo: "Contactos/Evita.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "Kit Médico IFAK", price: "1,200 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/First_Aid_Kit.jpg/800px-First_Aid_Kit.jpg" }],
    nodes: {
      n1: { text: "Necesito insumos urgentes.", choices: [{ label: "Te ayudaré.", next: "n2_fin" }] },
      n2_fin: { text: "Gracias.", choices: [], end: true }
    }
  },
  {
    id: "gavin",
    name: "Gavin McConell",
    initials: "GM",
    role: "Especialista en Logística",
    color: "#f3a804",
    photo: "Contactos/Gavin McConell.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Mochila Militar XL", price: "3,500 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Interceptor_body_armor.jpg/800px-Interceptor_body_armor.jpg" }],
    nodes: {
      n1: { text: "Los cargamentos están listos para despacho.", choices: [{ label: "Perfecto.", next: "n2_fin" }] },
      n2_fin: { text: "Aviso cualquier cambio.", choices: [], end: true }
    }
  },
  {
    id: "joel",
    name: "Joel Garrison",
    initials: "JG",
    role: "Enlace de contrato",
    color: "#f3a804",
    photo: "Contactos/Joel Garrison.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "M4A1 Custom", price: "15,000 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M4a1_mq.jpg/800px-M4a1_mq.jpg" }],
    nodes: {
      n1: { text: "Tengo contratos especiales para ti.", choices: [{ label: "Entendido.", next: "n2_fin" }] },
      n2_fin: { text: "Cuídate.", choices: [], end: true }
    }
  },
  {
    id: "kayla",
    name: "Kayla",
    initials: "KY",
    role: "Facción Colom",
    color: "#ff5a5a",
    photo: "Contactos/Kayla.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Carabina SKS", price: "4,900 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/SKS_-_isolated.jpg/800px-SKS_-_isolated.jpg" }],
    nodes: {
      n1: { text: "Colom paga mejor.", choices: [{ label: "Acepto.", next: "n2_fin" }] },
      n2_fin: { text: "Perfecto.", choices: [], end: true }
    }
  },
  {
    id: "lyle",
    name: "Lyle Moreno",
    initials: "LM",
    role: "Informante",
    color: "#f3a804",
    photo: "Contactos/Lyle Moreno.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "Radio Portátil Encriptada", price: "2,000 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/AN-PVS-14_Monocular_Night_Vision_Device.jpg/800px-AN-PVS-14_Monocular_Night_Vision_Device.jpg" }],
    nodes: {
      n1: { text: "Escuché frecuencias extrañas en el sector norte.", choices: [{ label: "Revisaré.", next: "n2_fin" }] },
      n2_fin: { text: "Ten cuidado.", choices: [], end: true }
    }
  },
  {
    id: "randall",
    name: "Randall",
    initials: "RN",
    role: "Mercenario Independiente",
    color: "#f3a804",
    photo: "Contactos/Randall.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "Munición AP 5.56", price: "1,500 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Heckler_%26_Koch_HK416.JPG/800px-Heckler_%26_Koch_HK416.JPG" }],
    nodes: {
      n1: { text: "¿Necesitas apoyo de fuego?", choices: [{ label: "Te aviso si surge algo.", next: "n2_fin" }] },
      n2_fin: { text: "Siempre listo.", choices: [], end: true }
    }
  },
  {
    id: "rodriguez",
    name: "Rodríguez",
    initials: "RG",
    role: "Excapitán — Contrabandista",
    color: "#f3a804",
    photo: "Contactos/Rodriguez.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "Subfusil MP5", price: "5,500 Koins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/HKMP5.jpg/800px-HKMP5.jpg" }],
    nodes: {
      n1: { text: "Rutas libres.", choices: [{ label: "Anotado.", next: "n2_fin" }] },
      n2_fin: { text: "Nos vemos.", choices: [], end: true }
    }
  }
];

let activeContact = null;
let activeNodeKey = null;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

/* ----- AUDIO Y LISTA DE REPRODUCCIÓN (RUTAS RELATIVAS CORREGIDAS) ----- */
const playlist = [
  "musica/Arena_Breakout_OST_Daybreak_Main_Theme_KLICKAUD.mp3",
  "musica/Arena_Breakout_OST_Daybreak_Lobby_Theme_KLICKAUD.mp3",
  "musica/Arena_Breakout_OST_-_Daybreak_II_Lockdown_Theme_KLICKAUD.mp3",
  "musica/Arena_Breakout_OST_-_Daybreak_III_Forbidden_Theme_KLICKAUD.mp3"
];
let currentTrackIndex = 0;
const audioElement = document.getElementById('bg-audio');

audioElement.addEventListener('ended', () => { nextTrack(); });
window.addEventListener('click', () => {
  if (audioElement.paused) audioElement.play().catch(e => {});
}, { once: true });

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  audioElement.src = playlist[currentTrackIndex];
  audioElement.play().catch(e => console.log("Interacción requerida por el navegador."));
}

/* ----- UTILIDADES HUD ----- */
function playTypeBeep() {
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.05);
  } catch (e) {}
}

function typeWriterEffect(element, text, i = 0, callback) {
  if (i === 0) element.innerHTML = "";
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    if (i % 2 === 0) playTypeBeep();
    setTimeout(() => { typeWriterEffect(element, text, i + 1, callback); }, 20);
  } else if (callback) callback();
}

/* ----- INICIALIZACIÓN ----- */
document.addEventListener("DOMContentLoaded", () => {
  initBootSequence();
  renderContactGrid();
  setupNewsClose();
  initFooterCarousel();
});

function initBootSequence() {
  const bootScreen = document.getElementById("boot");
  const bootLines = document.getElementById("boot-lines");
  if (!bootScreen || !bootLines) return;
  const lines = ["> INICIALIZANDO TERMINAL...", "> CONECTANDO A RED PRIVADA...", "> ACCESO CONCEDIDO // DARK ZONE"];
  let currentLine = 0;
  const interval = setInterval(() => {
    if (currentLine < lines.length) {
      bootLines.textContent += lines[currentLine] + "\n";
      currentLine++;
    } else {
      clearInterval(interval);
      setTimeout(() => { bootScreen.classList.add("hide"); }, 600);
    }
  }, 350);
}

function setupNewsClose() {
  const closeBtn = document.querySelector(".news-close-btn");
  const newsCard = document.querySelector(".news-modal-card");
  if (closeBtn && newsCard) closeBtn.addEventListener("click", () => { newsCard.style.display = "none"; });
}

function initFooterCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 3000);
}

function renderContactGrid() {
  const grid = document.getElementById("contactsGrid");
  const countBot = document.getElementById("contactCount");
  if (countBot) countBot.textContent = `${contacts.length} contactos cargados`;
  if (!grid) return;
  grid.innerHTML = "";

  contacts.forEach(c => {
    const card = document.createElement("div");
    card.className = "contact-card";
    const statusText = c.status === "online" ? "EN LÍNEA" : "PENDIENTE";
    const statusClass = c.status === "online" ? "" : "pending";
    card.innerHTML = `
      <div class="contact-avatar-area">
        <span class="status-tag ${statusClass}">${statusText}</span>
        <img src="${c.photo}" alt="${c.name}" onerror="this.style.display='none';">
      </div>
      <div class="contact-body">
        <div class="contact-role">${c.role}</div>
        <div class="contact-name">${c.name}</div>
        <div class="contact-footer">
          <button class="talk-btn" onclick="openChat('${c.id}')">INICIAR CHAT</button>
          ${c.shop && c.shop.length > 0 ? `<button class="shop-btn" onclick="openShop('${c.id}')">TIENDA</button>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openChat(id) {
  const contact = contacts.find(c => c.id === id);
  if (!contact) return;
  activeContact = contact; activeNodeKey = contact.start;
  const chatContainer = document.getElementById("chat-container");
  
  chatContainer.innerHTML = `
    <div class="chat-window active">
      <div class="chat-header">
        <button class="back-btn" onclick="closeChat()">← VOLVER</button>
        <div class="avatar" style="background-image: url('${contact.photo}');"></div>
        <div><div class="name">${contact.name}</div><span class="tag ${contact.status === 'online' ? '' : 'pending'}">${contact.status === 'online' ? 'EN LÍNEA' : 'PENDIENTE'}</span></div>
      </div>
      <div class="messages" id="chat-messages-area"></div>
      <div class="choices" id="chat-choices-area"></div>
    </div>
  `;
  renderNode(contact.nodes[activeNodeKey]);
}

function closeChat() { document.getElementById("chat-container").innerHTML = ""; }

function renderNode(node) {
  const msgArea = document.getElementById("chat-messages-area");
  const choicesArea = document.getElementById("chat-choices-area");
  if (!node) return;

  const msgRow = document.createElement("div");
  msgRow.className = "msg-row";
  msgRow.innerHTML = `<div><div class="sender-tag">${activeContact.name}</div><div class="bubble"></div></div>`;
  msgArea.appendChild(msgRow);
  
  const bubbleElem = msgRow.querySelector('.bubble');
  
  bubbleElem.innerHTML = "<span style='color:var(--brand-color);'>[ DESENCRIPTANDO... ]</span>";
  setTimeout(() => {
    typeWriterEffect(bubbleElem, node.text, 0, () => { msgArea.scrollTop = msgArea.scrollHeight; });
    
    choicesArea.innerHTML = "";
    if (node.choices && node.choices.length > 0) {
      node.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerHTML = `<span class="key">${index + 1}</span> ${choice.label}`;
        btn.onclick = () => {
          msgArea.innerHTML += `<div class="msg-row you"><div><div class="sender-tag" style="text-align:right;">TÚ</div><div class="bubble">${choice.label}</div></div></div>`;
          choicesArea.innerHTML = "";
          setTimeout(() => { 
             if (activeContact.nodes[choice.next]) {
                 renderNode(activeContact.nodes[choice.next]); 
             }
          }, 400);
        };
        choicesArea.appendChild(btn);
      });
    } else if (node.end) {
      choicesArea.innerHTML = `<div class="end-note">— TRANSMISIÓN FINALIZADA —</div>`;
    }
  }, 800);
}

function openShop(contactId) {
  const contact = contacts.find(c => c.id === contactId);
  const shopModal = document.getElementById("shop-modal");
  const shopGrid = document.getElementById("shop-items-grid");
  document.getElementById("shop-title").textContent = `MERCADO // ${contact.name.toUpperCase()}`;
  shopGrid.innerHTML = "";
  
  contact.shop.forEach(item => {
    shopGrid.innerHTML += `
      <div class="shop-item-card">
        <div class="shop-img-container" style="background-image: url('${item.img}');"></div>
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-price">${item.price}</div>
        <button class="buy-action-btn">ADQUIRIR</button>
      </div>`;
  });
  shopModal.classList.add("active");
}
function closeShop() { document.getElementById("shop-modal").classList.remove("active"); }

function openMap() { document.getElementById("map-modal").classList.add("active"); }
function closeMap() { document.getElementById("map-modal").classList.remove("active"); }
