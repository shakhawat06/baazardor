"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Navbar from "./Navbar";
import { useSession, signOut } from "@/lib/auth-client";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Header = ({ categories }) => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in"); // redirect to login page
        },
      },
    });
    toast.success('সাইন আউট সম্পন্ন হয়েছে')
  };

  return (
    <div>
      <nav className="bg-slate-100 sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
        <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Link href="/">
              <div className="flex items-center gap-3">
                <div className=" bg-[#0D8840] text-white px-3 py-2 rounded-xl">
                <span className="text-white text-2xl">🛒</span>
                </div>
                <div className="">
                  <h2 className="text-2xl font-bold">বাজার দর</h2>
                  <p>{date}</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {session?.user ? (
              <>
                <div className="dropdown dropdown-bottom dropdown-center">
                  <div tabIndex={0} role="button" className="">
                    <div className="flex items-center gap-3 cursor-pointer border px-2 py-1 border-gray-300 rounded-md">
                      <div className="bg-[#0D8840] px-3 py-1 text-white rounded">
                        {session?.user.name.slice(0, 1).toUpperCase()}
                      </div>
                      <div className="flex items-center gap-3">
                        {session?.user.name}
                        <IoIosArrowDown className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-2xl z-1 w-70 p-2 shadow-sm"
                  >
                    <div className="px-2 py-3">
                      <p className="text-xl">{session?.user.name}</p>
                      <p className="text-xs text-neutral-500">
                        {session?.user.email}
                      </p>
                    </div>
                    <li>
                      <Link href="/profile">👤 আমার প্রোফাইল</Link>
                    </li>
                    <li>
                      <span
                        onClick={handleSignOut}
                        className="text-rose-600 hover:bg-transparent"
                      >
                        ↩ সাইন আউট
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link href="/sign-in">সাইন ইন</Link>
                <Link href="/sign-up">
                  <Button className="bg-[#0D8840] shadow-md shadow-[#0D8840]">
                    সাইন আপ
                  </Button>
                </Link>
              </>
            )}
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li className="mt-4 flex flex-col gap-2">
                {session?.user ? (
                  <>
                    <div className="dropdown dropdown-bottom dropdown-center">
                      <div tabIndex={0} role="button" className="">
                        <div className="flex items-center gap-3 w-50 cursor-pointer border px-2 py-1 border-gray-300 rounded-md">
                          <div className="bg-[#0D8840] px-3 py-1 text-white rounded">
                            {session?.user.name.slice(0, 1).toUpperCase()}
                          </div>
                          <div className="flex items-center gap-3">
                            {session?.user.name}
                            <IoIosArrowDown className="text-gray-500" />
                          </div>
                        </div>
                      </div>
                      <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-base-100 rounded-2xl z-1 w-70 p-2 shadow-sm"
                      >
                        <div className="px-2 py-3">
                          <p className="text-xl">{session?.user.name}</p>
                          <p className="text-xs text-neutral-500">
                            {session?.user.email}
                          </p>
                        </div>
                        <li>
                          <Link href="/profile">👤 আমার প্রোফাইল</Link>
                        </li>
                        <li>
                          <span
                            onClick={handleSignOut}
                            className="text-rose-600 hover:bg-transparent"
                          >
                            ↩ সাইন আউট
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <Link href="/sign-in">সাইন ইন</Link>
                    <Link href="/sign-up">
                      <Button className="bg-[#0D8840] shadow-md shadow-[#0D8840]">
                        সাইন আপ
                      </Button>
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        )}

        <div className="border-t  border-gray-300">
          <Navbar categories={categories} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
