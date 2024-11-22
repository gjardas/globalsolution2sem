import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <div>
                <a href=""><span>Free Sun Energy</span></a>
                <div>
                    <ul>
                        <li><Link href={"/desconto"}> Home</Link></li>
                        <li><Link href={"/"}>Sobre nós</Link></li>
                        <li><Link href={"/login"}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}