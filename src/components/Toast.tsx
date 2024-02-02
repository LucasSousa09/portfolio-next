type ToastProps = {
    text: string
    success?: boolean
}

export function Toast({ text, success }: ToastProps){
    return (
        <span className={`font-medium text-center text-sm ${success ? 'bg-green-500' : 'bg-red-500'} w-full ${text !== '' && 'mt-2 py-2 px-5 lg:p-5'}`}>
            {text}
        </span>
    )
}