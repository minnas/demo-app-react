import { ReactElement, useEffect, useState } from "react";
import { useContentStyles } from "./styles";
import { search } from "@Api/api";
import { Item } from "@Types/types";
import Spinner from "@Components/tools/Spinner";
import Card from "@Components/tools/Card";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const FakePosts = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const [posts, setPosts] = useState([] as Item[]);
  const [loading, setLoading] = useState(false);
  const profiIcon = faUserNinja;

  useEffect(() => {
    setLoading(true);
    search()
      .then((items) => {
        setTimeout(() => {
          setPosts(items as Item[]);
          setLoading(false);
        }, 400);
      })
      .catch((e: Error) => {
        console.log("Something went wrong here " + e);
        setLoading(false);
      });
  }, []);

  return (
    <div className={stylesContent.content}>
      {loading ? <Spinner /> : ""}
      {posts.map((item: Item, index: number) => (
        <Card key={index} {...{ ...item, profiIcon }} />
      ))}
    </div>
  );
};
export default FakePosts;
