import { IconType } from "react-icons";

interface SideBarComponentProps {
  icon: IconType;
  route: string;
}
const SideBarComponent = ({ icon, route }: SideBarComponentProps) => {
  const Icon = icon;
  return (
    <div role="button" className="flex px-4 p-2 gap-2">
      <Icon size={24} className="text-white" />
      <div className="flex-auto font-bold text-white hover:text-gray-800 transition-all duration-200">
        {route}
      </div>
    </div>
  );
};

export default SideBarComponent;
