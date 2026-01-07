import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | TruVixo™',
  description: 'TruVixo Terms and Conditions - Read our terms of service, user agreements, and legal policies governing the use of our website and services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsAndConditions() {
  const lastUpdated = 'January 2024'

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Terms and <span className="hollow-text-brand">Conditions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Please read these Terms and Conditions carefully before using the TruVixo website and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By accessing and using the TruVixo website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Use License */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use License</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Permission is granted to temporarily access the materials on TruVixo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on TruVixo's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by TruVixo at any time.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Services Description</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TruVixo provides AI-powered branding, marketing, and technology services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Custom software development</li>
                <li>Web and mobile application development</li>
                <li>AI and machine learning solutions</li>
                <li>Digital marketing services (SEO, PPC, SMM)</li>
                <li>Enterprise software solutions</li>
                <li>Consulting and advisory services</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
              </p>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Accounts</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The website and its original content, features, and functionality are owned by TruVixo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You may not use our trademarks, logos, or other proprietary information without our prior written consent.
              </p>
            </div>

            {/* User Content */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. User Content</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, or other material. You are responsible for the content that you post on or through the service.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By posting content, you grant TruVixo a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content for the purpose of providing and promoting our services.
              </p>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You agree not to use the service:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Payment Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All fees for services are as specified in your service agreement or proposal. Payment terms will be outlined in your specific contract. We reserve the right to change our pricing at any time, but changes will not affect existing contracts.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Late payments may result in suspension or termination of services. All fees are non-refundable unless otherwise specified in your agreement.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In no event shall TruVixo, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Disclaimer</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, TruVixo excludes all representations, warranties, conditions, and terms relating to our website and the use of this website.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Indemnification</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You agree to defend, indemnify, and hold harmless TruVixo and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Termination</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Governing Law</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which TruVixo operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Changes to Terms</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">15. Contact Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:legal@truvixoo.com" className="text-[#5e2cb6] hover:underline">legal@truvixoo.com</a></p>
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

