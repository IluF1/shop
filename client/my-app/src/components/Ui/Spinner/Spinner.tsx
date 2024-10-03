import { CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "rgb(59, 138, 106)",
};
export const Spinner = () => {
    return (
        <SyncLoader
            color={"rgb(59, 138, 106)"}
            cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};
