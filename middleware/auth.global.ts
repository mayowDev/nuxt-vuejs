export default defineNuxtRouteMiddleware((to, from) => {
      
    const path = usePath()
    if(to.name !== 'index' || from.name !== 'index'){ path.value = to.name}
      
    const user = useSupabaseUser()
    if (!user.value && to.path !== '/login') {
      return navigateTo('/login')
    } else if (user.value && to.path === '/login') {
      return navigateTo('/')
    }
    else if (user.value && to.path === '/register') {
      return navigateTo('/')
    }
  });