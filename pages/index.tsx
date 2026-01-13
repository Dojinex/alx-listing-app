import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Listing App - Airbnb Clone</title>
        <meta name="description" content="Airbnb clone listing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ALX Listing App
          </h1>
          <p className="text-lg text-gray-600">
            An Airbnb clone project showcasing property listings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This will be populated with Card components */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              Property cards will appear here. Components are properly structured and ready for development.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Project Structure</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• TypeScript for type safety</li>
              <li>• TailwindCSS for styling</li>
              <li>• ESLint for code quality</li>
              <li>• Reusable components</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
            <p className="text-gray-600">
              Check the README.md for setup instructions and project details.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home