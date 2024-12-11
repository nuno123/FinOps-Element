import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="...">
      {/* ... outros itens ... */}
      <Link href="/cost-allocation" className="...">
        Cost Allocation
      </Link>
      {/* ... outros itens ... */}
    </nav>
  );
} 