import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "National College of Ireland",
      degree: "MA in Human Resource Management",
      dates: "2024 – 2025",
      grade: "",
      coursework: ["Dissertation: Workplace Flexibility and Employee Well-Being: A study of Hybrid Work models in the IT Sector."]
    },
    {
      institution: "Manipal University",
      degree: "MBA in Human Resource Management", 
      dates: "2023 – 2024",
      grade: "",
      coursework: ["Dissertation: A study on Recruitment and selection process at NLB Technology Services."]
    }
  ];

  const certifications = [
    {
      title: "LinkedIn: Talent Insights",
      issuer: "LinkedIn",
      date: "",
      description: "Certified in LinkedIn Talent Insights, demonstrating expertise in leveraging data-driven insights for talent acquisition and market intelligence."
    },
    {
      title: "LinkedIn: Talent Sourcing",
      issuer: "LinkedIn",
      date: "",
      description: "Certified in LinkedIn Talent Sourcing, skilled in advanced sourcing techniques and strategies for identifying top talent."
    },
    {
      title: "LinkedIn Recruiter-AI Powered Talent Acquisition",
      issuer: "LinkedIn",
      date: "",
      description: "Certified in LinkedIn Recruiter with AI-powered talent acquisition capabilities, enabling efficient and effective recruitment processes."
    }
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic background and professional certifications in human resource management and talent acquisition
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.dates}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.coursework.length > 0 && (
                    <CardContent>
                      <p className="font-semibold text-foreground mb-3">Dissertation:</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {edu.coursework[0]}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-foreground mb-2">
                      {cert.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-[hsl(var(--primary))] mb-2">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;