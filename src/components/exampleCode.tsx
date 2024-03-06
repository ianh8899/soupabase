export default function ExampleCode() {
    return (
        <section class="mt-20">
            <h3 class="text-lg font-bold py-4">Example Code</h3>
            <div class='bg-neutral-100 p-8 rounded mb-4 overflow-scroll'>
                <p>{`fetch('https://cloud-app.soupabase.workers.dev/soup/1')`}</p>
                <p>{`    .then(res=>res.json())`}</p>
                <p>{`    .then(json=>console.log(json))`}</p>
            </div>
            <button class="bg-green-800 hover:bg-green-900 px-4 py-2 text-white text-center rounded"
            hx-get="/example/get"
            hx-swap="outerHTML swap:code"
            >Try</button>
            <code></code>
        </section>
    )
}