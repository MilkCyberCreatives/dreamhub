// /pages/admin/index.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  campType: string;
  numberOfKids: number;
  ages: number[];
  paymentMethod: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Dreamhub Bookings Report', 14, 16);
    autoTable(doc, {
      startY: 20,
      head: [['Name', 'Email', 'Phone', 'Camp', '# Kids', 'Ages', 'Payment']],
      body: bookings.map((b) => [
        `${b.firstName} ${b.lastName}`,
        b.email,
        b.phone,
        b.campType,
        b.numberOfKids,
        b.ages.join(', '),
        b.paymentMethod,
      ]),
    });
    doc.save('dreamhub_bookings.pdf');
  };

  const exportToCSV = () => {
    const csvData = bookings.map((b) => ({
      Name: `${b.firstName} ${b.lastName}`,
      Email: b.email,
      Phone: b.phone,
      Camp: b.campType,
      'Number of Kids': b.numberOfKids,
      Ages: b.ages.join(', '),
      Payment: b.paymentMethod,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'dreamhub_bookings.csv');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">📋 Admin Dashboard</h1>

        <div className="flex justify-end space-x-4 mb-6">
          <button
            onClick={exportToPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-md"
          >
            Export PDF
          </button>
          <button
            onClick={exportToCSV}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-md"
          >
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg bg-white p-6">
          {bookings.length === 0 ? (
            <p className="text-center text-gray-500">No bookings found.</p>
          ) : (
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Camp</th>
                  <th className="p-3"># Kids</th>
                  <th className="p-3">Ages</th>
                  <th className="p-3">Payment</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="text-sm text-gray-800 border-t hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">{booking.firstName} {booking.lastName}</td>
                    <td className="p-3">{booking.email}</td>
                    <td className="p-3">{booking.phone}</td>
                    <td className="p-3">{booking.campType}</td>
                    <td className="p-3">{booking.numberOfKids}</td>
                    <td className="p-3">{booking.ages.join(', ')}</td>
                    <td className="p-3">{booking.paymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
