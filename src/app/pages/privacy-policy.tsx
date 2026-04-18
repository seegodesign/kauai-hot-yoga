import { motion } from "motion/react";

interface PrivacyPolicyPageProps {
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessWebsite: string;
}

export function PrivacyPolicyPage({ businessName, businessEmail, businessPhone, businessWebsite }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: Jan 1st, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p className="font-semibold uppercase tracking-wide text-gray-900">Important Notice Regarding Text Messaging Data</p>
            <p>
              {businessName} ("we," "us," or "our") DOES NOT share customer opt-in information, including phone
              numbers and consent records, with any affiliates or third parties for marketing, promotional, or any
              other purposes unrelated to providing our direct services. All text messaging originator opt-in data is
              kept strictly confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <p className="mt-3 font-semibold text-gray-900">Personal Information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Name, email address, phone number, and physical address.</li>
              <li>Payment information when you make a purchase or request a quote.</li>
              <li>Opt-in records and timestamps for all communication channels, including SMS and email.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Non-Personal Information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>IP address, browser type, and device information.</li>
              <li>Website usage patterns and analytics.</li>
              <li>Cookies and similar technologies.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Customer Communication:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Records of inquiries and service requests.</li>
              <li>Appointment details and preferences.</li>
              <li>Service history and feedback.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use collected data for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Providing and improving our services.</li>
              <li>Processing transactions and payments.</li>
              <li>Communicating with you about your inquiries, appointments, and service-related updates.</li>
              <li>Enhancing website functionality and user experience.</li>
              <li>Ensuring security and fraud prevention.</li>
              <li>Maintaining records of your communication preferences and consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. SMS Messaging & Compliance</h2>
            <p className="font-semibold text-gray-900">Text Message Program Terms &amp; Conditions</p>
            <p>
              By providing your phone number through our website forms, booking pages, or other communication channels, you expressly consent to receive SMS messages from Seego Design LLC DBA Seego AI.
            </p>
            <p className="mt-3 font-semibold text-gray-900">Opt-In &amp; Consent:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You will only receive messages if you have explicitly opted in.</li>
              <li>We maintain timestamped records of all opt-in actions.</li>
              <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Opt-Out Instructions:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You can cancel SMS notifications at any time by replying "STOP".</li>
              <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in.</li>
              <li>All opt-out requests are processed immediately.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Message Frequency &amp; Content:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Message frequency varies based on your interactions with our business.</li>
              <li>Messages will be directly related to the services you have requested.</li>
              <li>We do not send promotional content without specific consent.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Help &amp; Support:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Reply "HELP" for assistance or contact us at <a href={`mailto:${businessEmail}`} className="text-green-600 hover:underline">{businessEmail}</a>.
              </li>
              <li>Customer support is available during regular business hours.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Carrier Information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Standard message and data rates may apply.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">SMS Data Protection Statement</p>
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or promotional
              purposes. Information sharing to subcontractors in support services, such as customer service, is
              permitted. All other use case categories exclude text messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>
            <p className="mt-3">
              We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing &amp; Disclosure</h2>
            <p>We do not sell, rent, or trade personal information. We may share information with:</p>
            <p className="mt-3 font-semibold text-gray-900">Service Providers:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Third-party vendors who assist in our operations, such as payment processing and appointment scheduling.</li>
              <li>SMS aggregators and providers solely for the purpose of delivering messages you have consented to receive.</li>
              <li>All service providers are contractually obligated to maintain confidentiality and security.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Legal Compliance:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>If required by law, legal process, or to protect our rights.</li>
              <li>In response to valid law enforcement requests or court orders.</li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">Business Transfers:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>In case of mergers, acquisitions, or sale of assets.</li>
              <li>In such cases, your data remains protected under the terms of this policy.</li>
            </ul>
            <p className="mt-3">
              All the above categories exclude text messaging originator opt-in data and consent; this information will
              not be shared with any third parties, excluding aggregators and providers of text message services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
            <p>We implement and maintain reasonable security measures to protect your personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Encryption of sensitive data in transit and at rest.</li>
              <li>Secure access controls and authentication mechanisms.</li>
              <li>Regular security assessments and updates.</li>
              <li>Employee training on data protection.</li>
              <li>Breach notification protocols in accordance with applicable laws.</li>
              <li>Secure backup systems and disaster recovery procedures.</li>
            </ul>
            <p className="mt-3">
              Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure.
              We strive to use commercially acceptable means to protect your personal information but cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Cookies &amp; Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Analyze site traffic and user behavior.</li>
              <li>Remember your preferences.</li>
              <li>Improve website functionality and user experience.</li>
              <li>Measure the effectiveness of our services.</li>
            </ul>
            <p className="mt-3">
              You may control cookies through your browser settings. Disabling cookies may limit your ability to use
              certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights &amp; Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of marketing emails by clicking "unsubscribe" in our emails.</li>
              <li>Opt out of SMS messages by replying "STOP".</li>
              <li>Request information on how we process your data.</li>
              <li>Withdraw consent at any time for future communications.</li>
              <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the information in Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy
              practices and encourage you to review their policies. This privacy policy applies only to information
              collected by {businessName}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this policy periodically. The latest version will always be available on our website with
              the effective date. For significant changes, we will notify you by email or through a notice on our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
            <address className="mt-3 not-italic">
              <strong>{businessName}</strong>
              <br />
              Phone: <a href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`} className="text-green-600 hover:underline">{businessPhone}</a>
              <br />
              Email: <a href={`mailto:${businessEmail}`} className="text-green-600 hover:underline">{businessEmail}</a>
              <br />
              Website: <a href={businessWebsite} className="text-green-600 hover:underline">{businessWebsite}</a>
            </address>
            <p className="mt-3">By using our website and services, you consent to this Privacy Policy.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
