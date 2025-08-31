import React from 'react';

function App() {
  const startPayment = () => {
    const options = {
      key: "RBycETLBg22o3A", // Test Key_ID
      amount: 100, // 1 INR in paise
      currency: "INR",
      name: "TreviaEdutech",
      description: "Test Payment",
      handler: function (response) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@trevia.com",
        contact: "9999999999",
      },
      theme: { color: "#4F46E5" },
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <h1>Welcome to TreviaEdutech 🚀</h1>
      <p>Click below to test Razorpay Payment (₹1)</p>
      <button onClick={startPayment}>Pay ₹1 with Razorpay (Test)</button>
    </div>
  );
}

export default App;
