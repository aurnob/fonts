import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import Logo from './icons/logo'
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Upload', href: '/', current: false },
    { name: 'Font', href: '/font', current: false },
    { name: 'Create Group', href: '/create-group', current: false },
    { name: 'Font Group', href: '/font-group', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
    const location = useLocation();

    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            location.pathname === item.href
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                        aria-current={location.pathname === item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
};

export default NavBar;
