import axios from "axios";

const prefix = "https://api.trello.com";
const jsonBinPrefix = "https://api.jsonbin.io/v3"
const idList = process.env.REACT_APP_TRELLO_ID_BOARD
const serviceKey = process.env.REACT_APP_TRELLO_API_KEY
const token = process.env.REACT_APP_TOKEN
const jsonBinApiKey = '$2b$10$QSkX1Sl9PqqDTN6iqNgVluvIFg.n7l8AqGtJKzC.Rb8SXUowvJosK';
const collectionId = '63f380edebd26539d081e62d'

export const serviceSaveExpense = async (
  name,
  date,
  description,
  amount,
  dismiss
) => {
  const approved = dismiss === "0" ? 0 : 1;
  amount = parseInt(amount);
  const res = await axios.post(`${prefix}/1/cards?idList=${idList}&key=${serviceKey}&token=${token}`, 
  {
    name: `Card_${name}`,
    desc: `- name: ${name}\n- date: ${date}\n- description: ${description}\n- amount: ${amount}\n- approved: ${approved}`,
    pos: "top"
  });
  await axios.post(`${jsonBinPrefix}/b`, 
  {
    name,
    date,
    description,
    amount,
    approved
  }, 
  {
    headers: {
      'X-Bin-Private': true,
      'X-Bin-Name': `${name}_BIN`,
      'X-Master-Key': jsonBinApiKey,
      'X-Collection-Id': collectionId
    }
  });
};

export const serviceFetchExpense = async () => {
  const res = await axios.get(`${jsonBinPrefix}/c/${collectionId}/bins`, {
    headers: {
      'X-Master-Key': jsonBinApiKey
    }
  });
  const data = await res.data;
  return data;
};

export const serviceFetchExpenseById = async (id) => {
  const res = await axios.get(`${jsonBinPrefix}/b/${id}`, {
    headers: {
      'X-Master-Key': jsonBinApiKey
    }
  });
  const data = await res.data;
  return data;
};

export const serviceFetchExpenseByMonthYear = async (month, year) => {
  const prefix = "/expenses";
  const res = await axios.get(`${prefix}/${year}/${month}`);
  const data = await res.data;
  return data;
};

export const serviceUpdateExpense = async (
  id,
  name,
  date,
  description,
  amount,
  approved
) => {
  const prefix = "/expenses";
  approved = approved === "0" ? 0 : 1;
  amount = parseInt(amount);
  const res = await axios.put(`${jsonBinPrefix}/b/${id}`, 
  {
    id,
    name,
    date,
    description,
    amount,
    approved,
  },
  {
    headers: {
      'X-Master-Key': jsonBinApiKey
    }
  });
  const data = await res.data;
  debugger
  return data;
};

export const serviceDeleteExpense = async (id) => {
  const res = await axios.delete(`${jsonBinPrefix}/b/${id}`, {
    headers: {
      'X-Master-Key': jsonBinApiKey
    }
  });
  const data = await res.data;
  return data;
};
