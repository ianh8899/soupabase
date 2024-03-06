export default function Routes () {
    return (
        <section class="mt-20">
            <h3 class="text-lg font-bold py-4">Routes</h3>
            <h4 class="text-slate-700">HTTP methods supported</h4>
            <table class="table-auto border-collapse w-full lg:max-w-96 my-4">
                <tbody>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">GET</td><td class="font-semibold py-2 text-emerald-600 text-right hover:text-emerald-800"><a href="/soup" target="_blank">/soup</a></td></tr>
                    <tr><td class="py-2 text-blue-800">GET</td><td class="font-semibold py-2 text-emerald-600 text-right hover:text-emerald-800"><a href="/soup?limit=5" target="_blank">/soup?limit=5</a></td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">GET</td><td class="font-semibold py-2 text-emerald-600 text-right hover:text-emerald-800"><a href="/soup/1" target="_blank">/soup/1</a></td></tr>
                    <tr><td class="py-2 text-blue-800">GET</td><td class="font-semibold py-2 text-emerald-600 text-right hover:text-emerald-800"><a href="/soup/category/all" target="_blank">/soup/category/all</a></td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">GET</td><td class="font-semibold py-2 text-emerald-600 text-right hover:text-emerald-800"><a href="/soup/category/vegetarian" target="_blank">/soup/category/vegetarian</a></td></tr>
                    <tr><td class="py-2 text-blue-800">POST</td><td class="py-2 text-right">/soup</td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">PUT</td><td class="py-2 text-right">/soup/1</td></tr>
                    <tr><td class="py-2 text-blue-800">PATCH</td><td class="py-2 text-right">/soup/1</td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">DELETE</td><td class="py-2 text-right">/soup/1</td></tr>
                </tbody>
            </table>
            <p class="text-slate-500 text-sm pt-2">Note that POST, PUT, PATCH and DELETE are simulated and won't affect the database</p>
        </section>
    )
}