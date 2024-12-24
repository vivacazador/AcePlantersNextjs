import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-black">1. Information We Collect</h2>
          <p className="mb-4 text-gray-700">We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-black">2. How We Use Your Information</h2>
          <p className="mb-4 text-gray-700">We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-black">3. Information Sharing and Disclosure</h2>
          <p className="mb-4 text-gray-700">We do not share your personal information with third parties except as described in this policy.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-black">4. Data Security</h2>
          <p className="mb-4 text-gray-700">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-black">5. Changes to This Policy</h2>
          <p className="mb-4 text-gray-700">We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
        </div>
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

