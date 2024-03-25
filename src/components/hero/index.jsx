function Hero() {
  return (
    <div
      className="hero h-[300px] lg:h-[537px]"
      style={{
        backgroundImage:
          "url(https://images.tokopedia.net/img/KRMmCm/2023/8/14/e8c6c57f-c8e3-4286-aa99-b1795e617190.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
            Jasa Advertising
          </h1>
          <p className="mb-5 font-bold">
            Selamat datang di Semesta Mandiri Advertising. Kami adalah tim yang
            mengubah ruang fisik menjadi kanvas berdampak. Dari baliho megah
            hingga spanduk yang mencuri perhatian, kami siap untuk memperkuat
            merek Anda.
          </p>
          <button className="btn bg-orange-500 border-none text-white">
            Klik Di Sini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
