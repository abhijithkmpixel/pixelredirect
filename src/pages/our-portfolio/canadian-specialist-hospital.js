import React, { useEffect } from 'react'

const csh = () => {
    // useEffect(() => {
    //     // This effect runs on the client side after the component mounts
    //     window.location.replace("https://pixelflames.com/portfolio/canadian-specialist-hospital"); // Replace with your desired URL
    // }, []);
  return (
    <div>csh</div>
  )
}

export default csh;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https://pixelflames.com/portfolio/canadian-specialist-hospital' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}