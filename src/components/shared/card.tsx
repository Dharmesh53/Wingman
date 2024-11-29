import { Capatilize, cn, Truncate } from "../../lib/utils";
import { CardDataType } from "../../types";
import { Icons } from "./icons";

export function Card({ data }: { data: CardDataType }) {
  return (
    <div className="grid max-h-[37rem] cursor-pointer grid-flow-row grid-rows-4">
      <div className="group relative row-span-3 mb-1 overflow-hidden rounded-lg border border-custom-foreground p-5 mix-blend-multiply dark:bg-foreground dark:mix-blend-normal">
        <img
          src={data.image}
          className="flex h-full w-full object-scale-down transition-all hover:scale-110"
        />
        <Stars
          rate={data.rating.rate}
          count={data.rating.count}
          className={
            "absolute right-0 top-[-2rem] rounded bg-background p-1 transition-all group-hover:top-0"
          }
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

type StarProps = {
  rate: number;
  count: number;
} & React.HTMLAttributes<HTMLDivElement>;

function Stars({ rate, count, className, ...props }: StarProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      <Icons.star className={cn("size-5", rate >= 1 && "text-yellow-500")} />
      <Icons.star className={cn("size-5", rate >= 2 && "text-yellow-500")} />
      <Icons.star className={cn("size-5", rate >= 3 && "text-yellow-500")} />
      <Icons.star className={cn("size-5", rate >= 4 && "text-yellow-500")} />
      <Icons.star className={cn("size-5", rate >= 5 && "text-yellow-500")} />
      <span className="text-xs text-muted-foreground">{count}</span>
    </div>
  );
}
