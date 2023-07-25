export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((hashira) => {
    return { params: { id: hashira.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { Hashiras: data },
  };
};
const Details = ({ Hashiras }) => {
  return (
    <div>
      <h1>{Hashiras.name}</h1>

      <p>{Hashiras.email}</p>
      <p>{Hashiras.website}</p>
      <p>{Hashiras.addres}</p>
    </div>
  );
};

export default Details;
