import { NavLink, Outlet } from "react-router-dom";

import Container from "../components/common/Container";

const links = [
  { to: "/admin/products", label: "Products" },
  { to: "/admin/categories", label: "Categories" },
];

const AdminLayout = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-amber-600 text-white"
        : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
    }`;

  return (
    <Container className="grid gap-8 py-10 md:grid-cols-[220px_1fr]">
      <aside className="h-fit rounded-2xl bg-white p-4 shadow-sm">
        <p className="mb-4 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          Admin
        </p>

        <nav className="space-y-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="min-w-0">
        <Outlet />
      </section>
    </Container>
  );
};

export default AdminLayout;
