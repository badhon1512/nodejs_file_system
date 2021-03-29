let {person,marks}=require('./users')

const fs=require('fs');

//console.log(person);
//read file
// fs.readFile('test.txt',(err,data)=>
// {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data.toString());
//   }
// })



// write file
// fs.writeFile('test.txt','new msg',(err,data)=>
// {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('msg added');
//   }
// })

// appedn text

// fs.appendFile('test.txt','\nnew msg2',(err,data)=>
// {
//   if(err){
//     console.log(err);
//   }else{
//     console.log('msg added');
//   }
// })


// make new folder
// if(!fs.existsSync('new folder')){
// fs.mkdir('new folder',(err,data)=>{

//   if(err){
//     console.log(err);
//   }else{
//     console.log('dir created');
//   }
// })
// }

/// delete folder

// if(fs.existsSync('new folder')){
//   fs.rmdir('new folder',(err,data)=>{
  
//     if(err){
//       console.log(err);
//     }else{
//       console.log('dir removed');
//     }
//   })
//   }

// rempove file

if(fs.existsSync('test.txt')){
  fs.unlink('test.txt',(err,data)=>{
  
    if(err){
      console.log(err);
    }else{
      console.log('dir file');
    }
  })
  }