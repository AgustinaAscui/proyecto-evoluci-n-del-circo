# Ficha Técnica de Bases de Datos

## Introducción

Durante el desarrollo de esta investigación fue necesario construir una serie de bases de datos originales a partir de distintas fuentes documentales. No existe una única base pública que reúna información sobre la evolución del circo, las normativas internacionales, la transformación de compañías circenses y el desarrollo del circo chileno, por lo que fue necesario recopilar, verificar y organizar la información manualmente.

Las bases fueron elaboradas utilizando archivos CSV para facilitar su procesamiento mediante Python y su posterior integración en visualizaciones desarrolladas con Plotly y JavaScript.

Todas las bases fueron revisadas antes de su incorporación a la webstory con el objetivo de mantener consistencia entre los distintos gráficos.

---

# Base de datos 1

## base_datos_circo_limpia.csv

### Objetivo

Constituye la base principal del proyecto. Reúne información histórica y descriptiva sobre circos nacionales e internacionales utilizados durante la investigación.

### Variables

- Nombre del circo
- País
- Año de fundación
- Tipo de compañía
- Uso de animales
- Situación actual
- Observaciones

### Fuente

Información recopilada desde:

- Sitios oficiales de compañías circenses
- Artículos periodísticos
- Publicaciones culturales
- Documentación histórica

### Uso

Esta base sirvió como punto de partida para construir el resto de las visualizaciones.

---

# Base de datos 2

## marco_normativo_circos.csv

### Objetivo

Registrar la evolución de las normativas relacionadas con el uso de animales en espectáculos circenses.

### Variables

- País
- Año
- Tipo de legislación
- Estado de la normativa
- Observaciones

### Fuente

- Legislación nacional
- Documentos gubernamentales
- Organizaciones internacionales de protección animal

### Uso

Utilizada para construir el gráfico de evolución normativa mundial y contextualizar el cambio legislativo.

---

# Base de datos 3

## casos_emblematicos_circos.csv

### Objetivo

Comparar la evolución de compañías circenses representativas a nivel internacional.

### Variables

- Nombre de la compañía
- País
- Año de fundación
- Modelo tradicional
- Adaptación artística
- Situación actual

### Fuente

- Sitios oficiales
- Archivos históricos
- Publicaciones periodísticas
- Reportajes especializados

### Uso

Permitió construir las comparaciones entre compañías tradicionales y contemporáneas.

---

# Base de datos 4

## sector_circense_chileno.csv

### Objetivo

Caracterizar la evolución del circo chileno y comparar organizaciones tradicionales con nuevos proyectos circenses.

### Variables

- Organización
- Tipo de circo
- Formación
- Modelo de funcionamiento
- Uso de animales
- Observaciones

### Fuente

- Ministerio de las Culturas
- Circos nacionales
- Escuelas de circo
- Publicaciones culturales

### Uso

Utilizada para analizar la realidad chilena dentro del contexto internacional.

---

# Base de datos 5

## industria_generacional.csv

### Objetivo

Analizar la relación entre el año de fundación de distintas compañías y el uso de animales.

Esta base fue creada específicamente para responder una de las observaciones realizadas durante la retroalimentación de la Entrega 05.

### Variables

- Compañía
- Año de fundación
- Tipo de circo
- Utilización de animales
- País

### Fuente

Información recopilada desde:

- Sitios oficiales de las compañías
- Archivos históricos
- Publicaciones académicas
- Investigación documental propia

### Uso

Se utilizó para construir el gráfico comparativo que demuestra que los circos creados durante las últimas décadas nacieron directamente bajo un modelo sin animales.

Esta visualización constituye uno de los principales hallazgos de la investigación.

---

# Base de datos 6

## Chile - Tradición Familiar vs. Contemporáneo.csv

### Objetivo

Comparar las principales diferencias entre el circo tradicional chileno y el circo contemporáneo.

### Variables

- Organización
- Modelo
- Formación
- Público objetivo
- Uso de animales

### Uso

Sirvió para construir las comparaciones visuales del caso chileno.

---

# Base de datos 7

## Industria - Adaptación y Nuevos Modelos.csv

### Objetivo

Representar el proceso de transformación de compañías circenses internacionales hacia nuevos modelos de espectáculo.

### Variables

- Compañía
- Adaptación
- Innovación
- Estado actual

### Uso

Utilizada para explicar la evolución empresarial del sector.

---

# Base de datos 8

## Mundo - Evolución Normativa y Restricciones.csv

### Objetivo

Sintetizar el avance internacional de las restricciones legales sobre animales en espectáculos circenses.

### Variables

- País
- Año
- Estado normativo
- Tipo de restricción

### Uso

Complementa la explicación histórica y normativa de la investigación.

---

# Procesamiento de datos

Todas las bases fueron procesadas utilizando Python y posteriormente exportadas a formato CSV.

Durante el procesamiento se realizaron las siguientes tareas:

- normalización de nombres;
- eliminación de registros duplicados;
- estandarización de categorías;
- revisión manual de inconsistencias;
- organización cronológica;
- preparación para visualizaciones interactivas.

Posteriormente los archivos fueron utilizados mediante JavaScript y la librería Plotly para construir los gráficos incorporados en la webstory.

---

# Limitaciones

Esta investigación no pretende construir un catastro completo de todos los circos existentes en el mundo.

La información corresponde a una muestra seleccionada con fines periodísticos y académicos, diseñada para representar las principales transformaciones del sector circense.

Las bases fueron construidas a partir de información pública disponible al momento de realizar la investigación.

---

# Conclusiones

La construcción manual de estas bases permitió integrar información histórica, normativa y cultural que normalmente se encuentra dispersa en distintas fuentes.

El proceso de recopilación y organización de datos hizo posible desarrollar visualizaciones que respaldan empíricamente la hipótesis central de la investigación y fortalecen la transparencia metodológica del reportaje.
