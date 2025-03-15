export default function Header() {
    return (
        <main className="header h-[90vh] flex flex-col justify-center items-center relative">
            <section>
                {/* <img src="" alt="" /> */}
                <div>
                    <h3>Antony Rodrigues</h3>
                    <div>
                        {/* <a href="http://"><img src="" alt="" srcset="" /></a> */}
                        {/* <a href="http://"><img src="" alt="" srcset="" /></a> */}
                    </div>
                </div>
            </section>
            <main className="flex flex-col items-left gap-4">
                <h1 className="titleHead font-bold text-[#323232]">
                    Desenvolvo aplicações e transformo suas ideias em soluções digitais
                </h1>
                <p className="textHead font-medium text-[#323232cc] text-[22px] leading-normal">
                    In a quaint little town, nestled between rolling hills, there lived a curious cat named Whiskers. Every day Whiskers would embark on new adventures, exploring the vibrant gardens and meeting friendly neighbors. One sunny afternoon.
                </p>
                <li className="flex items-center"><a href="#contact"><button className="bg-aquaT rounded-2xl py-1.5 px-8 text-gray-50 font-medium text-lg">Contate-me</button></a></li>
            </main>
            <img src="/backgroundPLUS.png" className="bottom-20 -right-20 absolute" alt="" />
        </main>
    )
}