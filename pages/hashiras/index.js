import Link from "next/Link";
import stayles from "../../styles/hashira.module.css";
import axios from "axios";
import { useQuery, dehydrate, QueryClient } from "react-query";

const fetchPosts = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["hashira"], fetchPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
const Hashiras = ({ Hashiras }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["hashira"],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <h1>Hashiras</h1>
      {data.map((Hashiras) => {
        return (
          <Link href={`/hashiras/${Hashiras.id}`} key={Hashiras.id}>
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
