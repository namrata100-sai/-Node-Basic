const fs = require("fs")

// fs.writeFile("./test.txt","hey i am namruu",()=>{})
// const result=fs.readFileSync("./contact.txt","utf-8")
// console.log(result)
// fs.readFile("./contact.txt","utf-8",(err,result)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
 fs.appendFileSync("./test.txt","\n hey there\n")

 fs.cpSync("./test.txt","./copy.txt")

 fs.unlinkSync("./copy.txt")

 console.log(fs.statSync("./test.txt").isFile())
 fs.mkdirSync("namrata/p.txt",{recursive:true})

