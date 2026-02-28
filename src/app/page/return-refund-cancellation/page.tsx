import { type Metadata } from "next";
import { Header } from "~/app/_components/landing/header";
import { Footer } from "~/app/_components/landing/footer";
import { RotateCcw, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Return, Refund & Cancellation Policy - The Cozy Loop",
  description: "Return, Refund & Cancellation Policy for The Cozy Loop - Handmade crochet products and gifts",
};

export default function ReturnRefundCancellationPage() {
  return (
    <div className="min-h-screen bg-[#F7EDE2]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#FFF8E7] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RotateCcw className="w-8 h-8 text-[#722F37]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1110] font-['Bricolage_Grotesque'] mb-4">
            Return, Refund & Cancellation Policy
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
              <p><strong>Website:</strong> <a href="https://the-cozy-loop.vercel.app/" className="text-rose-500 hover:underline">the-cozy-loop.vercel.app</a></p>
              <p><strong>Business Name:</strong> The Cozy Loop</p>
              <p><strong>Entity Type:</strong> Sole Proprietorship</p>
              <p><strong>Registered Address:</strong> Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
              <p><strong>Email:</strong> <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
            </div>
          </div>

          {/* Section 1: Policy Objective */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">1. Policy Objective</h2>
            <p className="text-[#1A1110]/80 mb-4">
              This Return, Refund & Cancellation Policy is framed in accordance with the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020.
            </p>
            <p className="text-[#1A1110]/80">
              The Cozy Loop is committed to transparent trade practices, lawful consumer grievance redressal, and fair resolution of disputes. By placing an order on our website, you agree to the terms set out below.
            </p>
          </section>

          {/* Section 2: Nature of Products – Handmade Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">2. Nature of Products – Handmade Disclosure</h2>
            <p className="text-[#1A1110]/80 mb-4">
              The Cozy Loop specializes in handmade crochet products.
            </p>
            <p className="text-[#1A1110]/80 mb-4">
              Due to the handcrafted nature of our products:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4">
              <li>Minor variations in size, stitching, or color shade may occur.</li>
              <li>Such variations are natural characteristics of handmade goods.</li>
              <li>These shall not be treated as manufacturing defects.</li>
            </ul>
            <p className="text-[#1A1110]/80 mt-4">
              Product images are for illustrative purposes and may slightly differ from the final product.
            </p>
          </section>

          {/* Section 3: Order Cancellation Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">3. Order Cancellation Policy</h2>
            
            <h3 className="text-xl font-semibold text-[#1A1110] mb-3">3.1 Cancellation by Customer</h3>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-6">
              <li>Orders may be cancelled only before dispatch.</li>
              <li>Cancellation requests must be submitted via email to <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a>.</li>
              <li>Once an order is dispatched, cancellation is not permitted.</li>
            </ul>
            <p className="text-[#1A1110]/80 mb-6">
              Approved cancellations shall be refunded within 5–10 business days to the original mode of payment.
            </p>

            <h3 className="text-xl font-semibold text-[#1A1110] mb-3">3.2 Cancellation by The Cozy Loop</h3>
            <p className="text-[#1A1110]/80 mb-4">
              We reserve the right to cancel orders in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Pricing errors</li>
              <li>Stock unavailability</li>
              <li>Suspected fraudulent activity</li>
              <li>Payment authorization failure</li>
              <li>Incomplete or incorrect customer information</li>
            </ul>
            <p className="text-[#1A1110]/80">
              In such cases, a full refund shall be issued.
            </p>
          </section>

          {/* Section 4: Return Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">4. Return Eligibility</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Returns will be accepted only under the following conditions:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Wrong item delivered</li>
              <li>Product received in damaged condition</li>
              <li>Manufacturing defect beyond handmade variation</li>
              <li>Missing items in order</li>
            </ul>
            <p className="text-[#1A1110]/80 mb-4">
              <strong>To qualify for return:</strong>
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Request must be raised within 48 hours of delivery.</li>
              <li>Clear photographs and unboxing video must be provided.</li>
              <li>Product must be unused, unwashed, and in original packaging.</li>
            </ul>
            <p className="text-[#1A1110]/80">
              Failure to comply may result in rejection of return request.
            </p>
          </section>

          {/* Section 5: Non-Returnable Items */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">5. Non-Returnable Items</h2>
            <p className="text-[#1A1110]/80 mb-4">
              The following are not eligible for return:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Customized or personalized crochet products</li>
              <li>Made-to-order items</li>
              <li>Products damaged due to misuse</li>
              <li>Products returned without original packaging</li>
              <li>Items showing signs of use or washing</li>
              <li>Change-of-mind purchases (unless explicitly permitted)</li>
            </ul>
            <p className="text-[#1A1110]/80">
              This restriction is consistent with reasonable limitations permitted under Indian consumer law.
            </p>
          </section>

          {/* Section 6: Return Approval Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">6. Return Approval Process</h2>
            <ol className="list-decimal list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Customer must email <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a> with:
                <ul className="list-disc list-inside text-[#1A1110]/80 space-y-1 ml-6 mt-2">
                  <li>Order number</li>
                  <li>Description of issue</li>
                  <li>Photo and video evidence</li>
                </ul>
              </li>
              <li>Our team will review within 48 hours.</li>
              <li>If approved, pickup or return instructions will be provided.</li>
            </ol>
            <p className="text-[#1A1110]/80">
              Unauthorized returns will not be accepted.
            </p>
          </section>

          {/* Section 7: Refund Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">7. Refund Processing</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Upon receipt and inspection of returned goods:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Refund will be processed within 7–10 business days.</li>
              <li>Refund will be credited to original payment method.</li>
              <li>In case of Cash on Delivery (COD), refund will be processed via bank transfer.</li>
            </ul>
            <p className="text-[#1A1110]/80 mb-4">
              Shipping charges are non-refundable unless the error was on our part.
            </p>
            <p className="text-[#1A1110]/80">
              Refund timelines may vary depending on banking and payment gateway processing times.
            </p>
          </section>

          {/* Section 8: Replacement Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">8. Replacement Policy</h2>
            <p className="text-[#1A1110]/80">
              Where applicable, we may offer replacement instead of refund, subject to product availability. If replacement is not feasible, a refund will be issued.
            </p>
          </section>

          {/* Section 9: Damaged in Transit Claims */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">9. Damaged in Transit Claims</h2>
            <p className="text-[#1A1110]/80 mb-4">
              If the outer packaging appears damaged or tampered:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Record an unboxing video immediately.</li>
              <li>Report within 48 hours of delivery.</li>
            </ul>
            <p className="text-[#1A1110]/80">
              Claims without evidence may not be entertained.
            </p>
          </section>

          {/* Section 10: Partial Refunds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">10. Partial Refunds</h2>
            <p className="text-[#1A1110]/80 mb-4">
              In certain situations, partial refunds may be granted where:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Product is returned in altered condition</li>
              <li>Minor damage not attributable to manufacturing defect</li>
              <li>Missing packaging components</li>
            </ul>
            <p className="text-[#1A1110]/80">
              Refund amount shall be determined at the sole discretion of The Cozy Loop.
            </p>
          </section>

          {/* Section 11: Refund Timeline Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">11. Refund Timeline Compliance</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Refunds shall comply with applicable RBI regulations and payment gateway policies.
            </p>
            <p className="text-[#1A1110]/80">
              The Cozy Loop shall not be liable for delays caused by:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mt-2">
              <li>Banks</li>
              <li>Payment gateways</li>
              <li>Technical failures</li>
              <li>Regulatory checks</li>
            </ul>
          </section>

          {/* Section 12: Fraud Prevention & Chargebacks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">12. Fraud Prevention & Chargebacks</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Initiating fraudulent return claims or chargebacks without contacting us first may result in:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Account suspension</li>
              <li>Refusal of future orders</li>
              <li>Reporting to payment gateway providers</li>
              <li>Legal action under applicable Indian laws</li>
            </ul>
            <p className="text-[#1A1110]/80">
              We encourage customers to contact us before escalating disputes.
            </p>
          </section>

          {/* Section 13: Excessive Returns */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">13. Excessive Returns</h2>
            <p className="text-[#1A1110]/80 mb-4">
              The Cozy Loop reserves the right to:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Monitor return patterns</li>
              <li>Refuse service to customers with excessive return history</li>
              <li>Suspend accounts suspected of policy abuse</li>
            </ul>
            <p className="text-[#1A1110]/80">
              This measure is taken to prevent misuse and ensure fair business operations.
            </p>
          </section>

          {/* Section 14: Force Majeure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">14. Force Majeure</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Refunds, returns, or replacements may be delayed due to:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Natural disasters</li>
              <li>Government restrictions</li>
              <li>Pandemic or lockdown</li>
              <li>Transportation disruptions</li>
              <li>Events beyond reasonable control</li>
            </ul>
            <p className="text-[#1A1110]/80">
              The Cozy Loop shall not be liable for such delays.
            </p>
          </section>

          {/* Section 15: Consumer Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">15. Consumer Rights</h2>
            <p className="text-[#1A1110]/80 mb-4">
              Nothing in this Policy limits the statutory rights of consumers under:
            </p>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Consumer Protection Act, 2019</li>
              <li>Indian Contract Act, 1872</li>
              <li>Applicable e-commerce regulations</li>
            </ul>
            <p className="text-[#1A1110]/80">
              Consumers retain all rights available under Indian law.
            </p>
          </section>

          {/* Section 16: Grievance Redressal */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1110] mb-4">16. Grievance Redressal</h2>
            <p className="text-[#1A1110]/80 mb-4">
              In compliance with Consumer Protection (E-Commerce) Rules, 2020:
            </p>
            <div className="bg-[#FFF8E7] rounded-xl p-4 mb-4">
              <h3 className="font-semibold text-[#1A1110] mb-2">Grievance Officer Details:</h3>
              <p className="text-[#1A1110]/80">Name: Nirmal Haldar</p>
              <p className="text-[#1A1110]/80">Email: <a href="mailto:help.thecozyloop@gmail.com" className="text-rose-500 hover:underline">help.thecozyloop@gmail.com</a></p>
              <p className="text-[#1A1110]/80">Address: Shubhasganj, Raiganj, Uttar Dinajpur, West Bengal, 733134</p>
            </div>
            <ul className="list-disc list-inside text-[#1A1110]/80 space-y-2 ml-4 mb-4">
              <li>Complaints will be acknowledged within 48 hours.</li>
              <li>Resolved within 30 days from receipt.</li>
            </ul>
            <p className="text-[#1A1110]/80">
              If unresolved, customers may approach the appropriate Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-[#722F37] rounded-2xl p-8 text-center mt-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Questions about our Return & Refund Policy?</h3>
            <p className="text-white/80 mb-6">
              If you have any questions or concerns about returns, refunds, or cancellations, please contact us.
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
