'use client';
import React from 'react';
import Head from 'next/head';
import BookingForm from '@/components/booking/BookingForm';

const BookingPage = () => {
  return (
    <>
      <Head>
        <title>Book a Camp | Dreamhub</title>
        <meta name="description" content="Book a disciplinary camp for your child with Dreamhub. Safe, impactful, and well-structured programs." />
      </Head>

      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Camp Booking</h1>
          <p className="mt-2 text-gray-600">Secure your spot at one of our upcoming Dreamhub camps.</p>
        </div>

        <BookingForm />
      </main>
    </>
  );
};

export default BookingPage;
