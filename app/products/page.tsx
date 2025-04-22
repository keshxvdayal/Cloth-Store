import Link from "next/link"
import Image from "next/image"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// This would normally come from a database or API
const products = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 29.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8BibRWYE-MvHbJ2QWkFmzVZwNRevriwGHQ&s",
    slug: "classic-black-tee",
    category: "T-Shirts",
  },
  {
    id: "2",
    name: "Urban Hoodie",
    price: 59.99,
    image: "https://evemen.co/cdn/shop/files/cap3_22d9869e-ba24-4e51-8149-00041efe3c2a.jpg?v=1720433220",
    slug: "urban-hoodie",
    category: "Hoodies",
  },
  {
    id: "3",
    name: "Signature Cap",
    price: 24.99,
    image: "https://img.freepik.com/free-psd/cap-mockup_1332-60619.jpg?semt=ais_hybrid&w=740",
    slug: "signature-cap",
    category: "Caps",
  },
  {
    id: "4",
    name: "Graphic Print Tee",
    price: 34.99,
    image: "https://qikink.com/wp-content/uploads/2023/06/Printed-oversized-t-shirt.webp",
    slug: "graphic-print-tee",
    category: "T-Shirts",
  },
  {
    id: "5",
    name: "Minimalist Hoodie",
    price: 54.99,
    image: "https://img.freepik.com/free-photo/white-hoodie-man-with-jeans_53876-97228.jpg",
    slug: "minimalist-hoodie",
    category: "Hoodies",
  },
  {
    id: "6",
    name: "Vintage Trucker Cap",
    price: 29.99,
    image: "https://img.freepik.com/free-psd/baseball-cap-mockup_439185-2544.jpg",
    slug: "vintage-trucker-cap",
    category: "Caps",
  },
  {
    id: "7",
    name: "Oversized Tee",
    price: 39.99,
    image: "https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg",
    slug: "oversized-tee",
    category: "T-Shirts",
  },
  {
    id: "8",
    name: "Zip-Up Hoodie",
    price: 64.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkzuKuZST5Zuz8R4ecL7Z0NPnQHeOiUWGeg&s",
    slug: "zip-up-hoodie",
    category: "Hoodies",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">All Products</h1>
        <p className="mt-4 text-gray-600">Browse our collection of premium streetwear essentials</p>
      </div>

      {/* Filters and Products */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters - Desktop */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-medium">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="category-all" />
                  <Label htmlFor="category-all">All Products</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="category-tshirts" />
                  <Label htmlFor="category-tshirts">T-Shirts</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="category-hoodies" />
                  <Label htmlFor="category-hoodies">Hoodies</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="category-caps" />
                  <Label htmlFor="category-caps">Caps</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-lg font-medium">Price Range</h3>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="price-all" value="all" />
                  <Label htmlFor="price-all">All Prices</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="price-under-25" value="under-25" />
                  <Label htmlFor="price-under-25">Under $25</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="price-25-50" value="25-50" />
                  <Label htmlFor="price-25-50">$25 - $50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="price-50-100" value="50-100" />
                  <Label htmlFor="price-50-100">$50 - $100</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="price-over-100" value="over-100" />
                  <Label htmlFor="price-over-100">Over $100</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-lg font-medium">Size</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-xs" />
                  <Label htmlFor="size-xs">XS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-s" />
                  <Label htmlFor="size-s">S</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-m" />
                  <Label htmlFor="size-m">M</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-l" />
                  <Label htmlFor="size-l">L</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-xl" />
                  <Label htmlFor="size-xl">XL</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="size-xxl" />
                  <Label htmlFor="size-xxl">XXL</Label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 text-lg font-medium">Color</h3>
              <div className="flex flex-wrap gap-3">
                {["Black", "White", "Gray", "Navy", "Red", "Green"].map((color) => (
                  <div key={color} className="relative">
                    <button
                      className="h-8 w-8 rounded-full border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                      aria-label={color}
                    />
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Mobile Filters and Sort */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="space-y-8 py-4">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Categories</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="m-category-all" />
                        <Label htmlFor="m-category-all">All Products</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="m-category-tshirts" />
                        <Label htmlFor="m-category-tshirts">T-Shirts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="m-category-hoodies" />
                        <Label htmlFor="m-category-hoodies">Hoodies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="m-category-caps" />
                        <Label htmlFor="m-category-caps">Caps</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Price Range</h3>
                    <RadioGroup defaultValue="all">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="m-price-all" value="all" />
                        <Label htmlFor="m-price-all">All Prices</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="m-price-under-25" value="under-25" />
                        <Label htmlFor="m-price-under-25">Under $25</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="m-price-25-50" value="25-50" />
                        <Label htmlFor="m-price-25-50">$25 - $50</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="m-price-50-100" value="50-100" />
                        <Label htmlFor="m-price-50-100">$50 - $100</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="m-price-over-100" value="over-100" />
                        <Label htmlFor="m-price-over-100">Over $100</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Desktop Sort */}
          <div className="mb-6 hidden items-center justify-end lg:flex">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-[300px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-auto justify-start p-0 text-rose-500 hover:bg-transparent hover:text-rose-600"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 bg-rose-50 text-rose-500 hover:bg-rose-100">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                4
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                5
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
