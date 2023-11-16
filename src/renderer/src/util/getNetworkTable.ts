import { NetworkTables } from "ntcore-ts-client";

export default function getNetworkTable(): NetworkTables {
  if (import.meta.env.RENDERER_VITE_NT === "DEVELOPMENT") {
    return NetworkTables.getInstanceByURI("127.0.0.1", 5810);
  } else {
    return NetworkTables.getInstanceByTeam(import.meta.env.RENDERER_VITE_NT);
  }
}
