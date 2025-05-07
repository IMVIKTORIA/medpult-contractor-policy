import {
  FetchData,
  ItemData,
  ItemDataString,
} from "../../../UIKit/CustomList/CustomListTypes";
import { PolicyListData } from "../types";

/** Заглушка ожидания ответа сервера */
function randomDelay() {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

/** Получение списка полисов */
async function getPolicy(): Promise<FetchData<PolicyListData>> {
  await randomDelay();

  const mockData: PolicyListData = {
    policy: new ItemData({ value: "008WS000000001", info: "test" }),
    termPolicy: new ItemDataString("28.02.2024-28.03.2024"),
    productPolicy: new ItemData({ value: "ЗОК-ФЛ-СбОЛ", info: "test" }),
  };

  return {
    items: Array(3)
      .fill(0)
      .map((data, index) => {
        return {
          id: String(index),
          data: {
            ...new PolicyListData(mockData),
            fileId: Math.random() > 0.5 ? "test" : undefined
          },
        };
      }),
    hasMore: false,
  };
}
/** Получить количество полисов*/
async function getCountPolicy() {
  return 3;
}

/** Получить id договора по id полиса */
async function getTreatyIdByPolicyId(policyId: string): Promise<string | undefined> {
  return "placehloder"
}

declare const Context: any;
/** Получение кода страницы договора */
function getTreatyPageCode(): string {
  return Context.data.insurance_treaty_page_code ?? "";
}
export default {
  getPolicy,
  getCountPolicy,
  getTreatyPageCode,
  getTreatyIdByPolicyId,
};
