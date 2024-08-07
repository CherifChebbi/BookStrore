import React from 'react'
import Link from "next/link";
import {
    Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle,
    Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup
} from "flowbite-react";

export function DefaultHeader() {
    return (
        <Navbar >
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ChebbiStore</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="/About">
                    About
                </NavbarLink>
                <NavbarLink as={Link} href="/">Services</NavbarLink>
                <NavbarLink as={Link} href="/">Pricing</NavbarLink>
                <NavbarLink as={Link} href="/">Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
    );
}


export function DefaultFooter() {
    return (
        <Footer container className='rounded-none'>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterBrand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="ChebbiStore"
                    />
                    <FooterLinkGroup>
                        <FooterLink as={Link} href="/About">About</FooterLink>
                        <FooterLink href="">Privacy Policy</FooterLink>
                        <FooterLink href="#">Licensing</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </FooterLinkGroup>
                </div>
                <FooterDivider />
                <FooterCopyright href="#" by="ChebbiStore" year={2024} />
            </div>
        </Footer>
    );
}

