const resources = [
  [
    "National Suicide Prevention Lifeline",
    "Dial 988",
    "https://988lifeline.org",
  ],
  [
    "Veterans Crisis Line",
    "1-800-273-8255 (Press 1)",
    "https://www.veteranscrisisline.net",
  ],
  ["Domestic Violence Hotline", "1-800-799-7233", "https://thehotline.org"],
  [
    "National Institute of Mental Health",
    "Visit Website",
    "https://www.nimh.nih.gov",
  ],
  ["SAMHSA", "1-800-662-4357", "https://www.samhsa.gov"],
  ["NAMI", "1-800-950-NAMI (6264)", "https://www.nami.org"],
];

export default function ResourcesSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
      <ul className="space-y-3 max-w-2xl mx-auto text-center">
        {resources.map(([title, info, url]) => (
          <li key={title}>
            <strong>{title}:</strong>{" "}
            <a
              href={url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {info}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
