import { Navmenu } from "@/components/shared/NavMenu";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navmenu></Navmenu>
      {children}
    </div>
  );
};

export default Rootlayout;
