export default function Header() {
    return (
        <main className="header h-[95vh] flex flex-col items-right relative gap-5">
            <section className="flex items-center gap-4">
                <img src="https://github.com/TonyRodIv/portfolio/blob/main/public/pfpG.png?raw=true" className="rounded-full min-w-[3.75rem] w-[15vw] max-w-[4.6rem]" alt="" />
                <div>
                    <h3 className="textMedium">Antony Rodrigues</h3>
                    <div className="flex gap-2">
                        <a href="https://github.com/TonyRodIv"><img src="https://github.com/TonyRodIv/portfolio/blob/main/src/assets/icons/github.png?raw=true" alt=""  /></a>
                        <a href="https://www.linkedin.com/in/Tonyrodiv/"><img src="https://github.com/TonyRodIv/portfolio/blob/main/src/assets/icons/linkedin.png?raw=true" alt="" /></a>
                    </div>
                </div>
            </section>
            <main className="flex flex-col items-left gap-4">
                <h1 className="titleHead font-bold text-[#323232]">
                    Desenvolvo aplicações e transformo suas ideias em soluções digitais
                </h1>
                <p className="textSmall font-medium text-[#323232cc]">
                    In a quaint little town, nestled between rolling hills, there lived a curious cat named Whiskers. Every day Whiskers would embark on new adventures, exploring the vibrant gardens and meeting friendly neighbors. One sunny afternoon.
                </p>
                <a href="#contact"><button className="btnBig bg-aquaT rounded-full text-gray-50 textMedium">Contate-me</button></a>
            </main>
            {/* <img src="https://github.com/TonyRodIv/portfolio/blob/main/public/backgroundPLUS.png?raw=true" className="opacity-[40%] bottom-20 right-0 absolute" alt="" /> */}
        </main>
    )
}