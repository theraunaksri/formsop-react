const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');

app.use(cors());

// MySQL Database Configuration
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Raunak@12345',
  database: 'gic',
});

const transporter = nodemailer.createTransport({
  service: 'yopmail',
  auth: {
    user: 'alt.d2-fofqm3pl@yopmail.com',
    
  },
});


app.post('/submit-form', (req, res) => {
  const formData = req.body;

  const sql = 'INSERT INTO form_data SET ?';

  db.query(sql, formData, async (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    console.log('Inserted a new record into MySQL');

    
    const mailOptions = {
      from: 'noreply@yopmail.com',
      to: formData.email, 
      subject: 'Form Submission Confirmation',
      text: `Thank you for submitting the form. Here is the data you provided:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Confirmation email sent');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }

    res.status(200).json({ message: 'Form submitted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
