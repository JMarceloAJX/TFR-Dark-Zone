const contacts = [
  {
    id: "dan",
    name: "Comandante Dan",
    initials: "CD",
    role: "Aliado de confianza // GFL",
    color: "#f3a804",
    photo: "Contactos/Comandante%20Dan.png",
    status: "online",
    start: "n1",
    shop: [
      { name: "Fusil HK416", price: "12,500 Koins", img: "Externo/GFLW.jpg" },
      { name: "Chaleco Táctico IND", price: "4,200 Koins", img: "Externo/GFLW.jpg" }
    ],
    nodes: {
      n1: {
        text: "Qué tal, Contratista. Me alegra ver que sigues operativo. ¿Cómo va tu sector?",
        choices: [
          { label: "Todo bajo control, Dan.", next: "n2_apoyo" },
          { label: "Pesado, pero resistiendo.", next: "n2_novedades" }
        ]
      },
      n2_apoyo: { text: "Excelente. Sigue así.", choices: [], end: true },
      n2_novedades: { text: "Mantén los ojos abiertos.", choices: [], end: true }
    }
  },
  {
    id: "joel",
    name: "Joel Garrison",
    initials: "JG",
    role: "Enlace de contrato — Exmaestro",
    color: "#f3a804",
    photo: "Contactos/Joel%20Garrison.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "M4A1 Custom", price: "15,000 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Tengo contratos y suministros especiales para ti, Contratista.",
        choices: [{ label: "Entendido, Joel.", next: "n2_fin" }]
      },
      n2_fin: { text: "Cuídate en las zonas oscuras.", choices: [], end: true }
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
    shop: [{ name: "Kit Médico Militar", price: "1,200 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Necesito insumos médicos urgentes para el puesto de avanzada.",
        choices: [{ label: "Te ayudaré con eso.", next: "n2_fin" }]
      },
      n2_fin: { text: "Gracias de corazón.", choices: [], end: true }
    }
  },
  {
    id: "deke",
    name: "Deke Vinson",
    initials: "DV",
    role: "Comerciante de objetos raros",
    color: "#f3a804",
    photo: "Contactos/Deke%20Vinson.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "FAL Tactical", price: "18,400 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Tengo un lote exclusivo de contrabando para vos hoy.",
        choices: [{ label: "Muéstrame qué tienes.", next: "n2_fin" }]
      },
      n2_fin: { text: "Vuelve pronto.", choices: [], end: true }
    }
  },
  {
    id: "randall",
    name: "Randall",
    initials: "RD",
    role: "Comandante militar",
    color: "#8a8a86",
    photo: "Contactos/Randall.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Armadura Pesada AN95", price: "14,000 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Operaciones de la Alianza en curso.",
        choices: [{ label: "Entendido.", next: "n2_fin" }]
      },
      n2_fin: { text: "Mantén posición.", choices: [], end: true }
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
    shop: [{ name: "Subfusil MP5", price: "5,500 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Rutas libres de control militar.",
        choices: [{ label: "Anotado.", next: "n2_fin" }]
      },
      n2_fin: { text: "Nos vemos.", choices: [], end: true }
    }
  },
  {
    id: "gavin",
    name: "Gavin McConnell",
    initials: "GM",
    role: "Logística y transporte",
    color: "#8a8a86",
    photo: "Contactos/Gavin%20McConell.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Mochila Militar XL", price: "3,800 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Problemas en la ruta norte.",
        choices: [{ label: "Toma ruta alterna.", next: "n2_fin" }]
      },
      n2_fin: { text: "En camino.", choices: [], end: true }
    }
  },
  {
    id: "lyle",
    name: "Lyle Moreno",
    initials: "LM",
    role: "Consejo humanitario",
    color: "#ff5a5a",
    photo: "Contactos/Lyle%20Moreno.jpeg",
    status: "pending",
    start: "n1",
    shop: [{ name: "Vendas de Emergencia", price: "300 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Escolta para convoy civil requerida.",
        choices: [{ label: "Cuentas conmigo.", next: "n2_fin" }]
      },
      n2_fin: { text: "Gracias.", choices: [], end: true }
    }
  },
  {
    id: "andre",
    name: "Andre",
    initials: "AN",
    role: "Política de Tevila",
    color: "#f3a804",
    photo: "Contactos/Andre.jpeg",
    status: "online",
    start: "n1",
    shop: [{ name: "Kit de Reparación", price: "2,000 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Tevila recompensa la lealtad.",
        choices: [{ label: "Entendido.", next: "n2_fin" }]
      },
      n2_fin: { text: "Atento a órdenes.", choices: [], end: true }
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
    shop: [{ name: "Carabina SKS", price: "4,900 Koins", img: "Externo/GFLW.jpg" }],
    nodes: {
      n1: {
        text: "Colom paga mejor que nadie.",
        choices: [{ label: "Acepto el trato.", next: "n2_fin" }]
      },
      n2_fin: { text: "Perfecto.", choices: [], end: true }
    }
  }
];

let activeContact = null;
let activeNodeKey = null;

document.addEventListener("DOMContentLoaded", () => {
  initBootSequence();
  renderContactGrid();
  setupNewsClose();
});

