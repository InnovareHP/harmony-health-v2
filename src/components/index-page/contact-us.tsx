import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-emerald-50 border-t border-emerald-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-emerald-900 mb-6">
              Contact Us
            </h2>

            <div className="space-y-4 text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-600 mt-1" />
                <p>
                  <span className="font-semibold text-emerald-900">Address:</span>{" "}
                  7617 Sandyridge St. Portage, MI 49024
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-yellow-600 mt-1" />
                <p>
                  <span className="font-semibold text-emerald-900">Phone:</span>{" "}
                  (269) 371-2901
                </p>
              </div>


              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-yellow-600 mt-1" />
                <p>
                  <span className="font-semibold text-emerald-900">Email:</span>{" "}
                  <a
                    href="mailto:info@riversresidence.com"
                    className="text-emerald-700 hover:text-yellow-600 transition-colors"
                  >
                    info@riversresidence.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.8859969721486!2d-85.62536492353223!3d42.19309867121888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88179c9235f4659f%3A0x5daebd9cb1f63c65!2s7617%20Sandyridge%20St%2C%20Portage%2C%20MI%2049024%2C%20USA!5e0!3m2!1sen!2sph!4v1737270000000!5m2!1sen!2sph"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
