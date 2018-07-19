let app = require('express')();

app.get('/', (req, res)=>{
  res.send('hola desde api ');
});

app.listen(3000, () => console.log('todo bien'));
