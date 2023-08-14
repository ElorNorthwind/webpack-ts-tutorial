import { ReduxStoreWithManager, StateSchema, ThunkConfig, type StateSchemaKey } from "./config/StateSchema";
import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type ReduxStoreWithManager,
    type AppDispatch,
    type ThunkConfig,
    type StateSchemaKey
};
