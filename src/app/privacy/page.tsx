import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | TruVixo™',
  description: 'TruVixo Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy is important to us.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicy() {
  const lastUpdated = 'January 2024'

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Privacy <span className="hollow-text-brand">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            At TruVixo, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1.1 Personal Information</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Register for an account or subscribe to our services</li>
                <li>Fill out contact forms or request information</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Contact us via email, phone, or other communication channels</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">1.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries, requests, and comments</li>
                <li>To send you marketing communications, newsletters, and promotional materials (with your consent)</li>
                <li>To process transactions and manage your account</li>
                <li>To analyze website usage and trends to improve user experience</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to collect and store information about your preferences and browsing behavior. You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Third-Party Links</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@truvixoo.com" className="text-[#5e2cb6] hover:underline">privacy@truvixoo.com</a></p>
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



