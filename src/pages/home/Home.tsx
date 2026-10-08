import ComingUpNext from "../../components/home/comingUpNext/ComingUpNext";
import ExperienceGallery from "../../components/home/experienceGallery/ExperienceGallery";
import ExploreCategories from "../../components/home/exploreCategories/ExploreCategories";
import FeaturedExperiences from "../../components/home/featuredExperiences/FeaturedExperiences";
import Hero from "../../components/home/HeroSection";
import HowItWorks from "../../components/home/HowItWorks";
import TrendingExperiences from "../../components/home/trendingExperiences/TrendingExperiences";
import WeekendSpecial from "../../components/home/weekendSpecial/WeekendSpecial";

const Home = () => {
  return (
    <main>
      <Hero />
      <ExploreCategories />
      <FeaturedExperiences />
      <TrendingExperiences />
      <HowItWorks />
      <ComingUpNext />
      <ExperienceGallery />
      <WeekendSpecial />
    </main>
  );
};

export default Home;
