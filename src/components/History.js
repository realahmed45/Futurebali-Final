// src/components/History.js

import React, { useState, useEffect } from 'react';

const History = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching user order history (you can replace this with actual API calls)
    const fetchedOrders = [
      { id: 1, date: '2024-11-10', details: 'Package A - $100' },
      { id: 2, date: '2024-11-12', details: 'Package B - $150' },
      { id: 3, date: '2024-11-15', details: 'Package C - $200' },
    ];
    setOrders(fetchedOrders);
  }, []);

  return (
    <div className="history-container">
      <h2>Order History</h2>
      
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Details:</strong> {order.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
