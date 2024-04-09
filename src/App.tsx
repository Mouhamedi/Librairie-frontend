import { Outlet } from "react-router-dom";
import { Header, NavMenu } from "./layouts";

export function App() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <NavMenu />
      </div>
      <div className="flex flex-col">
        {/* Header goes here */}
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;