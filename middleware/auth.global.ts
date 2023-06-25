export default defineNuxtRouteMiddleware((to, from) => {
    // console.log('to', to)

    const user = useSupabaseUser()

    // if (!user.value && to.path !== '/login') {
    //   return navigateTo('/login')
    // } else if (user.value && to.path === '/login') {
    //   return navigateTo('/')
    // }
  });