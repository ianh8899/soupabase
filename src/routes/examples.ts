import { Hono } from 'hono'
const app = new Hono()

app.get('/get', async (c) => {
    const exampleData = {
      "id": 1,
      "name": "Tomato Soup",
      "ingredients": ["Tomato", "Water", "Salt", "Pepper"],
      "price": 10,
      "hot": true,
      "description": "Tomato soup is a soup made from tomatoes, simmered in water, usually with...",
      "imgUrl": "https://nkjrxeaxqegdcgdwbnbd.supabase.co/storage/v1/object/public/bucketOfSoup/1%20-%20TomatoSoup.jpg",
      "origin": {"year": 1857, "by": "Eliza Leslie", "source": "New Cookery Book"},
      "category": "vegan",
      "nullValue": null
    };

    // Prettify JSON and return HTML
    const prettifiedJson = JSON.stringify(exampleData, null, 2);
    const htmlContent = `<pre style="background-color: #f5f5f5; padding: 2rem; border-radius: 0.5rem; overflow-x:auto;">${prettifiedJson}</pre>`;
    return c.html(htmlContent);
});

app.get('/post', async (c) => {
    const exampleData = {
        "message": "New soup created!",
        "soup": {
            "id": 31,
            "name": "Chocolate Soup",
            "price": 2.5,
            "ingredients": [
                "Chocolate",
                "Milk",
                "Sugar"
            ],
            "hot": true,
            "description": "Chocolate soup is a made up soup for children",
            "imgUrl": "www.newsoupbucket.com/chocolatesoup",
            "origin": "{year: 2024, by: 'Samantha Suleke', source: 'Gains & Gains'}",
            "category": "vegetarian",
            "nullValue": null
        }
    };
  
      // Prettify JSON and return HTML
      const prettifiedJson = JSON.stringify(exampleData, null, 2);
      const htmlContent = `<pre style="padding: 2rem; border-radius: 0.5rem; overflow-x:auto;">${prettifiedJson}</pre>`;
      return c.html(htmlContent);
})

app.get('/patch', async (c) => {
    const exampleData = {
      "message": "Soup updated!",
      "soup": {
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
      }
    };
  
    // Prettify JSON and return HTML
    const prettifiedJson = JSON.stringify(exampleData, null, 2);
    const htmlContent = `<pre style="padding: 2rem; border-radius: 0.5rem; overflow-x:auto;">${prettifiedJson}</pre>`;
    return c.html(htmlContent);
  });

  app.get('/put', async (c) => {
    const exampleData = {
      "message": "Soup updated!",
      "soup": {
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
      }
    };
  
    // Prettify JSON and return HTML
    const prettifiedJson = JSON.stringify(exampleData, null, 2);
    const htmlContent = `<pre style="padding: 2rem; border-radius: 0.5rem; overflow-x:auto;">${prettifiedJson}</pre>`;
    return c.html(htmlContent);
  });

export default app