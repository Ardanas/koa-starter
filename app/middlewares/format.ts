import type { Context, Next } from 'koa'

interface IErrorBody {
  status: number
  success: boolean
  message?: string
  error?: string

}
export default async function formatMiddware(ctx: Context, next: Next) {
  try {
    const data = await next()
    ctx.body = {
      status: 200,
      success: true,
      data,
    }
  }
  catch (error: any) {
    ctx.status = error.status || 500
    ctx.body = {
      status: ctx.status,
      success: false,
    }
    if (error.code)
      (ctx.body as IErrorBody).error = error
    else
      (ctx.body as IErrorBody).message = error.message
  }
}
