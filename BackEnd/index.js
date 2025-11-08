const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
let users = [{ mail: "", pass: "" }];
app.post("/signup", (req, res) => {
  if (users.length >= 1) {
    users.pop();
    users.push(req.body);
  } else {
    users.push(req.body);
  }
  console.log(users[0].pass);

  res.send(["SignUp Successfully", true]);
});

app.post("/login", (req, res) => {
  console.log("data received");
  const { loginMail, loginPass } = req.body;
  if (loginMail == users[0].mail && loginPass == users[0].pass) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get('/con',(req,res)=>{
    
    
    res.send((users[0].mail).length)
})

app.listen(process.env.PORT || 3000, () => console.log("Server Started..."));
