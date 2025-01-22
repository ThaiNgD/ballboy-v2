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
        <>{children}</>
      </div>
    </div>
  );
}
