export default function DataTypes() {
    return (
        <section class="mt-20">
            <h3 class="text-lg font-bold py-4">Data Types</h3>
            <h4 class="text-slate-700">All data types returned</h4>
            <table class="table-auto border-collapse w-full lg:max-w-80 my-4">
                <tbody>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">id:</td><td class="py-2 text-emerald-600 text-right">number</td></tr>
                    <tr><td class="py-2 text-blue-800">name:</td><td class="py-2 text-emerald-600 text-right">string</td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">ingredients:</td><td class="py-2 text-emerald-600 text-right">string[]</td></tr>
                    <tr><td class="py-2 text-blue-800">price:</td><td class="py-2 text-emerald-600 text-right">number</td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">hot:</td><td class="py-2 text-emerald-600 text-right">boolean</td></tr>
                    <tr><td class="py-2 text-blue-800">description:</td><td class="py-2 text-emerald-600 text-right">string</td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">imgUrl:</td><td class="py-2 text-emerald-600 text-right">string</td></tr>
                    <tr><td class="py-2 text-blue-800">origin:</td><td class="py-2 text-emerald-600 text-right">object</td></tr>
                    <tr class="bg-gray-50"><td class="py-2 text-blue-800">category:</td><td class="py-2 text-emerald-600 text-right">string</td></tr>
                    <tr><td class="py-2 text-blue-800">nullValue:</td><td class="py-2 text-emerald-600 text-right">null</td></tr>
                </tbody>
            </table>
        </section>
    )   
}