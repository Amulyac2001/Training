import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">All rights are reserved.</p>
                <nav className="flex space-x-4 mt-4 md:mt-0">
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                </nav>
            </div>
        </footer>
    )
}