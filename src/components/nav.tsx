export default function Nav() {
  return (
    <nav className="fixed w-[80%] h-[60px] top-5 left-1/2 -translate-x-1/2
    bg-cream/80 backdrop-blur-sm flex justify-between items-center rounded-2xl px-4 shadow-[2px_6px_100px_0px_rgba(152,152,152,0.25)]">
        <div className='flex flex-row items-center gap-[10px]'>
          <article className='w-[4px] h-[22px] bg-aquaT rounded-[4px]'></article>
          Portfólio
        </div>
        <ul className="flex flex-row gap-8">
            <li className="flex items-center"><a className="text-lg" href="#about">Sobre</a></li>
            <li className="flex items-center"><a className="text-lg" href="#projects">Projetos</a></li>
            <li className="flex items-center"><a href="#contact"><button className="bg-aquaT rounded-2xl py-1.5 px-8 text-gray-50 font-medium text-lg
">Contate-me</button></a></li>
        </ul>
    </nav>
  );
}
