import "./App.css";
import NavigationView from "./views/NavigationView";
import DashboardView from "./views/DashboardView";

export default function App() {
  return (
    <>
      <NavigationView />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <DashboardView />
      </div>
    </>
  );
}