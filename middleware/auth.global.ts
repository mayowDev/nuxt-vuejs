export default defineNuxtRouteMiddleware((to, from) => {
  //global code available everywhere
    
    //this keeps track of path changes . useRouter does have some bugs.
    const path = usePath()
    if(to.path == '/submit'){ 
       path.value = 'submit';
    }else{    path.value = 'index';}
  
    // const user = useSupabaseUser()
    // if (!user.value && to.path !== '/login') {
    //   return navigateTo('/login')
    // } else if (user.value && to.path === '/login') {
    //   return navigateTo('/')
    // }
  });