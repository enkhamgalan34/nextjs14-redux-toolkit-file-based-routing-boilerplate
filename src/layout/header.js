import { useGetMenusQuery } from "@/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const { data: menusData, isLoading: menusLoading } = useGetMenusQuery();
    const [menu, setMenu] = useState();

    useEffect(() => {
        if (menusData) {
            let filteredMenus = menusData?.data?.filter((menu) => {
                return menu.parentSeq === 0 && menu.showYn === "Y";
            });

            setMenu(filteredMenus);
        }
    }, [menusData]);

    console.log("menu", menu);

    return (
        <nav className="w-full h-16 z-10 bg-[rgba(0,0,0,0.2)] backdrop-blur-md sticky top-0 px-3">
            <div className="container mx-auto h-full">
                <div className="header-left-wrap h-full flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-2xl text-slate-50 font-bold "
                    >
                        ReHub
                    </Link>

                    <ul className="flex gap-3">
                        {menu?.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link
                                        href={item.menuUrl}
                                        className="text-white text-xl"
                                    >
                                        {item.menuName}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="header-left-wrap"></div>
            </div>
        </nav>
    );
}
