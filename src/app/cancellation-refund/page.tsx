import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | TruVixo™',
  description: 'TruVixo Cancellation and Refund Policy - Learn about our cancellation procedures, refund eligibility, and terms for services and subscriptions.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/cancellation-refund',
  },
}

export default function CancellationRefundPolicy() {
  const lastUpdated = 'January 2024'

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Cancellation and <span className="hollow-text-brand">Refund Policy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            At TruVixo, we strive to provide exceptional services and ensure customer satisfaction. This policy outlines our procedures for cancellation and refunds for our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Cancellation Policy</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1.1 Service Cancellation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You may cancel your service agreement with TruVixo at any time by providing written notice to our team. Cancellation requests should be sent to <a href="mailto:support@truvixoo.com" className="text-[#5e2cb6] hover:underline">support@truvixoo.com</a> or through your account dashboard.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">1.2 Cancellation Notice Period</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The notice period for cancellation varies by service type:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>One-time Projects:</strong> Cancellation must be requested before project completion. Work completed up to the cancellation date will be billed.</li>
                <li><strong>Recurring Services (SEO, PPC, SMM):</strong> 30 days written notice required. Services will continue until the end of the current billing cycle.</li>
                <li><strong>Monthly Subscriptions:</strong> Cancellation effective at the end of the current billing period.</li>
                <li><strong>Dedicated Teams/Hire Services:</strong> 30 days notice required. Ongoing work will be completed during the notice period.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">1.3 Immediate Cancellation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TruVixo reserves the right to immediately cancel services in cases of:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Non-payment or payment default</li>
                <li>Violation of terms of service</li>
                <li>Fraudulent activity or misrepresentation</li>
                <li>Breach of contract or agreement</li>
              </ul>
            </div>

            {/* Refund Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Refund Policy</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.1 Refund Eligibility</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Refunds are considered on a case-by-case basis and are subject to the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Refund requests must be submitted within 14 days of payment or service initiation</li>
                <li>Services must not have been substantially delivered or completed</li>
                <li>No refunds for completed projects or delivered services</li>
                <li>Refunds are not available for services that have been customized or personalized</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">2.2 Non-Refundable Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The following services and fees are non-refundable:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Completed projects or delivered work</li>
                <li>Setup fees and one-time charges</li>
                <li>Third-party costs and expenses already incurred</li>
                <li>Services that have been customized or personalized for your specific needs</li>
                <li>Consultation fees for completed sessions</li>
                <li>Services cancelled after the cancellation notice period</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">2.3 Partial Refunds</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In cases where services are partially completed, we may offer partial refunds based on:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Work completed up to the cancellation date</li>
                <li>Materials and resources already utilized</li>
                <li>Time and effort invested in the project</li>
                <li>Any third-party costs already incurred</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Partial refunds will be calculated on a pro-rata basis, minus any applicable fees or costs.
              </p>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Refund Process</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.1 Requesting a Refund</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Send a written refund request to <a href="mailto:support@truvixoo.com" className="text-[#5e2cb6] hover:underline">support@truvixoo.com</a></li>
                <li>Include your order number, invoice number, or service agreement reference</li>
                <li>Provide a detailed reason for the refund request</li>
                <li>Attach any relevant documentation or correspondence</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">3.2 Refund Review</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All refund requests will be reviewed within 5-7 business days. We will:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Review your service agreement and payment history</li>
                <li>Assess the work completed and services delivered</li>
                <li>Evaluate the circumstances of your request</li>
                <li>Contact you if additional information is needed</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">3.3 Refund Processing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If your refund is approved:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Refunds will be processed within 10-15 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Processing times may vary depending on your payment provider</li>
                <li>You will receive email confirmation once the refund is processed</li>
              </ul>
            </div>

            {/* Service-Specific Policies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Service-Specific Policies</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.1 Software Development Projects</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For custom software development projects:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Cancellation before project kickoff: Full refund minus any setup costs</li>
                <li>Cancellation during development: Refund for unused portion, minus work completed</li>
                <li>No refunds after project completion and delivery</li>
                <li>Source code and deliverables remain with TruVixo until full payment is received</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">4.2 Digital Marketing Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For ongoing marketing services (SEO, PPC, SMM):
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>No refunds for services already rendered in the current billing cycle</li>
                <li>Refunds only for prepaid future billing cycles</li>
                <li>Third-party advertising costs are non-refundable</li>
                <li>Account setup and onboarding fees are non-refundable</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">4.3 Consultation Services</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For consultation and advisory services:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>No refunds for completed consultation sessions</li>
                <li>Rescheduling is allowed with 24 hours notice</li>
                <li>Refunds only available if session is cancelled before it begins</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you are not satisfied with our refund decision, you may:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Request a review by our management team</li>
                <li>Provide additional documentation or evidence</li>
                <li>Request mediation or arbitration as outlined in your service agreement</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We are committed to resolving disputes fairly and amicably.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TruVixo reserves the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting on this page. We will notify existing clients of significant changes via email.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Contact Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For questions about cancellations or refunds, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:support@truvixoo.com" className="text-[#5e2cb6] hover:underline">support@truvixoo.com</a></p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:+916354326412" className="text-[#5e2cb6] hover:underline">+91 63543 26412</a></p>
                <p className="text-gray-700"><strong>Address:</strong> Global Services</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

