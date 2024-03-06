export default function Navbar(){
    return (
        <nav class="flex items-center justify-between px-8 py-6 w-full mx-auto">
                <a href="/"><img class="w-12 h-12 rounded-xl" src='https://nkjrxeaxqegdcgdwbnbd.supabase.co/storage/v1/object/public/bucketOfSoup/logo.svg?t=2024-02-28T12%3A11%3A16.310Z' alt="logo" /></a>
                <div class="flex items-center justify-between gap-4 sm:gap-8">
                    <a class="hover:text-gray-700" href="/">Home</a>
                    <a class="hover:text-gray-700" href="/docs">Docs</a>
                    <a class="hover:text-gray-700" href="/donate">Donate</a>
                </div>
        </nav>
    )
}
