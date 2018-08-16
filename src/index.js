import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store from "./js/store/index";
import { persistor } from "./js/store/index";
import App from "./js/containers/App";

//expose the persistor to the window so we can flush the local storage through the console...
window.persistor = persistor;

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("app")
);
