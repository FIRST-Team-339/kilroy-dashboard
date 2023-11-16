import { useNTConnected } from "ntcore-react";
import NotConnected from "./components/NotConnected";
import DashboardLayout from "./components/DashboardLayout";
import getNetworkTable from "./util/getNetworkTable";

export default function App(): JSX.Element {
  const connected = useNTConnected();
  const networkTable = getNetworkTable();

  return (
    <main className="bg-neutral-800 text-neutral-200 h-[85.4vh]">
      {!connected && <NotConnected />}
      {connected && <DashboardLayout />}
      <div className="absolute flex z-50 right-0 top-0 mt-4 mr-4 bg-neutral-950 rounded-md p-2">
        <span className="font-medium">NT Connection Status{connected ? ` | Connected to ${networkTable.getURI()}` : ""}</span>
        <div className={`h-6 w-6 rounded-full ml-2 ${connected ? "bg-indigo-500 shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_20px_#08f]" : "bg-red-500 shadow-[0_0_1px_#f10,inset_0_0_1px_#f10,0_0_5px_#f10,0_0_5px_#f10,0_0_20px_#f10]"}`}/>
      </div>
    </main>
  )
}