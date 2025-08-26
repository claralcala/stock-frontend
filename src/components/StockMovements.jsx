import React from "react";

export default function StockMovements({ movements }) {
  return (
    <div>
      <h2>Historial de Movimientos</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cantidad</th>
            <th>Tipo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.quantity}</td>
              <td>{m.movement_type}</td>
              <td>{new Date(m.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}