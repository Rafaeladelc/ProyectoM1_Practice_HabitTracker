/* ============================================
   Daily Habit Tracker · js/script.js
   Lógica de generación del calendario
   ============================================ */

/* ---- Datos: hábitos y completados ---- */

const habitos = [
  { id: 1, nombre: "Entrenar", categoria: "salud" },
  { id: 2, nombre: "Pasos", categoria: "salud" },
  { id: 3, nombre: "SoyHenry", categoria: "estudio" },
];

const completados = {
  // Formato: "YYYY-MM-DD": [habitId1, habitId2, ...]
  "2026-08-16": [1, 3],
  "2026-08-15": [1, 2, 3],
  "2026-08-14": [2, 3],
};

let fechaActual = new Date(2026, 7, 16); // agosto 16

/* ---- Funciones auxiliares ---- */

// Obtiene el array de IDs completados para una fecha (o array vacío)
function obtenerCompletados(dateStr) {
  return completados[dateStr] || [];
}

// Convierte una Date a string "YYYY-MM-DD"
function dateAString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Retorna true si la fecha es hoy (16 agosto 2026)
function esHoy(date) {
  const hoy = new Date(2026, 7, 16);
  return date.toDateString() === hoy.toDateString();
}

/* ---- Renderizado del calendario ---- */

function renderizarCalendario() {
  const year = fechaActual.getFullYear();
  const month = fechaActual.getMonth();
  
  // Actualizar etiqueta del mes
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  document.getElementById("mes-actual").textContent = `${meses[month]} ${year}`;
  
  // Primero y último día del mes actual
  const primerDia = new Date(year, month, 1);
  const ultimoDia = new Date(year, month + 1, 0);
  const ultimoDiaAnterior = new Date(year, month, 0);
  
  // Limpiar el grid
  const calendario = document.getElementById("calendario");
  calendario.innerHTML = "";
  
  // Encabezados de días de la semana
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  diasSemana.forEach((dia) => {
    const encabezado = document.createElement("div");
    encabezado.className = "encabezado-dia";
    encabezado.textContent = dia;
    calendario.appendChild(encabezado);
  });
  
  // Días del mes anterior (grises, no interactivos)
  for (let i = primerDia.getDay() - 1; i >= 0; i--) {
    const dia = ultimoDiaAnterior.getDate() - i;
    const celda = document.createElement("div");
    celda.className = "celda-dia mes-anterior";
    celda.innerHTML = `<div class="numero-dia">${dia}</div>`;
    calendario.appendChild(celda);
  }
  
  // Días del mes actual (interactivos)
  for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
    const date = new Date(year, month, dia);
    const dateStr = dateAString(date);
    const hoy = esHoy(date);
    const compNow = obtenerCompletados(dateStr);
    
    const celda = document.createElement("div");
    celda.className = "celda-dia" + (hoy ? " hoy" : "");
    
    let html = `<div class="numero-dia">${dia}</div>`;
    html += `<div class="lista-habitos">`;
    
    // Cada hábito del día
    habitos.forEach((habit) => {
      const completado = compNow.includes(habit.id);
      html += `
        <div class="fila-habito${completado ? " completado" : ""}" 
             onclick="alternarHabito('${dateStr}', ${habit.id})"
             role="button" tabindex="0">
          <div class="checkbox">${completado ? "✓" : ""}</div>
          <div class="nombre-habito">${habit.nombre}</div>
          <div class="punto-categoria cat-${habit.categoria}"></div>
        </div>
      `;
    });
    
    html += `</div>`;
    
    // Estadística abajo
    const completadosCount = compNow.length;
    html += `<div class="estadistica">${completadosCount}/${habitos.length}`;
    if (completadosCount === habitos.length && completadosCount > 0) {
      html += ` 🔥`;
    }
    html += `</div>`;
    
    celda.innerHTML = html;
    calendario.appendChild(celda);
  }
  
  // Días del mes siguiente (grises, no interactivos)
  const totalCeldas = calendario.children.length - diasSemana.length; // Ya contamos los encabezados
  const diasNecesarios = 42 - totalCeldas; // 6 filas × 7 columnas = 42
  for (let dia = 1; dia <= diasNecesarios; dia++) {
    const celda = document.createElement("div");
    celda.className = "celda-dia mes-siguiente";
    celda.innerHTML = `<div class="numero-dia">${dia}</div>`;
    calendario.appendChild(celda);
  }
}

/* ---- Interactividad ---- */

function alternarHabito(dateStr, habitoId) {
  // Crear la fecha si no existe
  if (!completados[dateStr]) {
    completados[dateStr] = [];
  }
  
  // Alternar: si está, quitar; si no está, agregar
  const indice = completados[dateStr].indexOf(habitoId);
  if (indice === -1) {
    completados[dateStr].push(habitoId);
  } else {
    completados[dateStr].splice(indice, 1);
  }
  
  // Redibujar
  renderizarCalendario();
}

function mesAnterior() {
  fechaActual.setMonth(fechaActual.getMonth() - 1);
  renderizarCalendario();
}

function mesSiguiente() {
  fechaActual.setMonth(fechaActual.getMonth() + 1);
  renderizarCalendario();
}

/* ---- Event listeners ---- */

document.getElementById("btn-mes-anterior").addEventListener("click", mesAnterior);
document.getElementById("btn-mes-siguiente").addEventListener("click", mesSiguiente);

/* ---- Inicialización ---- */

renderizarCalendario();
