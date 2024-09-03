import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='my-container'>
    <h1 className='text-center text-2xl font-semibold my-8'>PRACTICING REACT COMPONENTS</h1>
    <div className='w-full flex items-center flex-wrap justify-center gap-5'>
    <Card src="https://images.olx.com.pk/thumbnails/483160827-240x180.webp" title="Motorola phone" address="Bhittaiabad, Karachi" time="1 month" price="30,000"/>
    <Card src="https://images.olx.com.pk/thumbnails/467639383-240x180.webp" title="Suzuki Mehran VX 2012" address="Sialkot" time="1 week" price="1,130,000"/>
    <Card src="https://images.olx.com.pk/thumbnails/480511696-800x600.webp" title="Road Prince RX3 2022" address="Model Town, Lahore" time="2 days" price="925,000"/>
    <Card src="https://images.olx.com.pk/thumbnails/481155177-800x600.webp" title="House Sized 10 Marla Available In Citi Housing Society" address="Housing Society, Gujranwala" time="1 week" price="34,000,000"/>
    <Card src="https://images.olx.com.pk/thumbnails/478720544-800x600.webp" title="Football Kits 24/25 Season Available" address="Johar Town Phase 2, Lahore" time="1 month" price="1,700"/>
    <Card src="https://images.olx.com.pk/thumbnails/483190132-240x180.webp" title="Dell latitude Intel core i7-10th Gen Home used Window 11+11 / 32/ RM" address="Ghona Road, Faisalabad" time="3 minutes" price="31,000"/>
    <Card src="https://images.olx.com.pk/thumbnails/482043854-800x600.webp" title="Gaming PC Core i5 4th Generation (slightly used for sale)" address="Bahria Enclave, Islamabad" time="4 days ago" price="99,000"/>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default App