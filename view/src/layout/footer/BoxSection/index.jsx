import { TitleAndLink } from "@/components";
import { IntagramIcon, SupportIccon } from "@/components/shared/icons";
import { ReceiptRefundIcon, TruckIcon } from "@heroicons/react/24/outline";

export const BoxSection = () => {
    return (
        <div className="w-full flex justify-center items-center py-4 bg-slate-100 border-gray-500 mt-12 rounded-3xl">
            <ul className="flex w-11/12  justify-evenly">
                <li>
                    <TitleAndLink linkName={'جزئيات ارسال رايگان'} linkTo='/about_post' title={'ارسال با پست'} icon={<TruckIcon className="h-6 w-6 text-primary" />} />
                </li>
                <li>
                    <TitleAndLink linkName={'شرايط خدمات پس از فروش'} linkTo={'/'} title={'7روز ضمانت بازگشت'} icon={<ReceiptRefundIcon className="h-6 w-6 text-primary" />} />
                </li>
                <li>
                    <TitleAndLink linkName={'24 ساعته'} linkTo={'/support'} title={'پشتیبانی خرید'} icon={<SupportIccon className="h-6 w-6 text-primary" />} />
                </li>
                <li>
                    <TitleAndLink linkName={'@huifshop'} linkTo={'https://www.instagram.com/huifshop'} title={'ما را در اینستاگرام دنبال کنید'} icon={<IntagramIcon />} />
                </li>
            </ul>
        </div>
    );
}

