import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <footer className="bg-white shadow-sm dark:bg-gray-800">
            <div className="p-4 md:flex md:items-center md:justify-between border-t-2 border-gray-200 dark:border-t-1 dark:border-gray-400">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.fromthehawkseye.com" target="_blank" className="hover:underline me-4 md:me-6">My website</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
