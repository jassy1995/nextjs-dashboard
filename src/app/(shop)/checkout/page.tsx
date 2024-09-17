'use client';

import { withAuth } from '@/components/guards/auth';
import styles from '@/util/style';
import React, { FC } from 'react';

const Checkout: FC = () => {
  return (
    <div
      className={`flex flex-col space-y-4 pt-7 pb-6 bg-white ${styles.paddingX}`}
    >
      <h1>This is the checkout page</h1>
    </div>
  );
};

export default withAuth(Checkout);
