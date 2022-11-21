
var id = 1;

var userManager = {
    users: [
        {id: id++, name: 'John', email: 'john@mail.com',password:'john@123'},
        {id: id++, name: 'Jane', email: 'jane@mail.com',password:'john@1232'},
        {id: id++, name: 'Janet', email: 'janet@mail.com',password:'john@1323'},
        {id: id++, name: 'Joe', email: 'joe@mail.com',password:'john@1235'},
        {id: id++, name: 'Joy', email: 'joy@mail.com',password:'john@1236'},
    ],

    getUsers: function(){
        return this.users;
    },

    getUserById: function(id){
        let user = null;
        for(let i = 0; i < this.users.length; i++){
            let usr = this.users[i];

            if(usr.id == id){
                user = usr;
                break;
            }
        }
        return user;
    },
    
}

module.exports = userManager;