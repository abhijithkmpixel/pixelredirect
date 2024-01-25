import React from 'react'

const aspire = () => {
  return (
    <div>aspire</div>
  )
}

export default aspire;

export async function getServerSideProps(context) {
    // Redirect to the specified URL
    context.res.writeHead(301, { Location: 'https:pixelflames.com/portfolio/aspire' }); // Replace with your desired URL
    context.res.end();

    // Note: You can also return an object here with props if needed
    return { props: {} };
}