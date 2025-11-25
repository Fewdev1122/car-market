import Navbar from "../components/Navbar";
import Heros from "../components/Heros";
import Recommend from "../components/recommend";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Heros />
      <Recommend />
      <Footer />
    </div>
      
  );
}