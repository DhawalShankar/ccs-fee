import { useState, useEffect } from 'react';

export default function SchoolFeeDashboard() {
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    amount: '',
    month: ''
  });
  
  const [isAnimated, setIsAnimated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const classes = [
    'PG (Play-Group)',
    'Nursery', 
    'Prep',
    '1st Grade',
    '2nd Grade',
    '3rd Grade',
    '4th Grade',
    '5th Grade',
    '6th Grade',
    '7th Grade',
    '8th Grade'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Please enter student name';
    if (!formData.class) newErrors.class = 'Please select a class';
    if (!formData.amount || formData.amount <= 0) newErrors.amount = 'Please enter a valid amount';
    if (!formData.month) newErrors.month = 'Please select a month';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (validateForm()) {
      window.open("https://pages.razorpay.com/pl_RMuEpNshlRNVz1/view", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-400/25 to-orange-500/25 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-spin"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce">🌈</div>
        <div className="absolute top-20 right-20 text-5xl opacity-40 animate-pulse">⭐</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-35 animate-bounce delay-500">🎨</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-30 animate-pulse delay-1000">🚀</div>
        <div className="absolute top-1/2 left-1/4 text-3xl opacity-25 animate-spin">🎪</div>
        <div className="absolute top-1/3 right-1/3 text-4xl opacity-35 animate-bounce delay-700">🎭</div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-screen mx-auto px-4 py-8">
            <div className={`flex items-center justify-center transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm transform hover:scale-110 transition-transform duration-300">
                  <img 
                    src="images/ccslogo.jpg" 
                    alt="CCS Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-black mb-2">
                    <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                      Cape Comorin School - CCS
                    </span>
                  </h1>
                  <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 rounded-full text-white font-bold text-xl shadow-lg animate-pulse">
                    🎓 Secure Fee Payment Portal 🎓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 md:p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-3xl">💳</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Let's Pay Your School Fee!</h2>
                    <p className="text-gray-300">Fill in the magical details below ✨</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Student Name */}
                  <div className="group">
                    <label className="block text-white font-bold mb-3 text-lg">
                      <span className="flex items-center">
                        <span className="text-2xl mr-3">👦</span>
                        Student Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 text-lg font-semibold ${errors.studentName ? 'border-red-400 bg-red-500/20' : 'border-white/30 hover:border-white/50'}`}
                      placeholder="Type your full name here! ✏️"
                    />
                    {errors.studentName && <p className="text-red-300 text-sm mt-2 font-semibold">⚠️ {errors.studentName}</p>}
                  </div>

                  {/* Class Selection */}
                  <div className="group">
                    <label className="block text-white font-bold mb-3 text-lg">
                      <span className="flex items-center">
                        <span className="text-2xl mr-3">📚</span>
                        Your Class
                      </span>
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 text-lg font-semibold ${errors.class ? 'border-red-400 bg-red-500/20' : 'border-white/30 hover:border-white/50'}`}
                    >
                      <option value="" className="text-gray-800">🌟 Pick your class! 🌟</option>
                      {classes.map((cls, index) => (
                        <option key={index} value={cls} className="text-gray-800 font-semibold">{cls}</option>
                      ))}
                    </select>
                    {errors.class && <p className="text-red-300 text-sm mt-2 font-semibold">⚠️ {errors.class}</p>}
                  </div>

                  {/* Month and Amount Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Month Selection */}
                    <div className="group">
                      <label className="block text-white font-bold mb-3 text-lg">
                        <span className="flex items-center">
                          <span className="text-2xl mr-3">📅</span>
                          Which Month?
                        </span>
                      </label>
                      <select
                        name="month"
                        value={formData.month}
                        onChange={handleInputChange}
                        className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 text-lg font-semibold ${errors.month ? 'border-red-400 bg-red-500/20' : 'border-white/30 hover:border-white/50'}`}
                      >
                        <option value="" className="text-gray-800">🗓️ Choose the month! 🗓️</option>
                        {months.map((month, index) => (
                          <option key={index} value={month} className="text-gray-800 font-semibold">{month}</option>
                        ))}
                      </select>
                      {errors.month && <p className="text-red-300 text-sm mt-2 font-semibold">⚠️ {errors.month}</p>}
                    </div>

                    {/* Amount */}
                    <div className="group">
                      <label className="block text-white font-bold mb-3 text-lg">
                        <span className="flex items-center">
                          <span className="text-2xl mr-3">💰</span>
                          Fee Amount (₹)
                        </span>
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 text-lg font-semibold ${errors.amount ? 'border-red-400 bg-red-500/20' : 'border-white/30 hover:border-white/50'}`}
                        placeholder="How much to pay? 💵"
                        min="1"
                      />
                      {errors.amount && <p className="text-red-300 text-sm mt-2 font-semibold">⚠️ {errors.amount}</p>}
                    </div>
                  </div>

                  {/* Payment Methods Info */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-2xl">💳</span>
                      </div>
                      <span className="text-cyan-100 font-bold text-xl">Available Payment Methods</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-3xl mb-2">💳</div>
                        <div className="text-sm text-cyan-100 font-semibold">Cards</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-3xl mb-2">📱</div>
                        <div className="text-sm text-cyan-100 font-semibold">UPI</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-3xl mb-2">🏦</div>
                        <div className="text-sm text-cyan-100 font-semibold">NetBanking</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                        <div className="text-3xl mb-2">💰</div>
                        <div className="text-sm text-cyan-100 font-semibold">Wallets</div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handlePayment}
                    className="w-full py-6 px-8 rounded-2xl font-black text-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300"
                  >
                    🚀 Pay Securely with Razorpay ✨
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Panel */}
            <div className={`space-y-6 transition-all duration-1000 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Payment Summary */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-xl">📋</span>
                  </div>
                  Your Payment Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-pink-500/20 backdrop-blur-sm rounded-xl border border-pink-400/30">
                    <span className="text-pink-200 font-semibold flex items-center">
                      <span className="text-xl mr-2">👦</span>Student:
                    </span>
                    <span className="text-pink-100 font-bold">{formData.studentName || '???'}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-400/30">
                    <span className="text-blue-200 font-semibold flex items-center">
                      <span className="text-xl mr-2">📚</span>Class:
                    </span>
                    <span className="text-blue-100 font-bold">{formData.class || '???'}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
                    <span className="text-yellow-200 font-semibold flex items-center">
                      <span className="text-xl mr-2">📅</span>Month:
                    </span>
                    <span className="text-yellow-100 font-bold">{formData.month || '???'}</span>
                  </div>
                  <div className="border-t-2 border-dashed border-white/20 my-4"></div>
                  <div className="flex justify-between items-center p-5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-xl border border-green-400/40">
                    <span className="text-2xl font-black text-green-200 flex items-center">
                      <span className="text-2xl mr-2">💰</span>Total:
                    </span>
                    <span className="text-4xl font-black text-green-100">₹{formData.amount || '0'}</span>
                  </div>
                </div>
              </div>

              {/* Razorpay Security Notice */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-400/30 p-6">
                <h3 className="text-xl font-bold text-green-200 mb-3 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-lg">🛡️</span>
                  </div>
                  Secured by Razorpay
                </h3>
                <p className="text-green-300 font-semibold">
                  <span className="text-lg">🔒</span> Your payment is protected by Razorpay's 
                  bank-level security! Trusted by millions! <span className="text-lg">✨</span>
                </p>
              </div>

              {/* Contact Support */}
              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-400/30 p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-3 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-lg">🤝</span>
                  </div>
                  Need Help?
                </h3>
                <p className="text-purple-300 font-semibold text-sm mb-3">
                  Ask your parents to contact our friendly helpers!
                </p>
                <div className="text-purple-200 font-bold text-sm space-y-2">
                  <p className="flex items-center"><span className="text-lg mr-2">📧</span> ccs.nurturedreams@gmail.com</p>
                  <p className="flex items-center"><span className="text-lg mr-2">📞</span> +91 9839474191</p>
                  <p className="flex items-center"><span className="text-lg mr-2">🕒</span> Office Hours: Mon-Sat: 9AM-3PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className={`text-center mt-12 transition-all duration-1000 delay-600 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <p className="text-white font-bold text-lg">
                <span className="text-2xl">🌈</span> © 2025 Cape Comorin School - CCS Fee Portal (Powered by Razorpay) 
                <span className="text-2xl ml-2">💳</span>
              </p>
              <p className="text-gray-300 font-semibold mt-2">
                Made with <span className="text-red-400 text-xl">❤️</span> for amazing kids like you!
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}