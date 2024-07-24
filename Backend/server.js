import express from 'express';


const app = express();

const courses = [{
    id :  1,
    course_name:"DSA",
    course_fee: 50000,
},
{
    id :  2,
    course_name:"Java",
    course_fee: 12000,
},
{
    id :  3,
    course_name:"WEB DEV",
    course_fee: 25000,
},
]
app.use(express.static('dist'));

/* app.get('/',(req,res)=>{
    res.send('server is ready')
}); */
app.get('/api/course',(req,res)=>{
   res.send(courses);
});



const port = process.env.PORT   || 2000;

app.listen(port , ()=>{
    console.log(`serve at ${port}`);
});