import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const navItems = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About', path: '/about' },
        { id: 3, label: 'Services', path: '/services' },
        { id: 4, label: 'Pricing', path: '/pricing' },
        { id: 5, label: 'Contact Us', path: '/contact-us' },

    ]
    return (
        <nav className="bg-secondary px-10 flex justify-between items-center h-18">
            <Image src="/images/logo.webp" alt="logo" width={40} height={40} />

            <div className="flex gap-10">
                {navItems.map((item) => (
                    <Link key={item.id} href={item.path} >
                        <p className="text-white hover:text-text-secondary">
                            {item.label}
                        </p>
                    </Link>
                ))}
            </div>

            <div>

            </div>
        </nav>
    )
}