import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ src, children, category, id }) => {
    const pathname = usePathname();
    return (
        <Link
            href={{
                pathname: src,
                // query: { category: category, id: id },
            }}
            className={`${pathname ===  src ? 'active' : ''} hover:text-primary hover:underline`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
