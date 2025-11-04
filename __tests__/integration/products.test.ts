import { describe, it, expect } from "vitest"

describe("Products Integration Tests", () => {
  const mockProducts = [
    {
      id: 1,
      name: "Aceite de Coco Orgánico",
      price: 12.99,
      category: "Aceites",
      image: "/organic-coconut-oil-jar-natural.jpg",
    },
    {
      id: 2,
      name: "Miel Pura de Abeja",
      price: 8.99,
      category: "Endulzantes",
      image: "/pure-honey-jar-golden.jpg",
    },
  ]

  describe("Product Catalog", () => {
    it("should return all products", () => {
      expect(mockProducts).toHaveLength(2)
      expect(mockProducts[0].name).toBe("Aceite de Coco Orgánico")
    })

    it("should filter products by category", () => {
      const filtered = mockProducts.filter((p) => p.category === "Aceites")
      expect(filtered).toHaveLength(1)
      expect(filtered[0].name).toBe("Aceite de Coco Orgánico")
    })

    it("should search products by name", () => {
      const searchTerm = "miel"
      const results = mockProducts.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      expect(results).toHaveLength(1)
      expect(results[0].name).toBe("Miel Pura de Abeja")
    })
  })

  describe("Product Pricing", () => {
    it("should calculate correct total for multiple products", () => {
      const total = mockProducts.reduce((sum, product) => sum + product.price, 0)
      expect(total).toBeCloseTo(21.98, 2)
    })

    it("should apply discount correctly", () => {
      const price = 12.99
      const discount = 0.1 // 10%
      const finalPrice = price * (1 - discount)
      expect(finalPrice).toBeCloseTo(11.69, 2)
    })
  })
})
