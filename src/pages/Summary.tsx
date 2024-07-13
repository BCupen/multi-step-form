export const Summary = () => {
  return (
    <div className="w-full flex flex-col gap-10 rounded-lg bg-white p-8 -mt-24 lg:mt-0">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-marine text-3xl font-bold tracking-wide">
          Finishing up
        </h1>
        <p className="text-base text-neutrals-coolGray">
          Double-check everything looks OK beofer confirming.
        </p>
      </div>

      <div className="bg-neutrals-magnolia rounded-xl p-6">
        <div className="w-full flex items-center justify-between bg-transparent pb-5 border-b border-neutrals-lightGray">
          <span>
            <h2 className="text-primary-marine font-bold tracking-wide">
              Arcade (Monthly)
            </h2>
            <button className="text-neutrals-coolGray underline decoration-2">
              Change
            </button>
          </span>
          <p className="text-primary-marine font-bold">
            $9/mo
          </p>
        </div>
      </div>
    </div>
  );
};
