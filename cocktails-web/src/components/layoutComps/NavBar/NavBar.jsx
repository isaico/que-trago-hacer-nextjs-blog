'use client';
import React from 'react';
import { Navbar, Button, Dropdown } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavLink from '@/components/UiComps/NavLink';
import {
    categoryTragos,
    categoryPosts,
    categoryPreparacion,
} from '@/utils/paths';
const NavBar = () => {
    const pathname = usePathname();

    return (
        <Navbar fluid rounded className="bg-bg-white border-b border-gray-300">
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
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-grad-main">
                QTH-Blog
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

                <li className="p-2 pl-3 md:p-0  text-gray-700 border-gray-100 border-b md:border-none">
                    <Dropdown
                        label="Tragos"
                        inline
                        className="font-normal bg-gray-300 flex"
                    >
                        {categoryTragos.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 hover:text-primary hover:underline bg-gray-100"
                                key={item.key}
                            >
                                {item && (
                                    <NavLink
                                        src={item.path}
                                        category={item.category}
                                        id={item.id}
                                    >
                                        {item.text}
                                    </NavLink>
                                )}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>
                <li className="p-2 pl-3 md:p-0 text-gray-700 border-gray-100 border-b md:border-none">
                    <Dropdown label="Posts" inline className="font-normal">
                        {categoryPosts.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 hover:text-primary hover:underline"
                                key={item.key}
                            >
                                <NavLink
                                    src={item.path}
                                    category={item.category}
                                    id={item.id}
                                >
                                    {item.text}
                                </NavLink>
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>
                <li className="p-2 pl-3 md:p-0 text-gray-700 border-gray-100 border-b md:border-none">
                    <Dropdown
                        label="Preparacion"
                        inline
                        className="font-normal"
                    >
                        {categoryPreparacion.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 hover:text-primary hover:underline"
                                key={item.key}
                            >
                                <NavLink
                                    src={item.path}
                                    category={item.category}
                                    id={item.id}
                                >
                                    {item.text}
                                </NavLink>
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>

                <Link href="/blog">Blog</Link>
                <Link href="#">Contacto</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
