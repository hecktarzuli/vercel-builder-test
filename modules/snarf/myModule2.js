export default function(){
    this.nuxt.hook('render:setupMiddleware', (app) => {
        app.use('/test1/snarf', test1)
    })

    function test1(req, res, next){        
        console.log('myModule2')
        
        res.end(JSON.stringify({
            snarf: 'blat'
        }))
    }
}
