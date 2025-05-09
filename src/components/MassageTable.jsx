import React, { useState } from "react";

const massages = [
  { name: "Traditional Dry Therapy", description: "Classic massage technique using no oils or lotions" },
  { name: "Aroma Therapy", description: "Uses essential oils to promote relaxation and well-being" },
  { name: "Swedish Therapy", description: "Gentle massage focusing on relaxation and circulation" },
  { name: "Signature Therapy", description: "Our exclusive massage technique combining multiple styles" },
  { name: "Deep Tissue Therapy", description: "Targets deeper muscle layers to release chronic tension" },
  { name: "Gel/Cream Therapy", description: "Uses special gels and creams for skin nourishment" },
  { name: "Hot Oil Therapy", description: "Warm oils enhance relaxation and soften the skin" },
  { name: "Ayurvedic Potli Therapy", description: "Traditional Indian massage using herbal pouches" },
  { name: "Four Hands Therapy", description: "Two therapists work simultaneously for ultimate relaxation" },
  { name: "Therapy with Turkish Bath", description: "Massage combined with traditional Turkish bath experience" },
  { name: "Therapy with Jacuzzi Bath", description: "Massage followed by a relaxing jacuzzi session" },
  { name: "D-Tan Body Polishing", description: "Removes tan and polishes skin for a natural glow" },
  { name: "Body Scrubbing", description: "Exfoliating treatment that removes dead skin cells" },
  { name: "Ashiatsu Barefoot Massage", description: "Therapist uses feet to deliver deep, broad pressure" },
];

const plans = [
  { name: "Silver Plan", period: "6 Months", sessions: "8 Hours", description: "Six months membership with 8 hours of massage services" },
  { name: "Gold Plan", period: "1 Year", sessions: "15 Hours", description: "One year membership with 15 hours of massage services" },
];

