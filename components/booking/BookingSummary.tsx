import React from 'react';

const BookingSummary = () => {
  // Sample values – make dynamic later
  const selectedCamp = '10-Day Camp';
  const kidsAges = [6, 9, 11];

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-6">Camp Summary</h2>
      <div className="space-y-2">
        <p><strong>Selected Camp:</strong> {selectedCamp}</p>
        <p><strong>Number of Kids:</strong> {kidsAges.length}</p>
        <p><strong>Ages:</strong> {kidsAges.join(', ')}</p>
      </div>
      <textarea
        placeholder="Order notes (optional)"
        className="mt-4 w-full border rounded-md p-3"
        rows={3}
      />
    </section>
  );
};

export default BookingSummary;
