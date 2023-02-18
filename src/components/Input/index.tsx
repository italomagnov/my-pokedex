type InputProps = {
    value: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ value, onchange }: InputProps) {
    return (
        <input
            value={value}
            onChange={onchange}
            className="w-full px-4 py-2 rounded-lg outline-none shadow-lg"
            type="text"
            placeholder="Digite o ID ou o nome do pokemon"
        />
    );
}
