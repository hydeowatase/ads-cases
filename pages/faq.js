import { useEffect, useState } from "react"
import Link from "../src/components/Link/"

export async function getStaticProps(context) {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

    const faqs = await fetch(FAQ_API_URL)
        .then((serverResponse) => {
            return serverResponse.json()
        })
        .then((response) => {
            return response
        })

    return {
        props: { faqs }, // will be passed to the page component as props
    }
}

export default function Faq({ faqs }) {
    console.log(faqs)
    return (
        <div>
            <h1>Faq Page</h1>
            <Link href="/" passHref>
                Return
            </Link>
            <ul>
                {faqs.map(({ answer, question }) => {
                    return (
                        <li key={question}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}