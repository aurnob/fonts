const FormInput = ({ label, register, name, errors, placeholder, ...props }) => (
    <div className="flex flex-col">
        <label className="font-medium">{label}</label>
        <input
            {...register(name)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            {...props}
        />
        {errors[name] && (
            <span className="text-red-500 text-sm">{errors[name].message}</span>
        )}
    </div>
);

export default FormInput;