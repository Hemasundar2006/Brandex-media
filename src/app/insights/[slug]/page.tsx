import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  intro: string;
  paragraphs: string[];
  keyTakeaways: string[];
}

const articlesData: Record<string, ArticleData> = {
  "high-end-visuals-roi-2026": {
    title: "Why High-End Visuals Are the Highest ROI Investment in 2026",
    category: "Branding",
    date: "Sep 2026",
    readTime: "5 min read",
    author: "Pradeep Lenka",
    authorRole: "Founder & Director, BrandEx Media",
    image: "/Screenshot 2026-07-15 223705.png",
    intro:
      "In an era where generative tools can output thousands of generic graphic templates in seconds, the market value of average creative has plummeted to zero. Today, true commercial leverage lies in intentional, cinema-grade human craft.",
    paragraphs: [
      "Consumers evaluate a brand's authority, trustworthiness, and price tolerance within 50 milliseconds of landing on a digital asset. When a prospective client encounters lighting that looks deliberate, framing that feels cinematic, and color science that commands attention, their psychological perception shifts instantly from 'commodity' to 'market leader'.",
      "High-end visual production does not merely enhance aesthetics; it directly reduces customer acquisition costs. Higher-quality visual hooks generate superior watch time on algorithmic platforms like Instagram and YouTube, triggering exponential organic distribution without proportional increases in ad spend.",
      "Furthermore, premium visuals protect price integrity. Brands that invest in custom model shoots, bespoke editorial sets, and cinematic commercial footage can comfortably command 2x to 5x higher price points than competitors relying on stock photography or makeshift content.",
    ],
    keyTakeaways: [
      "Average creative is invisible; only high-contrast cinematic craft commands modern attention.",
      "Superior video production triggers algorithmic amplification, cutting paid acquisition costs.",
      "High-end visuals establish instant prestige, directly enabling higher product pricing power.",
    ],
  },
  "short-form-video-mastery": {
    title: "Short-Form Video Mastery: Building Retention in Under 30 Seconds",
    category: "Social Media",
    date: "Aug 2026",
    readTime: "4 min read",
    author: "Mahesh Arjilli",
    authorRole: "Founder & Director, BrandEx Media",
    image: "/Screenshot 2026-07-15 223720.png",
    intro:
      "The algorithms of 2026 are ruthless: if your vertical video fails to grip viewers within the first 1.5 seconds, the platform ceases distribution. Here is how BrandEx engineers vertical content that dominates retention curves.",
    paragraphs: [
      "The opening frame of a short-form video must introduce immediate visual curiosity or psychological conflict. Instead of traditional corporate logo stings or slow fade-ins, modern reels must start in media res—with unexpected movement, contrasting sound effects, or provocative on-screen typography.",
      "Pacing is the next critical variable. A common mistake is maintaining a uniform rhythm. The most viral reels utilize dynamic tempo shifts: fast-cut montage sequences interspersed with deliberate half-second pauses that allow key narrative points to settle.",
      "Finally, the outro must seamlessly loop back into the opening hook. When viewers unconsciously replay a reel two or three times, the platform's algorithm registers a 200%+ completion rate, catapulting the post onto millions of new Explore and For You feeds.",
    ],
    keyTakeaways: [
      "The first 1.5 seconds determine 90% of a reel's eventual organic reach.",
      "Dynamic pacing and rhythm shifts prevent drop-off and maintain high average watch time.",
      "Engineered seamless loops multiply completion rates and trigger platform virality.",
    ],
  },
  "single-creative-partner-advantage": {
    title: "The Single Creative Partner Advantage: Why Fragmented Agencies Fail",
    category: "Marketing",
    date: "Aug 2026",
    readTime: "6 min read",
    author: "Pradeep Lenka",
    authorRole: "Founder & Director, BrandEx Media",
    image: "/IMG_2201.JPG.jpeg",
    intro:
      "Most growing brands suffer from vendor fragmentation: one freelancer for video, a separate agency for ads, another studio for branding, and an offshore team for web development. The result is chronic miscommunication, dilution of brand voice, and wasted budget.",
    paragraphs: [
      "When creative production is divorced from performance marketing, both sides lose. Filmmakers produce beautiful videos that fail to convert because they ignore buyer hooks; while performance media buyers run generic ads that convert poorly because they lack compelling visual assets.",
      "At BrandEx Media, we built an integrated model: Strategy → Creation → Digital → Amplification. Our filmmakers work hand-in-hand with our media buyers and developers from day one.",
      "This single-partner architecture eliminates friction, accelerates iteration cycles from weeks to hours, and ensures that every dollar invested in production directly feeds a measurable customer acquisition funnel.",
    ],
    keyTakeaways: [
      "Fragmented creative vendors dilute brand identity and create severe coordination drag.",
      "Pairing filmmakers directly with media buyers ensures cinematic assets convert into revenue.",
      "A unified agency model enables lightning-fast iteration and cohesive multi-channel execution.",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) {
    return {
      title: "Article | BrandEx Media Insights",
    };
  }
  return {
    title: `${article.title} | BrandEx Media Insights`,
    description: article.intro,
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-background-outer text-white">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights Directory</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 py-12 md:py-20 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-xs font-mono text-brand-accent font-bold uppercase tracking-widest">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-white/50">
            <Calendar className="w-3.5 h-3.5 text-brand-accent" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-white/50">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            {article.readTime}
          </span>
        </div>

        <h1 className="font-oswald text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-8 leading-[1.02]">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <div>
            <p className="font-oswald text-lg font-bold text-white uppercase tracking-wide">
              {article.author}
            </p>
            <p className="text-xs text-white/60 font-mono">{article.authorRole}</p>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="900px"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-8 text-foreground-muted text-base sm:text-lg font-light leading-relaxed">
        <p className="text-xl sm:text-2xl text-white font-normal leading-relaxed border-l-2 border-brand-accent pl-6 py-1">
          {article.intro}
        </p>

        {article.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        {/* Key Takeaways Box */}
        <div className="my-12 p-8 rounded-3xl bg-brand-accent/10 border border-brand-accent/30 glass-panel">
          <h3 className="font-oswald text-2xl font-bold uppercase text-brand-accent mb-4">
            Key Strategic Takeaways
          </h3>
          <ul className="space-y-3">
            {article.keyTakeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Article CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-28 pt-8 text-center border-t border-white/10">
        <div className="glass-panel p-10 rounded-3xl border border-brand-accent/30 shadow-2xl">
          <Sparkles className="w-10 h-10 text-brand-accent mx-auto mb-3" />
          <h3 className="font-oswald text-3xl font-bold uppercase text-white mb-2">
            Implement These Strategies with BrandEx
          </h3>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-6 font-light">
            Ready to upgrade your brand&apos;s creative velocity and visual prestige? Let&apos;s build together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-accent text-background-outer font-oswald text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(196,232,109,0.3)]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
