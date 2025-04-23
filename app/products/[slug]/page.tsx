"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Product data mapping
const productsData = {
  "classic-black-tee": {
    id: "1",
    name: "Classic Black Tee",
    slug: "classic-black-tee",
    price: 29.99,
    description: "Our signature t-shirt made from premium cotton for ultimate comfort and durability. Features a relaxed fit with a classic crew neck and short sleeves.",
    details: "100% Organic Cotton\nRegular fit\nMachine wash cold\nMade in Portugal",
    features: [
      "Premium combed ringspun cotton",
      "Pre-shrunk fabric",
      "Shoulder-to-shoulder taping",
      "Seamless collar",
      "Double-needle stitching throughout",
    ],
    colors: ["Black", "White", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8BibRWYE-MvHbJ2QWkFmzVZwNRevriwGHQ&s",
      "https://img.freepik.com/free-photo/black-t-shirt-with-word-tokyo-it_1340-25481.jpg",
      "https://img.freepik.com/free-photo/black-t-shirt-mockup_125540-430.jpg",
      "https://img.freepik.com/free-photo/basic-black-tee-unisex-apparel-mockup_53876-165988.jpg"
    ],
    category: "T-Shirts",
    rating: 4.8,
    reviewCount: 124,
  },
  "urban-hoodie": {
    id: "2",
    name: "Urban Hoodie",
    slug: "urban-hoodie",
    price: 59.99,
    description: "A comfortable and stylish hoodie perfect for urban lifestyle. Features a modern fit with premium quality cotton blend material.",
    details: "80% Cotton, 20% Polyester\nModern fit\nMachine wash cold\nMade in Portugal",
    features: [
      "Premium cotton blend fabric",
      "Adjustable drawstring hood",
      "Kangaroo pocket",
      "Ribbed cuffs and hem",
      "Double-layered hood",
    ],
    colors: ["Black", "Gray", "Navy", "Olive"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://evemen.co/cdn/shop/files/cap3_22d9869e-ba24-4e51-8149-00041efe3c2a.jpg?v=1720433220",
      "https://img.freepik.com/free-photo/gray-hoodie-front_125540-736.jpg",
      "https://img.freepik.com/free-photo/white-hoodie-front_125540-731.jpg",
      "https://img.freepik.com/free-photo/hoodie-mockup-front-view_125540-518.jpg"
    ],
    category: "Hoodies",
    rating: 4.9,
    reviewCount: 89,
  },
  "signature-cap": {
    id: "3",
    name: "Signature Cap",
    slug: "signature-cap",
    price: 24.99,
    description: "Our signature baseball cap featuring premium construction and classic design. Perfect for any casual outfit.",
    details: "100% Cotton\nAdjustable strap\nOne size fits most\nMade in USA",
    features: [
      "6-panel construction",
      "Pre-curved visor",
      "Adjustable back strap",
      "Embroidered eyelets",
      "Moisture-wicking sweatband",
    ],
    colors: ["Black", "Navy", "Khaki", "Red"],
    sizes: ["One Size"],
    images: [
      "https://img.freepik.com/free-psd/cap-mockup_1332-60619.jpg?semt=ais_hybrid&w=740",
      "https://img.freepik.com/free-psd/baseball-cap-mockup_439185-2544.jpg",
      "https://img.freepik.com/free-photo/fashion-cap-baseball_1203-7650.jpg",
      "https://img.freepik.com/free-psd/cap-mock-up-design_1307-79.jpg"
    ],
    category: "Caps",
    rating: 4.7,
    reviewCount: 56,
  },
  "graphic-print-tee": {
    id: "4",
    name: "Graphic Print Tee",
    slug: "graphic-print-tee",
    price: 34.99,
    description: "Bold graphic print t-shirt featuring unique designs. Made from soft cotton with a comfortable regular fit.",
    details: "100% Cotton\nRegular fit\nMachine wash cold\nPrinted in USA",
    features: [
      "Premium cotton fabric",
      "High-quality print",
      "Reinforced shoulder seams",
      "Tagless neck label",
      "Double-stitched hems",
    ],
    colors: ["White", "Black", "Gray", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://qikink.com/wp-content/uploads/2023/06/Printed-oversized-t-shirt.webp",
      "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
      "https://img.freepik.com/free-psd/simple-white-t-shirt-mockup_23-2148962352.jpg",
      "https://img.freepik.com/free-psd/white-t-shirt-mockup-design_53876-98876.jpg"
    ],
    category: "T-Shirts",
    rating: 4.6,
    reviewCount: 78,
  }
}

// Get product data function
const getProductData = (slug: string) => {
  return productsData[slug] || null;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductData(params.slug)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-4">The product you&apos;re looking for doesn&apos;t exist.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-rose-500">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-rose-500">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${product.category.toLowerCase()}`} className="hover:text-rose-500">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square w-full overflow-hidden rounded-md bg-gray-100 transition-all 
                  ${selectedImage === index 
                    ? 'ring-2 ring-rose-500' 
                    : 'hover:ring-2 hover:ring-rose-500/50'
                  }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="font-serif text-3xl font-bold md:text-4xl">{product.name}</h1>
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <p className="text-gray-600">{product.description}</p>

          <form className="space-y-6">
            {/* Color Selection */}
            <div className="space-y-3">
              <Label htmlFor="color" className="text-sm font-medium">
                Color: <span className="text-rose-500">Black</span>
              </Label>
              <RadioGroup id="color" defaultValue="black" className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <div key={index} className="relative">
                    <RadioGroupItem
                      id={`color-${color.toLowerCase()}`}
                      value={color.toLowerCase()}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`color-${color.toLowerCase()}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 ring-offset-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-rose-500"
                    >
                      <span className="sr-only">{color}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="size" className="text-sm font-medium">
                  Size: <span className="text-rose-500">Medium</span>
                </Label>
                <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                  Size Guide
                </Button>
              </div>
              <RadioGroup id="size" defaultValue="m" className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <div key={size} className="relative">
                    <RadioGroupItem
                      id={`size-${size.toLowerCase()}`}
                      value={size.toLowerCase()}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`size-${size.toLowerCase()}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-all hover:bg-gray-50 peer-data-[state=checked]:border-rose-500 peer-data-[state=checked]:bg-rose-50 peer-data-[state=checked]:text-rose-500"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Quantity Selection */}
            <div className="space-y-3">
              <Label htmlFor="quantity" className="text-sm font-medium">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger id="quantity" className="w-24">
                  <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <Button size="lg" className="flex-1 bg-black hover:bg-gray-800">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-black text-black hover:bg-black hover:text-white"
              >
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </form>

          <Separator />

          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 space-y-4">
              <div className="whitespace-pre-line text-gray-600">{product.details}</div>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <ul className="list-inside list-disc space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4 space-y-4 text-gray-600">
              <p>Free standard shipping on all orders over $75.</p>
              <p>Standard delivery: 3-5 business days</p>
              <p>Express delivery: 1-2 business days</p>
              <p>Free returns within 30 days of delivery.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-24">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold md:text-3xl">You May Also Like</h2>
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </div>
  )
}

function ProductCard({ title, price, image, slug }: { title: string; price: number; image: string; slug: string }) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-[300px] w-full overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-xl font-bold">${price.toFixed(2)}</p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-auto justify-start p-0 text-rose-500 hover:bg-transparent hover:text-rose-600"
        >
          View Product{" "}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </Button>
      </div>
    </Link>
  )
}
