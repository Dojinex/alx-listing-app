import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="p-8">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to ALX Listing App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Beautiful Apartment"
          description="A cozy 2-bedroom apartment in the city center."
          image="/assets/sample1.jpg"
        />
        <Card
          title="Beachside Villa"
          description="Enjoy the ocean view and fresh air."
          image="/assets/sample2.jpg"
        />
        <Card
          title="Mountain Cabin"
          description="Perfect getaway for peace and quiet."
          image="/assets/sample3.jpg"
        />
      </div>

      <div className="flex justify-center mt-8">
        <Button label="Explore More" onClick={() => alert('Feature Coming Soon!')} />
      </div>
    </div>
  );
}
