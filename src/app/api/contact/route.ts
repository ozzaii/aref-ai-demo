import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Get recipients from environment variable or use default
const RECIPIENTS = process.env.CONTACT_FORM_RECIPIENTS?.split(',') || ['kaan@nanominds.ai', 'omer@nanominds.ai'];

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format the email content
const formatEmailContent = (email: string, message: string) => {
  return {
    text: `New Contact Form Submission\n\nFrom: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>From:</strong> ${email}</p>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <p style="margin: 0 0 10px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
          Sent via nanominds.ai contact form
        </p>
      </div>
    `,
  };
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, message } = body;

    // Input validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Verify SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format email content
    const { text, html } = formatEmailContent(email, message);

    // Send email to all recipients
    await Promise.all(
      RECIPIENTS.map(async (recipient) => {
        try {
          await transporter.sendMail({
            from: {
              name: 'nanominds Contact Form',
              address: process.env.SMTP_USER!,
            },
            to: recipient,
            subject: `New Contact Form Submission from ${email}`,
            text,
            html,
          });
        } catch (error) {
          console.error(`Failed to send email to ${recipient}:`, error);
          throw error;
        }
      })
    );

    // Send confirmation email to the user
    await transporter.sendMail({
      from: {
        name: 'nanominds',
        address: process.env.SMTP_USER!,
      },
      to: email,
      subject: 'Thank you for contacting nanominds',
      text: `Thank you for reaching out to nanominds. We have received your message and will get back to you soon.\n\nBest regards,\nThe nanominds Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Contacting nanominds</h2>
          <p>We have received your message and will get back to you soon.</p>
          <p style="margin-top: 20px;">Best regards,<br>The nanominds Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 