export const formatNaira = (amount: any) => {
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        return "Invalid amount";
    }
    return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
export const shorttenString = (value: string, index: number) => {
    const removed = value?.slice(0, index);
    return `${removed}...`
}
