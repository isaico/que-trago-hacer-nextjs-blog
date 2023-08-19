'use client';
import React from 'react';
import { Navbar, Button, Dropdown } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavLink from '@/components/UiComps/NavLink';
const NavBar = () => {
    const pathname = usePathname();
    const tragosRoutes = [
        {
            path: '/tragos/ron',
            text: 'Tragos con Ron',
            key: 1,
        },
        {
            path: '/tragos/vodka',
            text: 'Tragos con Vodka',
            key: 2,
        },
        {
            path: '/tragos/gin',
            text: 'Tragos con Gin',
            key: 3,
        },
        {
            path: '/tragos/jaggermeister',
            text: 'Tragos con Jagger',
            key: 4,
        },
    ];
    const blogRoutes = [
        {
            path: '/blog/10-tragos-pocos-ingredientes',
            text: 'Top 10 tragos con pocos ingredientes',
            key: 101,
            category: 'blog-1',
        },
        {
            path: '/blog/cocteles-cualquier-ocasion',
            text: 'Cocktails para cualquier ocasion',
            key: 100,
            category: 'blog-2',
        },
    ];
    return (
        <Navbar fluid rounded className="bg-bg-white ">
            {/* <Navbar.Brand href="https://flowbite-react.com">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span>
                </Navbar.Brand> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                QTH -Blog
            </span>
            <div className="flex md:order-2">
                <Link href="/app">
                    <Button
                        pill
                        className="font-semibold mr-2 group"
                        gradientDuoTone="purpleToPink"
                        outline
                        // className=""
                    >
                        <p className="group-hover:text-white">Usar Buscador</p>
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="font-semibold">
                <Link href="/" className={pathname == '/' ? 'active' : ''}>
                    Inicio
                </Link>

                <li className="p-2 pl-3 md:p-0 text-gray-700 border-gray-100 border-b md:border-none">
                    <Dropdown label="Tragos" inline className="font-normal">
                        {tragosRoutes.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 hover:text-primary"
                                key={item.key}
                            >
                                {item.category && (
                                    <NavLink
                                        src={item.path}
                                        category={item.category}
                                    >
                                        {item.text}
                                    </NavLink>
                                )}
                                {!item.category && (
                                    <NavLink src={item.path}>
                                        {item.text}
                                    </NavLink>
                                )}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>
                <li className="p-2 pl-3 md:p-0 text-gray-700 border-gray-100 border-b md:border-none">
                    <Dropdown label="Blog" inline className="font-normal">
                        {blogRoutes.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 hover:text-primary"
                                key={item.key}
                            >
                                <NavLink
                                    src={item.path}
                                    category={item.category}
                                >
                                    {item.text}
                                </NavLink>
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>

                <Link href="#">Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
