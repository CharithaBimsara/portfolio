import { useDarkMode } from '../../DarkModeContext';
import { experiences } from '../../data/experience';
export default function Experience() {
  const { darkMode } = useDarkMode();
  return <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-3">Professional experience</p>
      <h2 className="text-4xl font-bold mb-10">Building practical software.</h2>
      <div className="grid md:grid-cols-2 gap-8">{experiences.map(role => <article key={role.company} className={`rounded-2xl border p-7 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <p className="text-sm opacity-75 mb-4">{role.type} · {role.period}</p>
        <h3 className="text-2xl font-bold">{role.title}</h3>
        <p className="text-teal-600 font-semibold mt-2">{role.company}</p>
        <p className="mt-5 leading-relaxed">{role.description}</p>
        <ul className="mt-5 pl-5 list-disc space-y-3 leading-relaxed">{role.contributions.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}</div>
    </div>
  </section>;
}
