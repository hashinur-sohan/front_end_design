"use client";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Image from "next/image";

// import React from 'react';

const Home = () => {
  return (
    <Layout>
      <section>
        {/* showing company */}
        <div>

            <div className="flex items-center  mb-[48px] w-[882px] " >
                <h1 className="font-nantes  text-[48px]">Selected WPPOOL Portfolio Companies</h1>
            </div>

            <div className=" grid grid-cols-5 w-[1180px] h-[540px] ">
                {/* <div className="flex justify-center items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/argyle.png" width={100} height={20} alt="" className="object-center h-[70px] w-[164px] "/>
                </div> */}

                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/alibaba.png" width={100} height={100} alt="argyle" className="w-[188px] h-[24px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/vendr1.png" width={100} height={100} alt="argyle" className="w-[180px] h-[45px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/vestwell.png" width={100} height={20} alt="argyle" className="w-[180px] h-[94px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/snapdocs1.png" width={100} height={20} alt="argyle" className="w-[170px] h-[35px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/vendr2.png" width={100} height={20} alt="argyle" className="w-[162px] h-[40px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/snapdocs2.png" width={100} height={20} alt="argyle" className="w-[164px] h-[25.77px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/toast.png" width={100} height={20} alt="toast" className="w-[180px] h-[94px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/connepay1.png" width={100} height={20} alt="connepay2" className="w-[174px] h-[64px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/connepay2.png" width={100} height={20} alt="connepay2" className="w-[199px] h-[104px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/mineraltree.png" width={100} height={20} alt="mineraltree" className="w-[187px] h-[56px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/flywire.png" width={100} height={20} alt="flywire" className="w-[154px] h-[52px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/quovo.png" width={100} height={20} alt="quovo" className="w-[149px] h-[58px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/spendesk.png" width={100} height={20} alt="spendesk" className="w-[173px] h-[29px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/nota_bene.png" width={100} height={20} alt="nota_bene" className="w-[184px] h-[59px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/Recurly.png" width={100} height={20} alt="Recurly" className="w-[122px] h-[37px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/fireblocks.png" width={100} height={20} alt="fireblocks" className="w-[179.49px] h-[27px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/kensho.png" width={100} height={20} alt="kensho" className="w-[155px] h-[48px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/futureadvisor.png" width={100} height={20} alt="futureadvisor" className="w-[164px] h-[33px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/argyle.png" width={100} height={20} alt="argyle" className="w-[164px] h-[70px] object-center"/>
                </div>
                <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
                    <Image src="/snapsheet.png" width={100} height={20} alt="snapsheet" className="w-[198px] h-[88px] object-center"/>
                </div>
             </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
