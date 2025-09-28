import { useParams, useLocation } from "react-router-dom";

export default function Receipt() {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">XYZ Public School</h1>
      <h2 className="text-lg mb-4">Payment Receipt</h2>

      <p><b>Student:</b> {state?.studentName}</p>
      <p><b>Class:</b> {state?.className}</p>
      <p><b>Guardian Phone:</b> {state?.phone}</p>
      <p><b>Payment ID:</b> {id}</p>
      <p><b>Amount:</b> ₹500</p>

      <button
        onClick={() => window.print()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Print / Screenshot Receipt
      </button>
    </div>
  );
}