function initBootSequence() {
  const bootScreen = document.getElementById("boot");
  const bootLines = document.getElementById("boot-lines");
  if (!bootScreen) return;

  const lines = [
    "> INICIALIZANDO TERMINAL...",
    "> CONECTANDO A RED PRIVADA...",
    "> ACCESO CONCEDIDO // DARK ZONE",
    "> CARGANDO REGISTROS DE CONTACTOS..."
  ];

  let currentLine = 0;
  
  if (bootLines) {
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        bootLines.textContent += lines[currentLine] + "\n";
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          bootScreen.classList.add("hide");
        }, 400);
      }
    }, 200);
  } else {
    setTimeout(() => {
      bootScreen.classList.add("hide");
    }, 800);
  }
}

function setupNewsClose() {
  const closeBtn = document.querySelector(".news-close-btn");
  const newsCard = document.querySelector(".news-modal-card");
  if (closeBtn && newsCard) {
    closeBtn.addEventListener("click", () => {
      newsCard.style.display = "none";
    });
  }
}

function renderContactGrid() {
  const grid = document.getElementById("contactsGrid");
  const countTop = document.getElementById("contactCountTop");
  const countBot = document.getElementById("contactCount");

  if (countTop) countTop.textContent = `${contacts.length} contactos cargados`;
  if (countBot) countBot.textContent = `${contacts.length} contactos cargados`;

  if (!grid) return;
  grid.innerHTML = "";

  contacts.forEach(c => {
    const card = document.createElement("div");
    card.className = "contact-card";

    const isOnline = c.status === "online";
    const statusText = isOnline ? "EN LÍNEA" : "PENDIENTE";
    const statusClass = isOnline ? "" : "pending";

    card.innerHTML = `
      <div class="contact-avatar-area">
        <span class="status-tag ${statusClass}">${statusText}</span>
        <img src="${c.photo}" alt="${c.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="initials" style="display:none;">${c.initials}</div>
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

  activeContact = contact;
  activeNodeKey = contact.start;

  const chatContainer = document.getElementById("chat-container");
  if (!chatContainer) return;

  chatContainer.innerHTML = `
    <div class="chat-window active">
      <div class="chat-header">
        <button class="back-btn" onclick="closeChat()">← VOLVER</button>
        <div class="avatar" style="background-image: url('${contact.photo}');"></div>
        <div>
          <div class="name">${contact.name}</div>
          <span class="tag ${contact.status === 'online' ? '' : 'pending'}">${contact.status === 'online' ? 'EN LÍNEA' : 'PENDIENTE'}</span>
        </div>
      </div>
      <div class="messages" id="chat-messages-area"></div>
      <div class="choices" id="chat-choices-area"></div>
    </div>
  `;

  renderNode(contact.nodes[activeNodeKey]);
}

function closeChat() {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer) chatContainer.innerHTML = "";
  activeContact = null;
  activeNodeKey = null;
}

function renderNode(node) {
  const msgArea = document.getElementById("chat-messages-area");
  const choicesArea = document.getElementById("chat-choices-area");

  if (!node || !msgArea || !choicesArea) return;

  const msgRow = document.createElement("div");
  msgRow.className = "msg-row";
  msgRow.innerHTML = `
    <div>
      <div class="sender-tag">${activeContact.name}</div>
      <div class="bubble">${node.text}</div>
    </div>
  `;
  msgArea.appendChild(msgRow);
  msgArea.scrollTop = msgArea.scrollHeight;

  choicesArea.innerHTML = "";

  if (node.choices && node.choices.length > 0) {
    node.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = `<span class="key">${index + 1}</span> ${choice.label}`;

      btn.addEventListener("click", () => {
        const userRow = document.createElement("div");
        userRow.className = "msg-row you";
        userRow.innerHTML = `
          <div>
            <div class="sender-tag" style="text-align:right;">TÚ</div>
            <div class="bubble">${choice.label}</div>
          </div>
        `;
        msgArea.appendChild(userRow);
        choicesArea.innerHTML = "";

        setTimeout(() => {
          activeNodeKey = choice.next;
          renderNode(activeContact.nodes[activeNodeKey]);
        }, 300);
      });

      choicesArea.appendChild(btn);
    });
  } else if (node.end) {
    choicesArea.innerHTML = `<div class="end-note">— TRANSMISIÓN FINALIZADA —</div>`;
  }
}

function openShop(contactId) {
  const contact = contacts.find(c => c.id === contactId);
  if (!contact) return;

  const shopModal = document.getElementById("shop-modal");
  const shopTitle = document.getElementById("shop-title");
  const shopGrid = document.getElementById("shop-items-grid");

  if (!shopModal || !shopGrid) return;

  if (shopTitle) shopTitle.textContent = `MERCADO // ${contact.name.toUpperCase()}`;
  shopGrid.innerHTML = "";

  const items = contact.shop || [];

  if (items.length === 0) {
    shopGrid.innerHTML = `<p style="color:#777; grid-column:1/-1;">Este contacto no dispone de artículos en este momento.</p>`;
  } else {
    items.forEach(item => {
      const itemCard = document.createElement("div");
      itemCard.className = "shop-item-card";
      itemCard.innerHTML = `
        <img src="${item.img}" alt="${item.name}" onerror="this.src='Externo/GFLW.jpg'">
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-price">${item.price}</div>
        <button class="buy-action-btn" onclick="buyItem('${item.name}')">ADQUIRIR</button>
      `;
      shopGrid.appendChild(itemCard);
    });
  }

  shopModal.classList.add("active");
}

function closeShop() {
  const shopModal = document.getElementById("shop-modal");
  if (shopModal) shopModal.classList.remove("active");
}

function buyItem(itemName) {
  alert(`Solicitud procesada: Adquiriendo ${itemName}`);
}
