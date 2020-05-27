module.exports = (req, res, next) => {
        
        //console.log('working');

        // res.json({
        //     user:req.userData
        // })
        
        if(req.userData.role =='admin') {
            next();
        }
        else {
                return res.status(401).json({
                   error:'you dont have permission to access this route',
                    message: 'Auth failed',
                });

        }
        
        
        //next();
    
};