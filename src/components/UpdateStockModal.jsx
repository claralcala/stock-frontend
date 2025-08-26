import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function UpdateStockModal({ isOpen, onRequestClose, item, onUpdate }) {
  const [quantity, setQuantity] = useState(0);
  const [movementType, setMovementType] = useState("IN");

  const handleSubmit = async () => {
    await onUpdate(item.id, { quantity: parseInt(quantity), movement_type: movementType });
    setQuantity(0);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Actualizar Stock - {item.sku}</h2>
      <label>
        Cantidad:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <label>
        Tipo de Movimiento:
        <select value={movementType} onChange={(e) => setMovementType(e.target.value)}>
          <option value="IN">Entrada</option>
          <option value="OUT">Salida</option>
        </select>
      </label>
      <button onClick={handleSubmit}>Actualizar</button>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
}