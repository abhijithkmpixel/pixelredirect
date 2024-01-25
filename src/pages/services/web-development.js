import React from 'react'

const Webdevelopment = () => {
  return (
    <div>index</div>
  )
}

export default Webdevelopment;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https:pixelflames.com/services/wordpress-design-and-development' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}