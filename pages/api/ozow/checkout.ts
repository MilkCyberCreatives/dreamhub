import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, campType, amount } = req.body;

  const siteCode = 'DREAMHUBNPCB2C4D03231'; // ✅ Your real SiteCode
  const privateKey = '2c580709c3fd4fdabb359cd7e35cba9e'; // ✅ Your real Private Key
  const currencyCode = 'ZAR';
  const countryCode = 'ZA';
  const transactionReference = `DREAMHUB-${Date.now()}`;
  const successUrl = 'https://dreamhub.co.za/booking/success';
  const cancelUrl = 'https://dreamhub.co.za/booking/cancel';
  const notifyUrl = 'https://dreamhub.co.za/api/ozow/notify'; // ✅ You said this is fine
  const isTest = false; // Set to true for testing

  const paymentParams = {
    siteCode,
    countryCode,
    currencyCode,
    amount: parseFloat(amount).toFixed(2),
    transactionReference,
    bankReference: transactionReference,
    customer: name,
    customerEmail: email,
    notifyUrl,
    successUrl,
    cancelUrl,
    isTest: isTest.toString(),
  };

  // String to hash
  const hashString = `${paymentParams.siteCode}${paymentParams.countryCode}${paymentParams.currencyCode}${paymentParams.amount}${paymentParams.transactionReference}${paymentParams.bankReference}${paymentParams.customer}${paymentParams.customerEmail}${paymentParams.notifyUrl}${paymentParams.successUrl}${paymentParams.cancelUrl}${paymentParams.isTest}${privateKey}`;

  const hash = crypto.createHash('sha512').update(hashString).digest('hex');

  const ozowUrl = new URL('https://secure.ozow.com/process');
  Object.entries(paymentParams).forEach(([key, value]) => {
    ozowUrl.searchParams.append(key, value);
  });
  ozowUrl.searchParams.append('hashCheck', hash);

  res.status(200).json({ redirectUrl: ozowUrl.toString() });
}
