type Props = {
  children: React.ReactNode;
};

export default function StayInfoSection({ children }: Props) {
  const items = [
    {
      title: "Inpatient Program",
      href: "/treatment-programs/inpatient-program/",
    },
    {
      title: "Intensive Outpatient",
      href: "/treatment-programs/outpatient-program/",
    },
    {
      title: "Interdisciplinary Team",
      href: "/treatment-programs/interdisciplinary-team/",
    },
  ];

  const nextSteps = [
    { title: "Request an appointment", href: "/book/" },
    { title: "Make a referral", href: "/referrals/" },
    {
      title: "Frequently asked questions",
      href: "/patient-visitor-guide/faqs/",
    },
    { title: "All treatment programs", href: "/treatment-programs/" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
      {/* Left content area */}
      <div>
        {children}

        <nav aria-label="Next steps" className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Next steps
          </h2>
          <ul className="space-y-2">
            {nextSteps.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-primary font-medium hover:underline hover:text-green-800 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right sidebar */}
      <aside className="w-full border-l border-gray-200 pl-6 hidden lg:block">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.title} className="border-b pb-2">
              <a
                href={item.href}
                className="text-primary font-medium hover:underline hover:text-green-800 transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
