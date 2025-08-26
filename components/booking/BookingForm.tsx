import React from 'react';
import BillingDetailsSection from './BillingDetailsSection';
import BookingSummary from './BookingSummary';
import PaymentSection from './PaymentSection';

const BookingForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md mt-10 mb-20">
      <h1 className="text-2xl font-bold mb-6">Booking Form</h1>
      <form className="space-y-10">
        <BillingDetailsSection />
        <BookingSummary />
        <PaymentSection />
      </form>
    </div>
  );
};

export default BookingForm;
