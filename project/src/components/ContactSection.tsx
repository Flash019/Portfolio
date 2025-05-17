import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-neutral-700 dark:text-neutral-300">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 dark:bg-neutral-700 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-cherry-100 dark:bg-cherry-900/30 rounded-full">
                    <Mail className="text-cherry-600 dark:text-cherry-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Email
                    </h4>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-neutral-900 dark:text-white hover:text-cherry-600 dark:hover:text-cherry-400 transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-cherry-100 dark:bg-cherry-900/30 rounded-full">
                    <Phone className="text-cherry-600 dark:text-cherry-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Phone
                    </h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-neutral-900 dark:text-white hover:text-cherry-600 dark:hover:text-cherry-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-cherry-100 dark:bg-cherry-900/30 rounded-full">
                    <MapPin className="text-cherry-600 dark:text-cherry-400" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Location
                    </h4>
                    <p className="text-neutral-900 dark:text-white">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4 text-neutral-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white dark:bg-neutral-600 flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-cherry-500 hover:text-white dark:hover:bg-cherry-500 transform hover:-translate-y-1"
                    >
                      <span className="sr-only">{social}</span>
                      <img 
                        src={`https://cdn.simpleicons.org/${social}/currentColor`} 
                        alt={social} 
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                    Your message has been sent. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cherry-500 dark:focus:ring-cherry-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cherry-500 dark:focus:ring-cherry-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cherry-500 dark:focus:ring-cherry-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-3 rounded-lg text-white font-medium shadow-lg transition-all transform hover:-translate-y-1 ${
                      isSubmitting 
                        ? 'bg-neutral-400 dark:bg-neutral-600 cursor-not-allowed' 
                        : 'bg-cherry-600 hover:bg-cherry-700 dark:bg-cherry-600 dark:hover:bg-cherry-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;