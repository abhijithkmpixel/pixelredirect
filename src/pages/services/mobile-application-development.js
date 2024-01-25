import React, { useEffect } from 'react'

const Mobileapplicationdevelopment = () => {
  useEffect(() => {
    // This effect runs on the client side after the component mounts
    window.location.replace("https:pixelflames.com/service"); // Replace with your desired URL
  }, []);
  return (
    <div>index</div>
  )
}

export default Mobileapplicationdevelopment;

// export async function getServerSideProps(context) {
//     // Redirect to the specified URL
//     context.res.writeHead(301, { Location: 'https:pixelflames.com/service' }); // Replace with your desired URL
//     context.res.end();

//     // Note: You can also return an object here with props if needed
//     return { props: {} };
// }