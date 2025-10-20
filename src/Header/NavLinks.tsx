import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        {name: "Find Job", url: "/find-job"},
        {name: "Find Talent", url: "/find-talent"},
        {name: "Upload Job", url: "/upload-job"},
        {name: "About", url: "/about"},
    ]

    const location = useLocation();
    return (
        <div className="flex items-center gap-4 h-full text-mine-shaft-300">
          {links.map((link, index) => (
              <div className={`${location.pathname === link.url ? "border-t-[3px]" : ""} h-full flex items-center`}>
                  <Link to={link.url} key={index}>{link.name}</Link>
                </div>
          ))}
        </div>
    )
}

export default NavLinks;