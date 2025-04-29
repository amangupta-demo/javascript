const user = {
    username :"aman gupta",
    password:123,

    aboutuser : function(){
        console.log(this.username);
    }
 
}
user.aboutuser();
console.log(user.username);

const userdetai ={
    username : "",
    password:"",
    loginCount : ""

    


}
 function Userdetai(username,password,loginCount){
    this.username=username;
    this.password = password;
    this.loginCount = loginCount;

    return this; //it return implicitly ,  return is not requred 
}

let use = new Userdetai('aman' ,123,2);
let use2 = new Userdetai('abhi',1234323,33);
console.log(use);
console.log(use2.username)