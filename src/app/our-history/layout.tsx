import Footer from "@/components/footer";

export default function OurHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Snap scroll zone — fixed panels live inside here */}
      <div id="history-scroll-zone">
        {children}
      </div>

      {/* Footer sits completely outside the snap/fixed stacking context */}
      <div style={{ position: "relative", zIndex: 30, background: "var(--background)" }}>
        <Footer />
      </div>
    </>
  );
}
