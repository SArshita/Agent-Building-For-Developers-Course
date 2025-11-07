import React, { useState, useEffect } from "react";

// Agent Building for Developers — Single-file React app
// - TailwindCSS utility classes are used (assumes Tailwind is configured in the host project)
// - Default export is the main App component
// - Usage: drop this file in a React + Tailwind project (e.g., Vite + React) and import it into index.jsx

const sampleCourse = {
  title: "Agent Building for Developers",
  subtitle: "4-week hands-on course to design, build and deploy intelligent AI agents",
  duration: "4 weeks",
  level: "Intermediate",
  overview:
    "Learn agent architecture, ReAct reasoning loops, memory, multi-agent workflows, tool integration, and deployment with practical labs and a final deployable project.",
  weeks: [
    {
      id: 1,
      title: "Foundations of Agentic AI",
      focus: "Agent mindset, Lyzr SDK setup, Hello World agent",
      days: [
        { title: "What are AI agents?", outcome: "Differentiate agents from chatbots" },
        { title: "Core components", outcome: "Understand LLM, tools, memory, reasoning" },
        { title: "SDK Setup", outcome: "Install Lyzr SDK and test" },
        { title: "Hello World Agent", outcome: "Create a conversational agent" },
        { title: "Mini Project", outcome: "Task Reminder Bot with persistence" },
      ],
    },
    {
      id: 2,
      title: "Building Functional Agents",
      focus: "Prompt chaining, context, tools, RAG",
      days: [
        { title: "Prompt templates & chaining", outcome: "Design reusable prompts" },
        { title: "Context management", outcome: "Manage dialogue state" },
        { title: "Tool use & function calling", outcome: "Integrate external APIs" },
        { title: "RAG", outcome: "Connect vector DB for PDF Q&A" },
        { title: "Mini Project", outcome: "API-enabled assistant" },
      ],
    },
    {
      id: 3,
      title: "Reasoning, Memory & Multi-Agent",
      focus: "ReAct, memory, planner-executor",
      days: [
        { title: "ReAct pattern", outcome: "Understand reasoning loops" },
        { title: "Implementing ReAct", outcome: "Add thought traces and logs" },
        { title: "Memory", outcome: "Short & long-term memory with Chroma" },
        { title: "Planner–Executor", outcome: "Multi-agent collaboration demo" },
        { title: "Mini Project", outcome: "Research Assistant" },
      ],
    },
    {
      id: 4,
      title: "Deployment & Real-World Apps",
      focus: "Frontend integration, cloud deploy, ethics",
      days: [
        { title: "Frontend integration", outcome: "Streamlit/Gradio UI" },
        { title: "Cloud deployment", outcome: "Host agent on Streamlit Cloud" },
        { title: "Monitoring & optimization", outcome: "Logging & latency tracking" },
        { title: "Ethics & safety", outcome: "Bias checks and checklist" },
        { title: "Final Showcase", outcome: "Deploy a custom agent" },
      ],
    },
  ],
};

function useLocalProgress(key, initial = {}) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {}
  }, [key, state]);
  return [state, setState];
}

