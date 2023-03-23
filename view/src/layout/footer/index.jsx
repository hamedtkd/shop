import { Button, TitleAndLink, } from "@/components/shared";
import nemad from '@/assets/images/nemad.jpg'
import { BoxSection } from "./BoxSection";

export const Footer = () => {
    return (
        <footer className="bg-gray-50">

            <div className="container mx-auto  pb-8 ">
                <div className="w-full flex justify-center items-center py-12  border border-white border-b-black">
                    <Button onClick={()=>{
                        window.scrollTo({top:0 , behavior:'smooth'})
                    }}>
                        بازگشت به بالا
                    </Button>
                </div>
              
              <BoxSection/>
                <div className="flex justify-between">
                    <div >
                        <TitleAndLink linkName={'09339719515'} title={'پشتیبانی تلفنی'} linkTo={'tel:+989339719515'} />
                    </div>
                    <div>{nemad}</div>
                </div>
            </div>
        </footer>
    );
}

