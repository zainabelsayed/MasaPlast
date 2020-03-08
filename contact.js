const express=require('express');
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');
const nodemailer=require('nodemailer');
const path=require('path');
const app=express();

// view engine setup 
app.engine('handlebars',exphbs({extname: '.hbs', defaultLayout:false}));
app.set('view engine','handlebars');

// body parser middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static folder

app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/views',express.static(path.join(__dirname,'views')));

app.get('/',(req,res)=>{

    res.render('contact');
});

app.post('/send',(req,res)=>{

	const output=`
	
	<p>You have a new contact request</p>
	<h3>Contact details</h3>
	<ul>
	  <li>FirstName: ${req.body.firstname}</li>
	  <li>lastName: ${req.body.lastname}</li>
	  <li>AreaCode: ${req.body.areacode}</li>
	  <li>TelNum: ${req.body.telnum}</li>
	  <li>Email: ${req.body.emailid}</li>
	  <li>Message: ${req.body.message}</li>
	</ul>
	
	`
	let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '*******@gmail.com', // generated ethereal user
            pass: '********' // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: '"Masa Plast for Plastic Idustries" <eng.zainab92@gmail.com>', // sender address
        to: '********@gmail.com', // list of receivers
        subject: 'Contact Info', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(error);
            
        }
        
        console.log('Message sent: %s', info.messageId);
    
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.render('contact',{msg: 'Email has been sent'});
        
    });
    

});

app.listen(3000,()=>console.log('server started...'));
