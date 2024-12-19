import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const InheritanceForm = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const [skipForm, setSkipForm] = useState(false);
  const [formData, setFormData] = useState({
    contact1: {
      name: "",
      phoneNumber: "",
      passportId: "",
    },
    contact2: {
      name: "",
      phoneNumber: "",
      passportId: "",
    },
  });

  const handleInputChange = (contact, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [contact]: {
        ...prev[contact],
        [field]: value,
      },
    }));
  };

  const selectedAddOns = state?.selectedAddOns || [];
  const basePackage = state?.basePackage || {
    description: "No Package Selected",
    price: 0,
  };

  // Calculate totals
  const addOnTotal = selectedAddOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );
  const totalCost = basePackage.price + addOnTotal;

  const handleNext = () => {
    if (!skipForm) {
      // Process form data
      navigate("/place-order", {
        state: { selectedAddOns, basePackage, totalCost },
      });
    } else {
      // Skip form and proceed
      navigate("/place-order");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-purple-700 text-center">
        Please fill in the inheritance information
      </h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        If there is no contact from 'Ms & Mr (_____)' to 'My Future Life Iieit'
        for 9-12 months, 'My Future Life Iieit' must attempt to contact 'Ms & Mr
        (_____)'s relatives or the appropriate embassy. Please mention below 2
        contacts with phone numbers.
      </p>

      {!skipForm && (
        <>
          {/* Contact 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-600">
              Contact 1
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.contact1.name}
                    onChange={(e) =>
                      handleInputChange("contact1", "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number/ WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.contact1.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "contact1",
                        "phoneNumber",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport/ ID Number (Optional)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.contact1.passportId}
                  onChange={(e) =>
                    handleInputChange("contact1", "passportId", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Contact 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-600">
              Contact 2
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.contact2.name}
                    onChange={(e) =>
                      handleInputChange("contact2", "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number/ WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.contact2.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(
                        "contact2",
                        "phoneNumber",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport/ ID Number (Optional)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.contact2.passportId}
                  onChange={(e) =>
                    handleInputChange("contact2", "passportId", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex items-center justify-between mt-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-purple-600"
            checked={skipForm}
            onChange={(e) => setSkipForm(e.target.checked)}
          />
          <span className="text-sm text-gray-600">
            I will do it later or I don't want to fill this form
          </span>
        </label>

        <button
          className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InheritanceForm;
