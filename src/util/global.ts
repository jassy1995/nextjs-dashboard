export const formatNaira = (amount: any) => {
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        return "Invalid amount";
    }
    return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
