var Koa=require('koa');

const app=new Koa();
app.use(async (ctx)=>{
    ctx.body="她她她她她她她"
})
app.listen(3000)