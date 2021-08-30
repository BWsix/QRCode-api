import type { GetServerSideProps, NextPage } from "next";
import QRCode from "qrcode.react";

const Home: NextPage<{ url: string }> = ({ url }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <QRCode renderAs="svg" value={url} size={290} level={"H"} />
      <h2>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "underline", color: "darkslateblue" }}
        >
          {url}
        </a>
      </h2>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: { url: query.url },
  };
};

export default Home;
