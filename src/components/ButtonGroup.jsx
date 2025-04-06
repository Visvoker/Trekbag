
import Button from "./Button";

import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveItems
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete}>Mark all as complete</Button>
      <Button onClick={handleMarkAllAsIncomplete}>Mark all as incomplete</Button>
      <Button onClick={handleResetToInitial}>Reset to initial</Button>
      <Button onClick={handleRemoveItems}>Remove all items</Button>
    </section>
  )
}

