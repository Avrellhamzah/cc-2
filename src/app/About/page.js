import Image from "next/image";
import Timeline from "../Components/Timeline";
import Partners from "../Components/Partners";

const About = () => {
  return (
    <>
      <div className="bg-white py-12 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-screen-md px-4 md:px-4">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6">
            HOBBY MENJADI SUMBER PENGHASILAN
          </h1>
          <p className="mb-6 text-gray-600 sm:text-lg md:mb-8 text-justify">
            Selamat datang di SPEEDSURGE GARAGE, destinasi utama bagi para
            penggemar mobil yang menginginkan kinerja yang luar biasa. Sebagai
            perintis dalam dunia modifikasi otomotif, kami berkomitmen
            memberikan pengalaman pelayanan terbaik dan meningkatkan performa
            kendaraan Anda ke level berikutnya.
          </p>
          <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl md:mb-4">
            OUR COMMITMENT
          </h2>
          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8 text-justify">
            Kami berkomitmen untuk menjadi mitra terpercaya bagi para penggemar
            mobil yang menginginkan lebih dari sekadar berkendara. Dengan
            perpaduan antara keahlian teknis, inovasi, dan pelayanan pelanggan
            yang luar biasa, SPEEDSURGE GARAGE siap membantu Anda menghadirkan
            pengalaman berkendara yang tak terlupakan.
          </p>

          <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <Image
              src="/back.jpeg"
              width={500}
              height={500}
              alt="Picture of Garage"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h2></h2>
          <p></p>
        </div>
      </div>
      <Timeline />
      <Partners />
    </>
  );
};

export default About;
