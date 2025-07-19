import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://zerodha-p7ez.onrender.com/allOrders")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch orders", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <h2>Your Orders</h2>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                {order.name} - {order.qty} Qty @ ₹{order.price} ({order.mode})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
