'use client';
import Link from 'next/link';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
export default function DefaultBreadcrumb({ category, title }) {
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>
                <Link href="/" className="text-sm font-normal hover:underline">
                    Inicio
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link href="/blog" className="text-sm font-normal hover:underline">
                    Blog
                </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <p className="text-sm font-normal">{category}</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <p className="text-sm font-normal">{title}</p>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}
