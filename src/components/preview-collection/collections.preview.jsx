import React from "react";

import "../preview-collection/collections.preview.scss";
import CollectionItem from "../collection-item/collection.item";

export const CollectionsPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
    </div>
  </div>
);
