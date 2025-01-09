import DashboardHeader from "./components/ui/dashboard/dashboardHeader";
import DashboardFooter from "./components/ui/dashboard/dashboardFooter";
import BgLineEffect from "./components/ui/bgLineEffect/bgLineEffect";
import DashboardContent from "./components/ui/dashboard/dashboardContent";

export default function Home() {
  return (
    <div className="p-4 h-[100vh] flex flex-col gap-4 items-center justify-start">
      <BgLineEffect />
      <DashboardHeader />
      <DashboardContent />
      <DashboardFooter />
    </div>
  );
}
