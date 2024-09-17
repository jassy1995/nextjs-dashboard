import { toast } from 'react-toastify';
type ToastType = 'success' | 'error' | 'info' | 'warning';

export const formatNaira = (amount: any) => {
  amount = parseFloat(amount);
  if (isNaN(amount)) {
    return 'Invalid amount';
  }
  return `₦${amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
export const shorttenString = (value: string, index: number) => {
  const removed = value?.slice(0, index);
  return `${removed}...`;
};
export const generateRandomString = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const notify = (type: ToastType, message: string) => {
  toast[type](message || 'Operation in progress...');
};
export const isObjectEmpty = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  return Object.keys(obj).length === 0;
};
export const round2 = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
