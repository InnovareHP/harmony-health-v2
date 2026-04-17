import { Download, FileSpreadsheet, FileText } from "lucide-react";

const PriceTransparency = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <header>
        <p className="text-sm uppercase tracking-wide text-primary font-semibold">
          Hospital Price Transparency
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2">
          Harmony Health Fort Worth
        </h1>
        <p className="text-gray-700 mt-3 leading-relaxed">
          7001 Bryant Irvin Rd, Fort Worth, TX 76132
          <br />
          Phone:{" "}
          <a
            href="tel:+18175293170"
            className="text-primary hover:underline"
          >
            817-529-3170
          </a>
          <br />
          Website:{" "}
          <a
            href="https://www.harmonyfortworth.com"
            className="text-primary hover:underline"
          >
            www.harmonyfortworth.com
          </a>
        </p>
      </header>

      <div className="space-y-5 text-gray-800 leading-relaxed">
        <p>
          Harmony Health Fort Worth is committed to complying with federal
          hospital price transparency requirements and to help patients
          understand the potential costs of their care. This document describes
          our standard charges, shoppable services, and related policies.
        </p>

        <p>
          In accordance with CMS regulations, Harmony Health Fort Worth provides
          a file of standard charges for all items and services. The file
          includes gross charges, discounted cash prices, payer-specific
          negotiated charges, and de-identified minimum and maximum negotiated
          charges.
        </p>

        <p>
          Harmony Health Fort Worth provides a consumer-friendly list of
          shoppable services that can be scheduled in advance. For each service,
          we provide a description, relevant codes, gross charge, discounted
          cash price, payer-specific negotiated charges (if applicable), and
          de-identified minimum and maximum negotiated charges.
        </p>

        <p className="italic text-gray-600">
          Note: The amounts shown are estimates of hospital charges and do not
          represent your actual out-of-pocket cost.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <a
          href="/file/994229140_harmonyhealthfortworth_machine_readable_file.xlsx"
          download
          className="group flex items-start gap-4 p-5 rounded-xl border border-gray-300 bg-white hover:border-primary hover:shadow-md transition"
        >
          <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <FileText size={22} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-primary group-hover:underline">
              Machine Readable File
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Machine-readable file of standard charges for all items and services (XLSX).
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-primary mt-2">
              <Download size={14} /> Download
            </span>
          </div>
        </a>

        <a
          href="/file/harmony-health-fort-worth-shoppable-services.xlsx"
          download
          className="group flex items-start gap-4 p-5 rounded-xl border border-gray-300 bg-white hover:border-primary hover:shadow-md transition"
        >
          <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <FileSpreadsheet size={22} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-primary group-hover:underline">
              Shoppable Services
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Consumer-friendly list of services that can be scheduled in
              advance (XLSX).
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-primary mt-2">
              <Download size={14} /> Download
            </span>
          </div>
        </a>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-primary">
          Personalized Cost Estimates
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Patients may request a personalized cost estimate. Insured patients
          should contact their health plan for information about deductibles,
          copayments, and coinsurance. Uninsured or self-pay patients may be
          eligible for discounted cash prices or financial assistance.
        </p>
        <p className="text-gray-800">
          For estimates, contact:{" "}
          <a
            href="tel:+18175293170"
            className="text-primary hover:underline"
          >
            817-529-3170
          </a>{" "}
          or{" "}
          <a
            href="mailto:tmoore@mwbehavioralmgmt.com"
            className="text-primary hover:underline"
          >
            tmoore@mwbehavioralmgmt.com
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-primary">
          Financial Assistance and Billing
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Harmony Health Fort Worth may offer financial assistance or payment
          arrangements for eligible patients.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-primary">
          Patient Rights and Privacy
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Patients have rights related to respectful care, participation in
          treatment decisions, access to information, privacy, and complaint
          resolution.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-primary">
          Contact Information
        </h2>
        <p className="text-gray-800 leading-relaxed">
          For questions about this document, standard charges, or shoppable
          services, contact:
        </p>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-gray-800">
          <p className="font-semibold text-primary">
            Harmony Health Fort Worth – Price Transparency Inquiries
          </p>
          <p>7001 Bryant Irvin Rd, Fort Worth, TX 76132</p>
          <p>
            Phone:{" "}
            <a
              href="tel:+18175293170"
              className="text-primary hover:underline"
            >
              817-529-3170
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:tmoore@mwbehavioralmgmt.com"
              className="text-primary hover:underline"
            >
              tmoore@mwbehavioralmgmt.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.harmonyfortworth.com"
              className="text-primary hover:underline"
            >
              www.harmonyfortworth.com
            </a>
          </p>
          <p>Hours: 9:00am – 5:00pm</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-primary">
          Consumer Guide
        </h2>
        <p className="text-gray-800 leading-relaxed">
          The Healthcare Financial Management Association has published a
          booklet,{" "}
          <em>“Understanding Healthcare Prices: A Consumer Guide,”</em> which
          can help you better understand where to get answers to your questions
          about healthcare prices, how to compare prices among providers, and
          how to manage your out-of-pocket costs.{" "}
          <a
            href="https://www.hfma.org/consumer-guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View the guidebook online ›
          </a>
        </p>
      </section>
    </section>
  );
};

export default PriceTransparency;
