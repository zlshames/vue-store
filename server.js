const path = require('path')

const koa = require('koa')
const sendFile = require('koa-sendfile')
const serve = require('koa-static')

// Instantiate koa and koa-router
const app = new koa()

app.use(serve(path.join(__dirname, 'dist')))

app.use(async function (ctx, next) {
  await sendFile(ctx, path.join(__dirname, './dist/index.html'))
  await next()
});

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Available on http://localhost:${ port }`)
})
