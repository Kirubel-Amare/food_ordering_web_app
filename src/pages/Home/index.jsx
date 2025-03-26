import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import { ProductPreview } from "../../components/productsPreview";

const Home = () => {
    return (
        <div>
       <Banner />
       <ProductPreview />
       <About />
       </div>
    );
}

export default Home;
