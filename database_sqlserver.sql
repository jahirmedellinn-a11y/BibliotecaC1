-- base de datos para el sistema de biblioteca
create database biblioteca;
go

use biblioteca;
go

-- tabla de alumnos
create table Alumno (
    matricula varchar(20) primary key,
    nombre_completo varchar(150) not null,
    carrera varchar(100),
    estatus_escolar varchar(20) default 'ACTIVO',
    libros_en_poder int default 0,
    saldo_deudor decimal(10,2) default 0.00
);
go

-- tabla de libros
create table Libro (
    id_libro varchar(10) primary key,
    titulo varchar(255) not null,
    autor varchar(255) not null,
    editorial varchar(100),
    edicion varchar(100),
    anio_publicacion int,
    categoria varchar(100),
    isbn varchar(30)
);
go

-- tabla de copias fisicas (ejemplares)
create table Ejemplar (
    codigo_barras varchar(30) primary key,
    id_libro varchar(10) foreign key references Libro(id_libro),
    ubicacion_pasillo varchar(100),
    condicion_estante varchar(100),
    estado_operativo varchar(50), 
    condicion_fisica varchar(100) 
);
go

-- tabla de prestamos
create table Prestamo (
    id_prestamo varchar(20) primary key,
    codigo_barras varchar(30) foreign key references Ejemplar(codigo_barras),
    matricula varchar(20) foreign key references Alumno(matricula),
    fecha_salida datetime,
    fecha_limite datetime,
    fecha_devolucion datetime null,
    estado_prestamo varchar(20), 
    multa_generada decimal(10,2) default 0.00,
    condicion_salida varchar(50),
    condicion_retorno varchar(50) null
);
go

-- insertamos los alumnos de prueba
insert into Alumno (matricula, nombre_completo, carrera, estatus_escolar, libros_en_poder, saldo_deudor) values
('20260101', 'Darian Sanchez Ramirez', 'TSU Desarrollo de Software', 'ACTIVO', 1, 0.00),
('20260102', 'Maria Elena Garcia Ramos', 'TSU Tecnologias de la Informacion', 'ACTIVO', 2, 0.00),
('20260103', 'Carlos Eduardo Mendoza Cruz', 'TSU Mecatronica', 'ACTIVO', 1, 0.00),
('20260104', 'Valeria Sofia Ortiz Morales', 'TSU Desarrollo de Software', 'ACTIVO', 0, 0.00),
('20260105', 'Juan Pablo Hernandez Vega', 'TSU Energias Renovables', 'SANCIONADO', 1, 50.00),
('20260106', 'Ana Cristina Flores Soto', 'TSU Desarrollo de Software', 'ACTIVO', 3, 0.00),
('20260107', 'Luis Fernando Torres Mora', 'TSU Mantenimiento Industrial', 'ACTIVO', 0, 0.00),
('20260108', 'Jimena Paola Rangel Luna', 'TSU Tecnologias de la Informacion', 'ACTIVO', 1, 0.00);
go

