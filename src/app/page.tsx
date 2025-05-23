import { Filter, Search, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/imgs/IMG_0242.png"
                alt="HoopSports Logo"
                width={32}
                height={32}
                className="rounded-full bg-orange-500"
              />
              <span className="text-xl font-bold tracking-tight">HoopSports</span>
            </Link>
          </div>
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar productos..." className="w-full bg-muted pl-8" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                0
              </span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <div className="relative mt-4 w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar productos..." className="w-full bg-muted pl-8" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <nav className="border-b">
          <div className="container flex items-center gap-4 py-2">
            <Link href="#" className="text-sm font-medium">
              Baloncesto
            </Link>
            <Link href="#" className="text-sm font-medium">
              Fútbol
            </Link>
            <Link href="#" className="text-sm font-medium">
              Tenis
            </Link>
            <Link href="#" className="text-sm font-medium">
              Running
            </Link>
            <Link href="#" className="text-sm font-medium">
              Fitness
            </Link>
            <Link href="#" className="text-sm font-medium">
              Ropa
            </Link>
            <Link href="#" className="text-sm font-medium">
              Calzado
            </Link>
            <Link href="#" className="text-sm font-medium">
              Accesorios
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="container py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Catálogo de Productos</h1>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <ProductFilters />
                </SheetContent>
              </Sheet>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="newest">Más Recientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="hidden md:col-span-3 md:block">
              <ProductFilters />
            </div>
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                  name="Balón de Baloncesto Profesional"
                  price={49.99}
                  category="Baloncesto"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Zapatillas Running Pro"
                  price={89.99}
                  category="Calzado"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Camiseta Técnica Transpirable"
                  price={24.99}
                  category="Ropa"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Raqueta de Tenis Avanzada"
                  price={129.99}
                  category="Tenis"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Balón de Fútbol Oficial"
                  price={39.99}
                  category="Fútbol"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Mancuernas 5kg (Par)"
                  price={59.99}
                  category="Fitness"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Botella Deportiva 750ml"
                  price={14.99}
                  category="Accesorios"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Shorts Deportivos"
                  price={29.99}
                  category="Ropa"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
                <ProductCard
                  name="Aro de Baloncesto Ajustable"
                  price={199.99}
                  category="Baloncesto"
                  imageSrc="/placeholder.svg?height=300&width=300"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="mx-2">
                  1
                </Button>
                <Button variant="outline" className="mx-2">
                  2
                </Button>
                <Button variant="outline" className="mx-2">
                  3
                </Button>
                <Button variant="outline" className="mx-2">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">HoopSports</h3>
              <p className="text-sm text-muted-foreground">
                Tu tienda de confianza para artículos deportivos de alta calidad.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Política de Devoluciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
              <address className="not-italic text-sm text-muted-foreground">
                <p>Calle Deporte 123</p>
                <p>Ciudad Deportiva, CP 28000</p>
                <p className="mt-2">Email: info@hoopsports.com</p>
                <p>Teléfono: +34 91 123 45 67</p>
              </address>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 HoopSports. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
