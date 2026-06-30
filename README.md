<h1 style="color:#0969da; font-size:36px; margin-bottom:0;">
Carlos Orlando Meneses Corona
</h1>

<p style="font-size:18px; margin-top:4px;">
<b>Data Analyst Jr · BI Analyst — SQL · Python · Estadística</b>
</p>

<p>
Analista de datos con formación en Ingeniería TIC. Convierto datos en decisiones:
SQL, limpieza y análisis con Python, pruebas de hipótesis y dashboards interactivos.
</p>

<hr>

## **Proyectos**

### **Análisis de viajes en taxi — Chicago (SQL + Estadística)**

Análisis de movilidad urbana para evaluar si las condiciones climáticas influyen en la duración de los viajes.

**Qué hice**
- Extracción y unión de datos con consultas **SQL**.
- Limpieza y preparación de datos con Pandas.
- Análisis exploratorio de la demanda por compañía y por barrio.
- Prueba de hipótesis (t de Welch) para validar el efecto del clima.

**Tecnologías utilizadas**  
SQL · Python (Pandas, SciPy, Matplotlib) · Jupyter Notebook

**Resultado**
La prueba estadística mostró diferencias significativas (p < 0.05) en la duración promedio de los viajes según el clima: los días de mal clima presentan trayectos más largos.

<p align="center">
  <img src="images/JupyterGraf2S8.png" alt="Viajes por compañía y por barrio" width="700">
</p>
<p align="center">
  <img src="images/Jupyter_GraficaS8.png" alt="Distribución de la duración de viajes" width="700">
</p>

**Código y análisis completo**  
https://github.com/OrlandoCorona/chicago-rideshare-sql-analysis

---

### **Análisis de ingresos de telecomunicaciones (Megaline)**

Comparación de los planes prepago Surf y Ultimate (500 usuarios) para orientar la inversión publicitaria.

**Qué hice**
- Ingeniería de ingresos: cálculo del ingreso mensual por usuario (cuota + excedentes).
- Estadística descriptiva por plan y visualización de distribuciones.
- Prueba t de Welch para comparar los ingresos promedio.

**Tecnologías utilizadas**  
Python (Pandas, NumPy, SciPy) · Jupyter Notebook

**Resultado**
**Ultimate genera ~20 % más de ingreso por usuario** ($72.24 vs $60.33) con una varianza 25× menor (t = −8.23, p ≈ 0). Recomendación: priorizar Ultimate en publicidad.

<!-- Adjunta aquí tu captura: -->
<!-- Sube tu captura como images/megaline_ingresos.png y descomenta este bloque:
<p align="center"><img src="images/megaline_ingresos.png" width="700"></p>
-->

**Código y análisis completo**  
https://github.com/OrlandoCorona/megaline-telecom-revenue-analysis

---

### **Dashboard de anuncios de autos (Streamlit + Plotly)**

Aplicación web interactiva para explorar un dataset de anuncios de venta de autos.

**Qué hice**
- EDA del dataset (precio, kilometraje, año) en un notebook.
- Construcción de una app con **Streamlit** y gráficos interactivos con **Plotly**.
- Despliegue en la nube (Render) para acceso público.

**Tecnologías utilizadas**  
Python · Streamlit · Plotly · Pandas · Render

<!-- Adjunta aquí tu captura del dashboard: -->
<!-- Sube tu captura como images/vehicle_dashboard.png y descomenta este bloque:
<p align="center"><img src="images/vehicle_dashboard.png" width="700"></p>
-->

**App en vivo:** https://proyecto-sprint7-zsy8.onrender.com/  
**Código fuente:** https://github.com/OrlandoCorona/vehicle-ads-dashboard

---

### **Análisis del mercado de videojuegos**

EDA de ~16 000 títulos (1980-2016) para identificar plataformas y géneros con mayor potencial comercial.

**Qué hice**
- Limpieza del dataset y creación de la métrica de ventas totales.
- Análisis de plataformas, géneros y preferencias por región (NA, EU, JP).
- Correlación entre reseñas y ventas; pruebas de hipótesis.

**Tecnologías utilizadas**  
Python (Pandas, NumPy, SciPy, Matplotlib, Seaborn) · Jupyter Notebook

**Resultado**
PS4 y Xbox One son las plataformas más prometedoras; las reseñas de críticos predicen mejor las ventas (r≈0.40) que las de usuarios (r≈0.10).

<!-- Adjunta aquí tu captura: -->
<!-- Sube tu captura como images/videojuegos_ventas.png y descomenta este bloque:
<p align="center"><img src="images/videojuegos_ventas.png" width="700"></p>
-->

**Código y análisis completo**  
https://github.com/OrlandoCorona/videogame-sales-analysis

---

### **Sistema Web “El Arca” – Gestión Operativa e Inventarios**

Refactor y profesionalización de un sistema interno para la operación de un restaurante real.

**Problema a resolver**
- Inconsistencias en inventarios.  
- Poca trazabilidad de ventas y consumo.  
- Dependencia de registros manuales.

**Solución implementada**
- Diseño de base de datos relacional para centralizar la operación.
- Migración de MySQL a PostgreSQL para mejorar integridad y consultas.
- Refactor del backend en PHP con estructura modular (MVC).
- Despliegue con Docker en la nube.

**Tecnologías utilizadas**  
PHP · PostgreSQL · SQL · Docker · Render · Git · HTML · CSS

<p align="center">
  <img src="images/Index_Arca_Web.png" alt="Pantalla principal del sistema El Arca" width="700">
</p>
<p align="center">
  <img src="images/DB_Schema_Arca.png" alt="Modelo de base de datos de El Arca" width="700">
</p>

**Código fuente**  
https://github.com/OrlandoCorona/el-arca-restaurant-system

---

## **Tecnologías**

Python · SQL · PostgreSQL · Power BI · Streamlit · Plotly · Docker · Git

---

## **Contacto**

LinkedIn — https://www.linkedin.com/in/carlos-orlando-meneses-corona-da/  
GitHub — https://github.com/OrlandoCorona  
Email — menesescoronacarlosorlando@gmail.com
