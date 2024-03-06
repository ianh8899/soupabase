import { Hono } from 'hono'
//import bookRouter from './routes/book'
import exampleRouter from './routes/examples'
import soupRouter from './routes/soup'
import Layout from './layouts/index'
import Hero from './components/hero'
import Description from './components/description'
import ExampleCode from './components/exampleCode'
import Routes from './components/routes'
import DataTypes from './components/dataTypes'
import HowToUse from './components/howToUse'
import DocExamples from './components/docExamples'
import BuyMeACoffee from './components/buyMeACoffee'
import ThankYou from './components/thankYou'

const app = new Hono()

//app.route('/book', bookRouter)
app.route('/example', exampleRouter)
app.route('/soup', soupRouter)
app.get('/', (c) => {
    return c.html(
    <Layout>
        <Hero />
        <Description />
        <ExampleCode />
        <Routes />
        <DataTypes />
    </Layout>
    )
})

app.get('/docs', (c) => {
    return c.html(
    <Layout>
        <HowToUse />
        <DocExamples />
    </Layout>
    )
})

app.get('/donate', (c) => {
    return c.html(
    <Layout>
        <ThankYou />
        <BuyMeACoffee />
    </Layout>
    )
})


export default app