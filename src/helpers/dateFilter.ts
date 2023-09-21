import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];

  const [currentYear, currentMonth] = date.split("-");

  for (let item in list) {
    const year = list[item].date.getFullYear();
    const month = list[item].date.getMonth();

    if (parseInt(currentYear) === year && parseInt(currentMonth) === month) {
      newList.push(list[item]);
    }
  }
  return newList;
};

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();

  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return `${months[parseInt(month) - 1]} de ${year}`
}