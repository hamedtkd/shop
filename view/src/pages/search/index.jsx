import { Footer, Header } from "@/layout";


import { FilterBox } from "./filterBox";
import { MainBox } from "./mainBox";
import { useSearch } from "./useSearch";

export const Search = () => {
    
    return (
        <>
            <Header />
            <main className="container">
                <div className="flex gap-5">
                    <FilterBox />
                    <MainBox />
                </div>
            </main>
            <Footer />

        </>
    );
}

