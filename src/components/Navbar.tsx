import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-white flex items-center justify-between px-10">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2.5">
          <Image
            src="/qiro-logo.svg"
            alt="Qiro Logo"
            width={96}
            height={40}
            className="h-10"
          />
        </div>

        <div className="flex items-center">
          <div className="flex">
            <div className="relative">
              <div className="flex justify-center items-center gap-2 px-6 py-4 cursor-pointer">
                <div className="w-6 text-[#7332FE]">
                  <Image
                    src="/header-icon-1.svg"
                    alt="Header Icon 1"
                    width={96}
                    height={40}
                    className="h-10"
                  />
                </div>
                <span className="text-[#1D1B20]">Pools</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7332FE]"></div>
            </div>

            <div className="flex justify-center items-center gap-2 px-6 py-4 cursor-pointer">
              <div className="w-6 text-[#938F99]">
                <Image
                  src="/header-icon-1-disabled.svg"
                  alt="Header Icon 1 Disabled"
                  width={96}
                  height={40}
                  className="h-10"
                />
              </div>
              <span className="text-[#938F99]">Staking</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4.5">
        <button className="w-10 h-10 rounded-full border border-[#CAC4D0] flex items-center justify-center relative">
          <Image src="/bell.svg" alt="Notification" width={24} height={24} />
        </button>

        <button className="h-10 px-6 rounded-full border border-[#CAC4D0] flex items-center gap-2">
          <Image
            src="/user.svg"
            alt="Wallet"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-[#49454F]">0x48ce....ht56</span>
        </button>

        <button className="w-10 h-10 rounded-full bg-[#6C76F9] flex items-center justify-center">
          <span className="text-white">N</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
