import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef).then((doc) => {
      setItem({ id: doc.id, ...doc.data() });
    });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...item} />
    </div>
  );
};
