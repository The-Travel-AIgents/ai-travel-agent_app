import { Link } from "react-router-dom";
import logo from "./image/logo.png"

const Layout = (props) => (
  <>
  <div class="flex flex-col justify-between min-h-full">
    <header class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/">
                    <img alt="Logo" src={logo} className="h-10 w-auto" />
                </Link>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button" id="open-menu-btn" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link to="/app" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Try it out! </Link>
            </div>
            </div>
        </div>
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden" id="mobile-menu">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                <div>
                    <img class="h-8 w-auto" src={logo} alt="Workflow" />
                </div>
                <div class="-mr-2">
                    <button type="button" id="close-menu-btn" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            <div class="py-6 px-5 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                   <Link to="/app" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Try it out! </Link>
                </div>
            </div>
            </div>
        </div>
    </header>

    <main> 
        { props.children }
    </main>
  </div>

    <footer class="text-center py-5 bg-gray-800 px-3 w-full">
        <p class="text-sm text-gray-300 md:mt-0 md:order-1">
            &copy; 2023 Team Travel AIgent
        </p>
    </footer>
  </>
)

export default Layout;