import React, { useEffect, useState } from "react";
import { getItems, updateStock, getMovements } from "../api";
import UpdateStockModal from "./UpdateStockModal";
import StockMovements from "./StockMovements";

export default function StockList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [movements, setMovements] = useState([]);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const handleUpdate = async (itemId, data) => {
    await updateStock(itemId, data);
    fetchItems();
    if (selectedItem) fetchMovements(selectedItem.id);
  };

  const fetchMovements = async (itemId) => {
    const data = await getMovements(itemId);
    setMovements(data);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    fetchMovements(item.id);
    setModalOpen(true);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Inventario de Stock</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>SKU</th>
            <th>EAN13</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.sku}</td>
              <td>{item.ean13}</td>
              <td>{item.stock}</td>
              <td>
                <button onClick={() => openModal(item)}>Actualizar Stock</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedItem && (
        <UpdateStockModal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          item={selectedItem}
          onUpdate={handleUpdate}
        />
      )}

      {selectedItem && <StockMovements movements={movements} />}
    </div>
  );
}