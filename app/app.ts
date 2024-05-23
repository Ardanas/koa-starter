import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { env } from 'node:process'
import Koa from 'koa'
import { koaBody } from 'koa-body'
import koaStatic from 'koa-static'

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

const app = new Koa()
app.use(koaStatic(join(__dirname, '../public')))

app.use(koaBody())

// 启动服务器
const PORT = env.PORT || 3010
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
