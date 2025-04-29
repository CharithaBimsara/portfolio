import { Filter, ChevronDown, ChevronRight } from 'lucide-react';

const FilterMenu = ({ 
  showFilters, 
  setShowFilters, 
  selectedType, 
  setSelectedType, 
  selectedTech, 
  setSelectedTech, 
  allTypes, 
  allTechnologies 
}) => {
  return (
    <>
      {/* Filter button (mobile) */}
      <button 
        className="md:hidden flex items-center space-x-1 bg-white py-2 px-4 rounded-full border border-gray-300 shadow-sm"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter size={18} />
        <span>Filters</span>
        {showFilters ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      
      {/* Desktop filters */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Project type filter */}
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">All Types</option>
            {allTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>
        
        {/* Technology filter */}
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            <option value="All">All Technologies</option>
            {allTechnologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>
      </div>
      
      {/* Mobile filters (collapsible) */}
      {showFilters && (
        <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
            <select 
              className="w-full bg-white border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Types</option>
              {allTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Technology</label>
            <select 
              className="w-full bg-white border border-gray-300 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="All">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterMenu;