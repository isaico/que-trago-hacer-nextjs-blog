'use client';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';
import { FaGreaterThan } from 'react-icons/fa6';
export default function DefaultBreadcrumb({ category, title }) {
    const upperCategory = category[0].toUpperCase() + category.slice(1);
    return (
        <>
            <ul className="flex flex-wrap  gap-6 justify-start items-center text-gray-600 font-medium my-2">
                <li className="flex items-center">
                    <HiHome className="text-sm text-gray-500 mr-3" />
                    <Link
                        href="/"
                        className="text-sm font-normal underline hover:text-primary"
                    >
                        Inicio
                    </Link>
                </li>
                <li className="flex items-center">
                    <FaGreaterThan className="text-sm text-gray-500 mr-3" />
                    <Link
                        href="/blog"
                        className="text-sm font-normal underline hover:text-primary"
                    >
                        Blog
                    </Link>
                </li>
                <li className="flex items-center">
                    <FaGreaterThan className="text-sm text-gray-500 mr-3" />
                    <p className="text-sm font-normal">{upperCategory}</p>
                </li>
                <li className="flex items-center">
                    <FaGreaterThan className="text-sm text-gray-500 mr-3" />
                    <p className="text-sm font-normal">{title}</p>
                </li>
            </ul>
        </>
        // <Breadcrumb aria-label="Default breadcrumb example">
        //     <Breadcrumb.Item icon={HiHome}>
        //         <Link href="/" className="text-sm font-normal underline hover:text-primary">
        //             Inicio
        //         </Link>
        //     </Breadcrumb.Item>
        //     <Breadcrumb.Item>
        //         <Link href="/blog" className="text-sm font-normal underline hover:text-primary">
        //             Blog
        //         </Link>
        //     </Breadcrumb.Item>
        //     <Breadcrumb.Item>
        //         <p className="text-sm font-normal">{upperCategory}</p>
        //     </Breadcrumb.Item>
        //     <Breadcrumb.Item>
        //         <p className="text-sm font-normal">{title}</p>
        //     </Breadcrumb.Item>
        // </Breadcrumb>
    );
}
