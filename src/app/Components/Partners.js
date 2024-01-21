import Image from "next/image";

const Partners = () => {
  const ourPartners = [
    {
      image: (
        <Image
          src="/Shell.jpg"
          width={90}
          height={50}
          alt="..."
          loading="lazy"
        />
      ),
    },
    {
      image: (
        <Image
          src="/HKS-Logo.png"
          width={90}
          height={50}
          alt="..."
          loading="lazy"
        />
      ),
    },
    {
      image: (
        <Image
          src="/tein.png"
          width={90}
          height={50}
          alt="..."
          loading="lazy"
        />
      ),
    },
    {
      image: (
        <Image src="/k&n.png" width={90} height={50} alt="..." loading="lazy" />
      ),
    },
    {
      image: (
        <Image src="/bbs.png" width={90} height={50} alt="..." loading="lazy" />
      ),
    },
    {
      image: (
        <Image
          src="/GReddy-Logo.png"
          width={90}
          height={50}
          alt="..."
          loading="lazy"
        />
      ),
    },
    {
      image: (
        <Image
          src="/WORK_WHEELS.png"
          width={90}
          height={40}
          alt="..."
          loading="lazy"
        />
      ),
    },
  ];
  return (
    <section className="p-8 bg-white text-gray-800">
      <div className="container p-6 mx-auto text-center">
        <h2 className="text-3xl font-bold">Partners</h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto text-gray-600">
        {ourPartners.map((logo, i) => (
          <div
            key={i}
            className="flex justify-center w-1/2 p-2 align-middle md:w-1/3 xl:w-1/4"
          >
            {logo.image}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
