import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink: React.FC = ({ path, children }) => {
  
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link className={`nav-link ${active ? "text-info" : ""} `} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
