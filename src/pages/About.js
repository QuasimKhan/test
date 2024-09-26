import React from 'react';
import { Layout } from '../components/Layout/Layout';
import placeholderImage from '../images/about.jpeg'; // Replace with your actual image path

const About = () => {
  return (
    <Layout>
      <main className="bg-gray-100 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-green-600 dark:bg-green-800 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg mb-8">
                Welcome to the Educational Committee of Naseerpur (ECN). We strive to provide valuable educational content and previous year question papers for Indian Central Universities.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src={placeholderImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
              At ECN, our mission is to enhance the educational landscape of Naseerpur by offering students access to top-tier resources, including question papers and study guides, helping them succeed in their academic endeavors.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={placeholderImage} alt="Team Member 1" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Member 1</h3>
                <p className="text-gray-300">A brief description of this team member's role and contribution to ECN.</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={placeholderImage} alt="Team Member 2" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Member 2</h3>
                <p className="text-gray-300">A brief description of this team member's role and contribution to ECN.</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={placeholderImage} alt="Team Member 3" className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Member 3</h3>
                <p className="text-gray-300">A brief description of this team member's role and contribution to ECN.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
