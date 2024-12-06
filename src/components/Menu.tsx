"use client";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import CartIcon from "./CartIcon";

const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/working-hours"},
    {id: 4, title: "Contact", url: "/contact"},
]

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const user = false;
    return (
        <div>
            {open ?
                <Image src="/close.png" alt="menu photo" width={20} height={20} onClick={() => setOpen(false)} className="cursor-pointer" />
                :
                <Image src="/open.png" alt="menu photo" width={20} height={20} onClick={() => setOpen(true)} className="cursor-pointer" />
            }
            {open && <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 text-2xl z-10">
                {links.map((link) => <Link key={link.id} href={link.url} onClick={() => setOpen(false)}>{link.title}</Link>)}
                {user ?
                    <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
                :
                    <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                }
                <Link href="/cart" onClick={() => setOpen(false)}>
                    <CartIcon />
                </Link>
            </div>}
        </div>
    )
}

export default Menu