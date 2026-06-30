import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {

  return (

    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8 bg-slate-100 min-h-screen">
          {children}
        </div>

      </div>

    </div>

  );
}