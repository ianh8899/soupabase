import { Hono } from "hono";
import { createClient } from "@supabase/supabase-js";
import { Env } from "../types";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const supabaseUrl = c.env.SUPABASE_URL; // Access environment variables through context
  const supabaseKey = c.env.SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const queryParams = c.req.query();
  const limit = queryParams.limit ? parseInt(queryParams.limit) : null;
  let query = supabase.from("Soups").select("*");

  if (limit) {
    query = query.limit(limit);
  }

  const { data: soups, error } = await query;

  if (error) throw error;

  return c.json(soups);
});

app.get("/:id", async (c) => {
  const supabaseUrl = c.env.SUPABASE_URL; // Access environment variables through context
  const supabaseKey = c.env.SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const id = c.req.param("id");
  const { data: soup, error } = await supabase
    .from("Soups")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return c.json(soup);
});

app.get("/category/all", async (c) => {
  const supabaseUrl = c.env.SUPABASE_URL; // Access environment variables through context
  const supabaseKey = c.env.SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: soups, error } = await supabase
    .from("Soups")
    .select("category");

  if (error) throw error;

  const categoryNames = [...new Set(soups.map((soup) => soup.category))];

  return c.json(categoryNames);
});

app.get("/category/:category", async (c) => {
  const supabaseUrl = c.env.SUPABASE_URL; // Access environment variables through context
  const supabaseKey = c.env.SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const category = c.req.param("category");
  const { data: soups, error } = await supabase
    .from("Soups")
    .select("*")
    .eq("category", category);

  if (error) throw error;

  return c.json(soups);
});

app.post("/", async (c) => {
  const {
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
    nullValue,
  } = await c.req.json();

  // Validate name and price
  if (!name || !price) {
    c.status(400);
    return c.text("Name and price are required");
  }

  // Create a new soup with all properties
  const newSoup = {
    id: 31,
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
    nullValue,
  };

  // Return the new soup with a 200 status code
  c.status(200);
  return c.json({ message: "New soup created!", soup: newSoup });
});

app.post("/formdata", async (c) => {
  const body = await c.req.parseBody();
  const {
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
  } = body;

  // Validate name and price
  if (!name || !price) {
    c.status(400);
    return c.text("Name and price are required");
  }

  // Create a new soup with all properties
  const newSoup = {
    id: 31,
    name,
    price,
    ingredients: ingredients || null,
    hot: hot || null,
    description: description || null,
    imgUrl: imgUrl || null,
    origin: origin || null,
    category: category || null,
    nullValue: null,
  };

  // Return the new soup with a 200 status code and a message
  c.status(200);
  return c.json({ message: "New soup created!", soup: newSoup });
});

app.patch("/:id", async (c) => {
  const id = c.req.param("id");
  const {
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
    nullValue,
  } = await c.req.json();

  // Update the soup with new properties
  const updatedSoup = {
    id,
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
    nullValue,
  };

  // Return the updated soup with a 200 status code
  c.status(200);
  return c.json({ message: "Soup updated!", soup: updatedSoup });
});

app.put("/:id", async (c) => {
  const id = c.req.param("id");
  const {
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
    nullValue,
  } = await c.req.json();

  // Update the soup with new properties
  const updatedSoup = {
    id,
    name,
    price,
    ingredients,
    hot,
    description,
    imgUrl,
    origin,
    category,
    nullValue,
  };

  // Return the updated soup with a 200 status code
  c.status(200);
  return c.json({ message: "Soup updated!", soup: updatedSoup });
});

app.delete("/:id", async (c) => {
  const id = c.req.param("id");

  return c.json({ message: `Soup ${id} deleted!` });
});

export default app;
