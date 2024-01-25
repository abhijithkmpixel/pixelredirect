import React from 'react'

const Others = () => {
  return (
    <div>Others</div>
  )
}

export default Others;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https:pixelflames.com/portfolio' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}