import Image from "next/image";

function Testimony() {
  return (
    <div className="h-[1500px] lg:h-[600px] flex flex-col justify-center items-center bg-blue-900 pattern-topography-gray-400/20">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold">Testimoni</h1>
        <h1 className="text-xl text-orange-500 font-bold">___________</h1>
        <br />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-base-100 w-[425px] h-[420px] p-4">
          <div className="mx-20 w-[225px]">
            <Image
              src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/26/67238705/67238705_80522344-5513-4f47-a79d-a088184c791f_1280_1280"
              width={1000}
              height={1000}
              alt="Picture"
            />
          </div>
          <div className="text-gray-500 text-sm">
            "Semesta Mandiri berhasil memperindah kedai kopi saya dengan neon
            box yang memukau. Lebih dari sekadar estetika, Semesta Mandiri
            memahami merek saya dan semangat saya terhadap kualitas. Terima
            kasih telah menerangi kedai kopi saya dan lingkungan kami."
          </div>
          <br />
          <div className="text-gray-500 text-sm font-bold">Rizky Pratama</div>
          <div className="text-gray-500 text-sm">Owner Kopi Kenangan</div>
        </div>
        <div className="bg-base-100 w-[425px] h-[420px] p-4">
          <div className="mx-16 mb-5 w-[250px]">
            <Image
              src="https://id.theperfectmediagroup.com/wp-content/uploads/2021/07/Ex-xQy8VcAAiIyH-e1627026567338.jpg"
              width={1000}
              height={1000}
              alt="Picture"
            />
          </div>
          <div className="text-gray-500 text-sm">
            “Terima kasih kepada Semesta Mandiri atas billboard luar biasa yang
            telah meningkatkan kesadaran merek Aqua. Kreativitas dan komitmen
            Anda telah membawa visi kami ke tingkat baru.”
          </div>
          <div className="text-gray-500 text-sm font-bold pt-11">
            Zulaikha Handayani
          </div>
          <div className="text-gray-500 text-sm">
            Marketing Manager PT Aqua Golden Mississippi
          </div>
        </div>
        <div className="bg-base-100 w-[425px] h-[420px] p-4">
          <div className="mx-24 mb-3 w-[180px]">
            <Image
              src="https://assets2.rumah-bumn.id/produk/1667042467.jpeg"
              width={1000}
              height={1000}
              alt="Picture"
            />
          </div>
          <div className="text-gray-500 text-sm">
            "Terima kasih kepada tim Semesta Mandiri atas pylon sign yang luar
            biasa. Desain inovatif dan kualitas pengerjaan superior memperkuat
            citra merek kami dengan sempurna. Mereka adalah mitra yang
            profesional dan kami merekomendasikan layanan mereka kepada siapa
            pun yang mencari solusi periklanan berkualitas tinggi."
          </div>
          <div className="text-gray-500 text-sm font-bold pt-2">
            Budi Santoso
          </div>
          <div className="text-gray-500 text-sm">
            Manajer Fasilitas PT Fast Food Indonesia Tbk
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
