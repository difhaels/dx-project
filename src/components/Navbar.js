import DXlogo2 from "./img/logo/DX-logo-3.png";
function Navbar() {
  
  return(
      <div class="px-8 py-3 bg-[#ABC4AA]">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="" src={DXlogo2} alt="Logo" width="70"></img>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#" class="text-black  hover:text-[#029202] px-3 py-2 rounded-lg text-sm font-medium">
                  Beranda
                </a>
                <a href="#" class="text-black  hover:text-[#029202] px-3 py-2 rounded-lg text-sm font-medium">
                  Tentang
                </a>
                <a href="#" class="text-black  hover:text-[#029202] px-3 py-2 rounded-lg text-sm font-medium">
                  Layanan
                </a>
                <a href="./Login/loginform.html" class="text-black  hover:text-[#029202] px-3 py-2 rounded-lg text-sm font-medium">
                  Login
                </a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
