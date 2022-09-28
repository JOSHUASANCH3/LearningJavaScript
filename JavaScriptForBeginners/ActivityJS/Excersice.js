    console.log("Hello, welcome to the food app");//Bienvenida con un print = console.log
    var username = prompt("Please create username");//se usa prompt para almacenar un string en la variable username 
    var password = prompt("Please create password");//se usa prompt para almacenar un string en la variable username 
    console.log("Thank your account have been created");//se usa un print para colocar un mensaje en pantalla
    console.log("please enter your login informations");
    var tryuser = prompt("username: ");//se usa el prompt para almaacenar en un dato string
    var trypassword = prompt("password: ");
    while(username!=tryuser && password!=trypassword){//se compara si no son distintos 
        console.log("wrong username or password please try again");
        tryuser = prompt("Enter your username: ");
        trypassword = prompt("Enter your password: ");
    }
    console.log("You are conected");

    var balance = 10;
    console.log("Your count balance is " +balance+" dollars");

    var q1 = prompt("Would you like to add money to your money\nYES or NOT?");
    if(q1 == "YES" || q1 == "yes"){
        var q2 = prompt("How much would you like to add: ");
        var balance = balance + parseInt(q2);
        console.log("Your new balance is "+ balance +" dollars");
    }

    var q4 = prompt("would you like a burger\nYES or NOT?");
    if(q4 == "YES" || q4 == "yes"){
        console.log("Please choose what burger you want");
        var burgertypes = ["cheese burger", "fish burger", "All dress burger"];
        var prices = [2, 3, 4];
        console.log("choice 1: "+burgertypes[0]+" "+prices[0]+"$");
        console.log("choice 2: "+burgertypes[1]+" "+prices[1]+"$");
        console.log("choice 3: "+burgertypes[2]+" "+prices[2]+"$");
    }
    var q5 = prompt("what is your choice?\nSelect a number from 1 -3");
    switch (q5) {
        case "1":
            console.log("you have ordered a "+burgertypes[0]+"\n"
            +"the total of order is"+prices[0]+"$");
            var balance = balance - prices[0];
            console.log("you have "+balance+"$ left on your balance");
            break;
        case "2":
            console.log("you have ordered a "+burgertypes[1]+"\n"
            +"the total of order is"+prices[1]+"$");
            balance = balance - prices[0];
            console.log("you have "+balance+"$ left on your balance");
            break;
        case "3":
            console.log("you have ordered a "+burgertypes[2]+"\n"
            +"the total of order is"+prices[2]+"$");
            balance = balance - prices[0];
            console.log("you have "+balance+"$ left on your balance");
        break;
        default:
            console.log("Select options 1 to 3");
            break;
    }
    console.log("Goodbye!!");
