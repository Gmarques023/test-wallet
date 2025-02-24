import React, { useState } from "react";
import metaMaskLogo from "../assets/MetaMask_Fox.svg.png"
import trustWalletLogo from "../assets/trustwallet.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import questionMark from '../assets/28744b99f0f82046344c0943f499a625.png'
import binanceChain from '../assets/c474a6a961f92218b8ef28badce8a6c0.png'

function MainCard() {

    const [account, setAccount] = useState(null);

    const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

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
            <div className="d-flex flex-column buttons-container">
              <button type="button" className="main-buttons">
                <div className="d-flex align-items-center test-container"> 
                    <img 
                    src={binanceChain} 
                    alt="binance-logo"
                    className="binance-logo"
                    />
                    <p  className="button-text">Binance Chain</p>
                </div>
              </button>
              <button type="button" className="main-buttons" onClick={connectMetaMask}>
                <div className="d-flex align-items-center test-container">
                    <img 
                    src={metaMaskLogo} 
                    alt="metamask-logo"
                    className="main-logos"
                    />
                    <p className="button-text">Metamask</p>
                </div>
              </button>
              <button type="button" className="main-buttons">
                <div className="d-flex align-items-center test-container">    
                    <img 
                    src={trustWalletLogo} 
                    alt="trustWallet-logo"
                    className="main-logos"
                    />
                    <p className="button-text">Trust Wallet</p>
                </div>
              </button>
            </div> 
            <div className="separator">
                <span className="dotted-line"></span>
                <span className="or-text">or</span>
                <span className="dotted-line"></span>
            </div>
            {account && <h6>Connected Account: {account}</h6>}   
            <div>
              <button className="login-button"><p className="login-text">LOGIN</p></button>  
            </div> 
            <div className="footer-container d-flex">
                <div className="question-container">
                    <img src={questionMark} alt="question-logo" className="question-logo"/>    
                </div>
                <div>
                    <h5>Learn How to Connect...</h5>
                </div>
            </div>    
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  )
}

export default MainCard