-- insertamos los 50 libros mexicanos
insert into Libro (id_libro, titulo, autor, editorial, edicion, anio_publicacion, categoria, isbn) values
('BK01', 'Pedro Páramo', 'Juan Rulfo', 'Fondo de Cultura Económica', 'Edición Conmemorativa', 1955, 'Novela Mexicana', '978-607-16-0001-1'),
('BK02', 'El laberinto de la soledad', 'Octavio Paz', 'Fondo de Cultura Económica', '4ª Edición Definitiva', 1950, 'Ensayo y Pensamiento', '978-607-16-0158-2'),
('BK03', 'La región más transparente', 'Carlos Fuentes', 'Fondo de Cultura Económica', '50 Aniversario', 1958, 'Novela Mexicana', '978-607-16-0542-9'),
('BK04', 'Aura', 'Carlos Fuentes', 'Ediciones Era', '12ª Reimpresión', 1962, 'Cuento y Ficción', '978-607-445-037-8'),
('BK05', 'Las batallas en el desierto', 'José Emilio Pacheco', 'Ediciones Era', 'Edición Ilustrada', 1981, 'Novela Mexicana', '978-607-445-055-2'),
('BK06', 'Como agua para chocolate', 'Laura Esquivel', 'Editorial Planeta México', 'Edición de Bolsillo', 1989, 'Novela Mexicana', '978-607-07-2852-5'),
('BK07', 'El llano en llamas', 'Juan Rulfo', 'Fondo de Cultura Económica', 'Edición Colegial', 1953, 'Cuento y Ficción', '978-607-16-0002-8'),
('BK08', 'La noche de Tlatelolco', 'Elena Poniatowska', 'Ediciones Era', 'Edición Testimonial', 1971, 'Crónica y Testimonio', '978-607-445-001-9'),
('BK09', 'Los relámpagos de agosto', 'Jorge Ibargüengoitia', 'Joaquín Mortiz / Planeta', '1ª Reimpresión', 1964, 'Novela Mexicana', '978-607-07-4221-7'),
('BK10', 'Estas ruinas que ves', 'Jorge Ibargüengoitia', 'Joaquín Mortiz / Planeta', 'Edición Especial', 1975, 'Novela Mexicana', '978-607-07-3561-5'),
('BK11', 'Balún Canán', 'Rosario Castellanos', 'Fondo de Cultura Económica', 'Colección Popular', 1957, 'Novela Mexicana', '978-607-16-1120-8'),
('BK12', 'Oficio de tinieblas', 'Rosario Castellanos', 'Joaquín Mortiz / Planeta', 'Edición Crítica', 1962, 'Novela Mexicana', '978-607-07-2914-0'),
('BK13', 'Hasta no verte Jesús mío', 'Elena Poniatowska', 'Ediciones Era', '4ª Edición', 1969, 'Novela Mexicana', '978-607-445-052-1'),
('BK14', 'Arráncame la vida', 'Ángeles Mastretta', 'Alfaguara México', 'Edición de Bolsillo', 1985, 'Novela Mexicana', '978-607-31-1502-5'),
('BK15', 'Mal de amores', 'Ángeles Mastretta', 'Alfaguara México', '2ª Edición', 1996, 'Novela Mexicana', '978-607-31-2901-5'),
('BK16', 'Los de abajo', 'Mariano Azuela', 'Fondo de Cultura Económica', 'Edición del Centenario', 1916, 'Novela Mexicana', '978-607-16-0170-4'),
('BK17', 'El complot mongol', 'Rafael Bernal', 'Joaquín Mortiz', 'Edición Policial Clásica', 1969, 'Novela Mexicana', '978-607-07-1482-5'),
('BK18', 'Noticias del Imperio', 'Fernando del Paso', 'Editorial Diana / Planeta', 'Edición de Lujo', 1987, 'Novela Mexicana', '978-607-11-2090-8'),
('BK19', 'Palinuro de México', 'Fernando del Paso', 'Alfaguara México', '1ª Reimpresión', 1977, 'Novela Mexicana', '978-607-31-3140-7'),
('BK20', 'El libro salvaje', 'Juan Villoro', 'Fondo de Cultura Económica', 'Colección A la Orilla del Viento', 2008, 'Cuento y Ficción', '978-607-16-0043-1'),
('BK21', 'Los culpables', 'Juan Villoro', 'Editorial Almadía', '2ª Edición', 2007, 'Cuento y Ficción', '978-607-8430-10-9'),
('BK22', 'Primero sueño y otros poemas', 'Sor Juana Inés de la Cruz', 'Fondo de Cultura Económica', 'Edición Anotada', 1692, 'Poesía Mexicana', '978-607-16-2003-3'),
('BK23', 'Inundación castálida', 'Sor Juana Inés de la Cruz', 'UNAM - Instituto de Investigaciones Filológicas', 'Facsimilar Crítica', 1689, 'Poesía Mexicana', '978-970-32-2804-1'),
('BK24', 'Visión de Anáhuac', 'Alfonso Reyes', 'Fondo de Cultura Económica', 'Colección Tezontle', 1917, 'Ensayo y Pensamiento', '978-607-16-1050-8'),
('BK25', 'La suave patria y otros poemas', 'Ramón López Velarde', 'Fondo de Cultura Económica', 'Edición Conmemorativa', 1921, 'Poesía Mexicana', '978-607-16-0810-9'),
('BK26', 'El Periquillo Sarniento', 'José Joaquín Fernández de Lizardi', 'Editorial Porrúa', 'Colección Sepan Cuantos', 1816, 'Novela Mexicana', '978-970-07-6401-6'),
('BK27', 'Salvar el fuego', 'Guillermo Arriaga', 'Alfaguara México', 'Premio Alfaguara de Novela', 2020, 'Literatura Contemporánea', '978-607-31-8978-1'),
('BK28', 'El salvaje', 'Guillermo Arriaga', 'Alfaguara México', '1ª Reimpresión', 2016, 'Literatura Contemporánea', '978-607-31-4921-1'),
('BK29', 'Santa', 'Federico Gamboa', 'Editorial Porrúa', 'Colección Sepan Cuantos', 1903, 'Novela Mexicana', '978-970-07-5510-6'),
('BK30', 'Canek: Historia y leyenda de un héroe maya', 'Ermilo Abreu Gómez', 'Fondo de Cultura Económica', 'Colección Popular', 1940, 'Cuento y Ficción', '978-607-16-0230-5'),
('BK31', 'Temporada de huracanes', 'Fernanda Melchor', 'Literatura Random House México', '1ª Edición', 2017, 'Literatura Contemporánea', '978-607-31-5285-3'),
('BK32', 'Páradais', 'Fernanda Melchor', 'Literatura Random House México', '1ª Edición', 2021, 'Literatura Contemporánea', '978-607-38-0050-1'),
('BK33', 'Confabulario', 'Juan José Arreola', 'Joaquín Mortiz', 'Edición Definitiva', 1952, 'Cuento y Ficción', '978-607-07-0809-1'),
('BK34', 'La feria', 'Juan José Arreola', 'Joaquín Mortiz', '2ª Reimpresión', 1963, 'Novela Mexicana', '978-607-07-2005-5'),
('BK35', 'Desierto sonoro', 'Valeria Luiselli', 'Editorial Sexto Piso México', '1ª Edición', 2019, 'Literatura Contemporánea', '978-607-8619-30-6'),
('BK36', 'Los ingrávidos', 'Valeria Luiselli', 'Editorial Sexto Piso México', '1ª Reimpresión', 2011, 'Literatura Contemporánea', '978-607-7781-12-7'),
('BK37', 'La sombra del Caudillo', 'Martín Luis Guzmán', 'Fondo de Cultura Económica', 'Colección Conmemorativa', 1929, 'Historia y Antropología', '978-607-16-0180-3'),
('BK38', 'El águila y la serpiente', 'Martín Luis Guzmán', 'Fondo de Cultura Económica', 'Edición Anotada', 1928, 'Historia y Antropología', '978-607-16-0185-8'),
('BK39', 'Visión de los vencidos: Relaciones indígenas de la Conquista', 'Miguel León-Portilla', 'UNAM - Dirección General de Publicaciones', '30ª Edición Aumentada', 1959, 'Historia y Antropología', '978-970-32-1405-1'),
('BK40', 'Quetzalcóatl y Guadalupe: La formación de la conciencia nacional', 'Jacques Lafaye & Octavio Paz (Prólogo)', 'Fondo de Cultura Económica', '3ª Edición', 1977, 'Historia y Antropología', '978-607-16-0130-8'),
('BK41', 'Breve historia de México', 'José Vasconcelos', 'Editorial Trillas', 'Edición Escolar', 1937, 'Historia y Antropología', '978-968-24-7890-5'),
('BK42', 'Ulises criollo', 'José Vasconcelos', 'Fondo de Cultura Económica', 'Edición Conmemorativa', 1935, 'Crónica y Testimonio', '978-607-16-0040-0'),
('BK43', 'Poesía completa', 'Jaime Sabines', 'Joaquín Mortiz', 'Edición Aumentada', 1997, 'Poesía Mexicana', '978-607-07-1900-4'),
('BK44', 'Los amorosos: Cartas a Chepita', 'Jaime Sabines', 'Joaquín Mortiz', '1ª Reimpresión', 2009, 'Poesía Mexicana', '978-607-07-0530-4'),
('BK45', 'Nadie me verá llorar', 'Cristina Rivera Garza', 'Tusquets Editores México', 'Colección Andanzas', 1999, 'Novela Mexicana', '978-607-421-255-6'),
('BK46', 'El invencible verano de Liliana', 'Cristina Rivera Garza', 'Literatura Random House México', 'Premio Pulitzer 2024', 2021, 'Crónica y Testimonio', '978-607-38-0402-8'),
('BK47', 'Las calles de México: Leyendas y sucedidos', 'Luis González Obregón', 'Editorial Porrúa', 'Colección Sepan Cuantos', 1922, 'Historia y Antropología', '978-970-07-7120-5'),
('BK48', 'La muerte de Artemio Cruz', 'Carlos Fuentes', 'Fondo de Cultura Económica', 'Edición Conmemorativa', 1962, 'Novela Mexicana', '978-607-16-0150-6'),
('BK49', 'El principio del placer', 'José Emilio Pacheco', 'Ediciones Era', 'Colección Biblioteca Era', 1972, 'Cuento y Ficción', '978-607-445-021-7'),
('BK50', 'De las bacterias al hombre: La evolución celular', 'René Drucker Colín & Marcelino Cereijido', 'Fondo de Cultura Económica', 'Colección La Ciencia para Todos', 1994, 'Ciencia y Divulgación Mexicana', '978-607-16-1500-8');
go

