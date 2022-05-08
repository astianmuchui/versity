
let loginUI = '<h3>Get Back to the community .</h3><form action="" method="post"><input type="text" name="" id="" placeholder="Username"><input type="password" name="" id="" placeholder="Password"><input type="submit" name="login" value="Log in" id="" class=""buttn></form>';
let signupUI = '<h3>Join the community .</h3><form action="" method="post"><input type="text" name="" id="" placeholder="Username"><input type="password" name="" id="" placeholder="Password"><input type="submit" name="signup" value="Sign Up" id="" class=""buttn></form>';
let targetDiv  = document.querySelector(".branding");
let signupTrigger  = document.getElementById("signup");
let loginTrigger  = document.getElementById("login");
let actionBtn = document.getElementById("action");

   actionBtn.onclick = ()=>{
      targetDiv.innerHTML = signupUI;
   }
   signupTrigger.onclick = ()=>{
     
      targetDiv.innerHTML = signupUI;
   }
   loginTrigger.onclick = ()=>{
      targetDiv.innerHTML = loginUI;
   }

