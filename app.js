// sistema de biblioteca
// alumno: Sánchez Ramírez Darian

const STORAGE_KEY = 'SIGB_JALPAN_DATA_V2';

let simulatedDate = new Date(2026, 8, 21, 10, 0, 0); // 21 Sept 2026, 10:00 AM

const DEFAULT_DATA = {
  students: [
    { id: "S01", matricula: "20260101", name: "Darian Sánchez Ramírez", career: "TSU Desarrollo de Software", status: "ACTIVO", fines: 0, activeLoans: 1 },
    { id: "S02", matricula: "20260102", name: "María Elena García Ramos", career: "TSU Tecnologías de la Información", status: "ACTIVO", fines: 0, activeLoans: 2 },
    { id: "S03", matricula: "20260103", name: "Carlos Eduardo Mendoza Cruz", career: "TSU Mecatrónica", status: "ACTIVO", fines: 0, activeLoans: 1 },
    { id: "S04", matricula: "20260104", name: "Valeria Sofía Ortiz Morales", career: "TSU Desarrollo de Software", status: "ACTIVO", fines: 0, activeLoans: 0 },
    { id: "S05", matricula: "20260105", name: "Juan Pablo Hernández Vega", career: "TSU Energías Renovables", status: "SANCIONADO", fines: 50.00, activeLoans: 1 },
    { id: "S06", matricula: "20260106", name: "Ana Cristina Flores Soto", career: "TSU Desarrollo de Software", status: "ACTIVO", fines: 0, activeLoans: 3 }, // Límite alcanzado
    { id: "S07", matricula: "20260107", name: "Luis Fernando Torres Mora", career: "TSU Mantenimiento Industrial", status: "ACTIVO", fines: 0, activeLoans: 0 },
    { id: "S08", matricula: "20260108", name: "Jimena Paola Rangel Luna", career: "TSU Tecnologías de la Información", status: "ACTIVO", fines: 0, activeLoans: 1 }
  ],
  books: (typeof MEXICAN_BOOKS_DATABASE !== 'undefined' ? MEXICAN_BOOKS_DATABASE : []),
  loans: [
    {
      id: "LN-1001",
      studentId: "S01",
      studentName: "Darian Sánchez Ramírez",
      matricula: "20260101",
      bookBarcode: "UTSJR-LIB-001",
      bookTitle: "Pedro Páramo (Edición Conmemorativa)",
      loanDate: new Date(2026, 8, 20, 11, 30).toISOString(),
      dueDate: new Date(2026, 8, 23, 11, 30).toISOString(), // Vigente (Verde)
      returnDate: null,
      status: "VIGENTE",
      fine: 0,
      initialCondition: "Excelente",
      returnCondition: null
    },
    {
      id: "LN-1002",
      studentId: "S02",
      studentName: "María Elena García Ramos",
      matricula: "20260102",
      bookBarcode: "UTSJR-LIB-004",
      bookTitle: "El laberinto de la soledad (4ª Ed. Definitiva)",
      loanDate: new Date(2026, 8, 18, 9, 0).toISOString(),
      dueDate: new Date(2026, 8, 21, 14, 0).toISOString(), // Vence hoy en 4 horas (Amarillo)
      returnDate: null,
      status: "POR_VENCER",
      fine: 0,
      initialCondition: "Excelente",
      returnCondition: null
    },
    {
      id: "LN-1003",
      studentId: "S05",
      studentName: "Juan Pablo Hernández Vega",
      matricula: "20260105",
      bookBarcode: "UTSJR-LIB-006",
      bookTitle: "La región más transparente (50 Aniversario)",
      loanDate: new Date(2026, 8, 12, 10, 0).toISOString(),
      dueDate: new Date(2026, 8, 15, 10, 0).toISOString(), // Vencido hace 6 días (Rojo / Mora)
      returnDate: null,
      status: "EN_MORA",
      fine: 60.00,
      initialCondition: "Bueno",
      returnCondition: null
    },
    {
      id: "LN-1004",
      studentId: "S03",
      studentName: "Carlos Eduardo Mendoza Cruz",
      matricula: "20260103",
      bookBarcode: "UTSJR-LIB-010",
      bookTitle: "Las batallas en el desierto (Ed. Ilustrada)",
      loanDate: new Date(2026, 8, 19, 12, 0).toISOString(),
      dueDate: new Date(2026, 8, 22, 12, 0).toISOString(), // Vigente
      returnDate: null,
      status: "VIGENTE",
      fine: 0,
      initialCondition: "Excelente",
      returnCondition: null
    },
    {
      id: "LN-1005",
      studentId: "S06",
      studentName: "Ana Cristina Flores Soto",
      matricula: "20260106",
      bookBarcode: "UTSJR-LIB-013",
      bookTitle: "Como agua para chocolate (Edición de Bolsillo) - Copia 1",
      loanDate: new Date(2026, 8, 20, 15, 0).toISOString(),
      dueDate: new Date(2026, 8, 23, 15, 0).toISOString(),
      returnDate: null,
      status: "VIGENTE",
      fine: 0,
      initialCondition: "Excelente",
      returnCondition: null
    },
    {
      id: "LN-1006",
      studentId: "S06",
      studentName: "Ana Cristina Flores Soto",
      matricula: "20260106",
      bookBarcode: "UTSJR-LIB-014",
      bookTitle: "Como agua para chocolate (Edición de Bolsillo) - Copia 2",
      loanDate: new Date(2026, 8, 20, 15, 10).toISOString(),
      dueDate: new Date(2026, 8, 23, 15, 10).toISOString(),
      returnDate: null,
      status: "VIGENTE",
      fine: 0,
      initialCondition: "Excelente",
      returnCondition: null
    }
  ],
  stats: {
    processedRequests: 142
  }
};