-- insertamos los ejemplares fisicos con sus ubicaciones y estados
insert into Ejemplar (codigo_barras, id_libro, ubicacion_pasillo, condicion_estante, estado_operativo, condicion_fisica) values
('UTSJR-LIB-001', 'BK01', 'Pasillo 1', 'Estante A-1', 'Prestado', 'Excelente'),
('UTSJR-LIB-002', 'BK01', 'Pasillo 1', 'Estante A-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-003', 'BK01', 'Pasillo 1', 'Estante A-1', 'Disponible', 'Regular'),
('UTSJR-LIB-004', 'BK02', 'Pasillo 2', 'Estante B-1', 'Prestado', 'Excelente'),
('UTSJR-LIB-005', 'BK02', 'Pasillo 2', 'Estante B-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-006', 'BK03', 'Pasillo 1', 'Estante A-2', 'Prestado', 'Bueno'),
('UTSJR-LIB-007', 'BK03', 'Pasillo 1', 'Estante A-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-008', 'BK04', 'Pasillo 1', 'Estante B-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-009', 'BK04', 'Pasillo 1', 'Estante B-1', 'En reparacion', 'Dañado'),
('UTSJR-LIB-010', 'BK05', 'Pasillo 1', 'Estante A-3', 'Prestado', 'Excelente'),
('UTSJR-LIB-011', 'BK05', 'Pasillo 1', 'Estante A-3', 'Disponible', 'Bueno'),
('UTSJR-LIB-012', 'BK05', 'Pasillo 1', 'Estante A-3', 'Disponible', 'Bueno'),
('UTSJR-LIB-013', 'BK06', 'Pasillo 1', 'Estante C-1', 'Prestado', 'Excelente'),
('UTSJR-LIB-014', 'BK06', 'Pasillo 1', 'Estante C-1', 'Prestado', 'Bueno'),
('UTSJR-LIB-015', 'BK07', 'Pasillo 1', 'Estante A-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-016', 'BK08', 'Pasillo 2', 'Estante C-3', 'Disponible', 'Excelente'),
('UTSJR-LIB-017', 'BK09', 'Pasillo 1', 'Estante B-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-018', 'BK10', 'Pasillo 1', 'Estante B-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-019', 'BK11', 'Pasillo 1', 'Estante C-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-020', 'BK12', 'Pasillo 1', 'Estante C-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-021', 'BK13', 'Pasillo 2', 'Estante C-3', 'Disponible', 'Regular'),
('UTSJR-LIB-022', 'BK14', 'Pasillo 1', 'Estante D-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-023', 'BK14', 'Pasillo 1', 'Estante D-1', 'Extraviado', 'No localizado'),
('UTSJR-LIB-024', 'BK15', 'Pasillo 1', 'Estante D-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-025', 'BK16', 'Pasillo 2', 'Estante A-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-026', 'BK17', 'Pasillo 2', 'Estante B-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-027', 'BK18', 'Pasillo 2', 'Estante D-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-028', 'BK19', 'Pasillo 2', 'Estante D-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-029', 'BK20', 'Pasillo 3', 'Estante A-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-030', 'BK21', 'Pasillo 3', 'Estante A-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-031', 'BK22', 'Pasillo 3', 'Estante B-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-032', 'BK23', 'Pasillo 3', 'Estante B-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-033', 'BK24', 'Pasillo 2', 'Estante B-3', 'Disponible', 'Excelente'),
('UTSJR-LIB-034', 'BK25', 'Pasillo 3', 'Estante B-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-035', 'BK26', 'Pasillo 1', 'Estante E-1', 'Disponible', 'Regular'),
('UTSJR-LIB-036', 'BK27', 'Pasillo 4', 'Estante A-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-037', 'BK28', 'Pasillo 4', 'Estante A-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-038', 'BK29', 'Pasillo 1', 'Estante E-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-039', 'BK30', 'Pasillo 3', 'Estante A-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-040', 'BK31', 'Pasillo 4', 'Estante B-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-041', 'BK32', 'Pasillo 4', 'Estante B-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-042', 'BK33', 'Pasillo 3', 'Estante C-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-043', 'BK34', 'Pasillo 3', 'Estante C-1', 'Disponible', 'Regular'),
('UTSJR-LIB-044', 'BK35', 'Pasillo 4', 'Estante C-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-045', 'BK36', 'Pasillo 4', 'Estante C-1', 'Disponible', 'Bueno'),
('UTSJR-LIB-046', 'BK37', 'Pasillo 2', 'Estante A-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-047', 'BK38', 'Pasillo 2', 'Estante A-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-048', 'BK39', 'Pasillo 2', 'Estante D-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-049', 'BK40', 'Pasillo 2', 'Estante D-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-050', 'BK41', 'Pasillo 2', 'Estante D-3', 'Disponible', 'Excelente'),
('UTSJR-LIB-051', 'BK42', 'Pasillo 2', 'Estante C-2', 'Disponible', 'Bueno'),
('UTSJR-LIB-052', 'BK43', 'Pasillo 3', 'Estante B-3', 'Disponible', 'Excelente'),
('UTSJR-LIB-053', 'BK44', 'Pasillo 3', 'Estante B-3', 'Disponible', 'Excelente'),
('UTSJR-LIB-054', 'BK45', 'Pasillo 4', 'Estante D-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-055', 'BK46', 'Pasillo 4', 'Estante D-1', 'Disponible', 'Excelente'),
('UTSJR-LIB-056', 'BK47', 'Pasillo 2', 'Estante D-4', 'Disponible', 'Bueno'),
('UTSJR-LIB-057', 'BK48', 'Pasillo 1', 'Estante A-2', 'Disponible', 'Excelente'),
('UTSJR-LIB-058', 'BK49', 'Pasillo 1', 'Estante A-3', 'Disponible', 'Bueno'),
('UTSJR-LIB-059', 'BK50', 'Pasillo 5', 'Estante A-1', 'Disponible', 'Excelente');
go

