import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ src, children }) => {
    const pathName = usePathname();
    return (
        <Link
            href={{
                pathname: src,
            }}
            className={`${
                pathName === src ? 'active' : ''
            } hover:text-primary hover:underline`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
