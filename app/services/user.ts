import useDB from '@/db'
import { HttpError } from '@/utils'

export async function login(username: string, password: string) {
  const db = await useDB()
  const [rows, fields] = await db.query('SELECT * FROM user WHERE username = ? and password = ?', [username, password])

  // eslint-disable-next-line no-console
  console.log(rows, fields)
}

export async function createUser(username: string, password: string) {
  // 检查用户名是否存在
  const db = await useDB()
  const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username])
  if (rows)
    throw new HttpError('用户名已存在', 200)
  const [result] = await db.query('INSERT INTO user (username, password, created_at, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)', [username, password])
  // eslint-disable-next-line no-console
  console.log('result', result)
  const payload = { username }
  return {
    ...payload,
    token: '',
  }
}
