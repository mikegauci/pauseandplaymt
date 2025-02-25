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
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-[#CCFF33] inline-block px-4 py-1 mb-8">
          <h1 className="text-[#1E0B36] font-bold">Contact Us</h1>
        </div>

        <h2 className="text-[#FF6B4E] text-5xl font-bold mb-8">
          Get in touch with the Frome Festival team.
        </h2>

        <p className="text-white text-lg mb-16">
          At Frome Festival, we'd love to hear from you! If you have any questions or want to get involved,
          contact us through one of the below channels:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Points</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">General and participant enquiries:</h4>
                <p className="text-white">info@fromefestival.co.uk</p>
              </div>

              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Urgent Enquiries:</h4>
                <p className="text-white">+44 1234 567890</p>
              </div>

              <div className="pt-4">
                <p className="text-gray-300">
                  To be part of the festival as an individual or organisation see our{' '}
                  <a href="/get-involved" className="text-[#CCFF33] hover:underline">
                    Get Involved
                  </a>
                  {' '}page
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#CCFF33] rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#1E0B36] font-semibold mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1E0B36] font-semibold mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#1E0B36] font-semibold mb-2">
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#1E0B36] text-white px-8 py-3 rounded-lg font-semibold 
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-900'} 
                  transition-colors w-full`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}