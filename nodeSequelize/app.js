const { Sequelize, DataTypes,Op } = require('sequelize');
const sequelize = new Sequelize("experion3", "root", "Experion@123", {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate()
// .then(()=>{
//     console.log('Connection established successfully')
// })
// .catch((error)=>{
//     console.log('Unable to connect to the database:',error);

// })

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 18
    },
    // country: {
    //     type: DataTypes.STRING(5),
    //     allowNull: false,
    //     defaultValue: 'IN'
    // }

});
// User.sync({alter:true});

//-----------------------1st method to insert data in to table----------------------------------------
// User.create({name:'nikhil1',email:'nilkhil1k@gmail.com',age:27})
// .then((user)=>{
//     console.log("Data saved successfully.",user.toJSON());
// })
// .catch(err =>{
//     console.log("Error");
// })

//-------------------for display  users data of table-----------------------------
// User.findAll().then(function (users) {
//     // console.log(users);    //display all data of users table

//     users.forEach(function (user) {   //forEach is a loop
//       console.log(user.dataValues.id, user.dataValues.name,user.dataValues.email,user.dataValues.age);  //for limited values u want to display

//     })
    
// });
//--------------- use where method-1---------------------------
User.findAll({
    where:{
        id:{
            [Op.gte]:2   //conditon where id is greater  then 2
        }
    }
}).then(function (users) {
    users.forEach(function (user) {  
      console.log(user.dataValues.id, user.dataValues.name,user.dataValues.email,user.dataValues.age); 

    }) 
});

//-----------not using forEach --method-2-------------------------

// User.findByPk(1).then(user =>{
//     console.log(user.dataValues.id, user.dataValues.name)
// })

//-------------------------------------------