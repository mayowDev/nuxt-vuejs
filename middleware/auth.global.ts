export default defineNuxtRouteMiddleware((to, from) => {

    const user = useSupabaseUser()
    // console.log('user', user)

    // if (!user.value && to.path !== '/login') {
    //   return navigateTo('/login')
    // } else if (user.value && to.path === '/login') {
    //   return navigateTo('/')
    // }
  });