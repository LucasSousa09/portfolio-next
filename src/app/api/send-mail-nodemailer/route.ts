import { google } from 'googleapis'
import nodemailer from 'nodemailer'

import XOAuth2 from 'nodemailer/lib/xoauth2' 

import { SendMessageData } from '../../../components/Form'

export async function POST( request: Request ){  
    const body: SendMessageData = await request.json()
    
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
    const REFRESH_TOKEN =  process.env.REFRESH_TOKEN
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";

    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    
    try {
        const accessTocken = await oAuth2Client.getAccessToken()
        
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAUTH2',
                user: 'lucassousa.emailsender@gmail.com',
                clientId: CLIENT_ID || '',
                clientSecret: CLIENT_SECRET || '',
                refreshToken: REFRESH_TOKEN || '',
                accessToken: String(accessTocken),
            }
        })

        const mailOptions = {
            from: 'Portfolio',
            to: 'lucasrodrigues.sousa09@gmail.com',
            subject: `Portfolio: Mensagem de ${body.name}`,
            text: 'Portfolio message',
            html: `
                <div>
                    <strong>Remetente:</strong>
                    <span>${body.name}</span>
                </div>
                <div>
                    <strong>Email:</strong>
                    <span>${body.email}</span>
                </div>
                <div>
                    <strong>Mensagem:</strong>
                    <span>${body.message}</span>
                </div>
            `
        }

        await transport.sendMail(mailOptions)
        
        return new Response('Email sucessfully sent', {
            status: 200
        })

    } catch(err){
        return new Response(JSON.stringify(err), {
            status: 500
        })
    }
}