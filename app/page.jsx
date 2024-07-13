"use client";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Image from "next/image";
import CompanyTable from "@/components/CompanyTable";
import LineChart from "@/components/LineChart";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import NavBar from "@/components/Navbar";
import { useState } from "react";

const img = {
  img: [],
};

const Home = () => {
  return (
    <Layout>
      <section>
        {/* Top Part */}
        <div
          className="mt-[80px] h-[718px] bg-[#2042B6] rounded-[5px] flex bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/top.svg')",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="flex items-end">
            <Image
              src="/top-dt.png"
              width={319}
              height={418}
              alt="top-dt"
              className="ml-[44px] mb-[40px] w-[319px] h-[418px]  "
            />
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/Rectangle 1.png"
              width={491}
              height={427}
              alt="top-dt"
              className="w-[491px] h-[427px] "
            />
            <div className="absolute items-center text-white text-center">
              <h1 className="  text-[60px] font-[400]">The WPPOOL Index</h1>
              <p className="w-[1145px] ">
                Monitor the performance of emerging, publicly traded, financial
                technology companies
              </p>
            </div>
          </div>
          <div className="flex items-end ml-[250px] mb-[40px]">
            <div className="bg-white rounded-[125px] w-[64px] h-[64px] flex items-center justify-center">
              <Image
                src="/arrow_downward_alt.png"
                width={32}
                height={32}
                alt="top-dt"
                className="w-[32px] h-[32px] "
              />
            </div>
          </div>
        </div>

        {/* graph */}

        <div className="min-h-screen bg-[#ffffff] mt-[60px] ">
          <div className="container mx-auto py-8">
            <div className="flex items-center justify-between"></div>

            <div className="mt-8 grid grid-cols-5 gap-4">
              <div className="col-span-1 w-[180px]">
                <ul>
                  <li className="p-2 bg-[#2042B6] rounded mb-2 text-[#ffffff] ">
                    The Index
                  </li>
                  <li className="p-2 bg-white rounded mb-2">
                    The Index Tab Two
                  </li>
                  <li className="p-2 bg-white rounded mb-2">
                    The Index Tab Three
                  </li>
                  <li className="p-2 bg-white rounded mb-2">
                    The Index Tab Four
                  </li>
                  <li className="p-2 bg-white rounded mb-2">
                    The Index Tab Five
                  </li>
                </ul>
              </div>

              <div className="col-span-4 bg-white p-6 rounded-lg shadow">
                <div className="flex flex-row">
                  <Image
                    src="/Union.png"
                    width={46}
                    height={41}
                    alt="search"
                    className="w-[46px] h-[41px]  "
                  />

                  <h1 className="font-nantes font-[400] text-[36px] leading-[50.72px] ">
                    The WPPOOL Index
                  </h1>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl flex flex-row">
                    <div className="flex w-[230px] h-[50px] bg-[#F3F3F3] ml-[10px] items-center justify-between">
                      <p className="text-[#FC714D] text-[30px] ">+66.2%</p>{" "}
                      <p className="text-[12px]">
                        {" "}
                        WPPOOL <br /> Index
                      </p>
                    </div>
                    <div className="flex w-[230px] h-[50px] bg-[#F3F3F3] ml-[10px] items-center justify-between">
                      <p className="ml-4 text-[#615DE3] text-[30px]">+26.6%</p>
                      <p className="text-[12px]">
                        {" "}
                        Google <br /> Index
                      </p>
                    </div>
                    <div className="flex w-[230px] h-[50px] bg-[#F3F3F3] ml-[10px] items-center justify-between">
                      {" "}
                      <p className="ml-4 text-[#7CA63A] text-[30px]">+34.1%</p>
                      <p className="text-[12px]"> Microsoft</p>
                    </div>
                    <div className="flex w-[230px] h-[50px] bg-[#F3F3F3] ml-[10px] items-center justify-between">
                      <p className="ml-4 text-[#6F34A1] text-[30px]">+17%</p>{" "}
                      <p className="text-[12px]">
                        Twitter <br /> Index{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex  ">
                    <button className="w-[178px]  bg-[#2042B6] text-[#ffffff] px-4   ml-2  flex justify-start items-center rounded-[124px]">
                      Sectors
                    </button>
                    <button className="w-[178px]  bg-[#2042B6] text-[#ffffff] px-4   ml-2  flex justify-start items-center rounded-[124px]">
                      Types of IPO
                    </button>
                  </div>
                  <div className="flex justify-end items-center w-[300px] h-[30px] bg-[#EFF3F6] rounded-[124px]  ">
                    <button className=" text-[#748DA1]  mr-2">1Y</button>
                    <button className=" text-[#748DA1] px-4 ">YTD</button>
                    <button className="w-[45px]  bg-[#2042B6] text-[#748DA1] px-4   ml-2  flex justify-center rounded-[124px]">
                      6M
                    </button>
                    <button className=" text-[#748DA1] px-4   ml-2">1W</button>
                    <button className=" text-[#748DA1] px-4   ml-2">1W</button>
                  </div>
                </div>

                <div className="relative">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* all companies */}

        <div>
          <div className=" bg-[#ffffff] rounded-[20px] mt-[60px] ">
            <div className="flex  ">
              <h1 className="font-nantes  h-[34px] text-[48px] font-[400] leading-[57.6px] mt-[53px] ml-[45px] ">
                All Companies
              </h1>
              <div className="w-[588px] h-[58px] rounded-[8px] border-[1px] border-[#DADADA] bg-[#F3F3F3] flex flex-row mt-[53px] ml-[326px]">
                <Image
                  src="/search.png"
                  width={17.58}
                  height={17.58}
                  alt="search"
                  className="w-[24px] h-[24px]  ml-[19px] my-[17px] "
                />
                <p className="font-nantes  h-[34px] text-[24px] font-[400] leading-[28.8px] ml-[9px] mt-[15px]  ">
                  Search Companies
                </p>
              </div>
            </div>
            <div className="  ml-[30px] mt-[52px]  ">
              <CompanyTable />
            </div>
          </div>
          <div className="mt-[40px] ml-[442px] mb-[151px]">
            <button className="w-[269px] h-[47px]  rounded-[124px] bg-[#2042B6] mr-[12px] ">
              <span className="text-[#FFFFFF]  ">
                Download ‘All Companies’ Data
              </span>
            </button>

            <button className="w-[210px] h-[47px] rounded-[124px] bg-[#2042B6]  ">
              <span className="text-[#FFFFFF]  ">View Methodology</span>
            </button>
          </div>
        </div>

        {/* Potential Future Listings */}

        <div className="mb-[155px] ">
          <div>
            <h1 className="font-nantes  h-[34px] text-[48px] leading-[57.6px] ">
              Potential Future Listings
            </h1>
            <p className="w-[880px] h-[52px] font-messina text-[16px] leading-[15.6px] font-[400] text-[#191618] mt-[20px] ">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-[20px] mt-[26px]">
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/stripe.png"
                width={133}
                height={55.34}
                alt="stripe"
                className="  "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/klarna.png"
                width={140}
                height={52.42}
                alt="klarna"
                className="  "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/plaid.png"
                width={133}
                height={55.34}
                alt="plaid"
                className=" w-133px] h-[55.34px] "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/checkout.png"
                width={183.96}
                height={24}
                alt="checkout"
                className="  "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/revilut.png"
                width={143.12}
                height={32.2}
                alt="revilut"
                className="  "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/chim.png"
                width={154.13}
                height={44.32}
                alt="chim"
                className="  "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/n26.png"
                width={94}
                height={64.3}
                alt="n26"
                className="  "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/brex.png"
                width={144.76}
                height={38}
                alt="brex"
                className=" "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/deel.png"
                width={124.93}
                height={43.91}
                alt="deel"
                className=" "
              />
            </div>
            <div className="w-[220px] h-[120px] rounded bg-white flex items-center justify-center">
              <Image
                src="/gusto.png"
                width={131.4}
                height={50}
                alt="gusto"
                className=" "
              />
            </div>
          </div>
        </div>

        {/* Report Part */}

        <div className="">
          <div className="mb-[20px] ">
            <h1 className="font-nantes w-[400px] text-[48px] leading-[67.63px]">
              State of USA
            </h1>
            <button className="w-[200px] h-[58px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px] flex items-center justify-center ">
              <span className="text-[#FFFFFF]  text-[42px] font-nantes leading-[59.18px] ">
                2024
              </span>
              <span>
                <Image
                  src="/arrow_drop_down.png"
                  width={14}
                  height={7}
                  alt="arrow_drop_down"
                  className=" w-[14px] h-[7px] ml-[46px]"
                />
              </span>
            </button>
            <p className="font-messina w-[945px] text-[16px] leading-[25.6px] text-[#191618]">
              Click through the slides or download the report to view natively
              on your device.
            </p>
          </div>

          <div className="flex flex-row  ">
            <div className=" w-[580px]  h-[326px] ">
              <Image
                src="/report-1.png"
                width={580}
                height={326}
                alt="report-1"
                className=" w-[580px] h-[326px] "
              />
            </div>
            <div className="bg-[url('/report-bg-image.png')] bg-cover bg-center ">
              <Image
                src="/report-2.png"
                width={580}
                height={326}
                alt="report-2"
                className="w-[580px] h-[326px] "
              />
            </div>
            <div className="w-[580px] h-[326px] px-[20px] pb-[50px]  ">
              <Image
                src="/report-3.png"
                width={580}
                height={326}
                alt="report-3"
                className=" w-[580px] h-[326px]  rounded-[5px ] pb-[60px]"
              />
            </div>
          </div>
          <div className="flex flex-row items-center  ">
            {/* arrow_downward_left */}
            <button className="w-[56px] h-[56px] rounded-[124px] bg-[#ffffff] mt-[14px]  mb-[20px] flex mr-[20px]  items-center justify-center ">
              <Image
                src="/arrow_downward_left.png"
                width={14.15}
                height={15.74}
                alt="about"
                className=" w-[14.15px] h-[15.74px] "
              />
            </button>

            {/* arrow_downward_right */}
            <button className="w-[56px] h-[56px] rounded-[124px] bg-[#ffffff] mt-[14px]  mb-[20px] flex items-center justify-center mr-[30px] ">
              <Image
                src="/arrow_downward_right.png"
                width={14.15}
                height={15.74}
                alt="about"
                className=" w-[14.15px] h-[15.74px] "
              />
            </button>

            <p className="text-[#191618]  text-[16px] font-messina font-[400] leading-[19.2px] mr-[9px] ">
              Pages
            </p>
            <button className="w-[200px] h-[58px] rounded-[124px] bg-[#ffffff] mt-[14px]  mb-[20px] flex items-center justify-center mr-[10px] ">
              <span className="text-[#191618]  text-[16px] font-messina leading-[19.2px] ">
                1 and 2
              </span>
              <span>
                <Image
                  src="/arrow_drop_down-2.png"
                  width={14}
                  height={7}
                  alt="about"
                  className=" w-[14px] h-[7px] ml-[46px]"
                />
              </span>
            </button>
            <p className="text-[#191618]  text-[16px] font-messina font-[400] leading-[19.2px] mr-[470px] ">
              of 37
            </p>
            <button className="w-[240px] h-[56px] rounded-[124px] bg-[#2042B6]  ">
              <span className="text-[#FFFFFF]  ">
                {" "}
                Download the 2023 Report
              </span>
            </button>
          </div>
        </div>

        {/* stories and ideas section */}
        <div>
          <div className="mb-[20px] ">
            <h1 className="font-nantes w-[400px] text-[48px] leading-[57.6px]">
              Stories & Ideas
            </h1>
            <p className="font-messina w-[350px] text-[20px] leading-[24px]">
              The latest news and updates
            </p>
          </div>

          <div className="grid grid-cols-3 w-[1180px] gap-x-[20px] gap-y-[40px]">
            {/* story 1 */}
            <div className="flex ">
              <div className="w-[380px] h-[268px]  ">
                <Image
                  src="/sagor-1.png"
                  width={100}
                  height={100}
                  alt="sagor-1"
                  className="w-[120px] h-[120px] absolute ml-[10px] "
                />

                <div className="w-[380px] h-[220px] bg-[#FFFFFF] rounded-[8px]  content-end mt-[50px]  ">
                  <div className="ml-[20px] ">
                    <div className="w-[323px] h-[66px]  mt-[90px] ">
                      <h2 className="w-[323px] h-[20px] font-sans text-[14px] font-[400] text-[#2042B6] leading-[19.6px] ">
                        By: Sahabuddin Sagor
                      </h2>
                      <p className="font-nantes text-[16px] font-[400] text-[#191618] leading-[19.6px] ">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Maxime mollitia.
                      </p>
                    </div>
                    <button className="w-[93px] h-[30px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px]  ">
                      <span className="text-[#FFFFFF]  ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* story 2 */}
            <div className="flex ">
              <div className="w-[380px] h-[268px]  ">
                <Image
                  src="/naiem-2.png"
                  width={100}
                  height={100}
                  alt="naiem-2"
                  className="w-[120px] h-[120px] absolute ml-[10px] "
                />

                <div className="w-[380px] h-[220px] bg-[#FFFFFF] rounded-[8px]  content-end mt-[50px]  ">
                  <div className="ml-[20px] ">
                    <div className="w-[323px] h-[44px]  mt-[112px] ">
                      <h2 className="w-[323px] h-[20px] font-sans text-[14px] font-[400] text-[#2042B6] leading-[19.6px] ">
                        By: Nayem Khan
                      </h2>
                      <p className="font-nantes text-[16px] font-[400] text-[#191618] leading-[19.6px] ">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </div>
                    <button className="w-[93px] h-[30px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px]  ">
                      <span className="text-[#FFFFFF]  ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* story 3 */}

            <div className="flex ">
              <div className="w-[380px] h-[268px]  ">
                <Image
                  src="/sagor-3.png"
                  width={100}
                  height={100}
                  alt="sagor-3"
                  className="w-[120px] h-[120px] absolute ml-[10px] "
                />

                <div className="w-[380px] h-[220px] bg-[#FFFFFF] rounded-[8px]  content-end mt-[50px]  ">
                  <div className="ml-[20px] ">
                    <div className="w-[323px] h-[66px]  mt-[90px] ">
                      <h2 className="w-[323px] h-[20px] font-sans text-[14px] font-[400] text-[#2042B6] leading-[19.6px] ">
                        By: Sahabuddin Sagor
                      </h2>
                      <p className="font-nantes text-[16px] font-[400] text-[#191618] leading-[19.6px] ">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Maxime mollitia.
                      </p>
                    </div>
                    <button className="w-[93px] h-[30px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px]  ">
                      <span className="text-[#FFFFFF]  ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* story 4 */}

            <div className="flex ">
              <div className="w-[380px] h-[268px]  ">
                <Image
                  src="/sagor-4.png"
                  width={100}
                  height={100}
                  alt="sagor-4"
                  className="w-[120px] h-[120px] absolute ml-[10px]"
                />

                <div className="w-[380px] h-[220px] bg-[#FFFFFF] rounded-[8px]  content-end mt-[50px]  ">
                  <div className="ml-[20px] ">
                    <div className="w-[323px] h-[66px]  mt-[90px] ">
                      <h2 className="w-[323px] h-[20px] font-sans text-[14px] font-[400] text-[#2042B6] leading-[19.6px] ">
                        By: Sahabuddin Sagor
                      </h2>
                      <p className="font-nantes text-[16px] font-[400] text-[#191618] leading-[19.6px] ">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Maxime mollitia.
                      </p>
                    </div>
                    <button className="w-[93px] h-[30px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px]  ">
                      <span className="text-[#FFFFFF]  ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* story 5 */}
            <div className="flex ">
              <div className="w-[380px] h-[268px]  ">
                <Image
                  src="/naiem-5.png"
                  width={100}
                  height={100}
                  alt="naiem-5"
                  className="w-[120px] h-[120px] absolute ml-[10px] "
                />

                <div className="w-[380px] h-[220px] bg-[#FFFFFF] rounded-[8px]  content-end mt-[50px]  ">
                  <div className="ml-[20px] ">
                    <div className="w-[323px] h-[44px]  mt-[112px] ">
                      <h2 className="w-[323px] h-[20px] font-sans text-[14px] font-[400] text-[#2042B6] leading-[19.6px] ">
                        By: Nayem Khan
                      </h2>
                      <p className="font-nantes text-[16px] font-[400] text-[#191618] leading-[19.6px] ">
                        Key Takeaways from Robotics Invest 2023
                      </p>
                    </div>
                    <button className="w-[93px] h-[30px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px]  ">
                      <span className="text-[#FFFFFF]  ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* story 6 */}
            <div className="flex ">
              <div className="w-[380px] h-[268px]  ">
                <Image
                  src="/sagor-6.png"
                  width={100}
                  height={100}
                  alt="sagor-6"
                  className="w-[120px] h-[120px] absolute ml-[10px] "
                />

                <div className="w-[380px] h-[220px] bg-[#FFFFFF] rounded-[8px]  content-end mt-[50px]  ">
                  <div className="ml-[20px] ">
                    <div className="w-[323px] h-[66px]  mt-[90px] ">
                      <h2 className="w-[323px] h-[20px] font-sans text-[14px] font-[400] text-[#2042B6] leading-[19.6px] ">
                        By: Sahabuddin Sagor
                      </h2>
                      <p className="font-nantes text-[16px] font-[400] text-[#191618] leading-[19.6px] ">
                        Lorem ipsum dolor sit amet consectetur <br />{" "}
                        adipisicing elit. Maxime mollitia.
                      </p>
                    </div>
                    <button className="w-[93px] h-[30px] rounded-[124px] bg-[#2042B6] mt-[14px]  mb-[20px]  ">
                      <span className="text-[#FFFFFF]  ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section divider */}
        <div className="mt-[100px] mb-[126px] ">
          <hr className="w-[1180px] h-[2px] bg-[#90B8F0] mb-[20px]" />
        </div>

        {/* About section */}
        <div className="bg-white w-[1180px] h-[420px] rounded-[12px] flex ">
          {/* Paragraph part */}
          <div className="">
            <div className=" w-[628px] h-[264px]  ml-[72px] my-[78px] ">
              <h1 className="font-nantes w-[400px] text-[48px] leading-[67.63px] ">
                About WPPOOL
              </h1>
              <h2 className="font-nantes text-[30px] leading-[42.27px] text-[#7D7F81]">
                Investing in wppool for over 50 years
              </h2>
              <p className="text-messina w-[622px] h-[96px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <button className="w-[167px] h-[47px] rounded-[124px] bg-[#2042B6] mt-[30px] ">
                <span className="text-[#FFFFFF]  ">Contact WPPOOL</span>
              </button>
            </div>
          </div>
          {/* Image part */}
          <div>
            <div className=" bg-white rounded-[12px] ">
              <Image
                src="/about.png"
                width={523}
                height={420}
                alt="about"
                className=" w-[523px] h-[420px] "
              />
            </div>
          </div>
        </div>
        {/* section divider */}
        <div className="mt-[100px] mb-[126px] ">
          <hr className="w-[1180px] h-[2px] bg-[#90B8F0] mb-[20px]" />
        </div>

        {/* showing company */}
        <div className="mb-[58px] ">
          <div className="flex items-center  mb-[48px] w-[882px] ">
            <h1 className="font-nantes  text-[48px]">
              Selected WPPOOL Portfolio Companies
            </h1>
          </div>

          <div className=" grid grid-cols-5 w-[1180px] h-[540px] ">
            {/* <div className="flex justify-center items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/argyle.png" width={100} height={20} alt="" className="object-center h-[70px] w-[164px] "/>
                </div> */}

            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/alibaba.png"
                width={188}
                height={24}
                alt="alibaba"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/vendr1.png"
                width={180}
                height={45}
                alt="argyle"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/vestwell.png"
                width={180}
                height={94}
                alt="argyle"
                className=" object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/snapdocs1.png"
                width={170}
                height={35}
                alt="argyle"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/vendr2.png"
                width={162}
                height={40}
                alt="argyle"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/snapdocs2.png"
                width={164}
                height={25.77}
                alt="argyle"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/toast.png"
                width={180}
                height={94}
                alt="toast"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/connepay1.png"
                width={174}
                height={64}
                alt="connepay2"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/connepay2.png"
                width={199}
                height={104}
                alt="connepay2"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/mineraltree.png"
                width={187}
                height={56}
                alt="mineraltree"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/flywire.png"
                width={154}
                height={52}
                alt="flywire"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/quovo.png"
                width={149}
                height={58}
                alt="quovo"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/spendesk.png"
                width={173}
                height={29}
                alt="spendesk"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/nota_bene.png"
                width={184}
                height={59}
                alt="nota_bene"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/Recurly.png"
                width={122}
                height={37}
                alt="Recurly"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/fireblocks.png"
                width={179.49}
                height={27}
                alt="fireblocks"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/kensho.png"
                width={155}
                height={48}
                alt="kensho"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/futureadvisor.png"
                width={164}
                height={33}
                alt="futureadvisor"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/argyle.png"
                width={164}
                height={70}
                alt="argyle"
                className="object-center"
              />
            </div>
            <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image
                src="/snapsheet.png"
                width={198}
                height={88}
                alt="snapsheet"
                className="object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
