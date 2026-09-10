# CallMeMaybe — Detección de operadores ineficientes

> Proyecto final del bootcamp de Análisis de Datos (TripleTen) · Python + Estadística + Tableau

Analicé el desempeño de los operadores de **CallMeMaybe**, un servicio de telefonía virtual (call center), para identificar con criterios medibles a los operadores menos eficientes y proponer una acción concreta de negocio.

---

## De qué trata

Marco a un operador como **poco eficiente** cuando cumple estas tres condiciones:

1. muchas **llamadas entrantes perdidas**,
2. **tiempo de espera** alto en las llamadas entrantes, y
3. pocas **llamadas salientes** (solo si su rol las incluye).

El objetivo no es solo hacer la lista: es entender *por qué* esos operadores se comportan así antes de recomendar una decisión.

---

## Los datos

Dos archivos de actividad de 2019:

| Archivo | Registros | Qué contiene |
|---|---|---|
| `data/telecom_dataset_new.csv` | 53,902 | Actividad de llamadas por usuario/operador/día: `user_id`, `date`, `direction` (in/out), `internal`, `operator_id`, `is_missed_call`, `calls_count`, `call_duration`, `total_call_duration`. |
| `data/telecom_clients.csv` | 732 | Clientes del servicio: `user_id`, `tariff_plan` (A/B/C), `date_start`. |

El resumen por operador que genero en el notebook queda en `results/operadores_resumen.csv` (1,092 operadores).

---

## Cómo lo hice

1. **Limpié los datos**: quité duplicados, ajusté tipos de dato y convertí la fecha con su zona horaria.
2. **Calculé el tiempo de espera** por llamada como `total_call_duration − call_duration` (el tiempo total menos el que duró hablando).
3. **Definí "ineficiente" con percentiles** sobre los tres criterios. Usé percentiles y no un umbral fijo porque el volumen de llamadas varía muchísimo entre operadores; un corte relativo compara a cada quien contra el resto. Así marqué **141 de 1,092 operadores (12.9%)**.
4. **Probé la diferencia de volumen con Mann-Whitney U**. Elegí Mann-Whitney y no la t de Student porque el volumen de llamadas no se distribuye normal (está muy sesgado), y esta prueba no asume normalidad.

**Stack:** Python (Pandas, SciPy) · Estadística (Mann-Whitney) · Tableau Public · Google Colab / Jupyter

---

## Lo que encontré

El valor **p ≈ 0** dejó un hallazgo que va contra la intuición: **los operadores marcados como "ineficientes" en realidad atienden muchas más llamadas**. No son ineficientes, **están saturados**.

Con eso, la recomendación cambió de *"sancionar operadores"* a **"redistribuir la carga de trabajo"**. Además, la tasa de llamadas perdidas **no depende del plan de tarifa** (segunda prueba, sin diferencia significativa), así que el problema es de carga, no de tipo de cliente.

---

## Dashboards en vivo (Tableau Public)

- **Dashboard 1 — Duración y tipo:** https://public.tableau.com/app/profile/carlos.orlando.meneses.corona/viz/CallMeMaybe-Operadoresineficaces/Dashboard1
- **Dashboard 2 — Llamadas por día y tipo:** https://public.tableau.com/app/profile/carlos.orlando.meneses.corona/viz/CallMeMaybe-Operadoresineficaces/Dashboard2

---

## Estructura del repositorio

```
callmemaybe-operators-analysis/
├── README.md
├── LICENSE
├── requirements.txt
├── Proyecto_Final_CallMeMaybe.ipynb   # Notebook con todo el análisis
├── data/
│   ├── telecom_dataset_new.csv         # Actividad de llamadas (datos que me dieron)
│   └── telecom_clients.csv             # Clientes
├── results/
│   └── operadores_resumen.csv          # Métricas por operador (salida del notebook)
└── reports/
    └── Presentacion_CallMeMaybe.pdf    # Presentación ejecutiva
```

---

## Cómo reproducir

```bash
git clone https://github.com/OrlandoCorona/callmemaybe-operators-analysis.git
cd callmemaybe-operators-analysis
pip install -r requirements.txt
jupyter notebook Proyecto_Final_CallMeMaybe.ipynb
```

---

## Autor

**Carlos Orlando Meneses Corona** — Data Analyst Jr · BI Analyst

- Portafolio: https://orlandocorona.github.io/
- LinkedIn: https://www.linkedin.com/in/carlos-orlando-meneses-corona-da/
- GitHub: https://github.com/OrlandoCorona

> Datos del proyecto: dataset provisto por el bootcamp de TripleTen con fines educativos.
