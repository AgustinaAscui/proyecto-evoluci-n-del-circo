# Análisis de las visualizaciones

## Introducción

Las visualizaciones constituyen el eje central de la webstory, ya que permiten transformar grandes volúmenes de información en representaciones comprensibles para el lector. Más que ilustrar el contenido, cada gráfico fue diseñado para responder una pregunta específica de la investigación y apoyar la narrativa periodística desarrollada durante el proyecto.

Las bases de datos fueron construidas a partir de información proveniente de organismos internacionales, legislación chilena, registros públicos y documentación especializada sobre la evolución del circo contemporáneo. Posteriormente, los datos fueron organizados y procesados mediante Python para generar visualizaciones interactivas integradas en la webstory utilizando HTML.

Todas las visualizaciones fueron desarrolladas considerando criterios de claridad, legibilidad y coherencia narrativa, evitando representar información que no aportara directamente a la comprensión de la historia.

---

# Visualización 1
## Cronología mundial de restricciones al uso de animales

**Archivo**

```
grafico_mundo.html
```

### Objetivo

Mostrar la evolución temporal de las restricciones relacionadas con el uso de animales en espectáculos circenses alrededor del mundo.

### ¿Qué comunica?

Esta visualización permite observar que las restricciones no ocurrieron de forma simultánea, sino que fueron apareciendo progresivamente durante distintas décadas.

A través de la cronología es posible identificar períodos donde múltiples países comenzaron a modificar su legislación, evidenciando un cambio cultural internacional respecto al bienestar animal.

### Relación con la historia

Esta visualización introduce el contexto internacional del reportaje.

Su función es demostrar que la transformación del circo constituye un fenómeno global y no un caso aislado.

El gráfico responde directamente a la primera pregunta de investigación:

> ¿Cómo ha evolucionado la regulación internacional sobre el uso de animales en los circos?

### ¿Por qué una línea temporal?

Se eligió una representación cronológica debido a que la variable principal corresponde al año en que cada país implementó restricciones.

Una línea temporal facilita la comprensión de la secuencia histórica y permite visualizar tendencias de largo plazo.

### Base utilizada

- Evolución Normativa y Restricciones Internacionales

---

# Visualización 2
## Tipos de restricciones internacionales

**Archivo**

```
grafico_restricciones.html
```

### Objetivo

Comparar los distintos tipos de restricciones existentes respecto al uso de animales.

### ¿Qué comunica?

Permite observar que no todos los países aplican exactamente el mismo tipo de prohibición.

Mientras algunos restringen únicamente animales salvajes, otros establecen prohibiciones generales para cualquier tipo de animal utilizado en espectáculos.

La visualización evidencia que existen distintos niveles de regulación.

### Relación con la historia

Este gráfico complementa la cronología internacional mostrando que el cambio legislativo no es uniforme.

La existencia de diferentes niveles de restricción permite comprender que la transformación del circo responde a procesos legales diversos.

### ¿Por qué un gráfico circular?

Se optó por una representación circular debido a que el objetivo principal consiste en comparar proporciones dentro del total de países analizados.

Esta representación facilita identificar rápidamente cuáles categorías poseen mayor presencia.

### Base utilizada

- Evolución Normativa y Restricciones Internacionales

---

# Visualización 3
## Línea de tiempo legislativa chilena

**Archivo**

```
grafico_chile_ley.html
```

### Objetivo

Presentar los principales hitos relacionados con la legislación chilena sobre animales utilizados en circos.

### ¿Qué comunica?

La visualización evidencia que Chile mantiene un proceso legislativo considerablemente más lento que otros países analizados.

También permite identificar los principales momentos del debate público, incluyendo modificaciones legales, proyectos de ley y resoluciones relevantes.

### Relación con la historia

Este gráfico constituye el eje central del segundo acto de la webstory.

Su propósito consiste en comparar la evolución normativa chilena con el escenario internacional presentado anteriormente.

### ¿Por qué una línea temporal?

