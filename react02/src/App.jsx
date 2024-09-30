import { CiHeart, CiSearch } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaRegCircle, FaTwitter } from "react-icons/fa";
import { IoArrowUpSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";

export default function App() {
  return (

    <>
      <header>
        <div className="flex  flex-col  overflow-x-hidden   ">
          <div className="flex flex-col   bg-[#212121] ">
            <div className="flex  justify-around py-4">
              <div className="relative ">
                <input
                  className="  py-2  bg-white rounded-full px-10 pr-10 "
                  type="text"
                  placeholder="Search"
                />

                <CiSearch className="absolute top-3 right-3 text-gray-500 text-xl" />
              </div>

              <div className="flex gap-1">
                <div>
                  <svg
                    className="mt-1"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="non e"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6588 9.69493L19.8187 13.3692L16.1584 13.3398L12.5415 7.18969L9.02587 13.2789L5.38315 13.2525L12.5006 0.924681L17.6588 9.69493ZM20.7969 15.0291L22.5796 18.0592L2.69747 17.9042L4.43393 14.8966L20.7969 15.0291ZM23.573 19.7466L21.8389 22.7502L0.000594258 22.5753L1.73705 19.5677L23.573 19.7466Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[#ffffff] text-2xl ">
                    SimpleWood
                  </span>
                  <span className="font-semibold text-[#7db800] text-2xl ">
                    .
                  </span>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex gap-2">
                  <span className="text-lg font-normal text-[#e3e3e3]">
                    English{" "}
                  </span>
                  <RiArrowDropDownLine className="text-2xl  text-gray-500" />

                  <span className="text-lg font-normal text-[#e3e3e3] ">USD</span>
                  <RiArrowDropDownLine className="text-2xl  text-gray-500" />
                </div>

                <div className="flex gap-5 mt-1">
                <CiHeart  className="text-white text-2xl"/>
                <FaRegCircle className="text-white text-xl"/>
                </div>
              </div>
            </div>

            <nav className="flex justify-center h-24 items-center gap-10 ">
              <a
                href="#"
                className="text-white hover:text-[#7db800]  hover:underline hover:underline-offset-8 "
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-[#7db800] hover:underline hover:underline-offset-8"
              >
                Products
              </a>
              <a
                href="#"
                className="text-white hover:text-[#7db800] hover:underline hover:underline-offset-8"
              >
                Elements
              </a>
              <a
                href="#"
                className="text-white hover:text-[#7db800] hover:underline hover:underline-offset-8"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-white hover:text-[#7db800] hover:underline hover:underline-offset-8"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-white hover:text-[#7db800] hover:underline hover:underline-offset-8"
              >
                Sale
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full h-[170px]">
          <div className="relative">
            <img
              src="img1.png"
              className="w-full h-44 object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black opacity-75 "></div>{" "}
            {/* Black opacity layer */}
            <div className="">
              <div className="absolute inset-0 flex  gap-2 ml-[200px] mt-7 ">
                <a href="#" className="text-white">
                  Home
                </a>
                <RiArrowDropDownLine className="text-2xl  text-gray-500" />


                <h1 className="text-[#a7a7a7] font-normal ">
                  New Luma Yoga Collection
                </h1>
              </div>

              <div className="absolute inset-0 flex items-center ml-[200px] mt-12  ">
                <h1 className="text-white text-4xl">
                  Simple Wood Chair Collection
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className=" flex  justify-center   w-full  h-full gap-10 py-10  ">
          <div className=" flex flex-col w-[287px] gap-5 ">
            <div>
              <h1 className="font-semibold text-2xl">Shooping OPtions</h1>
            </div>

            <div className="flex flex-col  gap-2">
              <hr className="bg-[#dedede] h-0.5 w-[287px]" />

              <div className="flex justify-between ">
                {" "}
                <p >Styel</p>
                <RiArrowDropDownLine className="text-2xl  text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5 w-[287px]" />

              <div className="flex justify-between">
                <p >Category</p>
                <RiArrowDropDownLine className="text-2xl   text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5 w-[287px]" />
              <div className="flex justify-between">
                {" "}
                <p >Size</p>
                <RiArrowDropDownLine className="text-2xl  text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5 w-[287px]" />
              <div className="flex justify-between">
                {" "}
                <p>Price</p>
                <RiArrowDropDownLine className="text-2xl  text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5 w-[287px]" />
              <div className="flex  justify-between">
                {" "}
                <p>Color</p>
                <RiArrowDropDownLine className="text-2xl text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5 w-[287px]" />
            </div>

            <div className="flex flex-col  gap-3 ">
              <div className="flex gap-2">
                {" "}
                <h1 className="font-bold text-xl">Compare Products</h1>
                <span className="mt-1 ">(2 items)</span>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <span>X</span>
                  <p className="underline">Summit Watch</p>
                </div>

                <div className="flex gap-2">
                  <span>X</span>
                  <p className="underline">Cruise Dual Analog Watch</p>
                </div>
              </div>

              <div className="flex gap-8 ">
                <button className="text-white bg-[#7db800]  py-2 px-5 ">
                  Compare
                </button>

                <button>Clear All</button>
              </div>

              <div className="flex flex-col gap-4 w-[287px]">
                <div>
                  <h1 className="font-semibold">My Wish List</h1>
                </div>

                <div>
                  <p>You have no items in your wish List.</p>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className=" flex ">
              <div className="flex w-[500px] gap-2 ">
                <div className="flex">
                  {" "}
                  <img className="h-10" src="/img4.png" alt="" />
                  <img className="h-10" src="/img2.png" alt="" />
                </div>

                <div>
                  {" "}
                  <p>items 1-9 of 32</p>
                </div>
              </div>

              <div className="flex gap-2">
                <div>
                  <p>Sort By</p>
                </div>

                <div className="flex bg-[#f0f0f0]  px-4 h-8  ">
                  <label htmlFor="" className="font-light">
                    position
                  </label>
                  <RiArrowDropDownLine className="mt-1 text-xl " />
                </div>
                <IoArrowUpSharp className="mt-1 text-xl " />
              </div>
            </div>

            <div className=" flex flex-col w-full gap-10">
              <div className="flex gap-5  ">
                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="w-full h-[262px] bg-[#f0f0f0]"
                      src="/chair1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline text-sm">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="w-full h-[262px] bg-[#f0f0f0] py-10 px-10"
                      src="/chair2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline  text-sm">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="w-full h-[262px] bg-[#f0f0f0]"
                      src="/chair3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline text-sm">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="full h-[262px] bg-[#f0f0f0]"
                      src="/chair3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline text-sm">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="full h-[262px] bg-[#f0f0f0] py-10 px-10"
                      src="/chair2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline text-sm">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="full h-[262px] bg-[#f0f0f0]"
                      src="/chair1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4] text-sm  underline ">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="full h-[262px] bg-[#f0f0f0]"
                      src="/chair1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  text-sm underline ">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="full h-[262px] bg-[#f0f0f0]"
                      src="/chair3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline text-sm ">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 ">
                  <div>
                    <img
                      className="w-full h-[262px] bg-[#f0f0f0]"
                      src="/chair1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">Cupboards</p>
                    <div className="flex gap-2">
                      <s className="text-[#c4c4c4]">$ 45.00</s>
                      <span className="font-bold">$ 45.00</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex">
                        <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#FF9900] text-xl " />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                        <MdOutlineStarPurple500 className=" fill-[#c4c4c4] text-xl" />
                      </div>
                      <p className=" text-[#c4c4c4]  underline text-sm ">
                        3 reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className=" flex flex-col w-full h-32 bg-black  py-10 gap-5  ">
          <div className=" flex w-full   items-center justify-around ">
            <div className="flex gap-5">
              <p className="text-white">Policy</p>
              <p className="text-white">terms&Conditions</p>
              <p className="text-white">Help</p>
            </div>

            <div className="flex">
              <h1 className="text-white">GHANSHYAM SIDAR</h1>
            </div>

            <div className="flex gap-5">
            <h1 className="text-white">Follow Us On Social</h1>

              <FaFacebookF className="text-white" />
              <FaTwitter className="text-white" />
              <TbBrandYoutube className="text-white" />
              <FaGoogle className="text-white" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-gray-500">
              Copyring @ Viachas KUl. All right reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
