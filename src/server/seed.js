const { results, registers } = require('./seedData')
const { sequelize } = require('./db');
const { Result, Register} = require('./models')

const seed = async () => {
  try{

    // In order to drop and recreate tables per model definitions
    await sequelize.sync({ force: true });
    
    // insert data
    await Promise.all(results.map(result => Result.create(result)));
    await Promise.all(registers.map(register => Result.create(register)));
    const resultCreated = await Promise.all(results.map(result => Result.create(result)));
    const adminCreated = await Promise.all(registers.map(register => Register.create(register)));
   
    //Associated data
    adminCreated[0].addResults([resultCreated[3]], [resultCreated[4]], [resultCreated[0]])
    adminCreated[0].addResults([resultCreated[1]]);
    adminCreated[0].addResults([resultCreated[5]], [resultCreated[6]], [resultCreated[2]])




  } catch(error) {
    console.error(error)
  }

}

seed();