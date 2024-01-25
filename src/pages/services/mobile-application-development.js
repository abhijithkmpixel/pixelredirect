import React from 'react'

const Mobileapplicationdevelopment = () => {
  return (
    <div>index</div>
  )
}

export default Mobileapplicationdevelopment;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https:pixelflames.com/service' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}