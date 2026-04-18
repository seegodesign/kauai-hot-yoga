import { motion } from "motion/react";

interface TermsOfServicePageProps {
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessWebsite: string;
}

export function TermsOfServicePage({ businessName, businessEmail, businessPhone, businessWebsite }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: Jan 1st, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">SMS Messaging Terms &amp; Compliance</h2>
            <ol className="list-decimal pl-6 mt-2 space-y-4">
              <li>
                <strong>Program Description:</strong> This messaging program sends appointment confirmation and
                reminder messages to customers who have booked an appointment with {businessName} through our website
                at <a href={businessWebsite} className="text-green-600 hover:underline">{businessWebsite}</a>, or via our
                scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via
                web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations,
                appointment reminders, rescheduling updates, and customer support communications.
              </li>
              <li>
                <strong>Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text
                "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your
                unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from
                us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
              </li>
              <li>
                <strong>Support Information:</strong> If you experience issues with the messaging program, reply with
                the keyword "HELP" for more assistance, or reach out directly to{" "}
                <a href={`mailto:${businessEmail}`} className="text-green-600 hover:underline">{businessEmail}</a> or
                call <a href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`} className="text-green-600 hover:underline">{businessPhone}</a> during
                business hours.
              </li>
              <li>
                <strong>Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.
              </li>
              <li>
                <strong>Message &amp; Data Rates:</strong> Message and data rates may apply for messages sent to you
                from us and to us from you. Message frequency varies based on your service usage and appointment
                schedule. For questions about your text plan or data plan, contact your wireless provider.
              </li>
              <li>
                <strong>Supported Carriers:</strong> Our SMS program works with all major U.S. wireless carriers,
                including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.
              </li>
              <li>
                <strong>Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.
              </li>
              <li>
                <strong>Privacy Policy:</strong> For privacy-related inquiries, please refer to our{" "}
                <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>.
              </li>
            </ol>
            <p className="mt-4">
              We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act
              (TCPA) and CTIA guidelines, regarding the use of SMS communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">General Terms</h2>
            <p>
              This website (the "Site") is owned and operated by {businessName} ("COMPANY," "we" or "us"). By using
              the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these
              Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific
              sections of the Site or to products and services available through the Site or from {businessName}.
            </p>
            <p className="mt-3">
              Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your
              agreement to be bound by these Terms of Service.
            </p>
            <p className="mt-3">
              We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site
              from time to time, in which case we will post the revised Terms of Service on this website. By
              continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property Rights</h2>
            <p className="font-semibold text-gray-900">Our Limited License to You</p>
            <p className="mt-2">
              This Site and all the materials available on the Site are the property of {businessName} and/or our
              affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws.
              The Site is provided solely for your personal non-commercial use.
            </p>
            <p className="mt-3">
              You may not use the Site or the materials available on the Site in a manner that constitutes an
              infringement of our rights or that has not been authorized by us.
            </p>
            <p className="mt-3">
              Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit,
              translate, sell, create derivative works, exploit, or distribute in any manner or medium any material
              from the Site. However, you may download and/or print one copy of individual pages for your personal,
              non-commercial use, provided that you keep intact all copyright and other proprietary notices.
            </p>
            <p className="mt-4 font-semibold text-gray-900">Your License to Us</p>
            <p className="mt-2">
              By posting or submitting any material (including comments, blog entries, social media posts, photos, and
              videos) to us via the Site, internet groups, or other digital venues, you represent that you own the
              material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable,
              non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from,
              distribute, and publicly perform or display such material.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimers</h2>
            <p>
              Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties.
              Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the
              information, products, or services offered on or through the sites.
            </p>
            <p className="mt-3">
              The information, products, and services offered on or through the Site are provided "as is" and without
              warranties of any kind, either express or implied. To the fullest extent permissible pursuant to
              applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness
              for a particular purpose.
            </p>
            <p className="mt-3">
              You agree at all times to indemnify and hold harmless {businessName}, its affiliates, and their
              respective officers, directors, agents, and employees from any claims, causes of action, damages,
              liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty,
              or representation under these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Online Commerce</h2>
            <p>
              Certain sections of the Site may allow you to purchase products and services from third-party vendors.
              We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these
              products and services. If you make a purchase from a third party linked through the Site, the
              information obtained during your visit, including payment information, may be collected by both the
              merchant and us.
            </p>
            <p className="mt-3">
              Your participation in any dealings with third-party vendors is solely between you and the third party.
              {" "}{businessName} shall not be responsible for any loss or damage incurred as a result of such dealings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Registration &amp; Passwords</h2>
            <p>
              To access certain features of the Site, you may be required to register and create an account. You agree
              to provide accurate, current, and complete information during the registration process. You are
              responsible for maintaining the confidentiality of your login credentials and for all activities
              conducted under your account.
            </p>
            <p className="mt-3">
              If you suspect unauthorized use of your account, notify us immediately at{" "}
              <a href={`mailto:${businessEmail}`} className="text-green-600 hover:underline">{businessEmail}</a>. We
              are not liable for any loss or damage arising from your failure to comply with this obligation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Site, without notice, if we determine
              that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or
              unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Hawaii. Any dispute arising under these Terms shall be resolved exclusively
              through binding arbitration in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms of Service</h2>
            <p>
              We may update these Terms of Service from time to time. The latest version will always be available on
              our website with the effective date.
            </p>
            <p className="mt-3">For any questions regarding these Terms of Service, please contact us at:</p>
            <address className="mt-3 not-italic">
              <strong>{businessName}</strong>
              <br />
              Phone: <a href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`} className="text-green-600 hover:underline">{businessPhone}</a>
              <br />
              Email: <a href={`mailto:${businessEmail}`} className="text-green-600 hover:underline">{businessEmail}</a>
              <br />
              Website: <a href={businessWebsite} className="text-green-600 hover:underline">seegoai.net</a>
            </address>
            <p className="mt-3">By using our website and services, you consent to these Terms of Service.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
