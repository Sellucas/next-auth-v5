import { Navbar } from "./_components/navbar";

interface ProtectLayoutProps {
  children: React.ReactNode;
}

const ProtectLayout = ({ children }: ProtectLayoutProps) => {
  return (
    <div className="h-full hero w-full bg-[#1e40af]">
      <div className="flex h-full flex-col items-center justify-center radial absolute w-full z-10">
          <Navbar />
        {children}
      </div>
    </div>
  );
};

export default ProtectLayout;
