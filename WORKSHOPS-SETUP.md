# 🎓 Workshops — Guía de configuración (Google Sheets + Mercado Pago)

Esta guía explica cómo conectar el formulario de inscripción de workshops con:

1. **Google Sheets** → para que los datos de los participantes queden agendados automáticamente.
2. **Mercado Pago** → para que el botón "INSCRIBIRME" redirija al link de pago correcto.
3. **Página de éxito** → mensaje que ve el participante después de pagar.

---

## 1. Google Sheets (datos de participantes)

### 1.1 Crear la planilla
1. Andá a [sheets.new](https://sheets.new) para crear una planilla nueva.
2. Renombrá la primera hoja a **`Inscripciones`** (clic en el nombre de la hoja abajo → Cambiar nombre).
   - Los encabezados se crean solos al primer envío, pero si querés podés ponerlos en la fila 1:
     `Fecha | Curso | Modalidad | Valor | Nombre | Email | DNI | Teléfono | Observaciones | Estado`

### 1.2 Crear el Web App de Apps Script
1. En la planilla: menú **Extensiones → Apps Script**.
2. Borrá el código de ejemplo y pegá el contenido de `google-apps-script/Code.gs` (está en este repo).
3. Guardá (ícono de diskette) y nombrá el proyecto, ej: `XUR Inscripciones`.
4. Botón **Implementar** (Deploy) → **Nueva implementación** → tipo **Aplicación web**:
   - **Ejecutar como**: Yo (tu cuenta)
   - **Quién tiene acceso**: Cualquier persona (Anyone)
5. Autorizá los permisos cuando te lo pida. Si aparece *"Google no verificó esta app"*, tocá **Configuración avanzada → Ir a XUR Inscripciones (no seguro)**.
6. Copiá la **URL del Web App** (termina en `/exec`).

### 1.3 Conectar con la web
1. Abrí `workshops/index.html`.
2. Buscá `const SHEETS_URL = '';` y pegá la URL entre las comillas:
   ```js
   const SHEETS_URL = 'https://script.google.com/macros/s/TU_ID/exec';
   ```

### 1.4 Probar
- Abrí la URL del Web App en el navegador: deberías ver *"Web App DIAGONAL XUR activa"*.
- Hacé una inscripción de prueba en la web y verificá que la fila aparezca en la planilla con estado **PENDIENTE**.

---

## 2. Mercado Pago (links de pago)

### 2.1 Crear un link de pago por curso/modalidad
1. Entrá a [mercadopago.com.ar](https://www.mercadopago.com.ar) → **Cobrar → Links de pago**.
2. Creá un link por cada producto:
   - **TouchDesigner — Presencial**: $150.000
   - **TouchDesigner — Virtual**: $75.000
   - **Láser — Presencial**: $150.000
   - **Diseño de Stage — Presencial**: $220.000
3. Copiá la URL de cada link (algo como `https://mpago.la/XXXXXXX`).

### 2.2 Conectar con la web
En `workshops/index.html`, dentro del array `CURSOS`, cada `modalidad` tiene un campo `urlPago`. Pegá el link correspondiente:

```js
// TouchDesigner
modalidades: [
    { id: 'presencial', ..., urlPago: 'https://mpago.la/TU_LINK_PRESENCIAL' },
    { id: 'virtual',    ..., urlPago: 'https://mpago.la/TU_LINK_VIRTUAL' }
]
```

Cuando `urlPago` está vacío (`''`), la inscripción abre WhatsApp como respaldo.

### 2.3 Comportamiento
- Al enviar el formulario: se guarda en Sheets y se abre el link de Mercado Pago en otra pestaña.
- El participante paga y recibe el comprobante de Mercado Pago.

---

## 3. Mensaje después del pago (página de éxito)

Ya existe la página **`pago-exitoso/`** (`https://diagonalxur.com.ar/pago-exitoso/`) que le muestra al participante:
- "¡Gracias por tu inscripción!"
- Botones para enviar el comprobante por WhatsApp o Email.

### Cómo redirigir a esta página después del pago
En cada link de pago de Mercado Pago, configurá la **URL de éxito** (o "URL de redirección") apuntando a:

```
https://diagonalxur.com.ar/pago-exitoso/
```

> Si tu tipo de link no permite configurar URL de éxito, no pasa nada: Mercado Pago
> muestra su propia pantalla de confirmación y el participante igual puede enviar el
> comprobante desde el panel de confirmación que aparece en la web.

---

## Resumen del flujo completo

```
Participante
   │  1. Elige curso y modalidad
   │  2. Completa sus datos (nombre, email, DNI, tel)
   │  3. Acepta términos
   ▼
[Web] Envía formulario
   │  ├─ Guarda la fila en Google Sheets (estado PENDIENTE)
   │  └─ Abre link de Mercado Pago en otra pestaña
   ▼
[Mercado Pago] El participante paga
   │  └─ Redirige a /pago-exitoso/ (si configuraste la URL)
   ▼
[pago-exitoso] "¡Gracias!" + enviar comprobante por WhatsApp/Email
   ▼
[Estudio] Recibe comprobante → marca la fila como PAGADO en Sheets
```

---

## Contacto del estudio
- Email: `hola.xur@gmail.com`
- WhatsApp: `+54 9 11 3390 3141`
