import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Layout({ children }: {children: JSX.Element[]}){
    return (
        <html lang="en">
            <head>
            <title>Soupabase API</title>
            <meta name="description" content="Soupabase API is free REST API for real-pseudo data for your frontend application. All data types can be destructured for prototyping, testing and teaching." />
            <meta name="keywords" content="API, Frontend, Front end, Typescript, REST, HTTP"></meta>
            <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
            <meta name="author" content="Ianh8899"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://kit.fontawesome.com/644aedb879.js" crossorigin="anonymous"></script>
            {/*<link href="/output.css" rel="stylesheet"></link>*/}
            </head>
            <body class="bg-[#fdfffe] font-mono flex flex-col min-h-full">
                <div class="w-5/6 lg:w-3/5 mx-auto flex-grow">
                    <Navbar />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}