import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  useEffect(() => {
    // This effect runs on the client side after the component mounts
    window.location.replace("https:pixelflames.com/about"); // Replace with your desired URL
  }, []);
  return (
    <>
   
    </>
  )
}
// export async function getServerSideProps(context) {
//   // Redirect to the specified URL
//   context.res.writeHead(301, { Location: 'https:pixelflames.com/about' }); // Replace with your desired URL
//   context.res.end();

//   // Note: You can also return an object here with props if needed
//   return { props: {} };
// }