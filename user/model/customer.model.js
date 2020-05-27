module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('customer', {
    name: {
    type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    phone:{
    	type:Sequelize.STRING
    }
  });
  
  return Customer;
}