Debido a que el interés principal corresponde a comprender la evolución histórica de los acontecimientos.

La representación cronológica facilita entender la continuidad del proceso legislativo.

### Base utilizada

Información legislativa recopilada durante la investigación.

---

# Visualización 4
## Modelo tradicional chileno

**Archivo**

```
grafico_chile_tradicional.html
```

### Objetivo

Caracterizar las principales características del circo tradicional chileno.

### ¿Qué comunica?

Permite visualizar la relación entre formación familiar, estructura organizacional y continuidad de la tradición circense.

Los resultados muestran que gran parte del conocimiento continúa transmitiéndose mediante vínculos familiares y empresas circenses tradicionales.

### Relación con la historia

Esta visualización introduce el tercer acto de la investigación, dedicado al cambio del oficio circense.

Representa el punto de partida desde el cual se compara posteriormente el modelo contemporáneo.

### ¿Por qué un gráfico de barras?

Las variables corresponden a categorías discretas.

Los gráficos de barras permiten comparar fácilmente las diferencias entre cada categoría analizada.

### Base utilizada

Tradición Familiar vs Profesionalización del Circo Chileno.

---

# Visualización 5
## Modelo contemporáneo chileno

**Archivo**

```
grafico_chile_contemporaneo.html
```

### Objetivo

Mostrar las principales características organizacionales y formativas del circo contemporáneo chileno.

### ¿Qué comunica?

La visualización evidencia que el nuevo circo presenta una estructura distinta al modelo tradicional.

Predominan organizaciones culturales, fundaciones, colectivos y procesos de formación profesional desarrollados fuera del ámbito familiar.

### Relación con la historia

Este gráfico permite comparar directamente ambos modelos circenses.

Su incorporación demuestra que la evolución del circo no depende únicamente de la desaparición de los animales, sino también de cambios en la formación y organización del artista.

### ¿Por qué un gráfico de barras?

La comparación entre categorías resulta más clara mediante barras debido a la facilidad para identificar diferencias de magnitud.

### Base utilizada

Tradición Familiar vs Profesionalización del Circo Chileno.

---

# Visualización 6
## Comparación general del circo chileno

**Archivo**

```
grafico_heatmap_chile.html
```

### Objetivo

Integrar en una sola visualización las principales diferencias entre el modelo tradicional y el contemporáneo.

### ¿Qué comunica?

Resume los resultados obtenidos durante el análisis de agrupaciones chilenas.

Permite comparar simultáneamente múltiples variables relacionadas con formación, organización y características institucionales.

### Relación con la historia

Esta visualización funciona como síntesis del tercer acto y permite cerrar el análisis comparativo desarrollado durante la investigación.

### ¿Por qué un heatmap?

El heatmap facilita comparar varias dimensiones al mismo tiempo sin requerir múltiples gráficos independientes.

Además permite identificar patrones de manera visual mediante diferencias de intensidad.

### Base utilizada

Tradición Familiar vs Profesionalización del Circo Chileno.

---

# Relación entre las visualizaciones

Las seis visualizaciones fueron diseñadas para responder progresivamente las preguntas de investigación.

La secuencia utilizada sigue el mismo orden narrativo de la webstory.

1. Contexto internacional.
2. Tipos de regulación.
3. Caso chileno.
4. Circo tradicional.
5. Circo contemporáneo.
6. Comparación general.

De esta forma, el lector construye una comprensión gradual del fenómeno, avanzando desde una perspectiva global hacia un análisis específico del caso chileno.

---

# Principales aportes de las visualizaciones

Las visualizaciones permitieron:

- sintetizar grandes volúmenes de información;
- facilitar la comparación entre países y modelos circenses;
- apoyar la hipótesis central mediante evidencia visual;
- mejorar la comprensión de los datos para un público general;
- integrar análisis cuantitativo con narrativa periodística.

En conjunto, las visualizaciones constituyen el principal soporte empírico de la webstory y permiten comunicar los resultados de la investigación de manera clara, accesible e interactiva.
