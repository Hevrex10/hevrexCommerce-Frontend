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
      <main className="flex-1">{children}</main>
    </>
  );
}
