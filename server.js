var Koa=require('koa');

const app=new Koa();
app.use(async (ctx)=>{
    ctx.body="士大夫似的"
})
app.listen(3000,function(){
    console.log('start')
})