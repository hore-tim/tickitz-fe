export default function Bioskop() {
    return (
      <div>
        <h1>Halaman Bioskop</h1>
        <p>Ini adalah halaman bioskop {nama_bioskop}.</p>
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const bioskops = ["CGV", "XXI", "Cinema 21", "New Star"];
  
    const paths = bioskops.map((bioskop) => ({
      params: { nama_bioskop: bioskop.toLowerCase() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    return { props: { nama_bioskop: params.nama_bioskop } };
  }