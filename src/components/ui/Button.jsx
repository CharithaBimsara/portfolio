const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseStyles = "py-3 px-8 rounded-full font-medium transition transform hover:-translate-y-1";
    
    const variantStyles = {
      primary: "bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:shadow-lg",
      secondary: "bg-white text-violet-600 border border-violet-500 hover:bg-violet-50",
      link: "text-violet-600 hover:text-violet-800 font-medium"
    };
    
    return (
      <button 
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;