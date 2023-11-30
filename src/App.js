import React, { useState, useEffect } from 'react';

function App() {
  const [fundsData, setFundsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://asia-south1.gcp.data.mongodb-api.com/app/application-0-rvhrr/endpoint/getfunds');

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if there is content before parsing JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('API Response:', data); // Log the response to the console
          setFundsData(data);
        } else {
          throw new Error('Invalid content type in response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial',
      margin: '20px',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      fontSize: '24px',
      margin: '20px 0',
    },
    card: {
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      margin: '10px',
      backgroundColor: '#f8f8f8',
    },
    button: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    text: {
      color: '#555',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mutual Funds</h1>
      <div style={styles.card}>
        {fundsData.map((fund, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.text}>{fund.scheme_name}</h3>
			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<button
				style={styles.button}
				onClick={() => window.open(fund.url, '_blank')}
				rel="noopener noreferrer"
				>
				Visit Website
				</button>
			</div>
            <div style={styles.text}>
              <p>1 Day Change: {fund['1_day_change']}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;