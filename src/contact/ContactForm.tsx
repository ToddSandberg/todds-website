import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createContact } from '../graphql/mutations';

const client = generateClient();

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formState, setFormState] = useState<FormState>('idle');

    function validate() {
        const next: Record<string, string> = {};
        if (!name.trim()) next.name = 'Name is required.';
        if (!email.trim()) next.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
        if (!message.trim()) next.message = 'Message is required.';
        return next;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setFormState('submitting');
        try {
            await client.graphql({
                query: createContact.replaceAll('__typename', ''),
                variables: { input: { name: name.trim(), email: email.trim(), message: message.trim() } },
            });
            setFormState('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch {
            setFormState('error');
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
                <label className="contact-field-label" htmlFor="cf-name">Name</label>
                <input
                    id="cf-name"
                    className={`contact-field-input${errors.name ? ' contact-field-input--error' : ''}`}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={() => errors.name && setErrors(prev => ({ ...prev, name: '' }))}
                    autoComplete="name"
                />
                {errors.name && <span className="contact-field-error">{errors.name}</span>}
            </div>

            <div className="contact-field">
                <label className="contact-field-label" htmlFor="cf-email">Email</label>
                <input
                    id="cf-email"
                    className={`contact-field-input${errors.email ? ' contact-field-input--error' : ''}`}
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => errors.email && setErrors(prev => ({ ...prev, email: '' }))}
                    autoComplete="email"
                />
                {errors.email && <span className="contact-field-error">{errors.email}</span>}
            </div>

            <div className="contact-field">
                <label className="contact-field-label" htmlFor="cf-message">Message</label>
                <textarea
                    id="cf-message"
                    className={`contact-field-input contact-field-textarea${errors.message ? ' contact-field-input--error' : ''}`}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onBlur={() => errors.message && setErrors(prev => ({ ...prev, message: '' }))}
                    rows={5}
                />
                {errors.message && <span className="contact-field-error">{errors.message}</span>}
            </div>

            {formState === 'success' && (
                <p className="contact-form-success">Message sent — I'll be in touch!</p>
            )}
            {formState === 'error' && (
                <p className="contact-form-error">Something went wrong. Please try again.</p>
            )}

            <div className="contact-form-actions">
                <button
                    className="contact-form-submit"
                    type="submit"
                    disabled={formState === 'submitting'}
                >
                    {formState === 'submitting' ? 'Sending…' : 'Send'}
                </button>
            </div>
        </form>
    );
}
