import React from "react";
import styles from "./ingredients-group.module.sass";
import IngredientsItem from "../ingredients-item/ingredients-item";
import { ingredientPropTypes } from "../../../utils/types";
import PropTypes from "prop-types";

// interface IngredientsGroup {
//   type: string;
//   title: string;
//   data: object;
// }

const IngredientsGroup = (props: any) => {
  const { type, title, data } = props;
  //console.log(data);
  return (
    <div id={type} className={`${styles.ingredientsGroup}`}>
      <div
        className={`text text_type_main-medium ${styles.ingredientsGroup__title}`}
      >
        {title}
      </div>
      <div className={`ml-4 mr-4 mt-6 ${styles.ingredientsGroup__items}`}>
        {data.map((item: any) => {
          return <IngredientsItem key={item._id} data={item} />;
        })}
      </div>
    </div>
  );
};

IngredientsGroup.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default IngredientsGroup;
