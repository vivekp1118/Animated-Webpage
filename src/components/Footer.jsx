function Footer() {
  return (
    <div className="flex h-[fit] w-[100%] flex-col items-center justify-center gap-4 py-10 md:gap-8">
      <p className="text-5xl font-semibold text-[#6542EA]">ahead</p>

      <div className="text-sm font-medium text-gray-700">
        <span className="block md:mr-14 md:inline-block">
          Auguststraße 26, 10117 Berlin
        </span>
        <span className="mt-2 block text-center md:mt-0 md:inline-block">
          hi@ahead-app.com
        </span>
      </div>
      <div className="h-[45px] w-[150px] bg-[url('/app-store.svg')] bg-cover"></div>
      <p className="text-sm font-medium text-gray-500">
        © 2022 Ahead app. All right reserved
      </p>
    </div>
  );
}

export default Footer;
