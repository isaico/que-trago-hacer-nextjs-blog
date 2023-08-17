import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ src, children }) => {
    const pathname = usePathname();
    return (
        <Link href={src} className={pathname == {src} ? 'active' : ''}>
            {children}
        </Link>
    );
};

export default NavLink;
