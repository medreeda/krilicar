import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Manage all car rentals from this dashboard.</p>
      {/* Additional components for managing cars can be added here */}
    </div>
  );
};

export default AdminDashboard;
