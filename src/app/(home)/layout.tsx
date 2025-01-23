import Header from "@/components/layout/homepage/Header";
import SideBar from "@/components/layout/homepage/SideBar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <div className="flex flex-col flex-auto">
        <Header />
        <div className="bg-[#399918] flex-auto">
          <div className=" rounded-t-lg rounded-tr-none shadow-inner w-full h-full bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
