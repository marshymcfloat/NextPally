export default function SelectedServices({
  quantity,
  name,
  value,
  setDetails,
}) {
  const total = quantity * value;

  function handleQuantityChange(identifier) {
    setDetails((prevState) => {
      const newServices = prevState.services
        .map((service) =>
          service.name === name
            ? {
                ...service,
                quantity:
                  identifier === "inc"
                    ? service.quantity + 1
                    : service.quantity - 1,
              }
            : service,
        )
        .filter((service) => service.quantity > 0); // Remove service if quantity is 0

      return {
        ...prevState,
        services: newServices,
      };
    });
  }

  return (
    <div className="my-2 flex items-center justify-between px-2">
      <div className="flex w-[70%] items-center justify-between">
        <p className="flex items-center">x{quantity}</p>
        <div className="flex flex-col justify-center">
          <p className="text-md w-[250px]">{name}</p>
          <div className="flex w-[50%] justify-between text-xs">
            <p>P{value}</p>
          </div>
        </div>
      </div>
      <div className="flex w-[30%] items-center justify-around">
        <div className="flex w-[50%] items-center justify-around">
          <button
            type="button"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-md border-[2px] border-customGreen01"
            onClick={() => handleQuantityChange("dec")}
          >
            -
          </button>
          <button
            type="button"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-md border-[2px] border-customGreen01 bg-customGreen01 text-customBGColor"
            onClick={() => handleQuantityChange("inc")}
          >
            +
          </button>
        </div>
        <p className="flex items-center">P{total}</p>
      </div>
    </div>
  );
}