-- insertamos los prestamos de prueba
insert into Prestamo (id_prestamo, codigo_barras, matricula, fecha_salida, fecha_limite, fecha_devolucion, estado_prestamo, multa_generada, condicion_salida, condicion_retorno) values
('LN-1001', 'UTSJR-LIB-001', '20260101', '2026-09-20 11:30:00', '2026-09-23 11:30:00', null, 'VIGENTE', 0.00, 'Excelente', null),
('LN-1002', 'UTSJR-LIB-004', '20260102', '2026-09-18 09:00:00', '2026-09-21 14:00:00', null, 'POR_VENCER', 0.00, 'Excelente', null),
('LN-1003', 'UTSJR-LIB-006', '20260105', '2026-09-12 10:00:00', '2026-09-15 10:00:00', null, 'EN_MORA', 60.00, 'Bueno', null),
('LN-1004', 'UTSJR-LIB-010', '20260103', '2026-09-19 12:00:00', '2026-09-22 12:00:00', null, 'VIGENTE', 0.00, 'Excelente', null),
('LN-1005', 'UTSJR-LIB-013', '20260106', '2026-09-20 15:00:00', '2026-09-23 15:00:00', null, 'VIGENTE', 0.00, 'Excelente', null),
('LN-1006', 'UTSJR-LIB-014', '20260106', '2026-09-20 15:10:00', '2026-09-23 15:10:00', null, 'VIGENTE', 0.00, 'Excelente', null);
go














-- consultas rapidas para revisar los datos
-- select * from Libro;
-- select * from Ejemplar where estado_operativo in ('Extraviado', 'En reparacion');
-- select * from Prestamo where estado_prestamo = 'EN_MORA';

