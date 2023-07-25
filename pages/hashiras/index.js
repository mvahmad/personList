import Link from "next/Link";
import stayles from "../../styles/hashira.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { Hashiras: data },
  };
};
const Hashiras = ({ Hashiras }) => {
  return (
    <div>
      <h1>Hashiras</h1>
      {Hashiras.map((Hashiras, index) => {
        return (
          <Link href={`/hashiras/${index}`} key={index}>
            <a className={stayles.single}>
              <h3>{Hashiras.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Hashiras;
