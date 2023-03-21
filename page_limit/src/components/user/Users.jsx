import { useEffect, useState } from "react";
import fakeFetch2 from "../../utlis/fakeFetch";
import Pagination from "../common/paginition";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {
  // console.log(fakeFetch2());
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("asc");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    fakeFetch2({
      page,
      limit,
      orderBy
    })
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setError(true);
      });
  }, [page, limit, orderBy]);
  console.log(data);
  return (
    <div>
      {loading && <div data-testid="loading-indicator">...loading</div>}
      {error && (
        <div data-testid="error-indicator">Error: Something went wrong</div>
      )}
      {data?.data?.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
      <Filters
        order={orderBy}
        limit={limit}
        setOrderBy={setOrderBy}
        setLimit={setLimit}
      />
      <Pagination current={page} total={data?.totalPages} onChange={setPage} />
    </div>
  );
}
export default Users;