export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lagniappe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'
  ],

  // router: {
  //   middleware: ['auth']
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  [ '@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyDrk_4CcspoI-SROz4EzWITQuozA0f7HeI",
        authDomain: "lagniappe-jd.firebaseapp.com",
        projectId: "lagniappe-jd",
        storageBucket: "lagniappe-jd.appspot.com",
        messagingSenderId: "421043378935",
        appId: "1:421043378935:web:8ad282b94e0adc0dcd51f2",
        measurementId: "G-ZJHJYTE4PR"
      },
      services: {
        database: true,
        firestore: true,
        auth: true,
      },
      database: {
        emulatorPort: 9000,
        emulatorHost: 'localhost',
      },
      firestore: {
        memoryOnly: false, // default
        chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true,
        emulatorPort: 8080,
        emulatorHost: 'localhost',
        settings: {
          // Firestore Settings - currently only works in SPA mode
        }
      },
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false, // default
      },
    }
  ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
