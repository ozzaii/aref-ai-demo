import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setEmail('');
      setMessage('');

      // Reset success status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/98 via-dark to-dark/95"></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[25%] h-[25%] bg-blue-400/5 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Connect with nanominds
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 font-light mb-12">
            Discover how our orchestrated tiny models can transform your domain expertise 
            into powerful intelligent systems.
          </p>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/10 p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-dark/60 border border-blue-500/10 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400/30 transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Tell us about your domain"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full bg-dark/60 border border-blue-500/10 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-400/30 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full btn-primary py-3 rounded-lg font-medium transition-all duration-200 ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Initiate Connection'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Message sent successfully! We'll be in touch soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>

            <div className="mt-8 pt-6 border-t border-blue-500/10">
              <p className="text-gray-400 text-sm font-mono">
                <span className="text-blue-400">$</span> connect --domain your-expertise --mode discover
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 