export default defineNuxtRouteMiddleware((to, from) => {
      
    const path = usePath()
    if(to.name !== 'index' || from.name !== 'index'){ path.value = to.name}
      
    // const user = useSupabaseUser()
    //this causes issues with register rout or infinite redirect loop
    // if (!user.value ) {
    //   return navigateTo('/login')
    // } 
    // return;
    // else if (user.value && to.path === '/login') {
    //   return navigateTo('/')
    // }
    // else if (user.value && to.path === '/register') {
    //   return navigateTo('/')
    // }
  });