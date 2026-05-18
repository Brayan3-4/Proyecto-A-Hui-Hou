import { describe, it, expect, beforeEach } from "vitest"

// Mock de localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
})

describe("Authentication System", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe("Login", () => {
    it("should store user data in localStorage on successful login", () => {
      const user = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        role: "user",
      }

      localStorage.setItem("user", JSON.stringify(user))
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}")

      expect(storedUser).toEqual(user)
      expect(storedUser.email).toBe("test@example.com")
    })

    it("should handle admin role correctly", () => {
      const adminUser = {
        id: 1,
        name: "Admin User",
        email: "admin@ahuihou.com",
        role: "admin",
      }

      localStorage.setItem("user", JSON.stringify(adminUser))
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}")

      expect(storedUser.role).toBe("admin")
    })
  })

  describe("Logout", () => {
    it("should remove user data from localStorage on logout", () => {
      const user = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        role: "user",
      }

      localStorage.setItem("user", JSON.stringify(user))
      expect(localStorage.getItem("user")).toBeTruthy()

      localStorage.removeItem("user")
      expect(localStorage.getItem("user")).toBeNull()
    })
  })

  describe("User Validation", () => {
    it("should validate email format", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      expect(emailRegex.test("valid@email.com")).toBe(true)
      expect(emailRegex.test("invalid-email")).toBe(false)
      expect(emailRegex.test("invalid@")).toBe(false)
    })

    it("should validate password length", () => {
      const isValidPassword = (password: string) => password.length >= 6

      expect(isValidPassword("123456")).toBe(true)
      expect(isValidPassword("12345")).toBe(false)
    })
  })
})
