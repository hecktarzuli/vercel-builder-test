export default function(){
    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use('/test1', test1)
    })

    function test1(req, res, next){        
        res.end(JSON.stringify({
            timestamp: new Date(),
        }))
    }
}
