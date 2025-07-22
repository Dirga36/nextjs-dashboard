import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import Layout from '../../layout'
import { createInvoice } from '@/app/lib/actions';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <Layout>
      <form action={createInvoice} />
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Create Invoice',
              href: '/dashboard/invoices/create',
              active: true,
            },
          ]}
        />
        <Form customers={customers} />
      </main>
    </Layout>
  );
}