# Veer Fitness Backend Server

This is the backend server for the Veer Fitness contact form that sends emails using Nodemailer.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Email Settings

Create a `.env` file in the backend folder with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 3. Gmail App Password Setup

To use Gmail with Nodemailer, you need to create an App Password:

1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file

### 4. Start the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

### 5. Test the API

Test endpoint: `GET http://localhost:5000/api/test`
Contact endpoint: `POST http://localhost:5000/api/contact`

## API Endpoints

### POST /api/contact
Sends contact form data via email.

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "User message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

## Features

- ✅ Sends formatted HTML emails
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled for frontend integration
- ✅ Environment variable configuration
- ✅ Professional email template

## Troubleshooting

1. **Email not sending**: Check your Gmail app password and 2FA settings
2. **CORS errors**: Make sure the frontend is running on the correct port
3. **Port already in use**: Change the PORT in .env file

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for sensitive data
- Consider rate limiting for production use 