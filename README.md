# 📅 Daily Habit Tracker

Un rastreador interactivo de hábitos diarios construido con **HTML5 semántico**, **CSS Grid** y **JavaScript vanilla**. Permite registrar hasta 3 hábitos personalizables, visualizar el progreso mensual y guardar los datos localmente.

**Proyecto de práctica posterior al Módulo 1 de SoyHenry Full Stack Developer.**

---

## 🎯 Características principales

- 📊 **Calendario interactivo** — Visualiza un mes completo (42 celdas: 6 semanas × 7 días)
- ✅ **Hábitos personalizables** — Agrega hasta 3 hábitos: Entrenar, Pasos, SoyHenry
- 🎨 **Categorías por color** — Salud, Estudio, Trabajo, Entretenimiento, Familia
- 💾 **localStorage** — Los datos se guardan automáticamente y persisten entre recargas
- 🔄 **Navegación de meses** — Desplázate hacia atrás y adelante en el calendario
- ✨ **Animaciones suaves** — Transiciones y efectos visuales pulidos
- ♿ **Accesibilidad** — Soporta navegación con teclado, focus visible y screen readers
- 📱 **Responsive** — Se adapta a pantallas móviles, tablets y desktop

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Propósito |
|-----------|-----------|
| **HTML5** | Estructura semántica (header, main, section, footer) |
| **CSS3** | Grid layout, custom properties, animaciones, media queries |
| **JavaScript (Vanilla)** | Manipulación del DOM, gestión de estado, localStorage |
| **Git & GitHub** | Versionado y control de cambios |

**Sin frameworks ni librerías externas** — todo desde cero.

---

## 📁 Estructura del proyecto

```
ProyectoM1_Practice_HabitTracker/
├── index.html                 # Estructura semántica
├── css/
│   └── styles.css            # Estilos (Grid, animaciones, responsive)
├── js/
│   └── script.js             # Lógica (calendario, interactividad, localStorage)
├── README.md                 # Este archivo
└── .gitignore                # Archivos a ignorar en Git
```

---

## 🚀 Instalación y uso

### Opción 1: Clonar desde GitHub

```bash
git clone https://github.com/Rafaeladelc/ProyectoM1_Practice_HabitTracker.git
cd ProyectoM1_Practice_HabitTracker
```

### Opción 2: Descarga directa

Descargá el ZIP desde GitHub y descomprimí en tu carpeta local.

### Ejecutar localmente

1. Abre la carpeta en **VS Code**
2. Instala la extensión **Live Server** (si no la tienes)
3. Haz clic derecho en `index.html` → **Open with Live Server**
4. El navegador se abrirá automáticamente en `http://127.0.0.1:5500`

---

## 📖 Cómo usar

1. **Ver el mes actual** — El calendario muestra agosto 2026 por defecto
2. **Navegar meses** — Usa los botones "← Anterior" y "Siguiente →"
3. **Marcar hábitos** — Haz clic en cualquier hábito para marcar como completado (✓)
4. **Ver progreso** — Cada celda muestra `X/3` (cuántos hábitos completaste ese día)
5. **Hoy destacado** — El día 16 tiene un borde morado para facilitar orientación
6. **Datos persistentes** — Los cambios se guardan automáticamente en localStorage

---

## 🎓 Conceptos aprendidos y reforzados

### De Colorfly (Módulo 1)

- ✅ **HTML semántico** — Uso correcto de etiquetas (header, main, section, footer)
- ✅ **CSS Grid** — Layout de 7 columnas con `grid-template-columns: repeat(7, 1fr)`
- ✅ **Custom properties (variables CSS)** — `--color-oscuro`, `--cat-salud`, etc.
- ✅ **Flexbox** — Alineación de header, leyenda y navegación
- ✅ **Manipulación del DOM** — `createElement()`, `appendChild()`, `innerHTML`

### Nuevos en esta práctica

- 🆕 **Gestión de estado en memoria** — Objeto `completados` para guardar estado
- 🆕 **localStorage API** — Persistencia de datos entre sesiones
- 🆕 **Manipulación de fechas** — Clase `Date`, formateo `YYYY-MM-DD`
- 🆕 **Animaciones CSS** — `@keyframes`, `animation`, `transition`
- 🆕 **Accesibilidad (a11y)** — `aria-label`, `role`, `focus-visible`
- 🆕 **Responsive design** — Media queries, mobile-first
- 🆕 **Git workflow avanzado** — Commits descriptivos, push a GitHub

---

## 💡 Características técnicas destacadas

### Single Source of Truth

Los datos se almacenan en un único objeto `completados`:

