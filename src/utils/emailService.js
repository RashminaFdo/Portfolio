import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    );
    
    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};
