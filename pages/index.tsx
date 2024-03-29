import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import LogoOnlyHero from '../components/home/LogoOnlyHero';
import Pricing from '../components/home/Pricing';
import Layout from '../components/layout/Layout';

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: { ...(await serverSideTranslations(ctx.locale!, ['common', 'home'])) },
  };
};

export default function Home() {
  return (
    <Layout>
      <LogoOnlyHero />
     {/* <Hero />
      <Features />
      <Pricing />*/}
    </Layout>
  );
}
