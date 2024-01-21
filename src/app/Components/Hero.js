import Link from "next/link";
const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-back-ground bg-center bg-gray-400 bg-blend-multiply">
      <div className="px-4 py-28 md:py-36 lg:py-40 mx-auto text-center max-w-screen-xl ">
        <h1 className="mb-4 text-4xl md:text-6lg xl:text-7xl font-extrabold tracking-wide leading-none text-gray-100">
          Welcome to <br /> <span>SPEEDSURGE GARAGE</span>
        </h1>
        <p className="mb-8 text-base md:text-lg xl:text-xl text-neutral-300">
          NUMBER #1 PERFORMANCE SHOP IN TOWN.
        </p>
        <Link href="/Services">
          <button
            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Go Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
