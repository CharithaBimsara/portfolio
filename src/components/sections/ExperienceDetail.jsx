import { Link } from 'react-router-dom';
import Experience from './Experience';
export default function ExperienceDetail() {
  return <main><div className="max-w-6xl mx-auto px-6 pt-8"><Link to="/" className="text-teal-600 underline">Back to portfolio</Link></div><Experience /></main>;
}
