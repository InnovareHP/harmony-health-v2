import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertTriangle,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// Crisis Banner Component
function CrisisBanner() {
  return (
    <Alert className="rounded-none border-none bg-destructive/10 border-l-4 border-l-destructive">
      <AlertDescription className="text-destructive font-medium flex items-center justify-center w-full gap-2">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        If you or a loved one is in immediate crisis, dial 911 or call the{" "}
        <strong>988 Suicide & Crisis Lifeline</strong>
      </AlertDescription>
    </Alert>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative py-20 px-6 md:px-12">
      {/* Background image wrapper */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/hero-banner.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-[380px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Compassionate Psychiatric Care for
            <span className="text-primary"> Seniors</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Helping older adults and their families find safety, healing, and
            hope through evidence-based treatment and personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/referrals"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Make a Referral
            </a>
            <a className="border-2 border-gray-300 hover:border-primary hover:text-primary px-8 py-4 rounded-lg text-white font-semibold transition-all duration-200 group">
              Learn About Our Programs
              <ChevronRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Programs Preview Component
function ProgramsPreview() {
  const services = [
    {
      image: "/images/inpatient-care.jpg",
      title: "Inpatient Care",
      desc: "Crisis stabilization and comprehensive psychiatric care with 24-hour medical support for seniors in acute need.",
    },
    {
      image: "/images/outpatient-care.jpg",
      title: "Outpatient Programs",
      desc: "Structured PHP/IOP therapy and psychiatric monitoring during the day while maintaining independence at home.",
    },
    {
      image: "/images/family-support.jpg",
      title: "Family Support",
      desc: "Comprehensive family education, caregiver support, and collaborative discharge planning for optimal outcomes.",
    },
    {
      image: "/images/continuum-of-care.jpg",
      title: "Continuum of Care",
      desc: "Seamless step-down programs and community coordination to ensure long-term stability and recovery.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Programs & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services designed specifically for older
            adults and their unique needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ image, title, desc }) => (
            <div
              key={title}
              className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary/30"
            >
              <div className="bg-primary/10 w-full h-40 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

// About Care Section Component
function AboutCareSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Whole-Person, Family-Centered Care
            </h2>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              At Harmony Health, we combine expert medical care with compassion,
              dignity, and respect. Our interdisciplinary team partners with
              families to ensure that every patient has the best chance to heal,
              recover, and return to the highest quality of life possible.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group">
              Meet Our Care Team
              <ChevronRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl transform rotate-3"></div>
            <img
              src="/images/healthcare-team.png"
              alt="Healthcare team providing compassionate care to seniors"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Component
function WhyChooseUs() {
  const features = [
    "Specialized in geriatric psychiatry — not just general mental health",
    "Accredited and licensed to meet the highest standards of safety and quality",
    "Expert interdisciplinary team of physicians, nurses, and therapists trained in senior care",
    "Family involvement at every step of treatment",
    "Continuum of care to support patients and caregivers beyond hospitalization",
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Why Choose Harmony Health?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          We're dedicated to providing the highest quality mental health care
          specifically designed for older adults.
        </p>
        <div className="grid gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-primary/10 rounded-xl"
            >
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <p className="text-gray-700 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Provider Strip Component
function ProviderStrip() {
  return (
    <section className="bg-primary py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-primary-foreground mb-4">
          Healthcare Provider Partnerships
        </h3>
        <p className="mb-8 text-lg text-primary-foreground/80 leading-relaxed">
          We partner with hospitals, physicians, nursing facilities, and case
          managers to ensure safe, seamless transitions of care. Our admissions
          team is available 24/7.
        </p>
        <button className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
          Refer a Patient
        </button>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            We're here to help. Reach out to our team for more information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Harmony Health
                    </p>
                    <p className="text-gray-600">
                      7001 Bryant Irvin Rd Fort Worth, TX 76132
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">888-391-0229</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@harmonyhealth.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Phone or Email"
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <select className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>Reason for Inquiry</option>
                <option>Referral</option>
                <option>General Question</option>
                <option>Admissions</option>
                <option>Records</option>
              </select>
              <textarea
                placeholder="Message (optional)"
                rows={4}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                Get in Touch Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Resources Section Component
function ResourcesSection() {
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

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mental Health Resources
          </h2>
          <p className="text-xl text-gray-600">
            Additional support and information for patients and families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map(([title, info, url]) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gray-50 hover:bg-primary/5 rounded-xl transition-all duration-200 border border-gray-100 hover:border-primary/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 font-medium">{info}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <CrisisBanner />
      <HeroSection />
      <ProgramsPreview />
      <AboutCareSection />
      <WhyChooseUs />
      <ProviderStrip />
      <ContactSection />
      <ResourcesSection />
    </div>
  );
}
