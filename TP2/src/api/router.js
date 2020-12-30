const config =require('../config/env.config');

const utilsRoutes=require('./components/utils/utilsRoutes');

const router=(app) => {
    app.use(config.root_api,utilsRoutes);
    app.use((req,res)=>{
        res.status(404).json({result:'page not found'})
})
}

module.exports=router;