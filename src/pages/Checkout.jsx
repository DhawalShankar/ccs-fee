import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) return;

    // Razorpay order banaoge yaha backend se (simplified demo ke liye fake hai)
    const options = {
      key: "rzp_test_xxxxx", // Razorpay test key
      amount: 50000, // in paise => ₹500
      currency: "INR",
      name: "XYZ Public School",
      description: "Fee Payment",
      handler: function (response) {
        // Payment success ke baad receipt page pe bhej do
        navigate(`/receipt/${response.razorpay_payment_id}`, { state });
      },
      prefill: {
        name: state.studentName,
        contact: state.phone,
      },
      notes: {
        student_name: state.studentName,
        class: state.className,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }, [state, navigate]);

  return <h2 className="text-center mt-10">Redirecting to payment...</h2>;
}
