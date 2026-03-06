"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
}

export default function Nav({
  brand,
  navItems,
}: {
  brand: { img?: string; title: string };
  navItems: NavItem[];
}) {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="flex h-14 w-full items-center justify-between">
        {/* 브랜드 */}
        <Link href="/" className="flex items-center gap-2">
          {brand?.img ? (
            <img src={brand.img} className="h-6" alt="logo" />
          ) : (
            <span className="text-xl font-semibold">{brand.title}</span>
          )}
        </Link>

        {/* 데스크탑 메뉴 */}
        <NavigationMenu className="hidden md:flex w-29">
          <NavigationMenuList className="flex items-center gap-2">
            {navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.name} className=" h-14 flex items-center">
                {navItem.children && navItem.children.length ? (
                  <>
                    <NavigationMenuTrigger className="w-40 h-full flex justify-between items-center px-3 text-sm">
                      {navItem.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3 !w-40">
                      <div className="flex flex-col gap-1 w-full">
                        {navItem.children.map((child) => (
                          <Link
                            key={child.name}
                            href={`/docs${child.link}`}
                            className={`rounded px-2 py-1 w-full text-sm hover:bg-accent hover:text-accent-foreground ${
                              pathname === `/docs${child.link}`
                                ? "bg-accent text-accent-foreground"
                                : ""
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={`/docs${navItem.link}`}
                    className={`inline-flex h-full items-center px-3 text-sm ${
                      pathname === `/docs${navItem.link}`
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {navItem.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 모바일 메뉴 */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                ☰
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((navItem) => (
                  <div key={navItem.name}>
                    {navItem.children && navItem.children.length ? (
                      <details className="group">
                        <summary className="cursor-pointer text-sm font-medium py-2">
                          {navItem.name}
                        </summary>
                        <div className="ml-3 flex flex-col gap-2">
                          {navItem.children.map((child) => (
                            <Link
                              key={child.name}
                              href={`/docs${child.link}`}
                              className={`block text-sm py-1 ${
                                pathname === `/docs${child.link}`
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={`/docs${navItem.link}`}
                        className={`block text-sm py-2 ${
                          pathname === `/docs${navItem.link}`
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {navItem.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
