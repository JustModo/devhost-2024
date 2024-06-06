import React from "react";
import Image from "next/image";
import Link from "next/link";
const Sponsors = () => {
  return (
    <div className="overflow-hidden pb-20 flex flex-col gap-20">
      <div>
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
          Title Sponsor
        </h1>
        <div className="max-w-7xl p-5">
          <Image
            priority
            src="/niveus_logo_white.png"
            alt="logo"
            className="w-60 h-11 mx-auto"
            width={500}
            height={500}
          />
          <p className="text-center text-primary text-xl pt-4">
            Niveus Solutions Pvt. Ltd.
          </p>
        </div>
      </div>
      <div>
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
          Associate Sponsor
        </h1>
        <div className="max-w-7xl p-5">
          <Image
            priority
            src="/sponsors/unicourt.png"
            className="w-80 h-40 mx-auto"
            alt="logo"
            width={500}
            height={500}
          />
          <p className="text-center text-primary text-xl pt-4">Unicourt</p>
        </div>
      </div>
      <div>
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
          Industry Partner
        </h1>
        <div className="max-w-7xl p-5">
          <Image
            priority
            src="/sponsors/pacewisdom.png"
            className="w-80 h-20 mx-auto"
            alt="logo"
            width={500}
            height={500}
          />
          <p className="text-center text-primary text-xl pt-4">Unicourt</p>
        </div>
      </div>
      <div>
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
          Fitness Partner
        </h1>
        <div className="max-w-7xl p-5">
          <Image
            priority
            src="/zeus_logo.png"
            className="w-44 h-44 mx-auto"
            alt="logo"
            width={500}
            height={500}
          />
          <p className="text-center text-primary text-xl pt-4">
            Zeus Fitness Club
          </p>
        </div>
      </div>
      <div>
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
          Community Partner
        </h1>
        <div className="max-w-7xl p-5">
          <Image
            priority
            src="/sponsors/ieee-mss.png"
            className="w-80 h-20 mx-auto"
            alt="logo"
            width={500}
            height={500}
          />
          <p className="text-center text-primary text-xl pt-4">
            IEEE Mangalore Subsection
          </p>
        </div>
      </div>
      <div>
        <h1 className="select-none text-center text-4xl md:text-5xl font-semibold md:pb-10 pb-6">
          Venue Partner
        </h1>
        <div className="max-w-7xl p-5">
          <Image
            priority
            src="/sahyadri_logo.png"
            className="w-40 h-36 mx-auto"
            alt="logo"
            width={500}
            height={500}
          />
          <p className="text-center text-primary text-xl pt-4">
            Sahyadri College of Engineering & Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
