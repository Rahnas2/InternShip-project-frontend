import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isInHeroSection, setIsInHeroSection] = useState(true);
    const location = useLocation()

    console.log('location is ', location)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroSectionHeight = window.innerHeight; // Assuming hero is full viewport height

            // Check if user has scrolled
            setIsScrolled(scrollPosition > 50);

            // Check if still in hero section
            setIsInHeroSection(scrollPosition < heroSectionHeight - 100); // 100px buffer
        };

        // Set initial state
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic classes based on scroll position and section
    const getNavbarClasses = () => {
        if (isInHeroSection && location.pathname === '/') {
            // In hero section - transparent background with glassmorphism effect
            return "bg-transparent";
            // return isScrolled 
            //     ? "backdrop-blur-md border-b border-white/20 shadow-lg" 
            //     : "bg-transparent";
        } else {
            // Outside hero section - solid background
            return "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200";
        }
    };

    const getTextClasses = () => {
        if (isInHeroSection && location.pathname === '/') {
            // In hero section - white text for visibility over images
            return "text-white";
        } else {
            // Outside hero section - dark text
            return "text-gray-900";
        }
    };

    const getLinkClasses = ({ isActive }) => {
        const baseClasses = "transition-colors duration-300";
        // Dark text outside hero section
        return `${baseClasses} ${isActive
            ? "text-blue-600 font-medium hover:text-blue-700"
            : "text-gray-700 hover:text-blue-600"
            }`;
    };

    const getLogoClasses = () => {
        if (isInHeroSection && location.pathname === '/') {
            return "w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center";
        } else {
            return "w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center";
        }
    };


    return (
        <nav className={`${location.pathname === '/' ? 'fixed  w-full' : 'sticky'} top-0 z-50 transition-all duration-300 ease-in-out ${getNavbarClasses()}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className={getLogoClasses()}>
                            <span className="text-white font-bold text-lg">L</span>
                        </div>
                        <span className={`text-xl font-bold transition-colors duration-300 ${getTextClasses()}`}>
                            Lorem Ipsum
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to='/' className={getLinkClasses} >Home</NavLink>
                        <NavLink to='/about' className={getLinkClasses} >About Us</NavLink>
                        <NavLink to='/courses' className={getLinkClasses} >Courses</NavLink>
                        <NavLink to='/contact' className={getLinkClasses} >Contact</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            <NavLink to="/" className={({ isActive }) => `py-2 px-4 hover:bg-blue-50 rounded transition-colors ${isActive
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-gray-700 hover:text-blue-600"
                                }`}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `py-2 px-4 hover:bg-blue-50 rounded transition-colors ${isActive
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-gray-700 hover:text-blue-600"
                                }`}>About Us</NavLink>
                            <NavLink to="/courses" className={({ isActive }) => `py-2 px-4 hover:bg-blue-50 rounded transition-colors ${isActive
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-gray-700 hover:text-blue-600"
                                }`}>Courses</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => `py-2 px-4 hover:bg-blue-50 rounded transition-colors ${isActive
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-gray-700 hover:text-blue-600"
                                }`}>Contact</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar