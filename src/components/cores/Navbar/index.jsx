import React from "react";
import Image from "next/image";
import Link from "next/link";


// Icons
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-10 py-3 lg:px-20 lg:py-5">
      {/* NAVBAR START */}
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/07/logo_semestamandiri.svg"
            width={225}
            height={100}
            alt="Logo Semesta Mandiri"
          />
        </Link>
      </div>
      {/* NAVBAR CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-7">
          <li>
            <a
              href="/"
              className="font-bold hover:underline underline-offset-8">
              HOME
            </a>
          </li>
          <li>
            <a href="/about-us" className="font-bold hover:underline underline-offset-8">
              ABOUT US
            </a>
          </li>
          <li>
            <div className="dropdown dropdown-bottom dropdown-hover">
              <div className="font-bold hover:underline underline-offset-8">
                <a href="/our-services">
                OUR SERVICES ˅
                </a>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="font-bold">NEON BOX</a>
                </li>
                <li>
                  <a className="font-bold">LETTER SIGN</a>
                </li>
                <li>
                  <a className="font-bold">VIDEOTRON</a>
                </li>
                <li>
                  <a className="font-bold">BILLBOARD</a>
                </li>
                <li>
                  <a className="font-bold">SPANDUK</a>
                </li>
                <li>
                  <a className="font-bold">UMBUL-UMBUL</a>
                </li>
                <li>
                  <a className="font-bold">BALIHO</a>
                </li>
                <li>
                  <a className="font-bold">DIGITAL PRINTING</a>
                </li>
                <li>
                  <a className="font-bold">PYLON SIGN</a>
                </li>
                <li>
                  <a className="font-bold">POLE SIGN</a>
                </li>
                <li>
                  <a className="font-bold">CUTTING ACRYLIC</a>
                </li>
                <li>
                  <a className="font-bold">PERIZINAN REKLAME</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/our-teams" className="font-bold hover:underline underline-offset-8">
              OUR TEAMS
            </a>
          </li>
          <li>
            <a className="font-bold hover:underline underline-offset-8">BLOG</a>
          </li>
          <li>
            <a className="font-bold hover:underline underline-offset-8">
              CONTACT US
            </a>
          </li>
          <div className="dropdown dropdown-end dropdown-bottom dropdown-hover px-5">
            <FaSearch size={16} />
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <div className="h-10 flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-l-full"
                  />
                  <FaSearch />
                </div>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      {/* NAVBAR END */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            MENU
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] shadow bg-base-100 w-[100vh]">
            <li>
              <a href="/">HOME</a>
            </li>
            <hr />
            <li>
              <a href="/about-us">ABOUT US</a>
            </li>
            <hr />
            <li>
              <a href="/our-services">OUR SERVICES</a>
              <ul className="">
                <li>
                  <a>NEON BOX</a>
                </li>
                <li>
                  <a>LETTER SIGN</a>
                </li>
                <li>
                  <a>VIDEOTRON</a>
                </li>
                <li>
                  <a>BILLBOARD</a>
                </li>
                <li>
                  <a>SPANDUK</a>
                </li>
                <li>
                  <a>UMBUL-UMBUL</a>
                </li>
                <li>
                  <a>BALIHO</a>
                </li>
                <li>
                  <a>DIGITAL PRINTING</a>
                </li>
                <li>
                  <a>PYLON SIGN</a>
                </li>
                <li>
                  <a>POLE SIGN</a>
                </li>
                <li>
                  <a>CUTTING ACRYLIC</a>
                </li>
                <li>
                  <a>PERIZINAN REKLAME</a>
                </li>
              </ul>
            </li>
            <hr />
            <li>
              <a href="/our-teams">OUR TEAMS</a>
            </li>
            <hr />
            <li>
              <a>BLOG</a>
            </li>
            <hr />
            <li>
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
