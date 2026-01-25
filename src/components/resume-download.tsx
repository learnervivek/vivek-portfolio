"use client";

import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeDownloadProps {
  resumeUrl: string;
  name: string;
}

export function ResumeDownload({ resumeUrl, name }: ResumeDownloadProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = `${name.replace(/\s+/g, "-")}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-lg border border-dashed border-muted-foreground/30 bg-gradient-to-br from-background via-background to-muted/10 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20">
            <FileText className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold">Download My Resume</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Get a comprehensive look at my skills, experience, and projects. Ready to see what I can bring to your team?
          </p>
        </div>

        <Button
          onClick={handleDownload}
          className="gap-2 group/btn mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
          size="lg"
        >
          <Download className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
          Download Resume
        </Button>

        <p className="text-xs text-muted-foreground/60">
          PDF • Last updated: January 2025
        </p>
      </div>
    </div>
  );
}
