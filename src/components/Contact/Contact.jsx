import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { send } from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import SectionWrapper from '../Common/SectionWrapper.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function Contact() {
  const { contact, socialLinks } = portfolioData;
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (formData) => {
    if (formData.botField) {
      setStatus({ type: 'error', message: 'Spam detected. Submission blocked.' });
      return;
    }

    setStatus(null);
    try {
      await send('service_xxx', 'template_xxx', {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message,
      }, 'public_key_xxx');

      setStatus({ type: 'success', message: 'Message sent successfully. I’ll respond soon.' });
      reset();
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send the message. Please try again later.' });
    }
  };

  return (
    <SectionWrapper id="contact" title={contact.title}>
      <div className="grid gap-8 xl:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-soft">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400/90">Contact</p>
            <h2 className="text-3xl font-semibold text-white">{contact.subtitle}</h2>
            <p className="text-slate-300">
              {contact.description}{' '}
              <a href={`mailto:${contact.email}`} className="text-sky-300 hover:text-sky-200">
                {contact.email}
              </a>
            </p>
          </div>

          <div className="grid gap-4 rounded-[1.75rem] border border-slate-800/90 bg-slate-950/90 p-6">
            <div className="flex items-center gap-4 text-slate-200">
              <FiMapPin className="h-5 w-5 text-sky-400" />
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-base font-medium text-white">{contact.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <FiMail className="h-5 w-5 text-sky-400" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href={`mailto:${contact.email}`} className="text-base font-medium text-white hover:text-sky-300">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-200">
              <FiPhone className="h-5 w-5 text-sky-400" />
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a href={`tel:${contact.phone}`} className="text-base font-medium text-white hover:text-sky-300">
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-slate-800/90 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Social</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                <FiLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                <FiGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-soft"
          noValidate
        >
          <input
            type="text"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
            {...register('botField')}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                type="text"
                placeholder={contact.form.namePlaceholder}
                className={`w-full rounded-3xl border px-4 py-3 text-base text-slate-100 outline-none transition focus:ring-2 ${
                  errors.name ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : 'border-slate-800 bg-slate-950/90 focus:border-sky-400 focus:ring-sky-400/20'
                }`}
                {...register('name', { required: 'Name is required.' })}
              />
              {errors.name && <p className="text-xs text-rose-300">{errors.name.message}</p>}
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                placeholder={contact.form.emailPlaceholder}
                className={`w-full rounded-3xl border px-4 py-3 text-base text-slate-100 outline-none transition focus:ring-2 ${
                  errors.email ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : 'border-slate-800 bg-slate-950/90 focus:border-sky-400 focus:ring-sky-400/20'
                }`}
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
              />
              {errors.email && <p className="text-xs text-rose-300">{errors.email.message}</p>}
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-300">
            <span>Phone</span>
            <input
              type="tel"
              placeholder={contact.form.phonePlaceholder}
              className={`w-full rounded-3xl border px-4 py-3 text-base text-slate-100 outline-none transition focus:ring-2 ${
                errors.phone ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : 'border-slate-800 bg-slate-950/90 focus:border-sky-400 focus:ring-sky-400/20'
              }`}
              {...register('phone', {
                required: 'Phone number is required.',
                minLength: { value: 8, message: 'Enter a valid phone number.' },
              })}
            />
            {errors.phone && <p className="text-xs text-rose-300">{errors.phone.message}</p>}
          </label>

          <label className="space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea
              rows="6"
              placeholder={contact.form.messagePlaceholder}
              className={`w-full rounded-3xl border px-4 py-3 text-base text-slate-100 outline-none transition focus:ring-2 ${
                errors.message ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : 'border-slate-800 bg-slate-950/90 focus:border-sky-400 focus:ring-sky-400/20'
              }`}
              {...register('message', {
                required: 'Message is required.',
                minLength: { value: 20, message: 'Please describe your project in more detail.' },
              })}
            />
            {errors.message && <p className="text-xs text-rose-300">{errors.message.message}</p>}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-3xl bg-sky-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : contact.form.buttonText}
          </button>

          {status && (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-3xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
