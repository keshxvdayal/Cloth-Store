import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="https://marketplace.canva.com/EAFIMHQ5yhE/1/0/1600w/canva-orange-and-teal-summer-sale-kids-fashion-bright-website-banner-L6kUMOWkkho.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center">
          <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight md:text-7xl">
            URBAN<span className="text-rose-500">THREADS</span>
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-200 md:max-w-lg md:text-xl">
            Elevate your style with our premium collection of streetwear essentials
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
              <Link href="/products">
                Shop Collection <ShoppingBag className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              <Link href="/about">
                Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <CategoryCard title="T-Shirts" image="https://themenectar.com/salient/ecommerce-ultimate/wp-content/uploads/sites/19/2018/08/8-back.jpg" link="/products" />
          <CategoryCard title="Hoodies" image="https://nobero.com/cdn/shop/files/Imperfectlyperfectfront_befc14e1-f69e-4272-bba8-3837067f136d.jpg?v=1731586540" link="/products" />
          <CategoryCard title="Caps" image="https://m.media-amazon.com/images/I/61PF6uXthBL._AC_UY1100_.jpg" link="/products" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              title="Classic Black Tee"
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8BibRWYE-MvHbJ2QWkFmzVZwNRevriwGHQ&s"
              slug="classic-black-tee"
            />
            <ProductCard
              title="Urban Hoodie"
              price={59.99}
              image="https://evemen.co/cdn/shop/files/cap3_22d9869e-ba24-4e51-8149-00041efe3c2a.jpg?v=1720433220"
              slug="urban-hoodie"
            />
            <ProductCard
              title="Signature Cap"
              price={24.99}
              image="https://img.freepik.com/free-psd/cap-mockup_1332-60619.jpg?semt=ais_hybrid&w=740"
              slug="signature-cap"
            />
            <ProductCard
              title="Graphic Print Tee"
              price={34.99}
              image="https://qikink.com/wp-content/uploads/2023/06/Printed-oversized-t-shirt.webp"
              slug="graphic-print-tee"
            />
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image src="https://cdn.pixabay.com/photo/2017/12/15/19/07/ecommerce-3021581_1280.jpg" alt="Brand story" fill className="object-cover" />
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2023, URBANTHREADS was born from a passion for quality streetwear that doesn't compromise on
              style or comfort. Our mission is to create timeless pieces that become staples in your wardrobe.
            </p>
            <p className="text-lg text-gray-600">
              Every product is crafted with attention to detail, using premium materials that are built to last. We
              believe in sustainable fashion and ethical manufacturing practices.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="bg-rose-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight md:text-4xl">Join Our Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Subscribe to our newsletter for exclusive offers, new product announcements, and styling tips.
          </p>
          <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-md px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black sm:flex-1"
              required
            />
            <Button type="submit" className="bg-black hover:bg-gray-800">
              Subscribe
            </Button>
          </form>
        </div>
      </section> */}
    </div>
  )
}

function CategoryCard({ title, image, link }: { title: string; image: string; link: string }) {
  return (
    <Link href={link} className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 flex items-center text-white">
          Shop Now <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </p>
      </div>
    </Link>
  )
}

function ProductCard({ title, price, image, slug, description }: { 
  title: string
  price: number
  image: string
  slug: string
  description?: string
}) {
  return (
    <Link href={`/products/${slug}`} className="block">
      <article className="group flex flex-col sm:w-60 w-72 bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all">
        <div className="sm:w-60 w-72 h-60 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={240}
            height={240}
            className="object-cover object-center w-full grayscale-[0.1] group-hover:grayscale-0 h-full rounded-md group-hover:scale-105 transition-all"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600 text-sm truncate">
              {description}
            </p>
          )}
          <div className="text-right mt-4">
            <span className="font-semibold">${price.toFixed(2)}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
