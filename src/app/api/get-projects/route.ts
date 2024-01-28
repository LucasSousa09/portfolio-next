import { Client, fql } from 'fauna'
import { NextRequest } from 'next/server'

const client = new Client({ secret: process.env.FAUNA_SERVER_KEY})

export async function GET( request: NextRequest ){
       try {
            const dbReponse = await client.query(
                fql`Project.all()`
            )

            return new Response(JSON.stringify(dbReponse.data), { status: 200 })
       }

       catch(err) {
            return new Response(JSON.stringify(err), {
                status: 404
            })
       } 
}