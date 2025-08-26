# Stock Frontend

Frontend en **React + Vite** para la gestión de inventario, consumiendo la API de FastAPI (`fastapi_stock`).

---

## Requisitos

- Node.js v18+ / npm v9+
- Backend FastAPI corriendo en `http://127.0.0.1:8000` 

---

## Instalación

1. Clonar el repositorio del frontend 

    ```bash
git clone 
cd stock-frontend

Instalar dependencias:

npm install

Dependencias adicionales ya incluidas:

npm install axios react-modal

axios: Para consumir la API
react-modal: Para el modal de actualización de stock

Ejecutar el proyecto

npm run dev

Acceso al frontend en el navegador: http://localhost:5173

📂 Estructura del proyecto
stock-frontend/
├─ src/
│  ├─ App.jsx                 # Componente principal
│  ├─ api.js                  # Helper para llamadas a la API
│  ├─ components/
│  │  ├─ StockList.jsx        # Listado de inventario
│  │  ├─ UpdateStockModal.jsx # Modal para actualizar stock
│  │  └─ StockMovements.jsx   # Historial de movimientos
├─ index.html
├─ package.json
└─ vite.config.js

Funcionalidades
Listado de Stock:
Muestra todos los ítems del inventario (SKU, EAN13, stock)
Actualizar Stock:
Botón junto a cada ítem
Modal para ingresar cantidad y tipo de movimiento (IN / OUT)
Actualiza el backend vía API
Historial de Movimientos:
Muestra entradas y salidas de stock por ítem
Actualizado automáticamente al abrir el modal de un ítem

Configuración de la API
URL base de la API: http://127.0.0.1:8000
Archivo para cambiar la URL: src/api.js
