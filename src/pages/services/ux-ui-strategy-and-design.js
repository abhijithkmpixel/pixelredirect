import React from 'react'

const Uiux = () => {
  return (
    <div>index</div>
  )
}

export default Uiux;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https:pixelflames.com/services/wordpress-web-design' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}