import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ProductFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Filtros</h3>
      </div>
      <Accordion type="multiple" defaultValue={["category", "price"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="basketball" />
                <Label htmlFor="basketball">Baloncesto</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="football" />
                <Label htmlFor="football">Fútbol</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tennis" />
                <Label htmlFor="tennis">Tenis</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="running" />
                <Label htmlFor="running">Running</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fitness" />
                <Label htmlFor="fitness">Fitness</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="clothing" />
                <Label htmlFor="clothing">Ropa</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="footwear" />
                <Label htmlFor="footwear">Calzado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="accessories" />
                <Label htmlFor="accessories">Accesorios</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 200]} max={500} step={10} />
              <div className="flex items-center justify-between">
                <span className="text-sm">0 €</span>
                <span className="text-sm">500 €</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger>Marcas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="nike" />
                <Label htmlFor="nike">Nike</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="adidas" />
                <Label htmlFor="adidas">Adidas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="puma" />
                <Label htmlFor="puma">Puma</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="under-armour" />
                <Label htmlFor="under-armour">Under Armour</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="new-balance" />
                <Label htmlFor="new-balance">New Balance</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger>Tallas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="xs" />
                <Label htmlFor="xs">XS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="s" />
                <Label htmlFor="s">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="m" />
                <Label htmlFor="m">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="l" />
                <Label htmlFor="l">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="xl" />
                <Label htmlFor="xl">XL</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="xxl" />
                <Label htmlFor="xxl">XXL</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
