import { RiChatCheckLine } from "react-icons/ri";
import { PiPhonePlus } from "react-icons/pi";
import { FaRegCalendarCheck, FaAward } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <div className="h-[1255px] lg:h-[520px] flex flex-col justify-center items-center">
      <div className="max-w-[600px] lg:max-w-[800px] text-center">
        <h1 className="text-4xl font-bold">Mengapa Memilih Layanan Jasa</h1>
        <h1 className="text-4xl font-bold">PT Semesta Mandiri Advertising</h1>
        <h1 className="text-xl text-orange-500 font-bold">___________</h1>
        <br />
      </div>
      <br />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-5">
        <div className="flex flex-col justify-center items-center w-[600px] lg:w-[305px]">
          <div className="bg-orange-500 w-[83px] h-[83px] rounded-full flex justify-center items-center hover:w-[75px] hover:h-[75px]">
            <RiChatCheckLine
              color="white"
              size={50}
              className="hover:w-[45px] hover:h-[45px]"
            />
          </div>
          <h2 className="text-xl text-blue-900 font-semibold py-4 hover:text-orange-500">
            Respon Cepat
          </h2>
          <p className="text-[15px] text-center text-gray-500">
            Kami sangat menghargai waktu Anda. Oleh karena itu, kami berupaya
            agar segala informasi bisa Anda dapatkan secara cepat.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[600px] lg:w-[305px]">
          <div className="bg-orange-500 w-[83px] h-[83px] rounded-full flex justify-center items-center hover:w-[75px] hover:h-[75px]">
            <PiPhonePlus
              color="white"
              size={50}
              className="hover:w-[45px] hover:h-[45px]"
            />
          </div>
          <h2 className="text-xl text-blue-900 font-semibold py-4 hover:text-orange-500">
            Konsultasi Gratis
          </h2>
          <p className="text-[15px] text-center text-gray-500">
            Gratis konsultasi untuk desain, bahan, durasi pengerjaan, titik
            pemasangan, berbagai hal seputar advertising, dan percetakan.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[600px] lg:w-[305px]">
          <div className="bg-orange-500 w-[83px] h-[83px] rounded-full flex justify-center items-center hover:w-[75px] hover:h-[75px]">
            <FaRegCalendarCheck
              color="white"
              size={50}
              className="hover:w-[45px] hover:h-[45px]"
            />
          </div>
          <h2 className="text-xl text-blue-900 font-semibold py-4 hover:text-orange-500">
            Jaminan Tepat Waktu
          </h2>
          <p className="text-[15px] text-center text-gray-500">
            Dengan team yang profesional dan berpengalaman, kami yakin dapat
            melakukan pekerjaan sesuai dengan waktu yang telah disepakati.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[600px] lg:w-[305px]">
          <div className="bg-orange-500 w-[83px] h-[83px] rounded-full flex justify-center items-center hover:w-[75px] hover:h-[75px]">
            <FaAward
              color="white"
              size={50}
              className="hover:w-[45px] hover:h-[45px]"
            />
          </div>
          <h2 className="text-xl text-blue-900 font-semibold py-4 hover:text-orange-500">
            Garansi Pekerjaan
          </h2>
          <p className="text-[15px] text-center text-gray-500">
            Kami menerapkan Ceklist Standar Kualitas (Quality Control) secara
            rutin pada setiap item pekerjaan demi menjaga kepuasan pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
