const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Manual fallback for environment variables
if (!process.env.EMAIL_USER) {
  process.env.EMAIL_USER = 'ramesh.1111249@gmail.com';
}
if (!process.env.EMAIL_PASS) {
  process.env.EMAIL_PASS = 'ahsflsmefhargxuo';
}
if (!process.env.PORT) {
  process.env.PORT = '5001';
}

// Debug: Check if environment variables are loaded
console.log('Environment variables check:', {
  EMAIL_USER: process.env.EMAIL_USER ? 'Loaded' : 'Missing',
  EMAIL_PASS: process.env.EMAIL_PASS ? 'Loaded (length: ' + process.env.EMAIL_PASS.length + ')' : 'Missing',
  PORT: process.env.PORT || 'Default (5000)'
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'https://veerfitness.com',
    'https://www.veerfitness.com'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, whatsapp, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill all required fields (Name, Email, Phone, Message)' 
      });
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing:', {
        EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Missing',
        EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Missing'
      });
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration is missing. Please check .env file.' 
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ramesh.1111249@gmail.com', // Recipient email
      subject: 'Veer Fitness',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #rgb(184 0 31); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong>
              <span style="margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong>
              <span style="margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Phone Number:</strong>
              <span style="margin-left: 10px;">${phone}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">WhatsApp Number:</strong>
              <span style="margin-left: 10px;">${whatsapp || 'Not provided'}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: white; border-left: 4px solid #007bff; border-radius: 4px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            <p>This email was sent from the Veer Fitness contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `
    };

    console.log('Attempting to send email with config:', {
      from: process.env.EMAIL_USER,
      to: 'ramesh.1111249@gmail.com',
      subject: mailOptions.subject
    });

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Detailed email sending error:', {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response
    });
    
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail app password.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection failed. Please check your internet connection.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Request timed out. Please try again.';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage 
    });
  }
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/api/test`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
}); 