import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API);
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData.msg);
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    return (
        <div>
            <h3>{data}</h3>
        </div>
    );
};

export default Navbar;
