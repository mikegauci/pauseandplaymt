import { useState, FormEvent, useEffect } from 'react';
import * as emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#EEC60D] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">Contact Us</h1>
        </div>

        <h2 className="text-[#37B5FF] text-2xl md:text-5xl font-bold mb-8">
          Get in touch with the Pause & Play Festival team.
        </h2>

        <p className="text-white text-lg mb-16">
          We'd love to hear from you! If you have any questions or want to get in touch, contact us through the form below:
        </p>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 max-w-2xl mx-auto border border-[#37B5FF]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#37B5FF] font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#111] border border-[#37B5FF]/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#37B5FF]/50 focus:border-[#37B5FF]
                         placeholder-gray-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#37B5FF] font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#111] border border-[#37B5FF]/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#37B5FF]/50 focus:border-[#37B5FF]
                         placeholder-gray-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#37B5FF] font-semibold mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-[#111] border border-[#37B5FF]/20 text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#37B5FF]/50 focus:border-[#37B5FF]
                         placeholder-gray-500 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-900/20 text-green-400 border border-green-500/20' 
                  : 'bg-red-900/20 text-red-400 border border-red-500/20'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#37B5FF] text-[#111] px-8 py-3 rounded-lg font-semibold 
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#37B5FF]/90'} 
                transition-colors w-full`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}