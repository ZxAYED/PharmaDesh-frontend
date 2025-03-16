import { Button } from "../ui/button";

const PDButton = ({ name }: { name: string }) => {
  return (
    <Button type="submit" className="  button ">
      <span className="span">{name}</span>
    </Button>
  );
};

export default PDButton;
