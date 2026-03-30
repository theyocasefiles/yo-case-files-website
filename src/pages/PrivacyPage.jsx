export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold text-[#f5efe4]">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-400">Last updated: 2026</p>

        <p className="text-gray-300">
          Welcome to The Yo Case Files ("we", "our", "us"). We respect your
          privacy and are committed to protecting your personal data.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          1. Information We Collect
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-300">
          <li>Name (if provided)</li>
          <li>Email address</li>
          <li>Usage data such as pages visited and device information</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-gray-300">
          <li>Provide and improve our services</li>
          <li>Manage waitlist updates and communications</li>
          <li>Respond to enquiries</li>
        </ul>

        <p className="text-gray-300">
          We do <strong>not</strong> sell your personal data.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          3. Cookies
        </h2>
        <p className="text-gray-300">
          We may use cookies to improve your experience. You can disable them in
          your browser settings.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          4. Third-Party Services
        </h2>
        <p className="text-gray-300">
          We may use trusted third-party services such as Formspree or Google
          Analytics.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          5. Data Security
        </h2>
        <p className="text-gray-300">
          We take reasonable steps to protect your data, but no method is
          completely secure.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          6. Your Rights
        </h2>
        <p className="text-gray-300">
          You may request access, correction, or deletion of your data.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-[#f5efe4]">
          7. Contact
        </h2>
        <p className="text-gray-300">Email: hello@theyocasefiles.com</p>
      </div>
    </div>
  );
}