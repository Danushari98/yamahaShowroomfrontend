import React, { useState } from "react";
import "./Parts.css";

const parts = [
  {
    name: "Yamaha Racing Helmet",
    image: "/assets/Yamaha Racing Helmet_01.jpg",
    price: "4500",
    desc: "Aerodynamic design for high-speed comfort.",
  },
  {
    name: "Yamaha Riding Gloves",
    image: "/assets/Yamaha Riding Gloves.jpg",
    price: "2200",
    desc: "Leather grip gloves for better control.",
  },
  {
    name: "Yamaha Jacket",
    image: "/assets/Yamaha Jacket.jpg",
    price: "5800",
    desc: "Protective and stylish racing jacket.",
  },
  {
    name: "Yamaha Engine Oil",
    image: "/assets/YAMAHA ENGINEOIL.jpg",
    price: "950",
    desc: "High-performance synthetic oil for long rides.",
  },
  {
    name: "Yamaha Alloy Wheels",
    image: "/assets/Yamaha Alloy Wheels.jpg",
    price: "8200",
    desc: "Lightweight and strong for racing performance.",
  },
  {
    name: "Yamaha Exhaust Kit",
    image: "/assets/Yamaha Exhaust Kit.jpg",
    price: "12500",
    desc: "Boosts power and gives a thrilling sound.",
  },
];

const Parts = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "",
    upi: "",
    cardNumber: "",
    expiry: "",
  });

  // OPEN MODAL
  const openBuyModal = (part) => {
    setSelectedPart(part);
    setStep(1);
  };

  const closeModal = () => {
    setSelectedPart(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FIXED PLACE ORDER FUNCTION
  const placeOrder = async () => {
    const orderData = {
      part_name: selectedPart.name,
      price: selectedPart.price,

      customer_name: formData.name,
      address: formData.address,
      phone: formData.phone,

      payment_method: formData.payment,
      upi: formData.upi || "",
      card_number: formData.cardNumber || "",
      expiry: formData.expiry || "",
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/api/create-order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) {
        alert("❌ Failed! Backend rejected order.");
        return;
      }

      setStep(4);

      setTimeout(() => {
        closeModal();
      }, 3000);

    } catch (error) {
      alert("❌ Cannot connect to backend!");
    }
  };

  return (
    <div className="parts-page">
      <h2 className="section-title">AVAILABLE PARTS</h2>

      <div className="parts-grid">
        {parts.map((part, index) => (
          <div className="part-card" key={index}>
            <img src={part.image} alt={part.name} />
            <h3>{part.name}</h3>
            <p>{part.desc}</p>
            <div className="part-price">₹{part.price}</div>

            <button
              className="part-btn"
              onClick={() => openBuyModal(part)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPart && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2>Delivery Information</h2>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
                <input type="text" name="address" placeholder="Delivery Address" onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
                <button onClick={() => setStep(2)}>Continue</button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h2>Select Payment Method</h2>

                <button onClick={() => { setFormData({ ...formData, payment: "UPI" }); setStep(3); }}>
                  UPI
                </button>

                <button onClick={() => { setFormData({ ...formData, payment: "Debit" }); setStep(3); }}>
                  Debit Card
                </button>

                <button onClick={() => { setFormData({ ...formData, payment: "Credit" }); setStep(3); }}>
                  Credit Card
                </button>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h2>Enter {formData.payment} Details</h2>

                {formData.payment === "UPI" && (
                  <input type="text" name="upi" placeholder="Enter UPI ID" onChange={handleChange} />
                )}

                {(formData.payment === "Debit" || formData.payment === "Credit") && (
                  <>
                    <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} />
                    <input type="text" name="expiry" placeholder="Expiry (MM/YY)" onChange={handleChange} />
                  </>
                )}

                <button onClick={placeOrder}>Place Order</button>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <h2 className="success-msg">
                ✔ Order Placed Successfully!
                <br />
                Arrival in 3 - 4 days 🚚
              </h2>
            )}

            <button className="close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parts;
