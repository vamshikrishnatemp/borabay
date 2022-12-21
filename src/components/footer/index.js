import Link from "next/link";
import Image from "next/image";

function Footer(props) {
    return (
        <div className="w-screen h-[150px] lg:h-[200px] lg:mt-6 flex flex-col justify-evenly items-center border-t border-borabayBrown lg:border-0">
            <div className="w-[90%] h-[60px] hidden lg:flex justify-center  gap-10 text-xl font-semibold text-borabayBrown border-b border-borabayBrown">
                <Link href='#home'><a>Home</a></Link>
                <Link href='#about-us'><a>About Us</a></Link>
                <Link href='#services'><a>Services</a></Link>
                <div className="h-[60px] w-[50px]">
                    <Image src={require('../../../public/icons/Logo.png')} width={60} height={50} alt='Logo' />
                </div>
                <Link href='#brand-sponsors'><a>Brand Sponsors</a></Link>
                <Link href='#find-us'><a>Find Us</a></Link>
            </div>
            <div className="border-b-2 border-borabayBrown"></div>
            <div className="w-full px-3 flex justify-center items-center gap-10">
                <Link href='#'>
                    <a>
                        <Image src={require('../../../public/footer-icons/facebook.png')} width={40} height={40} alt='facebook' />
                    </a>
                </Link>
                <Link href='https://instagram.com/borabaythesalon?igshid=Yzg5MTU1MDY='>
                    <a>
                        <Image src={require('../../../public/footer-icons/Instagram.png')} width={40} height={40} alt='Instagram' />
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <Image src={require('../../../public/footer-icons/twitter.png')} width={40} height={40} alt='twitter' />
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <Image src={require('../../../public/footer-icons/youtube.png')} width={40} height={40} alt='youtube' />
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <Image src={require('../../../public/footer-icons/pinterest.png')} width={40} height={40} alt='pinterest' />
                    </a>
                </Link>
            </div>
            <span className="text-borabayDarkBrown font-normal text-lg font-montserrat">{"@2022 Privacy — Terms"}</span>
        </div>
    );
}

export default Footer;