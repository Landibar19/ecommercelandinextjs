import TestImage from '../public/assets/FeaturedProducts/image 1.jpg';

import Image from 'next/image';

const TestPage = () => {
  return (
    <div>
      <h1>Test Image</h1>
      <Image src="/assets/FeaturedProducts/image 1.jpg" alt="Test Image" width={200} height={200} />
    </div>
  );
};

export default TestPage;