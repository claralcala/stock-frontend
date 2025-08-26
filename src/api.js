import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getItems = async () => {
  const res = await axios.get(`${API_URL}/stock/items`);
  return res.data;
};

export const updateStock = async (itemId, data) => {
  const res = await axios.put(`${API_URL}/stock/${itemId}`, data);
  return res.data;
};

export const getMovements = async (itemId) => {
  const res = await axios.get(`${API_URL}/stock/${itemId}/movements`);
  return res.data;
};