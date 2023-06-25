export default defineEventHandler(async (event)=>{

    const runtimeConfig = useRuntimeConfig()
    let baseUrl = runtimeConfig.public.apiBase
    const postsArguments = '&_fields=id,title,featured_media,link,tags'


    //handle fetch posts
    const data  = await $fetch(baseUrl + 'posts?per_page=5' +postsArguments)
    return data
})