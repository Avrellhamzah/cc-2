import Image from "next/image";

const Testimoni = () => {
  return (
    <div className="bg-gray-100 py-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          WHAT OTHER SAYS ABOUT US
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              "Saya awalnya skeptis tentang melakukan modifikasi pada mobil
              saya, tetapi setelah mengunjungi performance shop ini, saya sangat
              senang dengan hasilnya. Mereka tidak hanya memberikan peningkatan
              performa, tetapi juga menjelaskan semua perubahan yang dilakukan
              dengan detail."
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image
                  src="/user.jpg"
                  width={100}
                  height={100}
                  alt="user photo"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-gray-900 sm:text-left md:text-base">
                  Mas vin
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Customers
                </p>
              </div>
            </div>
          </div>
          {/* Quote End */}

          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              "Performance shop ini benar-benar profesional dan berkualitas.
              Mereka memahami kebutuhan pelanggan dan memberikan solusi yang
              sesuai. Setelah meningkatkan suspensi dan sistem knalpot, mobil
              saya terasa seperti baru."
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image
                  src="/user2.jpg"
                  width={100}
                  height={100}
                  alt="user photo"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-gray-900 sm:text-left md:text-base">
                  Mas Jason
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Customers
                </p>
              </div>
            </div>
          </div>
          {/* Quote End */}

          {/* Quote Start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              "Bengkel ini benar-benar tahu apa yang mereka lakukan. Setelah
              mengunjungi performance shop ini, mobil saya menjadi lebih
              responsif dan memiliki tenaga lebih. Prosesnya cepat dan
              profesional. Sangat merekomendasikan!"
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shadow-xl md:h-14 md:w-14">
                <Image
                  src="/user3.jpg"
                  width={100}
                  height={100}
                  alt="user photo"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-gray-900 sm:text-left md:text-base">
                  Mba Megan
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Customers
                </p>
              </div>
            </div>
          </div>
          {/* Quote End */}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
