import mysql from 'mysql2/promise'

async function createConnection() {
  // 创建数据库连接
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'xxx',
    connectTimeout: 10000,
    connectionLimit: 10,
  })
  // 在数据库连接关闭时触发
  connection.on('end', () => {
    // eslint-disable-next-line no-console
    console.log('mysql连接关闭')
  })

  // 在发生错误时触发
  connection.on('error', (err: any) => {
    console.error('mysql 错误:', err)
    connection.end()
  })

  return connection
}

let _db: mysql.Connection | null = null

export default async function useDB() {
  if (!_db)
    _db = await createConnection()

  return _db
}
