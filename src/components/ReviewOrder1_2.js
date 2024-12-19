import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stepper from "./Stepper"; // Import the Stepper component

const UserInfoForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const steps = ["Review Order", "Place Order", "Confirmation"]; // Simplified steps
  const currentStep = 1; // Set this dynamically based on the current page

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    address: "",
    email: "",
    passportId: "",
    frontImage: null,
    frontImagePreview: null,
    backImage: null,
    backImagePreview: null,
  });

  const [people, setPeople] = useState([formData]);

  const handleInputChange = (index, field, value) => {
    const newPeople = [...people];
    newPeople[index] = {
      ...newPeople[index],
      [field]: value,
    };
    setPeople(newPeople);
  };

  const handleImageUpload = (index, field, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPeople = [...people];
        newPeople[index] = {
          ...newPeople[index],
          [field]: file,
          [`${field}Preview`]: reader.result,
        };
        setPeople(newPeople);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPerson = () => {
    setPeople([...people, { ...formData }]);
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
    navigate("/review_order1_3", {
      state: { selectedAddOns, basePackage, totalCost },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">
        Please fill in the information
      </h2>
      {people.map((person, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={person.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number/WhatsApp
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md"
                value={person.phone}
                onChange={(e) =>
                  handleInputChange(index, "phone", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                value={person.dob}
                onChange={(e) =>
                  handleInputChange(index, "dob", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={person.address}
                onChange={(e) =>
                  handleInputChange(index, "address", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                value={person.email}
                onChange={(e) =>
                  handleInputChange(index, "email", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passport/ID Number
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={person.passportId}
                onChange={(e) =>
                  handleInputChange(index, "passportId", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passport/ID Front Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 relative h-48">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id={`front-image-${index}`}
                  onChange={(e) =>
                    handleImageUpload(index, "frontImage", e.target.files[0])
                  }
                />
                <label
                  htmlFor={`front-image-${index}`}
                  className="cursor-pointer h-full w-full flex items-center justify-center"
                >
                  {person.frontImagePreview ? (
                    <img
                      src={person.frontImagePreview}
                      alt="Front ID Preview"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="text-3xl">+</span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passport/ID Back Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 relative h-48">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id={`back-image-${index}`}
                  onChange={(e) =>
                    handleImageUpload(index, "backImage", e.target.files[0])
                  }
                />
                <label
                  htmlFor={`back-image-${index}`}
                  className="cursor-pointer h-full w-full flex items-center justify-center"
                >
                  {person.backImagePreview ? (
                    <img
                      src={person.backImagePreview}
                      alt="Back ID Preview"
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="text-3xl">+</span>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-purple-50 hover:border-purple-600"
          onClick={addPerson}
        >
          Add another person info to this order +
        </button>

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

export default UserInfoForm;
