type FormLabelProps = {
    labelFor: string
    labelText: string
}

export function FormLabel({ labelFor, labelText }: FormLabelProps) {
    return (
        <label 
            htmlFor={labelFor}
            className="font-medium text-sm sm:text-base mb-1"
        >
            {labelText}
        </label>
    )
}