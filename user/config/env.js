const env = {
  database: 'node_db',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  JWT_KEY:'nodetest',
  JWT_Expires:"2h",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;