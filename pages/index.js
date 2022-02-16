import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Form from "../components/Form";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Grid>
        <Head>
          <title>Propel - Contact Form</title>
          <meta name="description" content="Contact form" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero>
          <Contact>
            <p>Contact Us</p>
          </Contact>
          <h1 className={styles.title}>Business Enquiries</h1>

          <p className={styles.description}>
            Product, order or wholesale enquiries? We’d love to hear from you.
            By the way, please check out our FAQ’s where we’ve answered some of
            the most common questions.
          </p>
        </Hero>
        <div>
          <Form />
        </div>
      </Grid>
    </>
  );
}

const Grid = styled.main`
  display: flex;
  // display: grid;
  // grid-template-columns: repeat(6, 1fr);
  // grid-column-gap: 10px;
  width: 100%;
  min-height: 95vh;
  max-height: 95vh;
  //background: lightgrey;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
  //border: 1px solid black;
`;

const Contact = styled.div`
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Text = styled.div`
  padding-left: 200px;
`;
