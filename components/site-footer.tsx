import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">
              URBAN<span className="text-rose-500">THREADS</span>
            </h3>
            <p className="text-gray-400">Premium streetwear essentials for the modern wardrobe.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-rose-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-rose-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-rose-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/t-shirts" className="text-gray-400 hover:text-rose-500">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products/hoodies" className="text-gray-400 hover:text-rose-500">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/products/caps" className="text-gray-400 hover:text-rose-500">
                  Caps
                </Link>
              </li>
              <li>
                <Link href="/collections/new-arrivals" className="text-gray-400 hover:text-rose-500">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/bestsellers" className="text-gray-400 hover:text-rose-500">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-rose-500">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-rose-500">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-rose-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-rose-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-rose-500">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-rose-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-rose-500">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-rose-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-rose-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} URBANTHREADS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
