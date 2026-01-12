import { Download, Phone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const RemoteSupport = () => {
  return (
    <section id="support" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Monitor className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-3">
                Client Remote Support
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Need immediate IT assistance? Download our remote support tool to allow our technicians to securely connect to your system and resolve issues quickly.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://download.teamviewer.com/download/TeamViewerQS.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg" className="w-full sm:w-auto gap-2">
                  <Download className="w-5 h-5" />
                  Download for Windows
                </Button>
              </a>
              <a
                href="https://download.teamviewer.com/download/TeamViewerQS.dmg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                  <Download className="w-5 h-5" />
                  Download for Mac
                </Button>
              </a>
            </div>
          </div>

          {/* Phone reminder */}
          <div className="mt-6 pt-6 border-t border-border text-center lg:text-left">
            <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <Phone className="w-4 h-4" />
              Or call us directly at{" "}
              <a href="tel:1300608099" className="font-semibold text-primary hover:underline">
                1300 60 80 99
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSupport;
