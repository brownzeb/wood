import { defineStore } from 'pinia'
import Stringerpallate from '@/assets/Stringerpallate.jpg'
import blockpallate from '@/assets/blockpallate.jpg'
import doublefacepallate from '@/assets/doublefacepallate.jpg'
import fourthproduct from '@/assets/fourth-product.jpg'
import wingpallate from '@/assets/wingpallate.jpg'
import soliddeck from '@/assets/soliddeck.jpg'
import custompallate from '@/assets/custompallate.jpg'
import recyclepallate from '@/assets/recyclepallate.jpg'
import engraving from '@/assets/engraving.jpg'
import electric from '@/assets/electric.jpg'
import etching from '@/assets/etching.jpg'
import lasser from '@/assets/lasser.jpg'
import coaster from '@/assets/coaster.jpg'
import firstproduct from '@/assets/firstproduct.jpg'
import card1 from '@/assets/card1.jpg'
import card2 from '@/assets/card2.jpg'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    loading: false,
    products: [
      {
        id: 1,
        title: 'Stringer Pallets',
        description:
          'Stringer pallets are constructed with a series of parallel boards, known as stringers, that run along the length of the pallet. These stringers support the deck boards on top, creating a sturdy platform for carrying loads. The standard dimensions for stringer pallets are typically 48 x 40 inches, but they can come in various sizes to meet specific needs.',
        image: Stringerpallate,
        prize: '$4.08',
        cart: false,
        quantity: 1
      },
      {
        id: 2,
        title: 'Block Pallets',
        description:
          'Block pallets are robust and versatile pallets designed for strength and durability. They feature a construction that utilizes blocks (typically nine) to support the top and bottom deck boards. The blocks are positioned at each corner, the center of each edge, and in the middle of the pallet, providing a strong and stable base for heavy loads. ',
        image: firstproduct,
        prize: '$6.18',
        cart: false,
        quantity: 2
      },
      {
        id: 3,
        title: 'Double-Face Pallet',
        description:
          'Double-face pallets are designed with deck boards on both the top and bottom surfaces, providing a more stable and durable platform for various loads. This construction makes them suitable for applications requiring higher strength and stability compared to single-face pallets. ',
        image: doublefacepallate,
        prize: '$12.00',
        cart: false,
        quantity: 1
      },
      {
        id: 4,
        title: 'Single-Face Pallets',
        description:
          'Single-face pallets are designed with deck boards on one side only, leaving the other side open. This simple and lightweight design makes them ideal for specific applications where a bottom deck is not necessary. The single-face construction can include either a solid deck or spaced deck boards, depending on the requirements. ',
        image: fourthproduct,
        prize: '$9.23',
        cart: false,
        quantity: 1
      },
      {
        id: 5,
        title: 'Winged Pallets',
        description:
          'Winged pallets are a specific type of pallet characterized by deck boards that extend beyond the stringers or blocks, creating a "wing" on one or more sides. This design provides additional surface area, which can enhance the stability and support of the load. The wings can vary in size and can be present on all four sides or just on two opposite sides. ',
        image: wingpallate,
        prize: '$4.25',
        cart: false,
        quantity: 3
      },
      {
        id: 6,
        title: 'Solid Deck Pallets',
        description:
          'Solid deck pallets are designed with a continuous, flat top deck surface, which eliminates gaps between the deck boards. This design provides a smooth and even surface, making them ideal for transporting small, loose, or irregularly shaped items that might otherwise fall through the spaces in standard pallets. ',
        image: soliddeck,
        prize: '$320.0',
        cart: false,
        quantity: 3
      },
      {
        id: 7,
        title: 'Custom Pallets',
        description:
          'Custom pallets are specially designed to meet unique specifications and requirements that standard pallets cannot fulfill. These pallets can be tailored in terms of size, shape, materials, load capacity, and additional features to suit specific applications and industries. ',
        image: custompallate,
        prize: '$40.0',
        cart: false,
        quantity: 3
      },
      {
        id: 8,
        title: 'Recycled Pallets',
        description:
          'Recycled pallets are refurbished from previously used pallets that have been repaired, reconditioned, and sometimes reassembled to extend their lifespan. They are made by recovering usable wood and components from old or damaged pallets, which are then used to create functional pallets that meet various industry standards and specifications.',
        image: recyclepallate,
        prize: '$7.40',
        cart: false,
        quantity: 3
      },

      // for pen
      {
        id: 9,
        title: 'Engraving laser pens',
        description:
          'These are used to engrave designs on materials like wood, metal, glass, and plastic. They are often used in DIY projects, personalized gifts, and art.',
        image: engraving,
        prize: '$52.0',
        cart: false,
        quantity: 1
      },
      {
        id: 10,
        title: 'Cutting Laser Pens',
        description:
          ' These are more powerful and are used to cut through materials like fabric, paper, cardboard, and thin wood. They are popular in model making and crafting.',
        image: electric,
        prize: '$1,350',
        cart: false,
        quantity: 1
      },
      {
        id: 11,
        title: 'Etching Laser Pen',
        description:
          ' Similar to engraving pens but typically used for finer, more detailed work on materials like glass, metal, and stone.',
        image: etching,
        prize: '$62.0',
        cart: false,
        quantity: 1
      },
      {
        id: 12,
        title: 'Laser Pointer Pens:',
        description:
          '  While primarily used for presentations, some advanced laser pointers can be used in light crafting for marking or tracing designs.',
        image: lasser,
        prize: '$21.63',
        cart: false,
        quantity: 1
      },
      {
        id: 13,
        title: 'Coaster for Drinks and for kids use',
        description:
          '  While primarily used for presentations, some advanced laser pointers can be used in light crafting for marking or tracing designs.',
        image: coaster,
        prize: '$4.23',
        cart: false,
        quantity: 1
      },
      {
        id: 14,
        title: 'Craft wood Board',
        description:
          '  While primarily used for presentations, some advanced laser pointers can be used in light crafting for marking or tracing designs.',
        image: card1,
        prize: '$6.14',
        cart: false,
        quantity: 1
      },
      {
        id: 15,
        title: 'Craft wood Board',
        description:
          '  While primarily used for presentations, some advanced laser pointers can be used in light crafting for marking or tracing designs.',
        image: card2,
        prize: '$10.0',
        cart: false,
        quantity: 1
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
