# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form responses via email.

## Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, click "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose "Gmail" (or another email provider)
4. Click "Create Service"
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Click "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Choose "Blank Template"
4. Design your email template with these variables:
   ```
   Hi Manojna,

   You have a new booking request!

   Name: {{from_name}}
   Email: {{from_email}}
   Social Handle: {{social_handle}}
   Preferred Date: {{preferred_date}}

   Vision:
   {{vision}}

   Reply to: {{from_email}}
   ```
5. Save the template
6. Copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Click "Account" in the bottom-left corner
2. Copy your **Public Key** (e.g., `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## Step 5: Update Contact.js

Open `src/components/Contact.js` and replace the placeholder values:

```javascript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

## Step 6: Test the Form

1. Run `npm start`
2. Fill out the contact form
3. Submit and check your email!

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

For most personal portfolios, this is more than enough!

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify all credentials are correct
3. Check spam folder
4. Make sure the template variables match exactly

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: support@emailjs.com

