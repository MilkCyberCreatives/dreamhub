import React, { useState } from 'react';

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('yoco');

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="yoco"
            checked={paymentMethod === 'yoco'}
            onChange={() => setPaymentMethod('yoco')}
          />
          <span className="font-medium">Yoco</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="ozow"
            checked={paymentMethod === 'ozow'}
            onChange={() => setPaymentMethod('ozow')}
          />
          <span className="font-medium">Ozow</span>
        </label>
      </div>

      <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
        Place order
      </button>
    </section>
  );
};

export default PaymentSection;
