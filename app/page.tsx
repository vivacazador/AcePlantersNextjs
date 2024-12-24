'use client'

import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { ArrowRight, Tractor, Sprout, Wrench } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('error', () => setVideoError(true));
      return () => video.removeEventListener('error', () => setVideoError(true));
    }
  }, []);

  return (
    <div className={`min-h-screen bg-gray-100 ${montserrat.className}`}>
      <header className="bg-zinc-800 text-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="h-12 w-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ace-planter-tranparent-i9xDuIYf3MXWsTRm9AaQA8FLnDM9Of.png"
                alt="Ace Planters Logo"
                width={200}
                height={48}
                className="h-full w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-300 hover:text-red-500 transition duration-300">Product Features</a>
              <a href="#sales" className="text-gray-300 hover:text-red-500 transition duration-300">Sales</a>
              <a href="#service" className="text-gray-300 hover:text-red-500 transition duration-300">Customer Service</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Ace+Planters+Video+Placeholder"
              alt="Ace Planters Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {!videoError && (
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18879174-uhd_3840_2160_50fps%20(1)-rp26Y5YRs5gL4VWzlmAeSl3n9Fo3m3.mp4" type="video/mp4" />
            </video>
          )}
          <div className="z-20 text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-5xl font-bold mb-4">Ace Planters</h1>
            <p className="text-xl mb-8">Simple. Durable. Efficient.</p>
            <Link 
              href="/products" 
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 inline-flex items-center"
            >
              Discover Our Products
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Product Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Tractor className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">Built to Last</h3>
                <p className="text-gray-700">Designed for years of reliable service with minimal maintenance.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Sprout className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">Precision Planting</h3>
                <p className="text-gray-700">Advanced sensors ensure accurate seed placement for optimal crop yield.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Wrench className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">Easy Maintenance</h3>
                <p className="text-gray-700">Simple design allows for quick and easy maintenance and repairs.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sales" className="py-20 bg-gray-200">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Sales</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-black">Find an Ace Planters Distributor</h3>
              <p className="mb-6 text-gray-700">Our network of authorized distributors ensures you get the best service and support for your Ace Planter.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-black">Midwest Region</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Heartland Ag Solutions</li>
                    <li>Prairie Equipment Co.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Southern Region</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Southern Farm Supplies</li>
                    <li>Gulf Coast Planters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Western Region</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Pacific Ag Equipment</li>
                    <li>Mountain States Machinery</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link 
                  href="/distributors" 
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 inline-flex items-center"
                >
                  Contact Sales
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="py-20 bg-black text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Customer Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Support Hours</h3>
                <p className="mb-2">Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                <p>Saturday: 9:00 AM - 2:00 PM CST</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-2">Phone: 1-800-ACE-PLANT</p>
                <p className="mb-2">Email: support@aceplanters.com</p>
                <p>Address: 1234 Ag Tech Lane, Farmville, USA 12345</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">How often should I service my Ace Planter?</summary>
                  <p className="mt-2 text-gray-300">We recommend a full service check before each planting season and regular maintenance as outlined in your user manual.</p>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">What's covered under the warranty?</summary>
                  <p className="mt-2 text-gray-300">Our standard warranty covers all manufacturing defects for 2 years from the date of purchase. Extended warranties are available.</p>
                </details>
                <details>
                  <summary className="font-semibold cursor-pointer">How can I order replacement parts?</summary>
                  <p className="mt-2 text-gray-300">Replacement parts can be ordered through our online store or by contacting your local Ace Planters distributor.</p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Ace Planters. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-red-500 mx-2 transition duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-red-500 mx-2 transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