const MassageTable = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("massages"); // "massages" or "plans"
  const [planPeriod, setPlanPeriod] = useState("all"); // "all", "6 Months", or "1 Year"

  // Phone number for WhatsApp - replace with your actual business phone number
  const phoneNumber = "6392240402";

  // Filter massages based on search query
  const filteredMassages = massages.filter(massage => 
    massage.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter plans based on search query and selected period
  const filteredPlans = plans.filter(plan => 
    plan.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
    (planPeriod === "all" || plan.period === planPeriod)
  );

  // Get the selected massage or plan name for the WhatsApp message
  const getSelectedServiceName = () => {
    if (!selectedItem) {
      return activeTab === "massages" ? "massage service" : "membership plan";
    }
    
    const itemType = selectedItem.split('-')[0];
    const itemIndex = parseInt(selectedItem.split('-')[1]);
    
    if (itemType === "massage") {
      return massages[itemIndex].name;
    } else if (itemType === "plan") {
      return plans[itemIndex].name;
    }
    
    return activeTab === "massages" ? "massage service" : "membership plan";
  };
  
  // Redirect to WhatsApp with appropriate message
  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-white py-12 px-6 md:px-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-center sm:text-left text-3xl md:text-4xl font-extrabold text-pink-600 mb-4 sm:mb-0">
          <span className="relative">
            <span className="relative z-10">Our Spa Menu</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-200 opacity-40 z-0"></span>
          </span>
        </h2>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-2 rounded-full border-2 border-pink-300 focus:border-pink-500 focus:outline-none pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="absolute left-3 top-2.5 h-5 w-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex mb-6">
        <button 
          className={`px-4 py-2 rounded-tl-lg rounded-tr-lg font-medium ${
            activeTab === "massages" 
              ? "bg-pink-500 text-white" 
              : "bg-pink-100 text-pink-700 hover:bg-pink-200"
          } transition-all duration-200 flex-1`}
          onClick={() => setActiveTab("massages")}
        >
          Massage Services
        </button>
        <button 
          className={`px-4 py-2 rounded-tl-lg rounded-tr-lg font-medium ${
            activeTab === "plans" 
              ? "bg-pink-500 text-white" 
              : "bg-pink-100 text-pink-700 hover:bg-pink-200"
          } transition-all duration-200 flex-1 ml-2`}
          onClick={() => setActiveTab("plans")}
        >
          Membership Plans
        </button>
      </div>
      
      {/* Period Filter (only for plans) */}
      {activeTab === "plans" && (
        <div className="flex mb-6">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              planPeriod === "all" 
                ? "bg-pink-500 text-white" 
                : "bg-white border border-pink-300 text-pink-700 hover:bg-pink-50"
            } transition-all duration-200`}
            onClick={() => setPlanPeriod("all")}
          >
            All Plans
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full ml-2 ${
              planPeriod === "6 Months" 
                ? "bg-pink-500 text-white" 
                : "bg-white border border-pink-300 text-pink-700 hover:bg-pink-50"
            } transition-all duration-200`}
            onClick={() => setPlanPeriod("6 Months")}
          >
            6 Months
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded-full ml-2 ${
              planPeriod === "1 Year" 
                ? "bg-pink-500 text-white" 
                : "bg-white border border-pink-300 text-pink-700 hover:bg-pink-50"
            } transition-all duration-200`}
            onClick={() => setPlanPeriod("1 Year")}
          >
            1 Year
          </button>
        </div>
      )}
      
      {/* Massage Services Table */}
      {activeTab === "massages" && (
        <div className="overflow-hidden rounded-xl border border-pink-300 shadow-lg bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg">
                <th className="p-4 text-left">Massage Name</th>
                <th className="p-4 text-center">60 min</th>
                <th className="p-4 text-center">90 min</th>
              </tr>
            </thead>
          </table>
          <div className="max-h-72 overflow-y-auto">
            <table className="w-full border-collapse">
              <tbody>
                {filteredMassages.length > 0 ? (
                  filteredMassages.map((massage, index) => (
                    <tr
                      key={index}
                      className={`border-b border-pink-100 transition-all duration-300 hover:bg-pink-50 cursor-pointer ${
                        selectedItem === `massage-${index}` ? "bg-pink-100" : ""
                      }`}
                      onClick={() => setSelectedItem(selectedItem === `massage-${index}` ? null : `massage-${index}`)}
                    >
                      <td className="p-4">
                        <div className="text-gray-800 font-medium text-lg">{massage.name}</div>
                        {selectedItem === `massage-${index}` && (
                          <div className="text-gray-600 mt-2 text-sm italic">{massage.description}</div>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600">✓</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-600">✓</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-8 text-center text-gray-500">
                      No massage services found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Membership Plans Table */}
      {activeTab === "plans" && (
        <div className="overflow-hidden rounded-xl border border-pink-300 shadow-lg bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg">
                <th className="p-4 text-left">Plan Name</th>
                <th className="p-4 text-center">Period</th>
                <th className="p-4 text-center">Duration</th>
              </tr>
            </thead>
          </table>
          <div className="max-h-72 overflow-y-auto">
            <table className="w-full border-collapse">
              <tbody>
                {filteredPlans.length > 0 ? (
                  filteredPlans.map((plan, index) => (
                    <tr
                      key={index}
                      className={`border-b border-pink-100 transition-all duration-300 hover:bg-pink-50 cursor-pointer ${
                        selectedItem === `plan-${index}` ? "bg-pink-100" : ""
                      }`}
                      onClick={() => setSelectedItem(selectedItem === `plan-${index}` ? null : `plan-${index}`)}
                    >
                      <td className="p-4">
                        <div className="text-gray-800 font-medium text-lg">{plan.name}</div>
                        {selectedItem === `plan-${index}` && (
                          <div className="text-gray-600 mt-2 text-sm italic">{plan.description}</div>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full ${
                          plan.period === "1 Year" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                        }`}>
                          {plan.period}
                        </span>
                      </td>
                      <td className="p-4 text-center font-medium">{plan.sessions}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-8 text-center text-gray-500">
                      No membership plans found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <button 
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto"
          onClick={handleCallNow}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          {activeTab === "massages" ? "Call to Book Session" : "Call to Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default MassageTable;