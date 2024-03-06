export default function DocExamples() {
    return (
        <section>
            <div class="mt-10">
                <h3 class="text-lg font-bold py-4">Fetch all soups (GET)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre overflow-auto'>
                {`fetch('https://cloud-app.soupabase.workers.dev/soup')
    .then(res => res.json())
    .then(json => console.log(json))`}
                </div>
            <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                hx-get="/soup"
                hx-swap="innerHTML"
                hx-target="#all-soup"
                >Get response</button>
                <code id="all-soup" class="block whitespace-pre-wrap max-h-48 overflow-auto p-8"></code>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-bold py-4">Fetch all soups with a limit parameter (GET)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre overflow-auto'>
                {`fetch('https://cloud-app.soupabase.workers.dev/soup?limit=2')
    .then(res => res.json())
    .then(json => console.log(json))`}
                </div>
            <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                hx-get="/soup?limit=2"
                hx-swap="innerHTML"
                hx-target="#limit-soup"
                >Get response</button>
                <code id="limit-soup" class="block whitespace-pre-wrap max-h-48 overflow-auto p-8"></code>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-bold py-4">Fetch soup by Id (GET)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre overflow-auto'>
                {`fetch('https://cloud-app.soupabase.workers.dev/soup/1')
    .then(res => res.json())
    .then(json => console.log(json))`}
                </div>
            <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                hx-get="/soup/1"
                hx-swap="innerHTML"
                hx-target="#one-soup"
                >Get response</button>
                <code id="one-soup" class="block whitespace-pre-wrap max-h-48 overflow-auto p-8"></code>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-bold py-4">Create a Soup (POST)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre overflow-auto'>
                {`fetch('https://cloud-app.soupabase.workers.dev/soup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: "Chocolate Soup",
      ingredients: ["Chocolate", "Milk", "Sugar"],
      price: 2.50,
      hot: true,
      description: "Chocolate soup is a made up soup for children",
      imgUrl: "www.newsoupbucket.com/chocolatesoup",
      origin: {year: 2024, by: "Samantha Suleke", source: "Gains & Gains"},
      category: "vegetarian",
    })
  })
  .then(res => res.json())
  .then(json => console.log(json))`}
                </div>
                <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                    hx-get="/example/post"
                    hx-swap="innerHTML"
                    hx-target="#post-soup"
                >Get Response</button>
                <code id="post-soup" class=""></code>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-bold py-4">Update a Soup (PATCH)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre overflow-auto'>
  {`fetch('https://cloud-app.soupabase.workers.dev/soup/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "id": "1",
        "name": "Tomato Soup",
        "price": 2.5,
        "ingredients": ["Tomatoes","Salt","Pepper"],
        "hot": true,
        "description": "A delicious tomato soup.",
        "imgUrl": "http://example.com/tomato-soup.jpg",
        "origin": {"year":1857,"by":"Eliza Leslie","source":"New Cookery Book"},
        "category": "vegan",
        "nullValue": null
    })
  })
  .then(res => res.json())
  .then(json => console.log(json))`}
</div>
                <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                    hx-get="/example/patch"
                    hx-swap="innerHTML"
                    hx-target="#patch-soup"
                >Get Response</button>
                <code id="patch-soup" class=""></code>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-bold py-4">Update a Soup (PUT)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre overflow-auto'>
  {`fetch('https://cloud-app.soupabase.workers.dev/soup/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "id": "1",
        "name": "Tomato Soup",
        "price": 2.5,
        "ingredients": ["Tomatoes","Salt","Pepper"],
        "hot": true,
        "description": "A delicious tomato soup.",
        "imgUrl": "http://example.com/tomato-soup.jpg",
        "origin": {"year":1857,"by":"Eliza Leslie","source":"New Cookery Book"},
        "category": "vegan",
        "nullValue": null
    })
  })
  .then(res => res.json())
  .then(json => console.log(json))`}
</div>
                <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                    hx-get="/example/put"
                    hx-swap="innerHTML"
                    hx-target="#put-soup"
                >Get Response</button>
                <code id="put-soup" class=""></code>
            </div>
            <div class="mt-20">
                <h3 class="text-lg font-bold py-4">Delete a Soup (DELETE)</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4 whitespace-pre'>
  {`fetch('https://cloud-app.soupabase.workers.dev/soup/1', {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(json => console.log(json))`}
</div>
            <button class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mb-4"
                hx-delete="/soup/1"
                hx-swap="innerHTML"
                hx-target="#delete-soup"
                >Get response</button>
                <code id="delete-soup" class="block whitespace-pre-wrap max-h-48 overflow-auto p-8"></code>
            </div>
            {/*}
            <div class="mt-8">
                <h3 class="text-lg font-bold py-4">Create a new soup using form data</h3>
                <div class='bg-neutral-100 p-8 rounded mb-4'>
                    <p>{`<form action="/formdata" method="post">`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Name:`}</p>
                    <p>{`        <input type="text" name="name" required />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Price:`}</p>
                    <p>{`        <input type="number" name="price" required />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Ingredients:`}</p>
                    <p>{`        <input type="text" name="ingredients" />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Hot:`}</p>
                    <p>{`        <input type="checkbox" name="hot" />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Description:`}</p>
                    <p>{`        <input type="text" name="description" />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Image URL:`}</p>
                    <p>{`        <input type="text" name="imgUrl" />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Origin:`}</p>
                    <p>{`        <input type="text" name="origin" />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <label>`}</p>
                    <p>{`        Category:`}</p>
                    <p>{`        <input type="text" name="category" />`}</p>
                    <p>{`    </label>`}</p>
                    <p>{`    <button type="submit">Create Soup</button>`}</p>
                    <p>{`</form>`}</p>
                </div>
                    <form class='bg-neutral-100 p-8 rounded mb-4 flex flex-col gap-4'
                        hx-post="/soup/formdata"
                        hx-swap="innerHTML"
                        hx-target="#new-soup">
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Price: <input type="number" name="price" required />
                    </label>
                    <label>
                        Ingredients: <input type="text" name="ingredients" />
                    </label>
                    <label>
                        Hot: <input type="checkbox" name="hot" />
                    </label>
                    <label>
                        Description: <input type="text" name="description" />
                    </label>
                    <label>
                        Image URL: <input type="text" name="imgUrl" />
                    </label>
                    <label>
                        Origin: <input type="text" name="origin" />
                    </label>
                    <label>
                        Category: <input type="text" name="category" />
                    </label>
                    <button type="submit" class="bg-green-800 text-white hover:bg-green-900 px-4 py-2 text-center rounded mt-4 mb-4 max-w-36">
                        Create Soup
                    </button>
                </form>
                <code id="new-soup" class="block whitespace-pre-wrap max-h-48 overflow-scroll p-8"></code>
            </div>
            */}
        </section>
    )
}