"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Brochure = () => {
  const pdfUrl = "/file/HH Brochure.pdf"; // path inside /public

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Opal-and-Sage-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#708238]/20 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold text-[#556B2F]">
          Harmony Health Brochure
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          View or download our brochure to learn more about harmony health.
        </p>

        {/* PDF Preview */}
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200 h-[80vh]">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="Opal and Sage Care Services Brochure"
          />
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Button variant="outline" onClick={handleDownload}>
            <Download className="w-5 h-5" />
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
