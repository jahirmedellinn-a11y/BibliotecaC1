// datos de los libros para la biblioteca

const MEXICAN_CATEGORIES = [
  "Novela Mexicana",
  "Cuento y Ficción",
  "Poesía Mexicana",
  "Ensayo y Pensamiento",
  "Crónica y Testimonio",
  "Historia y Antropología",
  "Literatura Contemporánea",
  "Ciencia y Divulgación Mexicana",
  "Ciencias Exactas y Matemáticas"
];

const MEXICAN_BOOKS_DATABASE = [
  {
    id: "BK01",
    isbn: "978-607-16-0001-1",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    edition: "Edición Conmemorativa",
    editorial: "Fondo de Cultura Económica",
    year: 1955,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-001", location: "Pasillo 1, Estante A-1", condition: "Excelente", status: "PRESTADO", lastAuditDate: "2026-09-10", auditNotes: "Préstamo activo verificado" },
      { barcode: "UTSJR-LIB-002", location: "Pasillo 1, Estante A-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "En estantería" },
      { barcode: "UTSJR-LIB-003", location: "Pasillo 1, Estante A-1", condition: "Regular", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "Lomo reparado con cinta adhesiva de archivo" }
    ]
  },
  {
    id: "BK02",
    isbn: "978-607-16-0158-2",
    title: "El laberinto de la soledad",
    author: "Octavio Paz",
    edition: "4ª Edición Definitiva",
    editorial: "Fondo de Cultura Económica",
    year: 1950,
    category: "Ensayo y Pensamiento",
    copies: [
      { barcode: "UTSJR-LIB-004", location: "Pasillo 2, Estante B-1", condition: "Excelente", status: "PRESTADO", lastAuditDate: "2026-09-12", auditNotes: "Préstamo escolar activo" },
      { barcode: "UTSJR-LIB-005", location: "Pasillo 2, Estante B-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-12", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK03",
    isbn: "978-607-16-0542-9",
    title: "La región más transparente",
    author: "Carlos Fuentes",
    edition: "50 Aniversario",
    editorial: "Fondo de Cultura Económica",
    year: 1958,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-006", location: "Pasillo 1, Estante A-2", condition: "Bueno", status: "PRESTADO", lastAuditDate: "2026-09-08", auditNotes: "Préstamo en mora detectado" },
      { barcode: "UTSJR-LIB-007", location: "Pasillo 1, Estante A-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-08", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK04",
    isbn: "978-607-445-037-8",
    title: "Aura",
    author: "Carlos Fuentes",
    edition: "12ª Reimpresión",
    editorial: "Ediciones Era",
    year: 1962,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-008", location: "Pasillo 1, Estante B-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-14", auditNotes: "Buen estado físico" },
      { barcode: "UTSJR-LIB-009", location: "Pasillo 1, Estante B-1", condition: "Dañado", status: "EN_REPARACION", lastAuditDate: "2026-09-14", auditNotes: "Hojas desprendidas, requiere encuadernación técnica" }
    ]
  },
  {
    id: "BK05",
    isbn: "978-607-445-055-2",
    title: "Las batallas en el desierto",
    author: "José Emilio Pacheco",
    edition: "Edición Ilustrada",
    editorial: "Ediciones Era",
    year: 1981,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-010", location: "Pasillo 1, Estante A-3", condition: "Excelente", status: "PRESTADO", lastAuditDate: "2026-09-11", auditNotes: "Préstamo vigente" },
      { barcode: "UTSJR-LIB-011", location: "Pasillo 1, Estante A-3", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "En estantería disponible" },
      { barcode: "UTSJR-LIB-012", location: "Pasillo 1, Estante A-3", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK06",
    isbn: "978-607-07-2852-5",
    title: "Como agua para chocolate",
    author: "Laura Esquivel",
    edition: "Edición de Bolsillo",
    editorial: "Editorial Planeta México",
    year: 1989,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-013", location: "Pasillo 1, Estante C-1", condition: "Excelente", status: "PRESTADO", lastAuditDate: "2026-09-15", auditNotes: "Préstamo escolar asignado" },
      { barcode: "UTSJR-LIB-014", location: "Pasillo 1, Estante C-1", condition: "Bueno", status: "PRESTADO", lastAuditDate: "2026-09-15", auditNotes: "Préstamo escolar asignado" }
    ]
  },
  {
    id: "BK07",
    isbn: "978-607-16-0002-8",
    title: "El llano en llamas",
    author: "Juan Rulfo",
    edition: "Edición Colegial",
    editorial: "Fondo de Cultura Económica",
    year: 1953,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-015", location: "Pasillo 1, Estante A-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "Disponible para lectura" }
    ]
  },
  {
    id: "BK08",
    isbn: "978-607-445-001-9",
    title: "La noche de Tlatelolco",
    author: "Elena Poniatowska",
    edition: "Edición Testimonial",
    editorial: "Ediciones Era",
    year: 1971,
    category: "Crónica y Testimonio",
    copies: [
      { barcode: "UTSJR-LIB-016", location: "Pasillo 2, Estante C-3", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-12", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK09",
    isbn: "978-607-07-4221-7",
    title: "Los relámpagos de agosto",
    author: "Jorge Ibargüengoitia",
    edition: "1ª Reimpresión",
    editorial: "Joaquín Mortiz / Planeta",
    year: 1964,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-017", location: "Pasillo 1, Estante B-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-05", auditNotes: "Revisado sin novedad" }
    ]
  },
  {
    id: "BK10",
    isbn: "978-607-07-3561-5",
    title: "Estas ruinas que ves",
    author: "Jorge Ibargüengoitia",
    edition: "Edición Especial",
    editorial: "Joaquín Mortiz / Planeta",
    year: 1975,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-018", location: "Pasillo 1, Estante B-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-05", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK11",
    isbn: "978-607-16-1120-8",
    title: "Balún Canán",
    author: "Rosario Castellanos",
    edition: "Colección Popular",
    editorial: "Fondo de Cultura Económica",
    year: 1957,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-019", location: "Pasillo 1, Estante C-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-07", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK12",
    isbn: "978-607-07-2914-0",
    title: "Oficio de tinieblas",
    author: "Rosario Castellanos",
    edition: "Edición Crítica",
    editorial: "Joaquín Mortiz / Planeta",
    year: 1962,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-020", location: "Pasillo 1, Estante C-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-07", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK13",
    isbn: "978-607-445-052-1",
    title: "Hasta no verte Jesús mío",
    author: "Elena Poniatowska",
    edition: "4ª Edición",
    editorial: "Ediciones Era",
    year: 1969,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-021", location: "Pasillo 2, Estante C-3", condition: "Regular", status: "DISPONIBLE", lastAuditDate: "2026-09-09", auditNotes: "Desgaste natural de uso" }
    ]
  },
  {
    id: "BK14",
    isbn: "978-607-31-1502-5",
    title: "Arráncame la vida",
    author: "Ángeles Mastretta",
    edition: "Edición de Bolsillo",
    editorial: "Alfaguara México",
    year: 1985,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-022", location: "Pasillo 1, Estante D-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-12", auditNotes: "En estantería disponible" },
      { barcode: "UTSJR-LIB-023", location: "Pasillo 1, Estante D-1", condition: "No localizado", status: "EXTRAVIADO", lastAuditDate: "2026-09-12", auditNotes: "No localizado en auditoría periódica de pasillo 1" }
    ]
  },
  {
    id: "BK15",
    isbn: "978-607-31-2901-5",
    title: "Mal de amores",
    author: "Ángeles Mastretta",
    edition: "2ª Edición",
    editorial: "Alfaguara México",
    year: 1996,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-024", location: "Pasillo 1, Estante D-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-12", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK16",
    isbn: "978-607-16-0170-4",
    title: "Los de abajo",
    author: "Mariano Azuela",
    edition: "Edición del Centenario",
    editorial: "Fondo de Cultura Económica",
    year: 1916,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-025", location: "Pasillo 2, Estante A-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-06", auditNotes: "Buen estado físico" }
    ]
  },
  {
    id: "BK17",
    isbn: "978-607-07-1482-5",
    title: "El complot mongol",
    author: "Rafael Bernal",
    edition: "Edición Policial Clásica",
    editorial: "Joaquín Mortiz",
    year: 1969,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-026", location: "Pasillo 2, Estante B-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK18",
    isbn: "978-607-11-2090-8",
    title: "Noticias del Imperio",
    author: "Fernando del Paso",
    edition: "Edición de Lujo",
    editorial: "Editorial Diana / Planeta",
    year: 1987,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-027", location: "Pasillo 2, Estante D-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-08", auditNotes: "Tomo completo" }
    ]
  },
  {
    id: "BK19",
    isbn: "978-607-31-3140-7",
    title: "Palinuro de México",
    author: "Fernando del Paso",
    edition: "1ª Reimpresión",
    editorial: "Alfaguara México",
    year: 1977,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-028", location: "Pasillo 2, Estante D-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-08", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK20",
    isbn: "978-607-16-0043-1",
    title: "El libro salvaje",
    author: "Juan Villoro",
    edition: "Colección A la Orilla del Viento",
    editorial: "Fondo de Cultura Económica",
    year: 2008,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-029", location: "Pasillo 3, Estante A-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "Ejemplar en óptimas condiciones" }
    ]
  },
  {
    id: "BK21",
    isbn: "978-607-8430-10-9",
    title: "Los culpables",
    author: "Juan Villoro",
    edition: "2ª Edición",
    editorial: "Editorial Almadía",
    year: 2007,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-030", location: "Pasillo 3, Estante A-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK22",
    isbn: "978-607-16-2003-3",
    title: "Primero sueño y otros poemas",
    author: "Sor Juana Inés de la Cruz",
    edition: "Edición Anotada",
    editorial: "Fondo de Cultura Económica",
    year: 1692,
    category: "Poesía Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-031", location: "Pasillo 3, Estante B-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-05", auditNotes: "Acervo de poesía colonial" }
    ]
  },
  {
    id: "BK23",
    isbn: "978-970-32-2804-1",
    title: "Inundación castálida",
    author: "Sor Juana Inés de la Cruz",
    edition: "Facsimilar Crítica",
    editorial: "UNAM - Instituto de Investigaciones Filológicas",
    year: 1689,
    category: "Poesía Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-032", location: "Pasillo 3, Estante B-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-05", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK24",
    isbn: "978-607-16-1050-8",
    title: "Visión de Anáhuac",
    author: "Alfonso Reyes",
    edition: "Colección Tezontle",
    editorial: "Fondo de Cultura Económica",
    year: 1917,
    category: "Ensayo y Pensamiento",
    copies: [
      { barcode: "UTSJR-LIB-033", location: "Pasillo 2, Estante B-3", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-09", auditNotes: "Clásico del ensayo mexicano" }
    ]
  },
  {
    id: "BK25",
    isbn: "978-607-16-0810-9",
    title: "La suave patria y otros poemas",
    author: "Ramón López Velarde",
    edition: "Edición Conmemorativa",
    editorial: "Fondo de Cultura Económica",
    year: 1921,
    category: "Poesía Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-034", location: "Pasillo 3, Estante B-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-07", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK26",
    isbn: "978-970-07-6401-6",
    title: "El Periquillo Sarniento",
    author: "José Joaquín Fernández de Lizardi",
    edition: "Colección Sepan Cuantos",
    editorial: "Editorial Porrúa",
    year: 1816,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-035", location: "Pasillo 1, Estante E-1", condition: "Regular", status: "DISPONIBLE", lastAuditDate: "2026-09-13", auditNotes: "Edición clásica de consulta" }
    ]
  },
  {
    id: "BK27",
    isbn: "978-607-31-8978-1",
    title: "Salvar el fuego",
    author: "Guillermo Arriaga",
    edition: "Premio Alfaguara de Novela",
    editorial: "Alfaguara México",
    year: 2020,
    category: "Literatura Contemporánea",
    copies: [
      { barcode: "UTSJR-LIB-036", location: "Pasillo 4, Estante A-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-14", auditNotes: "Novedad en acervo" }
    ]
  },
  {
    id: "BK28",
    isbn: "978-607-31-4921-1",
    title: "El salvaje",
    author: "Guillermo Arriaga",
    edition: "1ª Reimpresión",
    editorial: "Alfaguara México",
    year: 2016,
    category: "Literatura Contemporánea",
    copies: [
      { barcode: "UTSJR-LIB-037", location: "Pasillo 4, Estante A-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-14", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK29",
    isbn: "978-970-07-5510-6",
    title: "Santa",
    author: "Federico Gamboa",
    edition: "Colección Sepan Cuantos",
    editorial: "Editorial Porrúa",
    year: 1903,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-038", location: "Pasillo 1, Estante E-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-06", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK30",
    isbn: "978-607-16-0230-5",
    title: "Canek: Historia y leyenda de un héroe maya",
    author: "Ermilo Abreu Gómez",
    edition: "Colección Popular",
    editorial: "Fondo de Cultura Económica",
    year: 1940,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-039", location: "Pasillo 3, Estante A-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-09", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK31",
    isbn: "978-607-31-5285-3",
    title: "Temporada de huracanes",
    author: "Fernanda Melchor",
    edition: "1ª Edición",
    editorial: "Literatura Random House México",
    year: 2017,
    category: "Literatura Contemporánea",
    copies: [
      { barcode: "UTSJR-LIB-040", location: "Pasillo 4, Estante B-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK32",
    isbn: "978-607-38-0050-1",
    title: "Páradais",
    author: "Fernanda Melchor",
    edition: "1ª Edición",
    editorial: "Literatura Random House México",
    year: 2021,
    category: "Literatura Contemporánea",
    copies: [
      { barcode: "UTSJR-LIB-041", location: "Pasillo 4, Estante B-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK33",
    isbn: "978-607-07-0809-1",
    title: "Confabulario",
    author: "Juan José Arreola",
    edition: "Edición Definitiva",
    editorial: "Joaquín Mortiz",
    year: 1952,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-042", location: "Pasillo 3, Estante C-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK34",
    isbn: "978-607-07-2005-5",
    title: "La feria",
    author: "Juan José Arreola",
    edition: "2ª Reimpresión",
    editorial: "Joaquín Mortiz",
    year: 1963,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-043", location: "Pasillo 3, Estante C-1", condition: "Regular", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK35",
    isbn: "978-607-8619-30-6",
    title: "Desierto sonoro",
    author: "Valeria Luiselli",
    edition: "1ª Edición",
    editorial: "Editorial Sexto Piso México",
    year: 2019,
    category: "Literatura Contemporánea",
    copies: [
      { barcode: "UTSJR-LIB-044", location: "Pasillo 4, Estante C-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-13", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK36",
    isbn: "978-607-7781-12-7",
    title: "Los ingrávidos",
    author: "Valeria Luiselli",
    edition: "1ª Reimpresión",
    editorial: "Editorial Sexto Piso México",
    year: 2011,
    category: "Literatura Contemporánea",
    copies: [
      { barcode: "UTSJR-LIB-045", location: "Pasillo 4, Estante C-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-13", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK37",
    isbn: "978-607-16-0180-3",
    title: "La sombra del Caudillo",
    author: "Martín Luis Guzmán",
    edition: "Colección Conmemorativa",
    editorial: "Fondo de Cultura Económica",
    year: 1929,
    category: "Historia y Antropología",
    copies: [
      { barcode: "UTSJR-LIB-046", location: "Pasillo 2, Estante A-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-06", auditNotes: "Novela histórica de la Revolución" }
    ]
  },
  {
    id: "BK38",
    isbn: "978-607-16-0185-8",
    title: "El águila y la serpiente",
    author: "Martín Luis Guzmán",
    edition: "Edición Anotada",
    editorial: "Fondo de Cultura Económica",
    year: 1928,
    category: "Historia y Antropología",
    copies: [
      { barcode: "UTSJR-LIB-047", location: "Pasillo 2, Estante A-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-06", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK39",
    isbn: "978-970-32-1405-1",
    title: "Visión de los vencidos: Relaciones indígenas de la Conquista",
    author: "Miguel León-Portilla",
    edition: "30ª Edición Aumentada",
    editorial: "UNAM - Dirección General de Publicaciones",
    year: 1959,
    category: "Historia y Antropología",
    copies: [
      { barcode: "UTSJR-LIB-048", location: "Pasillo 2, Estante D-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "Texto fundamental de historia de México" }
    ]
  },
  {
    id: "BK40",
    isbn: "978-607-16-0130-8",
    title: "Quetzalcóatl y Guadalupe: La formación de la conciencia nacional",
    author: "Jacques Lafaye & Octavio Paz (Prólogo)",
    edition: "3ª Edición",
    editorial: "Fondo de Cultura Económica",
    year: 1977,
    category: "Historia y Antropología",
    copies: [
      { barcode: "UTSJR-LIB-049", location: "Pasillo 2, Estante D-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK41",
    isbn: "978-968-24-7890-5",
    title: "Breve historia de México",
    author: "José Vasconcelos",
    edition: "Edición Escolar",
    editorial: "Editorial Trillas",
    year: 1937,
    category: "Historia y Antropología",
    copies: [
      { barcode: "UTSJR-LIB-050", location: "Pasillo 2, Estante D-3", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-04", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK42",
    isbn: "978-607-16-0040-0",
    title: "Ulises criollo",
    author: "José Vasconcelos",
    edition: "Edición Conmemorativa",
    editorial: "Fondo de Cultura Económica",
    year: 1935,
    category: "Crónica y Testimonio",
    copies: [
      { barcode: "UTSJR-LIB-051", location: "Pasillo 2, Estante C-2", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-04", auditNotes: "Autobiografía del autor" }
    ]
  },
  {
    id: "BK43",
    isbn: "978-607-07-1900-4",
    title: "Poesía completa",
    author: "Jaime Sabines",
    edition: "Edición Aumentada",
    editorial: "Joaquín Mortiz",
    year: 1997,
    category: "Poesía Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-052", location: "Pasillo 3, Estante B-3", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-12", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK44",
    isbn: "978-607-07-0530-4",
    title: "Los amorosos: Cartas a Chepita",
    author: "Jaime Sabines",
    edition: "1ª Reimpresión",
    editorial: "Joaquín Mortiz",
    year: 2009,
    category: "Poesía Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-053", location: "Pasillo 3, Estante B-3", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-12", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK45",
    isbn: "978-607-421-255-6",
    title: "Nadie me verá llorar",
    author: "Cristina Rivera Garza",
    edition: "Colección Andanzas",
    editorial: "Tusquets Editores México",
    year: 1999,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-054", location: "Pasillo 4, Estante D-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-14", auditNotes: "Premio Sor Juana Inés de la Cruz" }
    ]
  },
  {
    id: "BK46",
    isbn: "978-607-38-0402-8",
    title: "El invencible verano de Liliana",
    author: "Cristina Rivera Garza",
    edition: "Premio Pulitzer 2024",
    editorial: "Literatura Random House México",
    year: 2021,
    category: "Crónica y Testimonio",
    copies: [
      { barcode: "UTSJR-LIB-055", location: "Pasillo 4, Estante D-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-14", auditNotes: "Obra de no ficción testimonial" }
    ]
  },
  {
    id: "BK47",
    isbn: "978-970-07-7120-5",
    title: "Las calles de México: Leyendas y sucedidos",
    author: "Luis González Obregón",
    edition: "Colección Sepan Cuantos",
    editorial: "Editorial Porrúa",
    year: 1922,
    category: "Historia y Antropología",
    copies: [
      { barcode: "UTSJR-LIB-056", location: "Pasillo 2, Estante D-4", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-08", auditNotes: "Crónica virreinal" }
    ]
  },
  {
    id: "BK48",
    isbn: "978-607-16-0150-6",
    title: "La muerte de Artemio Cruz",
    author: "Carlos Fuentes",
    edition: "Edición Conmemorativa",
    editorial: "Fondo de Cultura Económica",
    year: 1962,
    category: "Novela Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-057", location: "Pasillo 1, Estante A-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-10", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK49",
    isbn: "978-607-445-021-7",
    title: "El principio del placer",
    author: "José Emilio Pacheco",
    edition: "Colección Biblioteca Era",
    editorial: "Ediciones Era",
    year: 1972,
    category: "Cuento y Ficción",
    copies: [
      { barcode: "UTSJR-LIB-058", location: "Pasillo 1, Estante A-3", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-11", auditNotes: "En estantería disponible" }
    ]
  },
  {
    id: "BK50",
    isbn: "978-607-16-1500-8",
    title: "De las bacterias al hombre: La evolución celular",
    author: "René Drucker Colín & Marcelino Cereijido",
    edition: "Colección La Ciencia para Todos",
    editorial: "Fondo de Cultura Económica",
    year: 1994,
    category: "Ciencia y Divulgación Mexicana",
    copies: [
      { barcode: "UTSJR-LIB-059", location: "Pasillo 5, Estante A-1", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "Divulgación científica nacional" }
    ]
  },
  {
    id: "BK51",
    isbn: "978-607-481-898-7",
    title: "Cálculo multivariable",
    author: "James Stewart",
    edition: "4ª Edición",
    editorial: "Cengage Learning México",
    year: 2002,
    category: "Ciencias Exactas y Matemáticas",
    editionNote: "⚠️ Advertencia: Errata en ejercicios del Capítulo 3. Consultar versiones recientes.",
    hasChapter3Error: true,
    highDemand: true,
    copies: [
      { barcode: "UTSJR-LIB-060", location: "Pasillo 5, Estante B-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "4ª Edición con errata en Cap. 3" },
      { barcode: "UTSJR-LIB-061", location: "Pasillo 5, Estante B-1", condition: "Regular", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "4ª Edición en estante" }
    ]
  },
  {
    id: "BK52",
    isbn: "978-607-481-899-4",
    title: "Cálculo multivariable",
    author: "James Stewart",
    edition: "5ª Edición",
    editorial: "Cengage Learning México",
    year: 2008,
    category: "Ciencias Exactas y Matemáticas",
    editionNote: "⚠️ Advertencia: Errata en fórmulas del Capítulo 3. Muy solicitada en evaluaciones.",
    hasChapter3Error: true,
    highDemand: true,
    copies: [
      { barcode: "UTSJR-LIB-062", location: "Pasillo 5, Estante B-1", condition: "Bueno", status: "PRESTADO", lastAuditDate: "2026-09-15", auditNotes: "5ª Edición prestada" },
      { barcode: "UTSJR-LIB-063", location: "Pasillo 5, Estante B-1", condition: "Bueno", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "5ª Edición disponible" }
    ]
  },
  {
    id: "BK53",
    isbn: "978-607-522-828-0",
    title: "Cálculo multivariable",
    author: "James Stewart",
    edition: "6ª Edición (Revisada)",
    editorial: "Cengage Learning México",
    year: 2012,
    category: "Ciencias Exactas y Matemáticas",
    editionNote: "✓ Versión corregida: Sin error en Capítulo 3. Recomendada para exámenes.",
    hasChapter3Error: false,
    highDemand: true,
    copies: [
      { barcode: "UTSJR-LIB-064", location: "Pasillo 5, Estante B-2", condition: "Excelente", status: "PRESTADO", lastAuditDate: "2026-09-15", auditNotes: "6ª Edición prestada por alta demanda" },
      { barcode: "UTSJR-LIB-065", location: "Pasillo 5, Estante B-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "6ª Edición disponible en estante" }
    ]
  },
  {
    id: "BK54",
    isbn: "978-607-526-551-3",
    title: "Cálculo multivariable",
    author: "James Stewart",
    edition: "7ª Edición (Actualizada)",
    editorial: "Cengage Learning México",
    year: 2018,
    category: "Ciencias Exactas y Matemáticas",
    editionNote: "✓ Última versión: Ejercicios actualizados y corrección total sin erratas.",
    hasChapter3Error: false,
    highDemand: true,
    copies: [
      { barcode: "UTSJR-LIB-066", location: "Pasillo 5, Estante B-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "7ª Edición en estante" },
      { barcode: "UTSJR-LIB-067", location: "Pasillo 5, Estante B-2", condition: "Excelente", status: "DISPONIBLE", lastAuditDate: "2026-09-15", auditNotes: "7ª Edición en estante" }
    ]
  }
];
