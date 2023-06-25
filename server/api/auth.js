export default defineEventHandler(async (event)=>{
    //handle query params
    // const {name} =  useQuery(event)
    // const {name} =  event.context.params
    
    //handle login request
    const {data} = await $fetch()

    return data
})