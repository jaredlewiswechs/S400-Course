import { useState } from "react";

const C = {
  bg: "#faf9f6",
  surface: "#ffffff",
  surfaceDark: "#1a1a2e",
  border: "#e8e5de",
  borderDark: "#2a2a3e",
  ink: "#1a1a2e",
  inkMuted: "#6b6878",
  inkDim: "#a8a4b0",
  accent: "#d4550a",
  accentBg: "#d4550a10",
  teal: "#0a7e6b",
  tealBg: "#0a7e6b10",
  blue: "#2c5faa",
  blueBg: "#2c5faa10",
  violet: "#6b3fa0",
  violetBg: "#6b3fa010",
  warm: "#b8860b",
  warmBg: "#b8860b10",
};

const units = [
  {
    num: "01",
    title: "What Is Intelligence?",
    weeks: "Week 1\u20132",
    color: C.accent,
    bg: C.accentBg,
    essential: "What makes something \u2018intelligent\u2019 \u2014 and who gets to decide?",
    lessons: [
      { name: "Human vs. Machine Pattern Recognition", type: "Hands-On Lab", desc: "Students compete against an AI image classifier. They discover what they\u2019re better at (context, emotion, ambiguity) and what the machine is better at (speed, volume, consistency)." },
      { name: "The History Nobody Tells You", type: "Slideshow + Reading", desc: "From Ada Lovelace to Alan Turing to the AI winters. Why AI \u2018failed\u2019 twice before succeeding. Primary source excerpts." },
      { name: "How Machines \u2018Learn\u2019", type: "Google Sheets Simulation", desc: "Students manually train a mini classifier using a spreadsheet. Input data, set weights, watch accuracy change. They ARE the neural network." },
      { name: "Bias Baked In", type: "Case Study + Discussion", desc: "Amazon\u2019s hiring algorithm, facial recognition accuracy across demographics, predictive policing. Students analyze real datasets to find where bias enters." },
    ],
    deliverables: ["Slideshow (Keynote/PDF)", "Google Sheets classifier sim", "Student workbook (print + digital)", "Discussion protocols", "Assessment rubric"],
    differentiation: "Scaffolded reading levels (on-grade, below, ELL). Extension: students design their own classification task.",
  },
  {
    num: "02",
    title: "Prompt Engineering as Critical Thinking",
    weeks: "Week 3\u20134",
    color: C.teal,
    bg: C.tealBg,
    essential: "How does the way you ask a question shape the answer you get?",
    lessons: [
      { name: "The Anatomy of a Prompt", type: "Interactive Lab", desc: "Students dissect prompts like sentences: subject, constraint, context, output format. They learn that vague inputs = vague outputs \u2014 same as research questions." },
      { name: "Prompt \u2192 Output \u2192 Evaluate", type: "Structured Activity", desc: "Students write prompts, compare outputs across 3 AI tools, score them on accuracy, bias, and usefulness. Builds evaluation skills that transfer to ALL sources." },
      { name: "The Art of Specificity", type: "Challenge Workshop", desc: "Iterative prompt refinement. Start with \u2018tell me about climate change\u2019 \u2192 build to a research-grade prompt. Students track how each constraint changes the output." },
      { name: "When AI Gets It Wrong", type: "Investigation", desc: "Hallucination hunting. Students are given AI outputs with embedded errors and must fact-check using primary sources. Builds media literacy + verification habits." },
    ],
    deliverables: ["Prompt engineering workbook", "Evaluation rubric template", "Hallucination detection worksheet", "Comparison chart (Google Sheets)", "Teacher facilitation guide"],
    differentiation: "Tiered complexity: Tier 1 uses structured templates, Tier 2 open-ended, Tier 3 designs prompts for specific academic tasks.",
  },
  {
    num: "03",
    title: "Data Is the Fuel",
    weeks: "Week 5\u20136",
    color: C.blue,
    bg: C.blueBg,
    essential: "Where does AI\u2019s knowledge come from \u2014 and what\u2019s missing?",
    lessons: [
      { name: "Your Digital Footprint Is Training Data", type: "Audit Activity", desc: "Students map their own data trail: what apps collect, where it goes, how it\u2019s used. Eye-opening for every age group." },
      { name: "Garbage In, Garbage Out", type: "Google Sheets Lab", desc: "Students build a dataset with intentional gaps and biases, then see how a simple algorithm produces skewed results. They fix the data and watch the output change." },
      { name: "Who Owns Your Words?", type: "Socratic Seminar", desc: "Copyright, creative commons, training data scraping. Artists vs. AI companies. Students read real court filings (adapted) and argue both sides." },
      { name: "Data Visualization as Truth-Telling", type: "Project", desc: "Students take a real dataset (census, climate, economic) and create visualizations. Then they create a MISLEADING visualization from the same data. Teaches both creation and detection." },
    ],
    deliverables: ["Data audit worksheet", "Google Sheets bias simulation", "Adapted court documents", "Visualization project rubric", "Anchor chart: \u2018Questions to Ask About Any Dataset\u2019"],
    differentiation: "Visual learners: infographic option. Advanced: use Posit Cloud for R-based visualizations. ELL: vocabulary scaffolds + visual glossary.",
  },
  {
    num: "04",
    title: "AI Across Every Subject",
    weeks: "Week 7\u20138",
    color: C.violet,
    bg: C.violetBg,
    essential: "How is AI already shaping the fields you\u2019ll work in?",
    lessons: [
      { name: "AI in Science", type: "Case Study Rotation", desc: "Protein folding (AlphaFold), climate modeling, drug discovery. Students analyze how AI accelerated each breakthrough and what humans still had to do." },
      { name: "AI in Economics & Business", type: "Simulation", desc: "Algorithmic trading, supply chain optimization, dynamic pricing. Google Sheets simulation where students see how an algorithm sets prices based on demand signals." },
      { name: "AI in Creative Arts", type: "Create + Critique", desc: "Students use AI to generate art/music/writing, then critique it against human-made work. Debate: Is it art? Who\u2019s the author? What\u2019s original?" },
      { name: "AI in YOUR Future Career", type: "Research Project", desc: "Students pick a career field and research: How is AI being used? What jobs are changing? What new jobs are emerging? What skills do I need?" },
    ],
    deliverables: ["Case study packets (4 subjects)", "Economics simulation (Google Sheets)", "Creative AI critique framework", "Career research template", "Cross-curricular connection guide for teachers"],
    differentiation: "Choice boards for case studies. Career project has scaffolded and open-ended tracks. Teachers can assign by subject area relevance.",
  },
  {
    num: "05",
    title: "Build Something Real",
    weeks: "Week 9\u201310",
    color: C.warm,
    bg: C.warmBg,
    essential: "Can you use AI as a tool to solve a problem that matters to you?",
    lessons: [
      { name: "Design Thinking + AI", type: "Workshop", desc: "Students identify a real problem in their school or community. They scope it, define constraints, and plan how AI could (and couldn\u2019t) help solve it." },
      { name: "Prototype Sprint", type: "Build Session", desc: "Using AI tools (with teacher guidance), students build a prototype: a chatbot, an automated workflow, a data dashboard, a content piece. Focus on the THINKING, not the code." },
      { name: "Responsible AI Checklist", type: "Self-Assessment", desc: "Before presenting, students evaluate their project against a responsible AI framework: fairness, transparency, privacy, accountability, human oversight." },
      { name: "Showcase & Reflect", type: "Presentation Day", desc: "Students present to peers (or community). Format: 3-min pitch + demo + Q&A. Rubric includes technical understanding, ethical reasoning, and communication." },
    ],
    deliverables: ["Design thinking template", "Project proposal form", "Responsible AI checklist", "Presentation rubric", "Reflection journal prompts", "Parent/admin showcase guide"],
    differentiation: "Project complexity scales by grade level. MS: guided templates. HS: open-ended. Microschool: cross-age mentoring option.",
  },
];

