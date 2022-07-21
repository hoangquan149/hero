const KEY: string = "heroes";

export default function useLocalStorage() {
   const save = (data: any, key?: string) => {
      if (!data) return;
      if (localStorage) {
         const dataJson = JSON.stringify(data);
         if (key) {
            localStorage.setItem(key, dataJson);
         } else {
            localStorage.setItem(KEY, dataJson);
         }
      }
   };

   const get = (key: string = KEY) => {
      const dataJson = localStorage?.getItem(key);
      return dataJson !== null ? JSON.parse(dataJson) : [];
   };

   return {
      save,
      get,
   };
}
