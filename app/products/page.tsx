'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { ChevronLeft, ChevronRight, Tractor, Sprout, Wrench } from 'lucide-react'

const montserrat = Montserrat({ subsets: ['latin'] })

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aceplanterstock1.jpg-wauKheITTpO5KXCi04rzInaYjDfWn0.jpeg',
    alt: 'Ace Planter precision seeding system in action, showing detailed view of modern planting technology'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aceplanterstock2.jpg-g9nVbeqeFyNNv9jTRbtZB81IVwW5OZ.jpeg',
    alt: 'Ace Planter precision row planting system creating perfect seed placement in freshly prepared soil'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aceplanterstock3.jpg-ic1CAgXhQ5x29TiftpopijLhWKHaGd.jpeg',
    alt: 'Ace Planter equipment demonstrating efficient field preparation and planting capabilities'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aceplanterstock4.jpg-arfThRPPkRxybBxQmAakbg23CmtGOR.jpeg',
    alt: 'Ace Planter tillage system efficiently preparing soil for optimal growing conditions'
  }
]

export default function Products() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className={`min-h-screen bg-gray-100 ${montserrat.className}`}>
      <header className="bg-zinc-800 text-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="h-12 w-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ace-planter-tranparent-i9xDuIYf3MXWsTRm9AaQA8FLnDM9Of.png"
                alt="Ace Planters Logo"
                width={200}
                height={48}
                className="h-full w-auto"
                priority
              />
            </Link>
            <Link 
              href="/" 
              className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition duration-300 inline-flex items-center"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Our Products</h1>
        
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-black">The Original Ace Planter</h2>
          
          <div className="relative">
            <Image 
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              width={1200}
              height={800}
              className="mx-auto rounded-lg object-cover aspect-[3/2]"
              priority={currentImage === 0}
            />
            <button 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">Image {currentImage + 1} of {images.length}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
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

