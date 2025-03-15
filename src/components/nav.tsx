export default function Nav() {
  return (
    <nav className="nav navAnywhere bg-cream/80 backdrop-blur-md">
      <div className='navTitle flex flex-row items-center gap-[10px]'>
        <article className='w-[4px] h-[22px] bg-aquaT rounded-[4px] font-onest'></article>
        TonyRodIv
      </div>
      <ul className="flex flex-row gap-8 items-center">
        <li className="flex items-center"><a className="text-lg" href="#about">Sobre</a></li>
        <li className="flex items-center"><a className="text-lg" href="#projects">Projetos</a></li>
        <article className='navIndicatorRight w-[4px] h-[22px] bg-aquaT rounded-[4px] font-onest'></article>
        <li className="flex items-center"><a href="#contact"><button className="bg-aquaT rounded-2xl py-1.5 px-8 text-gray-50 font-medium text-lg">Contate-me</button></a></li>
      </ul>
    </nav>
  );
}