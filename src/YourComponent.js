import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-bqxlr/endpoint/data/v1/action/findOne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': '78pmE1lXWpHNCk2vpDjfVuR56bHlefOPEgfEG7vZxbHMDNUQKXpiaJygqOizQHMn',
          },
          body: JSON.stringify({
            collection: 'funds',
            database: 'test',
            dataSource: 'Cluster0',
            projection: { _id: 1 },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(data)
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <div>
      <h1>Your React Component</h1>
      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default YourComponent;
