const express=require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const multer = require("multer");
const upload = multer();
require('dotenv').config();

app.use('/', express.static(path.join(__dirname, '/')));

console.log('this was then at 5:41 am')

app.listen(PORT, ()=>{
	console.log('the Daniel is studying :)')
});


app.use('/form', upload.none(), (req,res,next)=>{
	console.log('walked through here!')
	next();
});



app.post('/grabTable', (req,res,next)=>{
	let arrivingData='';
	req.on("data", (data)=>{
		arrivingData+=data;
	});
	req.on("end", ()=>{
		const body=JSON.parse(arrivingData);
		console.log(body);
		pool.getConnection(function(err,con){
			var query="SELECT * FROM " + body.table;
			console.log(query)
			con.query(query, function(err, rows){
				console.log('55!')
				console.log(rows);
				con.release();
			});
		});
	});

});