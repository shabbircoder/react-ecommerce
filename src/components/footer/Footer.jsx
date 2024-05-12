import React from 'react';

function Footer() {
  return (
    <div className="flex justify-evenly bg-pink-500 text-white pt-8 pb-20">
      <div className="w-1/4 pt-8">
        <h5 className="pb-2">About us</h5>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, libero. Iure, velit! Quasi similique tenetur culpa ex. Qui quaerat nulla, officia, dicta tempora temporibus assumenda quod numquam, quasi nesciunt facilis.</p>
      </div>

      <div className="w-1/4 pt-8">
        <h5 className="pb-2">Important links</h5>
        <p className="text-sm">
          <a href="#" className="text-gray-300">Home</a><br />
          <a href="#" className="text-gray-300">About us</a><br />
          <a href="#" className="text-gray-300">Contact us</a><br />
          <a href="#" className="text-gray-300">Services</a><br />
        </p>
      </div>

      <div className="w-1/4 pt-8">
        <h5 className="pb-2">Contact us</h5>
        <p className="text-sm">Farrukhabad <br /> Uttar Pradesh <br /> 209625 <br />
          <i className="bi bi-telephone-outbound text-gray-300">12345678</i>
        </p>
      </div>
    </div>
  );
}

export default Footer;
