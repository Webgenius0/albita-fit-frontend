import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@/assets/fonts/satoshi/stylesheet.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
        <Toaster />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
