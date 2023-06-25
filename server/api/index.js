export default defineEventHandler(async (event)=>{
    //handle query params
    // const {name} =  useQuery(event)
    // const {name} =  event.context.params

    //handle Post data
    const {pigDetails} =  await useBody(event)

    return {
        message: 'success',
        status: 200
    }
})