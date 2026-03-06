import { COOKIE_NAME } from "@/utiles/constants";
import { getCookie } from "@/utiles/cookie";
import Link from "next/link";
import Nav from './Nav';

export const revalidate = 0
export default async function Navbar() {

  return (
    <div className="flex justify-center items-baseline py-1 px-6 border-b border-gray-400">
      <Nav />
    </div>
  )
}
