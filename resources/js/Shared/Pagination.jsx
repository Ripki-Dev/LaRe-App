import React from "react";

import { Link } from "@inertiajs/inertia-react";

export default function Pagination({links, align}) {

    return (
        <>
            <nav>
                <ul className={`pagination justify-content-${align} mb-0`}>
                    {links.map((link, index) => (
                        <li className={`page-item ${link.url == null} ? 'disable' : '' ${link.active ? 'active' : ''}`} key={index}>
                            <link className="page-link" href={link.url === nul ? '#' : link.url} dangerouslySetInnerHTML={{ __html: link.label }}>
                            </link> 
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
    
}