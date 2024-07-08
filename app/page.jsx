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
        <div className=" w-[1180px] h-[540px] ">
          {/* <div className="flex justify-center items-center bg-white w-[220px] h-[120px] rounded">
            <Image src="/argyle.png" width={100} height={20} alt="" className="object-center h-[70px] w-[164px] "/>
          </div> */}

          <div className="grid place-items-center bg-white w-[220px] h-[120px] rounded">
              <Image src="/argyle.png" width={100} height={20} alt="argyle" className="h-[70px] w-[164px] object-center"/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
