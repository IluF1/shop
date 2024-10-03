import { CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

import styles from './Spinner.module.css'

const override: CSSProperties = {
    borderColor: "rgb(59, 138, 106)",
};
export const Spinner = () => {
    return (
        <div className={styles.container}>
            <SyncLoader
                color={"rgb(59, 138, 106)"}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};
