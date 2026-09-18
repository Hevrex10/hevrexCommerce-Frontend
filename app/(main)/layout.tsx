import Navigation from "../../components/Navigation";
import AnouncementBar from "../../components/AnnouncementBar";
import Footer from "../../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <AnouncementBar />
        <Navigation />
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
