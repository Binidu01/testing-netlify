import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({
    message: 'welcome to bini.js',
    typescript: true,
    timestamp: new Date().toISOString()
  })
})

export default app
