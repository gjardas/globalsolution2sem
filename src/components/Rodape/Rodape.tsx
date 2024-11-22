import Image from "next/image";
import insta from "@/img/insta.png"
import facebook from "@/img/facebook.png"
import tiktok from "@/img/tiktok.png"

export default function Rodape(){
    return(
        <footer>
            <h2>Rodapé</h2>
            <div>
                <Image src={insta} alt="Instagram logo"/>
                <Image src={facebook} alt="Facebook logo"/>
                <Image src={tiktok} alt="Tiktok logo"/>
            </div>
        </footer>
    )
}