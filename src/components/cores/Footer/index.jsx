import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div
        className="hero h-[400px] lg:h-[400px]"
        style={{
          backgroundImage:
            "url(https://images.tokopedia.net/img/KRMmCm/2023/8/14/e8c6c57f-c8e3-4286-aa99-b1795e617190.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mt-20 text-white text-2xl lg:text-2xl font-bold">
              24/7 Aktif Support Team
            </h2>
            <h1 className="text-center text-white mt-7 text-4xl font-bold">
              Punya Project Atau Bisnis Yang Ingin Diiklankan?
            </h1>
            <h1 className="text-white mt-7 text-xl">
              Mari diskusikan dengan Admin kami.
            </h1>
            <button className="mt-7 btn bg-yellow-300 border-none font-bold rounded-none w-[200px] hover:bg-orange-500 hover:text-white">
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <div className="font-semibold text-lg">Hubungi Kami</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-end items-center px-6 lg:px-[75px] py-5 lg:h-[1075px]">
        <div className="flex gap-14">
          <div className=" lg:w-[780px]">
            <Image
              src="https://semestaadvertising.id/wp-content/uploads/2022/08/logo_semestamandiri_dark.svg"
              width={1000}
              height={1000}
              alt="Icon"
            />
          </div>
          <div className="text-white">
            <b>PT. SEMESTA MANDIRI ADVERTISING </b>
            melayani jasa pembuatan Neon Box, Huruf Timbul, Letter Sign, Neon
            Sign, Signage Akrilik, Billboard, Signboard, Pole Sign, Pylon Sign,
            Videotron. Selain itu Semesta Mandiri Advertising juga melayani jasa
            pasang Umbul-Umbul, T-Banner, Spanduk, Baliho, Billboard dan materi
            promosi lainnya berikut dengan perizinan nya.
          </div>
        </div>
        <div className="mt-8 bg-gray-800 rounded-lg flex items-center justify-between px-9 w-full h-[137px]">
          <div className="text-3xl text-white font-semibold">
            Dapatkan Harga Penawaran Khusus.
          </div>
          <button className="btn btn-wide btn-lg bg-gradient-to-r from-orange-500 to-yellow-300 border-none font-bold rounded-none hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-500">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              0812-8807-4660
            </div>
          </button>
        </div>
        <div className="mt-8 bg-gray-800 rounded-lg flex flex-col py-5 px-9 w-full h-[300px] lg:h-[235px]">
          <div className="text-2xl text-white font-semibold">Hubungi Kami</div>
          <div className="mt-5 flex justify-between">
            <div className="flex flex-col w-[300px] lg:w-[625px]">
              <div className="py-2 flex items-center">
                <FaPhoneAlt color="orange" />
                <div className="pl-4 text-white">Office:</div>
                <div className="pl-1 text-orange-500 hover:text-blue-900 hover:cursor-pointer">
                  (021) 2983 6535
                </div>
              </div>
              <hr />
              <div className="py-2 flex items-center">
                <FaWhatsapp color="orange" />
                <div className="pl-4 text-white">Admin-1:</div>
                <div className="pl-1 text-orange-500 hover:text-blue-900 hover:cursor-pointer">
                  0812-8807-4660
                </div>
              </div>
              <hr />
              <div className="py-2 flex items-center">
                <FaWhatsapp color="orange" />
                <div className="pl-4 text-white">Admin-2:</div>
                <div className="pl-1 text-orange-500 hover:text-blue-900 hover:cursor-pointer">
                  0896-6938-0149
                </div>
              </div>
              <hr />
            </div>
            <div className="flex flex-col w-[300px] lg:w-[650px]">
              <div className="py-2 flex items-center">
                <IoIosMail color="orange" />
                <div className="pl-4 text-white">Email:</div>
                <div className="pl-1 text-orange-500 hover:text-blue-900 hover:cursor-pointer">
                  info@semestamandiri.com
                </div>
              </div>
              <hr />
              <div className="flex flex-col">
                <div className="py-2 flex items-center">
                  <FaLocationDot color="orange" />
                  <div className="pl-4 text-white font-bold">
                    PT. SEMESTA MANDIRI ADVERTISING
                  </div>
                </div>
                <div className="pl-8 text-white font-semibold">
                  Ruko Citra Sawangan Square
                </div>
                <div className="pb-2 pl-8 text-white">
                  Jl. Raya Muchtar, Bojong Sari Lama, Kec. Sawangan, Depok –
                  Jawa Barat 16518
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8">
          <div className="bg-gray-800 rounded-lg flex flex-col px-5 py-5 w-[420px] h-[328px]">
            <div className="flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Bandung
              </div>
            </div>
            <div className="text-white pl-9">
              Jl. Puri Asih II No.14, Cipamokolan, Kec. Rancasari, Kota Bandung,
              Jawa Barat.
            </div>
            <div className="pt-3 flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Surakarta
              </div>
            </div>
            <div className="text-white pl-9">
              Jl. Kalingga Timur No.17, Kadipiro, Kec. Banjarsari, Surakarta,
              Jawa Tengah.
            </div>
            <div className="pt-3 flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Purwokerto
              </div>
            </div>
            <div className="text-white pl-9">
              Desa Kertanegara RT 02/RW 03, Kec. Kertanegara, Kab. Purbalingga,
              Purwokerto, Jawa Tengah.
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center px-9 w-[420px] h-[328px]">
            <div className="flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Surabaya
              </div>
            </div>
            <div className="text-white pl-9">
              Jl. Dharmawangsa IV No.11, Airlangga, Kec. Gubeng, Surabaya, Jawa
              Timur.
            </div>
            <div className="pt-3 flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Yogyakarta
              </div>
            </div>
            <div className="text-white pl-9">
              Jl. Bantul, Gedongkiwo MJ.1/881, RT.47/RW.10, Gedongkiwo,
              Mantrijeron, Kota Yogyakarta.
            </div>
            <div className="pt-3 flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Denpasar Bali
              </div>
            </div>
            <div className="text-white pl-9">
              Jl. Kebak Sari No.20, Pemecutan Klod, Kec. Denpasar Barat,
              Denpasar, Bali.
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg flex flex-col justify-center px-9 w-[420px] h-[328px]">
            <div className="flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Bekasi
              </div>
            </div>
            <div className="text-white pl-9">
              G. Goler, Jl. Setiamulya, Kec. Tarumajaya, Kabupaten Bekasi, Jawa
              Barat.
            </div>
            <div className="pt-3 flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Lombok
              </div>
            </div>
            <div className="text-white pl-9">
              Perumahan Bumi Kodya Asri, Jl. Wali Songo, Jempong Baru,
              Sekarbela, Kota Mataram, NTB.
            </div>
            <div className="pt-3 flex items-center">
              <FaLocationDot color="orange" />
              <div className="text-yellow-300 pl-5 text-lg font-semibold">
                Cirebon
              </div>
            </div>
            <div className="text-white pl-9">
              Jl. Kebon Baru No. 46, RT 01/06, Desa Arjawinangun, Kab. Cirebon,
              Jawa Barat.
            </div>
          </div>
        </div>
        <div className="pt-10 divider divider-neutral text-white"></div>
        <div className="text-sm py-5 flex justify-between items-center text-white w-full">
          ©2022 ALL RIGHTS RESERVED | SEMESTA MANDIRI ADVERTISING
          <div className="flex gap-5">
            <FaFacebookF size={20} className="hover:cursor-pointer" />
            <FaInstagram size={20} className="hover:cursor-pointer" />
            <FaYoutube size={20} className="hover:cursor-pointer" />
            <FaLinkedinIn size={20} className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
