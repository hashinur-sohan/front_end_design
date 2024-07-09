"use client";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Image from "next/image";

// import React from 'react';

const Home = () => {
  return (
    <Layout>
      <section>
        <div className="bg-white w-[1180px] h-[420px] rounded-[12px] flex ">
          {/* Paragraph part */}
          <div className="">
            <div className=" w-[628px] h-[264px]  ml-[72px] my-[78px] ">
              <h1 className="font-nantes w-[400px] text-[48px] leading-[1.2] ">
                About WPPOOL
              </h1>
              <h2 className="font-nantes text-[30px] leading-[42.27px] text-[#7D7F81]"> Investing in wppool for over 50 years </h2>
              <p className="text-messina w-[622px] h-[96px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <button className="w-[167px] h-[47px] rounded-[124px] bg-[#2042B6] mt-[30px] "><span className="text-[#FFFFFF]  ">Contact WPPOOL</span></button>
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
        <div className="mt-[100px] mb-[126px] ">
                <hr className="w-[1180px] h-[2px] bg-[#90B8F0] mb-[20px]"/>
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
