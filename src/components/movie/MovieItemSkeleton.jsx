
import LoadingSkeleton from '../../utils/LoadingSkeleton';

const MovieItemSkeleton = () => {
  return (
    <div className="flex flex-col h-full rounded-lg p-3 bg-slate-800 select-none">
      <LoadingSkeleton className={"w-full h-[250px] rounded-lg"} />
      <div className="mt-3 gap-4 flex flex-col flex-1">
        <h3 className="line-clamp-2">
          <LoadingSkeleton className={"w-1/2 h-[24px] rounded-lg"} />
        </h3>
        <div className="mt-auto flex justify-between mb-5">
          <LoadingSkeleton className={"w-10 h-[24px] rounded-lg"} />
          <LoadingSkeleton className={"w-10 h-[24px] rounded-lg"} />
        </div>
        <LoadingSkeleton className={"w-full h-[48px] rounded-lg"} />
      </div>
    </div>
  );
}

export default MovieItemSkeleton