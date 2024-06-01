import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaTasks, FaHistory } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const links = [
  {
    icon: <FaHome />,
    href: '/main/home',
  },
  {
    icon: <FaTasks />,
    href: '/main/task',
  },
  {
    icon: <FaHistory />,
    href: '/main/history',
  },
  {
    icon: <IoMdSettings />,
    href: '/main/setting',
  },
];

const SideNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="text-3xl">
      <ul>
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          let className = 'p-2 transition-all cursor-pointer';

          if (isActive) {
            className += ' border-l-white border-l-2 text-white hover:none';
          } else {
            className += ' hover:text-white hover:scale-110';
          }

          return (
            <Link href={link.href}>
              <li key={link.href} className={className}>
                {link.icon}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNavbar;
