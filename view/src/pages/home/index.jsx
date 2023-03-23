import { Footer, Header } from "@/layout";
import Boxs from "./boxs/ineds";
import ProdctSwiper from "./productSwiper";
import SliderComponent from "./SliderComponent";
// import Header from "@/layout";

export const Home = () => {
    return (
        <>
            <Header />
            <div className="mx-auto container">

                <SliderComponent />
                <ProdctSwiper title={ 'پر بازدیدترین محصولات'} tag={'پربازدیدترین'}/>
                <Boxs />
                <ProdctSwiper  title={ 'پر فروش ترین محصولات'} tag={'پرفروشترین'}/>
                {/* <ProdctSwiper title={ 'نظرات شما'} sendTo={'/products'}/> */}

            </div>
            <Footer />

        </>
    );
}

 