'use client';
import dynamic from 'next/dynamic';


const FeaturedProducts = dynamic(() => import('@/sections/FeaturedProducts'));
const LatestProducts = dynamic(() => import('@/sections/LatestProducts'));
const Promotional = dynamic(() => import('@/sections/Promotional'));
const Services = dynamic(() => import('@/sections/Services'));
const TrendingProducts = dynamic(() => import('@/sections/TrendingProducts'));

export default function Home() {
  return (
    <div>
      <div>
        <Promotional />
        <FeaturedProducts />
        <Services />
        <TrendingProducts />
        <LatestProducts />
      </div>
    </div>
  );
}