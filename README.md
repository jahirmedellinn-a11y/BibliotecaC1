# SIGB Escolar Jalpan • Sistema Integral de Gestión Bibliotecaria

> **Prototipo Funcional de Software • Evaluación Parcial**  
> **Asignatura:** Análisis y Diseño de Software  
> **Docente Titular:** Ing. Omar Medrano Soria  
> **Alumno:** Sánchez Ramírez Darian  
> **Programa Educativo:** TSU en Desarrollo de Software Multiplataforma  
> **Institución:** Universidad Tecnológica de San Juan del Río - Unidad Académica Jalpan  
> **Fecha:** 21 de septiembre de 2026  

---

## 🌐 Demo Interactivo en Línea (GitHub Pages)

👉 **Accede al prototipo ejecutable en vivo aquí:**  
**[https://dzly7.github.io/sigb-biblioteca-escolar-prototipo/](https://dzly7.github.io/sigb-biblioteca-escolar-prototipo/)**

---

## 🎯 Propósito del Proyecto

A partir del análisis previo de la **Fase de Planeación**, este prototipo funcional da respuesta directa y tangible a los tres problemas mayores que colapsaban la biblioteca escolar ante el incremento demográfico de la matrícula estudiantil:

1. **Superación del límite de 15 libros:** Visibilidad y trazabilidad en tiempo real del 100% de ejemplares en circulación, soportando catálogos extensos sin ceguera operativa.
2. **Erradicación del préstamo "por palabra":** Autenticación forzosa de la matrícula escolar, emisión de comprobantes digitales de salida con timestamp atómico y bloqueo automático de trámites escolares ante moras superiores a 5 días para evitar robos u olvidos.
3. **Eliminación de la asignación manual de IDs numéricos:** Digitalización con lectores ópticos de código de barras 1D/2D, fichas técnicas de libros por edición, historial de condiciones físicas del ejemplar y motor de búsqueda de alta velocidad para más de 100 solicitudes simultáneas.

---

## 📋 Respuestas a las Preguntas Guía de la Evaluación Parcial

### 1. ¿Qué es necesario para estructurar un prototipo?
Para estructurar un prototipo conforme a los fundamentos de la Ingeniería de Software (Kendall & Kendall, 2005; Pressman, 2020), es indispensable cubrir cinco elementos clave:
- **Levantamiento y Análisis de Requerimientos Previos:** Especificación clara de Requisitos Funcionales (RF) y No Funcionales (RNF) bajo estándares como IEEE 830 para evitar programar sin rumbo.
- **Definición de la Taxonomía y Alcance:** Seleccionar el tipo de prototipo adecuado (según Kendall & Kendall: *Prototipo de Características Selectas / Selected-Features Prototype* o *Primero de una Serie*) delimitando qué módulos serán interactivos y cuáles conceptuales.
- **Modelado de Flujos y Experiencia de Usuario (User Flows):** Esquemas de interacción del gestor y del alumno en mostrador antes de iniciar la maquetación.
- **Selección de Tecnologías Ágiles:** Herramientas que permitan iteración inmediata, compatibilidad multiplataforma y cero dependencias pesadas para desplegar rápidamente (HTML5 semántico, CSS3 moderno, JavaScript ES6+ reactivo).
- **Dataset de Prueba Realista:** Carga de datos que simulen el entorno real (libros por edición, estados de conservación, matrículas escolares y fechas).

### 2. ¿En esta escala el prototipo debería de ser funcional? ¿Por qué?
**SÍ, en esta escala el prototipo DEBE ser funcional (Prototipo Operativo de Características Selectas).**
- **Demostración de la Erradicación de la 'Palabra':** Un diseño estático en imagen o Figma no puede demostrar que el sistema bloquea a un alumno con mora o restringe préstamos al superar los 3 libros permitidos. Solo un motor interactivo de reglas de negocio comprueba que el algoritmo sustituye la promesa verbal.
- **Prueba de Carga y Rendimiento ante +100 Solicitudes:** Se requiere comprobar empíricamente que las búsquedas, filtros y escaneos responden en milisegundos.
- **Medición Exacta del Tiempo y Semáforo Dinámico:** Para validar el objetivo de "medir con exactitud el tiempo que un libro ha sido prestado para evitar robos u olvidos", se necesita un reloj de sistema que calcule horas hábiles, transiciones de estado a amarillo/rojo y multas en vivo.
- **Retroalimentación Empírica:** El personal bibliotecario y el docente pueden experimentar la ergonomía del mostrador y el lector óptico de forma tangible.

### 3. ¿Cómo asegurar una entrega continua y ajustar la necesidad de cambios a la entrega de artefactos?
- **Pipeline de Entrega Continua (CI/CD con GitHub):** Flujo de trabajo basado en ramas (`main` para producción y `feature/` para nuevas capacidades como arcos RFID o pagos en línea).
- **Despliegue Inmediato en GitHub Pages:** Cada `push` a la rama `main` actualiza en minutos la versión ejecutable en la nube para acceso de cualquier interesado.
- **Trazabilidad y Gestión de Cambios (GitHub Issues):** Cada sugerencia o cambio de requisitos solicitado por los bibliotecarios se gestiona mediante *Issues* y *Pull Requests*, asociando el código modificado con la actualización simultánea de la documentación (Matriz IEEE 830 y Diagramas UML).
- **Sprints Cortos y Demostraciones Incrementales:** Ciclos ágiles de 1 a 2 semanas donde el prototipo evoluciona visiblemente, reduciendo a cero el riesgo de entregar software que no cumpla las expectativas.

---

## 🚀 Características y Módulos del Prototipo

* **⚡ Mostrador de Circulación Rápida:**
  * Escáner de credencial y validación automática de estatus escolar activo, morosidad cero y tope máximo de 3 libros.
  * Escáner de código de barras del libro con verificación de disponibilidad en tiempo real.
  * Emisión de comprobante digital de préstamo con fecha y hora exacta de retorno.
  * Módulo de devolución con checklist de inspección física de conservación.
* **📊 Monitor y Semáforo de Préstamos:**
  * Semáforo visual en 3 estados: **Verde/Azul** (Vigente), **Amarillo** (Vence en menos de 24h con botón de alerta preventiva) y **Rojo** (En mora con cálculo automático de multa de $10.00 MXN/día y botón de bloqueo en Servicios Escolares).
  * Simulador de paso de tiempo (+6h, +1 día, +3 días, +7 días) para probar vencimientos en vivo.
* **📚 Catálogo e Inventario de Ejemplares:**
  * Buscador reactivo en tiempo real con soporte para alta concurrencia.
  * Control granular por edición, editorial, ubicación en pasillo/estante y condición física.
* **🎓 Padrón de Alumnos y Bloqueos:**
  * Control de sanciones, morosidad y libros en posesión por estudiante.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5 Semántico, CSS3 Moderno (CSS Grid/Flexbox, Custom Properties), JavaScript Vanilla ES6+ Reactivo.
* **Persistencia:** LocalStorage & IndexedDB API (funcionamiento offline autónomo sin configuraciones complejas).
* **Control de Versiones & CI/CD:** Git, GitHub, GitHub CLI, GitHub Pages.

---

## 👥 Presentación y Créditos

* **Alumno:** Sánchez Ramírez Darian
* **Docente:** Ing. Omar Medrano Soria
* **Asignatura:** Análisis y Diseño de Software
* **Universidad Tecnológica de San Juan del Río - Unidad Académica Jalpan**
