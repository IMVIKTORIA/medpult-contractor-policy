import React, { useEffect, useState } from "react";
import Panel from "./Panel/Panel";
import {
  ListColumnData,
  ItemData,
} from "../../UIKit/CustomList/CustomListTypes";
import CustomList from "../../UIKit/CustomList/CustomList";
import Scripts from "../shared/utils/clientScripts";
import utils, { redirectSPA } from "../shared/utils/utils";

/** Проект письма */
function PolicyPanel() {
  /** Скачать файл */
  const onSaveFile = async () => {
    console.log("качаем файл");
  };

  /** Обработчик нажатия на номер полиса */
  const onClickNumberPolicy = async (props: ItemData) => {
    const policyId = props.info;
    if (!policyId) return;

    // Запись текущего url в localStorage
    window.localStorage.setItem(
      "medpultPathBefore",
      window.location.pathname + window.location.search
    );

    // Получение id договора по идентификатору полиса
    const treatyId = await Scripts.getTreatyIdByPolicyId(policyId)
    if(!treatyId) return;

    // Переход на договор
    localStorage.setItem("medpult-treaty-id", treatyId);
    const link = Scripts.getTreatyPageCode();
    redirectSPA(link);
  };

  /** Колонки списка */
  const columns = [
    new ListColumnData({
      name: "Полис",
      code: "policy",
      fr: 1,
      isLink: true,
      onClick: onClickNumberPolicy,
    }),
    new ListColumnData({
      name: "Срок действия",
      code: "termPolicy",
      fr: 1,
    }),
    new ListColumnData({
      name: "Продукт",
      code: "productPolicy",
      fr: 1,
    }),
    new ListColumnData({
      name: "",
      code: "fileId",
      // fr: 0.5,
      fixedWidth: "56px",
      contentPadding: "13px 16px",
      isIcon: true,
      isLink: true,
      onClick: onSaveFile,
    }),
  ];

  //количество полисов
  const [elementsCount, setElementsCount] = useState<number>(0);
  const fetchElementsCount = async () => {
    const count = await Scripts.getCountPolicy();
    setElementsCount(count);
  };
  // Вычислить количество полисов
  useEffect(() => {
    fetchElementsCount();
  }, []);

  return (
    <div>
      <Panel label={`Страховые полисы (${elementsCount})`} isOpen={false}>
        <div style={{ padding: "0" }}>
          <CustomList
            columnsSettings={columns}
            getDataHandler={Scripts.getPolicy}
            isScrollable={false}
          />
        </div>
      </Panel>
    </div>
  );
}

export default PolicyPanel;
