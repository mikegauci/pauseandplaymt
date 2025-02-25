import React from 'react';
import Layout from '../layouts/Layout';

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Frome Festival</h1>
        
        <p className="text-xl mb-8">
          Experience the magic of Frome's premier arts and culture celebration.
        </p>
      </div>
    </Layout>
  );
};

export default Home; 