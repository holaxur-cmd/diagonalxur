/**
 * ============================================================
 *  DIAGONAL XUR — Inscripción a Workshops
 *  Google Apps Script — Web App que recibe los datos del
 *  formulario de inscripción y los escribe en Google Sheets.
 * ============================================================
 *
 *  CÓMO CONFIGURARLO (una sola vez):
 *
 *  1. Creá una Google Sheet nueva (sheets.new) y renombrá la
 *     primera hoja a "Inscripciones" (o editá NOMBRE_HOJA abajo).
 *
 *  2. En la fila 1 de esa hoja poné estos encabezados exactos:
 *     Fecha | Curso | Modalidad | Valor | Nombre | Email | DNI | Teléfono | Observaciones | Estado
 *     (si la hoja está vacía, el script los crea solo al primer envío)
 *
 *  3. En la misma Sheet: menú Extensiones → Apps Script.
 *     Borrá el código de ejemplo y pegá este archivo completo.
 *
 *  4. Guardá (ícono de diskette) y dale un nombre al proyecto
 *     (ej: "XUR Inscripciones").
 *
 *  5. Botón "Implementar" (Deploy) → "Nueva implementación" →
 *     tipo "Aplicación web" (Web app):
 *        - Ejecutar como (Execute as):  Yo (tu cuenta)
 *        - Quién tiene acceso (Who has access):  Cualquier persona (Anyone)
 *     → Implementar.
 *
 *  6. Te va a pedir autorizar permisos la primera vez (Google Sheets).
 *     Aceptá. Si sale "Google no verificó esta app", tocá
 *     "Configuración avanzada" → "Ir a XUR Inscripciones (no seguro)".
 *
 *  7. Copiá la URL que te da (termina en /exec) y pegala en la
 *     constante SHEETS_URL del archivo workshops/index.html.
 *
 *  8. Para PROBAR: abrí la URL en el navegador con ?debug=1 al final
 *     y deberías ver "Web App DIAGONAL XUR activa".
 * ============================================================
 */

var NOMBRE_HOJA = 'Inscripciones';

/**
 * Recibe el POST del formulario web y escribe la fila en la planilla.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(NOMBRE_HOJA);

    // Si la hoja no existe, la crea con los encabezados.
    if (!sheet) {
      sheet = ss.insertSheet(NOMBRE_HOJA);
      sheet.appendRow([
        'Fecha', 'Curso', 'Modalidad', 'Valor', 'Nombre',
        'Email', 'DNI', 'Teléfono', 'Observaciones', 'Estado'
      ]);
    }

    sheet.appendRow([
      data.fecha        || new Date(),
      data.curso        || '',
      data.modalidad    || '',
      data.valor        || '',
      data.nombre       || '',
      data.email        || '',
      data.dni          || '',
      data.telefono     || '',
      data.observaciones || '',
      data.estado       || 'PENDIENTE'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Para verificar que la Web App está viva (abrir la URL en el navegador).
 */
function doGet() {
  return ContentService.createTextOutput(
    'Web App DIAGONAL XUR activa. Usá POST para inscribir participantes.'
  );
}
