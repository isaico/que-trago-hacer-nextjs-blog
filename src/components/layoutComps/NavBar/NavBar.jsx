'use client';
import React from 'react';
import { Navbar, Dropdown } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavLink from '@/components/UiComps/NavLink';
import {
    categoryTragos,
    categoryPosts,
    categoryPreparacion,
} from '@/utils/paths';
import Image from 'next/image';
const NavBar = () => {
    const pathname = usePathname();
    return (
        <Navbar
            fluid
            rounded
            className="bg-bg-white border-b  border-gray-200 fixed w-full z-50 py-2 "
        >
            <Link href="/">
                <Image
                    alt="que trago hacer? logo"
                    className="mr-3 w-auto h-auto"
                    src="https://res.cloudinary.com/dzyllqqxi/image/upload/v1694796731/que-trago-hacer-low-resolution-logo-color-on-transparent-background_1_duda3u.png"
                    height={20}
                    width={150}
                />
            </Link>

            <div className="flex md:order-2">
                {/* <Link href="/app">
                    <Button
                        pill
                        className="font-semibold mr-2 group"
                        gradientDuoTone="purpleToPink"
                        outline
                        // className=""
                    >
                        <p className="group-hover:text-white">Usar Buscador</p>
                    </Button>
                </Link> */}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className=" text-gray-900 ">
                <li>
                    <Link
                        href="/"
                        className={`${
                            pathname == '/' ? 'active' : ''
                        } text-lg font-normal`}
                    >
                        Inicio
                    </Link>
                </li>

                <li className="p-2 pl-3 md:p-0  border-gray-100 border-b md:border-none text-lg font-normal">
                    <Dropdown
                        label="Tragos"
                        inline
                        onClick={() => (placement = 'top')}
                    >
                        {categoryTragos.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 text-base hover:cursor-default"
                                key={item.key}
                            >
                                {item && (
                                    <NavLink
                                        src={item.path}
                                        pilar={item.pilar ? item.pilar : null}
                                    >
                                        {item.text}
                                    </NavLink>
                                )}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>
                <li className="p-2 pl-3 md:p-0  border-gray-100 border-b md:border-none text-lg font-normal">
                    <Dropdown label="Posts" inline className="font-normal">
                        {categoryPosts.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 text-base hover:cursor-default"
                                key={item.key}
                            >
                                {item && (
                                    <NavLink src={item.path}>
                                        {item.text}
                                    </NavLink>
                                )}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>
                <li className="p-2 pl-3 md:p-0  border-gray-100 border-b md:border-none text-lg font-normal">
                    <Dropdown
                        label="Preparacion"
                        inline
                        className="font-normal "
                    >
                        {categoryPreparacion.map((item) => (
                            <Dropdown.Item
                                className="px-6 py-3 text-base hover:cursor-default "
                                key={item.key}
                            >
                                <NavLink src={item.path}>{item.text}</NavLink>
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </li>

                <li>
                    <Link
                        href="/blog"
                        className={`${
                            pathname == '/blog' ? 'active' : ''
                        } text-lg font-normal`}
                        prefetch={false}
                    >
                        Ver todos los posts
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contacto"
                        className={`${
                            pathname == '/contacto' ? 'active' : ''
                        } text-lg font-normal`}
                        prefetch={false}
                    >
                        Contacto
                    </Link>
                </li>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
