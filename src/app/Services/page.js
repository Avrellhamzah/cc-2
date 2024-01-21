import Image from "next/image";

const Services = () => {
  const items = [
    {
      icon: <Image src="/gear.png" width={50} height={50} alt="" />,
      title: "Perawatan Rutin Kendaraan",
      desc: "Layanan perawatan berkala yang mencakup penggantian oli, filter udara, dan cek komponen penting lainnya untuk menjaga performa optimal kendaraan.",
    },
    {
      icon: <Image src="/piston.png" width={50} height={50} alt="" />,
      title: "Overhaul Mesin",
      desc: "Melakukan Upgrade pada mesin,melakukan pembersihan pada engine bay.",
    },
    {
      icon: <Image src="/laptop.jpg" width={50} height={50} alt="" />,
      title: "Remapping ECU",
      desc: "Remapping ECU atau pasang ECU baru pada mobil anda.",
    },
    {
      icon: <Image src="/test.svg" width={50} height={50} alt="" />,
      title: "Dyno Test",
      desc: "Menerima jasa Dyno untuk mengetahui berapa horsepower kendaraan anda.",
    },
    {
      icon: <Image src="/cars.png" width={50} height={50} alt="" />,
      title: "Body Repair and Detailing",
      desc: "Menerima pemasangan body kit atau perbaikan body part beserta detailing mobil anda.",
    },
    {
      icon: <Image src="/tire.png" width={50} height={50} alt="" />,
      title: "Spooring and Balencing",
      desc: "Pengecekan, penyetelan tekanan ban, rotasi, perbaikan, dan pemasangan ban atau suspensi baru untuk keamanan dan kinerja optimal saat berkendara.",
    },
  ];
  return (
    <section className="py-8 mx-4">
      <div className="max-w-screen-xl mx-auto sm:text-center bg-gray-300 m-4 pt-4 pb-4 rounded-lg">
        <div className="relative  mx-4">
          <div className="relative z-10">
            <h3 className="text-gray-900 text-3xl font-semibold sm:text-4xl">
              Make Your Dream Car Come True
            </h3>
          </div>
          <div></div>
          <div className="relative mt-12 text-left">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white space-y-3 p-4 border rounded-lg"
                >
                  <div className="text-cyan-700 py-2 text-xl">{item.icon}</div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
