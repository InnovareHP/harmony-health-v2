const resources = [
  {
    name: "National Suicide Prevention Lifeline",
    phone: "Dial 988",
    link: "https://988lifeline.org",
  },
  {
    name: "Veterans Crisis Line",
    phone: "1-800-273-8255 (Press 1)",
    link: "https://www.veteranscrisisline.net",
  },
  {
    name: "Domestic Violence Hotline",
    phone: "1-800-799-7233",
    link: "https://thehotline.org",
  },
  {
    name: "National Institute of Mental Health (NIMH)",
    link: "https://www.nimh.nih.gov",
  },
  {
    name: "SAMHSA – Substance Abuse & Mental Health Services",
    phone: "1-800-662-4357",
    link: "https://www.samhsa.gov",
  },
  {
    name: "NAMI – National Alliance on Mental Illness",
    phone: "1-800-950-NAMI (6264)",
    link: "https://www.nami.org",
  },
];

const Resources = () => {
  return (
    <div>
      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Resources</h1>
        <p className="text-gray-700 mb-8">
          We’ve compiled a list of trusted organizations and hotlines offering
          support for mental health, substance abuse, crisis intervention, and
          more. You are not alone — help is always available.
        </p>

        <ul className="space-y-6">
          {resources.map((resource) => (
            <li
              key={resource.name}
              className="border-l-4 border-green-600 pl-4"
            >
              <h2 className="text-lg font-semibold text-green-700">
                {resource.name}
              </h2>
              {resource.phone && (
                <p className="text-gray-800">
                  <span className="font-medium">Phone:</span> {resource.phone}
                </p>
              )}
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                {resource.link}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Resources;
