const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full hero w-full bg-[#1e40af]">
      <div className="flex h-full flex-col items-center justify-center radial absolute w-full z-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
