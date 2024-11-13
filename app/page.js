'use client';
import TestPage from '@/sections/TestPage';
import { TrendingProducts } from '@/sections/TrendingProducts';
import dynamic from 'next/dynamic';


const FeaturedProducts = dynamic(() => import('@/sections/FeaturedProducts'));
const LatestProducts = dynamic(() => import('@/sections/LatestProducts'));
const Promotional = dynamic(() => import('@/sections/Promotional'));
const Services = dynamic(() => import('@/sections/Services'));
const UniqueProducts = dynamic(() => import('@/sections/UniqueProducts'));
export default function Home() {
  return (
    <div>
      <div>
        <Promotional />
        <FeaturedProducts />
        <LatestProducts />
        <Services />
        <UniqueProducts />
        <TrendingProducts />
        <TestPage />
      </div>
    </div>
  );
}