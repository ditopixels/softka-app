export const isAuth = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    req.flash('error_msg','Primero inicie sesión por favor')
    res.redirect('/signin')
}
export const noIsAuth = (req,res,next)=>{
    if(!req.isAuthenticated()){
        return next()
    }
    res.redirect('/app')
}