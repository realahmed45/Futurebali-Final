import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Package1 = () => {
  const navigate = useNavigate();
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleCheckboxChange = (room, size, price) => {
    setSelectedAddOns((prev) => {
      const isAlreadySelected = prev.some((addOn) => addOn.room === room);
      if (isAlreadySelected) {
        return prev.filter((addOn) => addOn.room !== room);
      } else {
        return [...prev, { room, size, price }];
      }
    });
  };

  const handleProceed = () => {
    navigate("/package1-cart", { state: { selectedAddOns } });
  };

  return (
    <div
      className="flex flex-col items-center bg-beige-100"
      style={{ margin: "0 auto", width: "65%" }}
    >
      <header className="w-full h-[15vh] bg-cover bg-center flex justify-center items-center bg-gradient-to-r from-white to-slate-200 text-purple-600 text-center">
        <div className="animate-fade-in-down">
          <h1 className="text-3xl font-extrabold mb-4">Package2</h1>
        </div>
      </header>

      <div className="flex flex-col md:flex-row mt-8 px-4 gap-4">
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 animate-fade-in-left">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">FEATURES</h2>
          <div className="mb-2">
            <p className="text-sm font-medium text-purple-600">
              Modern Bali Design
            </p>
            <p className="text-sm font-medium text-purple-600">
              Open concept layout
            </p>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium text-purple-600">
              • 1 room 19-22m²
            </p>
            <p className="text-gray-700">• Walk in closet toward bathroom*</p>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium text-purple-600">
              • 1 kitchen 11-14 m²
            </p>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium text-purple-600">
              • 1 bathroom 8-14m²
            </p>
            <ul className="list-none pl-4 text-gray-700">
              <li>• Shower</li>
              <li>• Toilet</li>
              <li>• Sitting area</li>
              <li>• Bathtub</li>
            </ul>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium text-purple-600">
              • All furnishing is included
            </p>
            <ul className="list-none pl-4 text-gray-700">
              <li>• Bed settings</li>
              <li>• All kitchen stuff</li>
              <li>• All bathroom stuff</li>
            </ul>
          </div>
          <p className="text-sm text-gray-700 leading-5">
            We are committed to delivering quality work on time and without
            unnecessary interruptions to the client. We follow our flexibility
            to the best we can do to make sure cost is at the lowest.
          </p>
          <p className="text-sm text-gray-700 leading-5 mt-2">
            As soon as the construction is done, we will list the property on
            Airbnb to maximize your return on investment (ROI).
          </p>
        </div>

        <div className="flex-1 animate-fade-in-right">
          <div className="bg-beige-white shadow-md rounded-lg p-4 text-black">
            <div className="mb-2">
              <p className="text-gray-600 text-xs">Package</p>
              <p className="font-bold text-lg">Furnished 1 bedroom house</p>
            </div>
            <div className="mb-2">
              <p className="text-gray-600 text-xs">Duration</p>
              <p className="font-bold text-lg">4 - 6 months</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs">Budget</p>
              <p className="font-bold text-lg">$25,000</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <img
              src={require("../assets/images/package1.1.png")}
              alt="Package 1"
              className="w-96 rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      <section className="w-full px-4 mt-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-2 text-purple-700">Add Ons</h2>
        <p className="text-sm text-gray-700 leading-5">
          Customize your package according to your needs. We will make sure that
          everything goes smoothly and that you are satisfied with the final
          result. We are more than just a construction company, we are your
          partner in creating your ideal living space.
        </p>
      </section>

      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 animate-fade-in-up">
          COST OF BUILDING IN BALI
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 bg-white shadow-md rounded-lg p-4 animate-fade-in-left">
            <h3 className="text-xl font-bold mb-2 text-purple-600">
              Included in this package
            </h3>
            <table className="w-full border border-gray-300 text-center">
              <thead>
                <tr className="bg-purple-300 text-white">
                  <th className="border px-2 py-1">Rooms</th>
                  <th className="border px-2 py-1">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">Bedroom</td>
                  <td className="border px-2 py-1">18-20 m²</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Bathroom</td>
                  <td className="border px-2 py-1">9-14 m²</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Kitchen</td>
                  <td className="border px-2 py-1">12-14 m²</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Storage</td>
                  <td className="border px-2 py-1">5 m²</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Garden</td>
                  <td className="border px-2 py-1">121 m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex-1 bg-white shadow-md rounded-lg p-4 animate-fade-in-right">
            <h3 className="text-xl font-bold mb-2 text-purple-600">
              Customize According To Your Needs
            </h3>
            <table className="w-full border border-gray-300 text-center">
              <thead>
                <tr className="bg-purple-300 text-white">
                  <th className="border px-2 py-1">Rooms</th>
                  <th className="border px-2 py-1">New Size</th>
                  <th className="border px-2 py-1">Price USD</th>
                  <th className="border px-2 py-1">Add Now</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { room: "Bedroom", size: "38 m²", price: 2000 },
                  { room: "Bathroom", size: "20 m²", price: 2000 },
                  { room: "Kitchen", size: "20 m²", price: 2000 },
                  { room: "Storage", size: "38 m²", price: 2000 },
                  { room: "Garden", size: "38 m²", price: 2000 },
                ].map(({ room, size, price }) => (
                  <tr key={room}>
                    <td className="border px-2 py-1">{room}</td>
                    <td className="border px-2 py-1">{size}</td>
                    <td className="border px-2 py-1">{price} </td>
                    <td className="border px-2 py-1">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(room, size, price)}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-5 mt-4">
          *living room: if you increase the size of the bedroom it will
          automatically become larger place with a possibility of a living room
          maybe
        </p>
        <p className="text-sm text-gray-700 leading-5">
          *kitchen: if you increase the size of your kitchen to upgrade it into
          a living area
        </p>
        <p className="text-sm text-gray-700 leading-5">
          *bathroom: convert your bathroom into SPA
        </p>
        <p className="text-sm text-gray-700 leading-5">
          *storage: storage for different areas
        </p>
        <p className="text-sm text-gray-700 leading-5">
          *garden: a plan for future for extra unit on your land
        </p>

        <div className="mt-4 flex justify-center">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-4 rounded animate-bounce"
            onClick={handleProceed}
          >
            Proceed with my package
          </button>
        </div>
      </section>

      <section className="w-full  px-4 mt-8 ">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 animate-fade-in-up">
          Construction Overview
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 bg-white shadow-md rounded-lg p-4 animate-fade-in-up">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-purple-600">Overview</h3>
            <p className="text-sm text-gray-700 leading-5">
              Our fully furnished single bedroom house consists of one room of
              18-22m², with a possibility of walk-in closet that leads to the
              bathroom. The bathroom is 8-14m² and has a shower, a toilet, a
              sitting area, and a bathtub. The kitchen is 10-14m² and has all
              the necessary appliances and utensils. The package includes all
              the furniture and accessories for the bed, the kitchen, and the
              bathroom. We do not require any consent from the clients; we just
              proceed with the work as planned in what we believe are the best
              options to make sure it looks amazing.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={require("../assets/images/constructionOvr.png")}
              alt="Construction Overview"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 mt-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Photo Gallery
        </h2>
        <div className="flex justify-center gap-4">
          {[
            "package1gallery1.png",
            "package1gallery2.png",
            "package1gallery3.png",
          ].map((img, index) => (
            <img
              key={index}
              src={require(`../assets/images/${img}`)}
              alt={`Gallery Image ${index + 1}`}
              className="w-40 h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Package1;
