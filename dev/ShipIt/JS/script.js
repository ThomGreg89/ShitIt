(function() {

    //Remove display of create user
    document.querySelector("#create").style.display = "none";
    document.querySelector("#newLogin").style.display = "none";



    document.querySelector("#log").addEventListener("click", adminLogIn);
    document.querySelector("#editLogin").addEventListener("click", createUser);
    document.querySelector("#loginButton").addEventListener("click", logIn);

    //Default Username and Password
    let user = {name: "admin", password: "1234"};

    function adminLogIn(e) {

        if(document.querySelector("#uName").reportValidity() && document.querySelector("#uPassword").reportValidity()) {
            let userName = document.querySelector("#uName").value;
            let userPassword = document.querySelector("#uPassword").value;

            if (userName == user.name && userPassword == user.password) {
                document.querySelector("#login").style.display = "none";
                document.querySelector("#create").style.display = "block";
            } else {                
                document.querySelector("#heading").innerHTML = "Error, please try again!";
            }
        }
    }

    function createUser(e) {
        let userName = document.querySelector("#nName");
        let userPassword = document.querySelector("#nPassword");

        if (userName.reportValidity() && userPassword.reportValidity()) {
        
            user = editUser(userName.value, userPassword.value);

          // Reset old values
            document.querySelector('#uName').value = '';
            document.querySelector('#uPassword').value = '';
    
            document.querySelector("#newLogin").style.display = "block";
            document.querySelector("#create").style.display = "none";
        } else {      
            document.querySelector("#heading2").innerHTML = "Error, please try again!";
        }
    }

    function logIn(e) {

        if(document.querySelector("#username").reportValidity() && document.querySelector("#password").reportValidity()) {
            let userName = document.querySelector("#username").value;
            let userPassword = document.querySelector("#password").value;

            if (userName == user.name && userPassword == user.password) {
                document.querySelector("#heading3").innerHTML = "Success!";
                document.querySelector("#loginResult").innerHTML = "You have created a new user account!";
                document.querySelector("#remove").innerHTML = "";
            } else {
                    document.querySelector("#heading3").innerHTML = "Error, please try again!";
            }
        }
    }
})();

//Create function to return updated login information
function editUser(un, pw) {
    return {name:un, password:pw};
} 