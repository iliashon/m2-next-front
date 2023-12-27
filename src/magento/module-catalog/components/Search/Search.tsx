"use client";

import Image from "next/image";
import searchIcon from "@/assets/icons/uil_search.svg";
import { useState } from "react";

export default function Search({}: {}) {
    const [search, setSearch] = useState<string>();

    return (
        <div className="flex h-9">
            <input
                onChange={(event) => setSearch(event.target.value)}
                type="text"
                placeholder="Search"
                className="bg-gray-200 w-96 rounded-s-lg p-4"
            />
            <span className="bg-gray-200 rounded-e-lg p-4 flex cursor-pointer justify-center items-center">
                <Image src={searchIcon} alt="Search" width={20} height={20} />
            </span>
        </div>
    );
}
