const mysql=require('mysql');
const express=require('express');
const { response } = require('express');

var app=express();


const connection=mysql.createConnection({

host:'localhost',
user:'root',
password:'root',
database:'fet2020_22475',
multipleStatements:true

});

//for checking connection with mysql
connection.connect((err)=>{
    if(err) throw err;
    console.log("connected");
    
});
/*
//getting all record of employee from emp table 
connection.query('select *from emp',(err,rows)=>{
    if(err) throw err;
    
    console.log('data received from db:\n');
    console.log(rows);
 });
*/

//getting all record of employee from emp table 
app.get("/emp",(req,res)=>{

    connection.query("Select *from emp",(err,rows)=>{
        if(err) throw err;
   
        console.log('data received from db:\n');
        var str=JSON.stringify(rows);
        res.send(rows);
       // console.log(rows);
        res.end();

    });
});

//getting all record of department
app.get("/dept",(req,res)=>{

    connection.query("Select *from dept",(err,rows)=>{
        if(err) throw err;
   
        console.log('data received from db:\n');
        var str=JSON.stringify(rows);
        res.send(rows);
       // console.log(rows);
        res.end();

    });
});

//getting details by id of employee
app.get("/emp/:id",(req,res)=>{

    connection.query("Select *from emp where empid = ?",[req.params.id],(err,rows)=>{

        if(err) throw err;
        res.send(rows);
       
;    })
})


//getting details by id of dept
app.get("/dept/:id",(req,res)=>{

    connection.query("Select *from dept where deptno = ?",[req.params.id],(err,rows)=>{

        if(err) throw err;
        res.send(rows);
       
;    })
})

//creating post request to create employee

app.post("/emp",(req,res)=>{

   
   
    var empid=req.params.empid;
    var ename=req.params.ename;
    var esal=req.params.esal;
    var empdesgn=req.params.empdesgn;
    var  deptno=req.params.deptno;

    connection.query('insert into emp(empid,ename,esal,empdesgn,deptno) values (" '+empid+'","'+ename+'","'+esal+'","'+empdesgn+'","'+deptno+'") ',(err,data)=>{

        if(err) throw err;
        console.log("data received to dataBASE");
        response.send(data);
    });

});

//creating post request to create dept

app.post("/dept",(req,res)=>{

    let addDept={deptno:req.params.deptno,dname:req.params.dname};

    connection.query('Insert into dept SET ?',addDept, function(error,results,fields){

        if(error) throw error;
        res.end(JSON.stringify(results));
    });

});

//running on port
 app.listen(3000,()=>{

        console.log('express server is routing at port no:3011');
});
