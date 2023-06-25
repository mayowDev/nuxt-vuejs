const runtimeConfig = useRuntimeConfig()

let baseUrl = runtimeConfig.public.apiBase
let imagesUrl = runtimeConfig.public.imagesUrl 
let SUPABASE_URL=runtimeConfig.supabaseUrl
let SUPABASE_KEY=runtimeConfig.supabaseKey

console.log('baseUrl', baseUrl, 'imagesUrl', imagesUrl)

    
export { baseUrl, imagesUrl, SUPABASE_URL, SUPABASE_KEY}
