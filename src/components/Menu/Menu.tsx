import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <div>
                <a href=""><span>Free Sun Energy</span></a>
                <div>
                    <ul>
                        <li><Link href={"/"}> Home</Link></li>
                        <li><Link href={"/sobrenos"}>Sobre nós</Link></li>
                        <li><Link href={"/cadastro"}>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}