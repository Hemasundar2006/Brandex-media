export const metadata = {
  title: "Careers | BrandEx Media",
  description: "Join our team of creative professionals.",
};

export default function CareersPage() {
  const jobs = [
    { title: "Senior UI/UX Designer", type: "Full-Time", location: "Remote" },
    { title: "Social Media Strategist", type: "Full-Time", location: "New York, NY" },
    { title: "Frontend Developer (React/Next.js)", type: "Contract", location: "Remote" },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-20 min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Join the <span className="text-brand-accent">Team.</span>
        </h1>
        <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
          We are always looking for passionate, driven creatives to join our agency.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {jobs.map((job, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:border-brand-accent/50 transition-colors cursor-pointer">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{job.title}</h3>
              <div className="flex gap-4 text-foreground-muted text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">{job.type}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">{job.location}</span>
              </div>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white hover:text-black transition-colors font-medium">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
