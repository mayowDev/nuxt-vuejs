// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  nitro:{
    prerender:{
      crawlLinks:true,
      routes:['/']

    }
  },
  css: [
    '@/styles/main.scss',
  ],
  modules: ['@nuxtjs/supabase'],
  app: {
    head: {
      title: 'Peach Tech - Vuejs & Nuxt3 - Abdirahman',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {name: 'description', content: 'A take home project assessment build by Abdirahman for Front-end job  at Peach Tech Ltd '}
      ],
      link: [
        {rel: 'stylesheet', href:"https://fonts.googleapis.com/css?family=Inter"}
      ]
    }
  },
  runtimeConfig:{
    //this will only be available on server side
    supabaseKey:process.env.SUPABASE_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    //this will be available on client side
    public:{ 
      apiBase: process.env.API_URL,
      imagesUrl: process.env.IMAGES_API
    }
  }
    

  

})
