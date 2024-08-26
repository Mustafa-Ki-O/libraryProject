import Empty from "../helper/emptyPage";
import HistoryTable from "../components/historyTable/historyTable";
const History = () => {
   
    const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];

    const validStorage = localStorageItems.length > 0 ? localStorageItems.map((item) => {
      return Object.values(item).every((value) => value !== '')
    }) : [];
    
    return (
      <>
        {validStorage.every(Boolean) ? (<HistoryTable/>):(<Empty/>)}
      </>
    )
}
export default History