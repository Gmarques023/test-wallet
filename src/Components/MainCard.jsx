import React from "react";
import metaMaskLogo from "../assets/MetaMask_Fox.svg.png"
import trustWalletLogo from "../assets/trust-wallet-token-twt-icon-isolated-on-white-background-vector.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function MainCard() {

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p>Connect Wallet Popup</p>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 main-container">
            <h3 className="wallet-title d-flex justify-content-between align-items-center fw-bold">
                Connect Your Wallet!
                <div><FontAwesomeIcon icon={faXmark} /></div>
            </h3>
            <div className="d-flex flex-column">
              <button type="button" className="main-buttons">
                <img 
                  src={`https://logowik.com/content/uploads/images/binance-black-icon5996.logowik.com.webp`} 
                  alt="binance-logo"
                />
                  Binance Chain
              </button>
              <button type="button" className="main-buttons">
                <img 
                  src={metaMaskLogo} 
                  alt="metamask-logo"
                />
                Metamask
              </button>
              <button type="button" className="main-buttons">
                <img 
                  src={trustWalletLogo} 
                  alt="trustWallet-logo"
                />
                Trust Wallet
              </button>
            </div>    
            <div>
              <button className="login-button">LOGIN</button>  
            </div>     
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  )
}

export default MainCard