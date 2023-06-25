export default defineEventHandler(async (event)=>{

    const runtimeConfig = useRuntimeConfig()
    let baseUrl = runtimeConfig.public.apiBase
    const tagsArgument =  '&_fields=id,name'
    const {tagArray} = await readBody(event)

    //handle fetch tags
    const res  = await $fetch(baseUrl+ 'tags?include=' + tagArray + tagsArgument)
    return res
})