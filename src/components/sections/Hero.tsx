import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../common/Container";

import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight text-red-900 md:text-6xl">
              गोपाल जी की दुकान
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              श्रद्धा से सजे, प्रेम से बने। Discover premium pooja essentials,
              spiritual gifts, and devotional products crafted with care.
            </p>

            <div className="mt-8 flex gap-4">
              <Button onClick={() => navigate("/products")}>Shop Now</Button>

              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={heroImage}
              alt="Lord Krishna"
              className="max-h-[550px] w-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
