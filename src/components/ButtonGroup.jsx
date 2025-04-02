import Button from "./Button";

export default function ButtonGroup({
  handleRemoveItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete}>Mark all as complete</Button>
      <Button onClick={handleMarkAllAsIncomplete}>Mark all as incomplete</Button>
      <Button onClick={handleResetToInitial}>Reset to initial</Button>
      <Button onClick={handleRemoveItems}>Remove all items</Button>
    </section>
  )
}

