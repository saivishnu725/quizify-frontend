// pages/home.js
import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Other content */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                <h1>Welcome!</h1>
                <button style={{ fontSize: '24px', padding: '10px 20px', marginBottom: '10px' }}>Create!</button>
                <br />
                <input type="text" placeholder="Enter the 6 digit code" style={{ marginBottom: '10px' }} />
                <br />
                <button style={{ fontSize: '18px', padding: '8px 16px' }}>Join</button>
            </div>
        </div>
        // </div>
    );
};

export default Home;