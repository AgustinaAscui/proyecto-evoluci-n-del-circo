# Ficha Técnica de las Bases de Datos

## Introducción

Las bases de datos utilizadas en este proyecto fueron elaboradas específicamente para responder las preguntas de investigación planteadas durante el desarrollo de la webstory.

Cada una corresponde a una unidad de análisis distinta, evitando mezclar información de diferente naturaleza. Esta decisión metodológica permitió construir visualizaciones más claras y realizar comparaciones consistentes entre los distintos niveles de análisis.

Las bases fueron organizadas en formato CSV para facilitar su procesamiento mediante Python y su reutilización durante el desarrollo de las visualizaciones.

---

# Base de Datos N°1

## Evolución Normativa y Restricciones Internacionales

### Objetivo

Registrar la evolución de la legislación relacionada con el uso de animales en espectáculos circenses en distintos países.

### Unidad de análisis

País.

Cada registro representa un país y su situación normativa respecto al uso de animales en circos.

### Cobertura

38 países.

La selección incluye países de América, Europa, Oceanía y otras regiones donde existe información pública disponible sobre regulación circense.

### Variables principales

- País
- Año del hito legislativo
- Tipo de restricción
- Animales afectados
- Estado normativo

### Fuentes utilizadas

- FOUR PAWS International.
- Animal Defenders International.
- Legislación nacional de distintos países.
- Documentación oficial disponible en organismos públicos.

### Tratamiento de datos

Durante la preparación de la base se realizaron los siguientes procesos:

- Normalización de nombres de países.
- Homogeneización de categorías de restricción.
- Revisión de años documentados.
- Eliminación de registros duplicados.
- Corrección de inconsistencias de formato.

### Limitaciones

No todos los países poseen información pública respecto al año exacto en que comenzaron sus restricciones.

En algunos casos únicamente fue posible identificar la existencia de regulación, pero no el año de implementación.

---

# Base de Datos N°2

## Industria Circense y Nuevos Modelos

### Objetivo

Analizar la evolución de compañías circenses relevantes y su proceso de adaptación hacia modelos sin utilización de animales.

### Unidad de análisis

Compañía circense.

Cada registro corresponde a una organización dedicada al espectáculo circense.

### Variables principales

- Nombre de la compañía
- País de origen
- Año de fundación
- Uso de animales
- Modelo artístico
- Adaptación al circo contemporáneo

### Fuentes utilizadas

- Sitios oficiales de compañías circenses.
- Documentación histórica.
- Registros periodísticos.
- Publicaciones especializadas.

### Tratamiento de datos

Se revisó la información disponible para cada compañía con el fin de:

- verificar fechas de fundación;
- identificar el uso o no de animales;
- clasificar el tipo de espectáculo desarrollado;
- registrar procesos de transformación cuando existían antecedentes públicos.

### Limitaciones

Algunas compañías modificaron su modelo artístico durante distintos períodos históricos, por lo que la información representa el estado más actualizado identificado durante la investigación.

---

# Base de Datos N°3

## Tradición Familiar vs Profesionalización del Circo Chileno

### Objetivo

Caracterizar las principales diferencias existentes entre agrupaciones circenses tradicionales y contemporáneas en Chile.

### Unidad de análisis

Agrupación circense.

Cada registro representa una agrupación identificable dentro del panorama circense nacional.

### Variables principales

- Nombre de la agrupación
- Región
- Tipo de circo
- Formación predominante
- Estructura organizacional

### Fuentes utilizadas

- Catastro Nacional de Artes Circenses.
- Ministerio de las Culturas, las Artes y el Patrimonio.
- Sitios oficiales de agrupaciones.
- Información pública disponible.

### Tratamiento de datos

Los registros fueron revisados para asegurar consistencia entre categorías.

Se unificaron conceptos relacionados con:

- formación profesional;
- transmisión familiar;
- estructura jurídica;
- clasificación entre circo tradicional y contemporáneo.

### Limitaciones

La base representa una muestra de agrupaciones identificables mediante información pública.

No pretende representar la totalidad del universo circense chileno.

---

# Procesamiento de datos

Las tres bases fueron procesadas mediante Python.

Las principales tareas realizadas fueron:

- lectura de archivos CSV;
- limpieza de datos;
- normalización de categorías;
- organización de variables;
- preparación para visualizaciones;
- exportación de gráficos interactivos en formato HTML.

Durante este proceso se utilizaron principalmente las librerías:

- Pandas.
- Plotly.

---

# Control de calidad

Antes de generar las visualizaciones se realizó una revisión manual de todas las bases con el objetivo de detectar:

- registros duplicados;
- categorías inconsistentes;
- errores tipográficos;
- valores faltantes;
- formatos incompatibles.

Este proceso permitió obtener bases homogéneas para el análisis.

---

# Consideraciones metodológicas

El proyecto utiliza tres bases independientes debido a que cada una responde a preguntas distintas.

Separar las unidades de análisis permitió evitar comparaciones incorrectas entre:

- países;
- compañías circenses;
- agrupaciones chilenas.

Esta decisión metodológica facilitó la construcción de visualizaciones específicas para cada dimensión del estudio.

---

# Reproducibilidad

Todas las bases fueron almacenadas en formato CSV.

Esto permite que cualquier persona pueda:

- revisar los registros utilizados;
- replicar el análisis;
- generar nuevamente las visualizaciones mediante Python;
- reutilizar los datos para investigaciones futuras.

La organización del repositorio busca precisamente facilitar la transparencia y la replicabilidad del proceso de investigación.

---

# Resumen de las bases

| Base | Unidad de análisis | Formato | Uso principal |
|------|--------------------|----------|--------------|
| Evolución Normativa y Restricciones Internacionales | País | CSV | Legislación internacional |
| Industria Circense y Nuevos Modelos | Compañía | CSV | Evolución de la industria |
| Tradición Familiar vs Profesionalización del Circo Chileno | Agrupación | CSV | Comparación del caso chileno |

---

# Conclusión

Las bases de datos constituyen el principal soporte empírico del proyecto.

Su construcción permitió integrar información proveniente de distintas fuentes en un conjunto de datos organizado, coherente y reutilizable, facilitando el desarrollo de visualizaciones interactivas y el análisis periodístico presentado en la webstory.

La utilización de archivos CSV, junto con el procesamiento mediante Python y la publicación del código en el repositorio, contribuye a garantizar la transparencia y replicabilidad del proceso de investigación.
