import { WindowProvider } from "@/components/os/WindowManager";
import { DesktopEnvironment } from "@/components/os/DesktopEnvironment";

export default function Home() {
  return (
    <WindowProvider>
      <DesktopEnvironment />
    </WindowProvider>
  );
}
