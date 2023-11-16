import { NetworkTablesTypeInfos } from "ntcore-ts-client";
import { useNTState, useNTValue } from "ntcore-react"

export default function Dashboard2023(): JSX.Element {
    const currentGear = useNTValue<"Gear 1" | "Gear 2" | "Gear 3">("/kilroy/drive/currentGear", NetworkTablesTypeInfos.kString, "Gear 1");
    const inReverse = useNTValue<boolean>("/kilroy/drive/inReverse", NetworkTablesTypeInfos.kBoolean, false);
    const eBrakeEngaged = useNTValue<boolean>("/kilroy/drive/eBrakeEngaged", NetworkTablesTypeInfos.kBoolean, false);

    const autonomousDisabled = useNTValue<boolean>("/kilroy/autonomous/disabled", NetworkTablesTypeInfos.kBoolean, false);
    const [autonomousMode, setAutonomousMode] = useNTState<number>("/kilroy/autonomous/mode", NetworkTablesTypeInfos.kInteger, 0);
    enum LeftRightNone {
        Left = -1,
        None = 0,
        Right = 1
    }
    const [leftRightNone, setLeftRightNone] = useNTState<LeftRightNone>("/kilroy/autonomous/left-right-none", NetworkTablesTypeInfos.kInteger, LeftRightNone.None);

    return (
        <>
            <h1 className="text-center text-5xl text-orange-500 tracking-wider font-black">Kilroy 339</h1>
            <div>
                <span className="text-3xl font-bold">Gears</span>
                <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding p-4 mt-2 backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-100">
                    <span className={`text-2xl px-4 font-semibold ${inReverse ? "text-green-500" : "text-neutral-400"}`}>Reverse</span>
                    <span className={`text-2xl px-4 font-semibold ${!inReverse && currentGear == "Gear 1" ? "text-green-500" : "text-neutral-400"}`}>Gear 1</span>
                    <span className={`text-2xl px-4 font-semibold ${!inReverse && currentGear == "Gear 2" ? "text-green-500" : "text-neutral-400"}`}>Gear 2</span>
                    <span className={`text-2xl px-4 font-semibold ${!inReverse && currentGear == "Gear 3" ? "text-green-500" : "text-neutral-400"}`}>Gear 3</span>
                </div>
            </div>
            <div>
                <span className="text-3xl font-bold">E-Brake Engaged</span>
                <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding p-4 mt-2 backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-100">
                   <div className={`h-20 w-20 rounded-full ${eBrakeEngaged ? "bg-green-500 shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_5px_#0f8,0_0_5px_#0f8,0_0_20px_#0f8]" : "bg-neutral-400 border-4 border-neutral-500"}`}/>
                </div>
            </div>
            <div className="mt-2">
                <span className="text-3xl font-bold">Autonomous</span>
                <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding p-4 mt-2 backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-100">
                    <div>
                        <span className={`text-2xl px-4 font-semibold ${autonomousDisabled ? "text-neutral-300" : "text-red-500"}`}>Disabled</span>
                        <span className={`text-2xl px-4 font-semibold ${autonomousDisabled ? "text-green-500" : "text-neutral-300"}`}>Enabled</span>
                    </div>
                    <div>
                        <span className="text-2xl font-bold">Autonomous Mode</span>
                        <br />
                        <select name="autoSelector" id="autoSelector" value={autonomousMode} className="bg-neutral-900 rounded-md text-2xl px-4 font-semibold" onChange={(e): void => setAutonomousMode(e.target.value as unknown as number)}>
                            <option value={0}>Drive Forward Only</option>
                            <option value={1}>Drive Turn Drive</option>
                            <option value={2}>Drive Over Charging Station</option>
                            <option value={3}>Drop Cube Drive Forward</option>
                        </select>
                    </div>
                    <div>
                        <span className="text-2xl font-bold">Left-Right-None Setting</span>
                        <br />
                        <select name="autoSelector" id="autoSelector" value={leftRightNone} className="bg-neutral-900 rounded-md text-2xl px-4 font-semibold" onChange={(e): void => setLeftRightNone(e.target.value as unknown as LeftRightNone)}>
                            <option value={LeftRightNone.Left}>Left</option>
                            <option value={LeftRightNone.Right}>Right</option>
                            <option value={LeftRightNone.None}>None</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}