const pricing = [
  { product: "Complete 10-Week Unit", price: "$65\u2013$89", notes: "Everything below, bundled. This is the flagship." },
  { product: "Individual Unit Packs (\u00d75)", price: "$15\u2013$20 each", notes: "For teachers who only need one topic area." },
  { product: "Google Sheets Simulations Only", price: "$25\u2013$35", notes: "3 interactive simulations. Unique on TPT \u2014 nobody else has these." },
  { product: "Slideshow Pack (Keynote + PDF)", price: "$20\u2013$30", notes: "10 beautifully designed presentations. Keynote = premium feel." },
  { product: "Student Workbook (Print + Digital)", price: "$15\u2013$25", notes: "Full companion workbook. Print-ready + Google Docs editable." },
  { product: "Teacher Facilitation Guide", price: "$12\u2013$18", notes: "Discussion protocols, pacing guide, differentiation tips, answer keys." },
  { product: "Microschool License Pack", price: "$200\u2013$500", notes: "Direct sale. Full curriculum + support docs + customization guide." },
];

const competitive = [
  { them: "3-slide \u2018What is AI\u2019 intro", you: "10-week comprehensive curriculum with hands-on labs" },
  { them: "ChatGPT policy templates", you: "Students actually learn prompt engineering as critical thinking" },
  { them: "Ethics worksheet (fill-in-the-blank)", you: "Socratic seminars with adapted court documents and real datasets" },
  { them: "No technical depth", you: "Google Sheets simulations where students ARE the algorithm" },
  { them: "ELA teachers guessing at CS topics", you: "Built by someone who taught CS to 100+ students" },
  { them: "One-off lessons, no scope/sequence", you: "Full scope & sequence aligned to ISTE + AI4K12 frameworks" },
];