let appData = loadData();

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.books && parsed.books.length >= 50) {
        return parsed;
      }
    } catch(e) {
      console.error("Error al cargar localStorage, usando datos iniciales", e);
    }
  }
  const initial = JSON.parse(JSON.stringify(DEFAULT_DATA));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  updateUI();
}

function resetData() {
  if (confirm("¿Deseas restaurar los datos iniciales de prueba del prototipo?")) {
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    simulatedDate = new Date(2026, 8, 21, 10, 0, 0);
    saveData();
    showToast("Datos restaurados a valores de prueba iniciales.", "success");
  }
}

// ─── 2. MOTOR DE SONIDO (BEEP DE ESCÁNER ÓPTICO) ────────────────────────────
function playBeep(isError = false) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (!isError) {
      osc.type = "sine";
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else {
      osc.type = "square";
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch(e) {
    // Audio no soportado o bloqueado
  }
}

// ─── 3. SIMULACIÓN TEMPORAL Y RECÁLCULO DE MORAS ────────────────────────────
function advanceTime(hours) {
  simulatedDate = new Date(simulatedDate.getTime() + hours * 3600 * 1000);
  recalculateLoanStatuses();
  saveData();
  showToast(`Tiempo avanzado +${hours >= 24 ? (hours/24) + ' días' : hours + ' horas'}. Estados y semáforos recalculados.`, "warning");
}

function recalculateLoanStatuses() {
  const now = simulatedDate.getTime();
  
  appData.loans.forEach(loan => {
    if (loan.returnDate) return; // ya devuelto
    
    const due = new Date(loan.dueDate).getTime();
    const diffMs = due - now;
    const diffHours = diffMs / (1000 * 3600);
    
    if (diffMs < 0) {
      // Vencido / En mora
      loan.status = "EN_MORA";
      const daysOverdue = Math.ceil(Math.abs(diffMs) / (1000 * 3600 * 24));
      loan.fine = daysOverdue * 10.00; // $10 pesos por día
      
      // Actualizar sanción en el alumno
      const student = appData.students.find(s => s.id === loan.studentId);
      if (student && student.status !== "SANCIONADO") {
        student.status = "SANCIONADO";
        student.fines = Math.max(student.fines, loan.fine);
      }
    } else if (diffHours <= 24) {
      // Vence en menos de 24 horas
      loan.status = "POR_VENCER";
      loan.fine = 0;
    } else {
      loan.status = "VIGENTE";
      loan.fine = 0;
    }
  });
}

function formatDate(isoStr) {
  if (!isoStr) return "N/A";
  const d = new Date(isoStr);
  return d.toLocaleDateString("es-MX", { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// ─── 4. LÓGICA DE NEGOCIO: VALIDACIONES Y PRÉSTAMOS ────────────────────────
let selectedStudent = null;
let selectedBookCopy = null;

function scanStudent(matriculaInput) {
  const val = (matriculaInput || document.getElementById('input-student-scan').value).trim();
  if (!val) {
    showToast("Ingresa o escanea una matrícula escolar.", "warning");
    return;
  }
  
  const student = appData.students.find(s => s.matricula === val || s.id === val);
  if (!student) {
    playBeep(true);
    showToast(`Matrícula [${val}] no encontrada en el padrón escolar.`, "danger");
    document.getElementById('student-info-box').innerHTML = `
      <div class="info-card danger">
        <strong>⚠️ ERROR DE AUTENTICACIÓN:</strong> La matrícula <code>${val}</code> no existe en la base de datos escolar de Jalpan.
      </div>
    `;
    selectedStudent = null;
    checkCanSubmitLoan();
    return;
  }
  
  playBeep(false);
  selectedStudent = student;
  
  // Evaluar Reglas de Negocio del Alumno
  const hasFines = student.fines > 0 || student.status === "SANCIONADO";
  const isAtLimit = student.activeLoans >= 3;
  
  let validationBadge = `<span class="badge badge-success">✓ Apto para Préstamo</span>`;
  let alertMsg = "";
  
  if (hasFines) {
    validationBadge = `<span class="badge badge-danger">⛔ BLOQUEADO: Moroso / Multa Pendiente</span>`;
    alertMsg = `<p style="color:#DC2626; font-weight:600; margin-top:6px;">Tiene adeudo de $${student.fines.toFixed(2)} MXN o libros en mora. No puede solicitar más material.</p>`;
  } else if (isAtLimit) {
    validationBadge = `<span class="badge badge-warning">⚠️ Límite Excedido (3/3 Libros)</span>`;
    alertMsg = `<p style="color:#D97706; font-weight:600; margin-top:6px;">Ha alcanzado la cuota máxima permitida (3 libros). Debe devolver uno antes de solicitar otro.</p>`;
  }
  
  document.getElementById('student-info-box').innerHTML = `
    <div class="info-card ${hasFines ? 'danger' : (isAtLimit ? 'warning' : 'success')}">
      <div class="info-row">
        <span class="info-label">Alumno:</span>
        <span class="info-val">${student.name}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Matrícula:</span>
        <span class="info-val"><code>${student.matricula}</code></span>
      </div>
      <div class="info-row">
        <span class="info-label">Carrera:</span>
        <span class="info-val">${student.career}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Libros en poder:</span>
        <span class="info-val"><strong>${student.activeLoans}</strong> de 3 permitidos</span>
      </div>
      <div class="info-row" style="margin-top:8px;">
        <span class="info-label">Estado de Validación:</span>
        <div>${validationBadge}</div>
      </div>
      ${alertMsg}
    </div>
  `;
  
  checkCanSubmitLoan();
}

function scanBook(barcodeInput) {
  const val = (barcodeInput || document.getElementById('input-book-scan').value).trim().toUpperCase();
  if (!val) {
    showToast("Ingresa o escanea el código de barras del ejemplar.", "warning");
    return;
  }
  
  let foundCopy = null;
  let parentBook = null;
  
  for (const b of appData.books) {
    const c = b.copies.find(cp => cp.barcode.toUpperCase() === val);
    if (c) {
      foundCopy = c;
      parentBook = b;
      break;
    }
  }
  
  if (!foundCopy) {
    playBeep(true);
    showToast(`Código de barras [${val}] no registrado en inventario.`, "danger");
    document.getElementById('book-info-box').innerHTML = `
      <div class="info-card danger">
        <strong>⚠️ ERROR DE CATÁLOGO:</strong> El ejemplar con código <code>${val}</code> no existe en el acervo físico.
      </div>
    `;
    selectedBookCopy = null;
    checkCanSubmitLoan();
    return;
  }
  
  playBeep(false);
  selectedBookCopy = { copy: foundCopy, book: parentBook };
  
  const isAvailable = foundCopy.status === "DISPONIBLE";
  let statusBadge = "";
  let alertMsg = "";
  
  if (foundCopy.status === "DISPONIBLE") {
    statusBadge = `<span class="badge badge-success">✓ Disponible en Estantería</span>`;
  } else if (foundCopy.status === "PRESTADO") {
    statusBadge = `<span class="badge badge-danger">⛔ Prestado Actualmente</span>`;
    alertMsg = `<p style="color:#DC2626; font-weight:600; margin-top:6px;">Este ejemplar físico ya está en manos de otro usuario. No se puede prestar de nuevo.</p>`;
  } else {
    statusBadge = `<span class="badge badge-maint">🔧 En Mantenimiento / Reparación</span>`;
    alertMsg = `<p style="color:#4B5563; font-weight:600; margin-top:6px;">El ejemplar está retenido por restauración física.</p>`;
  }
  
  document.getElementById('book-info-box').innerHTML = `
    <div class="info-card ${isAvailable ? 'success' : 'danger'}">
      <div class="info-row">
        <span class="info-label">Título:</span>
        <span class="info-val"><strong>${parentBook.title}</strong></span>
      </div>
      <div class="info-row">
        <span class="info-label">Autores:</span>
        <span class="info-val">${parentBook.author}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Edición / Editorial:</span>
        <span class="info-val">${parentBook.edition} • ${parentBook.editorial}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Código Ejemplar:</span>
        <span class="info-val"><code>${foundCopy.barcode}</code></span>
      </div>
      <div class="info-row">
        <span class="info-label">Ubicación Física:</span>
        <span class="info-val">${foundCopy.location}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Condición Previa:</span>
        <span class="info-val"><span class="badge badge-primary">${foundCopy.condition}</span></span>
      </div>
      <div class="info-row" style="margin-top:8px;">
        <span class="info-label">Disponibilidad:</span>
        <div>${statusBadge}</div>
      </div>
      ${alertMsg}
    </div>
  `;
  
  checkCanSubmitLoan();
}

function checkCanSubmitLoan() {
  const btn = document.getElementById('btn-confirm-loan');
  if (!btn) return;
  
  const studentValid = selectedStudent && selectedStudent.status === "ACTIVO" && selectedStudent.fines === 0 && selectedStudent.activeLoans < 3;
  const bookValid = selectedBookCopy && selectedBookCopy.copy.status === "DISPONIBLE";
  
  btn.disabled = !(studentValid && bookValid);
}

function executeLoan() {
  if (!selectedStudent || !selectedBookCopy) return;
  
  const loanDays = parseInt(document.getElementById('select-loan-days').value) || 3;
  const now = new Date(simulatedDate);
  const due = new Date(simulatedDate.getTime() + loanDays * 24 * 3600 * 1000);
  
  const loanId = "LN-" + (1000 + appData.loans.length + 1);
  
  const newLoan = {
    id: loanId,
    studentId: selectedStudent.id,
    studentName: selectedStudent.name,
    matricula: selectedStudent.matricula,
    bookBarcode: selectedBookCopy.copy.barcode,
    bookTitle: `${selectedBookCopy.book.title} (${selectedBookCopy.book.edition})`,
    loanDate: now.toISOString(),
    dueDate: due.toISOString(),
    returnDate: null,
    status: "VIGENTE",
    fine: 0,
    initialCondition: selectedBookCopy.copy.condition,
    returnCondition: null
  };
  
  // Actualizar estados
  selectedBookCopy.copy.status = "PRESTADO";
  selectedStudent.activeLoans += 1;
  appData.loans.unshift(newLoan);
  appData.stats.processedRequests += 1;
  
  saveData();
  playBeep(false);
  
  // Mostrar recibo / ticket digital
  showReceiptModal(newLoan);
  
  // Limpiar formulario
  selectedStudent = null;
  selectedBookCopy = null;
  document.getElementById('input-student-scan').value = "";
  document.getElementById('input-book-scan').value = "";
  document.getElementById('student-info-box').innerHTML = "";
  document.getElementById('book-info-box').innerHTML = "";
  checkCanSubmitLoan();
  
  showToast(`¡Préstamo [${loanId}] registrado exitosamente! Se emitió comprobante digital.`, "success");
}

function showReceiptModal(loan) {
  const body = document.getElementById('receipt-modal-content');
  body.innerHTML = `
    <div class="receipt-box">
      <h4>UNIVERSIDAD TECNOLÓGICA DE SAN JUAN DEL RÍO</h4>
      <p style="text-align:center; font-weight:bold; margin-bottom:8px;">UNIDAD ACADÉMICA JALPAN • BIBLIOTECA</p>
      <div style="border-top:1px dashed #FDE68A; padding-top:6px; margin-bottom:6px;">
        <div><strong>FOLIO PRÉSTAMO:</strong> ${loan.id}</div>
        <div><strong>MATRÍCULA:</strong> ${loan.matricula}</div>
        <div><strong>ALUMNO:</strong> ${loan.studentName}</div>
      </div>
      <div style="border-top:1px dashed #FDE68A; padding-top:6px; margin-bottom:6px;">
        <div><strong>LIBRO:</strong> ${loan.bookTitle}</div>
        <div><strong>CÓDIGO DE BARRAS:</strong> ${loan.bookBarcode}</div>
        <div><strong>CONDICIÓN ENTREGADA:</strong> ${loan.initialCondition}</div>
      </div>
      <div style="border-top:1px dashed #FDE68A; padding-top:6px; margin-bottom:6px;">
        <div><strong>FECHA SALIDA:</strong> ${formatDate(loan.loanDate)}</div>
        <div style="color:#B45309; font-size:13px; font-weight:bold;"><strong>FECHA LÍMITE ENTREGA:</strong> ${formatDate(loan.dueDate)}</div>
      </div>
      <p style="font-size:11px; text-align:center; margin-top:8px; font-style:italic;">
        * Se elimina el préstamo 'de palabra'. Alumno sujeto a sanción de $10.00/día por mora y bloqueo en Servicios Escolares tras 5 días de retraso.
      </p>
    </div>
  `;
  document.getElementById('receipt-modal').classList.add('active');
}

// ─── 5. DEVOLUCIONES E INSPECCIÓN FÍSICA ───────────────────────────────────
let loanToReturn = null;

function prepareReturn(barcode) {
  const loan = appData.loans.find(l => l.bookBarcode === barcode && !l.returnDate);
  if (!loan) {
    showToast(`No se encontró un préstamo activo para el código [${barcode}].`, "danger");
    return;
  }
  
  loanToReturn = loan;
  const now = simulatedDate.getTime();
  const due = new Date(loan.dueDate).getTime();
  const diffMs = due - now;
  const isOverdue = diffMs < 0;
  
  let fineAmount = 0;
  if (isOverdue) {
    const daysLate = Math.ceil(Math.abs(diffMs) / (1000 * 3600 * 24));
    fineAmount = daysLate * 10.00;
  }
  
  const modalContent = document.getElementById('return-modal-content');
  modalContent.innerHTML = `
    <div style="margin-bottom:14px;">
      <p><strong>Folio:</strong> ${loan.id} • <strong>Alumno:</strong> ${loan.studentName} (<code>${loan.matricula}</code>)</p>
      <p><strong>Libro:</strong> ${loan.bookTitle} • <code>${loan.bookBarcode}</code></p>
      <p><strong>Fecha Salida:</strong> ${formatDate(loan.loanDate)} • <strong>Fecha Límite:</strong> ${formatDate(loan.dueDate)}</p>
    </div>
    
    <div class="info-card ${isOverdue ? 'danger' : 'success'}" style="margin-bottom:14px;">
      <div class="info-row">
        <span class="info-label">Estado de Tiempo:</span>
        <span class="info-val">${isOverdue ? '⚠️ VENCIDO / EN MORA' : '✓ A TIEMPO'}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Multa por retraso:</span>
        <span class="info-val" style="color:${isOverdue ? '#DC2626' : '#059669'}; font-size:15px; font-weight:bold;">$${fineAmount.toFixed(2)} MXN</span>
      </div>
    </div>
    
    <div class="form-group">
      <label class="form-label">Inspección Física al Recibir el Libro:</label>
      <select id="return-condition-select" class="input-text">
        <option value="Excelente">Excelente (Sin alteraciones ni daños)</option>
        <option value="Bueno" selected>Bueno (Desgaste normal por uso)</option>
        <option value="Regular">Regular (Lomo o cubiertas con desgaste)</option>
        <option value="Con Daño / Rayaduras">Con Daño / Mutilado / Rayaduras (Requiere multa por daño)</option>
      </select>
    </div>
    
    <div class="form-group">
      <label class="form-label">Observaciones del Gestor:</label>
      <input type="text" id="return-notes-input" class="input-text" placeholder="Ej. Hojas completas, devuelto en mostrador...">
    </div>
  `;
  
  document.getElementById('return-modal').classList.add('active');
}

function confirmReturn() {
  if (!loanToReturn) return;
  
  const returnCond = document.getElementById('return-condition-select').value;
  const notes = document.getElementById('return-notes-input').value;
  
  loanToReturn.returnDate = simulatedDate.toISOString();
  loanToReturn.returnCondition = returnCond;
  loanToReturn.status = "DEVUELTO";
  
  // Liberar el ejemplar físico en el catálogo
  for (const b of appData.books) {
    const cp = b.copies.find(c => c.barcode === loanToReturn.bookBarcode);
    if (cp) {
      cp.status = "DISPONIBLE";
      cp.condition = returnCond;
      break;
    }
  }
  
  // Decrementar préstamos activos del alumno
  const student = appData.students.find(s => s.id === loanToReturn.studentId);
  if (student) {
    student.activeLoans = Math.max(0, student.activeLoans - 1);
    // Si tenía multas pagadas o regularizadas
    if (student.activeLoans === 0 && loanToReturn.fine === 0) {
      student.status = "ACTIVO";
      student.fines = 0;
    }
  }
  
  appData.stats.processedRequests += 1;
  saveData();
  playBeep(false);
  
  closeModal('return-modal');
  showToast(`Libro [${loanToReturn.bookBarcode}] devuelto exitosamente. Reingresado a inventario disponible.`, "success");
  loanToReturn = null;
}

// ─── 6. ALERTAS Y NOTIFICACIONES PREVENTIVAS (ANTI-OLVIDO) ─────────────────
function sendPreventiveAlert(loanId) {
  const loan = appData.loans.find(l => l.id === loanId);
  if (!loan) return;
  
  showToast(`🔔 Alerta preventiva enviada a ${loan.studentName} vía Correo y Notificación Móvil.`, "warning");
}

function reportToSchoolServices(loanId) {
  const loan = appData.loans.find(l => l.id === loanId);
  if (!loan) return;
  
  showToast(`🚨 Reporte de Sustracción emitido a Servicios Escolares para matrícula ${loan.matricula}. Bloqueo de trámites aplicado.`, "danger");
}

// ─── 7. RENDERIZADO DE INTERFAZ DE USUARIO ─────────────────────────────────
function updateUI() {
  renderMetrics();
  renderLoansTable();
  renderCatalog();
  renderStudents();
  renderClock();
}

function renderClock() {
  const clockEl = document.getElementById('clock-display');
  if (clockEl) {
    clockEl.textContent = simulatedDate.toLocaleDateString("es-MX", { 
      weekday: 'short', day: '2-digit', month: 'short', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    });
  }
}

function renderMetrics() {
  let totalCopies = 0;
  let availCopies = 0;
  
  appData.books.forEach(b => {
    b.copies.forEach(c => {
      totalCopies++;
      if (c.status === "DISPONIBLE") availCopies++;
    });
  });
  
  const activeLoans = appData.loans.filter(l => !l.returnDate).length;
  const overdueLoans = appData.loans.filter(l => !l.returnDate && l.status === "EN_MORA").length;
  
  document.getElementById('metric-total-copies').textContent = totalCopies;
  document.getElementById('metric-active-loans').textContent = activeLoans;
  document.getElementById('metric-overdue-loans').textContent = overdueLoans;
  document.getElementById('metric-avail-copies').textContent = availCopies;
  document.getElementById('metric-requests').textContent = appData.stats.processedRequests;
  
  document.getElementById('tab-count-loans').textContent = activeLoans;
  document.getElementById('tab-count-books').textContent = totalCopies;
  document.getElementById('tab-count-students').textContent = appData.students.length;
}

function renderLoansTable() {
  const tbody = document.getElementById('loans-table-body');
  if (!tbody) return;
  
  const activeLoans = appData.loans.filter(l => !l.returnDate);
  
  if (activeLoans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#64748B; padding:24px;">No hay libros prestados actualmente. Todos están en estantería.</td></tr>`;
    return;
  }
  
  tbody.innerHTML = activeLoans.map(l => {
    let badgeClass = "badge-primary";
    let statusLabel = "Vigente";
    if (l.status === "POR_VENCER") {
      badgeClass = "badge-warning";
      statusLabel = "Vence en <24h";
    } else if (l.status === "EN_MORA") {
      badgeClass = "badge-danger";
      statusLabel = `En Mora (Multa: $${l.fine.toFixed(2)})`;
    }
    
    return `
      <tr>
        <td><strong>${l.id}</strong></td>
        <td>
          <div class="table-title-cell">${l.studentName}</div>
          <div class="table-sub-cell">Matrícula: <code>${l.matricula}</code></div>
        </td>
        <td>
          <div class="table-title-cell">${l.bookTitle}</div>
          <div class="table-sub-cell">Código: <code>${l.bookBarcode}</code></div>
        </td>
        <td>${formatDate(l.loanDate)}</td>
        <td><strong>${formatDate(l.dueDate)}</strong></td>
        <td><span class="badge ${badgeClass}">${statusLabel}</span></td>
        <td>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn-primary" style="padding:4px 8px; font-size:12px;" onclick="prepareReturn('${l.bookBarcode}')">Devolver</button>
            ${l.status === 'POR_VENCER' ? `<button class="btn-secondary" style="padding:4px 8px; font-size:11px;" onclick="sendPreventiveAlert('${l.id}')">🔔 Alertar</button>` : ''}
            ${l.status === 'EN_MORA' ? `<button class="btn-danger" style="padding:4px 8px; font-size:11px;" onclick="reportToSchoolServices('${l.id}')">🚨 Bloquear</button>` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderCatalog() {
  const container = document.getElementById('catalog-table-body');
  if (!container) return;
  
  const query = (document.getElementById('search-catalog-input')?.value || "").toLowerCase();
  const filter = document.getElementById('filter-catalog-status')?.value || "ALL";
  
  let rowsHtml = "";
  
  appData.books.forEach(b => {
    b.copies.forEach(cp => {
      // Filtrado
      if (filter === "AVAILABLE" && cp.status !== "DISPONIBLE") return;
      if (filter === "LOANED" && cp.status !== "PRESTADO") return;
      if (filter === "MAINTENANCE" && cp.status !== "EN_REPARACION") return;
      
      const matchText = `${b.title} ${b.author} ${b.category} ${b.isbn} ${cp.barcode} ${cp.location}`.toLowerCase();
      if (query && !matchText.includes(query)) return;
      
      let badge = `<span class="badge badge-success">Disponible</span>`;
      if (cp.status === "PRESTADO") badge = `<span class="badge badge-primary">Prestado</span>`;
      if (cp.status === "EN_REPARACION") badge = `<span class="badge badge-maint">En Reparación</span>`;
      
      rowsHtml += `
        <tr>
          <td><code>${cp.barcode}</code></td>
          <td>
            <div class="table-title-cell">${b.title}</div>
            <div class="table-sub-cell">${b.author} • ${b.edition} (${b.year}) • ${b.editorial}</div>
          </td>
          <td><span class="badge badge-primary">${b.category}</span></td>
          <td>${cp.location}</td>
          <td><span class="badge badge-warning">${cp.condition}</span></td>
          <td>${badge}</td>
          <td>
            ${cp.status === 'DISPONIBLE' ? `
              <button class="pill-btn" onclick="quickSelectBook('${cp.barcode}')">Prestar</button>
            ` : (cp.status === 'PRESTADO' ? `
              <button class="pill-btn" onclick="prepareReturn('${cp.barcode}')">Recibir</button>
            ` : '-')}
          </td>
        </tr>
      `;
    });
  });
  
  container.innerHTML = rowsHtml || `<tr><td colspan="7" style="text-align:center; padding:20px; color:#64748B;">No se encontraron libros coincidentes.</td></tr>`;
}

function renderStudents() {
  const tbody = document.getElementById('students-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = appData.students.map(s => {
    let badge = `<span class="badge badge-success">Regular / Activo</span>`;
    if (s.status === "SANCIONADO" || s.fines > 0) {
      badge = `<span class="badge badge-danger">Sancionado ($${s.fines.toFixed(2)})</span>`;
    }
    
    return `
      <tr>
        <td><code>${s.matricula}</code></td>
        <td><strong>${s.name}</strong></td>
        <td>${s.career}</td>
        <td><strong>${s.activeLoans}</strong> de 3</td>
        <td>$${s.fines.toFixed(2)} MXN</td>
        <td>${badge}</td>
        <td>
          <button class="pill-btn" onclick="quickSelectStudent('${s.matricula}')">Elegir en Mostrador</button>
        </td>
      </tr>
    `;
  }).join('');
}

function quickSelectStudent(mat) {
  switchTab('tab-mostrador');
  document.getElementById('input-student-scan').value = mat;
  scanStudent(mat);
}

function quickSelectBook(bar) {
  switchTab('tab-mostrador');
  document.getElementById('input-book-scan').value = bar;
  scanBook(bar);
}

// ─── 8. GESTIÓN DE PESTAÑAS Y MODALES ──────────────────────────────────────
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.toggle('active', view.id === tabId);
  });
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function showToast(msg, type = "info") {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${msg}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ─── 9. EVENT LISTENERS E INICIALIZACIÓN ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Configurar tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });
  
  // Teclas rápidas en inputs de escáner
  document.getElementById('input-student-scan')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') scanStudent();
  });
  
  document.getElementById('input-book-scan')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') scanBook();
  });
  
  document.getElementById('search-catalog-input')?.addEventListener('input', renderCatalog);
  document.getElementById('filter-catalog-status')?.addEventListener('change', renderCatalog);
  
  // Recalcular estados iniciales e iniciar UI
  recalculateLoanStatuses();
  updateUI();
});
