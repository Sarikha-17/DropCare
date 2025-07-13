const API_BASE = 'http://192.168.0.104:3001/api'; // ⚠️ Use LAN IP if testing on mobile

export const getDeliveryStatus = async (orderId) => {
  const res = await fetch(`http://localhost:3001/api/order/${orderId}/status/delivery-status/${userId}`);
  return await res.json();
};

export const sendOtp = async (orderId) => {
  const res = await fetch(`http://localhost:3001/api/order/${orderId}/status/trigger-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId }),
  });
  return await res.json();
};

export const verifyOtp = async (orderId, otp) => {
  const res = await fetch(`${API_BASE}/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId, otp }),
  });
  return await res.json();
};
