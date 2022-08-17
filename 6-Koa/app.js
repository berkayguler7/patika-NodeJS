const Koa = require('koa');
const koa_router = require('koa-router');

const PORT = 3000;

const app = new Koa();
const router = new koa_router();

router.get('/', ctx => {
    ctx.status = 200;
    ctx.body = "<h1>WELCOME TO THE INDEX PAGE!</h1>";
});

router.get('/about', ctx => {
    ctx.status = 200;
    ctx.body = "<h1>WELCOME TO THE ABOUT PAGE!</h1>";
});

router.get('/contact', ctx => {
    ctx.status = 200;
    ctx.body = "<h1>WELCOME TO THE CONTACT PAGE!</h1>";
});

router.get('/404', ctx => {
    ctx.status = 404;
    ctx.body = "<h1>404 PAGE NOT FOUND</h1>";
});

app.use(router.routes());
app.use(ctx => {
    if(404 != ctx.status)
        return;
    else
        ctx.redirect('/404');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
