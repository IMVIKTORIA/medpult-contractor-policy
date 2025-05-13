import React, { useEffect, useRef, useState } from "react";
import { ItemData, ListColumnData } from "../CustomListTypes";
import icons from "../../../App/shared/icons";

interface ListColumnProps extends ListColumnData {
  data: ItemData<any>;

  listRef?: React.RefObject<HTMLDivElement>;
}

function CustomListRowColumn(props: ListColumnProps) {
  const { fr, fixedWidth, contentPadding, data, isLink, onClick, isIcon } = props;

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
          ? "custom-list-row-column-mcp custom-list-row-column-mcp__link"
          : "custom-list-row-column-mcp"
      }
      style={{
        overflow: "visible",
        whiteSpace: "normal",
        wordBreak: "break-word",
        ...(fixedWidth ? { width: fixedWidth } : { flex: fr }),
        ...(contentPadding && {padding: contentPadding})
      }}
    >
      <span
        title={isIcon ? "вложение" : data.value}
        onClick={onClickColumn}
        style={{ cursor: isIcon ? "pointer" : "default" }}
      >
        {isIcon && (data as any)?.length > 0 && iconToShow}
        {!isIcon && data.value}
      </span>
    </div>
  );
}

export default CustomListRowColumn;
