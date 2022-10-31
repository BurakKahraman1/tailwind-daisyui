import Head from "next/head";
import Navbar from "../components/navbar";
import Fotter from "../components/Footer";
import Card from "../components/card";

function Home() {
  return (
    <div className=" bg-slate-400">
      <Head>
        <title>B-SHOP</title>
      </Head>
      <main className="px-6 py-4">
        <Navbar />
        <div className="p-4 max-w-5x1 grid gap-3 grid-cols-3">
          <div className="h-72 bg-zinc-200 grid-cols-2 col-span-2 rounded-2xl">
           <Card/>
           

        
          </div>

          <iframe
            style={{ height: "24rem", width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7414031699686!2d28.942563314887167!3d40.19256807716687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11368231b45d%3A0xc9386b7541c269b8!2zw5zDp2V2bGVyLCAxNjEyMCBOaWzDvGZlci9CdXJzYQ!5e0!3m2!1str!2str!4v1657874888191!5m2!1str!2str"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Fotter />
    </div>
  );
}

export default Home;
