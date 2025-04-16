import React, { useEffect, useRef, useState } from "react";
import { ItemData, ListColumnData } from "../CustomListTypes";
import icons from "../../../App/shared/icons";

interface ListColumnProps extends ListColumnData {
  data: ItemData<any>;

  listRef?: React.RefObject<HTMLDivElement>;
}

function CustomListRowColumn(props: ListColumnProps) {
  const { fr, data, isLink, onClick, isIcon } = props;

  const onClickColumn =
    isLink && onClick
      ? () => {
          onClick(data);
        }
      : () => {};
  const iconToShow = icons.Download;

  return (
    <div
      className={
        isLink
          ? "custom-list-row-column custom-list-row-column__link"
          : "custom-list-row-column"
      }
      style={{
        flex: fr,
        overflow: "visible",
        whiteSpace: "normal",
        wordBreak: "break-word",
      }}
    >
      <span
        title={isIcon ? "вложение" : data.value}
        onClick={onClickColumn}
        style={{ cursor: isIcon ? "pointer" : "default" }}
      >
        {isIcon && iconToShow}
        {!isIcon && data.value}
      </span>
    </div>
  );
}

export default CustomListRowColumn;
