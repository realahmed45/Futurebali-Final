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
    <div className="flex flex-col items-center bg-beige-100">
      <header className="w-full h-[20vh] bg-cover bg-center flex justify-center items-center bg-gradient-to-r from-white to-slate-200 text-purple-600 text-center">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Package2</h1>
        </div>
      </header>

      <div className="flex flex-col md:flex-row mt-16 px-8 gap-8">
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 animate-fade-in-left">
          <h2 className="text-4xl font-bold mb-6 text-purple-700">FEATURES</h2>
          <div className="mb-4">
            <p className="text-lg font-medium text-purple-600">
              Modern Bali Design
            </p>
            <p className="text-lg font-medium text-purple-600">
              Open concept layout
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-purple-600">
              • 1 room 19-22m²
            </p>
            <p className="text-gray-700">• Walk in closet toward bathroom*</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-purple-600">
              • 1 kitchen 11-14 m²
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-purple-600">
              • 1 bathroom 8-14m²
            </p>
            <ul className="list-none pl-6 text-gray-700">
              <li>• Shower</li>
              <li>• Toilet</li>
              <li>• Sitting area</li>
              <li>• Bathtub</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-purple-600">
              • All furnishing is included
            </p>
            <ul className="list-none pl-6 text-gray-700">
              <li>• Bed settings</li>
              <li>• All kitchen stuff</li>
              <li>• All bathroom stuff</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-7">
            We are committed to delivering quality work on time and without
            unnecessary interruptions to the client. We follow our flexibility
            to the best we can do to make sure cost is at the lowest.
          </p>
          <p className="text-gray-700 leading-7 mt-4">
            As soon as the construction is done, we will list the property on
            Airbnb to maximize your return on investment (ROI).
          </p>
        </div>

        <div className="flex-1 animate-fade-in-right">
          <div className="bg-beige-white shadow-md rounded-lg p-6 text-black">
            <div className="mb-4">
              <p className="text-gray-600 text-sm">Package</p>
              <p className="font-bold text-xl">Furnished 1 bedroom house</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-sm">Duration</p>
              <p className="font-bold text-xl">4 - 6 months</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Budget</p>
              <p className="font-bold text-xl">$25,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <img
          src={require("../assets/images/package1.1.png")}
          alt="Package 1"
          className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
      </div>

      <section className="w-full px-8 mt-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4 text-purple-700">Add Ons</h2>
        <p className="text-lg text-gray-700 leading-8">
          Customize your package according to your needs. We will make sure that
          everything goes smoothly and that you are satisfied with the final
          result. We are more than just a construction company, we are your
          partner in creating your ideal living space.
        </p>
      </section>

      <section className="mt-16 px-8">
        <h2 className="text-4xl font-bold mb-6 text-purple-700 animate-fade-in-up">
          COST OF BUILDING IN BALI
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Included in this package
            </h3>
            <table className="w-full border border-gray-300 text-center">
              <thead>
                <tr className="bg-purple-300 text-white">
                  <th className="border px-4 py-2">Rooms</th>
                  <th className="border px-4 py-2">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Bedroom</td>
                  <td className="border px-4 py-2">18-20 m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Bathroom</td>
                  <td className="border px-4 py-2">9-14 m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Kitchen</td>
                  <td className="border px-4 py-2">12-14 m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Storage</td>
                  <td className="border px-4 py-2">5 m²</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Garden</td>
                  <td className="border px-4 py-2">121 m²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex-1 bg-white shadow-md rounded-lg p-6 animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Customize According To Your Needs
            </h3>
            <table className="w-full border border-gray-300 text-center">
              <thead>
                <tr className="bg-purple-300 text-white">
                  <th className="border px-4 py-2">Rooms</th>
                  <th className="border px-4 py-2">New Size</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Add Now</th>
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
                    <td className="border px-4 py-2">{room}</td>
                    <td className="border px-4 py-2">{size}</td>
                    <td className="border px-4 py-2">{price} USD</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(room, size, price)}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-700 leading-7 mt-6">
          *living room: if you increase the size of the bedroom it will
          automatically become larger place with a possibility of a living room
          maybe
        </p>
        <p className="text-gray-700 leading-7">
          *kitchen: if you increase the size of your kitchen to upgrade it into
          a living area
        </p>
        <p className="text-gray-700 leading-7">
          *bathroom: convert your bathroom into SPA
        </p>
        <p className="text-gray-700 leading-7">
          *storage: storage for different areas
        </p>
        <p className="text-gray-700 leading-7">
          *garden: a plan for future for extra unit on your land
        </p>

        <div className="mt-8 flex justify-center">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded animate-bounce"
            onClick={handleProceed}
          >
            Proceed with my package
          </button>
        </div>
      </section>

      <section className="w-full px-8 mt-16">
        <h2 className="text-4xl font-bold mb-8 text-purple-700 animate-fade-in-up">
          Construction Overview
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-md rounded-lg p-6 animate-fade-in-up">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Overview
            </h3>
            <p className="text-gray-700 leading-8">
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

      <section className="w-full px-8 mt-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-8 text-purple-700">
          Photo Gallery
        </h2>
        <div className="flex justify-center gap-6">
          {[
            "package1gallery1.png",
            "package1gallery2.png",
            "package1gallery3.png",
          ].map((img, index) => (
            <img
              key={index}
              src={require(`../assets/images/${img}`)}
              alt={`Gallery Image ${index + 1}`}
              className="w-80 h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Package1;
