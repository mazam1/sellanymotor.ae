export const metadata = {
  title: "FAQ | SellanyMotor",
  description: "Frequently asked questions about SellanyMotor services.",
};

export default function FAQPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h1>
      <p className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
        Answers to common questions. This page is a placeholder and will be expanded with detailed guidance.
      </p>
      <ul className="mt-8 space-y-4">
        <li>
          <h3 className="text-lg font-semibold">How do I get a vehicle valuation?</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Visit the Services page and select Instant Valuation.</p>
        </li>
        <li>
          <h3 className="text-lg font-semibold">How can I contact support?</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Use the Contact page form to reach us.</p>
        </li>
      </ul>
    </section>
  );
}