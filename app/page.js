'use client';
import FeaturedProducts from "@/sections/FeaturedProducts";
import LatestProducts from "@/sections/LatestProducts";
import { Promotional } from "@/sections/Promotional";
import Services from "@/sections/Services";
import { TrendingProducts } from "@/sections/TrendingProducts";
import Image from "next/image";

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
