export default defineEventHandler(async (event)=>{
    
    //handle login request
    const {data} = await $fetch()

    return data
})