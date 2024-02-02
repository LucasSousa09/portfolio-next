'use client'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm, SubmitHandler } from 'react-hook-form'

import { FormLabel } from "./FormLabel";

const SendMessageSchema = zod.object({
    name: zod.string()
            .min(3, 'O Nome deve conter mais que três caracteres')
            .max(30, 'O Nome deve conter menos que trinta caracteres'),
    email: zod.string()
            .email('Por favor, insira um email válido'),
    message: zod.string()
            .min(10, 'Uma mensagem deve conter no minímo 10 letras')
            .max(600, 'Uma mensagem deve conter menos que seiscentos caracteres')
})

export type SendMessageData = zod.infer<typeof SendMessageSchema>

export function Form() {
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SendMessageData>()
    
    const onSubmit: SubmitHandler<SendMessageData> = async (messageData) => {
        fetch('http://localhost:3000/api/send-message', {
            method: "POST",
            body: JSON.stringify(messageData),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-4 sm:mb-8">
            <strong className="font-medium text-sm sm:text-base lg:text-lg mb-5 lg:mb-8 md:whitespace-nowrap">Sinta-se à vontade para me contatar por qualquer um dos métodos abaixo</strong> 
            
            <FormLabel labelFor="name" labelText="Nome"/>
            <input 
                {...register("name")}
                id="name" 
                type="text" 
                className="mb-3 md:h-12 text-sm p-2 bg-zinc-500 text-white dark:bg-zinc-700" 
            />
            
            <FormLabel labelFor="email" labelText="Email"/>
            <input 
                {...register("email")}
                id="email" 
                type="text" 
                className="mb-3 md:h-12 text-sm p-2 bg-zinc-500 text-white dark:bg-zinc-700" 
            />
            
            <FormLabel labelFor="message" labelText="Mensagem"/>
            <textarea 
                {...register("message")}
                id="message" 
                className="mb-3 text-sm p-2 bg-zinc-500 text-white dark:bg-zinc-700 md:h-16 lg:h-40" 
            />

            <button className="font-medium text-sm sm:text-base bg-zinc-700 text-zinc-100 dark:bg-white dark:text-zinc-900 px-4 lg:px-6 py-2 lg:py-3 hover:shadow-arr-light dark:hover:shadow-arr-dark hover:text-shadow-dark-md dark:hover:text-shadow-light-md transition-all ease-linear md:w-fit" type="submit">Enviar!</button>
        </form>
    )
}