import { type Metadata } from "next";
import { Header } from "~/app/_components/landing/header";
import { Footer } from "~/app/_components/landing/footer";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - The Cozy Loop",
  description: "Terms and Conditions for The Cozy Loop - Handmade crochet products and gifts",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7EDE2]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#FFF8E7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-[#722F37]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1110] font-['Bricolage_Grotesque'] mb-4">
            Terms & Conditions
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
              <p><strong>Website:</strong> <a href="https://the-cozy-loop.vercel.app/" className="text-rose-500 hover:underline">the-cozy-loop.vercel.app</a></p>
              <p><strong>Business Name:</strong> The Cozy Loop</p>
              <p><strong>Entity Type:</strong> Sole Proprietorship</p>
              <p><strong>Registered Address:</strong> Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
              <p><strong>Email:</strong> <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">1. Introduction</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Welcome to The Cozy Loop ("Company", "we", "us", "our"). By accessing or using our website, purchasing products, or interacting with our services, you agree to comply with and be legally bound by these Terms & Conditions.
            </p>
            <p className="text-[#1A1110]/80">
              If you do not agree with any part of these Terms, please do not use our website.
            </p>
          </section>

          {/* Section 2: Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">2. Eligibility</h2>
            <p className="text-[#1A1110]/80 mb-4">By using this website, you represent that:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>You are at least 12 years old.</li>
              <li>You are legally capable of entering into a binding contract under applicable laws.</li>
              <li>All information provided by you is accurate and complete.</li>
            </ul>
          </section>

          {/* Section 3: Account Registration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">3. Account Registration</h2>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Users may be required to create an account to place orders.</li>
              <li>You are responsible for maintaining confidentiality of login credentials.</li>
              <li>The Cozy Loop reserves the right to suspend or terminate accounts found violating policies.</li>
            </ul>
          </section>

          {/* Section 4: Product Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">4. Product Information</h2>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>All crochet products are handmade; minor variations in color, size, and texture may occur.</li>
              <li>Product images are for representation purposes only.</li>
              <li>We reserve the right to modify product specifications without prior notice.</li>
            </ul>
          </section>

          {/* Section 5: Pricing & Taxes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">5. Pricing & Taxes</h2>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>All prices are listed in INR unless otherwise specified.</li>
              <li>Prices include applicable GST unless stated.</li>
              <li>The Cozy Loop reserves the right to modify pricing at any time without notice.</li>
              <li>In case of pricing errors, we reserve the right to cancel affected orders.</li>
            </ul>
          </section>

          {/* Section 6: Order Acceptance & Cancellation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">6. Order Acceptance & Cancellation</h2>
            <p className="text-[#1A1110]/80 mb-4">An order is confirmed only after payment confirmation.</p>
            <p className="text-[#1A1110]/80 mb-4">We reserve the right to cancel orders due to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Pricing errors</li>
              <li>Stock unavailability</li>
              <li>Fraud suspicion</li>
              <li>Payment authorization failure</li>
              <li>Fraud Payment</li>
              <li>Payment vulnerability</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Refunds for cancelled orders will be processed within 5–10 business days.
            </p>
          </section>

          {/* Section 7: Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">7. Intellectual Property</h2>
            <p className="text-[#1A1110]/80 mb-4">All content on this website including:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Logo</li>
              <li>Brand name</li>
              <li>Product designs</li>
              <li>Images</li>
              <li>Text</li>
              <li>Graphics</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              are the intellectual property of The Cozy Loop and protected under applicable copyright and trademark laws. Unauthorized use is strictly prohibited.
            </p>
          </section>

          {/* Section 8: User Conduct */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">8. User Conduct</h2>
            <p className="text-[#1A1110]/80 mb-4">Users agree not to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Use the website for illegal activities.</li>
              <li>Upload malicious code.</li>
              <li>Violate intellectual property rights.</li>
              <li>Post abusive or defamatory content.</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Violation may result in legal action.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">9. Limitation of Liability</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop shall not be liable for:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Indirect or consequential damages</li>
              <li>Loss of profits</li>
              <li>Delivery delays caused by third-party logistics</li>
              <li>Force majeure events (natural disasters, strikes, etc.)</li>
            </ul>
          </section>

          {/* Section 10: Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">10. Indemnification</h2>
            <p className="text-[#1A1110]/80">
              You agree to indemnify and hold harmless The Cozy Loop from any claims arising from misuse of the website or violation of these terms.
            </p>
          </section>

          {/* Section 11: Governing Law & Jurisdiction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">11. Governing Law & Jurisdiction</h2>
            <p className="text-[#1A1110]/80">
              These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Raiganj, Uttar Dinajpur, West Bengal.
            </p>
          </section>

          {/* Section 12: Amendments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">12. Amendments</h2>
            <p className="text-[#1A1110]/80">
              We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of revised Terms.
            </p>
          </section>

          {/* Section 13: Compliance with Indian Laws */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">13. Compliance with Indian Laws</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop operates in accordance with:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>The Information Technology Act, 2000</li>
              <li>The Consumer Protection Act, 2019</li>
              <li>The Consumer Protection (E-Commerce) Rules, 2020</li>
              <li>The Indian Contract Act, 1872</li>
              <li>The Goods and Services Tax (GST) Act, 2017</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              All transactions conducted through this website shall be governed by applicable Indian laws and regulations.
            </p>
          </section>

          {/* Section 14: GST & Taxation Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">14. GST & Taxation Compliance</h2>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>The Cozy Loop is registered under the Goods and Services Tax (GST) laws of India.</li>
              <li>GST shall be charged in accordance with prevailing statutory rates.</li>
              <li>A tax invoice compliant with GST laws shall be issued for every confirmed order.</li>
              <li>Customers are responsible for providing accurate billing details including GSTIN (if applicable).</li>
              <li>Any incorrect tax-related information provided by the customer shall not be the responsibility of The Cozy Loop.</li>
            </ul>
          </section>

          {/* Section 15: Consumer Protection (E-Commerce) Rules Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">15. Consumer Protection (E-Commerce) Rules Compliance</h2>
            <p className="text-[#1A1110]/80 mb-4">In accordance with the Consumer Protection (E-Commerce) Rules, 2020:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>The Cozy Loop provides accurate product descriptions to the best of its ability.</li>
              <li>We do not engage in unfair trade practices or misleading advertisements.</li>
              <li>All pricing, refund, and cancellation policies are transparently disclosed.</li>
              <li>Customers shall not post fake reviews or misleading feedback.</li>
              <li>The Cozy Loop reserves the right to remove fraudulent or abusive reviews.</li>
            </ul>
          </section>

          {/* Section 16: Grievance Redressal Mechanism */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">16. Grievance Redressal Mechanism</h2>
            <p className="text-[#1A1110]/80 mb-4">In compliance with the Information Technology Act, 2000 and Consumer Protection (E-Commerce) Rules, 2020:</p>
            <div className="bg-[#FFF8E7] rounded-xl p-4 mb-4">
              <h3 className="font-semibold text-[#1A1110] mb-2">Grievance Officer Details:</h3>
              <p className="text-[#1A1110]/80">Name: Nirmal Haldar</p>
              <p className="text-[#1A1110]/80">Email: <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
              <p className="text-[#1A1110]/80">Address: Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
            </div>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>All complaints shall be acknowledged within 48 hours.</li>
              <li>Grievances shall be resolved within 30 days from the date of receipt.</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Customers may also seek remedies under the Consumer Protection Act, 2019 through appropriate consumer dispute redressal commissions.
            </p>
          </section>

          {/* Section 17: Electronic Records & Digital Acceptance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">17. Electronic Records & Digital Acceptance</h2>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Electronic records and communications are recognized under the Information Technology Act, 2000.</li>
              <li>By clicking "Place Order" or equivalent buttons, you enter into a legally binding electronic contract.</li>
              <li>Electronic confirmations shall be treated as valid and enforceable agreements.</li>
            </ul>
          </section>

          {/* Section 18: Prohibited & Fraudulent Transactions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">18. Prohibited & Fraudulent Transactions</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop strictly prohibits:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Unauthorized payment attempts</li>
              <li>Identity theft</li>
              <li>Use of stolen financial instruments</li>
              <li>Intentional chargeback abuse</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4 mb-4">Such actions may result in:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Immediate account suspension</li>
              <li>Civil and/or criminal legal proceedings</li>
              <li>Reporting to law enforcement authorities</li>
            </ul>
          </section>

          {/* Section 19: Data Protection & Security Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">19. Data Protection & Security Compliance</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop implements reasonable security practices in compliance with:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Section 43A of the Information Technology Act, 2000</li>
              <li>SPDI Rules, 2011</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              We adopt appropriate technical and organizational safeguards to protect user information from unauthorized access, misuse, or disclosure.
            </p>
          </section>

          {/* Section 20: Force Majeure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">20. Force Majeure</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop shall not be liable for failure or delay in performance due to events beyond reasonable control, including but not limited to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Natural disasters</li>
              <li>Government restrictions</li>
              <li>Pandemic or epidemic situations</li>
              <li>Lockdowns</li>
              <li>Transportation disruptions</li>
              <li>Internet or server failures</li>
            </ul>
          </section>

          {/* Section 21: Severability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">21. Severability</h2>
            <p className="text-[#1A1110]/80">
              If any provision of these Terms & Conditions is found to be invalid or unenforceable under Indian law, the remaining provisions shall remain valid and enforceable.
            </p>
          </section>

          {/* Section 22: Waiver */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">22. Waiver</h2>
            <p className="text-[#1A1110]/80">
              Failure by The Cozy Loop to enforce any provision of these Terms shall not constitute a waiver of such provision or any other rights.
            </p>
          </section>

          {/* Section 23: Entire Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">23. Entire Agreement</h2>
            <p className="text-[#1A1110]/80">
              These Terms & Conditions, along with the Privacy Policy and Payment & Refund Policy, constitute the entire agreement between the user and The Cozy Loop with respect to the use of the website.
            </p>
          </section>

          {/* Section 24: Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">24. Dispute Resolution</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Before initiating formal legal proceedings, users agree to attempt resolution by contacting <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a>.
            </p>
            <p className="text-[#1A1110]/80 mb-4">If unresolved, disputes shall be:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Subject to Indian laws</li>
              <li>Under jurisdiction specified in Clause 11</li>
              <li>Eligible for mediation or arbitration as per the Arbitration and Conciliation Act, 1996 (if mutually agreed)</li>
            </ul>
          </section>

          {/* Section 25: Government Authority Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">25. Government Authority Compliance</h2>
            <p className="text-[#1A1110]/80">
              The Cozy Loop reserves the right to disclose user information if required by law, court order, or government authority under applicable Indian statutes.
            </p>
          </section>

          {/* Section 26: DPDP Act Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">26. Digital Personal Data Protection Act, 2023 (DPDP Act) Compliance</h2>
            <p className="text-[#1A1110]/80 mb-4">
              The Cozy Loop acts as a <strong>Data Fiduciary</strong> under the Digital Personal Data Protection Act, 2023.
            </p>
            <p className="text-[#1A1110]/80 mb-4">We process digital personal data:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>For lawful purposes only</li>
              <li>Based on valid consent or legitimate uses as permitted under law</li>
              <li>In a manner that is transparent, fair, and reasonable</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Personal data shall only be collected to the extent necessary for fulfilling specific, lawful business purposes.
            </p>
          </section>

          {/* Section 27: Consent Framework */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">27. Consent Framework</h2>
            <p className="text-[#1A1110]/80 mb-4">By using our website or providing personal data, you:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Provide free, specific, informed, and unambiguous consent</li>
              <li>Acknowledge that consent may be withdrawn at any time</li>
              <li>Understand that withdrawal of consent may impact order processing or service delivery</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Consent requests shall be presented in clear and plain language.
            </p>
          </section>

          {/* Section 28: Notice at the Time of Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">28. Notice at the Time of Data Collection</h2>
            <p className="text-[#1A1110]/80 mb-4">At or before collecting personal data, The Cozy Loop provides notice specifying:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>The nature of personal data being collected</li>
              <li>The purpose of processing</li>
              <li>The manner of exercising rights</li>
              <li>The grievance redressal mechanism</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Such notice may be provided via the Privacy Policy or during checkout/account registration.
            </p>
          </section>

          {/* Section 29: Lawful Uses of Personal Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">29. Lawful Uses of Personal Data</h2>
            <p className="text-[#1A1110]/80 mb-4">Personal data may be processed without explicit consent where permitted under the DPDP Act, including:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Compliance with legal obligations</li>
              <li>Enforcement of legal rights</li>
              <li>Prevention and detection of fraud</li>
              <li>Responding to court orders or government authorities</li>
              <li>Emergencies involving threat to life or health</li>
            </ul>
          </section>

          {/* Section 30: Data Principal Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">30. Data Principal Rights (Under DPDP Act 2023)</h2>
            <p className="text-[#1A1110]/80 mb-4">Users (Data Principals) have the right to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Access information about personal data processed</li>
              <li>Seek correction and updating of inaccurate data</li>
              <li>Request erasure of personal data (subject to legal retention requirements)</li>
              <li>Withdraw consent</li>
              <li>Nominate another individual to exercise rights in case of incapacity or death</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Requests may be submitted via <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a>. The Cozy Loop shall respond within timelines prescribed by applicable law.
            </p>
          </section>

          {/* Section 31: Data Minimization & Purpose Limitation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">31. Data Minimization & Purpose Limitation</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop collects only such personal data as is:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Necessary</li>
              <li>Relevant</li>
              <li>Proportionate</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">Data shall not be retained beyond the period required for:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Business operations</li>
              <li>Legal compliance</li>
              <li>Tax and accounting obligations</li>
              <li>Dispute resolution</li>
            </ul>
          </section>

          {/* Section 32: Data Security Safeguards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">32. Data Security Safeguards</h2>
            <p className="text-[#1A1110]/80 mb-4">In compliance with:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Section 43A of the IT Act, 2000</li>
              <li>SPDI Rules, 2011</li>
              <li>DPDP Act, 2023</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4 mb-4">The Cozy Loop implements reasonable security safeguards including but not limited to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Encryption protocols</li>
              <li>Access control mechanisms</li>
              <li>Secure hosting infrastructure</li>
              <li>Periodic system monitoring</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              However, no digital transmission method is 100% secure.
            </p>
          </section>

          {/* Section 33: Data Breach Notification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">33. Data Breach Notification</h2>
            <p className="text-[#1A1110]/80 mb-4">In the event of a personal data breach:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>The Cozy Loop shall notify the Data Protection Board of India (if applicable).</li>
              <li>Affected users shall be informed as required under law.</li>
              <li>Remedial measures shall be undertaken promptly.</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              This is in compliance with DPDP Act, 2023 and CERT-In Rules, 2022.
            </p>
          </section>

          {/* Section 34: Cross-Border Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">34. Cross-Border Data Transfers</h2>
            <p className="text-[#1A1110]/80 mb-4">Personal data may be processed or stored outside India, subject to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Compliance with restrictions notified by the Government of India</li>
              <li>Adequate security safeguards</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              The Cozy Loop shall ensure that cross-border transfers comply with applicable Indian data protection laws.
            </p>
          </section>

          {/* Section 35: Children's Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">35. Children's Data Protection</h2>
            <p className="text-[#1A1110]/80 mb-4">Where personal data of minors is processed:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Verifiable parental consent may be required</li>
              <li>No tracking, behavioral monitoring, or targeted advertising shall be conducted toward children, in compliance with DPDP Act, 2023</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              If minor data is collected inadvertently, it shall be deleted upon discovery.
            </p>
          </section>

          {/* Section 36: Significant Data Fiduciary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">36. Significant Data Fiduciary (If Applicable)</h2>
            <p className="text-[#1A1110]/80 mb-4">If designated as a Significant Data Fiduciary under DPDP Act, 2023, The Cozy Loop shall:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Appoint a Data Protection Officer</li>
              <li>Conduct periodic Data Protection Impact Assessments</li>
              <li>Undertake audits as required by law</li>
            </ul>
          </section>

          {/* Section 37: Retention of Electronic Records */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">37. Retention of Electronic Records</h2>
            <p className="text-[#1A1110]/80 mb-4">Electronic records, invoices, and transaction data shall be retained in accordance with:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>IT Act, 2000</li>
              <li>Income Tax Act, 1961</li>
              <li>GST Act, 2017</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Such records may be preserved for statutory periods even after account deletion.
            </p>
          </section>

          {/* Section 38: Automated Decision Making */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">38. Automated Decision Making</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop may use automated systems for:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Fraud detection</li>
              <li>Payment risk analysis</li>
              <li>Order verification</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Such systems operate in compliance with applicable data protection laws.
            </p>
          </section>

          {/* Section 39: User Obligations Under DPDP Act */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">39. User Obligations Under DPDP Act</h2>
            <p className="text-[#1A1110]/80 mb-4">Users agree to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Provide authentic information</li>
              <li>Not impersonate another individual</li>
              <li>Not provide false grievance complaints</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Misuse may attract liability under applicable Indian laws.
            </p>
          </section>

          {/* Section 40: Data Protection Board & Legal Remedies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">40. Data Protection Board & Legal Remedies</h2>
            <p className="text-[#1A1110]/80 mb-4">Users retain the right to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Approach the Data Protection Board of India (once operational)</li>
              <li>Seek remedies under the DPDP Act, 2023</li>
              <li>File complaints before appropriate consumer authorities</li>
            </ul>
          </section>

          {/* Section 41: Cyber Security & CERT-In Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">41. Cyber Security & CERT-In Compliance</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop adheres to:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>CERT-In reporting guidelines</li>
              <li>Cyber incident response protocols</li>
              <li>Log retention requirements as prescribed under Indian cyber laws</li>
            </ul>
          </section>

          {/* Section 42: Transparency & Accountability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">42. Transparency & Accountability</h2>
            <p className="text-[#1A1110]/80 mb-4">The Cozy Loop maintains internal policies to ensure:</p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Accountability for data processing</li>
              <li>Role-based access to personal data</li>
              <li>Regular compliance monitoring</li>
            </ul>
          </section>

          {/* Contact CTA */}
          <div className="bg-[#722F37] rounded-2xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Questions about our Terms?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions or concerns about these Terms & Conditions, please contact us.
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
