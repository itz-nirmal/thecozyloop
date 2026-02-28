import { type Metadata } from "next";
import { Header } from "~/app/_components/landing/header";
import { Footer } from "~/app/_components/landing/footer";
import { Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy - The Cozy Loop",
  description: "Cookie Policy for The Cozy Loop - Handmade crochet products and gifts",
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-[#F7EDE2]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#FFF8E7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cookie className="w-8 h-8 text-[#722F37]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1110] font-['Bricolage_Grotesque'] mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-[#1A1110]/70">
            Effective Date: 23/02/2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Company Info */}
          <div className="bg-[#FFF8E7] rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-bold text-[#1A1110] mb-4">Company Information</h2>
            <div className="space-y-2 text-[#1A1110]/80">
              <p><strong>Business Name:</strong> The Cozy Loop</p>
              <p><strong>Website:</strong> <a href="https://the-cozy-loop.vercel.app/" className="text-rose-500 hover:underline">the-cozy-loop.vercel.app</a></p>
              <p><strong>Email:</strong> <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">1. Introduction</h2>
            <p className="text-[#1A1110]/80 mb-4">
              This Cookie Policy explains how The Cozy Loop ("Company", "we", "us", "our") uses cookies and similar tracking technologies when you visit or interact with our website.
            </p>
            <p className="text-[#1A1110]/80 mb-4">
              This Policy forms part of our Privacy Policy and is issued in compliance with:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Information Technology Act, 2000</li>
              <li>SPDI Rules, 2011</li>
              <li>Digital Personal Data Protection Act, 2023</li>
              <li>Applicable e-commerce regulations in India</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              By continuing to use our website, you consent to our use of cookies as described below.
            </p>
          </section>

          {/* Section 2: What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">2. What Are Cookies?</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Cookies are small text files placed on your device (computer, mobile, tablet) when you visit a website.
            </p>
            <p className="text-[#1A1110]/80 mb-4">They help websites:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Function properly</li>
              <li>Remember user preferences</li>
              <li>Improve performance</li>
              <li>Analyze traffic patterns</li>
              <li>Enhance security</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Cookies do not typically contain personally identifiable information but may be linked to personal data we hold about you.
            </p>
          </section>

          {/* Section 3: Types of Cookies We Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.1 Essential Cookies</h3>
            <p className="text-[#1A1110]/80 mb-4">
              These cookies are necessary for website functionality and cannot be disabled.
            </p>
            <p className="text-[#1A1110]/80 mb-4">They enable:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Secure login</li>
              <li>Cart functionality</li>
              <li>Order placement</li>
              <li>Fraud prevention</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Without these cookies, certain features may not function properly.
            </p>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.2 Performance & Analytics Cookies</h3>
            <p className="text-[#1A1110]/80 mb-4">
              These cookies help us understand:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>How visitors use our website</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Website errors</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              This helps us improve user experience.
            </p>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.3 Functional Cookies</h3>
            <p className="text-[#1A1110]/80 mb-4">
              These cookies remember:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Language preferences</li>
              <li>Location settings</li>
              <li>User login sessions</li>
              <li>Saved cart items</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              They enhance personalization.
            </p>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.4 Marketing & Advertising Cookies</h3>
            <p className="text-[#1A1110]/80 mb-4">
              These cookies may be used to:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Show relevant promotions</li>
              <li>Measure campaign effectiveness</li>
              <li>Limit repetitive advertisements</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Marketing cookies are used only where consent is obtained.
            </p>
          </section>

          {/* Section 4: Legal Basis for Use of Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">4. Legal Basis for Use of Cookies</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Under the Digital Personal Data Protection Act, 2023:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Essential cookies are processed under legitimate use for service functionality.</li>
              <li>Non-essential cookies are processed based on user consent.</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              You may withdraw consent at any time via cookie settings.
            </p>
          </section>

          {/* Section 5: Third-Party Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">5. Third-Party Cookies</h2>
            <p className="text-[#1A1110]/80 mb-4">
              We may allow trusted third-party service providers to place cookies on your device, including:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Payment gateways</li>
              <li>Analytics providers</li>
              <li>Hosting providers</li>
              <li>Security monitoring services</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              These third parties are contractually obligated to maintain data protection standards.
            </p>
            <p className="text-[#1A1110]/80 mt-4">
              We do not sell personal data to third parties.
            </p>
          </section>

          {/* Section 6: Cookie Consent Mechanism */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">6. Cookie Consent Mechanism</h2>
            <p className="text-[#1A1110]/80 mb-4">
              When you visit our website, you may see a cookie consent banner.
            </p>
            <p className="text-[#1A1110]/80 mb-4">You may:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize cookie preferences</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Your preferences will be stored and may be updated at any time.
            </p>
          </section>

          {/* Section 7: Managing or Disabling Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">7. Managing or Disabling Cookies</h2>
            <p className="text-[#1A1110]/80 mb-4">
              You can manage cookies through:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Browser settings</li>
              <li>Device privacy settings</li>
              <li>Cookie preference center on our website</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4 mb-4">
              Disabling certain cookies may:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Affect website functionality</li>
              <li>Prevent checkout completion</li>
              <li>Disable login sessions</li>
            </ul>
          </section>

          {/* Section 8: Data Retention for Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">8. Data Retention for Cookies</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Cookies may remain on your device:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>For the duration of your session (session cookies), or</li>
              <li>For a defined period (persistent cookies)</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Retention periods are proportionate and limited to operational necessity.
            </p>
          </section>

          {/* Section 9: Security of Cookie Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">9. Security of Cookie Data</h2>
            <p className="text-[#1A1110]/80 mb-4">
              In compliance with:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Section 43A of the IT Act</li>
              <li>SPDI Rules, 2011</li>
              <li>DPDP Act, 2023</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              We implement reasonable security safeguards to protect data collected via cookies from unauthorized access or misuse.
            </p>
          </section>

          {/* Section 10: Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">10. Children's Privacy</h2>
            <p className="text-[#1A1110]/80 mb-4">
              We do not knowingly use cookies to:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Track minors</li>
              <li>Conduct behavioral advertising targeted at children</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              If we become aware that such data has been collected without parental consent, it will be deleted.
            </p>
          </section>

          {/* Section 11: Updates to This Cookie Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">11. Updates to This Cookie Policy</h2>
            <p className="text-[#1A1110]/80 mb-4">
              We may update this Cookie Policy periodically to reflect:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Legal changes</li>
              <li>Technology updates</li>
              <li>Business practices</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Updated versions will be posted with a revised effective date.
            </p>
            <p className="text-[#1A1110]/80 mt-4">
              Continued use of the website constitutes acceptance of changes.
            </p>
          </section>

          {/* Section 12: Contact & Grievance Redressal */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">12. Contact & Grievance Redressal</h2>
            <p className="text-[#1A1110]/80 mb-4">
              For questions or complaints regarding cookies or data processing:
            </p>
            <div className="bg-[#FFF8E7] rounded-xl p-4 mb-4">
              <p className="text-[#1A1110]/80">Grievance Officer: Nirmal Haldar</p>
              <p className="text-[#1A1110]/80">Email: <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
              <p className="text-[#1A1110]/80">Address: Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
            </div>
            <p className="text-[#1A1110]/80">
              Complaints will be acknowledged within 48 hours and resolved within 30 days.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-[#722F37] rounded-2xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Questions about our Cookie Policy?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions or concerns about this Cookie Policy, please contact us.
            </p>
            <a 
              href="/page/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#722F37] rounded-full font-semibold hover:bg-[#FFF8E7] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
