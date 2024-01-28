import { mailjet } from '../../../lib/mailjet'

import { SendMessageData } from '../../../components/Form'

export async function POST( request: Request ){
    const body: SendMessageData = await request.json()
    
    try {
        mailjet
            .post('send', { version: 'v3.1' })
            .request({
              Messages: [
                {
                  From: {
                    Email: "lucas.rodrigues.sousa@lrds.com.br",
                    Name: body.name
                  },
                  To: [
                    {
                      Email: "lucasrodrigues.sousa09@gmail.com",
                      Name: "Lucas Rodrigues"
                    }
                  ],
                  Subject: "Portifolio Message!",
                  TextPart: body.message,
                  HTMLPart: `<strong> Email sender: ${body.email}</strong>`
                }
              ]
            })
        
    
        return new Response('Email sucessfully sent!', {
            status: 200
        })
    }
    catch(err){
        return new Response(JSON.stringify(err), {
            status: 500
        })
    }
}