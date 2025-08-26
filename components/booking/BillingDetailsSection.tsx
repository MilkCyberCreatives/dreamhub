import React from 'react';

const BillingDetailsSection = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-6">Billing details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First name *" className="input" />
        <input type="text" placeholder="Last name *" className="input" />
        <input type="text" placeholder="Company name (optional)" className="input md:col-span-2" />
        <input type="text" placeholder="Country / Region *" defaultValue="South Africa" className="input md:col-span-2" />
        <input type="text" placeholder="Street address *" className="input md:col-span-2" />
        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="input md:col-span-2" />
        <input type="text" placeholder="Town / City *" className="input" />
        <input type="text" placeholder="Province *" defaultValue="Gauteng" className="input" />
        <input type="text" placeholder="Postcode / ZIP *" className="input" />
        <input type="text" placeholder="Phone *" className="input" />
        <input type="email" placeholder="Email address *" className="input" />
      </div>
    </section>
  );
};

export default BillingDetailsSection;