function Navbar({ onNav, current }) {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-lg w-10 h-10 bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center font-bold text-white">AB</div>
          <div>
            <div className="font-semibold">Agent Building</div>
            <div className="text-xs text-slate-500">for Developers</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNav("home")}
            className={`py-1 px-3 rounded ${current === "home" ? "bg-rose-50" : "hover:bg-slate-50"}`}
          >
            Home
          </button>
          <button
            onClick={() => onNav("curriculum")}
            className={`py-1 px-3 rounded ${current === "curriculum" ? "bg-rose-50" : "hover:bg-slate-50"}`}
          >
            Curriculum
          </button>
          <button
            onClick={() => onNav("lessons")}
            className={`py-1 px-3 rounded ${current === "lessons" ? "bg-rose-50" : "hover:bg-slate-50"}`}
          >
            Lessons
          </button>
          <button
            onClick={() => onNav("projects")}
            className={`py-1 px-3 rounded ${current === "projects" ? "bg-rose-50" : "hover:bg-slate-50"}`}
          >
            Projects
          </button>
          <button
            onClick={() => onNav("contact")}
            className={`py-1 px-3 rounded ${current === "contact" ? "bg-rose-50" : "hover:bg-slate-50"}`}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ course, onEnroll }) {
  return (
    <section className="bg-gradient-to-r from-white to-rose-50 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold">{course.title}</h1>
          <p className="mt-3 text-slate-700">{course.subtitle}</p>
          <div className="mt-6 flex gap-3">
            <div className="px-4 py-2 bg-white rounded shadow-sm">
              <div className="text-xs text-slate-500">Duration</div>
              <div className="font-medium">{course.duration}</div>
            </div>
            <div className="px-4 py-2 bg-white rounded shadow-sm">
              <div className="text-xs text-slate-500">Level</div>
              <div className="font-medium">{course.level}</div>
            </div>
          </div>

          <p className="mt-6 text-slate-600 max-w-prose">{course.overview}</p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={onEnroll}
              className="px-5 py-3 rounded-lg bg-rose-500 text-white font-semibold shadow hover:opacity-95"
            >
              Enroll (Local Demo)
            </button>
            <a
              href="#curriculum"
              onClick={(e) => e.preventDefault()}
              className="px-5 py-3 rounded-lg border border-slate-200 text-slate-700"
            >
              View Curriculum
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-500">Includes labs, mini-projects, and a final deployable project.</div>
        </div>

        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow">
          <div className="text-sm text-slate-500">Quick stats</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-rose-50">
              <div className="text-xs">Weeks</div>
              <div className="font-semibold">4</div>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <div className="text-xs">Labs</div>
              <div className="font-semibold">8+</div>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <div className="text-xs">Final Project</div>
              <div className="font-semibold">Deployable Agent</div>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <div className="text-xs">Prereq</div>
              <div className="font-semibold">Python & APIs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum({ course, onOpenLesson }) {
  return (
    <section id="curriculum" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {course.weeks.map((w) => (
          <article key={w.id} className="p-5 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Week {w.id}: {w.title}</h3>
                <div className="text-sm text-slate-500 mt-1">{w.focus}</div>
              </div>
              <div className="text-xs text-slate-400">5 days</div>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              {w.days.map((d, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{d.title}</div>
                    <div className="text-xs text-slate-500">{d.outcome}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => onOpenLesson(w.id, i)} className="px-3 py-1 text-xs rounded bg-rose-50">Open</button>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgressPanel({ progress, setProgress, course }) {
  const completed = Object.keys(progress).length;
  const total = course.weeks.flatMap((w) => w.days).length;
  const pct = Math.round((completed / total) * 100 || 0);
  return (
    <aside className="w-full md:w-80 p-4 bg-white rounded-lg shadow-sm">
      <div className="text-sm text-slate-500">Your progress</div>
      <div className="mt-3">
        <div className="text-2xl font-semibold">{pct}%</div>
        <div className="text-xs text-slate-500">{completed} / {total} activities completed</div>
      </div>

      <div className="mt-5">
        <button
          onClick={() => setProgress({})}
          className="w-full py-2 rounded bg-slate-50 text-sm border"
        >Reset Progress</button>
      </div>

      <div className="mt-4 text-xs text-slate-500">Notes: progress is stored locally in your browser.</div>
    </aside>
  );
}

function LessonViewer({ weekId, dayIndex, course, onClose, onMarkDone, progress }) {
  if (weekId == null) return null;
  const week = course.weeks.find((w) => w.id === weekId);
  if (!week) return null;
  const day = week.days[dayIndex];
  const key = `${weekId}-${dayIndex}`;
  const done = !!progress[key];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">Week {weekId} — {day.title}</h3>
            <div className="text-sm text-slate-500 mt-1">{day.outcome}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-3 py-1 text-sm border rounded">Close</button>
          </div>
        </div>

        <div className="mt-4 text-slate-700">
          <p>
            This lesson contains: explanation, a short code-along, and a small lab. Use the buttons below to mark the activity as completed
            and to open a sample code editor (placeholder).
          </p>

          <div className="mt-4 bg-slate-50 p-4 rounded">
            <div className="font-medium">Sample steps</div>
            <ol className="mt-2 list-decimal pl-5 text-sm space-y-1 text-slate-600">
              <li>Read the concept overview and watch the instructor video.</li>
              <li>Run the code-along notebook and test locally.</li>
              <li>Complete the mini-lab and submit via the Projects tab.</li>
            </ol>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => onMarkDone(key)}
              className={`px-4 py-2 rounded ${done ? 'bg-green-50 border' : 'bg-rose-500 text-white'}`}>
              {done ? 'Completed' : 'Mark as done'}
            </button>

            <button onClick={() => alert('Open code editor (demo).') } className="px-4 py-2 rounded border">Open code editor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects({ onSubmit }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Mini-projects & Final Project</h2>
      <p className="text-slate-600">Each week has a mini-project; the final week includes a deployable agent showcase.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Week 1 — Task Reminder Bot</h3>
          <p className="text-sm text-slate-500 mt-2">Build a simple bot that saves & retrieves reminders using local storage or a simple DB.</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => onSubmit('Task Reminder Bot')} className="px-3 py-1 rounded bg-rose-50">Submit</button>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">Final Project — Deployable Agent</h3>
          <p className="text-sm text-slate-500 mt-2">Design, build and deploy an agent (examples: Code Explainer, Data Query Assistant).</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => onSubmit('Final Project')} className="px-3 py-1 rounded bg-rose-50">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [progress, setProgress] = useLocalProgress("ab_progress_v1", {});
  const [open, setOpen] = useState({ weekId: null, dayIndex: null });
  const [enrolled, setEnrolled] = useLocalProgress("ab_enrolled_v1", { enrolled: false });

  function handleOpen(weekId, dayIndex) {
    setOpen({ weekId, dayIndex });
  }
  function handleClose() {
    setOpen({ weekId: null, dayIndex: null });
  }

  function markDone(key) {
    setProgress({ ...progress, [key]: true });
  }

  function submitProject(name) {
    alert(`Project submission demo: ${name}. In a real site, you'd upload or link your repo.`);
  }

  useEffect(() => {
    // small UX: jump to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar onNav={setPage} current={page} />

      {page === 'home' && (
        <main>
          <Hero course={sampleCourse} onEnroll={() => { setEnrolled({ enrolled: true }); alert('Enrolled (demo): progress saved locally.'); }} />

          <Curriculum course={sampleCourse} onOpenLesson={handleOpen} />

          <section className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-xl font-semibold">Why this course?</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium">Hands-on</h4>
                <div className="text-sm text-slate-500 mt-2">Labs and mini-projects every week.</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium">Practical tools</h4>
                <div className="text-sm text-slate-500 mt-2">Lyzr SDK, Chroma/FAISS, Streamlit deployment.</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-medium">Deployable outcome</h4>
                <div className="text-sm text-slate-500 mt-2">Final project ready to showcase.</div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-xl font-semibold">Instructor Resources</h2>
            <div className="mt-4 text-sm text-slate-600">Downloadable lab notebooks, slide decks, and assessment rubrics would be available here in a production site.</div>
          </section>

        </main>
      )}

      {page === 'curriculum' && (
        <main className="max-w-6xl mx-auto px-6 py-8 flex gap-6">
          <div className="flex-1">
            <Curriculum course={sampleCourse} onOpenLesson={handleOpen} />
          </div>
          <div className="hidden md:block">
            <ProgressPanel progress={progress} setProgress={setProgress} course={sampleCourse} />
          </div>
        </main>
      )}

      {page === 'lessons' && (
        <main className="max-w-6xl mx-auto px-6 py-8 flex gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Lessons</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sampleCourse.weeks.flatMap((w) => w.days.map((d, i) => ({ w, d, i }))).map(({ w, d, i }, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <div className="font-medium">Week {w.id} — {d.title}</div>
                    <div className="text-xs text-slate-500">{d.outcome}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleOpen(w.id, i)} className="px-3 py-1 rounded bg-rose-50">Open</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <ProgressPanel progress={progress} setProgress={setProgress} course={sampleCourse} />
          </div>
        </main>
      )}

      {page === 'projects' && (
        <main>
          <Projects onSubmit={submitProject} />
        </main>
      )}

      {page === 'contact' && (
        <main className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">Contact & Enrollment</h2>
          <p className="text-slate-600">For course licensing, instructor guides, or to host this as a cohort, reach out:</p>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500">Instructor</div>
                <div className="font-medium">Course Team — Agent Labs</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="font-medium">hello@example.com</div>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm">Message</label>
              <textarea className="w-full mt-2 p-3 border rounded" rows={4} placeholder="Ask about running a cohort, licensing, or integration." />
              <div className="mt-3 flex gap-2">
                <button className="px-4 py-2 rounded bg-rose-500 text-white">Send</button>
                <button className="px-4 py-2 rounded border">Clear</button>
              </div>
            </div>
          </div>
        </main>
      )}

      <footer className="mt-12 py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">© {new Date().getFullYear()} Agent Building for Developers — Demo site. Built with React + Tailwind.</div>
      </footer>

      <LessonViewer
        weekId={open.weekId}
        dayIndex={open.dayIndex}
        course={sampleCourse}
        onClose={handleClose}
        onMarkDone={markDone}
        progress={progress}
      />
    </div>
  );
}
