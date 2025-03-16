import Link from 'next/link';
import React from 'react';
import { FaHome, FaPen } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const BasicSidebar = () => {
    const pathname = usePathname();

    const isActivePath = (path: string) => {
        return pathname === path;
    };

    const menuItems = [
        {
            path: '/dashboard',
            icon: <FaHome className="h-5 w-5" />,
            label: 'Overview'
        },
        {
            path: '/dashboard/posts',
            icon: <FaPen className="h-5 w-5" />,
            label: 'Posts'
        }
    ];

    return (
        <div className="w-64 min-h-screen bg-white border-r border-gray-200 px-3 py-4">
            <div className="mb-8">
                <h2 className="text-xl font-bold px-4 text-gray-800">Dashboard</h2>
            </div>
            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link 
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-150
                                    ${isActivePath(item.path)
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default BasicSidebar;