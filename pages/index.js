import { ResourcePicker} from "@shopify/app-bridge-react";
import React, { useEffect, useState } from "react";
import { EmptyState, Layout, Page, TextStyle } from "@shopify/polaris";
import ProductList from "../components/ProductList";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState([]);
  useEffect(() => {
    const ids = products.map(product => {
      return {
        id: product.id
      }
    });
    setProductsId(ids);
  },[products])
  function handleProductSelection(payload){
    setIsOpen(false); 
    setProducts(payload.selection);
  }
  return (
    <>
    <ResourcePicker 
    resourceType="Product" 
    open={isOpen} 
    onCancel={() => setIsOpen(false)}
    onSelection={handleProductSelection}
    initialSelectionIds={productsId}
    />
    {products.length > 0 ? (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product",
        onAction: () => setIsOpen(true),
      }}
    >
    <ProductList products={products} />
    </Page>
     ) : (
      <EmptyState
        heading="Manage the product you want to display"
        action={{
          content: "Select products",
          onAction: () => setIsOpen(true),
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Select the products you want to use on you banner</p>
      </EmptyState>
  )}
  </>
  );
}

export default index;