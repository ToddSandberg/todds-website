import Tabs, { TabType } from '../common/Tabs';
import Divider from '../common/Divider';
import './Contact.css';
import { usePageTitle } from '../common/usePageTitle';
import ContactForm from './ContactForm';
import githubImg from '../common/github.png';

const linkedInIconUrl = 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg';

export default function Contact() {
    usePageTitle('Contact');

    return <div className="Contact">
        <Tabs
            selectedTab={TabType.CONTACT}
            appBarClass='Contact-Appbar'
            appContentClass='ContactContent'
            dropdownClass='Contact-Dropdown'
        >
            <div className="contact-inner">
                <h1 className="contact-heading">Contact</h1>
                <Divider/>
                <p className="contact-intro">
                    I'm always open to new opportunities, collaborations, or just a good conversation.
                    Drop your name and email below and I'll get back to you, or find me directly on LinkedIn or GitHub.
                </p>
                <div className="contact-body">
                    <section className="contact-section">
                        <h2 className="contact-section-title">Find me online</h2>
                        <div className="contact-social-links">
                            <a
                                href="https://www.linkedin.com/in/todd-sandberg/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-card"
                            >
                                <img src={linkedInIconUrl} alt="LinkedIn" className="contact-social-icon" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/ToddSandberg"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-social-card"
                            >
                                <img src={githubImg} alt="GitHub" className="contact-social-icon" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </section>
                    <section className="contact-section">
                        <h2 className="contact-section-title">Send a message</h2>
                        <div className="contact-form-wrapper">
                            <ContactForm/>
                        </div>
                    </section>
                </div>
            </div>
        </Tabs>
    </div>;
}