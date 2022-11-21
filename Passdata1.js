const read = require('readline-sync');
const fs = require('fs');


while (true) {
    console.log("1. Add User");
    console.log("2. Update User");
    console.log("3. Delete User");
    console.log("4. Search User By Email");
    console.log("5. Display All Users");
    console.log("6. Exit");

    let option = read.question('Please select an option:');
    switch (option) {
        case "1":

            AddUser();

            break;
        case "2":
            // console.log("update User Selected");

            updateUser();
            break;
        case "3":
            // console.log("Delete User Selected");
            DeleteFile();
            
            break;
        case "4":
            // console.log("Search User Selected");
            SearchByEmail();
             break;
        case "5":
            // console.log("Display All Usera Details")

            ViewAllUser();
            break;

        case "6":
            console.log("Exit");
            process.exit(0);
            break;
        default:
            console.log("invalid option")
    }
}

////////////////////////////case-5:For Viewing all users daetails//////////////
function ViewAllUser() {
    console.log("View All Users Details");
    var files = fs.readdirSync('./data/');
    for (i = 0; i < files.length; i++) {
        var data = fs.readFileSync(`./data/${files[i]}`, 'utf-8');
        var obj = JSON.parse(data);
        console.log(obj);
    }
    console.log(" All Users Details Printed Successfully👍 ");
}

////////////////////////////////case-4:For Search Data by Email//////////////
function SearchByEmail() {
    var email = read.question("Enter your Email:");
    var files = fs.readdirSync('./data');
    for (let i = 0; i < files.length; i++) {
        var data = fs.readFileSync(`./data/${files[i]}`, 'utf-8');
        var obj = JSON.parse(data);
        // User entered Correct email
        if (obj.email == email) {
            console.log(obj);
            break;
        }
        //User entered wrong Email
        else if(obj.email != email){
            console.log("Please enter correct email");
            break;
        }
    }
}

///////////////////////////////////////// case-3:For Deletion///////////////
function DeleteFile() {
    let userName = read.question('Enter the username:');
    var fileName = getFileName(userName);
    fs.unlinkSync(`data/${userName}.json`);
}

/////////////////case-2:For Updation all field but  update only multiple phone//////////
function updateUser() {
    let userName = read.question('Enter the username:');
    var fileName = getFileName(userName);
    var userText = fs.readFileSync(fileName, 'utf8');
    var user = JSON.parse(userText);
    console.log("Enter the details or leave it blank");
    let name = read.question("Name: ");
    let email = read.question("Email: ");

    let phone1 = read.question("Phone1: ");
    let phone2 = read.question("Phone2: ");
    let phone3 = read.question("Phone3: ");
   
    user.name = name == "" ? user.name : name;
    user.email = email == "" ? user.email : email;

    user.phone1 = phone1 == "" ? user.phone1 : phone1;
    user.phone2 = phone2 == "" ? user.phone2 : phone2;
    user.phone3 = phone3 == "" ? user.phone3 : phone3;

    fs.writeFileSync(fileName, JSON.stringify(user));
    console.log("User updated successfully 👍");
}

/////////////////case-1:For Insertion but you can insert more than one phone No//////////////
function AddUser() {
    console.log("Add User Selected");
    var user = {
        name: null,
        username: null,
        email: null,

        phone1: null,
        phone2:null,
        phone3:null

    };
    user.name = read.question("Name: ");
    user.username = read.question("Username: ").toLowerCase();
    user.email = read.question("Email: ");

    user.phone1 = read.question("Phone1: ");
    user.phone2 = read.question("Phone2: ");
    user.phone3 = read.question("Phone3: ");

    let fileName = getFileName(user.username);
    var json = JSON.stringify(user);
    fs.writeFileSync(fileName, json);
}


function getFileName(username) {
    return `data/${username}.json`;
}


