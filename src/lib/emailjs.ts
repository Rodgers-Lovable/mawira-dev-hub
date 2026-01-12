import emailjs from '@emailjs/browser';

// EmailJS Configuration - Add these environment variables later
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// Check if EmailJS is configured
export const isEmailJSConfigured = (): boolean => {
  return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

// Initialize EmailJS (call this once in your app)
export const initEmailJS = (): void => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Check if EmailJS is configured
  if (!isEmailJSConfigured()) {
    console.warn('EmailJS is not configured. Please add environment variables.');
    // Return success for demo purposes - remove this in production
    return {
      success: true,
      message: 'Message received! (Demo mode - EmailJS not configured yet)'
    };
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service_type: formData.service || 'Not specified',
      message: formData.message,
      to_name: 'Brian Mawira', // Your name
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been sent successfully!'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or email directly.'
    };
  }
};
