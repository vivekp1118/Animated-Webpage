
function Footer() {
    return (
        <div className="h-[60vh] w-[100%] flex flex-col justify-center items-center gap-8">
            <p className="text-5xl font-semibold text-[#6542EA]">ahead</p>

            <div className="text-sm text-gray-700 font-medium">
                <span className="inline-block mr-14">
                Auguststraße 26, 10117 Berlin
                </span>
                <span className="inline-block">
                hi@ahead-app.com
                </span>
            </div>
            <div className="w-[150px] h-[45px] bg-[url('/app-store.svg')] bg-cover"></div>
            <p className="text-sm text-gray-500 font-medium">
            © 2022 Ahead app. All right reserved
            </p>
        </div>
    );
}

export default Footer;