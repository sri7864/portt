import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer"> 
     <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                   <div className='address'>
                    <p> 89/42, 
                        South Agraharam 
                        Watrap</p>
                    <p>TamilNadu</p>
                   </div>
            </div>
            <div className="phone">
               <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}} />
            8610680924 </h4>
            </div>
            <div className="email">
                <div className='icon'>
               <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}} />
              </div>
              <h4> sriramrengarajan40@gmail.com
            </h4>
            </div>
        </div>
        <div className='right'>
            <h4>About me</h4>
            <p>
I am Sriram Rengarajan, currently working at Capgemini. As a passionate developer, I am capable of translating my thoughts into reality on websites </p>
                <div className='social'>
                <a href="https://www.facebook.com/profile.php?id=100009282484092&mibextid=ZbWKwL"target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a>
                <a href='https://instagram.com/sriram_sriiiiiii?igshid=MmU2YjMzNjRlOQ=='>
                <FaInstagram size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a>
                <a href='https://www.linkedin.com/in/sriram-r-7498b122a'>
                <FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a>

                </div>
        </div>
     </div>
    
    </div>
  )
}

export default Footer