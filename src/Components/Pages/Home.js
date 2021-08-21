import React from 'react';
import '../../App.css'
import Card from '../Card';
import '../CSS/HeroSection.css'
import Footer from '../Footer';
import HeroSection from '../HeroSection'


function Home() {
    return (
        <div>
            <HeroSection />
            <Card />
            <Footer />
        </div>
    )
}

export default Home
