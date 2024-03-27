"use client";

import { useTeams } from "~/api/useTeams";
import Image from "next/image";

function Teams() {
  const { teams } = useTeams();

  return (
    <>
      <div className="h-[300px] lg:h-[300px] flex flex-col justify-center items-center bg-blue-900 pattern-topography-gray-400/20">
        <div className="text-center">
          <h1 className=" text-white text-5xl lg:text-6xl font-bold">
            Tim Kami
          </h1>
          <h1 className="text-xl text-orange-500 font-bold">___________</h1>
        </div>
      </div>
      <div className="flex justify-center h-[3800px] lg:h-[1300px]">
        <div className="w-[80%] h-auto flex flex-wrap justify-center gap-6 pt-10 lg:justify-between">
          {teams?.results?.map((value, index) => {
            return (
              <div key={index}>
                <div>
                  <Image
                    src={value.picture.large}
                    alt="profile"
                    loading="lazy"
                    className="h-[400px] w-[300px] rounded-lg text-center"
                    width={300}
                    height={400}
                  />
                  <div className="text-center pb-6">
                    <h1 className="text-lg font-bold">
                      {value.name.first} {value.name.last}
                    </h1>
                    <h1>
                      {value.location.city}, {value.location.country}
                    </h1>
                    <h1>{value.cell}</h1>
                    <h1>{value.email}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Teams;
