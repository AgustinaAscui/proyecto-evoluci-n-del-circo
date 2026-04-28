https://colab.research.google.com/drive/16GGlk6hB9c-YQdb7RddIXlwYLWqzlvEu?usp=sharing

import pandas as pd

#Carga de la base de datos limpia
df_circo = pd.read_csv('base_datos_circo_limpia.csv')

#Visualización de las primeras líneas
print(df_circo.head())

#Verificación de tipos de datos y nulos
print(df_circo.info())
