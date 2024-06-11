import Header from "./_components/header";
import Footer from "./_components/footer";

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
