import React from 'react'

const odepc = () => {
  return (
    <div>odepc</div>
  )
}

export default odepc;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https:pixelflames.com/portfolio/odepc' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}