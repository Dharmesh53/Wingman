import { Navbar } from "../components/layout/navbar";

export function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-custom-background font-sans text-foreground dark:bg-custom-background/95">
      <Navbar />
      {children}
    </div>
  );
}
