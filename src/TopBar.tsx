import ABMI from "./images/ABMI.png";
import { Menu } from "lucide-react";
import { Button } from "./component/Button";

export function TopBar() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 item-center flex-shrink-1">
        <Button>
          <Menu />
        </Button>
        {/* <a href="/">
          <img src={ABMI} className="h-14" />
        </a> */}
      </div>
      {/* <div></div> */}
    </div>
  );
}
