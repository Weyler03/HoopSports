import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  name: string
  price: number
  category: string
  imageSrc: string
}

export function ProductCard({ name, price, category, imageSrc }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href="#" className="block overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-[200px] w-full object-cover transition-transform hover:scale-105"
          />
        </Link>
        <div className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-medium">{category}</div>
      </div>
      <CardContent className="p-4">
        <Link href="#" className="hover:underline">
          <h3 className="font-semibold">{name}</h3>
        </Link>
        <p className="mt-2 text-lg font-bold">{price.toFixed(2)} €</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-[#262262] hover:bg-[#1c245d]">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
