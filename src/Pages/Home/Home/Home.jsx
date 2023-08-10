import Contact from "../Contact/Contact";
import Counter from "../Counter/Counter";
import Features from "../Features/Features";
import FixedGround from "../FixedGround/FixedGround";
import Freankly from "../Freankly/Freankly";
import HerePage from "../HerePage/HerePage";
import Portfolio from "../Portfolio/Portfolio";
import Pricing from "../Pricing/Pricing";
import ReviewSection from "../ReviewSection/ReviewSection";
import Subscribe from "../Subscribe/Subscribe";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <HerePage></HerePage>
            <Counter></Counter>
            <Features></Features>
            <Portfolio></Portfolio>
            <ReviewSection></ReviewSection>
            <Pricing></Pricing>
            <Freankly></Freankly>
             <FixedGround></FixedGround>
             <Subscribe></Subscribe>
             <Team></Team>
             <Contact></Contact>
        </div>
    );
};

export default Home;