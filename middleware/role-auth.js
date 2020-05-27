module.exports = (req, res, next) => {
        
        //console.log(req.userData.role);

        // res.json({
        //     user:req.userData
        // })
        
        if(req.userData.role =='admin') {
            next();
        }
        else {
                return res.status(401).json({
                    message: 'Auth failed',
                    error:'you dont have permission to access this route'
                });

        }
        
        
        //next();
    
};