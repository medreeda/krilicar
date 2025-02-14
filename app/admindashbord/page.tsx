import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Manage all car rentals from this dashboard.</p>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Car Rental Management</h2>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">View All Rentals</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded ml-4">Add New Car</button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium">Active Rentals</h3>
        {/* This can be a list of active rentals */}
        <ul className="mt-4">
          <li>Car 1 - Rented</li>
          <li>Car 2 - Available</li>
          <li>Car 3 - Rented</li>
        </ul>
      </div>
    </div>
  );
};


export default AdminDashboard;