import { Capatilize, Truncate } from "../../lib/utils";

interface CardDataType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function Card({ data }: { data: CardDataType }) {
  return (
    <div className="grid max-h-[37rem] cursor-pointer grid-flow-row grid-rows-4">
      <div className="row-span-3 mb-1 overflow-hidden rounded-lg border border-custom-foreground p-5 mix-blend-multiply dark:bg-foreground dark:mix-blend-normal">
        <img
          src={data.image}
          className="flex h-full w-full object-scale-down transition-all hover:scale-110"
        />
      </div>
      <div className="relative">
        <p className="text-sm text-muted-foreground">
          {Capatilize(data.category)}
        </p>
        <p>{Truncate(data.title, 50)}</p>
        <p className="font-parkinsans">${data.price}</p>
        <button className="group absolute bottom-0 flex w-full justify-center bg-custom-foreground py-2 font-brand text-lg text-custom-background hover:bg-custom-foreground/85">
          <span className="group-active:scale-95">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
