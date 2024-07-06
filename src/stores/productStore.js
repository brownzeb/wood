import { defineStore } from 'pinia'
import firstproduct from '@/assets/firstproduct.jpg'
import secondproduct from '@/assets/second-product.jpg'
import thirdproduct from '@/assets/third-product.jpg'
import fourthproduct from '@/assets/fourth-product.jpg'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    loading: false,
    products: [
      {
        id: 1,
        title: 'wood-pallet',
        description:
          'The National Wooden Pallet & Container Association (NWPCA) is the largest organization of wood packaging professionals in the world, with more than 800 company members in 40 countries who manufacture, repair and distribute pallets and ',
        image: firstproduct,
        prize: '$2000',
        cart: false,
        quantity: 1
      },
      {
        id: 2,
        title: 'wood-plate',
        description:
          'The National Wooden Pallet & Container Association (NWPCA) is the largest organization of wood packaging professionals in the world, with more than 800 company members in 40 countries who manufacture, repair and distribute pallets and ',
        image: secondproduct,
        prize: '$2000',
        cart: false,
        quantity: 2
      },
      {
        id: 3,
        title: 'wood',
        description:
          'The National Wooden Pallet & Container Association (NWPCA) is the largest organization of wood packaging professionals in the world, with more than 800 company members in 40 countries who manufacture, repair and distribute pallets and ',
        image: thirdproduct,
        prize: '$2000',
        cart: false,
        quantity: 1
      },
      {
        id: 4,
        title: 'wood 5',
        description:
          'The National Wooden Pallet & Container Association (NWPCA) is the largest organization of wood packaging professionals in the world, with more than 800 company members in 40 countries who manufacture, repair and distribute pallets and ',
        image: fourthproduct,
        prize: '$2000',
        cart: false,
        quantity: 3
      }
    ]
  }),

  getters: {
    carts(state) {
      return state.products.filter((p) => p.cart)
    },
    totalPrice(state) {
      return state.products
        .filter((product) => product.cart)
        .reduce((sum, product) => {
          const price = parseFloat(product.prize.replace(/[^0-9.-]+/g, ''))
          return sum + price * product.quantity
        }, 0)
        .toFixed(2)
    },
    totalQuantity(state) {
      return state.products.reduce((sum, product) => {
        return product.cart ? sum + product.quantity : sum
      }, 0)
    }
  },

  actions: {
    toggleCart(id) {
      const product = this.products.find((p) => p.id === id)
      if (product) {
        product.cart = !product.cart
      }
    },
    deleteCart(productId) {
      const product = this.products.find((p) => p.id === productId)
      if (product) {
        product.cart = false
        product.quantity = 1 // Reset quantity if needed
        console.log('deleted')
      }
    }
  }
})
