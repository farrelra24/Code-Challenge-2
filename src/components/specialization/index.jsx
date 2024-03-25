import Image from "next/image";

function Specialization() {
  return (
    <div className="bg-blue-900 pattern-topography-gray-400/20 h-[1450px] lg:h-[850px] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className=" text-white text-4xl font-bold">Spesialisasi Kami</h1>
        <h1 className="text-xl text-orange-500 font-bold">___________</h1>
        <br />
        <br />
      </div>
      <div className="flex gap-8">
        <div className="bg-base-100 h-[558px] w-[192px] p-7 lg:h-[278px] lg:w-[445px]">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/08/icon_services_02.svg"
            width={50}
            height={50}
            alt="Icon"
          />
          <h2 className="text-xl text-blue-900 font-semibold py-4">
            Produksi & Konstruksi Reklame
          </h2>
          <p className="text-[15px] text-gray-500">
            Produksi pembuatan konstruksi dan instalasi Billboard, Rangka
            Umbul-Umbul, Neon Box, Huruf Timbul, Sign Board, Road Sign, Show
            Case, dan Outdoor Advetising lainnya.
          </p>
        </div>
        <div className="bg-base-100 h-[558px] w-[192px] p-7 lg:h-[278px] lg:w-[445px]">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/08/icon_services_01.svg"
            width={50}
            height={50}
            alt="Icon"
          />
          <h2 className="text-xl text-blue-900 font-semibold py-4">
            Jasa Pemasangan Iklan
          </h2>
          <p className="text-[15px] text-gray-500">
            Kami ahli dalam jasa pasang Umbul-Umbul, Spanduk, Baliho, Billboard,
            Sticker, dan lain-lain. Kami juga memberikan garansi pemasangan pada
            media iklan yang sedang tayang.
          </p>
        </div>
        <div className="bg-base-100 h-[558px] w-[192px] p-7 lg:h-[278px] lg:w-[445px]">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/08/icon_services_03.svg"
            width={50}
            height={50}
            alt="Icon"
          />
          <h2 className="text-xl text-blue-900 font-semibold py-4">
            Jasa Perizinan Iklan
          </h2>
          <p className="text-[15px] text-gray-500">
            Pengurusan dan Perzinan Pajak Reklame terpercaya dengan harga
            terjangkau, kami telah dipercaya oleh perusahaan maupun perseorangan
            dalam menangani Jasa Perzinan Reklame.
          </p>
        </div>
      </div>
      <div className="pt-8 flex gap-8">
        <div className="bg-base-100 h-[558px] w-[192px] p-7 lg:h-[278px] lg:w-[445px]">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/08/icon_services_04.svg"
            width={50}
            height={50}
            alt="Icon"
          />
          <h2 className="text-xl text-blue-900 font-semibold py-4">
            Jasa Offset & Printing
          </h2>
          <p className="text-[15px] text-gray-500">
            Kami melayani permintaan Digital Printing Spanduk dan Sablon
            Digital. Dengan keahlian dan perlengkapan profesional, kami siap
            memberikan hasil printing terbaik untuk Anda.
          </p>
        </div>
        <div className="bg-base-100 h-[558px] w-[192px] p-7 lg:h-[278px] lg:w-[445px]">
          <Image
            src="https://semestaadvertising.id/wp-content/uploads/2022/08/icon_services_05.svg"
            width={50}
            height={50}
            alt="Icon"
          />
          <h2 className="text-xl text-blue-900 font-semibold py-4">
            Creative Advertising Design
          </h2>
          <p className="text-[15px] text-gray-500">
            Kami dapat membantu Anda membuat iklan yang dapat menarik banyak
            orang. Konsultasikan dengan kami mengenai desain iklan, jika tidak
            memiliki ide yang menarik kami siap untuk membantu Anda.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
