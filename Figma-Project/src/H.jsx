import React from "react";

const RewardsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Rewards Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold">CRAZY REWARDS PROGRAM</h2>
          <p className="mt-2">Unlock the Madness. Grab Your Rewards Today!</p>
        </div>

        {/* Current Rank */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Your Current Rank</h3>
            <div className="mt-4 text-4xl font-bold text-yellow-400">10000.00</div>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">View Chest</button>
          </div>
        </div>

        {/* Chest Keys */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          {["Bronze", "Silver", "Gold", "Platinum"].map((tier, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">{tier} Key</h3>
              <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">View Chest</button>
            </div>
          ))}
        </div>

        {/* Rewards Keys */}
        <h3 className="text-2xl font-semibold mt-8">Rewards Keys</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {["Kickback", "Daily Bonus", "Weekly Bonus", "Monthly Bonus"].map((reward, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold">{reward}</h3>
              <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">Claim Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
