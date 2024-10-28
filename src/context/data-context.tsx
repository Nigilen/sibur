// 'use client'

// import { createContext, FC, use, useEffect, useState } from "react";
// import { getSettings } from "../api/internal";

// type DataContextType = {
//     data: any;
// }

// type DataProviderProps = {
//     children: React.ReactNode;
// }

// export const DataContext = createContext<DataContextType>({
//   data: null
// });




// export const DataProvider: FC<DataProviderProps> = async ({children}) => {
//   const data = await getSettings();
//   console.log(data.data[0])

//   return (
//     <DataContext.Provider value={{data}}>
//       {children}
//     </DataContext.Provider>
//   )
// }