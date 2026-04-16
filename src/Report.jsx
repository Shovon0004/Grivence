import { useState, useEffect } from "react";

const Report = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('https://grivencebackendw.onrender.com/api/photos');
        if (response.ok) {
          const data = await response.json();
          setReports(data.map(item => ({
            id: item.code,
            title: item.description || 'No Description',
            status: item.status,
            date: new Date(item.createdAt).toLocaleDateString()
          })));
        }
      } catch (err) {
        console.error("Error fetching reports", err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Reported Issues</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {reports.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Issue</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="text-center border-b">
                  <td className="p-3 border">{report.title}</td>
                  <td className={`p-3 border ${
                    report.status === "Resolved" ? "text-green-600" : 
                    report.status === "In Progress" ? "text-yellow-600" : "text-red-600"
                  }`}>
                    {report.status}
                  </td>
                  <td className="p-3 border">{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">No reports found.</p>
        )}
      </div>
    </div>
  );
};

export default Report;
