import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-screen overflow-auto w-full flex flex-col items-center justify-center bg-black">
      <Navbar />
      <div className="py-6">{children}</div>
    </div>
  );
};
export default ProtectedLayout;