function Badge({ text, color, bg }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
      color: color, background: bg,
      padding: "3px 8px", borderRadius: 4,
      fontFamily: "'IBM Plex Mono', monospace",
    }}>{text}</span>
  );
}

export default function AILiteracy() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [view, setView] = useState("course");

  const views = [
    { id: "course", label: "Course Map" },
    { id: "competitive", label: "Why This Wins" },
    { id: "pricing", label: "Product Breakdown" },
  ];

  return (
    <div style={{
      fontFamily: "'Source Serif 4', Georgia, serif",
      background: C.bg, color: C.ink,
      minHeight: "100vh", padding: "32px 20px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11, letterSpacing: "0.15em", color: C.inkMuted,
            marginBottom: 12, textTransform: "uppercase",
          }}>
            PARCRI Real Intelligence &middot; Curriculum Design
          </div>
          <h1 style={{
            fontSize: 42, fontWeight: 800, lineHeight: 1.08,
            margin: "0 0 12px",
            fontFamily: "'Source Serif 4', Georgia, serif",
          }}>
            AI Literacy for the <br />
            <span style={{ color: C.accent }}>Real World</span>
          </h1>
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: 16, color: C.inkMuted, lineHeight: 1.6,
            margin: "0 0 24px", maxWidth: 580,
          }}>
            A 10-week, hands-on curriculum that teaches students how AI actually works &mdash; not just how to fear it or use it to cheat. Built by a CS teacher for grades 7&ndash;12.
          </p>

          {/* Quick Stats */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Duration", value: "10 Weeks" },
              { label: "Units", value: "5" },
              { label: "Lessons", value: "20" },
              { label: "Grade Band", value: "7\u201312" },
              { label: "Formats", value: "6+" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.1em", color: C.inkDim, marginBottom: 2 }}>
                  {s.label.toUpperCase()}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 18, fontWeight: 700, color: C.ink }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div style={{
          display: "flex", gap: 2,
          borderBottom: `2px solid ${C.border}`,
          marginBottom: 28,
        }}>
          {views.map(v => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: view === v.id ? `2px solid ${C.ink}` : "2px solid transparent",
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: view === v.id ? 700 : 500,
                color: view === v.id ? C.ink : C.inkMuted,
                cursor: "pointer",
                fontFamily: "'IBM Plex Sans', sans-serif",
                marginBottom: -2,
              }}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* COURSE MAP */}
        {view === "course" && (
          <div>
            {/* Unit Selector */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {units.map((u, i) => (
                <button
                  key={i}
                  onClick={() => setActiveUnit(i)}
                  style={{
                    background: activeUnit === i ? u.bg : "transparent",
                    border: `1.5px solid ${activeUnit === i ? u.color : C.border}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                    minWidth: 140,
                    flex: "1 1 0",
                  }}
                >
                  <div style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10, fontWeight: 700,
                    color: activeUnit === i ? u.color : C.inkDim,
                    letterSpacing: "0.1em",
                  }}>
                    UNIT {u.num}
                  </div>
                  <div style={{
                    fontSize: 13, fontWeight: 600,
                    color: activeUnit === i ? C.ink : C.inkMuted,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    marginTop: 2,
                  }}>
                    {u.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Unit Detail */}
            {(() => {
              const u = units[activeUnit];
              return (
                <div style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}>
                  {/* Unit Header */}
                  <div style={{
                    padding: "24px 28px",
                    borderBottom: `1px solid ${C.border}`,
                    background: u.bg,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <span style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 12, fontWeight: 700, color: u.color,
                          }}>
                            UNIT {u.num}
                          </span>
                          <Badge text={u.weeks} color={u.color} bg={u.color + "18"} />
                        </div>
                        <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
                          {u.title}
                        </h2>
                      </div>
                    </div>
                    <div style={{
                      marginTop: 14,
                      padding: "12px 16px",
                      background: C.surface,
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                    }}>
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10, fontWeight: 600,
                        color: C.inkDim, letterSpacing: "0.1em",
                        marginBottom: 4,
                      }}>
                        ESSENTIAL QUESTION
                      </div>
                      <div style={{
                        fontSize: 16, fontStyle: "italic",
                        color: C.ink, lineHeight: 1.4,
                      }}>
                        &ldquo;{u.essential}&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Lessons */}
                  <div style={{ padding: "24px 28px" }}>
                    <div style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11, fontWeight: 600,
                      color: C.inkDim, letterSpacing: "0.1em",
                      marginBottom: 14,
                    }}>
                      LESSONS
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {u.lessons.map((l, li) => (
                        <div key={li} style={{
                          padding: "14px 16px",
                          background: C.bg,
                          borderRadius: 8,
                          border: `1px solid ${C.border}`,
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: 200 }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                <span style={{
                                  fontFamily: "'IBM Plex Mono', monospace",
                                  fontSize: 11, fontWeight: 700, color: u.color,
                                }}>
                                  {String(li + 1).padStart(2, "0")}
                                </span>
                                <span style={{
                                  fontFamily: "'IBM Plex Sans', sans-serif",
                                  fontSize: 15, fontWeight: 600, color: C.ink,
                                }}>
                                  {l.name}
                                </span>
                              </div>
                              <div style={{
                                fontFamily: "'IBM Plex Sans', sans-serif",
                                fontSize: 13, color: C.inkMuted, lineHeight: 1.6,
                              }}>
                                {l.desc}
                              </div>
                            </div>
                            <Badge text={l.type.toUpperCase()} color={u.color} bg={u.bg} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Differentiation */}
                  <div style={{
                    padding: "0 28px 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}>
                    <div style={{
                      padding: 16, background: C.bg, borderRadius: 8,
                      border: `1px solid ${C.border}`,
                    }}>
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10, fontWeight: 600, color: C.inkDim,
                        letterSpacing: "0.1em", marginBottom: 8,
                      }}>
                        WHAT YOU GET
                      </div>
                      {u.deliverables.map((d, di) => (
                        <div key={di} style={{
                          fontFamily: "'IBM Plex Sans', sans-serif",
                          fontSize: 13, color: C.inkMuted, lineHeight: 1.8,
                          display: "flex", alignItems: "flex-start", gap: 6,
                        }}>
                          <span style={{ color: u.color, fontSize: 8, marginTop: 6 }}>{"\u25CF"}</span>
                          {d}
                        </div>
                      ))}
                    </div>
                    <div style={{
                      padding: 16, background: C.bg, borderRadius: 8,
                      border: `1px solid ${C.border}`,
                    }}>
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10, fontWeight: 600, color: C.inkDim,
                        letterSpacing: "0.1em", marginBottom: 8,
                      }}>
                        DIFFERENTIATION
                      </div>
                      <div style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontSize: 13, color: C.inkMuted, lineHeight: 1.7,
                      }}>
                        {u.differentiation}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Scope & Sequence Overview */}
            <div style={{
              marginTop: 24,
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "24px 28px",
            }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>
                Scope & Sequence at a Glance
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {units.map((u, i) => (
                  <div key={i} style={{
                    display: "grid",
                    gridTemplateColumns: "50px 1fr 120px 80px",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: i < units.length - 1 ? `1px solid ${C.border}` : "none",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveUnit(i)}
                  >
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 13, fontWeight: 700, color: u.color,
                    }}>
                      {u.num}
                    </span>
                    <span style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: 14, fontWeight: activeUnit === i ? 700 : 500,
                      color: activeUnit === i ? C.ink : C.inkMuted,
                    }}>
                      {u.title}
                    </span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11, color: C.inkDim,
                    }}>
                      {u.weeks}
                    </span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11, color: C.inkMuted,
                    }}>
                      {u.lessons.length} lessons
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COMPETITIVE TAB */}
        {view === "competitive" && (
          <div>
            <div style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "28px",
              marginBottom: 20,
            }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 8px" }}>
                What&rsquo;s on TPT Now vs. What You&rsquo;d Ship
              </h2>
              <p style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14, color: C.inkMuted, margin: "0 0 24px", lineHeight: 1.6,
              }}>
                I searched TPT&rsquo;s current AI literacy offerings. Here&rsquo;s the gap you&rsquo;d fill.
              </p>

              {competitive.map((c, i) => (
                <div key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 24px 1fr",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: i < competitive.length - 1 ? `1px solid ${C.border}` : "none",
                  alignItems: "center",
                }}>
                  <div style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 13, color: C.inkDim, lineHeight: 1.5,
                    textDecoration: "line-through",
                    textDecorationColor: C.inkDim + "60",
                  }}>
                    {c.them}
                  </div>
                  <div style={{ fontSize: 16, color: C.accent, textAlign: "center", fontWeight: 700 }}>{"\u2192"}</div>
                  <div style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: 13, color: C.ink, lineHeight: 1.5,
                    fontWeight: 600,
                  }}>
                    {c.you}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "28px",
              marginBottom: 20,
            }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 16px" }}>
                Your Unfair Advantages
              </h2>
              {[
                { title: "You actually taught CS", desc: "You taught computer science to 100+ students with high pass rates. 95% of TPT AI resources are made by ELA teachers who don\u2019t understand the technical side. You can explain HOW AI works because you\u2019ve explained algorithms, loops, and data structures to teenagers." },
                { title: "You can build the interactive layer", desc: "Google Sheets simulations, Posit Cloud labs, self-grading assessments \u2014 you have the technical chops to create products nobody else on TPT can. A spreadsheet where students manually \u2018train\u2019 a classifier? That\u2019s a killer demo that sells the entire bundle." },
                { title: "Keynote + Canva = premium design", desc: "Most TPT AI products look like 2015 PowerPoints. Your instinct to \u2018make it look nice\u2019 with Keynote and Canva puts you in a different visual tier. Teachers buy with their eyes first." },
                { title: "You know the microschool market", desc: "Microschools desperately need structured curriculum but can\u2019t afford Prenda\u2019s $2,200/student. A $200\u2013$500 complete AI literacy package? That\u2019s a no-brainer for a microschool director." },
                { title: "You use AI to build AI curriculum", desc: "Meta-advantage: you\u2019re using Claude as core infrastructure to build curriculum about AI. Your production speed with AI tools means you can ship and iterate faster than anyone hand-crafting resources." },
              ].map((a, i) => (
                <div key={i} style={{
                  display: "flex", gap: 14,
                  padding: "14px 0",
                  borderBottom: i < 4 ? `1px solid ${C.border}` : "none",
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{a.title}</div>
                    <div style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: 13, color: C.inkMuted, lineHeight: 1.7,
                    }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: C.surfaceDark,
              borderRadius: 12,
              padding: "24px 28px",
              color: "#e8e8f0",
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px", color: "#e8c547" }}>
                Timing Advantage
              </h3>
              <p style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14, color: "#a8a4c0", lineHeight: 1.7, margin: 0,
              }}>
                Trump signed an executive order in April 2025 calling for AI to be infused throughout K-12 education. The OECD/EU AI Literacy Framework launches its final version in 2026. PISA 2029 will assess AI literacy. Schools are scrambling for curriculum and there&rsquo;s almost nothing comprehensive available. You&rsquo;d be shipping into a demand wave that&rsquo;s just starting to build. First mover in a category that&rsquo;s about to explode.
              </p>
            </div>
          </div>
        )}

        {/* PRICING TAB */}
        {view === "pricing" && (
          <div>
            <div style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "28px",
              marginBottom: 20,
            }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 8px" }}>
                Product Breakdown & Pricing
              </h2>
              <p style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14, color: C.inkMuted, margin: "0 0 24px", lineHeight: 1.6,
              }}>
                One curriculum, multiple products. Sell the bundle AND the pieces.
              </p>

              {pricing.map((p, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "14px 0",
                  borderBottom: i < pricing.length - 1 ? `1px solid ${C.border}` : "none",
                  gap: 16,
                  flexWrap: "wrap",
                }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{
                      fontWeight: 700, fontSize: 15,
                      color: i === 0 ? C.accent : C.ink,
                    }}>
                      {p.product}
                      {i === 0 && <span style={{
                        fontSize: 10, fontWeight: 700, background: C.accentBg,
                        color: C.accent, padding: "2px 6px", borderRadius: 3,
                        marginLeft: 8, fontFamily: "'IBM Plex Mono', monospace",
                      }}>FLAGSHIP</span>}
                    </div>
                    <div style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: 13, color: C.inkMuted, marginTop: 2, lineHeight: 1.5,
                    }}>{p.notes}</div>
                  </div>
                  <div style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 16, fontWeight: 700, color: C.teal,
                    whiteSpace: "nowrap",
                  }}>
                    {p.price}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "28px",
              marginBottom: 20,
            }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 16px" }}>
                Production Estimate
              </h2>
              {[
                { phase: "Week 1\u20132", task: "Unit 1 & 2 complete", hours: "~20 hrs", detail: "Claude drafts content, you design in Canva/Keynote, build Sheets sims" },
                { phase: "Week 3\u20134", task: "Unit 3 & 4 complete", hours: "~20 hrs", detail: "Heavier on research (court docs, datasets), lighter on design" },
                { phase: "Week 5", task: "Unit 5 + bundling", hours: "~12 hrs", detail: "Capstone project framework, packaging, TPT listings, preview files" },
                { phase: "Week 6", task: "Polish + launch", hours: "~8 hrs", detail: "Final QA, write descriptions, create free sampler, publish" },
              ].map((p, i) => (
                <div key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 80px",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
                  alignItems: "start",
                }}>
                  <div style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12, fontWeight: 600, color: C.accent,
                  }}>{p.phase}</div>
                  <div>
                    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>{p.task}</div>
                    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: C.inkMuted, marginTop: 2 }}>{p.detail}</div>
                  </div>
                  <div style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12, color: C.teal, fontWeight: 600,
                    textAlign: "right",
                  }}>{p.hours}</div>
                </div>
              ))}
              <div style={{
                marginTop: 16, paddingTop: 12,
                borderTop: `2px solid ${C.border}`,
                display: "flex", justifyContent: "space-between",
              }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Total to ship</span>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 16, fontWeight: 700, color: C.accent,
                }}>~60 hours over 6 weeks</span>
              </div>
            </div>

            <div style={{
              background: C.tealBg,
              border: `1px solid ${C.teal}30`,
              borderRadius: 12,
              padding: "24px 28px",
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px", color: C.teal }}>
                Revenue Scenario
              </h3>
              <p style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: 14, color: C.inkMuted, lineHeight: 1.7, margin: 0,
              }}>
                If the full bundle sells 10&times;/month at $75 avg = $750/mo just from this one product line. Individual units add another $200&ndash;$400/mo. Plus 5 microschool licenses at $350 avg = $1,750 one-time. This single curriculum could generate $1,000&ndash;$1,500/month recurring plus $2,000&ndash;$5,000/year in direct licenses. And it compounds &mdash; once it has reviews and ranks on TPT, it sells while you sleep.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 40, paddingTop: 16,
          borderTop: `1px solid ${C.border}`,
          textAlign: "center",
        }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10, letterSpacing: "0.12em", color: C.inkDim,
          }}>
            PARCRI &middot; AI LITERACY CURRICULUM BLUEPRINT &middot; FEB 2026
          </span>
        </div>
      </div>
    </div>
  );
}
