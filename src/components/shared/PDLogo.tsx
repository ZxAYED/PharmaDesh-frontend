import Image from "next/image";
import logo from "../../assets/logo/logo.png";
const PharmaDeshLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={logo}
        alt="PharmaDesh"
        width={300}
        quality={100}
        height={100}
        className="w-44 "
      />
    </div>
    // <div className="flex items-center space-x-3 drop-shadow ">
    //   <Pill
    //     size={32}
    //     className="bg-gradient-to-r from-teal-600 via-blue-500 to-teal-600 bg-clip-text "
    //   />
    //   <h1 className="text-2xl font-bold text-primary ">PharmaDesh</h1>
    // </div>
  );
};

export default PharmaDeshLogo;
