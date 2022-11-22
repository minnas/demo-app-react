import { ReactElement, useEffect, useState } from "react";
import { useContentStyles, useListItemStyles } from "./styles";
import { ApiType, search } from "@Api/api";
import { Item, Product, RawItem } from "@Types/types";
import Spinner from "@Components/tools/Spinner";
import Card from "@Components/tools/Card";
import {
  faMinus,
  faPlus,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { addProduct, removeProduct } from "@Store/dataSlices";
import Toast from "@Components/tools/Toast";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { useTranslation } from "react-i18next";

const FakeShop = (): ReactElement => {
  const { t } = useTranslation();
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const stylesItem = useListItemStyles(theme);
  const dispatch = useDispatch();
  const myProducts = useSelector((state: RootState) => state.products);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState(t("toast-msg-save"));
  const [products, setProducts] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);
  const profiIcon = faUserDoctor;

  const add = (item: Item) => {
    if (myProducts.find((b) => b.externalId === item.id)) {
      return;
    }
    dispatch(
      addProduct({
        ...(item as RawItem),
        externalId: item.id,
      } as Product)
    );
    setToastMsg(t("toast-msg-save"));
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };
  const remove = (item: Product) => {
    dispatch(
      removeProduct({
        id: myProducts.find((b) => b.externalId === item.id)?.id,
      })
    );
    setToastVisible(true);
    setToastMsg(t("toast-msg-remove"));
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };
  const onMyList = (item: Item) =>
    myProducts.find((b) => b.externalId === item.id) != undefined;

  const body = (item: Product) => (
    <div className={stylesItem.listItem}>
      <span>{item.description}</span>
      <img className={stylesItem.image} src={item.image} />
      <span>{item.price}€</span>
      <Button
        icon={onMyList(item) ? faMinus : faPlus}
        padding="0"
        border="none"
        onClick={() => (onMyList(item) ? remove(item) : add(item))}
      />
    </div>
  );

  useEffect(() => {
    setLoading(true);
    search(ApiType.PRODUCTS)
      .then((items) => {
        setProducts(items as Product[]);
        setLoading(false);
      })
      .catch((e: Error) => {
        console.log("Something went wrong here " + e);
        setLoading(false);
      });
  }, []);

  return (
    <div className={stylesContent.content}>
      {toastVisible ? <Toast message={toastMsg || ""} /> : ""}
      {loading ? <Spinner /> : ""}
      {products.map((item: Product, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
    </div>
  );
};
export default FakeShop;
