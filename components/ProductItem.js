import { ResourceList, Stack, TextStyle, Thumbnail } from "@shopify/polaris";
import React from "react";
import { HideMinor } from "@shopify/polaris-icons";

function ProductItem({product}) {
    console.log(product);
    const image = product.images[0] ? product.images[0]?.originalSrc : HideMinor;
    const media = <Thumbnail source={image} />;
    const price = product.variants[0].price;
    return (
    <ResourceList.Item media={media} id={product.id} accessibilityLabel={`View details for ${product.title}`}
    >
    <Stack>
        <Stack.Item fill>
            <TextStyle variation="strong">
              <h4>  {product.title}</h4>
            </TextStyle>
        </Stack.Item>
        <Stack.Item>
        <p>${price}</p>
        </Stack.Item>
    </Stack>
    {product.title}
    </ResourceList.Item>
    );
}

export default ProductItem;