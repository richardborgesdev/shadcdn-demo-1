export function Hero() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://avatars.githubusercontent.com/u/19519036?v=4"
          alt=""
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Richard Borges</p>
            <p className="font-medium text-gray-500">Frontend Architect | UX Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}
