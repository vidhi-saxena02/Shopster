import { faker } from "@faker-js/faker";

function Card({ cat }) {
  return (
    <div>
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
          className="w-[210px] h-[210px] object-cover rounded-xl"
          src={faker.image.abstract(150, 150, true)}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] rounded-md">
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-blue-700 flex justify-center items-center text-white text-xs font-bold ml-2">
                {cat[0].toUpperCase()}
              </div>
              <p className="text-white text-l text-blue-400">
                {cat.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
