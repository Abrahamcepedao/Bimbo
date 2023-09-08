import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Header />
        <Banner />
          <div className="bg-back_primary">
              {children}
          </div>
        <Footer />
    </>
  )
}
