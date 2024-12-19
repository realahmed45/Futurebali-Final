import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const steps = ["Review Order", "Place Order", "Confirmation"];
  const currentStep = 1;

  // Extract data passed via state
  const selectedAddOns = state?.selectedAddOns || [];
  const basePackage = state?.basePackage || {
    title: "Fully Furnished 2 Bedroom House With Pool",
    price: 112,
    details: [
      { label: "Master Bedroom", size: "25m²" },
      { label: "Master Bathroom", size: "14m²" },
      { label: "Kitchen", size: "14-18m²" },
      { label: "Garden", size: "26m²" },
      { label: "Storage", size: "5m²" },
      { label: "Swimming Pool", size: "6-8m²" },
    ],
  };

  // Calculate totals
  const addOnTotal = selectedAddOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );
  const totalCost = basePackage.price + addOnTotal;

  // State to manage the agreement checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Navigate to the next page (Place Order) when checkbox is checked
  const handleProceedToOrder = () => {
    if (isChecked) {
      navigate("/review_order1_2", {
        state: { selectedAddOns, basePackage, totalCost },
      });
    } else {
      alert("Please agree to the terms and conditions to proceed.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl mx-4">
      <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">
        Review Your Order
      </h2>
      <div className="border-4 border-black p-6 rounded-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">
            Scope And Payment Details:
          </h3>
          <p>
            Investment: Ms & Mr {state?.formData?.firstName}{" "}
            {state?.formData?.lastName} agrees to pay ${totalCost} for a villa
            with specified features.
          </p>
          <ul className="list-disc pl-5 mt-4">
            {basePackage.details.map((item, index) => (
              <li key={index}>
                {item.label}: {item.size}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">
            Initial Payment & Profit Sharing:
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Profit Sharing: Profits are shared equally (50/50) between Ms & Mr{" "}
              {state?.formData?.firstName} {state?.formData?.lastName} and My
              Future Life Bali.
            </li>
            <li>
              Initial Payment: Ms & Mr will pay ${totalCost / 2} and the
              remaining amount ${totalCost / 2} will be paid 14 days after the
              completion of the building.
            </li>
            <li>
              Profit Payment: The profit will be paid to a bank account via bank
              transfer every 3 months.
            </li>
            <li>
              Guarantor Profit Sharing and ROI Terms (First 2 years):
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Income Below 8% has the right to withdraw and request a 75%
                  refund of the initial investment between year 1-20.
                </li>
                <li>
                  If the return on investment (ROI) is below 12% from year 1 to
                  year 20, you, as the party, will receive 65% of the profit
                  instead of 50%, and 'My Future Life Bali' will receive 35%.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Construction Period:</h3>
          <ul className="list-disc pl-5">
            <li>
              Secret Home will act as a guarantor only during the construction
              period, which shall not exceed six (6) months. The guarantor
              obligation ends either upon the completion of the construction or
              when the property is launched for rental in the market, whichever
              occurs first.
            </li>
            <li>
              If the construction is not completed within the six (6) month
              period, My Secret Home will ensure the full repayment of the
              invested amount plus an additional $500.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Contract Duration:</h3>
          <ul className="list-disc pl-5">
            <li>Term: 22 years</li>
            <li>
              You have the right for 21 days stay per year at the property.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Inheritance:</h3>
          <ul className="list-disc pl-5">
            <li>
              In cases of prolonged absence or death, My Future Life Bali will
              attempt contact with Ms & Mr's relatives or the embassy. Profits
              will be distributed to inheritors as specified by Ms & Mr or
              according to inheritance laws if no inheritors are designated.
            </li>
          </ul>
        </div>

        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-5 h-5 mr-2"
          />
          <label className="text-lg">
            I have reviewed the contract in its entirety and confirm my
            agreement with all terms and conditions.
          </label>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="px-6 py-3 bg-purple-600 text-white text-lg font-bold rounded-lg hover:bg-purple-700 focus:outline-none"
          onClick={handleProceedToOrder}
        >
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;
