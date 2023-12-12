const Express = require(express);
const app = new Express();

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.listen(4000, ()=>{
    console.log('Server has  started on port 4000');
})
