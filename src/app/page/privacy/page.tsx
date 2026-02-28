import { type Metadata } from "next";
import { Header } from "~/app/_components/landing/header";
import { Footer } from "~/app/_components/landing/footer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - The Cozy Loop",
  description: "Privacy Policy for The Cozy Loop - Handmade crochet products and gifts",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F7EDE2]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#FFF8E7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#722F37]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1110] font-['Bricolage_Grotesque'] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#1A1110]/70">
            Last updated: 23/02/2026
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
              <p><strong>Entity Type:</strong> Sole Proprietorship</p>
              <p><strong>Registered Address:</strong> Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
              <p><strong>Email:</strong> <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://the-cozy-loop.vercel.app/" className="text-rose-500 hover:underline">the-cozy-loop.vercel.app</a></p>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">1. Introduction</h2>
            <p className="text-[#1A1110]/80 mb-4">
              The Cozy Loop ("Company", "we", "us", "our") respects your privacy and is committed to protecting your personal data.
            </p>
            <p className="text-[#1A1110]/80 mb-4">
              This Privacy Policy explains how we collect, use, process, store, and safeguard your personal data when you access or use our website, place orders, or interact with us.
            </p>
            <p className="text-[#1A1110]/80 mb-4">This Policy is issued in compliance with:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Information Technology Act, 2000</li>
              <li>SPDI Rules, 2011</li>
              <li>Digital Personal Data Protection Act, 2023</li>
              <li>Consumer Protection (E-Commerce) Rules, 2020</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              By using our website, you consent to the practices described in this Policy.
            </p>
          </section>

          {/* Section 2: Role as Data Fiduciary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">2. Role as Data Fiduciary</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Under the Digital Personal Data Protection Act, 2023, The Cozy Loop acts as a <strong>Data Fiduciary</strong> with respect to the personal data collected and processed through this website.
            </p>
            <p className="text-[#1A1110]/80">
              We determine the purpose and means of processing your personal data.
            </p>
          </section>

          {/* Section 3: Personal Data We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">3. Personal Data We Collect</h2>
            <p className="text-[#1A1110]/80 mb-4">We may collect the following categories of personal data:</p>
            
            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.1 Identity Information</h3>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Full name</li>
              <li>Username</li>
              <li>Contact details</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.2 Contact Information</h3>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Email address</li>
              <li>Phone number</li>
              <li>Shipping and billing address</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.3 Transaction Information</h3>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Order details</li>
              <li>Payment status</li>
              <li>Invoice details</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-2 italic">
              (Note: We do not store full credit/debit card details. Payments are processed via secure third-party payment gateways.)
            </p>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.4 Technical Information</h3>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Website usage data</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3 mt-6">3.5 Communication Data</h3>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Customer support queries</li>
              <li>Emails</li>
              <li>Reviews and feedback</li>
            </ul>
          </section>

          {/* Section 4: Sensitive Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">4. Sensitive Personal Data</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop does not intentionally collect sensitive personal data such as:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Biometric information</li>
              <li>Financial passwords</li>
              <li>Health records</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              If such data is inadvertently shared, it will be deleted in accordance with applicable law.
            </p>
          </section>

          {/* Section 5: Purpose of Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">5. Purpose of Processing</h2>
            <p className="text-[#1A1110]/80 mb-4">We process personal data for the following lawful purposes:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Order processing and fulfillment</li>
              <li>Payment verification</li>
              <li>Shipping and delivery</li>
              <li>Customer support</li>
              <li>Fraud detection and prevention</li>
              <li>Legal compliance (GST, taxation, accounting)</li>
              <li>Marketing communications (with consent)</li>
              <li>Improving website functionality</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              We process data only for purposes that are lawful, specific, and necessary.
            </p>
          </section>

          {/* Section 6: Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">6. Legal Basis for Processing</h2>
            <p className="text-[#1A1110]/80 mb-4">Under the DPDP Act, 2023, we process personal data based on:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Your consent</li>
              <li>Legitimate uses permitted by law</li>
              <li>Compliance with legal obligations</li>
              <li>Prevention and detection of fraud</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              You may withdraw consent at any time by contacting us.
            </p>
          </section>

          {/* Section 7: Consent Mechanism */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">7. Consent Mechanism</h2>
            <p className="text-[#1A1110]/80 mb-4">By:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Creating an account</li>
              <li>Placing an order</li>
              <li>Subscribing to newsletters</li>
              <li>Accepting cookies</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              You provide free, informed, specific, and unambiguous consent for data processing. Consent may be withdrawn, subject to legal retention requirements.
            </p>
          </section>

          {/* Section 8: Cookies & Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">8. Cookies & Tracking Technologies</h2>
            <p className="text-[#1A1110]/80 mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Improve user experience</li>
              <li>Analyze traffic patterns</li>
              <li>Remember login sessions</li>
              <li>Personalize content</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Users may disable cookies via browser settings. However, certain features may not function properly.
            </p>
          </section>

          {/* Section 9: Sharing of Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">9. Sharing of Personal Data</h2>
            <p className="text-[#1A1110]/80 mb-4">We may share personal data with:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Payment gateways</li>
              <li>Courier and logistics partners</li>
              <li>IT and hosting service providers</li>
              <li>Government authorities (if required by law)</li>
              <li>Legal advisors and auditors</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              We do not sell personal data to third parties. All third parties are required to maintain confidentiality and security.
            </p>
          </section>

          {/* Section 10: Cross-Border Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">10. Cross-Border Data Transfers</h2>
            <p className="text-[#1A1110]/80 mb-4">Personal data may be stored or processed outside India, subject to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Compliance with restrictions notified by Government of India</li>
              <li>Adequate security safeguards</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              We ensure such transfers comply with Indian law.
            </p>
          </section>

          {/* Section 11: Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">11. Data Retention</h2>
            <p className="text-[#1A1110]/80 mb-4">We retain personal data only as long as necessary for:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Order fulfillment</li>
              <li>Legal compliance (GST, Income Tax laws)</li>
              <li>Accounting requirements</li>
              <li>Dispute resolution</li>
              <li>Fraud prevention</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              After this period, data may be securely deleted or anonymized.
            </p>
          </section>

          {/* Section 12: Data Security Measures */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">12. Data Security Measures</h2>
            <p className="text-[#1A1110]/80 mb-4">In compliance with IT Act Section 43A and DPDP Act 2023, we implement reasonable security safeguards including:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Secure servers</li>
              <li>SSL encryption</li>
              <li>Access control systems</li>
              <li>Role-based data access</li>
              <li>Regular monitoring</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              However, no system is 100% secure.
            </p>
          </section>

          {/* Section 13: Data Breach Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">13. Data Breach Response</h2>
            <p className="text-[#1A1110]/80 mb-4">In case of a personal data breach:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>We will notify the Data Protection Board of India (if required).</li>
              <li>Affected users will be informed as mandated by law.</li>
              <li>Corrective actions will be taken promptly.</li>
            </ul>
          </section>

          {/* Section 14: Your Rights as a Data Principal */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">14. Your Rights as a Data Principal</h2>
            <p className="text-[#1A1110]/80 mb-4">Under the DPDP Act, 2023, you have the right to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Seek correction or updating</li>
              <li>Request erasure (subject to legal requirements)</li>
              <li>Withdraw consent</li>
              <li>Nominate another person to exercise rights in case of incapacity</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Requests may be made at <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a>. We will respond within timelines prescribed by law.
            </p>
          </section>

          {/* Section 15: Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">15. Children's Privacy</h2>
            <p className="text-[#1A1110]/80 mb-4">If we process personal data of individuals below 18 years:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Verifiable parental consent may be required.</li>
              <li>No tracking or targeted advertising shall be directed at children.</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              If such data is collected inadvertently, it will be deleted.
            </p>
          </section>

          {/* Section 16: Automated Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">16. Automated Processing</h2>
            <p className="text-[#1A1110]/80 mb-4">We may use automated systems for:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Fraud detection</li>
              <li>Payment risk analysis</li>
              <li>Order validation</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Such processing is conducted in compliance with applicable laws.
            </p>
          </section>

          {/* Section 17: Grievance Redressal Officer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">17. Grievance Redressal Officer</h2>
            <p className="text-[#1A1110]/80 mb-4">In compliance with IT Act and E-Commerce Rules:</p>
            <div className="bg-[#FFF8E7] rounded-xl p-4 mb-4">
              <p className="text-[#1A1110]/80">Grievance Officer: Nirmal Haldar</p>
              <p className="text-[#1A1110]/80">Email: <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
              <p className="text-[#1A1110]/80">Address: Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
            </div>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Complaints will be acknowledged within 48 hours.</li>
              <li>Resolved within 30 days.</li>
            </ul>
          </section>

          {/* Section 18: CERT-In & Cyber Incident Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">18. CERT-In & Cyber Incident Compliance</h2>
            <p className="text-[#1A1110]/80 mb-4">We comply with CERT-In Rules, 2022 regarding:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Cyber incident reporting</li>
              <li>Log retention</li>
              <li>Security monitoring</li>
            </ul>
          </section>

          {/* Section 19: Marketing Communications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">19. Marketing Communications</h2>
            <p className="text-[#1A1110]/80 mb-4">
              We may send promotional emails if you opt in.
            </p>
            <p className="text-[#1A1110]/80 mb-4">
              You may unsubscribe at any time using the link provided in the communication.
            </p>
            <p className="text-[#1A1110]/80">
              We do not engage in unsolicited spam communications.
            </p>
          </section>

          {/* Section 20: Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">20. Third-Party Links</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Our website may contain links to third-party websites.
            </p>
            <p className="text-[#1A1110]/80 mb-4">
              We are not responsible for the privacy practices of external sites.
            </p>
            <p className="text-[#1A1110]/80">
              Users are encouraged to review their privacy policies separately.
            </p>
          </section>

          {/* Section 21: Updates to this Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">21. Updates to this Privacy Policy</h2>
            <p className="text-[#1A1110]/80 mb-4">
              We may update this Privacy Policy periodically.
            </p>
            <p className="text-[#1A1110]/80 mb-4">
              Changes will be posted on this page with updated effective date.
            </p>
            <p className="text-[#1A1110]/80">
              Continued use of the website constitutes acceptance of updated terms.
            </p>
          </section>

          {/* Section 22: Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">22. Governing Law</h2>
            <p className="text-[#1A1110]/80 mb-4">
              This Privacy Policy shall be governed by the laws of India.
            </p>
            <p className="text-[#1A1110]/80">
              Any disputes shall fall under the jurisdiction mentioned in the Terms & Conditions.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-[#722F37] rounded-2xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Questions about our Privacy Policy?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us.
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
