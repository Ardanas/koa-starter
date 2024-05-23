import type { Context } from 'koa'
import * as service from '@/services/user'
import { HttpError } from '@/utils'

export async function login(ctx: Context) {
  ctx.verifyParams({
    username: 'string',
    password: 'string',
  })
  const { username, password } = ctx.request.body
  if (!username.trim() || !password.trim())
    throw new HttpError('用户名或者密码不能为空', 400)
  return await service.login(username, password)
}

export async function createUser(ctx: Context) {
  ctx.verifyParams({
    username: 'string',
    password: 'string',
  })
  const { username, password } = ctx.request.body
  if (!username.trim() || !password.trim())
    throw new HttpError('用户名或者密码不能为空', 400)
  return await service.createUser(username, password)
}
