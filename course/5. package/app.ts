import { init, exit } from "myPackage";
import { init2, exit2 } from "./jscode";

init({ url: "dd" });

exit(1);

init2({ debug: true, url: "ddd" });
