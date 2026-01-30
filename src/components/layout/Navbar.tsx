'use client';

import Link from 'next/link';
import { ChevronDown, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AuthModal from '@/components/modals/AuthModal';
import LocationModal from '@/components/modals/LocationModal';

export default function Navbar() {
    const pathname = usePathname();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [currentLocation, setCurrentLocation] = useState('Location Name');

    const navItems = [
        { name: 'For you', href: '/' },
        { name: 'Dining', href: '/dining' },
        { name: 'Events', href: '/events' },
        { name: 'Play', href: '/play' },
        // { name: 'Cinema', href: '#' },
        // { name: 'Workshops', href: '#' },
        // { name: 'Comedy', href: '#' }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
            <div className="mx-1 flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 md:pl-6 md:pr-6 lg:pl-8 lg:pr-12">
                {/* Left: Logo and Explore */}
                <div className="flex items-center gap-4 md:gap-9">
                    <Link href="/" className="border-r border-zinc-200 pr-4 md:pr-8 flex items-center">
                        <img
                            src="/ticpin-logo-black.png"
                            alt="TicPin Logo"
                            className="h-4 md:h-7 w-auto object-contain"
                        />
                    </Link>
                    <div data-layer="Explore" className="hidden sm:flex">
                        <span className="text-[20px] font-medium text-black" style={{ fontFamily: 'Anek Latin' }}>Explore</span>
                    </div>
                </div>

                {/* Center: Tabs */}
                <nav className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-hide">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-6 py-1.5 text-[18px] font-medium transition-all duration-300 whitespace-nowrap ${isActive}`}
                                style={isActive ? {
                                    fontFamily: 'Anek Latin',
                                    background: 'rgba(83, 49, 234, 0.15)',
                                    borderRadius: '20px'
                                } : { fontFamily: 'Anek Latin' }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: Location & User */}
                <div className="flex items-center gap-4 md:gap-8">
                    <div
                        onClick={() => setIsLocationOpen(true)}
                        className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                    >
                        <img
                            src="/loc.png"
                            alt="Location"
                            className="w-4 h-4 object-contain"
                        />
                        <span className="text-[18px] font-medium text-black break-words" style={{ fontFamily: 'Anek Latin' }}>
                            {currentLocation}
                        </span>
                    </div>
                    <img
                        src="/search.svg"
                        alt="Search"
                        className="hidden lg:block w-5 h-5 object-contain cursor-pointer"
                    />
                    <div
                        onClick={() => setIsAuthOpen(true)}
                        className="h-8 w-8 md:h-9 md:w-9 bg-[#d9d9d9] rounded-full flex items-center justify-center cursor-pointer"
                    >
                        {/* Profile Icon */}
                        <div className="w-4 h-4 md:w-5 md:h-5 text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
        </header>
    );
}
