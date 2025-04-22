"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function SiteHeader() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine if we're on the homepage
  const isHomePage = pathname === "/"

  // Determine header style based on scroll and page
  const headerClasses = `fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-md py-3 text-black"
      : isHomePage
        ? "bg-transparent py-5 text-white"
        : "bg-white shadow-md py-3 text-black"
  }`

  const logoClasses = `font-serif text-2xl font-bold ${isScrolled || !isHomePage ? "text-black" : "text-black"}`

  const navLinkClasses = `relative font-medium transition-colors hover:text-rose-500 ${
    isScrolled || !isHomePage ? "text-black" : "text-black"
  }`

  const activeNavLinkClasses = `relative font-medium text-rose-500 after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-rose-500 after:content-['']`

  const iconButtonClasses = `rounded-full p-2 ${
    isScrolled || !isHomePage ? "text-black hover:bg-gray-100" : "text-black hover:bg-white/20"
  }`

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className={logoClasses}>
          URBAN<span className="text-rose-500">THREADS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 text-black md:flex">
          <Link href="/products" className={pathname.startsWith("/products") ? activeNavLinkClasses : navLinkClasses}>
            Shop
          </Link>
          
          <Link href="/contact" className={pathname === "/contact" ? activeNavLinkClasses : navLinkClasses}>
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Search..." className="h-9 w-[200px] md:w-[300px]" autoFocus />
              <Button variant="ghost" size="icon" className={iconButtonClasses} onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className={iconButtonClasses} onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={iconButtonClasses}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 pt-10">
                  <Link href="/products" className="text-2xl font-medium">
                    Shop
                  </Link>
                  <Link href="/contact" className="text-2xl font-medium">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
