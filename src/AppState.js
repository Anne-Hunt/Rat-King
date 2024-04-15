import { reactive } from 'vue'
import { RatKing } from './models/RatKing.js'
import { Automatic } from './models/Automatic.js'
import { Manual } from './models/Manual.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  power: 0,

  RatKing: [
    new RatKing({
      name: RatKing,
      size: 1,
      count: 1
    })
  ],

  Automatic: [
    new Automatic({
      name: 'Secrets',
      power: 100,
      cost: 100,
      level: 0,
      maxLevel: 3,
      imgUrl: 'https://em-content.zobj.net/source/serenityos/392/face-with-tears-of-joy_1f602.png'
    }),
    new Automatic({
      name: 'Old Cod Sandwich',
      power: 50,
      cost: 100,
      level: 0,
      maxLevel: 10,
      imgUrl: 'https://em-content.zobj.net/source/serenityos/392/sandwich_1f96a.png'
    })
  ],

  Manuals: [
    new Manual({
      name: 'Jorts',
      power: 3,
      cost: 10,
      level: 0,
      imgUrl: 'https://em-content.zobj.net/source/serenityos/392/shorts_1fa73.png'
    }),
    new Manual({
      name: 'Joke',
      power: 2,
      cost: 0,
      level: 0,
      imgUrl: 'https://em-content.zobj.net/source/serenityos/392/zipper-mouth-face_1f910.png'
    })
  ]
})
