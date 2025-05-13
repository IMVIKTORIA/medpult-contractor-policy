import {
  FetchData,
  ItemData,
  ItemDataString,
} from "../../../UIKit/CustomList/CustomListTypes";
import { FilesData, PolicyListData } from "../types";

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
            files:
              Math.random() > 0.5
                ? [
                    {
                      ...new FilesData(),
                      fileDownloadURL:
                        "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
                      nameFiles: new ItemDataString("file1"),
                    },
                    {
                      ...new FilesData(),
                      fileDownloadURL:
                        "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
                      nameFiles: new ItemDataString("file2"),
                    },
                  ]
                : undefined,
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

/** Установить идентификатор застрахованного для перехода на форму договора */
function getContractId(): string {
  return "contract_id"
}

export default {
  getPolicy,
  getCountPolicy,
  getTreatyPageCode,
  getTreatyIdByPolicyId,
  getContractId,
};
