import React, { useEffect } from 'react'

const Algurg = () => {
    // useEffect(() => {
    //     // This effect runs on the client side after the component mounts
    //     window.location.replace("https://pixelflames.com/portfolio"); // Replace with your desired URL
    // }, []);
  return (
    <div>Algurg</div>
  )
}

export default Algurg;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https://pixelflames.com/portfolio' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}