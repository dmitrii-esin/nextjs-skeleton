import React from "react";
import Link from "next/link";

export const Header: React.FC = () => (
    <div>
        <div>
            <Link href="/">
                <a>LOGO</a>
            </Link>
        </div>
        <menu>
            <ul>
                <li>
                    <Link href="/">
                        <a>Index page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a>Cart</a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts/1">
                        <a>Posts</a>
                    </Link>
                </li>
            </ul>
        </menu>
    </div>
);
