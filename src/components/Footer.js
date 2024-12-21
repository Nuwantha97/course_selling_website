import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const businessLinks = [
    { label: 'Employers', href: '/' },
    { label: 'Solutions', href: '/' },
    { label: 'Services', href: '/' }
  ];

  const resourceLinks = [
    { label: 'Documentation', href: '/' },
    { label: 'Guides', href: '/' },
    { label: 'Tutorials', href: '/' }
  ];

  const companyLinks = [
    { label: 'About', href: '/' },
    { label: 'Blog', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Contact us', href: '/' }
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', href: '/' },
    { label: 'Privacy', href: '/' },
    { label: 'Security', href: '/' },
    { label: 'Cookie Policy', href: '/' }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '/' },
    { Icon: Twitter, href: '/' },
    { Icon: Youtube, href: '/' },
    { Icon: Linkedin, href: '/' }
  ];

  const LinkSection = ({ title, links }) => (
    <div className="flex flex-col gap-2">
      <h4 className="text-white text-sm font-bold mb-2">{title}</h4>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <LinkSection title="For Business" links={businessLinks} />
          <LinkSection title="Resources" links={resourceLinks} />
          <LinkSection title="Company" links={companyLinks} />
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold mb-2">Connect with us</h4>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href }) => (
                <a
                  key={Icon.name}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Course Selling Platform. All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;