import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "HR & Recruitment Executive",
      company: "Stack Solution Group",
      location: "Dublin, Ireland",
      dates: "Mar 2024 – Dec 2024",
      responsibilities: [
        "Achieved a 20% reduction in time-to-hire within a high-volume recruitment environment by proactively managing full-cycle hiring across multiple concurrent requisitions and delivering well-structured talent pipelines aligned with business priorities.",
        "Enhanced hiring efficiency and quality at scale by managing high-volume recruitment workflows, partnering closely with hiring managers, and delivering clearly scoped roles, structured interview processes, and data-driven hiring recommendations.",
        "Maintained 90%+ positive candidate feedback during high-volume hiring cycles by managing end-to-end candidate journeys and delivering consistent communication, structured screening, interview coordination, and onboarding support.",
        "Ensured 100% compliance and operational accuracy across high-volume recruitment operations by managing ATS records and delivering GDPR-compliant, ethical recruitment practices throughout the full recruitment lifecycle."
      ]
    },
    {
      title: "Senior Recruitment Consultant",
      company: "NLB Technology Services",
      location: "India",
      dates: "Oct 2022 – Nov 2023",
      responsibilities: [
        "Achieved a 25% faster hiring turnaround by delivering consistent recruitment outcomes, while managing end-to-end hiring processes across high-volume & niche requirements and maintaining quality, speed, and alignment with business priorities.",
        "Improved hiring efficiency and pipeline quality by delivering well-qualified candidate shortlists and managing proactive sourcing, interview coordination, and hiring timelines to support smooth and timely recruitment delivery every time.",
        "Strengthened hiring decisions and stakeholder confidence by delivering market insights, talent availability analysis, and hiring recommendations, while managing consultative partnerships and alignment across interview and decision-making stages.",
        "Enhanced recruitment performance and candidate experience by delivering clear, timely communication and offer coordination, while managing ATS updates, recruitment KPIs, reporting accuracy and end-to-end process tracking."
      ]
    },
    {
      title: "Talent Acquisition Specialist",
      company: "Manpower Group",
      location: "India",
      dates: "Feb 2022 – Sep 2022",
      responsibilities: [
        "Enabled timely fulfillment of high-volume hiring targets by delivering end-to-end recruitment support and managing hiring workflows across fast-paced, multi-role requirements while ensuring consistency, accuracy and adherence to hiring timelines.",
        "Improved stakeholder responsiveness and hiring turnaround by delivering effective coordination with clients and internal teams, while managing interview scheduling, candidate communications, and recruitment timelines.",
        "Enhanced candidate quality and selection accuracy by delivering structured screening and interview processes, while managing alignment between role requirements, candidate capability, and hiring manager expectations.",
        "Ensured strong compliance, data accuracy, and employer branding by delivering well-maintained ATS records in line with GDPR and audit standards, while supporting recruitment events and candidate engagement initiatives."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional experience in talent acquisition, recruitment, and building high-performing teams
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <h4 className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <Badge variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                          {exp.dates}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;