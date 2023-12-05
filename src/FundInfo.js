import React, { useState } from 'react';
import Modal from 'react-modal';
import './FundInfo.css'; // Import the CSS file for styling

function FundInfo({ fundData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>View Details</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Fund Info Modal"
        className="fund-info-modal"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'lightgray',
          },
        }}
      >
        <div className="fund-info-container">
          <h1 style={{ color: 'blue' }}>{fundData.scheme_name}</h1>
          <p style={{ color: 'green' }}>AUM: {fundData.aumfund}</p>
          <p style={{ color: 'red' }}>Return (p.a.): {fundData.returnpa}</p>
          <a href={fundData.url} target="_blank" rel="noopener noreferrer">
            <button>Invest</button>
          </a>
          <p style={{ color: 'purple' }}>One day change: {fundData.one_day_change}</p>
          <button onClick={() => setModalIsOpen(false)}>Close Details</button>
        </div>
      </Modal>
    </div>
  );
}

export default FundInfo;