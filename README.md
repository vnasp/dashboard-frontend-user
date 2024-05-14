# Proyecto de Visualización de Datos 📊

## Descripción del Proyecto 📋

Este proyecto tiene como objetivo graficar los datos recibidos de estaciones y dispositivos que miden NPS (Nivel de Presión Sonara) en dos canales diferentes. Se ha decidido utilizar un dashboard debido a su capacidad para presentar la información de manera clara, interactiva y accesible. Los dashboards son ideales para este tipo de aplicaciones porque permiten visualizar grandes cantidades de datos de manera estructurada, facilitando la comprensión y el análisis.

## Características Principales 🌟

- **Selectores Dinámicos**: Permiten seleccionar las estaciones y sus dispositivos para visualizar sus datos asociados.
- **Datepicker y Date-fns**: Se utilizan para seleccionar y formatear las fechas de los datos.
- **ContextAPI**: Almacena los parámetros seleccionados, facilitando la gestión del estado global de la aplicación.
- **React Router Dom**: Mejora la navegación dentro de la aplicación, aunque en este ejemplo algunas vistas están deshabilitadas.
- **Data en JSON**: Se prefirió cargar los datos como JSON en lugar de CSV por razones de rendimiento y para facilitar la futura conexión con un backend, permitiendo una estructura dinámica y no estática.
- **TailwindCSS**: Utilizado por su modernidad, flexibilidad y limpieza, destacando los gráficos.

## Librerías Utilizadas 📚

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router Dom**: Manejo de rutas dentro de la aplicación.
- **Datepicker** y **Date-fns**: Para la selección y formateo de fechas.
- **ContextAPI**: Gestión del estado global.
- **TailwindCSS**: Framework CSS para estilos.
- **Plotly**: Biblioteca de gráficos, ideal para manejar grandes sets de datos y proporcionar interactividad.
- **Axios**: Manejo de solicitudes HTTP, preparado para una futura conexión con un backend.

## Decisiones Técnicas y Justificaciones 🤔

### Uso de Dashboard
Se decidió utilizar un dashboard debido a su capacidad para:
- Presentar grandes cantidades de datos de manera clara y accesible.
- Facilitar la interacción y personalización de los datos visualizados.
- Permitir la adición de características como zoom y desplazamiento en los gráficos.

### Datos en JSON
Aunque la data fue entregada en CSV y se podría haber utilizado una librería como Papa Parse para parsear los datos CSV en el navegador, se prefirió subir la data como JSON por:
- **Peso y Rendimiento**: JSON es generalmente más ligero y rápido de procesar en JavaScript.
- **Futura Conexión Backend**: JSON facilita la integración con APIs y backends dinámicos.
- **Estructura Dinámica**: JSON permite una estructura de datos más flexible y manejable en aplicaciones modernas.

### Biblioteca de Gráficos: Plotly
Plotly se seleccionó por:
- **Interactividad**: Soporta características como zoom y desplazamiento, cruciales para la exploración de grandes volúmenes de datos.
- **Capacidad de Manejo de Datos**: Ideal para series temporales y otros tipos de visualizaciones complejas.
- **Adaptabilidad**: Se ajusta a diferentes necesidades de visualización.

### Axios en Lugar de Fetch
Se prefirió axios sobre fetch considerando que el proyecto tiene un backend en Django:
- **Preparación para el Backend**: Axios facilita la integración con un backend como Django, proporcionando una configuración más sencilla y robusta para manejar solicitudes HTTP.
- **Manejo de Promesas**: Axios usa promesas, lo que es consistente con la forma moderna de manejar solicitudes asíncronas en JavaScript. Esto se alinea con la necesidad de realizar múltiples llamadas a la API de manera eficiente.
- **Intercepción de Solicitudes y Respuestas**: Axios permite configurar interceptores que pueden interceptar y modificar solicitudes o respuestas, lo cual es crucial para manejar tokens de autenticación, errores globales, etc. Esta funcionalidad es particularmente útil cuando se conecta con un backend que requiere autenticación y manejo de errores centralizado.
- **Configuración Simplificada**: Axios permite configurar un cliente con una URL base, encabezados comunes, y otras opciones, lo que simplifica el manejo de la configuración de solicitudes repetitivas. Esto es útil para mantener una configuración consistente y fácil de gestionar cuando el proyecto se expanda.
- **Consistencia y Mantenibilidad**: Se creó un `axiosInstance` para asegurar configuraciones uniformes en todas las solicitudes y facilitar la gestión y actualización de la configuración centralizada. Esto es especialmente importante en un entorno de producción donde la mantenibilidad y la consistencia son clave.

### Uso de TailwindCSS
TailwindCSS fue elegido por:
- **Modernidad**: Proporciona un enfoque moderno para el diseño de interfaces.
- **Flexibilidad**: Permite un alto grado de personalización y adaptación.
- **Limpieza**: Facilita la creación de interfaces visualmente atractivas y organizadas.


## Sugerencias de Mejora 🛠️

- **Widgets de Estadísticas**: Agregar widgets que muestren máximos, mínimos y promedios en la renderización del gráfico.
- **Optimización de Datos**: Considerar técnicas de optimización (lazy Loading, comprensión de datos, filtrado en el servidor) si se manejan conjuntos de datos extremadamente grandes.

## Visita el Despliegue 🚀

Puedes visitar el despliegue del proyecto en el siguiente enlace: [Enlace al Despliegue](https://vnasp.github.io/acustica-frontend-user)
