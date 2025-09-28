import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data save karke Checkout page pe bhej do
    navigate("/checkout", {
      state: { studentName, className, phone }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Pay School Fees</h2>

        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="tel"
          placeholder="Guardian Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
}
