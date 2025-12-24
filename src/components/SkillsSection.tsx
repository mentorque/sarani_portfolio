import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Talent Acquisition",
      skills: ["Full-Cycle Hiring", "Technical Recruitment", "High-Volume Hiring", "Niche Roles", "EMEA Hiring"]
    },
    {
      title: "Technologies & Sourcing", 
      skills: ["Boolean Search", "X-Ray Search", "GitHub Sourcing", "Talent Mapping", "Competitive Intelligence", "AI"]
    },
    {
      title: "Stakeholder & Partnership",
      skills: ["Workforce Planning", "Interview Design", "Hiring Manager Advisory", "Data-Driven Hiring"]
    },
    {
      title: "Recruitment Ops & Compliance",
      skills: ["Recruitment Analytics", "ATS Management", "Time-to-Hire Optimisation", "Candidate Experience", "DEI Hiring", "GDPR Compliance"]
    },
    {
      title: "ATS Platforms",
      skills: ["Workday", "Greenhouse", "SAP SuccessFactors", "LinkedIn Recruiter"]
    },
    {
      title: "Professional Skills",
      skills: ["Candidate Sourcing", "Interview Coordination", "Offer Negotiation", "Market Intelligence", "Stakeholder Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skills in talent acquisition, recruitment, and building high-performing teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-[hsl(var(--skill-bg))] border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;