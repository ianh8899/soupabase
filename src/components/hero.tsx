export default function Hero(){
    return (
        <section class="mx-auto p-4">
            <div class="flex flex-col lg:flex-row items-center lg:space-x-4">
                <div class="lg:w-1/2 text-center lg:text-left">
                    <h1 class="text-4xl py-2 font-bold">Soup a base API</h1>
                    <p class='py-2 text-slate-700'>A free to use rest API that returns all data types for testing and teaching</p>
                    <div class="flex flex-wrap justify-center lg:justify-start gap-2">
                        <a href='https://github.com/ianh8899/soupabase.git' target="non-refer">
                            <button class="border bg-black text-white py-4 px-2 rounded w-48 flex items-center justify-around">GitHub Repo<i class="fa-brands fa-github px-2 text-xl"></i></button>
                        </a>
                        <a href='/docs'>
                            <button class="border bg-green-800 text-white py-4 px-2 rounded w-48 flex items-center justify-around">View the docs<i class="fa-regular fa-file text-xl"></i></button>
                        </a>
                    </div>
                </div>
                <div class="lg:mt-0 lg:w-1/2">
                    <img className="mx-auto max-w-full p-8" src="https://nkjrxeaxqegdcgdwbnbd.supabase.co/storage/v1/object/public/bucketOfSoup/heroImage1.webp" alt="soup" />
                </div>
            </div>
        </section>
    )
}