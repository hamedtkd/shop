import { Footer, Header } from "@/layout"

export const Support = () => {
    return (
        <>
            <Header />
            <main className="container">
                <div className="pt-3 pe-4 pr-3 flex border-b mb-6">
                    <p className=" title">پشتیبانی </p>
                </div>
                <div className="flex flex-col gap-8 pb-6 pr-3">
                    <div className="flex flex-col gap-3" >
                        <h3 className="font-bold">آدرس دفتر مرکزی</h3>
                        <p>شیراز</p>
                    </div>
                    <div className="flex flex-col gap-3" >
                        <h3 className="font-bold">تلفن امور مشتریان (رسیدگی به شکایات):</h3>
                        <a href="tel:+989339719515" target="tel:+989339719515">09339719515</a>
                    </div>
                    <div className="flex flex-col gap-3" >
                        <h3 className="font-bold">تلفن‌های ضروری:</h3>
                        <div className="flex gap-3">
                            <a href="tel:+989339719515" target="tel:+989339719515">09339719515</a>
                            <p>-</p>
                            <a href="tel:+989214255120" target="tel:+989214255120">09214255120</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3" >
                        <h3 className="font-bold">ایمیل ما</h3>
                        <a href="mailto:huifshop@gmail.com" target="mailto:huifshop@gmail.com">huifshop@gmail.com</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}


