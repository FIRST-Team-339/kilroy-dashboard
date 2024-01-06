// import getNetworkTable from '@renderer/util/getNetworkTable'
import Dashboard2023 from './Dashboard2023'
import MJPEGStream from "./MJpeg"

export default function DashboardLayout(): JSX.Element {
  // const networkTable = getNetworkTable();

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full">
      <div style={{ gridRow: 1, gridColumn: 1 }} className="flex flex-col p-4">
        <span className="pb-2 text-3xl font-bold">Camera</span>
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-100">
          <MJPEGStream />
          {/* <div className="h-full w-full rounded-md bg-clip-padding" style={{ backgroundImage: `url(${networkTable.getURI()}:1181/stream.mjpg)`}}/> */}
        </div>
      </div>
      <div style={{ gridRow: 2, gridColumn: 1 }} className="p-4">
        something will go here eventually
      </div>
      <div className="row-span-2 p-4 border-l-2 border-neutral-700">
        <Dashboard2023 />
      </div>
    </div>
  )
}
