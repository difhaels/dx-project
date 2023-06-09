import React, { useEffect } from 'react';
import $ from 'jquery';

const Pesan = () => {
  useEffect(() => {
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      } 
    });
  }, []);

  return (
    <>
      <a
        href="#pesan"
        className="px-10 py-11 text-text font-bold  hover:text-white rounded-lg text-md text-center shadow-xl flex justify-center items-center bg-bg fixed bottom-5 right-5 sm:right-20 md:right-32 lg:right-52 cursor-pointer z-50">
        <h1 className="absolute top-[20%]">Book Now!!</h1>
      </a>
    </>
  );
};

export default Pesan;