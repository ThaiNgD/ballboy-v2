import { IconType } from "react-icons";

interface SideBarComponentProps {
  icon: IconType;
  route: string;
}
const SideBarComponent = ({ icon, route }: SideBarComponentProps) => {
  const Icon = icon;
  return (
    <div role="button" className="flex items-center group px-4 p-2 gap-4">
      <Icon
        size={20}
        className="text-white group-hover:text-gray-800 transition-all duration-200"
      />
      <div className="flex-auto font-semibold text-white group-hover:text-gray-800 transition-all duration-200">
        {route}
      </div>
    </div>
  );
};

export default SideBarComponent;
