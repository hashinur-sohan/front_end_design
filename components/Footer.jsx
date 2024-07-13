"use client";

const Footer = () => (
  <footer className="bg-li-gray p-5 text-center text-light">
    <section>
      <div className="flex flex-col md:flex-row mb-10 p-5">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <p className="font-nantes text-3xl text-left leading-snug">
            Experience remarkable WordPress products with a new level of power,
            beauty, and human-centered designs.
          </p>
        </div>
        {/* nav section */}
        <nav className="flex flex-col mx-auto w-1/3 md:w-1/6 h-auto text-lg leading-relaxed text-left text-r-blue font-messina">
          <p className="text-dk-gray mb-4">Jump to</p>
          <a href="#" className="mx-2 text-light mb-2">
            About Us
          </a>
          <a href="#" className="mx-2 text-light mb-2">
            Portfolio
          </a>
          <a href="#" className="mx-2 text-light mb-2">
            News
          </a>
          <a href="#" className="mx-2 text-light mb-2">
            Stories
          </a>
          <a href="#" className="mx-2 text-light mb-2">
            Jobs
          </a>
          <a href="#" className="mx-2 text-light">
            Contact Us
          </a>
        </nav>
        <div className="grid grid-flow-row font-messina text-lg mr-4">
          <div className="mb-4">
            <p className="text-left mb-4">
              <span className="font-bold">Cambridge</span>
              <br />
              70728 Yost Burg,
              <br />
              North Magdaleneview,
              <br />
              UT 97952-2814
            </p>
            <hr className="w-64 h-0.5 bg-dk-gray mb-4" />
          </div>
          <div className="mb-4">
            <p className="text-left mb-4">
              <span className="font-bold">London</span>
              <br />
              Suite 292 903 Stehr Streets,
              <br />
              Langworthtown, SC 94577-9465
            </p>
            <hr className="w-64 h-0.5 bg-dk-gray mb-4" />
          </div>
          <div>
            <p className="text-left mb-4">
              <span className="font-bold">San Francisco</span>
              <br />
              19837 Gilberto Lodge,
              <br />
              Lake Kendallville,
              <br />
              Colorado - 97392, Bhutan
            </p>
            <hr className="w-64 h-0.5 bg-dk-gray" />
          </div>
        </div>
      </div>
      <div className="text-center text-dk-gray mb-4">
        <p className="flex justify-center space-x-4">
          <span>&copy;2024</span>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 text-justify font-messina text-sm mb-4 md:mb-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end space-x-4">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.5 2.48529V25.5147C27.5 26.0412 27.2908 26.5462 26.9185 26.9185C26.5462 27.2908 26.0412 27.5 25.5147 27.5H2.48529C1.95876 27.5 1.45379 27.2908 1.08148 26.9185C0.709164 26.5462 0.5 26.0412 0.5 25.5147L0.5 2.48529C0.5 1.95876 0.709164 1.45379 1.08148 1.08148C1.45379 0.709164 1.95876 0.5 2.48529 0.5L25.5147 0.5C26.0412 0.5 26.5462 0.709164 26.9185 1.08148C27.2908 1.45379 27.5 1.95876 27.5 2.48529ZM8.44118 10.8235H4.47059V23.5294H8.44118V10.8235ZM8.79853 6.45588C8.80062 6.15554 8.74354 5.85773 8.63053 5.57945C8.51752 5.30117 8.35081 5.04787 8.13991 4.83402C7.92901 4.62017 7.67806 4.44996 7.40137 4.3331C7.12469 4.21624 6.8277 4.15502 6.52735 4.15294H6.45588C5.8451 4.15294 5.25934 4.39557 4.82746 4.82746C4.39557 5.25934 4.15294 5.8451 4.15294 6.45588C4.15294 7.06666 4.39557 7.65242 4.82746 8.08431C5.25934 8.51619 5.8451 8.75882 6.45588 8.75882C6.75625 8.76621 7.05512 8.71435 7.33543 8.60619C7.61575 8.49803 7.872 8.3357 8.08955 8.12847C8.3071 7.92124 8.48169 7.67318 8.60334 7.39845C8.72499 7.12372 8.79132 6.82772 8.79853 6.52735V6.45588ZM23.5294 15.8106C23.5294 11.9909 21.0994 10.5059 18.6853 10.5059C17.8949 10.4663 17.1079 10.6347 16.4028 10.9942C15.6977 11.3537 15.0993 11.8917 14.6671 12.5547H14.5559V10.8235H10.8235V23.5294H14.7941V16.7715C14.7367 16.0793 14.9547 15.3925 15.4008 14.8602C15.8469 14.3279 16.485 13.9931 17.1765 13.9285H17.3274C18.59 13.9285 19.5271 14.7226 19.5271 16.7238V23.5294H23.4976L23.5294 15.8106Z"
              fill="#9FA0A2"
            />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.9287 11.8801C29.947 12.1446 29.947 12.409 29.947 12.676C29.947 20.8088 23.7556 30.1884 12.4345 30.1884V30.1836C9.09019 30.1884 5.81536 29.2305 3 27.4243C3.48629 27.4828 3.97502 27.512 4.46496 27.5132C7.23644 27.5157 9.9287 26.5858 12.1091 24.8734C9.47532 24.8234 7.16575 23.1062 6.35893 20.5992C7.28154 20.7771 8.23218 20.7405 9.13772 20.4931C6.2663 19.913 4.20049 17.3901 4.20049 14.4602C4.20049 14.4334 4.20049 14.4078 4.20049 14.3822C5.05606 14.8588 6.01402 15.1232 6.99391 15.1525C4.28946 13.3451 3.45582 9.74725 5.08897 6.93433C8.21389 10.7795 12.8245 13.1171 17.7739 13.3646C17.2779 11.2268 17.9555 8.98674 19.5545 7.48399C22.0335 5.15371 25.9324 5.27315 28.2626 7.7509C29.6411 7.47912 30.9622 6.97333 32.1712 6.25669C31.7118 7.68143 30.7502 8.89167 29.4656 9.66072C30.6856 9.5169 31.8775 9.19027 33 8.69179C32.1737 9.93006 31.1328 11.0087 29.9287 11.8801Z"
              fill="#9FA0A2"
            />
          </svg>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
