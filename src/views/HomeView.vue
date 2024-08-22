<template>
    <div id="HomePage">
        <BannerTop />
        <ContactBlock />
        <OurProducts />
        <OurServices />

        <GraphicBanner 
            :backgroundImage="'./assets/images/banner/banner_2.jpg'" 
            subtitle="Pottery Workshop"
            title="Turning mud intro something amazing"
            copy="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit, iste, iure tempora sequi doloremque, nemo voluptas neque magni harum itaque perferendis consectetur ad. Vero deserunt pariatur magni ex autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit, iste, iure tempora sequi doloremque, nemo voluptas neque magni harum itaque perferendis consectetur ad. Vero deserunt pariatur magni ex autem."
            path="/portfolio" 
            btnText="Discover More" 
        />

        <TextContainer 
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
            paragraph="Suspendisse interdum condimentum ipsum, nec rutrum libero pellentesque eu. Vestibulum consectetur commodo ex non semper. Phasellus egestas lacinia enim sit amet rhoncus. Aliquam non nunc augue. Aliquam bibendum neque et nunc bibendum placerat. Nunc urna metus, hendrerit quis viverra luctus, semper vitae mi. Duis tincidunt iaculis rhoncus." 
        />

        <Counter />
        <ChooseUs />
        <OurTeam />

        <GraphicBanner 
            :backgroundImage="'./assets/images/5.jpg'" 
            customClass="flex-row-reverse"
            title="Turning mud intro somerhing amazing"
            copy="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            path="/portfolio" 
            btnText="Discover More" 
        />

        <Testimonials />
    </div>
</template>

<script>

import BannerTop from './../components/BannerTop';
import ContactBlock from './../components/ContactBlock';
import OurProducts from './../components/OurProducts/OurProductsSection';
import OurServices from './../components/ChooseUs/ChooseUsBlock';
import GraphicBanner from './../components/GraphicBanner';
import TextContainer from './../components/TextContainer';
import Counter from './../components/Counter/CounterComponent';
import ChooseUs from './../components/ChooseUs/ChooseUsSection';
import OurTeam from './../components/OurTeam/OurTeamSection';
import Testimonials from './../components/TestimonialsSection';

export default {
    name: 'HomeView',
    components: {
        BannerTop,
        ContactBlock,
        OurProducts,
        OurServices,
        GraphicBanner,
        TextContainer,
        Counter,
        ChooseUs,
        OurTeam,
        Testimonials,
    }
}
</script>

<style lang="scss"></style>