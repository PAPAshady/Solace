import Banner from '@templates/index/Banner';
import Services from '@templates/index/Services';
import AboutUs from '@templates/index/AboutUs';

export default function page() {
  return (
    <>
      <Banner />
      <div className="space-y-25 pb-16 lg:space-y-50">
        <Services />
        <AboutUs />
      </div>
    </>
  );
}
