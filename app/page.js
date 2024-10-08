'use client';
import FeaturedProducts from "@/sections/FeaturedProducts";
import LatestProducts from "@/sections/LatestProducts";
import { Promotional } from "@/sections/Promotional";

export default function Home() {
  return (
    <div>
    
    <div>
    <Promotional />
    <FeaturedProducts />
    <LatestProducts />
    </div>
    </div>
  );
}
