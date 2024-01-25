import Layout from "@/components/layout";
import Head from "next/head";
import ContactItem from "@/components/contact/contact-item";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>김세은-contact</title>
      </Head>
      <ContactItem />
    </Layout>
  );
}
