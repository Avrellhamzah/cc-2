import { FaCogs, FaStore } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdCarRepair } from "react-icons/md";
import { AiFillSliders } from "react-icons/ai";

const Layanan = () => {
  const itemsLayanan = [
    {
      icon: <AiFillSliders />,
      produk: "Remapping ECU",
      desk: "Remamping with the new technology and Professional Enginner.",
    },
    {
      icon: <MdCarRepair />,
      produk: "Dyno Test",
      desk: "Lets see how much HP your car have.",
    },
    {
      icon: <MdCarRepair />,
      produk: "Spooring and Balencing",
      desk: "Kami memberikan layanan perawatan ban, termasuk pengecekan tekanan udara, penyetelan keseimbangan, serta pemeriksaan dan perbaikan pada kondisi ban.",
    },
    {
      icon: <GiCardboardBoxClosed />,
      produk: "Ordering Imported Part",
      desk: "Menyadiakan jasa import barang dari luar negara.",
    },
    {
      icon: <FaCogs />,
      produk: "Maintenance",
      desk: "Kami menyediakan layanan pengecekan rutin serta perawatan berkala untuk memastikan kendaraan Anda berfungsi optimal.",
    },
    {
      icon: <FaStore />,
      produk: "Offline Store",
      desk: "Silahkan mampir ke toko offline kami.",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Layanan Pemeliharaan Kendaraan dengan Presisi
          </h3>
        </div>

        <div className="grid gap-y-2 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {itemsLayanan.map((item, index) => (
            <div key={index}>
              <div className="space-y-2 mt-12">
                <div className="w-12 h-12 mx-auto bg-gray-200 text-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.produk}
                </h4>
                <p>{item.desk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