```javascript
const completados = {
  "2026-08-16": [1, 3],  // Día 16: hábitos 1 y 3 completados
  "2026-08-15": [1, 2, 3],
};
```

### localStorage Automático

Cada vez que se marca/desmarca un hábito:

```javascript
function guardarEnLS() {
  localStorage.setItem("completados", JSON.stringify(completados));
}
```

### Renderizado dinámico

El calendario se regenera completamente al cambiar de mes:

```javascript
function renderizarCalendario() {
  // Limpia el grid
  // Genera encabezados (Dom-Sáb)
  // Genera 42 celdas con hábitos
}
```

---

## 🎨 Decisiones de diseño

| Decisión | Justificación |
|----------|--------------|
| Grid 7×6 (42 celdas) | Estándar para calendarios; cubre cualquier mes |
| Colores por categoría | Facilita identificación rápida de tipos de hábitos |
| localStorage | Datos persisten sin backend; experiencia offline |
| Animations | Feedback visual inmediato; experiencia pulida |
| Mobile-first CSS | Mejor experiencia en dispositivos pequeños |

---

## 🐛 Problemas resueltos

1. **Error de sintaxis en CSS** → Falta de punto y coma → Resuelto
2. **localStorage no persistía** → `JSON.stringify/parse` requerido → Resuelto
3. **Mes no se actualizaba** → Faltaba elemento `span#mes-actual` → Resuelto
4. **Animaciones no fluidas** → Agregadas transiciones y @keyframes → Resuelto

---

## 📊 Estadísticas del proyecto

- **Líneas de código HTML** — ~65
- **Líneas de código CSS** — ~380
- **Líneas de código JavaScript** — ~180
- **Commits Git** — 3 (init, calendario, localStorage)
- **Horas de desarrollo** — ~4 (incluyendo debugging)

---

## 🔄 Fases de desarrollo

| Fase | Qué se hizo | Estado |
|------|----------|--------|
| **1** | HTML semántico (header, main, footer) | ✅ Completo |
| **2** | CSS Grid (7 cols) + variables | ✅ Completo |
| **3** | Calendario dinámico con JS | ✅ Completo |
| **4-5** | Hábitos interactivos + checkboxes | ✅ Completo |
| **6** | localStorage (guardar/cargar) | ✅ Completo |
| **7** | Animaciones suaves | ✅ Completo |
| **8** | Accesibilidad + responsividad | ✅ Completo |

---

## 🚀 Mejoras futuras (scope expansion)

Si quisiera expandir este proyecto:

- [ ] Agregar más de 3 hábitos (input dinámico)
- [ ] Editar nombres de hábitos
- [ ] Eliminar hábitos individuales
- [ ] Histórico de rachas (días seguidos completados)
- [ ] Gráficas de progreso (Chart.js)
- [ ] Exportar datos a CSV
- [ ] Notificaciones push diarias
- [ ] Backend + base de datos (para sincronizar entre dispositivos)

---

## 🔗 Enlaces útiles

- **GitHub Repo** — [ProyectoM1_Practice_HabitTracker](https://github.com/Rafaeladelc/ProyectoM1_Practice_HabitTracker)
- **SoyHenry** — [Full Stack Developer Program](https://www.soyhenry.com)
- **MDN Docs** — [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) | [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) | [Accesibilidad](https://developer.mozilla.org/es/docs/Web/Accessibility)

---

## 📝 Notas de desarrollo

### Decisión: localStorage vs Backend

Se eligió localStorage por:
- ✅ Más simple para un MVP
- ✅ No requiere servidor
- ✅ Datos offline-first
- ✅ Suficiente para caso de uso personal

En producción con múltiples usuarios, se usaría Firebase o un backend propio.

### Por qué Vanilla JS

No se usaron frameworks (React, Vue) porque:
- ✅ Aprender fundamentales de JavaScript
- ✅ Entender DOM manipulation sin abstracción
- ✅ Mejor desempeño para app pequeña
- ✅ Cero dependencias externas

---

## 👩‍💻 Autor

**Rafaela Martinez Jimenez**  
Estudiante de Full Stack Developer en SoyHenry  
Enfoque: Desarrollo Frontend | Accesibilidad | Buenas prácticas

- 🔗 GitHub: [@Rafaeladelc](https://github.com/Rafaeladelc)
- 🔗 LinkedIn: [Rafaela Martinez](https://www.linkedin.com/in/rafaela-martinez)

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia **MIT**. Eres libre de usarlo, modificarlo y distribuirlo.

---

## 🤝 Contribuciones

¿Feedback o sugerencias? Las contribuciones son bienvenidas:

1. Haz fork del repo
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'feat: descripción'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

**Última actualización:** Agosto 2026  
**Versión:** 1.0.0