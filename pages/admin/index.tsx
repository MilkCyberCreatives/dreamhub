// /pages/admin/index.tsx
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

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
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState<"pdf" | "csv" | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch using native fetch (removes axios bundle weight)
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/bookings");
        if (!res.ok) {
          throw new Error(`Failed to fetch bookings (${res.status})`);
        }

        const data = (await res.json()) as Booking[];
        setBookings(data);
      } catch (err: any) {
        console.error("Error fetching bookings:", err);
        setError("Could not load bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const rows = useMemo(() => {
    return bookings.map((b) => ({
      Name: `${b.firstName} ${b.lastName}`,
      Email: b.email,
      Phone: b.phone,
      Camp: b.campType,
      "Number of Kids": b.numberOfKids,
      Ages: b.ages.join(", "),
      Payment: b.paymentMethod,
    }));
  }, [bookings]);

  // ✅ Lazy load heavy libraries ONLY when exporting
  const exportToPDF = async () => {
    try {
      setExporting("pdf");

      const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
        import("jspdf"),
        import("jspdf-autotable"),
      ]);

      const doc = new jsPDF();
      doc.text("Dreamhub Bookings Report", 14, 16);

      autoTable(doc, {
        startY: 20,
        head: [["Name", "Email", "Phone", "Camp", "# Kids", "Ages", "Payment"]],
        body: bookings.map((b) => [
          `${b.firstName} ${b.lastName}`,
          b.email,
          b.phone,
          b.campType,
          b.numberOfKids,
          b.ages.join(", "),
          b.paymentMethod,
        ]),
      });

      doc.save("dreamhub_bookings.pdf");
    } catch (err) {
      console.error("PDF export error:", err);
      alert("PDF export failed. Please try again.");
    } finally {
      setExporting(null);
    }
  };

  const exportToCSV = async () => {
    try {
      setExporting("csv");

      const [{ default: Papa }, { saveAs }] = await Promise.all([
        import("papaparse"),
        import("file-saver"),
      ]);

      const csv = Papa.unparse(rows);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "dreamhub_bookings.csv");
    } catch (err) {
      console.error("CSV export error:", err);
      alert("CSV export failed. Please try again.");
    } finally {
      setExporting(null);
    }
  };

  return (
    <>
      {/* ✅ SEO: admin pages should never be indexed */}
      <Head>
        <title>Admin Dashboard | Dreamhub</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
            Admin Dashboard
          </h1>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mb-6">
            <button
              onClick={exportToPDF}
              disabled={exporting !== null || bookings.length === 0}
              className="bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white px-4 py-2 rounded shadow-md transition"
            >
              {exporting === "pdf" ? "Exporting PDF..." : "Export PDF"}
            </button>

            <button
              onClick={exportToCSV}
              disabled={exporting !== null || bookings.length === 0}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-4 py-2 rounded shadow-md transition"
            >
              {exporting === "csv" ? "Exporting CSV..." : "Export CSV"}
            </button>
          </div>

          <div className="overflow-x-auto shadow-md rounded-lg bg-white p-4 sm:p-6">
            {loading ? (
              <p className="text-center text-gray-500">Loading bookings…</p>
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : bookings.length === 0 ? (
              <p className="text-center text-gray-500">No bookings found.</p>
            ) : (
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700 text-sm">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Phone</th>
                    <th className="p-3 text-left">Camp</th>
                    <th className="p-3 text-left"># Kids</th>
                    <th className="p-3 text-left">Ages</th>
                    <th className="p-3 text-left">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className="text-sm text-gray-800 border-t hover:bg-gray-50"
                    >
                      <td className="p-3 font-medium">
                        {booking.firstName} {booking.lastName}
                      </td>
                      <td className="p-3">{booking.email}</td>
                      <td className="p-3">{booking.phone}</td>
                      <td className="p-3">{booking.campType}</td>
                      <td className="p-3">{booking.numberOfKids}</td>
                      <td className="p-3">{booking.ages.join(", ")}</td>
                      <td className="p-3">{booking.paymentMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
