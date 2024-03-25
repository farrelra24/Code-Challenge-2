import Image from "next/image";

function AboutUs() {
  return (
    <>
      <div className="h-[300px] lg:h-[300px] flex flex-col justify-center items-center bg-blue-900 pattern-topography-gray-400/20">
        <div className="text-center">
          <h1 className=" text-white text-5xl lg:text-6xl font-bold">
            Tentang Kami
          </h1>
          <h1 className="text-xl text-orange-500 font-bold">___________</h1>
        </div>
      </div>
      <div className="bg-white h-[920px] lg:h-[625px] flex justify-center items-center gap-20 px-20">
        <div className="w-[637px]">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/08/about_semestamandiri_adv-800x533.jpg"
            width={1000}
            height={1000}
            alt="Picture"
          />
        </div>
        <div className="flex flex-col w-[600px]">
          <h1 className="text-blue-900 text-4xl font-semibold">
            PT Semesta Mandiri Advertising
          </h1>
          <div className="pt-7">
            Sejak didirikan lebih dari 10 Tahun lalu, PT. SEMESTA MANDIRI
            ADVERTISING telah menjadi lebih berpengalaman khususnya di bidang{" "}
            <span className="text-orange-500 hover:text-blue-900">
              <a href="/">advertising </a>
            </span>{" "}
            terutama promosi media luar ruang seperti jasa pasang umbul-umbul
            atau t-banner spanduk, baliho dan billboard. Kami juga memproduksi
            kebutuhan reklame seperti letter sign, signage, pylon sign, neon
            box, billboard dan kebutuhan advertising lainnya.
          </div>
          <div className="pt-5">
            Jika anda membutuhkan kebutuhan advertising Semesta Mandiri
            Advertising adalah pilihan Anda.
          </div>
          <button className="mt-7 btn bg-yellow-300 border-none font-bold rounded-none w-[180px] hover:bg-orange-500 hover:text-white">
            Hubungi Kami
          </button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
