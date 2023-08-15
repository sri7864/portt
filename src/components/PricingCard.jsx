import { Link } from "react-router-dom"
import "./Pricingcard.css"
import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar"></span>
          <p className="btc">₹5k</p>
          <p> - 3Days -</p>
          <p> - 3Pages -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>


        <div className="card">
          <h3>-Perimimum-</h3>
          <span className="bar"></span>
          <p className="btc">₹10k</p>
          <p> - 5Days -</p>
          <p> - 5Pages -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>


        <div className="card">
          <h3>-Business-</h3>
          <span className="bar"></span>
          <p className="btc">₹15k</p>
          <p> - 7Days -</p>
          <p> - 19Pages -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

      </div>

    </div>
  )
}

export default PricingCard