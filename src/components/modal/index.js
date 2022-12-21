import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

export function Modal(props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      as="div"
      className={`fixed z-50 inset-0 visible`}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="fixed w-full h-full p-8 md:p-24 flex flex-col justify-evenly items-center bg-borabayImpureWhite rounded-3xl shadow-lg text-xl font-normal font-montserrat text-borabayDarkBrown">
        <Link href="#home">
          <a onClick={() => { setIsOpen(false); props.onCloseClick(false); }}>Home</a>
        </Link>
        <Link href="#about-us">
          <a onClick={() => { setIsOpen(false); props.onCloseClick(false); }}>About Us</a>
        </Link>
        <Link href="#services">
          <a onClick={() => { setIsOpen(false); props.onCloseClick(false); }}>Services</a>
        </Link>
        <Link href="#brand-sponsors">
          <a onClick={() => { setIsOpen(false); props.onCloseClick(false); }}>Brand Sponsors</a>
        </Link>
        <Link href="#find-us">
          <a onClick={() => { setIsOpen(false); props.onCloseClick(false); }}>Find Us</a>
        </Link>
        <button
          type="button"
          className="w-12 h-12 flex items-center justify-center"
          onClick={() => { setIsOpen(false); props.onCloseClick(false); }}
        >
          <Image className="w-full h-full" src={require('../../../public/icons/close.png')} alt='close-icon' />
        </button>
      </div>
    </Dialog>
  );
}
