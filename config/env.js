const env = {
  database: 'node_auth',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  port:3000,
  JWT_KEY:'nodetest',
  JWT_Expires:"2h",
  users_url:"http://localhost:4000/users/",
  products_url:"http://localhost:5000/products/",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;