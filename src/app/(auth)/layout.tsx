import BackGroundImage from "@/assets/images/background-image.jpg";
import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex items-center shadow-lg relative overflow-hidden justify-between bg-white h-screen`}
    >
      <Image
        src={BackGroundImage}
        className="lg:block absolute h-screen object-cover w-screen hidden"
        alt="Background Image"
      />
      <div className="w-full flex items-center justify-center lg:absolute lg:left-[27.5%]">
        <div className="relative border p-[20px] pt-[40px] flex flex-col gap-[20px] shadow-xl rounded-2xl w-[500px] h-[full] bg-white">
          <Image
            src={LogoImage}
            className="w-[80%] m-auto rounded-md"
            alt="Logo Image"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
