import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { location } from '../pages/data/location';
import { house } from '../pages/data/house'
import Image from 'next/image';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-clone</title>
      </Head>
      <Header />
      <Banner />

      <main className='max-w-5xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4'>
            {location.map((locationItem, index) => (
              <div className='flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out' key={index}>
                <div className='relative h-16 w-16'>
                  <Image layout='fill' className='rounded-lg' src={locationItem.imgUrl} alt={locationItem.location} />
                </div>
                <div>
                  <h2>{locationItem.location}</h2>
                  <h2 className='text-gray-500'>{locationItem.distance}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-4 overflow-scroll 
          scrollbar-hide p-3  '>
            {house.map((houseItem, index) => (
              <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'
              key={index}>
                <div className='relative h-80 w-80'>
                  <Image layout='fill' className='rounded-xl ' src={houseItem.imgUrl} alt={houseItem.house} />
                </div>
                <div>
                  <h2 className='text-2xl mt-3'>{houseItem.house}</h2>
                  {/* Add more content for each house */}
                </div>
              </div>
            ))}
          </div>
        </section>
        <LargeCard
        img="https:links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="whishlists curated by Airbnb."
        buttonText="Get Inspired"
        />
      </main>

      <Footer/>
    </div>
  );
}



export async function getStaticProps() {
  try {
    const res = await fetch('https://links.papareact.com/pyp');
    const exploreData = await res.json();
     
    const cardsData =await fetch('https://links.papareact.com/api').
    then((res) =>
    res.json()
    );

    return {
      props: {
        exploreData,
        cardsData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        exploreData: [], // Return an empty array or default data in case of error
      },
    };
  }
}
