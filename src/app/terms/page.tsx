import { Metadata } from "next";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${businessInfo.name}. Read our terms and conditions for using our beauty services.`,
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Please read our terms carefully
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By accessing or using {businessInfo.name}'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              2. Services
            </h2>
            <p className="text-gray-600 mb-6">
              We provide professional beauty services including but not limited to makeup, hair styling, skincare, and nail services. All services are subject to availability and may vary based on client preferences and requirements.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              3. Appointments & Cancellations
            </h2>
            <p className="text-gray-600 mb-4">
              <strong>Booking:</strong> Appointments can be booked through our website, phone, or WhatsApp. A confirmation will be sent to the contact information provided.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Cancellation Policy:</strong> We require at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Rescheduling:</strong> Appointments may be rescheduled with at least 12 hours notice, subject to availability.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              4. Pricing & Payment
            </h2>
            <p className="text-gray-600 mb-4">
              All prices are listed in Indian Rupees (₹) and are subject to change without prior notice. Payment is due at the time of service unless other arrangements have been made.
            </p>
            <p className="text-gray-600 mb-6">
              For bridal packages and large bookings, a deposit may be required to secure the appointment.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              5. Client Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Providing accurate contact information</li>
              <li>Arriving on time for scheduled appointments</li>
              <li>Informing us of any allergies or sensitivities</li>
              <li>Following pre and post-service care instructions</li>
              <li>Treating our staff with respect</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              6. Liability
            </h2>
            <p className="text-gray-600 mb-4">
              While we take all reasonable precautions to ensure quality service, {businessInfo.name} shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Allergic reactions not disclosed prior to service</li>
              <li>Results that differ from client expectations</li>
              <li>Damage to personal property (we recommend removing valuables)</li>
              <li>Services not performed due to circumstances beyond our control</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including text, graphics, logos, and images, is the property of {businessInfo.name} and protected by copyright laws.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              8. Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              9. Modifications to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              10. Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {businessInfo.email}<br />
              <strong>Phone:</strong> {businessInfo.phone}<br />
              <strong>Address:</strong> {businessInfo.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
