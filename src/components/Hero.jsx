import heroImage from "/assets/hero.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-150 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Bienvenido a TTechStore
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          Descubre la mejor tecnología al mejor precio. Laptops, smartphones, accesorios y mucho más.
        </p>
        <Link to="/productos" className="rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-700">
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default Hero;