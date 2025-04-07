
import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state)=>state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state)=>state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state)=>state.resetToInitial);
  const removeAllItems = useItemsStore((state)=>state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete}>Mark all as complete</Button>
      <Button onClick={markAllAsIncomplete}>Mark all as incomplete</Button>
      <Button onClick={resetToInitial}>Reset to initial</Button>
      <Button onClick={removeAllItems}>Remove all items</Button>
    </section>
  )
}

