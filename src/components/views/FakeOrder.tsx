import { ReactElement, useState } from "react";
import { useContentStyles, useListItemStyles } from "./styles";
import { Product } from "@Types/types";
import Card from "@Components/tools/Card";
import { faMinus, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { removeProduct } from "@Store/dataSlices";
import Toast from "@Components/tools/Toast";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { useTranslation } from "react-i18next";
import Placeholder from "@Components/tools/Placeholder";

const FakeOrder = (): ReactElement => {
  const { t } = useTranslation();
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const stylesItem = useListItemStyles(theme);
  const [toastVisible, setToastVisible] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const profiIcon = faUserInjured;
  const totalPrice = products
    .filter((p: Product) => !Number.isNaN(p.price))
    .map((p: Product) => Number(p.price))
    .reduce((prev, cur) => prev + cur, 0);

  const remove = (item: Product) => {
    dispatch(removeProduct({ id: item.id }));
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };

  const body = (item: Product) => (
    <div className={stylesItem.listItem}>
      <span>{item.description}</span>
      <img className={stylesItem.image} src={item.image} />
      <span>{item.price}€</span>
      <Button
        icon={faMinus}
        padding="0"
        border="none"
        onClick={() => remove(item)}
      />
    </div>
  );

  return (
    <div className={stylesContent.content}>
      {toastVisible ? <Toast message={t("toast-msg-remove")} /> : ""}
      {products.length < 1 ? (
        <Placeholder content={t("no-products-placeholder")} />
      ) : (
        ""
      )}
      {products.map((item: Product, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
      <div className={stylesContent.bottomline}>
        <span>{t("order-price-label")}</span>
        {totalPrice} €
      </div>
    </div>
  );
};
export default FakeOrder;
