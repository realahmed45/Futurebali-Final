import './Package1.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Package3 = () => {
    const navigate = useNavigate();
    const [selectedAddOns, setSelectedAddOns] = useState([]);
  
    const handleCheckboxChange = (room, size, price) => {
      setSelectedAddOns((prev) => {
        const isAlreadySelected = prev.some(addOn => addOn.room === room);
        if (isAlreadySelected) {
          // If already selected, remove from state
          return prev.filter(addOn => addOn.room !== room);
        } else {
          // Otherwise, add the new selection to the state
          return [...prev, { room, size, price }];
        }
      });
    };
  
    const handleProceed = () => {
      // Navigate to the next page and pass the selected add-ons via state
      navigate('/package1-cart', { state: { selectedAddOns } });
    };
  
    return (
      <div className="packages1-container">
        <div className="packages1-header">
          <div className="packages1-header-content">
            <h1 className="packages1-heading">Package1</h1>
            <p className="packages1-description">
              <Link to="/" className="breadcrumb1-link">Home</Link> &gt;
              <Link to="/packages" className="breadcrumb1-link">Packages</Link> &gt; Package1
            </p>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="features-section">
          <div className="features-left">
            <h2>FEATURES</h2>
            
            <div className="feature-item">
              <div className="feature-title">Modern Bali Design</div>
              <div className="feature-title">Open concept layout</div>
            </div>
  
            <div className="feature-item">
              <div className="feature-title">
             <span className="yellow-text"> <span className="highlight-yellow">• </span> 1 room 19-22m²</span>
                
              </div>
              
              <div className="feature-detail">• Walk in closet toward bathroom*</div>
            </div>
        
  
            <div className="feature-item">
              <div className="feature-title">
              <span className="yellow-text"> <span className="highlight-yellow">• </span> 1 kitchen 11-14 m²</span>
              </div>
            </div>
  
            <div className="feature-item">
              <div className="feature-title">
                <span className="yellow-text"> <span className="highlight-yellow">• </span>  1 bathroom 8-14m²</span>
              </div>
              <div className="feature-detail">
                <ul>
                  <li>• Shower</li>
                  <li>• Toilet</li>
                  <li>• Sitting area</li>
                  <li>• Bathtub</li>
                </ul>
              </div>
            </div>
  
            <div className="feature-item">
              <div className="feature-title">
              <span className="yellow-text"> <span className="highlight-yellow">• </span>  All furnishing is included</span>
                
              </div>
              <div className="feature-detail">
                <ul>
                  <li>• Bed settings</li>
                  <li>• All kitchen stuff</li>
                  <li>• All bathroom stuff</li>
                </ul>
              </div>
            </div>
  
            <div className="commitment-text">
              <p>We are committed to delivering quality work on time and without unnecessary interruptions to the client. We follow our flexibility to the best we can do to make sure cost is at the lowest.</p>
              <p>As soon as the construction is done, we will list the property on Airbnb to maximize your return on investment (ROI).</p>
            </div>
          </div>
  
          <div className="features-right">
            <div className="package-info-card">
              <div className="info-item">
                <div className="info-label">Package</div>
                <div className="info-value">Furnished 1 bedroom house</div>
              </div>
              <div className="info-item">
                <div className="info-label">Duration</div>
                <div className="info-value">4 - 6 months</div>
              </div>
              <div className="info-item">
                <div className="info-label">Budget</div>
                <div className="info-value">$25,000</div>
              </div>
            </div>
  
            <div className="package-image">
              <img src={require('../assets/images/package1.1.png')} alt="Package 1" />
            </div>
          </div>
        </div>
  
        <div className="add-ons-section">
          <h2 className="add-ons-heading">Add Ons</h2>
          <p className="add-ons-description">
            Customize your package according to your needs. We will make sure that everything goes smoothly and that you are satisfied with the final result. We are more than just a construction company, we are your partner in creating your ideal living space.
          </p>
        </div>
  
        <div className="cost-of-building-section">
    <div className="cost-of-building-box">
      <h2 className="cost-of-building-heading">COST OF BUILDING IN BALI</h2>
  
      <div className="cost-of-building-tables-container">
        <div className="cost-of-building-table">
        <h2 className="yellow-underline">Included in this package</h2>
          <table>
            <thead>
              <tr>
                <th>Rooms</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bedroom</td>
                <td>18-20 m²</td>
              </tr>
              <tr>
                <td>Bathroom</td>
                <td>9-14 m²</td>
              </tr>
              <tr>
                <td>Kitchen</td>
                <td>12-14 m²</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>5 m²</td>
              </tr>
              <tr>
                <td>Garden</td>
                <td>121 m²</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div className="cost-of-building-table2">
        <h2 className="yellow-underline">Customize According To Your Needs</h2>
        
          <table>
            <thead>
              <tr>
                <th>Rooms</th>
                <th>New Size</th>
                <th>Price</th>
                <th>Add Now</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bedroom</td>
                <td>38 m²</td>
                <td>2000 USD</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange('Bedroom', '38 m²', 2000)}
                  />
                </td>
              </tr>
              <tr>
                <td>Bathroom</td>
                <td>20 m²</td>
                <td>2000 USD</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange('Bathroom', '20 m²', 2000)}
                  />
                </td>
              </tr>
  
              <tr>
                <td>Kitchen</td>
                <td>20 m²</td>
                <td>2000 USD</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange('Kitchen', '20 m²', 2000)}
                  />
                </td>
              </tr>
  
              <tr>
                <td>Storage</td>
                <td>38 m²</td>
                <td>2000 USD</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange('Storage', '38 m²', 2000)}
                  />
                </td>
              </tr>
  
              <tr>
                <td>Garden</td>
                <td>38 m²</td>
                <td>2000 USD</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange('Garden', '38 m²', 2000)}
                  />
                </td>
              </tr>
  
              {/* Repeat for other rooms */}
            </tbody>
          </table>
        
  
        </div>
      </div>
  
      <div className="cost-of-building-notes">
        <p>*living room: if you increase the size of the bedroom it will automatically become larger place with a possibility of a living room maybe</p>
        <p>*kitchen: if you increase the size of your kitchen to upgrade it into a living area</p>
        <p>*bathroom: convert your bathroom into SPA</p>
        <p>*storage: storage for different areas</p>
        <p>*garden: a plan for future for extra unit on your land</p>
      </div>
  
      <div className="cost-of-building-button">
          <button className="yellow-btn" onClick={handleProceed}>
            Proceed with my package
          </button>
        </div>
    
    </div>
  </div>
  
  
    <div className="construction-overview-section">
        <div className="construction-overview-content">
          <div className="construction-overview-left">
            <h2 className="construction-overview-heading">Construction Overview</h2>
              <p className="construction-overview-description">
                Our fully furnished single bedroom house consists of one room of 18-22m², with a possibility of walk-in closet that leads to the bathroom. The bathroom is 8-14m² and has a shower, a toilet, a sitting area, and a bathtub. The kitchen is 10-14m² and has all the necessary appliances and utensils. The package includes all the furniture and accessories for the bed, the kitchen, and the bathroom. We do not require any consent from the clients; we just proceed with the work as planned in what we believe are the best options to make sure it looks amazing. We have given you the option to do slight customization. The full project will be completed within 4 months. There will be a garden, and you have the possibility to increase land size. The contract is based on a 22-year lease and an Airbnb revenue model for you to use and get extra side income from, of which we will be part and set everything up for you.
              </p>
              <p className="construction-overview-description2">
                Fulfill your <span className="highlight-red">Dreams</span>
              </p>
              <p className="construction-overview-description3">
                Start your <span className="highlight-red">Passive!</span> income now
              </p>
         </div>
      
           <div className="construction-overview-right">
            <img 
              src={require('../assets/images/constructionOvr.png')} 
              alt="Construction Overview" 
              className="construction-overview-image" 
            />
          </div>
        </div>
      </div>
  
      <div className="photo-gallery-section">
    <h2 className="photo-gallery-heading">Photo Gallery</h2>
    <div className="photo-gallery-images">
      <img src={require('../assets/images/package1gallery1.png')} alt="Gallery Image 1" className="photo-gallery-image" />
      <img src={require('../assets/images/package1gallery2.png')} alt="Gallery Image 2" className="photo-gallery-image" />
      <img src={require('../assets/images/package1gallery3.png')} alt="Gallery Image 3" className="photo-gallery-image" />
    </div>
  </div>
  
      </div>
    );
  };
  
  
export default Package3;
