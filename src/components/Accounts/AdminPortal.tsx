
import React, { useState } from "react";

// Define Types for User 
interface User {
  id: number;
  name: string;
  email: string;
  rentedBikes: Bike[];
}

interface Bike {
  id: number;
  model: string;
  rentDate: string;
}

// Mock Data
const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    rentedBikes: [
      { id: 1, model: "Yamaha MT-15", rentDate: "2024-01-15" },
      { id: 2, model: "KTM Duke 390", rentDate: "2024-02-10" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    rentedBikes: [
      { id: 3, model: "Royal Enfield Classic 350", rentDate: "2024-03-05" },
    ],
  },
];

const AccountPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between User and Admin view
  const [currentUser, setCurrentUser] = useState<User | null>(mockUsers[0]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Account Page</h1>
      {/* Toggle Button */}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f4b73f", border: "none", cursor: "pointer" }}
      >
        Switch to {isAdmin ? "User" : "Admin"} View
      </button>

      {/* Admin Section */}
      {isAdmin ? (
        <div>
          <h2>Admin Section</h2>
          <ul>
            {mockUsers.map((user) => (
              <li key={user.id} style={{ marginBottom: "10px" }}>
                <strong>{user.name}</strong> ({user.email})
                <button
                  onClick={() => setCurrentUser(user)}
                  style={{ marginLeft: "10px", padding: "5px", cursor: "pointer" }}
                >
                  View Profile
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // User Section
        <div>
          <h2>User Section</h2>
          {currentUser ? (
            <div>
              <h3>Welcome, {currentUser.name}</h3>
              <p>Email: {currentUser.email}</p>
              <h4>Bike Rental History:</h4>
              <ul>
                {currentUser.rentedBikes.map((bike) => (
                  <li key={bike.id}>
                    {bike.model} - Rented on {bike.rentDate}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No user selected</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountPage;
