import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ src, children, category }) => {
    const pathname = usePathname();
    return (
        <Link
            href={{
                pathname: src,
                query: { category:category },
            }}
            className={pathname == { src } ? 'active' : ''}
        >
            {children}
        </Link>
    );
};

export default NavLink;
